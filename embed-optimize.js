function embedOptimize() {
  let alternativeImages = document.querySelectorAll('img.optimized-embed');
  alternativeImages.forEach(function(image) {
    let youtubeID = image.dataset["youtube"],
        type      = image.dataset["embedType"],
        time      = image.dataset["embedTime"] || '2000',
        title     = image.getAttribute("alt") || 'Iframe',
        width     = image.getAttribute('width') || '',
        height    = image.getAttribute('height') || '',
        src       = image.dataset["src"];
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'optimized-embed');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', title);
    if (width)  iframe.setAttribute('width', width);
    if (height) iframe.setAttribute('height', height);
    iframe.setAttribute('src', src);
    function generateIframe() {
      image.replaceWith(iframe);
    }
    if (image.dataset["youtube"]) image.setAttribute("src", "https://img.youtube.com/vi/"+ youtubeID +"/hqdefault.jpg");
    switch (type) {
      case 'onclick':
        image.addEventListener('click', generateIframe);
        break;
      case 'onmouseover':
        image.addEventListener('mouseover', generateIframe);
        break;
      case 'ondelay':
        setTimeout(function(){ generateIframe(); }, time);
        break;
      default:
      case 'onvisible':
        const halfWindow = window.innerHeight * 0.8;
      function isOnView() {
        alternativeImages.forEach(function(selectedImage) {
          const imageTop = selectedImage.getBoundingClientRect().top;
          const isSectionVisible = (imageTop - halfWindow) < 0;
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
