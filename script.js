const email = document.querySelector('.email')
const btnSub = document.querySelector('.btn-sub')
const error = document.querySelector('.error')
const popup = document.querySelector('.popup')
const popBtn = document.querySelector('.pop-btn')
const container = document.querySelector('.container')

const validEmail = () => {
    const reg =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (reg.test(email.value)) {
        popup.style.visibility = 'visible'
        container.style.visibility = 'hidden'
        email.style.backgroundColor = "white"
        email.classList.remove('error')
        clearInput()
    } else {
        error.style.display = 'block'
        error.textContent = 'Valid email requaid'
        email.style.backgroundColor = "pink"
        email.classList.add('error')
    }
}

const clearInput = () => {
    email.placeholder = ''
    email.style.backgroundColor = "white"
    error.textContent = ''
    
}

const closePopup = () => {
    popup.style.visibility = 'hidden'
    container.style.visibility = 'visible'
    location.reload();
    
}

email.addEventListener('focus', clearInput)
popBtn.addEventListener('click', closePopup)
btnSub.addEventListener('click', validEmail)