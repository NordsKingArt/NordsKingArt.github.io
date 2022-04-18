import SaveBtn from './components/SaveBtn.js'
Vue.createApp({
    data() {
        return {
            videoWidth: 0,
            videoHeight: 0,
            videoTop: 0,
            watchVideo: false, // This one used to toggle fullscreen behavior
            showVideo: false, // This one used to show video on background or not
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
                // setTimeout(() => {
                //     $("video")[0].currentTime = 140;
                // }, 1000);
            }, 5000);
        }

        // I will assume that the given YouTube video aspect ratio is 16:9
        const ASRATIO = 1.77778
        this.videoWidth = window.innerWidth;
        this.videoHeight = (window.innerWidth/ASRATIO);
        this.videoTop = (225-this.videoHeight/2)

        // Depricated! API returns wrong dimensions
        // fetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v=NehSihoHCpc").then((response) => {
        //     response.json().then((data)=>{
        //         let width = data.width
        //         let height = data.height
        //         let factor = window.innerWidth/width

        //         this.videoWidth = window.innerWidth+"px";
        //         this.videoHeight = (height*factor)+"px";
        //         this.videoTop = (225-(height*factor)/2)+"px"
        //     })
        // })

        

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

                iframe.width(this.videoWidth-(window.innerWidth*0.2)+"px")
                iframe.height(iframe.width()/1.7778)
            }
            this.watchVideo = !this.watchVideo;
        }
    },
    components: {
        SaveBtn
    }
}).mount("#app")