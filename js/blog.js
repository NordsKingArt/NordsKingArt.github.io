var pageSpecific = {
    data: {
            videoWidth: 0,
            videoHeight: 0,
            videoTop: 0,
            watchVideo: false, // This one used to toggle fullscreen behavior
            showVideo: false, // This one used to show video on background or not
            saved: false,
            showSavePostDialog: false,
            showDeleteCommentDialog: false,

            
            deleteCommentId: null, // Null by default, once trash icon on comment is clicked, this field is filled up with that comment's id
            comments: [
                {
                    id: 1,
                    avatar: "/img/skins/10.png",
                    reply : false,
                    authorized : true,
                    username : "Leif Haraldson",
                    role : 0,
                    date : "July 15, 2017",
                    comment : "First download the link then copy the shaders file and press windows key + r enter and go to minecraft go to shaders and paste the file"
                },
                {
                    id: 2,
                    avatar: "/img/skins/5.png",
                    reply : true,
                    authorized : true,
                    username : "Erik",
                    role : 0,
                    date : "July 18, 2017",
                    comment : "Vue defaults Boolean props to false if no default was specified in the prop declaration. The author of Vue explains the reasoning."
                }
            ],

            context: null
    },
    mounted(context) {
        renderEditor("textarea[name='comment']", 'Let`s write some cool description!', 'comment'); // Rendering froala editor in comments section

        // Video stuff
        {
            window.addEventListener('resize', (e) => {
                context.showVideo = window.innerWidth > 1200
            });
            setTimeout(() => {
                if (window.innerWidth > 1200) context.showVideo = true
            }, 5000);
        }

        // I will assume that the given YouTube video aspect ratio is 16:9
        const ASRATIO = 1.77778
        context.videoWidth = window.innerWidth;
        context.videoHeight = (window.innerWidth/ASRATIO);
        context.videoTop = (225-context.videoHeight/2)
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
        },
        toggleSavePostDialog(){
            this.showSavePostDialog = !this.showSavePostDialog

            this.saved = true
        },

        onCommentDeleteClicked(id){
            this.deleteCommentId = id
            this.showDeleteCommentDialog = true;
        },
        deleteComment(){
            // Send query to backend to delete comment
            
        }
    },
}
