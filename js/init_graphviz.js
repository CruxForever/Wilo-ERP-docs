// docs/js/init_graphviz.js
(function () {
  const log = (...args) => console.log("[Graphviz]", ...args);
  let vizInstance;

  function hasRuntime() {
    return typeof Viz !== "undefined" && typeof Module !== "undefined" && typeof render !== "undefined";
  }

  function getViz() {
    if (!vizInstance) {
      if (!hasRuntime()) throw new Error("Viz.js runtime not available");
      vizInstance = new Viz({ Module, render });
    }
    return vizInstance;
  }

  function resetViz() {
    vizInstance = undefined;
  }

  async function loadDot(el) {
    if (el.__graphvizInline) return el.__graphvizInline.trim();

    const src = el.dataset.graphvizSrc;
    if (!src) throw new Error("No DOT source defined");

    if (el.__graphvizCache) return el.__graphvizCache;

    const response = await fetch(src);
    if (!response.ok) throw new Error(`Failed to load ${src} (${response.status})`);
    const text = (await response.text()).trim();
    if (!text) throw new Error(`DOT source ${src} is empty`);
    el.__graphvizCache = text;
    return text;
  }

  async function renderTarget(el) {
    el.classList.add("graphviz--loading");
    try {
      const dot = await loadDot(el);
      const svg = await getViz().renderString(dot);
      el.innerHTML = svg;
      el.dataset.graphvizRendered = "1";
    } catch (error) {
      log("render failed", error);
      const pre = document.createElement("pre");
      pre.className = "graphviz-error";
      pre.textContent = error?.message || String(error);
      el.innerHTML = "";
      el.appendChild(pre);
      el.dataset.graphvizRendered = "error";
      resetViz();
    } finally {
      el.classList.remove("graphviz--loading");
    }
  }

  function collectTargets() {
    const targets = new Set();

    document.querySelectorAll("script[type='text/vnd.graphviz']").forEach(script => {
      if (script.dataset.graphvizProcessed) return;
      script.dataset.graphvizProcessed = "1";

      let container = null;
      const selector = script.dataset.graphvizTarget;
      if (selector) container = document.querySelector(selector);
      if (!container) {
        const previous = script.previousElementSibling;
        if (previous && previous.classList && previous.classList.contains("graphviz")) {
          container = previous;
        } else {
          container = document.createElement("div");
          container.className = "graphviz";
          script.parentNode.insertBefore(container, script);
        }
      }

      container.__graphvizInline = script.textContent || "";
      if (!container.dataset.graphvizRendered || container.dataset.graphvizRendered === "error") {
        targets.add(container);
      }
    });

    document.querySelectorAll("[data-graphviz-src]").forEach(el => {
      if (!el.classList.contains("graphviz")) el.classList.add("graphviz");
      if (!el.dataset.graphvizRendered || el.dataset.graphvizRendered === "error") {
        targets.add(el);
      }
    });

    return Array.from(targets);
  }

  async function renderAll() {
    if (!hasRuntime()) {
      log("skip render: Viz.js not loaded");
      return;
    }

    const targets = collectTargets();
    if (targets.length === 0) return;

    for (const el of targets) {
      await renderTarget(el);
    }
  }

  function onReady(handler) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handler, { once: true });
    } else {
      handler();
    }
  }

  function init() {
    renderAll();
  }

  onReady(init);
  if (window.document$) window.document$.subscribe(init);
})();
