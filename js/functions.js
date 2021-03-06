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
    messageTrigger: function() {

        if ($(this).hasClass("visible")) { // Hiding
            $(this).addClass("animate__fadeOutDown");
            $(this).removeClass("animate__fadeInUp");
            
            $(this)[0].onanimationend = function (e) { 
                $(this).removeClass("visible");
                $(this).removeClass("animate__fadeOutDown");
            };
   
        }
        else{ // Showing
            $(this).addClass("visible"); 
            $(this).addClass("animate__fadeInUp");
            $(this).removeClass("animate__fadeOutDown");

            $(this)[0].onanimationend = null;

            setTimeout(() => {
                $(this).messageTrigger();
            }, 5000);
        }
    },
    exists: function () { 
        return $(this).length;
    },
});


function renderEditor (fholder, fplaceholder, fclass=""){
    new FroalaEditor(
        fholder, {
            key: "1C%kZV[IX)_SL}UJHAEFZMUJOYGYQE[\\ZJ]RAe(+%$==",
            "fontSizeDefaultSelection": "18",
            "fontSizeUnit": "px",
            "linkAlwaysBlank": true,
            "linkText": true,
            "fontFamilyDefaultSelection": 'Rubik',
            "heightMin": 200,
            attribution: false,
            quickInsertEnabled: false,
            editorClass: fclass,
            placeholderText: fplaceholder,

            paragraphFormat: {
              N: 'Normal',
              H2: 'Heading 2',
              H3: 'Heading 3',
              H4: 'Heading 4',
            },

            "toolbarButtons": {
                'moreText': {
                    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'clearFormatting'],
                    'buttonsVisible': 5
                },
                'moreParagraph': {
                    'buttons': ['formatUL', 'paragraphFormat', 'lineHeight', 'outdent', 'indent', 'quote'
                    ]
                },
                'moreMisc': {
                    'buttons': ['undo', 'redo', 'fullscreen'],
                    'align': 'right',
                    'buttonsVisible': 3
                },
                'moreRich': {
                    'buttons': ['insertLink']
                }
            }
        }
    );
}



function _scrollTo(element){
    var scrollPos = element[0].offsetTop - 200;

    $('html').stop().animate({
        scrollTop: scrollPos,
        easing: "linear"
    });
}