const options = document.querySelectorAll('.buddy-option');
const portrait = document.getElementById('selected-buddy');
const caption = document.getElementById('buddy-name');
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(button => button.setAttribute('aria-pressed', String(button === option)));
    portrait.src = `img/buddies/${option.dataset.buddy}.webp`;
    portrait.alt = `${option.dataset.name} the ${option.dataset.animal}`;
    caption.replaceChildren(document.createTextNode(option.dataset.name + ' '));
    const animal = document.createElement('span');
    animal.textContent = `the ${option.dataset.animal}`;
    caption.append(animal);
    const display = portrait.parentElement;
    display.classList.remove('changing');
    requestAnimationFrame(() => requestAnimationFrame(() => display.classList.add('changing')));
  });
});
