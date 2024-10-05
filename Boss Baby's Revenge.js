function bossBabyRevenge(event) {
  let shotCount = 0; // Count "S"

  // loop for count shot
  for (let i = 0; i < event.length; i++) {
    // Check : if "R" at start "Bad boy"
    if (event[0]==="R") {
        return "Bad boy"
    }
    // Check : if found "S" shotCount +1
    else if (event[i]==="S") {
        shotCount++

    }// Check : if found "R" shotCount -1
    if (event[i]==="R") {
        //Check : Start with "S" shotCount must be > 0 
        if (shotCount > 0) {
            shotCount--
        }
    }
  }
  // Check : total shotCount at final is 0 return "Good boy"
  return shotCount === 0 ? "Good boy" : "Bad boy"
}

console.log(bossBabyRevenge("SRSSRRR")); // Good boy
console.log(bossBabyRevenge("RSSRR")); // Bad boy
console.log(bossBabyRevenge("SSSRRRRS")); // Bad boy
console.log(bossBabyRevenge("SRRSSR")); // Bad boy
console.log(bossBabyRevenge("SSRSRR")); // Good boy 
