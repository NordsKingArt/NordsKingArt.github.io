Vue.createApp({
    data(){
        return{
            showVideo: false
        }
    },
    mounted(){
        renderEditor("textarea[name='comment']", 'Let`s write some cool description!', 'comment'); // Rendering froala editor in comments section


        // Video stuff
        window.addEventListener('resize', (e)=>{
            this.showVideo = window.innerWidth > 1200
        });
        setTimeout(() => {
            if (window.innerWidth > 1200) this.showVideo = true
        }, 5000);
    }
}).mount("#app")