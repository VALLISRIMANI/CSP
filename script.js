function toggleVideoList(toggleElement) {
  const container = toggleElement.nextElementSibling;
  container.style.display = container.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".video-links-container a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const videoId = link.dataset.videoId;
      const iframe = document.querySelector("#video-modal iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      document.getElementById("video-modal").style.display = "flex";
    });
  });

  document.getElementById("close-video").addEventListener("click", () => {
    const iframe = document.querySelector("#video-modal iframe");
    iframe.src = "";
    document.getElementById("video-modal").style.display = "none";
  });

  const englishMain = document.getElementById("english-main");
  const teluguMain = document.getElementById("telugu-main");
  const languageSelectors = document.querySelectorAll("select");

  languageSelectors.forEach((selector) => {
    selector.addEventListener("change", (e) => {
      const selected = e.target.value;

      if (selected === "telugu") {
        englishMain.classList.remove("visible");
        englishMain.classList.add("hidden");
        teluguMain.classList.remove("hidden");
        teluguMain.classList.add("visible");
      } else {
        teluguMain.classList.remove("visible");
        teluguMain.classList.add("hidden");
        englishMain.classList.remove("hidden");
        englishMain.classList.add("visible");
      }

      languageSelectors.forEach((s) => (s.value = selected));
    });
  });
});