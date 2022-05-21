// Header
$("header.header_transparent #search_btn, header.header_transparent .searchfield .close").click(() => {
    $("header.header_transparent .searchfield").toggleApearAnimation("animate__fadeInDown", "animate__fadeOutUp", true)
    $("header.header_transparent .searchfield input").focus()
})

// Menu Button
$("header .menu-btn")[0].addEventListener("click", () => {
    if ($("header .menu-btn").hasClass("active")) {
        $("header .menu-btn").removeClass("active");
        $("header menu")[0].style.cssText = "visibility: hidden; opacity: 0";
    } else {
        $("header .menu-btn").addClass("active");
    
        $("header menu")[0].style.cssText = "visibility: visible; opacity: 1";
    }
})

$("header menu li").on("click", function (param){
    console.log($(this));
    $(this).children(".dropdown").slideToggle()
})



// Messages -> Alerts
for (message of $(".message.type2")) {
    $(message).css("left", window.innerWidth/2 - $(message).outerWidth()/2)
}

if ($(".message.type2.show").exists()) {
    window.addEventListener("load", () => {
        setTimeout(function () {
            $(".message.type2.show").messageTrigger();
        }, 1000);
    });
}


// Dropdowns
$(".dropdown").click(function(event) {
    $(this).find("ul").toggleClass("active")
})


// General
//Select box
var selected = $(".select .selected");
var option = $(".select .option");
selected.click(function (e) {

    if (isVisible($(this).next(".options")[0])) {
        $(this).next(".options")[0].style.cssText = "visibility: hidden; opacity: 0; margin-top: 0px";
        $(this).find("i.fa-chevron-down")[0].style.transform = "rotate(0deg)";
    } else {
        $(this).next(".options")[0].style.cssText = "visibility: visible; opacity: 1; margin-top: 10px";
        $(this).find("i.fa-chevron-down")[0].style.transform = "rotate(180deg)";
    }

});

option.click(function (e) {
    $(this).closest(".select").find("label").html(this.innerHTML)
    $(this).closest(".select").find("input").val($(this).data("value"));
    $(this).closest(".options")[0].style.cssText = "visibility: hidden; opacity: 0; margin-top: 0px";

    $(this).closest(".options").siblings(".selected").find("i.fa-chevron-down")[0].style.transform = "rotate(0deg)";
});


// Lazy Load
// Lazy load of images using gradient animation
$(".imgdiv.lazyload img").on("load",function(e){
    $(this).parents(".imgdiv").addClass("loaded")
}).each(function() {
    if(this.complete) $(this).trigger('load');
});

// Lazy load of images using small images
$("img").each(function (index) {
    if($(this).data("src")){
        $(this).attr('src', $(this).data("src"));
    }
})





class SavePost{

    constructor(div){
        this.div = div;
        this.inner = div.find(".inner");
        this.saved = new Set();

        var that = this;

        $(".collection .remove").click(function(event){
            let collection = $(this).parents(".collection");
            collection.removeClass("added")
            that.saved.delete(collection.data("id"))
            event.stopPropagation()
        })
        $(".collection").click(function (event) {
            $(this).addClass("added")
            that.saved.add($(this).data("id"))
        })
    }

    toggle(){
        this.div.toggleApearAnimation("animate__fadeIn","animate__fadeOut")
        this.inner.toggleApearAnimation("animate__fadeInDown","animate__fadeOutUp")
    }

    save(){
        this.toggle();
        this._fun(this.saved);

        // Send request to backend
    }

    setOnSaved(_fun){
        this._fun = _fun
    }

    // Clearing data
    clearSaved(){
        this.saved = new Set();
        
        for (const object of this.inner.find(".collection")) {
            $(object).removeClass("added")
        }
    }
}

class Dialog{
    constructor(div){
        this.div = div;
    }

    toggle(){
        this.div.toggleApearAnimation("animate__fadeInUp","animate__fadeOutDown")
    }
}

class DeleteCommentDialog extends Dialog{
    toggle(){
        this.div.toggleApearAnimation("animate__fadeInUp","animate__fadeOutDown")
    }

    delete(){
        // Removing comment along with its replies if there is any
        var nextElement = this.commentDiv;
        do {
            nextElement.toggleApearAnimation("animate__fadeInUp","animate__fadeOut")
            nextElement.on("animationend", (event) => {
                $(event.target).slideToggle();
            })
            nextElement = nextElement.next(".comment")
        } while (nextElement.hasClass("reply"));
    
        this.toggle()


        console.log(`Comment ${this.commentId} is deleted`)
        // Delete comment by sending request to server
    }
}
class ReportDialog extends Dialog{
    toggle(){
        this.div.toggleApearAnimation("animate__fadeInUp","animate__fadeOutDown")
    }

    report(){
        // Report the issue

        this.toggle()
        $("#reportedMessage").messageTrigger()
    }
}
