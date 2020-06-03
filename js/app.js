setInterval(findHandPos, 1000);

const hourHand1 = document.querySelector("#hour1");
const minuteHand1 = document.querySelector("#minute1");
const secondHand1 = document.querySelector("#second1");

const hourHand2 = document.querySelector("#hour2");
const minuteHand2 = document.querySelector("#minute2");
const secondHand2 = document.querySelector("#second2");

const hourHand3 = document.querySelector("#hour3");
const minuteHand3 = document.querySelector("#minute3");
const secondHand3 = document.querySelector("#second3");

const hourHand4 = document.querySelector("#hour4");
const minuteHand4 = document.querySelector("#minute4");
const secondHand4 = document.querySelector("#second4");

const hourHand5 = document.querySelector("#hour5");
const minuteHand5 = document.querySelector("#minute5");
const secondHand5 = document.querySelector("#second5");


function calcTime(offset) {

    local_date = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = local_date.getTime() + (local_date.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    new_date = new Date(utc + (3600000 * offset));

    // return time as a string
    return new_date

}


function findHandPos() {
    var time1 = new Date();
    var time2 = calcTime("-7");
    var time3 = calcTime('+1');
    var time4 = calcTime("+10");
    var time5 = calcTime("+9");

    var hour1 = time1.getHours();
    var minute1 = time1.getMinutes();
    var second1 = time1.getSeconds();


    var hour2 = time2.getHours();
    var minute2 = time2.getMinutes();
    var second2 = time2.getSeconds();


    var hour3 = time3.getHours();
    var minute3 = time3.getMinutes();
    var second3 = time3.getSeconds();

    var hour4 = time4.getHours();
    var minute4 = time4.getMinutes();
    var second4 = time4.getSeconds();

    var hour5 = time5.getHours();
    var minute5 = time5.getMinutes();
    var second5 = time5.getSeconds();

    var second_pos1 = second1 * 6;
    var minutes_pos1 = (minute1 * 6) + (second1 / 10);
    var hour_pos1 = (hour1 * 30) + (minute1 / 2);
    rotateHand(secondHand1, second_pos1);
    rotateHand(minuteHand1, minutes_pos1);
    rotateHand(hourHand1, hour_pos1);
    console.log(hour1);
    console.log(minute1);
    console.log("second_pos:" + second_pos1);
    console.log("minute_pos:" + minutes_pos1);
    console.log("hour_pos:" + hour_pos1);


    var second_pos2 = second2 * 6;
    var minutes_pos2 = (minute2 * 6) + (second2 / 10);
    var hour_pos2 = (hour2 * 30) + (minute2 / 2);
    rotateHand(secondHand2, second_pos2);
    rotateHand(minuteHand2, minutes_pos2);
    rotateHand(hourHand2, hour_pos2);
    console.log(hour2);
    console.log(minute2);
    console.log("second_pos:" + second_pos2);
    console.log("minute_pos:" + minutes_pos2);
    console.log("hour_pos:" + hour_pos2);

    var second_pos3 = second3 * 6;
    var minutes_pos3 = (minute3 * 6) + (second3 / 10);
    var hour_pos3 = (hour3 * 30) + (minute2 / 2);
    rotateHand(secondHand3, second_pos3);
    rotateHand(minuteHand3, minutes_pos3);
    rotateHand(hourHand3, hour_pos3);
    console.log(hour3);
    console.log(minute3);
    console.log("second_pos:" + second_pos3);
    console.log("minute_pos:" + minutes_pos3);
    console.log("hour_pos:" + hour_pos3);


    var second_pos4 = second4 * 6;
    var minutes_pos4 = (minute4 * 6) + (second4 / 10);
    var hour_pos4 = (hour4 * 30) + (minute4 / 2);
    rotateHand(secondHand4, second_pos4);
    rotateHand(minuteHand4, minutes_pos4);
    rotateHand(hourHand4, hour_pos4);
    console.log(hour4);
    console.log(minute4);
    console.log("second_pos:" + second_pos4);
    console.log("minute_pos:" + minutes_pos4);
    console.log("hour_pos:" + hour_pos4);

    var second_pos5 = second5 * 6;
    var minutes_pos5 = (minute5 * 6) + (second5 / 10);
    var hour_pos5 = (hour5 * 30) + (minute5 / 2);
    rotateHand(secondHand5, second_pos5);
    rotateHand(minuteHand5, minutes_pos5);
    rotateHand(hourHand5, hour_pos5);
    console.log(hour5);
    console.log(minute5);
    console.log("second_pos:" + second_pos5);
    console.log("minute_pos:" + minutes_pos5);
    console.log("hour_pos:" + hour_pos5);




}

function rotateHand(element, position) {

    element.style.setProperty('--angle', position);
}

findHandPos();