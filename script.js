const dropmenu = document.querySelector('ul.dropdown-menu');
const dropbtn = document.querySelector('.dropdown-btn');

dropbtn.addEventListener('click',()=>{
    dropmenu.classList.toggle('active');
    dropbtn.classList.toggle('fill')
})