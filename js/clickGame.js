var counthold = 0;

function clickcount() {
  counthold = parseInt(counthold) + parseInt(1);
}


function timecount() {
  setTimeout(function countandgive()
    { 
      .modal('show').html("It's a shame you can't play ALL DAY! You clicked " + counthold + " members of my clique");
    //alert("It's a shame you can't play ALL DAY.  You clicked " + counthold + " members of my clique"); 
    }, 20000);
}