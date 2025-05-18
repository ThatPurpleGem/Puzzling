window.codeNumbers = {
  first: Math.floor(Math.random() * 10),
  second: Math.floor(Math.random() * 10),
  third: Math.floor(Math.random() * 10),
  fourth: Math.floor(Math.random() * 10),
  fifth: Math.floor(Math.random() * 10),
  sixth: Math.floor(Math.random() * 10),
  seventh: Math.floor(Math.random() * 10),
  eighth: Math.floor(Math.random() * 10)
};

console.log("Generated code numbers:", window.codeNumbers);

Object.defineProperty(window, 'givemecode', {
  get: function () {
    if (!window.codeNumbers) return console.warn("Code numbers not initialized.");

    const {
      first, second, third, fourth,
      fifth, sixth, seventh, eighth
    } = window.codeNumbers;

    const code = `${first}${second}${third}${fourth}${fifth}${sixth}${seventh}${eighth}`;
    console.log(`🟣 THE FULL CODE IS: ${code}`);
    return code;
  }
});

function updateInputWithRandomDigit(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const newDigit = Math.floor(Math.random() * 10);
  input.value = newDigit;

  const nextDelay = Math.floor(Math.random() * (20000 - 18000 + 1)) + 18000; // 7–11 sec
  setTimeout(() => updateInputWithRandomDigit(inputId), nextDelay);
}

function final_code() {
  const idsToKeepVisible = [
    'input1', 'input2', 'input3', 'input4',
    'input5', 'input6', 'input7', 'input8', 'submit'
  ];

  Array.from(document.body.children).forEach(el => {
    if (!idsToKeepVisible.includes(el.id)) {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
      el.style.visibility = 'visible';
    }
  });
}

function checkCode() {
  const userCode = [
    'input1', 'input2', 'input3', 'input4',
    'input5', 'input6', 'input7', 'input8'
  ].map(id => document.getElementById(id)?.value || '').join('');

  if (userCode === window.givemecode) {
    document.body.style.backgroundColor = 'green';
    alert("good job");
  } else {
    document.body.style.backgroundColor = 'red';
    alert("nano is coming");
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const inputIds = [
    'input1', 'input2', 'input3', 'input4',
    'input5', 'input6', 'input7', 'input8'
  ];

  inputIds.forEach(id => updateInputWithRandomDigit(id));
});
