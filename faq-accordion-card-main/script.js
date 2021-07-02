const details = Array.from(document.querySelectorAll("details"));

details.forEach((detail) => {
  detail.addEventListener("click", (e) => {
    const active = details.find((d) => d.open);
    if (!e.currentTarget.open && active) {
      active.open = false;
    }
  });
});
