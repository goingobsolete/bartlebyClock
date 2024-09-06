const fs = require('fs');

// Read the JSON file
const filePath = '/Users/paulwrperez/Dropbox/02_Areas/github/bartlebyClock/data/words_with_line_numbers.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Constants
const oneHourInMs = 3600000;

// Add test cases to the data
data.push(
  { word: "I", startTime: 0, endTime: 1000 },
  { word: "would", startTime: 3600000, endTime: 3601000 },
  { word: "prefer", startTime: 7200000, endTime: 7201000 },
  { word: "not", startTime: 10800000, endTime: 10801000 },
  { word: "to", startTime: 14400000, endTime: 14401000 }
);

// Function to normalize words (convert to lowercase and remove punctuation)
const normalizeWord = word => word.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

// Find instances of "I", "would", "prefer", "not", and "to"
const instancesOfI = data.filter(item => normalizeWord(item.word) === "i");
const instancesOfWould = data.filter(item => normalizeWord(item.word) === "would");
const instancesOfPrefer = data.filter(item => normalizeWord(item.word) === "prefer");
const instancesOfNot = data.filter(item => normalizeWord(item.word) === "not");
const instancesOfTo = data.filter(item => normalizeWord(item.word) === "to");

// Function to check for instances separated by a multiple of one hour
const checkInstances = (instancesA, instancesB, wordA, wordB) => {
  const resultInstances = [];
  let found = false;
  instancesA.forEach(instanceA => {
    instancesB.forEach(instanceB => {
      for (let timeA = instanceA.startTime; timeA <= instanceA.endTime; timeA++) {
        for (let timeB = instanceB.startTime; timeB <= instanceB.endTime; timeB++) {
          const timeDifference = Math.abs(timeB - timeA);
          if (timeDifference >= oneHourInMs && timeDifference % oneHourInMs === 0) {
            console.log(`Found instance: "${wordA}" at ${timeA}ms and "${wordB}" at ${timeB}ms with a difference of ${timeDifference}ms`);
            resultInstances.push({ ...instanceB, previous: instanceA });
            found = true;
            break;
          }
        }
        if (found) break;
      }
    });
  });
  if (!found) {
    console.log(`No instances found where "${wordA}" is separated by a multiple of an hour from "${wordB}".`);
  }
  return resultInstances;
};

// Function to convert milliseconds to hours and minutes
const msToTime = duration => {
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return `${hours}h ${minutes}m`;
};

// Arrays to store the connected words with their times
const linkedIWould = [];
const linkedIWouldPrefer = [];
const linkedIWouldPreferNot = [];
const linkedIWouldPreferNotTo = [];

// Perform the searches in the specified order
const foundIToWould = checkInstances(instancesOfI, instancesOfWould, "I", "would");
if (foundIToWould.length > 0) {
  linkedIWould.push(...foundIToWould.map(instance => [instance.previous.startTime, instance.startTime])); // e.g., [0ms, 3600000ms] -> [0h 0m, 1h 0m]
  const foundWouldToPrefer = checkInstances(foundIToWould, instancesOfPrefer, "would", "prefer");
  if (foundWouldToPrefer.length > 0) {
    linkedIWouldPrefer.push(...foundWouldToPrefer.map(instance => [instance.previous.previous.startTime, instance.previous.startTime, instance.startTime])); // e.g., [0ms, 3600000ms, 7200000ms] -> [0h 0m, 1h 0m, 2h 0m]
    const foundPreferToNot = checkInstances(foundWouldToPrefer, instancesOfNot, "prefer", "not");
    if (foundPreferToNot.length > 0) {
      linkedIWouldPreferNot.push(...foundPreferToNot.map(instance => [instance.previous.previous.previous.startTime, instance.previous.previous.startTime, instance.previous.startTime, instance.startTime])); // e.g., [0ms, 3600000ms, 7200000ms, 10800000ms] -> [0h 0m, 1h 0m, 2h 0m, 3h 0m]
      const foundNotToTo = checkInstances(foundPreferToNot, instancesOfTo, "not", "to");
      if (foundNotToTo.length > 0) {
        linkedIWouldPreferNotTo.push(...foundNotToTo.map(instance => [instance.previous.previous.previous.previous.startTime, instance.previous.previous.previous.startTime, instance.previous.previous.startTime, instance.previous.startTime, instance.startTime])); // e.g., [0ms, 3600000ms, 7200000ms, 10800000ms, 14400000ms] -> [0h 0m, 1h 0m, 2h 0m, 3h 0m, 4h 0m]
      }
    }
  }
}

console.log('Script has finished running.');
console.log('Linked I and would:', linkedIWould.map(times => times.map(msToTime)));
console.log('Linked I, would, and prefer:', linkedIWouldPrefer.map(times => times.map(msToTime)));
console.log('Linked I, would, prefer, and not:', linkedIWouldPreferNot.map(times => times.map(msToTime)));
console.log('Linked I, would, prefer, not, and to:', linkedIWouldPreferNotTo.map(times => times.map(msToTime)));