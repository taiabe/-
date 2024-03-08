function recalc(){
    document.getElementById("jikan").textContent = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
    setTimeout(recalc,1000);
}
recalc();