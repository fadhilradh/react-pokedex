export function shuffle(array: any[]): any[] {
   let counter = array.length;

   // while there are elements in the array
   while (counter > 0) {
      // Pick a random index
      let randomIndex = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[randomIndex];
      array[randomIndex] = temp;
   }

   return array;
}
