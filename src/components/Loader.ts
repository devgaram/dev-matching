export default class Loader {
  $element: HTMLDivElement;

  constructor($target: HTMLElement) {
    this.$element = document.createElement('div');
    this.$element.className = 'loader';
    this.hide();
    $target.appendChild(this.$element);
  }

  show() {
    this.$element.style.display = 'block';
  }

  hide() {
    this.$element.style.display = 'none';
  }

}