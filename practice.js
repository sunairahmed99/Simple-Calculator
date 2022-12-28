let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
let screen1 = " "

for(value of button){
    value.addEventListener("click", (e)=>{
        let buttontxt = e.target.innerText
        console.log("clicked" + buttontxt)

        if(buttontxt == "X"){
            buttontxt = '*'
            screen1 += buttontxt;
            screen.value = screen1; 
        }
        else if(buttontxt == "C"){
            screen1 = " ";
            screen.value = screen1
        }
        else if(buttontxt == "="){
            screen.value = eval(screen1);
        }
        else{
            screen1 += buttontxt;
            screen.value = screen1; 

        }
    })

   


}
 


