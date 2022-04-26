var data = {

}




renderEditor("textarea[name='comment']", 'Let`s write some cool description!', 'comment'); // Rendering froala editor in comments section


// Video stuff
{
    window.addEventListener('resize', (e) => {
        if(window.innerWidth > 1200) $("#entry_image").fadeOut()
    });
    setTimeout(() => {
        if (window.innerWidth > 1200) $("#entry_image").fadeOut()
    }, 5000);
}

// I will assume that the given YouTube video aspect ratio is 16:9
var videoContainer = $("#videoContainer");

const ASRATIO = 1.77778
let videoWidth = window.innerWidth;
let videoHeight = (window.innerWidth/ASRATIO);
let videoTop = (225-videoHeight/2)

videoContainer.width(videoWidth+"px")
videoContainer.height(videoHeight+"px")
videoContainer.css("top",videoTop+"px")



function toggleFullScreen(){
    $(".blog-banner").toggleClass("watchVideo")
}



class SavePost{
    constructor(div){
        this.div = div;
        this.inner = div.find(".inner")

        $(".collection .remove").click(function(event){
            $(this).parents(".collection").removeClass("added")
            event.stopPropagation()
        })
        $(".collection").click(function (event) {
            $(this).addClass("added")
        })
    }

    toggle(){
        this.div.toggleApearAnimation("animate__fadeIn","animate__fadeOut")
        this.inner.toggleApearAnimation("animate__fadeInDown","animate__fadeOutUp")
    }

    save(){
        this.toggle();
        // Send query to backend
    }
}

var savePost = new SavePost($(".savePost"))