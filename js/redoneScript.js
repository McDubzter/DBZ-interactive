function getConfirmation1() {
  var retVal = confirm("Prediction time! Do you think that Goku made the right move by choosing Gohan as Cell's next opponent? TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was correct! Move on to video 2!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was wrong! Move on to video 2!')
    return false;

  }
}



function getConfirmation2() {
  var retVal = confirm("Prediction time! What do you think gohan is going to say? Yes or No?  TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was correct! Move on to video 3!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was wrong! Move on to video 3!')
    return false;

  }
}



function getConfirmation3() {
  var retVal = confirm("Prediction time! Do you think what Goku was saying is true about him trying his hardest against cell? Or was he lying to motivate Gohan to fight?  TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was correct! Move on to video 4!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was wrong! Move on to video 4!')
    return false;

  }
}



function getConfirmation4() {
  var retVal = confirm("Prediction time! Do you think Gohan has any chance against cell in this stage?  TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was Wrong! Move on to video 5!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was Correct! Move on to video 5!')
    return false;

  }
}


function getConfirmation5() {
  var retVal = confirm("Prediction time! Do you think there is some hidden power inside Gohan like he says?  TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was right! Move on to video 6!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was Correct! Move on to video 6!')
    return false;

  }
}

function getConfirmation6() {
  var retVal = confirm("Prediction time! The power has been unleashed! Do you think Gohan finally has a chance against cell?  TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was right! Move on to video 7!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was Correct! Move on to video 7!')
    return false;

  }
}

function getConfirmation7() {
  var retVal = confirm("Prediction time! Do you think Cell is going to win? TIP: click OK for yes and Cancel for no!");
  if (retVal == true) {
    clicks += 1;
    alert('Your prediction was wrong! Thanks for taking the time to watch this interactive story!')
    document.getElementById("clicks").innerHTML = clicks
    return true;


  } else {
    // document.write ("User does not want to continue!");
    alert('Your prediction was Correct! Thanks for taking the time to watch this interactive story!')
    return false;

  }
}
