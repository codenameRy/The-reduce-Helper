//Condensing List with Reduce

//For Loop

var numbers = [10,20,30]
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum + " with For Loop")

//Refactor with Reduce

var newNumbers = numbers.reduce((acc, val) => {
  return acc + val;
}, 0)

console.log(newNumbers + " with Reduce Method");

//A Touch More of Reduce

var primaryColors = [
  { color: 'purple' },
  { color: 'blue' },
  { color: 'orange' }
]

primaryColors.reduce((acc, val) => {
  acc.push(val.color);
  return acc;
}, [])

//Ace Your Next Interview with Reduce