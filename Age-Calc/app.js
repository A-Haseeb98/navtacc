function age() {
    var birth = document.getElementById('date').value;
    var birthDate = new Date(birth).getTime();
    var now = new Date().getTime();

    var diff = now - birthDate;
    
    var sec = Math.floor(diff*1000)
    var min = Math.floor(diff/(1000*60))
    var hour = Math.floor(diff/(1000*60*60))
    var day = Math.floor(diff/(1000*60*60*24))
    var month = Math.floor(diff/(1000*60*60*24*30))
    var acurage = Math.floor(diff/(1000*60*60*24*30*12));
    
    document.getElementById('month').innerHTML = month
    document.getElementById('day').innerHTML = day
    document.getElementById('hour').innerHTML = hour
    document.getElementById('min').innerHTML = min
    document.getElementById('sec').innerHTML = sec
    document.getElementById('age').innerHTML = "Your age is " + acurage
    
}
setInterval(age,1000)