import { Cat } from '../types';

export default class Modal {
  $element: HTMLDivElement;
  cat: Cat;
  $elName: HTMLParagraphElement;
  $elImg: HTMLImageElement;
  $elOrigin: HTMLParagraphElement;
  $elTemperament: HTMLParagraphElement;
  $elWeight: HTMLParagraphElement;

  constructor($target: HTMLElement) {
    this.$element = document.createElement('div');
    this.$element.className = 'modal';
    this.$element.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-body">
        <div class="modal-body__header"><button class="close">닫기</button></div>
        <div class="modal-body__content">
          <p class="cat-name"></p>
          <img class="cat-img" />
          <p class="cat-origin"></p>
          <p class="cat-temperament"></p>
          <p class="cat-weight"></p>
        </div>
      </div>
    `
    this.$elName = this.$element.querySelector('.cat-name');
    this.$elImg = this.$element.querySelector('.cat-img');
    this.$elOrigin = this.$element.querySelector('.cat-origin');
    this.$elTemperament = this.$element.querySelector('.cat-temperament');
    this.$elWeight = this.$element.querySelector('.cat-weight');
    
    this.$element.querySelector('.close').addEventListener('click', () => this.close());
    this.close();
    $target.appendChild(this.$element);

    this.render();
  }

  setState(cat: Cat) {
    this.cat = cat;
    this.render();
  }

  render () {
    if (this.cat) {
      this.$elImg.src = this.cat.url;

      if (this.cat.breeds[0]) {
        const breeds = this.cat.breeds[0]
        this.$elName.innerText = breeds.name;
        this.$elOrigin.innerText = breeds.origin;
        this.$elTemperament.innerText = breeds.temperament;
        this.$elWeight.innerText = `${breeds.weight.imperial}(imperial) / ${breeds.weight.metric}(metric)`
      }

    }
  }

  close() {
    this.$element.style.display = 'none';
  }

  open() {
    this.$element.style.display = 'flex';
  }
}