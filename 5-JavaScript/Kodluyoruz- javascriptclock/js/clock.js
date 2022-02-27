// promp ile isim soyisim yazdir
let firstName = prompt ("Adınız Nedir ?")
let secondName = prompt ("Soy Adınız Nedir ?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${firstName}  ${secondName}`

// saat ekle
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDay();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if ( d == 1) {
        d = "Pazartesi";
    } else if ( d == 2) {
        d = "Salı";
    } else if ( d == 3) {
        d = "Çarşamba";
    } else if ( d == 4) {
        d = "Perşembe";
    } else if ( d == 5) {
        d = "Cuma";
    } else if ( d == 6) {
        d = "Cumartesi";
    } else if ( d == 0) {
        d = "Pazar";
    }
    
    var time = h + ":" + m + ":" + s + " " + d ;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


