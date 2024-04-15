export default function returnHowManyArguments(...args) {
  let numberOfParam = 0;

  for (const arg of args) {
    numberOfParam += arg.length;
  }
  return numberOfParam;
}
