document.addEventListener("DOMContentLoaded", () => {
  const currentSlide = parseInt(document.body.dataset.slide);

  // ????????? ??? ??????? + CTRL
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "ArrowRight") {
      window.location.href = `slide${currentSlide + 1}.html`;
    }
    if (e.ctrlKey && e.key === "ArrowLeft") {
      window.location.href = `slide${currentSlide - 1}.html`;
    }

    // Ctrl + N -> ???????? ?? ????? N
    if (e.ctrlKey && /^[0-9]$/.test(e.key)) {
      const target = parseInt(e.key);
      window.location.href = `slide${target}.html`;
    }
  });
});
