var letters = "ABSDEFGHIGKLMNOPQRSTUVWXY";
var lengt = letters.length;
document.querySelector("h1").onmouseover = event=>{
  
  var interations = 0;
  
  var interval = setInterval(()=>{    /*aq iwyeba 2*/
    
  event.target.innerText= event.target.innerText.split("")
  .map((letter, index) => {     /*aq meore */
    
    if(index < interations) {
      return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * lengt)]
    
  }).join("");
  
      if(interations >= event.target.dataset.value.length){
         clearInterval(interval);
      }
  interations+=1/3;  
  },55);
}