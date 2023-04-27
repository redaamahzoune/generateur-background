let hexaColor=document.getElementById('hexa')
let btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    let color="0123456789ABCDEF"
    let clr="#"
    for(let i=0;i<6;i++){
        let x=Math.floor(Math.random()*16)
        clr=clr+color[x]
    }
    hexaColor.innerHTML=clr
    document.body.style.backgroundColor=clr
    hexaColor.style.color=clr
})