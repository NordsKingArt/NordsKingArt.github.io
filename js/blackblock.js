$( document ).ready(function() {
        // Animation
        jQuery('.mycard').viewportChecker({
            classToAdd: 'visible animate__animated animate__fadeInUp',
            offset: 100
        });
        jQuery('.sitecard').viewportChecker({
            classToAdd: 'animated',
            offset: -100
        });
        
        
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
});
