videos = ['videoTextToSpeech', 'videoTextToSpeech', 'videoTextToSpeech'];
srcVideos = ['./video/textToSpeech.mp4', './video/textToSpeech.mp4', './video/textToSpeech.mp4'];
srcImg = [['./img/poster1-light.png', './img/poster1-dark.png'],
['./img/poster2-light.png', './img/poster2-dark.png'],
['./img/poster3-light.png', './img/poster3-dark.png']
];
thisVideo = 1;

function nextVideo() {
    if (thisVideo != 9) {
        video = document.getElementById(videos[thisVideo - 1]);
        video.pause();
        video.currentTime = 0;
        video.src = srcVideos[thisVideo - 1];
        thisVideo++;
    }
}

function prevVideo() {
    if (thisVideo != videos.length) {
        video = document.getElementById(videos[thisVideo - 1]);
        video.pause();
        video.currentTime = 0;
        video.src = srcVideos[thisVideo - 1];
        thisVideo--;
    }
}

function themeLight() {
    for (let i = 0; i < videos.length; i++) {
        video.src = srcVideos[thisVideo - 1];
        video.poster = srcImg[[thisVideo - 1][0]]
    }
}