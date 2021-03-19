document.addEventListener("DOMContentLoaded", function () {
  async function EmbedOptimizer() {
    let alternativeImages = document.querySelectorAll('img.embed-optimize');
    for (let element of alternativeImages) {
      let type = element.dataset["embedType"],
        time = element.dataset["embedTime"] || '2000',
        title = element.getAttribute("alt") || 'Iframe',
        width = element.getAttribute('width'),
        height = element.getAttribute('height'),
        src = element.dataset["src"],
        youtubeID,
        vimeoID,
        thumbButtonPlayer = element.dataset["playerButton"] || 'https://addplaybuttontoimage.way4info.net/Images/Icons/20.png',
        mapsID = element.dataset["maps"],
        mediaURL = element.dataset["media"];


      const iframe = document.createElement('iframe');
      iframe.setAttribute('class', 'embed-optimize');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('title', title);
      if (width) iframe.setAttribute('width', width);
      if (height) iframe.setAttribute('height', height);
      if (mapsID) iframe.setAttribute('src', "https://www.google.com.br/maps/" + mapsID)
      else iframe.setAttribute('src', src)


      if (mediaURL) {
        const youtube_1 = mediaURL.match(/embed\/([a-z0-9_A-Z=:#*%-]*)/),
          youtube_2 = mediaURL.match(/watch\?v=([a-z0-9_A-Z=:#*%-]*)/),
          vimeo_1 = mediaURL.match(/video\/([a-z0-9_A-Z=:#*%-]*)/),
          vimeo_2 = mediaURL.match(/vimeo\.com\/([a-z0-9_A-Z=:#*%-]*)/);

        if (youtube_1) youtubeID = youtube_1[1]
        else if (youtube_2) youtubeID = youtube_2[1]
        else if (vimeo_1) vimeoID = vimeo_1[1]
        else if (vimeo_2) vimeoID = vimeo_2[1]


        const playerButton = document.createElement('div');
        playerButton.style.content = ''
        playerButton.style.display = 'block'
        playerButton.style.position = 'absolute'
        playerButton.style.width = '100%'
        playerButton.style.height = '100%'
        playerButton.style.top = '0'
        playerButton.style.background = 'url("' + thumbButtonPlayer + '") center center no-repeat'
        playerButton.style.backgroundSize = '75px'

        let elementSwitch = document.createElement('div');
        elementSwitch.classList.add('embed-optimize-container');

        if (width) elementSwitch.style.width = width;
        if (height) elementSwitch.style.height = height;
        elementSwitch.style.position = 'relative';

        if (youtubeID) {

          element.setAttribute("src", "https://img.youtube.com/vi/" + youtubeID + "/hqdefault.jpg");
          element.style.objectFit = "cover";
          iframe.setAttribute("src", "https://www.youtube.com/embed/" + youtubeID + "?autoplay=1&mute=1");

          elementSwitch.appendChild(element.cloneNode(true))
          element.replaceWith(elementSwitch)
          elementSwitch.appendChild(playerButton)
          element = elementSwitch

        } else if (vimeoID) {
          await fetch(`https://vimeo.com/api/v2/video/${vimeoID}.json`)
            .then(response => {
              return response.text();
            })
            .then(data => {
              const {thumbnail_large} = JSON.parse(data)[0];
              const large = `${thumbnail_large}`;
              element.setAttribute("src", large);
            })
            .catch(error => {
              console.log(error);
            });
          element.style.objectFit = "cover";
          iframe.setAttribute("src", "https://player.vimeo.com/video/" + vimeoID + "?autoplay=1&loop=1&muted=1");
          elementSwitch.appendChild(element.cloneNode(true))
          element.replaceWith(elementSwitch)
          elementSwitch.appendChild(playerButton)
          element = elementSwitch

        }
      }

      function generateIframe() {
        element.replaceWith(iframe);
      }


      switch (type) {
        case 'onclick':
          element.style.cursor = "pointer";
          element.addEventListener('click', generateIframe);
          break;
        case 'onmouseover':
          element.addEventListener('mouseover', generateIframe);
          break;
        case 'ondelay':
          setTimeout(function () {
            generateIframe();
          }, time);
          break;
        default:
        case 'onvisible':
          const halfWindow = window.innerHeight * 0.8;

        function isOnView() {
          const elementTop = element.getBoundingClientRect().top;
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
