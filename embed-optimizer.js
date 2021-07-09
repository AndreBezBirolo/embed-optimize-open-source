document.addEventListener("DOMContentLoaded", function () {
  function EmbedOptimizer() {
    const EMBED_ITEMS = document.querySelectorAll("img.embed-optimize");

    for (let IMG of EMBED_ITEMS) {
      const TYPE = IMG.dataset["embedType"];
      const TIME = IMG.dataset["embedTime"] || "2000";
      const BUTTON_PLAYER_URL =
        IMG.dataset["embedPlayerButton"] ||
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYW1hZGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI3OSAyMDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3OSAyMDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTQuNiwxMzUuN2MwLTI0LjUsMC00OS4xLDAtNzMuNmMwLjUtNC4xLDAuOS04LjEsMS41LTEyLjJjMi4yLTE0LjUsOS43LTI0LjUsMjQuMS0yOS4xYzkuOS0zLjIsMjAtNC42LDMwLjItNC42CgkJYzQ3LjctMC4xLDk1LjQsMC4xLDE0My4xLDAuNGM4LjYsMC4xLDE3LjEsMS43LDI1LjMsNC43YzEwLDMuNywxNi45LDEwLjYsMjAuMywyMC45YzIuNiw4LDMuMywxNi4zLDMuNCwyNC42CgkJYzAuMiwyMiwwLjMsNDQuMSwwLDY2LjFjLTAuMSw5LjktMS4zLDE5LjgtNC43LDI5LjJjLTMuNywxMC4yLTEwLjIsMTcuOC0yMC4yLDIyLjJjLTEwLjYsNC43LTIxLjksNS45LTMzLjMsNgoJCWMtNDAuNywwLjItODEuNCwwLjEtMTIyLjEsMC4yYy0xMS4xLDAtMjIuMS0wLjYtMzIuOC0zLjVjLTEwLjEtMi43LTE4LjktNy40LTI1LTE2LjJjLTQuOC02LjgtNy0xNC42LTguMy0yMi43CgkJQzE1LjUsMTQ0LDE1LjEsMTM5LjgsMTQuNiwxMzUuN3ogTTE3OCwxMDIuMWMwLTMuNy0yLTYtNS03LjZjLTE2LjctOC43LTMzLjQtMTcuNC01MC4yLTI2Yy02LjYtMy40LTEyLjYsMC4yLTEyLjYsNy42CgkJYy0wLjEsMTcuMy0wLjEsMzQuNywwLDUyYzAsMS44LDAuNSwzLjcsMS40LDUuM2MyLjIsMy45LDYuNSw0LjcsMTEsMi41YzguMS00LjIsMTYuMS04LjQsMjQuMi0xMi42YzguNy00LjUsMTcuNC05LjEsMjYuMS0xMy42CgkJQzE3NS45LDEwOCwxNzcuOSwxMDUuOCwxNzgsMTAyLjF6Ii8+CjwvZz4KPC9zdmc+Cg==";
      const MAPS_ID = IMG.dataset["embedMaps"];
      const VIDEO_URL = IMG.dataset["embedVideo"];
      const SRC = IMG.dataset["embedSrc"];
      const TITLE = IMG.getAttribute("alt") || "Iframe";
      const WIDTH = IMG.getAttribute("width");
      const HEIGHT = IMG.getAttribute("height");
      let youtubeID;
      let vimeoID;

      const IFRAME = document.createElement("iframe");
      IFRAME.setAttribute("class", "embed-optimize");
      IFRAME.setAttribute("frameborder", "0");
      IFRAME.setAttribute("title", TITLE);
      IFRAME.setAttribute("width", WIDTH);
      IFRAME.setAttribute("height", HEIGHT);
      MAPS_ID
        ? IFRAME.setAttribute(
            "src",
            `https://www.google.com.br/maps/${MAPS_ID}`
          )
        : IFRAME.setAttribute("src", SRC);

      if (VIDEO_URL) {
        const YOUTUBE_1 = VIDEO_URL.match(/embed\/([a-z0-9_A-Z=:#*%-]*)/);
        const YOUTUBE_2 = VIDEO_URL.match(/watch\?v=([a-z0-9_A-Z=:#*%-]*)/);
        const VIMEO_1 = VIDEO_URL.match(/video\/([a-z0-9_A-Z=:#*%-]*)/);
        const VIMEO_2 = VIDEO_URL.match(/vimeo\.com\/([a-z0-9_A-Z=:#*%-]*)/);

        if (YOUTUBE_1) youtubeID = YOUTUBE_1[1];
        else if (YOUTUBE_2) youtubeID = YOUTUBE_2[1];
        else if (VIMEO_1) vimeoID = VIMEO_1[1];
        else if (VIMEO_2) vimeoID = VIMEO_2[1];

        const PLAYER_BUTTON = document.createElement("div");
        PLAYER_BUTTON.style.content = "";
        PLAYER_BUTTON.style.display = "block";
        PLAYER_BUTTON.style.position = "absolute";
        PLAYER_BUTTON.style.width = "100%";
        PLAYER_BUTTON.style.height = "100%";
        PLAYER_BUTTON.style.top = "0";
        PLAYER_BUTTON.style.background = `url(" ${BUTTON_PLAYER_URL} ") center center no-repeat`;
        PLAYER_BUTTON.style.backgroundSize = "75px";

        let elementSwitch = document.createElement("div");
        elementSwitch.classList.add("embed-optimize-container");

        if (WIDTH) elementSwitch.style.width = WIDTH;
        if (HEIGHT) elementSwitch.style.height = HEIGHT;
        elementSwitch.style.position = "relative";

        if (youtubeID) {
          if (!IMG_SRC) {
            IMG.setAttribute(
              "src",
              `https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`
            );
          }
          IMG.style.objectFit = "cover";
          IFRAME.setAttribute(
            "src",
            `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=1`
          );
          replaceBlocks(elementSwitch, PLAYER_BUTTON);
        } else if (vimeoID) {
          async function fetchVimeo(url) {
            const response = await fetch(url).then((response) =>
              response.json()
            );
            const { thumbnail_large } = await response[0];
            IMG.setAttribute("src", thumbnail_large);
            replaceBlocks(elementSwitch, PLAYER_BUTTON);
          }
          fetchVimeo(`https://vimeo.com/api/v2/video/${vimeoID}.json`);
          IMG.style.objectFit = "cover";
          IFRAME.setAttribute(
            "src",
            `https://player.vimeo.com/video/${vimeoID}?autoplay=1&loop=1&muted=1`
          );
        }
      }

      function replaceBlocks(elementSwitch, PLAYER_BUTTON) {
        elementSwitch.appendChild(IMG.cloneNode(true));
        IMG.replaceWith(elementSwitch);
        elementSwitch.appendChild(PLAYER_BUTTON);
        IMG = elementSwitch;
      }

      function generateIframe() {
        IMG.replaceWith(IFRAME);
      }

      switch (TYPE) {
        case "onclick":
          IMG.style.cursor = "pointer";
          IMG.addEventListener("click", generateIframe);
          break;
        case "onmouseover":
          IMG.addEventListener("mouseover", generateIframe);
          break;
        case "ondelay":
          setTimeout(function () {
            generateIframe();
          }, TIME);
          break;
        default:
        case "onvisible":
          const halfWindow = window.innerHeight * 0.8;

          function isOnView() {
            const elementTop = IMG.getBoundingClientRect().top;
            const isSectionVisible = elementTop - halfWindow < 0;
            if (isSectionVisible) generateIframe();
          }

          isOnView();
          window.addEventListener("scroll", isOnView);
          break;
      }
    }
  }

  EmbedOptimizer();
});
