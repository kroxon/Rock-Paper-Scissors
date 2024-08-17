console.log("Hello World!!")

function getComputerChoice() {
    let number = parseInt((Math.random() * 100) % 3)
    switch(number) {
        case 0: 
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}