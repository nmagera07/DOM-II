const grayBlock = document.querySelector('.block--gray')
const blueBlock = document.querySelector('block--blue')
const blocks = document.querySelector('.blocks')


grayBlock.addEventListener('click', event => {
    if (blocks != '.block--gray') {
        grayBlock.remove()
    }
    blocks.prepend(grayBlock) 
})

blueBlock.addEventListener('click', event => {
    if (blocks != '.block--blue') {
        grayBlock.remove()
    }
    blocks.prepend(blueBlock) 
})
