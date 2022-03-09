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