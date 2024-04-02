function display1() {
  $("#show").click(() => {
    // alert("Working");
    $("#home").show();
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
    $("#home").hide();
    $("#demo").hide();
    $("#demo-2").hide();
    $("#demo-1").show(); //slow,slower,fast,faster or in mili sec 1000,2000
    // $("#menu").animate({
    //   marginTop: "100px",
    // });
  });
}

function changeText() {
  // const sampleData = document.getElementById("sampleData"); //
  () => {
    $("#home").hide();
  };

  sampleData.innerHTML =
    "This is Sample Data.. Click Button Below to say Hello";

  $("#toggleText").click(() => {
    document.getElementById("sampleData").style.color = "#000080";
    sampleData.innerHTML = "<h3>HELLO !!!!</h3>";
  });
}

function display3() {
  $("#home").show();
  $("#demo").hide();
  $("#demo-1").hide();
  $("#demo-2").show();
  $(".show2").click(() => {
    //   alert("Working");
    document.getElementsByTagName("p")[0].innerHTML = "Hello Demo Replaced";
    //slow,slower,fast,faster or in mili sec 1000,2000

    // $("#menu").animate({
    //   marginTop: "100px",
    // });
  });
}
