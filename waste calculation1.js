function water(){
    var drips=document.getElementById("drips").value;
    var fau=document.getElementById("taps").value;
    var hou=document.getElementById("homes").value;
    var perday= parseInt(drips)*parseInt(fau)*parseInt(hou)*1440;
    var li =parseInt(perday)/4000;
    console.log(perday);
    document.getElementById("sol").innerHTML="Drips(per day):"+perday;
    document.getElementById("sol1").innerHTML="Liters(per day)"+li;
}
