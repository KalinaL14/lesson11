const btn = document.querySelector('#btn')
const square = document.querySelector('#square')
const circleButton = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
circleButton.style.display = 'none'
const inputRange = document.querySelector('#range')


const changeColor = function() {
    square.style.backgroundColor = document.querySelector('#text').value
}
const changeCircle = function() {
    const procent = `${document.querySelector('#range').value}%`
    circle.style.height = procent
    circle.style.width = procent

btn.addEventListener('click', changeColor)
inputRange.addEventListener('input', changeCircle)

