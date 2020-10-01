import Card from './Card';
import { Cat } from '../../types'

interface Param {
  $target: HTMLElement,
  data: Array<Cat>,
  onOpenModal: (cat: Cat) => void,
}

export default class List {
  $element: HTMLElement;
  data: Cat[];
  onOpenModal: (cat: Cat) => void;

  constructor({ $target, data, onOpenModal }: Param) {
    const $element = document.createElement('section');
    $element.className = 'list';
    this.data = data;
    this.$element = $element;
    this.onOpenModal = onOpenModal;
    $target.appendChild(this.$element);
  }

  setState(data: Array<Cat>) {
    this.data = data;
    this.render();
  }

  render() {
    this.$element.innerHTML = '';

    if (!this.data.length) {
      this.$element.innerHTML = '데이터 없음';
      return;
    }
    
    this.data.forEach(cat => {
      new Card({ $target: this.$element, data: cat });
    })

    this.$element.addEventListener('click', (event) => {
      const $target: HTMLElement = (event.target as HTMLElement).closest('.card');
      const id = $target.dataset.id;
      const cat = this.findCatById(id);

      this.onOpenModal(cat);
    })

  }

  findCatById(id: string): Cat {
    return this.data.find(cat => cat.id === id);
  }

}