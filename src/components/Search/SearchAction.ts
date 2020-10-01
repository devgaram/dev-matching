interface Params{
  $target: HTMLElement,
  clickEventListener: EventListener,
  buttonText: string,
}

export default class SearchButton {
  $element: HTMLButtonElement;

  constructor({ $target, clickEventListener, buttonText }: Params) {
    const $element = document.createElement('button');
    $element.className = 'search__action';
    $element.innerText = buttonText;
    $element.addEventListener('click', (e) => {
      clickEventListener(e);
    });

    this.$element = $element;
    $target.appendChild(this.$element);
  }
}