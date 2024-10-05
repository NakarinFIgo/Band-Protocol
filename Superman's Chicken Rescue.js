function rescueChicken(n, k, chickenPosition) {
  let maxChickenSaved = 0;

  // roof set up start at 1st chicken position
  for (let i = 0; i < n; i++) {
    let currentChickenSaved = 1; // first chicken set up a roof is always safe.
    
    //loop for check if chicken position not over roof length
    for (let j = i + 1; j < n; j++) {
      if (chickenPosition[j] - chickenPosition[i] < k) {
        currentChickenSaved++;
      } else {
        break;
      }
    }
    // compare max value between current saved and max saved and set value to maxChickenSaved variable.
    maxChickenSaved = Math.max(maxChickenSaved, currentChickenSaved);
  }
  return maxChickenSaved;
}

// Example test cases
console.log(rescueChicken(5, 5, [2, 5, 10, 12, 15])); // 2
console.log(rescueChicken(6, 10, [1, 11, 30, 34, 35, 37])); // 4
console.log(rescueChicken(7, 6, [2, 3, 4, 6, 7, 10, 11])); // 5
console.log(rescueChicken(9, 99, [1, 2, 3, 4, 6, 7, 8, 80, 98])); // 9
