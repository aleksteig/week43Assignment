// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height){
    let spaceBeforeTree = " ";
    let tree = "*";
    let numberOfLeaves = 1;
    let spaceBeforeTreeNumber = height;
    let repeatSpace = spaceBeforeTree.repeat(spaceBeforeTreeNumber);
    if (height > 1){
        for(i=0; i < height-1; i++){
            console.log(spaceBeforeTree.repeat(spaceBeforeTreeNumber) + tree.repeat(numberOfLeaves));
            if (i < height-2){
                spaceBeforeTreeNumber -= 1;
                numberOfLeaves += 2;
            }
        }
    }
    if (height == 1){
        console.log(repeatSpace + "x");
        console.log("Only the stump remains.")
    } else if (height > 1){
        console.log(repeatSpace + "x");
    } else {
        console.log("The wind took the tree away.");
    }
}

drawTree(0);


/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size){
    let spaceBetweenSigns = " ";
    let arrowSign = "*";
}

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");



/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");



/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");