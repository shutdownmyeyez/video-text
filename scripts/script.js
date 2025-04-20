
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
     // Функция для наблюдения за изменениями размера текста
     function updateVideoMasks() {
        const videoMasks = document.querySelectorAll('.video-mask');
        videoMasks.forEach(mask => {
            const maskText = mask.querySelector('.mask-text');
            if (maskText) {
                // Позволяет видео точно соответствовать размеру текста
                const rect = maskText.getBoundingClientRect();
                mask.style.width = `${rect.width}px`;
                mask.style.height = `${rect.height}px`;
            }
        });
    }
    
    // Обновляем размеры масок при загрузке и изменении размера окна
    updateVideoMasks();
    window.addEventListener('resize', updateVideoMasks);
    
    // Для более плавного масштабирования используем ResizeObserver
    if (window.ResizeObserver) {
        const ro = new ResizeObserver(updateVideoMasks);
        ro.observe(document.querySelector('.text-container'));
    }
});

