export default class SearchInput {
  $element: HTMLInputElement;
  
  constructor($target) {
    const $element = document.createElement('input');
    $element.className = 'search__text-field';

    this.$element = $element;

    $target.appendChild(this.$element);

    this.render();
  }

  render() {

  }
}