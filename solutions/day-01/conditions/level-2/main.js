let input_score = 90;

switch (true) {
    case (input_score >= 80 && input_score <= 100):
        console.log("A");
        break;
    case (input_score >= 70 && input_score <= 79):
        console.log("B");
        break;
    case (input_score >= 60 && input_score <= 69):
        console.log("C");
        break;
    case (input_score >= 50 && input_score <= 59):
        console.log("D");
        break;
    case (input_score >= 0 && input_score <= 49):
        console.log("F");
        break;
    default:
        console.log("Some error occurred.");
}

let input_month = "September"

switch (true) {
    case (input_month == "September" || input_month == "October" || input_month == "November"):
        console.log("The season is Fall.");
        break;
    case (input_month == "December" || input_month == "January" || input_month == "February"):
        console.log("The season is Winter.");
        break;
    case (input_month == "March" || input_month == "April" || input_month == "May"):
        console.log("The season is Spring.")
        break;
    case (input_month == "June" || input_month == "July" || input_month == "August"):
        console.log("The season is Summer");
        break;
}

let input_day = "SaturDaY";
//prompt("What is the day today?")

input_day = input_day.toLowerCase();

if (input_day == "saturday" || input_day == "sunday") {
    console.log(`${input_day.charAt(0).toUpperCase() + input_day.slice(1)} is a weekend.`)
}
else {
    console.log(`${input_day.charAt(0).toUpperCase() + input_day.slice(1)} is a working day.`)
}

