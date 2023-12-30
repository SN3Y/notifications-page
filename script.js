const message = document.querySelector('.message');
const redBtn = document.querySelector('.redBtn');
const contador = document.querySelector('.contador');

let count = 7
contador.innerHTML = count;

function m1(){
    message.classList.remove("bg-light-blue-1")
    redBtn.classList.remove('bg-red');
    redBtn.classList.add('bg-light-blue-1')
    contador.innerHTML = count - 1
    count -= 1
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
    }
    message.classList.add("pointer-events-none")
}
message.addEventListener('click', ()=> {
    m1()
})

const message2 = document.querySelector('.message2');
const redBtn2 = document.querySelector('.redBtn2');
function m2(){
    message2.classList.remove("bg-light-blue-1")
    redBtn2.classList.remove('bg-red');
    redBtn2.classList.add('bg-light-blue-1');
    contador.innerHTML = count - 1
    count -= 1
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
        contador.classList.add("hidden")
    }
    message2.classList.add("pointer-events-none")   
}
message2.addEventListener('click', ()=> {
    m2()
})

const message3 = document.querySelector('.message3');
const redBtn3 = document.querySelector('.redBtn3');
function m3(){
    message3.classList.remove("bg-light-blue-1")
    redBtn3.classList.remove('bg-red');
    redBtn3.classList.add('bg-light-blue-1');
    contador.innerHTML = count - 1
    count -= 1
    
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
        contador.classList.add("hidden")
    }
    message3.classList.add("pointer-events-none")
}
message3.addEventListener('click', ()=> {
    m3()
})

const message4 = document.querySelector('.message4');
const redBtn4 = document.querySelector('.redBtn4');
const mensaje = document.querySelector('.mensaje');
function m4(){
    message4.classList.remove("bg-light-blue-1")
    redBtn4.classList.remove('bg-red');
    redBtn4.classList.add('bg-light-blue-1');
    contador.innerHTML = count - 1
    count -= 1
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
        contador.classList.add("hidden")
    }
    if(mensaje.classList.contains("hidden")){
        count += 1
    }
}
message4.addEventListener('click', ()=> {
    m4()
})

const message5 = document.querySelector('.message5');
const redBtn5 = document.querySelector('.redBtn5');
function m5(){
    message5.classList.remove("bg-light-blue-1")
    redBtn5.classList.remove('bg-red');
    redBtn5.classList.add('bg-light-blue-1');
    contador.innerHTML = count - 1
    count -= 1
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
        contador.classList.add("hidden")
    }
    message5.classList.add("pointer-events-none")
}
message5.addEventListener('click', ()=> {
    m5()
})

const message6 = document.querySelector('.message6');
const redBtn6 = document.querySelector('.redBtn6');
function m6(){
    message6.classList.remove("bg-light-blue-1")
    redBtn6.classList.remove('bg-red');
    redBtn6.classList.add('bg-light-blue-1');
    contador.innerHTML = count - 1
    count -= 1
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
        contador.classList.add("hidden")
    }
    message6.classList.add("pointer-events-none")
}
message6.addEventListener('click', ()=> {
    m6()
})

const message7 = document.querySelector('.message7');
const redBtn7 = document.querySelector('.redBtn7');
function m7(){
    message7.classList.remove("bg-light-blue-1")
    redBtn7.classList.remove('bg-red');
    redBtn7.classList.add('bg-light-blue-1');
    contador.innerHTML = count - 1
    count -= 1
    if(count<=0){
        count=0
        btnAll.classList.add("hidden")
        contador.classList.add("hidden")
    }
    message7.classList.add("pointer-events-none")
}
message7.addEventListener('click', ()=> {
    m7()
})



const btnAll = document.querySelector('.markAllBtn');
btnAll.addEventListener('click', ()=> {
    m1(); m2(); m3(); m3(); m4(); m5(); m6(); m7();
    count = 0
    contador.innerHTML = count;
    btnAll.classList.add("hidden")
})