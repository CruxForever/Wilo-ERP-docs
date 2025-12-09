// docs/js/init_mermaid.js
(function () {
  const log = (...a) => console.log("[Mermaid]", ...a);
  const TYPE_RE = /^(?:flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|journey|pie|mindmap|timeline)\b/;

  function convertLegacyCodeBlocks() {
    document.querySelectorAll("pre > code.language-mermaid").forEach(code => {
      const pre = code.parentElement;
      const div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.textContent.trim();
      pre.replaceWith(div);
    });
  }

  function unwrapCodeInsideMermaid() {
    document.querySelectorAll("div.mermaid").forEach(div => {
      const code = div.querySelector("code");
      if (code) div.textContent = code.textContent.trim();
    });
  }

  async function render() {
    if (!window.mermaid) { log("⚠️ mermaid not found"); return; }

    convertLegacyCodeBlocks();
    unwrapCodeInsideMermaid();

    // Отфильтруем валидные и не отрендеренные блоки
    const blocks = Array.from(document.querySelectorAll("div.mermaid"))
      .filter(el => !el.dataset.rendered)
      .filter(el => {
        const txt = (el.textContent || "").trim();
        return txt && TYPE_RE.test(txt); // валидный заголовок диаграммы
      });

    if (blocks.length === 0) return;

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "default"
    });

    // Рендерим по одному, ловим ошибки локально
    for (const el of blocks) {
      const src = el.textContent.trim();
      try {
        await window.mermaid.parse(src); // валидация без рендера
        const { svg } = await window.mermaid.render("mmd-" + Math.random().toString(36).slice(2), src);
        el.innerHTML = svg;
        el.dataset.rendered = "1";
      } catch (e) {
        console.warn("[Mermaid] skip block:", e?.message || e);
      }
    }
    log("✅ rendered", blocks.length);
  }

  document.addEventListener("DOMContentLoaded", () => { log("init loaded"); render(); });
  if (window.document$) window.document$.subscribe(() => { log("route change"); render(); });
})();
