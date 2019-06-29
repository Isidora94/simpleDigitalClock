window.addEventListener('load', function() {

    var clock_el = document.querySelector('.clock-wrapper');
    setInterval(function(){
        updateClock(clock_el);
    }, 1000);

});



function updateClock(clock_el){

    var today = new Date();
    var h = today.getHours();   
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    const hou = document.querySelector('.hour');
    hou.innerHTML = h + " :";
    const min = document.querySelector('.minute');
    min.innerHTML = m + " :";
    const sec = document.querySelector('.second');
    sec.innerHTML = s;

};

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}