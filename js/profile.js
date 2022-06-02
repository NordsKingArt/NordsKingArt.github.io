$(window).on("load", function(){
    for (const span of $(".stats .stat span")) {
        let _number = Number($(span).text())
        let increasingNumber = 0
        $({
            Counter: 0
        }).animate({
            Counter: _number
        }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $(span).text(Math.ceil(this.Counter))
            },
            complete: function () {
                $(span).text(this.Counter)
            }
        });
    }




    $(".level-bar .inner").width($(".level-bar .inner").data("progress"));



    $('#baseform').submit(function(event){
        event.preventDefault();

        if($("input[name='username']").val().length == 0){
            _scrollTo($("input[name='username']"))
            $("input[name='username']").parents(".input-prepend").addClass("warning")
            $(".message#nousername").messageTrigger()

            $("input[name='username']").parents(".input-prepend").on("animationend",function(params) {
                $(this).removeClass("warning")
            })
        }
        
    
        // $(".input-prepend input").each(function(index, input) {
        //     if($(input).val().length == 0){
        //         $(input).parents(".input-prepend").addClass("warning")

        //         $(input).parents(".input-prepend").on("animationend",function(params) {
        //             $(this).removeClass("warning")
        //         })
        //     }
        // })
    });



    
});

