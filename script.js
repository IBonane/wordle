inputMot = document.querySelector("#motEntre")
//valider = document.querySelector("#valider")

let listeAutoriser = [
    "bseay",
    "absit",
    "abuna",
    "abune",
    "abuts",
    "abuzz",
    "abyes",
    "abysm",
    "acais",
    "acari",
    "accas",
    "accoy",
    "acerb",
    "acers",
    "aceta",
    "achar",
    "ached",
    "aches",
    "achoo",
    "acids"
]
let message = document.querySelector("#msg")
let solution = "bseay"
let userInput = ""

inputMot.addEventListener("change", function(){
    //console.log(this.value)
    userInput = this.value
    document.querySelector("#motEntree").innerText = userInput
    this.value = ""

    if(listeAutoriser.includes(userInput))
            verification(userInput);   
    else
        message.innerText = "Mot non autoriser !"
})

function verification(entree){

    if(entree == solution)
        message.innerText = "Bravo"
    
    else{
        for(let index = 0; index < entree.length; index++){
            const solutionIndex = solution.indexOf(entree[index])

            if(solutionIndex==-1)
                message.innerText += " _ "
            else if(solutionIndex == index){
                message.innerText += " # "
                solution = solution.replace(solution[solutionIndex], " ")
            }

                
            else{
                message.innerText += " * "
                solution = solution.replace(solution[solutionIndex], " ")
            }
        }

                
    }  
}