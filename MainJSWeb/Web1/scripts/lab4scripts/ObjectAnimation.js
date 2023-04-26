const block = document.querySelector('.scaleRotate');
const button = document.querySelector('.lab4button')
function animate()
{
    if (block.style.transform == 'none') {
        block.style.transform = `scale(1.75) rotate(180deg)`;
    }
    else
    {
        block.style.transform = 'none';
    }
}


button.addEventListener('click', () => {
    setTimeout(() => 500);
    animate();
});