export default class SearchInput {
  $element: HTMLInputElement;
  data: string;
  
  constructor($target) {
    const $element = document.createElement('input');
    $element.className = 'search__text-field';
    $element.autofocus = true;
    $element.value = '';

    this.$element = $element;

    $target.appendChild(this.$element);

  }

  getState(): string {
    return this.$element.value;
  }
}