// Copy-to-clipboard buttons for every <pre> code block.
// Buttons appear on hover/focus; fade out after a short "copied" confirmation.
(function () {
  if (!navigator.clipboard) return;

  const blocks = document.querySelectorAll("article .post-content pre, article .page-content pre");
  blocks.forEach((pre) => {
    if (pre.dataset.copyReady) return;
    pre.dataset.copyReady = "1";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.textContent = "copy";

    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code") || pre;
      try {
        await navigator.clipboard.writeText(code.innerText.replace(/\n$/, ""));
        btn.textContent = "copied";
        btn.classList.add("copy-btn--done");
      } catch (_) {
        btn.textContent = "error";
      }
      setTimeout(() => {
        btn.textContent = "copy";
        btn.classList.remove("copy-btn--done");
      }, 1500);
    });

    pre.appendChild(btn);
  });
})();
