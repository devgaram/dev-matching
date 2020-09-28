export default class Modal {
  $element: HTMLDivElement;

  constructor($target: HTMLElement) {
    this.$element = document.createElement('div');
    this.$element.className = 'modal';
    this.close();
    $target.appendChild(this.$element);

    this.render();
  }

  render () {
    const $overlay = document.createElement('div');
    $overlay.className = 'modal-overlay';

    const $body = document.createElement('div');
    $body.className= "modal-body";
    $body.innerHTML = `
      <div class="modal-body__header"><button class="close">닫기</button></div>
      <div class="modal-body__content"></div>
    `;

    $body.querySelector('.close').addEventListener('click', () => this.close());

    this.$element.appendChild($overlay);
    this.$element.appendChild($body);
  }

  close() {
    this.$element.style.display = 'none';
  }

  open() {
    this.$element.style.display = 'flex';
  }
}