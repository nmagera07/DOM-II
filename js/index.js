// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (event) => {
    event.target.style.color = "Cyan";
    event.preventDefault()
})
nav.addEventListener('mouseout', (event) => {
    event.target.style.color = "black"
})

const nodeList = document.querySelectorAll('img')

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function() {
        nodeList[i].style.width = "75%"
    })
}
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('dblclick', function() {
        nodeList[i].style.width = "100%"
    })
}

const titles = document.querySelectorAll('.btn')

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('wheel', function() {
        titles[i].style.color = "Maroon"
        titles[i].style.backgroundColor = "Yellow"
    })
}

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('pointerout', function() {
        titles[i].style.color = "white"
        titles[i].style.backgroundColor = "#17A2B8"
    })
}

window.addEventListener('load', event => {
    alert('Page is fully loaded!')
})

const textContent = document.querySelector('.home .content-section .text-content')
textContent.addEventListener('copy', event => {
    event.target.style.backgroundColor = "LightCyan"
})
textContent.addEventListener('click', event => {
    event.target.style.backgroundColor = "white"
})

const footerContent = document.querySelector('footer')
footerContent.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = "white"
})
footerContent.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "#FFEBCD"
})