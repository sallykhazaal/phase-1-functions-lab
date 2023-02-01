// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  if (number <= 42) {
    return 42 - number;
  } else {
    return number - 42;
  }
  //returns the number of blocks given a value
}

function distanceFromHqInFeet(number) {
  return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, end) {
  const overallDistance = distanceTravelledInFeet(start, end);

  if (overallDistance < 400) {
    return 0;
  } else if (overallDistance > 400 && overallDistance <= 2000) {
    return (overallDistance - 400) * 0.02;
  } else if (overallDistance > 2000 && overallDistance < 2500) {
    return 25;
  } else if (overallDistance > 2500) {
    return "cannot travel that far";
  }
}
