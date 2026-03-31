const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Close all other sections
    document.querySelectorAll(".content").forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

    // Toggle current section
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
