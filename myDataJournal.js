let weekData = [
    {day : 'Sunday', sleepHours : 0, screenTime : 1, mood : 0, caffeineIntake : 0, focusLevel : 0},
    {day : 'Monday', sleepHours : 0, screenTime : 0, mood : 0, caffeineIntake : 0, focusLevel : 0},
    {day : 'Tuesday', sleepHours : 0, screenTime : 5, mood : 0, caffeineIntake : 0, focusLevel : 0},
    {day : 'Wednesday', sleepHours : 0, screenTime : 0, mood : 0, caffeineIntake : 0, focusLevel : 0},
    {day : 'Thursday', sleepHours : 0, screenTime : 4, mood : 0, caffeineIntake : 0, focusLevel : 0},
    {day : 'Friday', sleepHours : 0, screenTime : 2, mood : 0, caffeineIntake : 0, focusLevel : 0},
    {day : 'Saturday', sleepHours : 0, screenTime : 0, mood : 0, caffeineIntake : 0, focusLevel : 0},
]

// Which day had the most screen time?
// Friday had the most screen time.
// 
// Best focus day?
// Monday was the best focus day.
//
// Is more caffeine helping?
// No, more caffeine is not helping.


function findHighestScreenTime(data) {

    let highestScreenTime = 0;
    let dayWithHighestScreenTime;

    for (let day of data) {
        let screenTime = day.screenTime;
        if (screenTime > highestScreenTime) {
            highestScreenTime = screenTime;
            dayWithHighestScreenTime = day.day;
        }
    }

    console.log(`The day with the highest screen time is ${dayWithHighestScreenTime} with ${highestScreenTime} hours.`);
}

// function averageSleep() {

// }

// function mostFrequentMood() {

// }

// function correlateCaffeineToFocus() {

// }