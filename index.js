// Code your solution here
function findMatching(origin, find) {
    return origin.filter((possibleMatch) => possibleMatch.toLowerCase() === find.toLowerCase());
  }

  function fuzzyMatch(origin, testString) {
    return origin.filter((possibleMatch) => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0);
  }

  function matchName(origin, findName) {
    return origin.filter((info) => info.name === findName);
  }