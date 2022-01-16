setInterval(() => {
    var Time = new Date();
    console.log(Time % 12);
    Time.getUTCDate();
    const now = "THE TIME IS " + "<br >" + Time.getHours() + " : " + Time.getMinutes() + " : " + Time.getSeconds();
    document.getElementById("clock-timer").innerHTML = now;
}, 1000);
