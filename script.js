// Small scroll reveal — intentionally dependency-free for GitHub Pages.
const items = document.querySelectorAll('.feature-card, .gallery figure, .download-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach(item => observer.observe(item));


// Copy the ScriptShade loader to the clipboard.
const copyButton = document.getElementById("copyScript");
const scriptCode = document.getElementById("scriptCode");

if (copyButton && scriptCode) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(scriptCode.textContent.trim());
      copyButton.innerHTML = 'Copied! <span>✓</span>';
      setTimeout(() => {
        copyButton.innerHTML = 'Copy Script <span>⧉</span>';
      }, 1600);
    } catch {
      // Fallback for browsers that block navigator.clipboard.
      const range = document.createRange();
      range.selectNodeContents(scriptCode);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();

      copyButton.innerHTML = 'Copied! <span>✓</span>';
      setTimeout(() => {
        copyButton.innerHTML = 'Copy Script <span>⧉</span>';
      }, 1600);
    }
  });
}
