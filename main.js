const g_flower = document.querySelector(".g-flower");
const burger = document.querySelector(".burger-menu");
const burger_checkbox = document.querySelector(".burger-menu > input");
const sidebar = document.querySelector(".sidebar");

function toggle_burger() {
  sidebar?.classList.toggle("active");

  if (sidebar?.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    burger_checkbox.checked = true;
  } else {
    document.body.style.overflow = "";
    burger_checkbox.checked = false;
  }
}

g_flower?.addEventListener("click", () => {
  if (document.documentElement.clientWidth < 1000) toggle_burger();
});

burger?.addEventListener("change", () => toggle_burger());
