Vue.createApp({
    data() {
        return {
            showVideo: false,
            videoWidth: "0px",
            videoHeight: "0px",
            videoTop: "0px",
            watchVideo: false
        }
    },
    mounted() {
        renderEditor("textarea[name='comment']", 'Let`s write some cool description!', 'comment'); // Rendering froala editor in comments section

        // Video stuff
        {
            window.addEventListener('resize', (e) => {
                this.showVideo = window.innerWidth > 1200
            });
            setTimeout(() => {
                if (window.innerWidth > 1200) this.showVideo = true
            }, 5000);
        }

        // fetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v=J2E9luFtm1Y").then((response) => {
        //     response.json().then((data)=>{
        //         let width = data.width
        //         let height = data.height
        //         let factor = window.innerWidth/width

        //         this.videoWidth = window.innerWidth+"px";
        //         this.videoHeight = (height*factor)+"px";
        //         this.videoTop = (225-(height*factor)/2)+"px"
        //     })
        // })


        fetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v=NehSihoHCpc").then((response) => {
            response.json().then((data)=>{
                let width = data.width
                let height = data.height
                let factor = window.innerWidth/width

                this.videoWidth = window.innerWidth+"px";
                this.videoHeight = (height*factor)+"px";
                this.videoTop = (225-(height*factor)/2)+"px"

                // let iframe = $("#player")
                // iframe.width(this.videoWidth)
                // iframe.height(this.videoHeight)
                // iframe.css({ top: this.videoTop });
            })
        })

    },
    methods: {
        toggleFullScreen() {
            let iframe = $("#player")
            if(this.watchVideo){
                player.mute()

                iframe.width("inherit")
                iframe.height("inherit")
            }
            else{
                player.unMute()

                iframe.width(Number(this.videoWidth.substr(0,this.videoWidth.length-2))-300+"px")
                iframe.height(iframe.width()/1.7778)
            }
            this.watchVideo = !this.watchVideo;
        }
    }
}).mount("#app")