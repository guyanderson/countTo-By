
var start = 0;
var array =[];
function getInput(input, input2){
  for(var i = 0; i <= input; i += input2) {
    array.push(i);

  }
  return(array);
};



$(document).ready(function(){
  $("form#userNumber").submit(function(event) {
  event.preventDefault();

var countTo = parseInt($("#countTo").val());
var countBy = parseInt($("#countBy").val());

var result = getInput(countTo, countBy);
$("#result").text(result);
array = [];

  });
});
