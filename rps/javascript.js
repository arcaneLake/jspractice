function vsCPU() {
    const choices = ["rock", "paper", "scissors"];

    let getRandomcpu = choices[Math.floor(Math.random() * choices.length)];
    let getRandomuser = prompt("Choose");
    console.log(getRandomuser);
    console.log(getRandomcpu);

    if (getRandomuser === getRandomcpu) {
        console.log("match!");
    } else if (getRandomuser === "rock" && getRandomcpu === "scissors") {
        console.log("You win!");
    } else if (getRandomuser === "paper" && getRandomcpu === "rock") {
        console.log("You win!");
    } else if (getRandomuser === "scissors" && getRandomcpu === "paper") {
        console.log("You win!");
    } else {
        console.log("CPU wins!");
    }

    
}

vsCPU();