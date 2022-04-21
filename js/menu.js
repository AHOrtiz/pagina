const hambueguer= document.querySelector('.hamburguer');
const menu=document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hambueguer);

hambueguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    
})