let start =document.getElementById('start')
let stop1 =document.getElementById('stop1')
let restart =document.getElementById('restart')
let ms =document.getElementById('ms')
let s =document.getElementById('s')
let m =document.getElementById('m')
let reset =document.getElementById('reset')
let labDiv =document.getElementById('labDiv')

function msf(){

    if(ms.textContent>=99 ){
        ms.textContent=0
        console.log("ssss");
        ms.textContent = parseInt( ms.textContent)+ 1 
        s.textContent = parseInt( s.textContent)+ 1 
        
    }else{
        
        ms.textContent = parseInt( ms.textContent)+ 1 
    }
    if(s.textContent==60){
        s.textContent=0
        m.textContent = parseInt( m.textContent)+ 1 
        
    }
       
}

start.addEventListener('click',()=>{
     Interval=  setInterval(msf, 10);
    start.classList.replace('d-block','d-none')
    stop1.classList.replace('d-none','d-block')
    msf()
})
reset.addEventListener('click',()=>{
    ms.textContent="00"
    s.textContent="00"
    m.textContent="00"
    clearInterval(Interval)
    
    })
stop1.addEventListener('click',()=>{
     clearInterval(Interval)
     stop1.classList.replace('d-block','d-none')
     start.classList.replace('d-none','d-block')
     
    })
    let i=0;
    restart.addEventListener('click',()=>{
    // clearInterval(Interval)
    console.log(m);
    i+=1
    box=
    `
    <p  class="labDiv border border-1 w-25 mx-auto text-center mt-3 p-2 rounded-1 ">
    
    #${i} ${m.textContent}:${s.textContent}:${ms.textContent}
    </p>
    ` 
    labDiv.innerHTML+=box
})