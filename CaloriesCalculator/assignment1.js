var cneed;
var bmr;
function cc() {
    var age = parseInt(document.getElementById("age").value);
    var wtype = document.getElementById("wtype").value;
    var foot = parseInt(document.getElementById("foot").value);
    var inch = parseInt(document.getElementById("inch").value);
    var cm = document.getElementById("cen").value;
    var weight = document.getElementById("weight").value;

    if (age != '' && cm != '' && weight != '') {
        if (wtype == "pounds") {
            weight = parseInt(weight);
            weight = Math.round(weight / 2.2046);
        }
        var loa = document.getElementById("loa").value;
        if (document.getElementById("gen").checked) {
            bmr = 88.362 + 13.397 * weight + 4.799 * cm - 5.677 * age;
        }
        else {
            bmr = 447.593 + 9.247 * weight + 3.098 * cm - 4.33 * age;
        }
        switch (loa) {
            case "1":
                cneed = bmr * 1.2;
                break;
            case "2":
                cneed = bmr * 1.375
                break;
            case "3":
                cneed = bmr * 1.55;
                break;
            case "4":
                cneed = bmr * 1.725;
                break;
            case "5":
                cneed = bmr * 1.9;
                break;
        }
        bmr = Math.floor(bmr);
        cneed = Math.floor(cneed);
        document.getElementById("rbmr").value = bmr;
        document.getElementById("rc").value = cneed;
    }
    else {
        alert("Please fill your details properly!");
    }
}
function con(num) {
    var hc = parseInt(num.value);
    var hi = hc / 2.54;
    var hf = Math.floor(hi / 12);
    var ri = Math.round(hi % 12);
    if (hc > 40 && hc <= 210) {
        document.getElementById("foot").value = hf;
    }
    document.getElementById("inch").value = ri;
}
function hcon() {
    var hf = parseInt(document.getElementById("foot").value);
    var hi = parseInt(document.getElementById("inch").value);
    var hc;
    hc = Math.round((hf * 30.48) + (hi * 2.54));
    document.getElementById("cen").value = hc;
}