document.addEventListener("DOMContentLoaded", function () {
  function EmbedOptimizer() {

    const EMBED_ITEMS = document.querySelectorAll('img.embed-optimize');

    for (let IMG of EMBED_ITEMS) {

      const TYPE              = IMG.dataset['embedType'];
      const TIME              = IMG.dataset['embedTime'] || '2000';
      const BUTTON_PLAYER_URL = IMG.dataset['embedPlayerButton'] || 'https://addplaybuttontoimage.way4info.net/Images/Icons/20.png';
      const MAPS_ID           = IMG.dataset['embedMaps'];
      const VIDEO_URL         = IMG.dataset['embedVideo'];
      const SRC               = IMG.dataset['embedSrc'];
      const TITLE             = IMG.getAttribute('alt') || 'Iframe';
      const WIDTH             = IMG.getAttribute('width');
      const HEIGHT            = IMG.getAttribute('height');
      let youtubeID;
      let vimeoID;

      const IFRAME = document.createElement('iframe');
      IFRAME.setAttribute('class', 'embed-optimize');
      IFRAME.setAttribute('frameborder', '0');
      IFRAME.setAttribute('title', TITLE);
      IFRAME.setAttribute('width', WIDTH);
      IFRAME.setAttribute('height', HEIGHT);
      MAPS_ID ? IFRAME.setAttribute('src', `https://www.google.com.br/maps/${MAPS_ID}`) : IFRAME.setAttribute('src', SRC)


      if (VIDEO_URL) {

        const YOUTUBE_1 = VIDEO_URL.match(/embed\/([a-z0-9_A-Z=:#*%-]*)/);
        const YOUTUBE_2 = VIDEO_URL.match(/watch\?v=([a-z0-9_A-Z=:#*%-]*)/);
        const VIMEO_1   = VIDEO_URL.match(/video\/([a-z0-9_A-Z=:#*%-]*)/);
        const VIMEO_2   = VIDEO_URL.match(/vimeo\.com\/([a-z0-9_A-Z=:#*%-]*)/);

        if (YOUTUBE_1) youtubeID      = YOUTUBE_1[1]
        else if (YOUTUBE_2) youtubeID = YOUTUBE_2[1]
        else if (VIMEO_1) vimeoID     = VIMEO_1[1]
        else if (VIMEO_2) vimeoID     = VIMEO_2[1]

        const PLAYER_BUTTON = document.createElement('div');
        PLAYER_BUTTON.style.content = '';
        PLAYER_BUTTON.style.display = 'block';
        PLAYER_BUTTON.style.position = 'absolute';
        PLAYER_BUTTON.style.width = '100%';
        PLAYER_BUTTON.style.height = '100%';
        PLAYER_BUTTON.style.top = '0';
        PLAYER_BUTTON.style.background = `url(" ${BUTTON_PLAYER_URL} ") center center no-repeat`;
        PLAYER_BUTTON.style.backgroundSize = '75px';

        let elementSwitch = document.createElement('div');
        elementSwitch.classList.add('embed-optimize-container');

        if (WIDTH) elementSwitch.style.width = WIDTH;
        if (HEIGHT) elementSwitch.style.height = HEIGHT;
        elementSwitch.style.position = 'relative';

        if (youtubeID) {
          IMG.setAttribute("src", `https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`);
          IMG.style.objectFit = "cover";
          IFRAME.setAttribute("src", `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=1`);
          replaceBlocks(elementSwitch, PLAYER_BUTTON);
        } else if (vimeoID) {
          async function fetchVimeo(url) {
            const response = await fetch(url).then((response) => response.json());
            const {thumbnail_large} = await response[0];
            IMG.setAttribute("src", thumbnail_large);
            replaceBlocks(elementSwitch, PLAYER_BUTTON)
          }
          fetchVimeo(`https://vimeo.com/api/v2/video/${vimeoID}.json`);
          IMG.style.objectFit = "cover";
          IFRAME.setAttribute("src", `https://player.vimeo.com/video/${vimeoID}?autoplay=1&loop=1&muted=1`);
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
        case 'onclick':
          IMG.style.cursor = "pointer";
          IMG.addEventListener('click', generateIframe);
          break;
        case 'onmouseover':
          IMG.addEventListener('mouseover', generateIframe);
          break;
        case 'ondelay':
          setTimeout(function () {
            generateIframe();
          }, TIME);
          break;
        default:
        case 'onvisible':
          const halfWindow = window.innerHeight * 0.8;

        function isOnView() {
          const elementTop = IMG.getBoundingClientRect().top;
          const isSectionVisible = (elementTop - halfWindow) < 0;
          if (isSectionVisible) generateIframe();
        }

          isOnView();
          window.addEventListener('scroll', isOnView);
          break;
      }
    }
  }

  EmbedOptimizer();
});
