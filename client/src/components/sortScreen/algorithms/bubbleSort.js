import { swap } from '../helper/swap.js';


export const bubbleSort = async(array) => {
    let n = array.length;
    let moves = [];

    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if(array[j] > array[j+1]) {
                await swap(array, j, j+1);
                moves.push([j, j+1, true]);
            } else {
                moves.push([j, j+1, false]);
            }
        }
    }
<<<<<<< HEAD
    
=======

>>>>>>> f79b5b18e1efddde39adc5bd971c02c4392b2a94
    return moves;
}