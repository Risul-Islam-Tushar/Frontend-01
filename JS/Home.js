// Sidebar for left Smaller Device
const sidebar_s = document.getElementById("sidebar-s");
const openLeftSidebarButton_s = document.querySelector(
  ".open-left-sidebar-s-button"
);
const closeSidebarButton_s = document.querySelector(".close-sidebar-s-button");

openLeftSidebarButton_s.addEventListener("click", () => {
  sidebar_s.classList.add("show-sidebar-s");
});

closeSidebarButton_s.addEventListener("click", () => {
  sidebar_s.classList.remove("show-sidebar-s");
});

// Sidebar for right Smaller Device
const sidebar_r = document.getElementById("sidebar-r");
const openRightSidebarButton_s = document.querySelector(
  ".open-right-sidebar-s-button"
);
const closeRightSidebarButton_s = document.querySelector(
  ".close-right-sidebar-s-button"
);

openRightSidebarButton_s.addEventListener("click", () => {
  sidebar_r.classList.add("show-sidebar-s-right");
});

closeRightSidebarButton_s.addEventListener("click", () => {
  sidebar_r.classList.remove("show-sidebar-s-right");
});
