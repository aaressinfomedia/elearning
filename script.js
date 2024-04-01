function display1() {
  $("#show").click(() => {
    // alert("Working");
    $("#demo-1").hide();
    $("#demo-2").hide();
    $("#demo").show();
    //slow,slower,fast,faster or in mili sec 1000,2000

    // $("#menu").animate({
    //   marginTop: "100px",
    // });
  });
}

function display2() {
  $("#show1").click(() => {
    // alert("Working");
    $("#demo").hide();
    $("#demo-2").hide();
    $("#demo-1").show(); //slow,slower,fast,faster or in mili sec 1000,2000
    // $("#menu").animate({
    //   marginTop: "100px",
    // });
  });
}
function changeText() {
  sampleData.style.color = "green";
  document.getElementById("sampleData").innerHTML = "<h3>HELLO !!!!</h3>";
}

function display3() {
  $("#show2").click(() => {
    $("#demo").hide();
    $("#demo-1").hide();
    $("#demo-2").show(() => {
      //alert("Working");
      document.getElementsByTagName("p")[0].innerHTML = "Hello Demo Replaced";
    }); //slow,slower,fast,faster or in mili sec 1000,2000

    // $("#menu").animate({
    //   marginTop: "100px",
    // });
  });
}
