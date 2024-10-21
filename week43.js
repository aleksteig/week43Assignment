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
    numberOfColums = 1;
    numberOfSpaces = 0;
    while(size > numberOfColums){
        console.log(arrowSign.repeat(numberOfColums) + spaceBetweenSigns.repeat(numberOfSpaces));
        numberOfColums += 1;
        numberOfSpaces += 1;
    }
    console.log(arrowSign.repeat(numberOfColums) + spaceBetweenSigns.repeat(numberOfSpaces));
    if (numberOfColums == size){
        while (numberOfColums > 0){
            numberOfColums -= 1;
            numberOfSpaces -= 1;
            if(numberOfSpaces >= 0){
                console.log(arrowSign.repeat(numberOfColums) + spaceBetweenSigns.repeat(numberOfSpaces));
            }
            
        }
    }
}

drawArrow(3);

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

function drawApproximateSquare(dimension){
    let corners = "+";
    let topAndBottomOutput = "-";
    let emptySpace = " ";
    let sides = "|";
    console.log(corners + topAndBottomOutput.repeat(dimension * 2.5) + corners);
    for(i=0; i<dimension; i++){
        console.log(sides + emptySpace.repeat(dimension * 2.5) + sides);
    }
    console.log(corners + topAndBottomOutput.repeat(dimension * 2.5) + corners);
}

drawApproximateSquare(4);


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isItAHeterogram(word){
    let charList = [];
    for(i = 0; i < word.length; i++){
        charList.push(word[i]);
    }
    if(charList.length == word.length){
        charList.sort();
        for(i = 0; i < charList.length; i++){
            if (charList[i] == charList[i+1]){
                return console.log("false");
            }
        }
    }
    return console.log("true");
}

isItAHeterogram("orange");

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function areTheyAnagrams(firstWord, secondWord){
    let charListOne = [];
    let charListTwo = [];
    let countSimilarLetters = 0;
    if (firstWord.length == secondWord.length){
        for(i = 0; i < firstWord.length; i++){
            charListOne.push(firstWord[i]);
        }
        for(i = 0; i < secondWord.length; i++){
            charListTwo.push(secondWord[i]);
        }
        charListOne.sort();
        charListTwo.sort();
        for(i = 0; i < charListOne.length; i++){
            if (charListOne[i] == charListTwo[i]){
                countSimilarLetters += 1;
            }
        }
        if (countSimilarLetters == firstWord.length && secondWord.length){
            return console.log("true");
        } else {
            return console.log("false")
        }
    } else {
        return console.log("false");
    }
}

areTheyAnagrams("stolt", "slott")