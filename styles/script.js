
function setupVideoMask(maskId, videoSrc) {
    const mask = document.getElementById(maskId);
    const video = document.createElement('video');
    
    video.src = videoSrc;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    
    mask.prepend(video);
}

document.addEventListener('DOMContentLoaded', () => {
    setupVideoMask('video1', '../video/video.mp4');
    setupVideoMask('video2', '../video/video.mp4');
    setupVideoMask('video3', '../video/video.mp4');
    setupVideoMask('video4', '../video/video.mp4');

     function updateVideoMasks() {
        const videoMasks = document.querySelectorAll('.video-mask');
        videoMasks.forEach(mask => {
            const maskText = mask.querySelector('.mask-text');
            if (maskText) {
                const rect = maskText.getBoundingClientRect();
                mask.style.width = `${rect.width}px`;
                mask.style.height = `${rect.height}px`;
            }
        });
    }

    updateVideoMasks();
    window.addEventListener('resize', updateVideoMasks);
    
    if (window.ResizeObserver) {
        const ro = new ResizeObserver(updateVideoMasks);
        ro.observe(document.querySelector('.text-container'));
    }
});

