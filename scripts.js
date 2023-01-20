
function feedInputNumbers(number){
    numArray = [];
    for(i = 0; i <= number; i++){
        numArray.push(i);
    }
    console.log(numArray);
    return changeNumtoWords(numArray);
}

function changeNumtoWords(numArray){
    wordArray = [];
    numArray.forEach(function(element){
        if (element.toString().includes("1")){
            wordArray.push("Beep!");
        } else if(element.toString().includes("2")){
            wordArray.push("Boop!");
        } else if(element.toString().includes("3")){
            wordArray.push("Won't you be my neighbor?");
        }  else (wordArray.push(element))
         console.log(wordArray);           
    })
    console.log(wordArray);
}






window.addEventListener("load", function(){
    const submitButton = document.querySelector("#submitNumber");
    const numberInput = document.querySelector("#collectInput");

    window.addEventListener("submit", function(event){
        let word = "text"
        event.preventDefault();
        feedInputNumbers(numberInput.value)
    })
})
// else (wordArray.push(element))
// console.log(wordArray);