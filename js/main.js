const modalAuth = document.querySelector(".modal-auth")
const buttonAuth = document.querySelector(".button-auth")
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector(".close-auth")
const logInForm = document.getElementById('logInForm')
const inputlogin = document.getElementById('login')
const inputpassword = document.getElementById('password')


const login = (user) => {
    buttonAuth.style.display = 'none'
    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'
    userName.textContent = user.login
    modalAuth.style.display = 'none'


}
const logout = () => {
    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    userName.textContent = ''

    localStorage.removeItem('user') // когда выходим из локал удаляем user
}
buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'

})
buttonOut.addEventListener('click', () => {
    logout()
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none' //нажимаем на крест окно ввода закрывается
})

logInForm.addEventListener('submit', (e) => {
    e.preventDefault() //при неудачно вводе окно ввода оставалось


    const user = {
        login: inputlogin.value,
        password: inputpassword.value,
    }
    if (user.login.length === 0) {
        alert('введите логин')
        login()
    }

    localStorage.setItem('user', JSON.stringify(user)) //сохрание в локал
    login(user)
})


if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user'))) //при перезагрузке пользователь оставался
}