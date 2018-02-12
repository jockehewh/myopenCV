var mains = document.querySelectorAll('main')
let count = 0
let subCount = 0
mains.forEach(main=>{
    main.addEventListener('wheel', (e)=>{
        count+= e.deltaY
        if(count > 900){
            document.querySelectorAll('div').forEach((div)=>{
                switch(div.classList.value){
                    case "a":
                        div.style.order = "4"
                    break;
                    case "b":
                        div.style.order = "3"
                    break;
                    case "c":
                        div.style.order = "2"
                    break;
                    case "d":
                        div.style.order = "1"
                    break;
                }
            })
        }
        if(count < 1000 && count > -400){
            subCount += 0.1*count
            document.querySelectorAll('div').forEach((div)=>{
                switch(div.classList.value){
                    case "a":
                        div.style.order = "1"
                    break;
                    case "b":
                        div.style.order = "2"
                    break;
                    case "c":
                        div.style.order = "3"
                    break;
                    case "d":
                        div.style.order = "4"
                    break;
                }
            })
        }
        if(count <= -700 && count >= -900){
            document.querySelector('.real_main').style.top = count*-1-600+'px'
        }
        if(count >= -100 && count <= 0){
            document.querySelector('.real_main').style.top = '0'
        }
    })
})
let fineCount = 0
let divA = document.querySelector('.a');
let divB = document.querySelector('.b');
let divC = document.querySelector('.c');
let divD = document.querySelector('.d');
document.body.addEventListener('wheel', (e)=>{
    fineCount += e.deltaY/2;
    var ac = {
        top: window.innerHeight/2+'px',
        left: window.innerWidth/2+'px'
    },
        bd = {
            top: window.innerHeight/2+'px',
            left: -window.innerWidth/2+'px'
        }
        if(count < 1000 && count >= 0){
            if(divA.style.left === "" && divA.style.top === ""){
                divA.style.left = '1px'
                divA.style.top = '1px'
            }else{
                if(parseInt(divA.style.left) < parseInt(ac.left) || parseInt(divA.style.top) < parseInt(ac.top)){
                    divA.style.left = 2*fineCount+'px'
                    divA.style.top = fineCount+'px'
                }else{
                    divA.style.left = '0px'
                    divA.style.top = '0px'
                }
            }
            if(divB.style.left === "" && divB.style.top === ""){
                divB.style.left = '1px'
                divB.style.top = '1px'
            }else{
                if(parseInt(divB.style.left) > parseInt(bd.left) || parseInt(divB.style.top) < parseInt(bd.top)){
                    divB.style.left = -2*fineCount+'px'
                    divB.style.top = fineCount+'px'
                }else{
                    divB.style.left = '0px'
                    divB.style.top = '0px'
                }
            }
            if(divC.style.left === "" && divC.style.top === ""){
                divC.style.left = '1px'
                divC.style.top = '1px'
            }else{
                if(parseInt(divC.style.left) < parseInt(ac.left) || parseInt(divC.style.top) > -parseInt(ac.top)){
                    divC.style.left = 2*fineCount+'px'
                    divC.style.top = -fineCount+'px'
                }else{
                    divC.style.left = '0px'
                    divC.style.top = '0px'
                }
            }
            if(divD.style.left === "" && divD.style.top === ""){
                divD.style.left = '1px'
                divD.style.top = '1px'
            }else{
                if(parseInt(divD.style.left) > -parseInt(bd.left) || parseInt(divD.style.top) > -parseInt(bd.top)){
                    divD.style.left = -2*fineCount+'px'
                    divD.style.top = -fineCount+'px'
                }else{
                    divD.style.left = '0px'
                    divD.style.top = '0px'
                }
            }
        }else{
            divA.style.left = '0'
            divA.style.top = '0'
            divB.style.left = '0'
            divB.style.top = '0'
            divC.style.left = '0'
            divC.style.top = '0'
            divD.style.left = '0'
            divD.style.top = '0'
        }
})

divD.querySelector('#node_span').addEventListener('mouseenter',()=>{
    divD.querySelector('section').style.display = 'inline-block'
    divD.querySelector('section').addEventListener('mouseleave', ()=>{
        divD.querySelector('section').style.display = 'none'
    })
})

var instantThé = document.querySelector('#direct')
var timeLapse = document.querySelector('#timelapse')
let presence = 0
let spanTime;
setInterval(function(){
    spanTime = new Date();
    presence++;
    instantThé.innerHTML =`${spanTime.toLocaleDateString()} ${spanTime.toLocaleTimeString()}`;
    timeLapse.innerHTML = `<br> Actif depuis ${timeLapse? presence: "Time problem"} ${presence > 1 ? "secondes": "seconde"}.`
},1000)
//toLocaleString()