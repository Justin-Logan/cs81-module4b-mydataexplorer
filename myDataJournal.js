// https://github.com/Justin-Logan/cs81-module4b-mydataexplorer

let weekData = [
    {day : 'Sunday', sleepHours : 6, screenTime : 3, mood : 7, caffeineIntake : 8, focusLevel : 8},
    {day : 'Monday', sleepHours : 7, screenTime : 5, mood : 8, caffeineIntake : 5, focusLevel : 6},
    {day : 'Tuesday', sleepHours : 5, screenTime : 8, mood : 7, caffeineIntake : 0, focusLevel : 6},
    {day : 'Wednesday', sleepHours : 4, screenTime : 3, mood : 4, caffeineIntake : 1, focusLevel : 4},
    {day : 'Thursday', sleepHours : 6, screenTime : 7, mood : 7, caffeineIntake : 1, focusLevel : 7},
    {day : 'Friday', sleepHours : 4, screenTime : 3, mood : 8, caffeineIntake : 0, focusLevel : 8},
    {day : 'Saturday', sleepHours : 4, screenTime : 5, mood : 7, caffeineIntake : 2, focusLevel : 7},
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

    let highestScreenTime;
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

function averageSleep(data) {

    let totalSleep = 0;

    for (let day of data) {
        totalSleep += day.sleepHours;
    }

    let averageSleep = (totalSleep / 7).toFixed(1);
    console.log(`The average of sleep throughout the week is ${averageSleep} hours.`);
}

function mostFrequentMood(data) {

    let moodCount = {};

    for (let day of data) {
        let mood = day.mood;
        if (moodCount[mood] === undefined) {
            moodCount[mood] = 1;
        } else {
            moodCount[mood] += 1;
        }
    }

    let mostMood = 0;
    let mostFrequentMood = 0;

    for (let mood in moodCount) {
        if (moodCount[mood] > mostMood) {
            mostMood = moodCount[mood];
            mostFrequentMood = mood;
        }
    }
    console.log(`The most frequent mood level is ${mostFrequentMood}.`);
}

function correlateCaffeineToFocus(data) {
    
    let relation = 0;

    for (let day of data) {
        if (day.caffeineIntake > 0 && day.focusLevel > 5) {
            relation++;
        }
    }

    relation = (relation / 7) * 100;
    let result = false;

    if (relation > 50) {
        result = true;
    }

    if (result) {
        console.log("There is a positive correlation between the amount of caffeine consumed and focus levels.")
    } else {
        console.log("There is no correlation between caffeine intake and focus levels. ")
    }
}