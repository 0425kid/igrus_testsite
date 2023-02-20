function numberMaxLength(input){
  if(input.value.length > input.maxLength){
    input.value = input.value.slice(0, input.maxLength);
  }
}

const myInputs = document.getElementsByClassName('input-letter');

Array.from(myInputs).forEach(function(myInput) {
  myInput.addEventListener("input", function() {
    numberMaxLength(this);
  });
});
