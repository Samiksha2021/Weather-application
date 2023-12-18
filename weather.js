let Apikey='9f6290d6cda9a36a63755fadee71f83d '

let inp=   document.querySelector('input')
let btn=    document.querySelector('button')
let temp=   document.querySelector('#temp')
let p=  document.querySelector('#location')

btn.addEventListener('click',()=>{
   let text= inp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${text} &appid=${Apikey}`)
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    fun1(data)

})

})

function fun1(data){
    temp.innerHTML=data.main.temp
    p.innerHTML=data.name


}