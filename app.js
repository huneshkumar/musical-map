
let music = document.querySelectorAll('.music').length
 document.querySelector('h1').addEventListener('click',function(){
    audio.pause()
    audio.currentTime=0
 })


for(let i=0;i<music;i++){
    document.querySelectorAll('.music')[i].addEventListener('click',function(){
       let province=this.title
       switch(province){
           case 'sindh':
               audio=new Audio('sounds/jiye-sindh-1374.mp3')
               audio.play()
               break
            case 'punjab':
                
                audio=new Audio('sounds/punjab.mp3')
                audio.currentTime=168
                audio.play()
                break
            
            case 'kashmir':
                audio=new Audio('sounds/tom-3.mp3')
                audio.play()
                break

            case 'balochistan':
                audio=new Audio('sounds/tom-4.mp3')
                audio.play()
                break

            default:
                console.log('exit')

       }
    })
}

// sindh.addEventListener('click',function(){
//     var audio=new Audio('sounds/jiye-sindh-1374.mp3')
//     audio.play()
    
    
// })
// punjab.addEventListener('click',function(){
//     var audio=new Audio('sounds/jiye-sindh-1374.mp3')
//     audio.play()
    
    
// })
// balochistan.addEventListener('click',function(){
//     var audio=new Audio('sounds/jiye-sindh-1374.mp3')
//     audio.play()
    
    
// })
// kashmir.addEventListener('click',function(){
//     var audio=new Audio('sounds/jiye-sindh-1374.mp3')
//     audio.play()
    
    
// })
