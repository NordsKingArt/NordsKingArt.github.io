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
})