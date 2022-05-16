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

// const ASRATIO = 1.77778
const ASRATIO = 2.41
let videoHeight = window.innerHeight;
let videoWidth = videoHeight*ASRATIO;
let videoTop = (225-videoHeight/2)

videoContainer.width(videoWidth+"px")
videoContainer.height(videoHeight+"px")
videoContainer.css("top",videoTop+"px")


// Toggling fullscreen video for blog banner
var watchVideo = false
function toggleFullScreen(){
    $(".blog-banner").toggleClass("watchVideo") // Used for banner layots
    $("#videoContainer").toggleClass("show") // Used for classic layout
    let iframe = $("#player")
    if(this.watchVideo){
        player.mute()

        iframe.width("inherit")
        iframe.height("inherit")
    }
    else{
        player.unMute()

        iframe.width(window.innerWidth-(window.innerWidth*0.2)+"px")
        iframe.height(iframe.width()/ASRATIO)
    }
    watchVideo = !watchVideo;
}


var layout = $(".layout_banner").exists() ? "banner" : "classic"
if(layout == "classic"){
    let iframe = $("#player")

    iframe.width(window.innerWidth-(window.innerWidth*0.2)+"px")
    iframe.height(iframe.width()/ASRATIO)
}



var savePost = new SavePost($(".savePost"));
savePost.setOnSaved((saved)=>{
    if(saved.size>0){
        $("#saveBtn").toggleClass("saved")
        $("#saveBtn i").toggleClass("fas")
        $("#postSavedMessage").messageTrigger() // Triggering post saved message
    }
})
$("#saveBtn").click(function(event){
    if(savePost.saved.size > 0){
        $(this).removeClass("saved")
        $(this).find("i").removeClass("fas")
        savePost.clearSaved()
    }
    else{
        savePost.toggle()
    }
})


var deleteCommentDialog = new DeleteCommentDialog($("#delete-comment-dialog"));
$(".comment .delete_btn").click(function(params) {
    deleteCommentDialog.commentId = $(this).data("id");
    deleteCommentDialog.commentDiv = $(this).parents(".comment");
    deleteCommentDialog.toggle()
})


// Screenshots
var slides = $(".thumbnails .screenshot").length // This attribute helps us to fix the slick bug when number of slides less than or equal to 5

$('.screenshot-items').slick({
    slidesToShow: 1,
    draggable: false,
    fade: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: slides > 5 ? '.thumbnails' : null
});
$('.thumbnails').slick({
    slidesToShow: 5,
    arrows: false,
    asNavFor: slides > 5 ? '.screenshot-items' : null,
    focusOnSelect: slides > 5 ? true : false,
});

$('.screenshot-items').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $('.thumbnails').find(".screenshot").removeClass("active")
    $('.thumbnails').find(`[data-slick-index='${nextSlide}']`).addClass("active")
})

if(slides<=5){
    // Navigate slider on thumbnail is clicked
    $(".thumbnails .screenshot").on("click", function(event){
        console.log($(this).data("slick-index"));
        $('.screenshot-items').slick("slickGoTo", $(this).data("slick-index"))
    })
}




// Rating system
var allStars = $(".stars i")

var rating = {
    rated: false,
    rate: null
}


$(".stars i").hover(
function(e){ // Hover in
    var previousStars = $(this).prevAll();

    unRateStars(allStars)
    rateStars($(this))
    rateStars(previousStars)
},
function(e){ // Hover out
    if(!rating.rated){ // If user didnt rate then remove effect of Hover event
        var previousStars = $(this).prevAll();
        unRateStars($(this))
        unRateStars(previousStars)
    }
    else{ // If rating already existed prior to hovering then we return that state of stars
        unRateStars(allStars)
        for (let i = 0; i < rating.rate; i++) {
            rateStars(allStars.eq(i))
        }
    }
}
).click(function(params) {
    var previousStars = $(this).prevAll();

    previousStars.addClass("starred")
    $(this).addClass("starred")
    $(this).on("animationend", function(){
        $(this).removeClass("starred")
    })
    previousStars.on("animationend", function(){
        $(this).removeClass("starred")
    })

    rating.rated = true
    rating.rate = previousStars.length+1
})

function rateStars(stars){
    stars.removeClass("fal")
    stars.addClass("fas")
}
function unRateStars(stars){
    stars.removeClass("fas")
    stars.addClass("fal")
}