// Getting creative with logical operators

for (let i=1; i<=100; i++) {
  let log='';
  if (i%3===0) log+='Fizz';
  if (i%5===0) log+='Buzz';
  console.log(log||i);
}
