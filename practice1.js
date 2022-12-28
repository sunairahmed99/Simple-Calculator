const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");
let screenvalue = ""

for(value of button){
    value.addEventListener("click",(e)=>{
        let buttontext = e.target.innerText; 
        console.log("clicked" + buttontext)

        if(buttontext == "X"){
            buttontext = '*'
            screenvalue += buttontext;
            screen.value = screenvalue;
            console.log("clicked" + buttontext)
        }
        else if(buttontext == "C"){
            screenvalue = ""
            screen.value = screenvalue
        }
        else if(buttontext == "="){
            screen.value = eval(screenvalue)
        }
        else if(buttontext == "del"){
            screen.value = screen.value.slice(0,-1)

            }
            
           
            
            
        
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;

        }

    })
    
}