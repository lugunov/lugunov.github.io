/* Progressive enhancement for the Journal category filters. */

(() => {
  const journalPage = document.querySelector("[data-journal-page]");

  if (!journalPage) {
    return;
  }

  const filterBar = journalPage.querySelector("[data-filter-bar]");
  const filterButtons = Array.from(journalPage.querySelectorAll("[data-filter]"));
  const entries = Array.from(journalPage.querySelectorAll("[data-category]"));
  const status = journalPage.querySelector("[data-filter-status]");
  const categoryLabels = {
    all: "All",
    work: "Work & Ideas",
    building: "Building",
    life: "Life"
  };
  const validCategories = new Set(Object.keys(categoryLabels));

  const getRequestedFilter = () => {
    const requestedFilter = new URL(window.location.href).searchParams.get("filter");
    return validCategories.has(requestedFilter) ? requestedFilter : "all";
  };

  const updateCounts = () => {
    filterButtons.forEach((button) => {
      const category = button.dataset.filter;
      const count = category === "all"
        ? entries.length
        : entries.filter((entry) => entry.dataset.category === category).length;
      const countElement = button.querySelector("[data-filter-count]");

      if (countElement) {
        countElement.textContent = count;
      }
    });
  };

  const applyFilter = (category, updateUrl = true) => {
    const activeCategory = validCategories.has(category) ? category : "all";
    let visibleCount = 0;

    entries.forEach((entry) => {
      const isVisible = activeCategory === "all" || entry.dataset.category === activeCategory;
      entry.hidden = !isVisible;
      visibleCount += isVisible ? 1 : 0;
    });

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === activeCategory));
    });

    const entryLabel = visibleCount === 1 ? "entry" : "entries";
    status.textContent = activeCategory === "all"
      ? `Showing all ${visibleCount} ${entryLabel}`
      : `Showing ${visibleCount} ${entryLabel} · ${categoryLabels[activeCategory]}`;

    if (updateUrl) {
      const url = new URL(window.location.href);

      if (activeCategory === "all") {
        url.searchParams.delete("filter");
      } else {
        url.searchParams.set("filter", activeCategory);
      }

      window.history.replaceState({}, "", url);
    }
  };

  updateCounts();
  filterBar.hidden = false;
  applyFilter(getRequestedFilter(), false);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  window.addEventListener("popstate", () => applyFilter(getRequestedFilter(), false));
})();
