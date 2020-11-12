var selectedDay;


$(document).ready(function ()
{
    switch (selectedDay)
    {
        case "monday":
            $("#result").text(`School 8:30am-11:20`);
            $("#result2").text(`Homework: 12pm-5pm`);
            break;
        case "tuesday":
            $("#result").text(`School 12pm-3:50pm`);
            $("#result2").text(`Homework: 8am-11:40am and 4:45pm-9pm`);
            break;
        case "wednesday":
            $("#result").text(`School 12pm-3:50pm`);
            $("#result2").text(`Homework: 8am-11am and 4:45pm-7pm. Videogames: 7pm-9pm`);
            break;
        case "Thursday":
            $("#result").text(`School 12pm-3:50pm`);
            $("#result2").text(`Homework: 8am-11am and 4:45pm-7pm. Videogames: 7pm-9pm`);
            break;
        case "Friday":
            $("#result").text(`School 8:30am-11:20am`);
            $("#result2").text(`Work: 2pm-9pm. Homework: 6pm-7pm`);
            break;
        case "Saturday":
            $("#result").text(`Work: 9am-6pm. Homework: 6pm-8pm`);
            $("#result2").text(`Videogames: 8pm-9:30pm`);
            break;
        case "Sunday":
            $("#result").text(`Work: 10am-7pm. Homework: 7pm-8:30pm`);
            $("#result2").text(`Videogames: 8:30pm-10pm`);
            break;


    }

});