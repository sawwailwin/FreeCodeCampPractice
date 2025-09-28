function toRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

document.getElementById("convert-btn").addEventListener("click", () => {
  const input = document.getElementById("number").value.trim();
  const output = document.getElementById("output");

  if (input === "" || isNaN(input)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  const num = Number(input);

  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = toRoman(num);
});

