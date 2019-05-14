// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (event) => {
    event.target.style.color = "Cyan";
    console.log('mouseover')
})
nav.addEventListener('mouseout', (event) => {
    event.target.style.color = "black"
    console.log('mouseout')
})

// const headerImg = document.querySelectorAll('img');
// headerImg.addEventListener('click', event => {
//     event.target.style.width = "200px"
//     console.log('click')
// })

const nodeList = document.querySelectorAll('img')

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function() {
        nodeList[i].style.width = "200px"
    })
}