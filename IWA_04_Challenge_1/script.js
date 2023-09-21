const date = 2050;
const status = "parent"; //changed status to parent
let count = 0; //Changed it to let to allow for reassignment of variable

// Colon was being used to assign a value to a variable instead of an equals sign

if (date == 2050) {
  //single = sign is being used instead of double

  console.log("January", "New Year’s Day"); // Closing bracket was missing
  console.log("March", "Human Rights Day");
  let month = "April";
  console.log(month, "Family Day");
  console.log(month, "Freedom Day");
  count = count + 4;

  if (status == "student") {
    console.log("June", "Youth Day");
    let count = count + 1;
  }

  console.log("August", "Women’s Day");
  console.log("September", "Heritage Day");
  month = "December";
  console.log(month, "Day of Reconciliation");
  count = count + 3;

  if (status == "parent") {
    console.log(month, "Christmas Day");
    count = count + 1;
  }

  console.log(month, "Day of Goodwill");
  count = count + 1;
}

console.log("Your status is:", status);
console.log("The year is:", date);
console.log("The total holidays is:", count);
