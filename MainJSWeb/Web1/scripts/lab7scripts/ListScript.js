const innerBlocks = document.querySelectorAll('.inner-block');
const outputBlock = document.getElementById('output');

function hideBlock(block, callback) {
    block.classList.add('hidden');
    if (document.querySelectorAll('.inner-block:not(.hidden)').length === 0) {
        callback();
    }
}

innerBlocks.forEach(block => {
    block.addEventListener('click', () => {
        hideBlock(block, () => {
            outputBlock.style.display = 'block';
        });
    });
});
