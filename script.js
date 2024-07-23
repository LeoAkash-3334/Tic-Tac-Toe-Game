let boxes = document.querySelectorAll('.Box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msg-con');
let msg = document.querySelector('#msg');

let turn = 0;
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
];
boxes.forEach(Box => {
    Box.addEventListener('click', () => {
        if (turn === 0) {
            Box.innerText = 'X';
            turn = 1;
        } else {
            Box.innerText = 'O';
            turn = 0;
        }
        Box.disabled = true;
        checkWin();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (pattern) => {
    if(turn === 0){
        msg.innerText = `Congratulations, Winner is O!!`;
    } else {
        msg.innerText = `Congratulations, Winner is X!!`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
    // Change the background color of the winning pattern to green
    pattern.forEach(index => {
        boxes[index].style.backgroundColor = 'green';
    });
};
const checkWin = () => {
    for (pattern of win) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                showWinner(pattern);
                return;
            }
        }
    }
};
const resetGame = () => {
    turn = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.style.backgroundColor = ''; // Reset background color
    });
};
newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);
