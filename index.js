var video = document.getElementById("myVideo");
video.oncanplaythrough = function() {
    video.muted = true;
    video.play();
}
