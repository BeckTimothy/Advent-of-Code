const fs = require('fs');
let input = fs.readFileSync('./input.txt');
//convert inputs
let inputs = input.toString().split('\n')[0];
inputs = inputs.split(',');
let boards = input.toString().split('\n\n');
boards.shift();
boards = boards.map(x=> {
    x = x.split('\n')
        .map(x=>x.split(/[\s]+/)
        .filter(x =>x !== ""))
        .filter(x => x.length !== 0)
    return x
    })

let currentNums = [];

const callNumber = () => {
    currentNums.push(inputs.shift());
}
let winningBoard = null;
const checkBoards = (boardArr, numArr) => {
    let winner = null
    for(let i=0;i<boardArr.length;i++){
        //check for horizontal match
        if(boardArr[i].some(z => z.every(x => numArr.includes(x)))){
            winner = boardArr[i]
        }
        //check for vertical match
        for(let j=0;j<5;j++){
            let temp = [
                boardArr[i][0][j],
                boardArr[i][1][j],
                boardArr[i][2][j],
                boardArr[i][3][j],
                boardArr[i][4][j]
            ]
            if(temp.every(x => numArr.includes(x))){
                winner = boardArr[i]
            }
        }
    }
    return winner;
}
const removeWinningBoards = (boardArr, numArr) => {
    for(let i=0;i<boardArr.length;i++){
        let makeNull = false;
        //check for horizontal match
        if(boardArr[i].some(z => z.every(x => numArr.includes(x)))){
            makeNull = true;
        }
        //check for vertical match
        for(let j=0;j<5;j++){
            if(boardArr[i]!==null){
                let temp = [
                    boardArr[i][0][j],
                    boardArr[i][1][j],
                    boardArr[i][2][j],
                    boardArr[i][3][j],
                    boardArr[i][4][j]
                ]
                if(temp.every(x => numArr.includes(x))){
                    makeNull = true;
                }
            }
        }
        if(makeNull){
            boardArr[i] = null
            boardArr = boardArr.filter(x=> x !== null)
        }
    }
    return boardArr;
}
const solveBoard = (board, winningNumbers) => {
    let mergedBoard = board[0].concat(board[1],board[2],board[3],board[4])
    let leftoverNums = mergedBoard.map(x => winningNumbers.includes(x)?0:Number(x))
    let boardScore = leftoverNums.reduce((x,y)=>x+y);
    let mostRecentNum = Number(winningNumbers[winningNumbers.length -1])
    return boardScore * mostRecentNum
}
//solve for challenge 1
const winBingo = () => {
    winningBoard = null;
    while(winningBoard === null){
        callNumber();
        winningBoard = checkBoards(boards, currentNums);
    }

    return  solveBoard(winningBoard, currentNums)
}
//solve for challenge 2
const loseBingo = () => {
    winningBoard = null;
    while(boards.length > 1){
        callNumber();
        boards = removeWinningBoards(boards, currentNums);
    }
    while(winningBoard === null){
        callNumber();
        winningBoard = checkBoards(boards, currentNums);
    }
    return  solveBoard(winningBoard, currentNums)
}

console.log(winBingo())
console.log(loseBingo())
