import SaveBtn from './components/SaveBtn.js'
Vue.createApp({
    data(){
        return{
            
        }
    },
    methods: {
        save(event){
            let saveIcon = event.target;
            saveIcon.classList.add("save_animation")
            saveIcon.classList.toggle('fa-light')
            saveIcon.classList.toggle('fas')
        }
    },
    components: {
        SaveBtn
    }
}).mount("#app")