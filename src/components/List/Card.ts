import { Cat } from '../../types';

interface Params {
  $target: HTMLElement,
  data: Cat,
}

export default class Card {
  private $element: HTMLDivElement;
  cat: Cat;

  constructor({ $target, data }: Params) {
    this.$element = document.createElement('div');
    this.$element.className = 'card';
    this.$element.dataset.id = data.id;
    this.cat = data;

    $target.appendChild(this.$element);

    this.render();

  }

  render() {
    const { url, breeds, height, id, width } = this.cat;

    const $cardImage = document.createElement('img');
    $cardImage.className = 'card__image';
    $cardImage.src = url;

    this.$element.appendChild($cardImage);

  }

}