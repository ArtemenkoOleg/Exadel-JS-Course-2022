for (let i = 1; i <= 100; i++) {
  if (i % 3 != 0 && i % 5 != 0) // if NOT divisible by 3 AND 5
  {
      console.log(i); // 
  } 
  else if (i % 3 != 0 && i % 5 == 0) // if divisible by 5, NOT 3
  {
  console.log ("number " + i + " is divisible by 5" )
  } 
  else if (i % 5 != 0 && i % 3 == 0) // if divisible by 3, NOT 5
  {
  console.log ("number " + i + " is divisible by 3" )
  }
  else 
  {
  console.log ("number " + i + " is divisible by 3 and 5" )
  }
}