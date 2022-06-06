// iterating Elements

const dailyRoutine = ["wakeup", "eat", "sleep"];

// for of
for (let routine of dailyRoutine) {
  console.log(routine);
}

// for in
for (routine in dailyRoutine) {
  console.log(routine, dailyRoutine[routine]);
}

// forEach   // Using callback function
dailyRoutine.forEach(function (routine, routineIndex) {
  console.log(routineIndex, routine);
});

// Using Fat Arrow function
dailyRoutine.forEach((routine) => console.log(routine));
