const menu = document.querySelector(".toggle_menu")
const stack = document.querySelector(".toggle_stack")
const toggle = document.querySelectorAll(".toggle")
const sidebar = document.querySelector(".sidebar")

//toggle menu function
const toggleMenu =()=>{

    sidebar.classList.toggle("nav_active")
    stack.classList.toggle('tog')

}

menu.addEventListener('click', toggleMenu)