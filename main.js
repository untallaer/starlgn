var USERFILLED = false;
var PLATCHOSEN = false;
var VBCHOSEN = false;
var PLATF;
var VBUCKS;
var VWVW = false;
var FLICKGLIDE;

function CH() {
  if (USERFILLED && PLATCHOSEN) {
    $(".C-button").fadeTo(1000, 1);
    VWVW = true;
  } else {
    $(".C-button").fadeTo(1000, 0.5);
    VWVW = false;
  }
}

function PLAT(xD) {
  $(".F-platform").css("opacity", "0.5");
  $(".P-" + xD).css("opacity", "1");
  PLATCHOSEN = true;
  PLATF = xD.toUpperCase();
  CH();
}

function VB(xD) {
  $(".V-bucks").css("opacity", "0.5");
  $(".V-" + xD).css("opacity", "1");
  VBCHOSEN = true;
  VBUCKS = xD;
  $(".S-button").fadeTo(1000, 1);
}

function SKIN() {
  if (VBCHOSEN) {
    $(".S2").fadeOut(1000);

    setTimeout(function() {
        $(".S4").fadeIn(1000).css("display", "flex");;
    }, 1000)

  } else {
    alert("You need to select how much free Money you want.")
  }
}

function CCC() {
  if (VWVW) {
    $(".S1").fadeOut(1000);

    setTimeout(function() {
        $(".S2").fadeIn(1000);
    }, 1000)

  } else {
    alert("Type your username and select your device.")
  }
}

function FIN() {
  setTimeout(function() {
    $(".S2").fadeOut(1000)
  }, 1000)

  setTimeout(function() {
    $(".S4").fadeIn(1000)
  }, 1000)

  var SELSKIN;
  var STRS = ["Initializing connection with servers...^1000", "Looking for <u>" + $("#F-username").val() + "</u> record in <u>" + PLATF + "_users</u> table...^1000", "Adding <u>$" + VBUCKS + "</u>.^1000", "Finishing connection...^1000", "Bot detected...^1000 You need to complete <u>human verification</u> to receive your $" + VBUCKS + ""]

  var TYPEDO = {
            strings: STRS,
            typeSpeed: 40,
            backSpeed: 40,
            showCursor: false,
            onComplete: function() {
                $(".CL-button").fadeIn(1000);
            }
        }

        setTimeout(function() { var TYPEDV = new Typed(".console-2", TYPEDO); }, 2000)



}

$(function() {

  $("#F-username").change(function() {
    if ($(this).val().length > 0) {
      USERFILLED = true;
      CH();
    } else {
      USERFILLED = false;
      CH();
    }
  })

});
