// Function to shuffle array and return new array
export function shuffle(array: any[]) {
    let currentIndex = array.length;
    const returnArray = array;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [returnArray[currentIndex], returnArray[randomIndex]] = [
        returnArray[randomIndex], returnArray[currentIndex]];
    }
    return returnArray;
}
  