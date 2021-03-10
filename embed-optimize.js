function embedOptimize() {
  let alternativeIframes = document.querySelectorAll('iframe');
  alternativeIframes.forEach(function(item) {
    let backgroundURL = item.dataset["backgroundUrl"],
        type          = item.dataset["embedType"],
        time          = item.dataset["embedTime"] || '2000',
        title         = item.getAttribute('title') || 'Iframe',
        srcEmbed      = item.dataset["src"] || '',
        youtubeID     = item.dataset["youtube"],
        thumbnailSRC  = "https://img.youtube.com/vi/"+ youtubeID +"/hqdefault.jpg",
        mapsID        = item.dataset["maps"];
    item.setAttribute('title', title);
    item.setAttribute('frameborder', '0');
    item.contentWindow.document.body.setAttribute('style', 'cursor: pointer;');
    if (item.dataset["youtube"]) {
      let urlButton = item.dataset["youtubeButton"] || "http://addplaybuttontoimage.way4info.net/Images/Icons/20.png";
      item.setAttribute('style', "background: url("+ urlButton +") no-repeat center center ,url("+ thumbnailSRC +") center center no-repeat; background-size: 75px, cover;");
    } else {
      item.setAttribute('style', "background: url("+ backgroundURL +") center center no-repeat; background-size: cover;")
    }
    function generateIframe() {
      if      (item.dataset["youtube"]) src = "https://www.youtube.com/embed/"+ youtubeID +"?autoplay=1&mute=1";
      else if (item.dataset["maps"])    src = "https://www.google.com.br/maps/" + mapsID;
      else                              src = srcEmbed;
      item.setAttribute('src', src)
    }
    switch (type) {
      case 'onclick':
        item.contentWindow.addEventListener('click', generateIframe, {once : true});
        break;
      case 'onmouseover':
        item.addEventListener('mouseover', generateIframe, {once : true});
        break;
      case 'ondelay':
        setTimeout(function(){ generateIframe(); }, time);
        break;
      default:
      case 'onvisible':
        const halfWindow = window.innerHeight * 0.8;
      function isOnView() {
        alternativeIframes.forEach(function(selectedImage) {
          const itemTop = selectedImage.getBoundingClientRect().top;
          const isSectionVisible = (itemTop - halfWindow) < 0;
          if(isSectionVisible)
            generateIframe();
        })
      }
      isOnView();
      window.addEventListener('scroll', isOnView);
      break;
    }
  });
}
embedOptimize();
