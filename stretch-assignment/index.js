const grayBlock = document.querySelector('.block--gray')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block--green')
const pinkBlock = document.querySelector('.block--pink')
const redBlock = document.querySelector('.block--red')
const blocks = document.querySelector('.blocks')

grayBlock.addEventListener('click', event => {
    blocks.prepend(grayBlock)
})

pinkBlock.addEventListener('click', event => {
    blocks.prepend(pinkBlock)
})

greenBlock.addEventListener('click', event => {
    blocks.prepend(greenBlock)
})

blueBlock.addEventListener('click', event => {
    blocks.prepend(blueBlock)
})

redBlock.addEventListener('click', event => {
    blocks.prepend(redBlock)
})

grayBlock.addEventListener('mousedown', event => {
    
})