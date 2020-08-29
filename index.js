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

//Balanced Params

 function balancedParams(string) {

   //Change to boolean with ! before !string. + or - number will returned true. Interprets zero as falsy
   return !string.split("").reduce((previous, char) => {
     if (char === 0 ) {return previous; }
     if (char === "(") {return ++ previous; }
     if (char === ")") {return -- previous; }
     return previous 
   }, 0)
 }

balancedParams(")(");

//Challenge 1 - Distance Traveled

//Use the 'reduce' helper to find the sum of distances traveled

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((acc, val) => {
  return acc + val.distance;
}, 0);

console.log(totalDistance);

//Challenge 2 - Reducing Properties

//Use the  'reduce' helper to create an object that tallies the number of sitting and standing desks. Should return { sitting: 3, standing: 2}

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    acc[Object.values(desk)]++;
    return acc;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

//Challenge 3 - Hard Mode: Custom 'Unique' Helper

//Write a function 'unique' that will remove all duplicate values from an array

var numbers = [ 1,1,2,3,4];

//Solution 1 with ES6 Set Method
function unique(array) {
  return [...new Set(array)]
}

console.log(unique(numbers))

function unique2(array) {
  return array.reduce(function(acc,number){
    acc.find(previousValue => number === previousValue) ? acc : acc.push(number);
    return acc;
  },[])
};

console.log(unique2(numbers));

