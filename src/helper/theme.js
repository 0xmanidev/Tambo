const STORAGE_KEY = "tambo-theme";

export function setupTheme() {
    const select = document.getElementById("themeSelect");

    const saved = localStorage.getItem(STORAGE_KEY) || "dark";
    applyTheme(saved);

    select.value = saved;

    select.addEventListener("change", () => {
        applyTheme(select.value);
        localStorage.setItem(STORAGE_KEY, select.value);
    });
}
function applyTheme(theme) {
    document.body.className = theme === "dark" ? "" : theme;
}
