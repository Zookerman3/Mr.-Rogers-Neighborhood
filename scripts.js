
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
        if (element === "1"){
            wordArray.push("Beep!")
        } else (wordArray.push(element))
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
