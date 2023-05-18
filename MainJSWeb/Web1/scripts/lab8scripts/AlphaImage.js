const image = document.getElementById('imageTask8');
const text = document.getElementById('textTask8');



image.addEventListener('mouseenter', () => {
    fade(image, 0, 0.1, 500);
    fade(text, 0, 1, 500);
});

image.addEventListener('mouseleave', () => {
    fade(image, 0.1, 1, 500);
    fade(text, 1, 0, 500);
});

function fade(element, startOpacity, endOpacity, duration) {
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    const timeInterval = 10;

    function updateOpacity() {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;
        const opacity = startOpacity + ((endOpacity - startOpacity) * elapsed) / duration;

        element.style.opacity = opacity;

        if (currentTime < endTime) {
            setTimeout(updateOpacity, timeInterval);
        }
    }

    updateOpacity();
}