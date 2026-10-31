// Close the overflow menu after choosing a link, including same-page sections.
const navigation = document.getElementById("site-nav");

if (navigation) {
  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || !navigation.contains(link)) return;

    navigation.querySelector(".hidden-links").classList.add("hidden");
    navigation.querySelector("button").classList.remove("close");
  });
}

// Keep the existing color-theme control available in the mobile section bar.
const mobileThemeToggle = document.querySelector("[data-mobile-theme-toggle]");
if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener("click", () => {
    document.getElementById("theme-toggle").click();
  });
}
