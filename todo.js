const modebtn =document.getElementById('mode')
const modebody = document.getElementById('container')
let nightmode = false
modebtn.addEventListener('click',function(){
    const body = document.body;
    
    if(nightmode){
        body.style.backgroundColor ="white"
        modebtn.innerText = 'Light'

        nightmode = false
    }else{
        body.style.backgroundColor = '#3b3b39'
        modebtn.innerText ='Dark'

        nightmode = true
    }
})

const additem= document.querySelector('.add')
const mytext = document.getElementById('text')

additem.addEventListener('click',()=>{
    if(mytext.value.length == 0){
        alert("please Enter")
    }else{
        document.querySelector('.main2').innerHTML += `<div class="main2">${mytext.value}<button class="btn">Del</button></div>`
        mytext.value =""
        let current_tasks = document.querySelectorAll('.btn')
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    } 
})
