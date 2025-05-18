// buttons.js - Clean + working multi-button clue system

document.addEventListener('DOMContentLoaded', () => {
  const buttons = [
    {
      id: 'button1',
      slide: 1,
      clueText: () => `The first number of the code is: ${window.codeNumbers?.first ?? '?'}`,
      displayId: 'codeDisplay1'
    },
    {
      id: 'button2',
      slide: 1,
      clueText: () => `The second number of the code is: ${window.codeNumbers?.second ?? '?'}`,
      displayId: 'codeDisplay2'
    },
    {
      id: 'button3',
      slide: 2,
      clueText: () => `The  third number of the code is: ${window.codeNumbers?.third ?? '?'}`,
      displayId: 'codeDisplay3'
    },
    {
      id: 'button4',
      slide: 4,
      clueText: () => `The fourth number of the code is: ${window.codeNumbers?.fourth ?? '?'}`,
      displayId: 'codeDisplay4'
    },
    {
      id: 'button5',
      slide: 4,
      clueText: () => `The fifth number of the code is: ${window.codeNumbers?.fifth ?? '?'}`,
      displayId: 'codeDisplay5'
    },
    {
      id: 'button6',
      slide: -1,
      clueText: () => `The sixth number of the code is: ${window.codeNumbers?.sixth ?? '?'}`,
      displayId: 'codeDisplay6'
    },
    {
      id: 'button7',
      slide: 7,
      clueText: () => `The seventh number of the code is: ${window.codeNumbers?.seventh ?? '?'}`,
      displayId: 'codeDisplay7'
    },
    {
      id: 'button8',
      slide: 7,
      clueText: () => `The eighth number of the code is: ${window.codeNumbers?.eighth ?? '?'}`,
      displayId: 'codeDisplay8'
    },
  ];

  let currentClueOwner = null;
  const buttonStates = [];

  function updateAllButtonVisibility() {
    buttonStates.forEach(({ btn, id, displayEl, assignedSlide, hiddenRef }) => {
      const isWrongSlide = window.slide !== assignedSlide;
      const shouldHide = isWrongSlide;

      if (shouldHide && !hiddenRef.value) {
        btn.style.visibility = 'hidden';
        hiddenRef.value = true;

        if (currentClueOwner === id && displayEl) {
          displayEl.style.display = 'none';
          currentClueOwner = null;
        }
      } else if (!shouldHide && hiddenRef.value) {
        btn.style.visibility = 'visible';
        hiddenRef.value = false;
      }
    });
  }

  buttons.forEach(({ id, clueText, displayId, slide }) => {
    const btn = document.getElementById(id);
    const displayEl = document.getElementById(displayId);

    if (!btn) return console.error(`Button "${id}" not found`);
    if (!displayEl) return console.error(`Display "${displayId}" not found`);

    displayEl.style.display = 'none';

    const hiddenRef = { value: false };
    buttonStates.push({
      btn,
      id,
      displayEl,
      assignedSlide: slide,
      hiddenRef
    });

    btn.addEventListener('click', () => {
      btn.style.transform = 'scale(0.9)';
      setTimeout(() => (btn.style.transform = ''), 200);

      displayEl.textContent = typeof clueText === 'function' ? clueText() : clueText;
      displayEl.style.display = 'block';
      currentClueOwner = id;
    });
  });

  window.updateButtonClueVisibility = updateAllButtonVisibility;
  updateAllButtonVisibility();
  setInterval(updateAllButtonVisibility, 500);

  console.log('✅ buttons.js loaded and ready');
});
