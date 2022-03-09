function isVisible(el){
    if(window.getComputedStyle(el).display === "none" || window.getComputedStyle(el).visibility === "hidden" || window.getComputedStyle(el).opacity == 0){
        return false;
    }
    return true;
}

$.fn.extend({
    toggleApearAnimation: function(entranceAnimation, exitAnimation, addAnimated=true){
        if (isVisible($(this)[0])) {
            addAnimated ? $(this).addClass("animate__animated") : null;
            $(this).addClass(exitAnimation+" visible")
            $(this).removeClass(entranceAnimation)
            $(this).on("animationend",()=>{
                $(this).removeClass("visible")
            })
        } else {
            addAnimated ? $(this).addClass("animate__animated") : null;
            $(this).addClass(entranceAnimation+" visible")
            $(this).removeClass(exitAnimation)
            $(this).off("animationend")
        }
    },
});