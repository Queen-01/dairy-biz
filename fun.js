var totalProduction = function(){
    //create an array variable to store the sales per shade in one day
    var shades = [];
    //push the data that the user will give into the array.
    shades.push(document.getElementById("shade-a").value);
    shades.push(document.getElementById("shade-b").value);
    shades.push(document.getElementById("shade-c").value);
    shades.push(document.getElementById("shade-d").value);
    //the values of the array are hereby transfered into variables a,b,c,d
    var [a,b,c,d] = shades;
    var displayShadesSales = document.getElementById("display_shades_sales");
    if(a.length === 0 || b.length === 0 || c.length === 0 || d.length === 0){
        displayShadesSales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
    }else{
    //the user input is converted from string variables, to number variables
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        d = parseFloat(d);
        totalProductionCalculation(a,b,c,d)
    }
}
var totalProductionCalculation = function(a,b,c,d){
    var total = a + b + c + d;
    document.getElementById("results").innerHTML = " <p>Your production in Shed A " + 
        a + " litres per day <br> Your production in Shed B " + 
        b + " litres per day <br> Your production in Shed C " + 
        c + " litres per day <br> Your production in Shed D " +
        d + " litres per day <br><br>"
    document.getElementById("total").innerHTML = "The total production is " + total + " litres per day"
}
function reset() {
    location.reload();
  } 

var finance=function(){
    var selling_price=45
    var noOfdays=document.getElementById("days").value
    time= parseFloat(noOfdays);
incomeOverTime(selling_price, time)
}

var incomeOverTime=function(selling_price, time){
    if(time===7){
        document.getElementById("time-display").innerHTML="<p>Your weekly income will be " + (1876*selling_price*time) + "</p>"
    }
        else if(time===365){
            document.getElementById("time-display").innerHTML="<p>Your yearly income will be " + (1876*selling_price*time) + "</p>"
        }
}
var average=function(){

    var months=[]
    months.push(document.getElementById("jan").value);
    months.push(document.getElementById("feb").value);
    months.push(document.getElementById("mar").value);
    months.push(document.getElementById("apr").value);
    months.push(document.getElementById("mei").value);
    months.push(document.getElementById("jun").value);
    months.push(document.getElementById("jul").value);
    months.push(document.getElementById("aug").value);
    months.push(document.getElementById("sep").value);
    months.push(document.getElementById("oct").value);
    months.push(document.getElementById("nov").value);
    months.push(document.getElementById("dec").value);

    var [jan,feb,mar,apr,mei,jun,jul,aug,sep,oct,nov,dec] =months;
    var displayShadesSales = document.getElementById("display_shades_sales");
    if(jan.length === 0 || feb.length === 0 || mar.length === 0 || apr.length === 0 || mei.length===0 ||
        jun.length===0 || jul.length===0 || aug.length===0 || sep.length===0 || oct.length===0 || nov.length===0 || dec.length===0){
        displayMonthsSales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
    }else{
    //the user input is converted from string variables, to number variables
        jan = parseFloat(jan);
        feb = parseFloat(febb);
        mar = parseFloat(mar);
        apr = parseFloat(apr);
        mei = parseFloat(mei);
        jun = parseFloat(jun);
        jul = parseFloat(jul);
        aug = parseFloat(aug);
        sep = parseFloat(sep);
        oct = parseFloat(oct);
        nov = parseFloat(nov);
        dec = parseFloat(dec);
        totalAverageCalculation(jan,feb,mar,apr,mei,jun,jul,aug,sep,oct,nov,dec)
    }
}
var totalAverageCalculation = function(jan,feb,mar,apr,mei,jun,jul,aug,sep,oct,nov,dec){
    var total=jan+feb+mar+apr+mei+jun+jul+aug+sep+oct+nov+dec;

    document.getElementById("number-months").innerHTML="<p>Your income for January is " +
    jan + "Ksh <br> Your income for Febuary" +
    feb + "Ksh <br> Your income for March" +
    mar + "Ksh <br>  Your income for April" +
    apr + "Ksh <br> Your income for May" +
    mei + "Ksh <br> Your income for June" +
    jun +"Ksh <br> Your income for July" +
    jul + "Ksh <br> Your income for August" +
    aug + "Ksh <br> Your income for September" +
    sep + "Ksh <br> Your income for October" +
    oct + "Ksh <br> Your income for November"
    nov + "Ksh <br> Your income for December"
    dec + "Ksh <br><br> </p>"
    document.getElementById("number-months").innerHTML = "The average income " + number-months + " Ksh"
}