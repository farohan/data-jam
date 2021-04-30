//JavaScript for scrolling indicator goes here:
//Partially copied from W3Schools

window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Toggle Dark Mode

function darkModeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

//Displaying Current Time
//Partially copied from GeeksforGeeks.org

setInterval(displayTime, 1000); 
function displayTime() { 
    let date = new Date(); 
    let hour = date.getHours(); 
    let min = date.getMinutes(); 
    let sec = date.getSeconds(); 
    am_pm = "AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
  
    let currentTime = `${hour}:${min}:${sec} ${am_pm}`; 
  
    document.getElementById("time") 
            .innerHTML = currentTime; 
} 

displayTime();

//Displaying Today's Date

let date = new Date();
document.getElementById('date').innerHTML = date.toDateString();

