
function feedInputNumbers(number){
    numArray = [];
    for(i = 0; i <= number; i++){
        numArray.push(i);
    }
    return changeNumtoWords(numArray);
}

function changeNumtoWords(numArray){
    wordArray = [];
    numArray.forEach(function(element){
        if (element.toString().includes("3")){
            wordArray.push("Won't you be my neighbor?");
        } else if(element.toString().includes("2")){
            wordArray.push("Boop!");
        } else if(element.toString().includes("1")){
            wordArray.push("Beep!")
        }  else (wordArray.push(element))        
    })
    return wordArray.join(", ")
}






window.addEventListener("load", function(){
    const submitButton = document.querySelector("#submitNumber");
    const numberInput = document.querySelector("#collectInput");
    const output = this.document.querySelector("p")
    window.addEventListener("submit", function(event){
        event.preventDefault();
        feedInputNumbers(numberInput.value);
        output.innerText = feedInputNumbers(numberInput.value);
    })
});