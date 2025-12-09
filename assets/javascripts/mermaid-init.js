// docs/assets/javascripts/mermaid-init.js
(function () {
  function boot() {
    if (!window.mermaid) return;
    window.mermaid.initialize({
      startOnLoad: true,
      securityLevel: "loose" // помогает, если в окружении строгий CSP
    });
  }

  // Инициализируем сразу
  document.addEventListener("DOMContentLoaded", boot);

  // Инициализируем повторно при SPA-навигации Material
  if (window.document$) {
    window.document$.subscribe(boot);
  }
})();