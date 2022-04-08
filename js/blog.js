Vue.createApp({
    data(){
        return{
            showVideo: false
        }
    },
    mounted(){
        renderEditor("textarea[name='comment']", 'Let`s write some cool description!', 'comment');
        setTimeout(() => {
            this.showVideo = true
        }, 5000);
    }
}).mount("#app")