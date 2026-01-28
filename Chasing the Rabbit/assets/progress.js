(function () {

  const script = document.currentScript;

  const REQUIRED = Number(script.dataset.required);
  const CURRENT  = Number(script.dataset.current);

  const progress = Number(localStorage.getItem("rabbit-progress")) || 0;
  const finished = localStorage.getItem("rabbit-finished") === "true";

  // If already finished → free exploration
  if (finished) {
    return;
  }

  // Clue 1 is always accessible
  if (CURRENT === 1) {
    localStorage.setItem("rabbit-progress", "1");
    return;
  }

  // Normal progression
  if (progress >= REQUIRED) {

    // advance only if this is new
    if (CURRENT > progress) {
      localStorage.setItem("rabbit-progress", String(CURRENT));
    }

    // mark finished at the end
    if (CURRENT === 12) {
      localStorage.setItem("rabbit-finished", "true");
    }

  }

  // Too early → blocked
  else {
    document.body.classList.add("blocked");
  }

})();

