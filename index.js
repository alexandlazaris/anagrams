let anagram = (s) => {
    let numOfChangesNeeded = 0;
    
    // form an array out of the provided string
    let fullStringArray = Array.from(s);
    // get the full length
    let lengthOfFullString = fullStringArray.length;
    // find the middle point
    let indexToSplit = lengthOfFullString / 2;
    // form the 1st half by spltting from start to middle point
    let firstHalfArray = fullStringArray.splice(0, indexToSplit)
    // splice removes the 1st half of the original array leaving the 2nd half
    // we could run splice again but the remaining array is already intact so we can simply use that
    let secondHalfArray = fullStringArray;
    // alternative to be consistent > let secondHalfArray = fullStringArray.splice(0, indexToSplit)

    // looping through the 2nd array
    secondHalfArray.forEach(secondHalfArrayElement => {
        // if the 1st array includes the currently looping element
    if(firstHalfArray.includes(secondHalfArrayElement)){
        // do something
    }
     // if the 1st array does NOT includes the currently looping element
    else{
        // a change must be made since the value is not shared
        numOfChangesNeeded++;
    }
    });
    return numOfChangesNeeded;
}

module.exports = anagram;