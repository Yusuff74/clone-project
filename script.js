const openMenu = document.querySelector('.hamburger-menu')
const animatedText = document.getElementById('animated-text')
const textAnimation = document.getElementById('text-animation')

openMenu.onclick = () => {
    if (openMenu.classList.contains('open')){
        openMenu.classList.remove('open')
    } else {
        openMenu.classList.add('open')
    }
}

const text = 'I am Yusuff Tukur'
const text2 = 'Yusuff Tukur'
const typingSpeed = 200
const deleteSpeed = 100
const pauseDuration = 2000

let charIndex = 0
let deleteMode = false


const typeWritter = () => {
    if (!deleteMode && charIndex < text.length){
        animatedText.textContent += text.charAt(charIndex)
        textAnimation.textContent += text2.charAt(charIndex)
        charIndex++
        setTimeout(typeWritter, typingSpeed)
    } else if (deleteMode && charIndex >= 0){
        animatedText.textContent = text.substring(0, charIndex)
        textAnimation.textContent = text2.substring(0, charIndex)
        charIndex--
        setTimeout(typeWritter, deleteSpeed)
    } else if (charIndex >= 0) {
        deleteMode = true
        setTimeout(typeWritter, pauseDuration)
    } else {
        deleteMode = false
        charIndex = 0
        setTimeout(typeWritter, typingSpeed)
    }
}

typeWritter()