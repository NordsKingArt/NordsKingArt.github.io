class PackingDialog extends Dialog{
    constructor(div){
        super(div);

        this.progress = div.data("progress");
        this.progressText = div.find("#progressText");
        this.progressBar = div.find("#progressBar");
    }
    toggle(){
        this.div.toggleApearAnimation("animate__fadeIn","animate__fadeOut")
        this.div.find(".inner").toggleApearAnimation("animate__fadeInUpBig","animate__fadeOutDownBig")
    }

    setProgress(progress){
        this.progress = progress;
        this.progressText.text(progress+"%");
        this.progressBar.css("width",progress+"%");
    }

    packingFinished(){
        let downloading_div = this.div.find(".progress-message");
        let message_div = this.div.find(".done-message");

        downloading_div.toggleApearAnimation("animate__fadeIn","animate__fadeOutUp")
        message_div.toggleApearAnimation("animate__fadeInUp","animate__fadeOutUp")
    }
}
var packing_progress_dialog = new PackingDialog($(".packing_progress"));


$("#download-modpack-btn").click(function(){
    packing_progress_dialog.toggle()

    var myinterval = setInterval(function() {
        packing_progress_dialog.setProgress(packing_progress_dialog.progress+1)
        if(packing_progress_dialog.progress == 100){
            clearInterval(myinterval)

            packing_progress_dialog.packingFinished();
        }
    }, 20);


})