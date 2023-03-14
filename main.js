const btn = document.querySelector('.btn')
const counter = document.querySelector('.counter')

let a = 0
btn.addEventListener('click', () => {
    if(a < 11){
        counter.textContent = `${a++}`;
    }
    if(a == 10 ){
        alert('tugadi')
    }
});