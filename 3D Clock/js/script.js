const timeFormatter = (date) => {
    var minute = date.getMinutes();
    var hour = date.getHours();
    const isTimeAmPm = hour >= 12 ? "pm" : "am";
}
setInterval(() => {
    var Time = new Date();
    console.log(Time % 12);
    Time.getUTCDate();
    const now = "THE TIME IS " + "<br >" + Time.getHours() + " : " + Time.getMinutes() + " : " + Time.getSeconds();
    document.getElementById("clock-timer").innerHTML = now;
}, 1000);