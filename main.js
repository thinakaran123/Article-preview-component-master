width = screen.width;
if (screen.width <= 640) {
  document.getElementById("shareicon1").addEventListener("click", () => {
    document.getElementById("profilesec").style.display = "none";
    document.getElementById("shareicon1").style.display = "none";
    document.getElementById("sharesec1").classList.add("hidden");
    document.getElementById("secondshareoption").style.display = "grid";
  });
}
if (screen.width >= 640) {
  document.getElementById("shareicon1").addEventListener("click", () => {
    document.getElementById("tooltiptext").style.visibility = "visible";
    document.getElementById("tooltiptext").style.opacity = 1;
    document.getElementById("shareicon1").style.backgroundColor =
      "hsl(217, 19%, 35%)";
  });
}
