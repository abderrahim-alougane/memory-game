//  slecting elements

const cols =document.querySelectorAll('.col-3');
const circles=document.querySelectorAll(".circle-hover")
const behide =document.querySelectorAll(".behide");
const Newgame =document.querySelector(".Newgame");

circles.forEach( (circle,index) =>{

    circle.addEventListener("click",function(){

        circle.classList.add("d-none");
        behide[index].classList.remove("d-none")
        behide[index].classList.add("open")
        const color =behide[index].dataset.color


        behide[index].style.backgroundColor=color;

        const opencircles =document.querySelectorAll(".open");

        console.log(opencircles.length)

        if(opencircles.length<=2){
            if( opencircles.length===2){
                    if(opencircles[0].dataset.color===opencircles[1].dataset.color){
                            opencircles[0].classList.add("correct")
                            opencircles[1].classList.add("correct")
                            opencircles[0].classList.remove("open")
                            opencircles[1].classList.remove("open")
                    }
                    else{

                        circles.forEach(circle1 => {
                          circle1.classList.add("cursor-none")
                        // circle1.removeEventListener("click")
 
                        });
                        setTimeout( function(){
                            // e.preventDefault();
  
                        opencircles[0].classList.add("d-none")
                        opencircles[1].classList.add("d-none")
                        opencircles[0].parentElement.firstElementChild.classList.remove("d-none");
                        opencircles[1].parentElement.firstElementChild.classList.remove("d-none"); 
                        
                        
                        opencircles[0].classList.remove("open")
                        opencircles[1].classList.remove("open")

                        circles.forEach(circle1 => {
                          circle1.classList.remove("cursor-none");
                          });

                        } ,1000)
                    }
            }
            else{
                return;
            }
        }
        else{
            opencircles[0].parentElement.firstElementChild.classList.remove("d-none");
            opencircles[1].parentElement.firstElementChild.classList.remove("d-none");            
        }
    })
})

// function




Newgame.addEventListener("click",function(){
    circles.forEach((circle1,index) => {
        circle1.classList.remove("d-none");
        behide[index].classList.add("d-none")
        behide[index].classList.remove("open")

        });


})



