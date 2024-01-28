let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")
let newGame = document.querySelector(".new-game")
let btnO = true;
let winnerCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (btnO) {
            box.innerText = "O";
            btnO = false;
        }
        else {
            box.innerText = "X"
            btnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
let resetGame = ()=>{
    btnO = true;
     enableBtn()
}

const result = (winner) => {
    msg.innerText = `congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    boxDisable()
}
let enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "",
        msgContainer.classList.add("hide")
    }
}
let boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let checkWinner = () => {
    for (let pattern of winnerCondition) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                result(pos1val)
            }
        }
    }
}
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);