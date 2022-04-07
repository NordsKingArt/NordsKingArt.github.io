var textrotator = $("#textrotator")[0]
setInterval(function () {
    const show = textrotator.querySelector('span[data-show]')
    const next = show.nextElementSibling || textrotator.querySelector('span:first-child')
    const up = textrotator.querySelector('span[data-up]')
    
    var rotateKeywords = $("#textrotator");
    rotateKeywords.width(next.offsetWidth)

    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 2000)




jQuery('.mycard').viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInUp',
    offset: 100
});