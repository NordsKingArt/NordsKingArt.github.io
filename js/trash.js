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