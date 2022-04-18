var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: "m_syl3ZTJjg",
        playerVars: {
            color: 'white',
            rel: 0,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute()
}

// Looping video once it ends
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideo()
    }
    if (event.data == YT.PlayerState.PLAYING) {
        event.target.setPlaybackQuality('hd1080');
    }
}