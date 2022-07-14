let input_month = "February";
let leap_year = true;

// prompt("Enter the month: ")
// prompt("Is now a leap year? ")

if (input_month == "January") {
    console.log("January has 31 days.");
}
else if (input_month == "February" && !leap_year) {
    console.log("Febuary has 28 days.");
}
else if (input_month == "February" && leap_year) {
    console.log("Febuary has 29 days.");
}
else if (input_month == "March") {
    console.log("March has 31 days.");
}
else if (input_month == "April") {
    console.log("April has 30 days.");
}
else if (input_month == "May") {
    console.log("May has 31 days.");
}
else if (input_month == "June") {
    console.log("June has 30 days.");
}
else if (input_month == "July") {
    console.log("July has 31 days.");
}
else if (input_month == "August") {
    console.log("August has 31 days.")
}
else if (input_month == "September") {
    console.log("September has 30 days.")
}
else if (input_month == "October") {
    console.log("October has 31 days.")
}
else if (input_month == "November") {
    console.log("November has 30 days.")
}
else if (input_month == "December") {
    console.log("December has 31 days.")
}
else {
    console.log("Some error occurred")
}
