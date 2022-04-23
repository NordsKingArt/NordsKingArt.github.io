export default {
    name: 'SaveBtn',
    props: {
        saved: Boolean,
    },
    data(){
        return{
            saveAnimation: false
        }
    },
    emits: ['saved'],
    template: `<i class="fa-bookmark save" :class="[this.saved ? 'fas' : 'fal', {'save_animation': saveAnimation}]" @click="save"></i>`,
    methods: {
        save(){
            this.$emit("saved")
        }
    }
}