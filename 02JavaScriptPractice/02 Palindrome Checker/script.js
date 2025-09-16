function checkPalindrome(){
  const input = document.getElementById("text-input").value;
  if (input.trim() === "") {
    alert("Please input a value");
    result.textContent = ""; // clear result
    return;
  }
  const result = document.getElementById("result");
  const lowerText = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = lowerText.split('').reverse().join('');

  if(lowerText === null){
    result.textContent = "Please input a value.";
    result.style.color = "orange";
  }else if(lowerText === reversed){
    result.textContent = `${input} is a palindrome!`;
    result.style.color = "green";
  }else{
    result.textContent = `${input} is not a palindrome.`;
    result.style.color = "red";
  }
}