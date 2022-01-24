type Number = {
   number: number;
   targetLength: number;
};

export function leftPad({ number, targetLength }: Number): string {
   let output = Math.abs(number).toString();
   while (output.length < Math.abs(targetLength)) {
      output = "0" + output;
   }
   return output;
}
