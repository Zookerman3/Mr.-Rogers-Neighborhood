
function feedInputNumbers(number){
    numArray = [];
    for(i = 0; i <= number; i++){
        numArray.push(i);
    }
    console.log(numArray);
    
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
