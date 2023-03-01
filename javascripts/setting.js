function numberMaxLength(input){
  if(input.value.length > input.maxLength){
    input.value = input.value.slice(0, input.maxLength);
  }
}

function generateInputLetters(container, letterNum, namePrefix) {
  for (let i = 0; i < letterNum; i++) {
    const input = document.createElement('input');
    input.className = 'input-letter';
    input.type = 'text';
    input.maxLength = 1;
    input.name = `${namePrefix}${i + 1}`;
    input.addEventListener('input', function() {
      numberMaxLength(this);
      if (this.value.length === this.maxLength && i < letterNum - 1) {
        container.children[i + 1].focus();
      }
    });
    container.appendChild(input);
  }
}

const myInputs = document.getElementsByClassName('input-letter');



Array.from(myInputs).forEach(function(myInput, index) {
  myInput.addEventListener("input", function() {
    numberMaxLength(this);
    if (this.value.length >= this.maxLength) {
      if (index < myInputs.length - 1) {
        myInputs[index + 1].focus();
      }
    }
  });
});

function checkAdmin(){
  if(document.cookie === ''){
    alert('You are not Admin!');
  }
  else alert('Great! You are admin!');
}