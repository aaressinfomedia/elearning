function display1() {
  $("#show").click(() => {
    // alert("Working");
    $("#home").show();
    $("#demo-1").hide();
    $("#demo-2").hide();
    $("#demo-3").hide();
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
    $("#demo-3").hide();
    $("#demo-1").show(); //slow,slower,fast,faster or in mili sec 1000,2000
    // $("#menu").animate({
    //   marginTop: "100px",
    // });
  });
}

function changeText() {
  // const sampleData = document.getElementById("sampleData"); //
  // $(document).ready(changeText);
  sampleData.innerHTML =
    "This is Sample Data.. Click Button Below to say Hello";

  $("#toggleText").click(() => {
    document.getElementById("sampleData").style.color = "#a52a2a";
    sampleData.innerHTML = "<h3>HELLO !!!!</h3>";
  });
}

// function display3() {
//   let tagName = document.getElementsByTagName("p")[0].value;
//   // alert("tagName");
//   $("#home").show();
//   $("#demo").hide();
//   $("#demo-1").hide();
//   $("#demo-2").show(() => {
//     $("#change").click(() => {
//
//       tagName.innerHTML = "Hello Demo Replaced";
//     });
//   });
// }

function display3() {
  // let tagName = document.getElementsByTagName("p")[0];
  $("#home").show();
  $("#demo").hide();
  $("#demo-1").hide();
  $("#demo-3").hide();
  $("#demo-2").show(() => {
    $("#demo-2").click(() => {
      document.getElementsByTagName("p")[5].style.color = "#a52a2a";
      document.getElementsByTagName("p")[5].innerHTML = "Hello Demo Replaced";
    });
  });
}

function display4() {
  $("#home").show();
  $("#demo").hide();
  $("#demo-1").hide();
  $("#demo-2").hide();
  $("#demo-3").show(() => {
    $("#demo-3").click(() => {
      document.getElementsByClassName("test")[0].style.color = "#a52a2a";
      document.getElementsByClassName("test")[0].innerHTML =
        "Test 1 Text Change using ClassName";
      document.getElementsByClassName("test")[1].innerHTML =
        "Test 2 Text Change using ClassName";
    });
  });
}
