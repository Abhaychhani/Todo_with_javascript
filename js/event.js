class Event {
  constructor(root) {
    this.root = root;

    document.addEventListener("click", (e) => {
      if (
        this.root.themeColors.classList.contains("active") &&
        e.target !== this.root.themeBtn &&
        e.target !== this.root.themeColors &&
        !Array.from(this.root.allSpan).includes(e.target)
      ) {
        this.root.themeColors.classList.remove("active");
      }
    });
    this.root.themeBtn.addEventListener("click", () => this.root.toggleThemeDialog());
    this.root.themeColors.addEventListener("click", (event) => this.root.setTheme(event));
    this.root.addTaskBtn.addEventListener("click", () => {
      this.root.taskDialog.setAttribute("style", "visibility:visible;");
    });
  }
}
export default Event;
