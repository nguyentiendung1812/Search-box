let btn = document.querySelector('.search-box__btn')
let search_box= document.querySelector('.search-box')


btn.addEventListener('click',()=>{
    search_box.classList.toggle('show_search-box')
})