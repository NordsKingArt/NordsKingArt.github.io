export default {
    props: {
        reply: Boolean, 
        authorized: Boolean,
        avatar: String,
        username: String,
        role: Number,
        date: String,
        comment: String,
        id: Number
    },
    template: `
    <div class="comment" :class='{reply: reply, authorized: authorized}'>
    <div class="avatar">
        <img :src="avatar" alt="">
    </div>
    <div class="body">
        <div class="top">
            <div>
                <label class="author">{{username}} <span class="px-2 ms-2" :class="{'badge-special': authorized}" v-if="authorized">Publisher</span></label>
                <label class="date">{{date}}</label>
            </div>
            <div class="actions">
                <button class="action-btn-light small">Reply</button>
                <button class="delete_btn" @click="$emit('deleteComment', id)"><i class="fal fa-trash"></i></button>
            </div>
        </div>
        <p>{{comment}}</p>
    </div>
    </div>
  `,
  methods: {
      deleteComment(){

      }
  }

}