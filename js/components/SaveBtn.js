export default {
    name: 'SaveBtn',
    data(){
        return{
            mutableSaved : this.saved,
            saveAnimation: this.saved
        }
    },
    props: {
        saved: Boolean
    },
    template: `<i class="fal fa-bookmark save" :class="{fas: mutableSaved, 'save_animation': saveAnimation}" @click="save"></i>`,
    methods: {
        save(){
            this.mutableSaved = !this.mutableSaved;
            this.saveAnimation = !this.saveAnimation
        }
    }
}