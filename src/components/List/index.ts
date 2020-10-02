import Card from "./Card";
import { Cat } from "../../types";
import { lazyLoad, infiniteScroll } from "../../util/intersectionObserver";

interface Param {
  $target: HTMLElement;
  data: Array<Cat>;
  onOpenModal: (cat: Cat) => void;
  onScroll: (page: number) => void;
}

export default class List {
  $element: HTMLElement;
  data: Cat[];
  onOpenModal: (cat: Cat) => void;
  currentPage: number;

  constructor({ $target, data, onOpenModal, onScroll }: Param) {
    const $element = document.createElement("section");
    $element.className = "list";
    this.data = data;
    this.$element = $element;

    this.currentPage = 1;
    this.onOpenModal = onOpenModal;

    const footer = document.createElement("div");
    footer.className = "list-footer";
    this.$element.appendChild(footer);

    $target.appendChild(this.$element);
    $target.appendChild(footer);
    lazyLoad();
    infiniteScroll(async () => {
      this.nextPage();
      await onScroll(this.currentPage);
    });
  }

  setState(data: Array<Cat>) {
    this.data = data;
    this.render();
    lazyLoad();
  }

  nextPage() {
    this.currentPage++;
  }

  render() {
    if (!this.data.length) {
      this.$element.innerHTML = "데이터 없음";
      return;
    }

    if (this.currentPage === 1) {
      this.$element.innerHTML = "";
    }

    this.data.forEach((cat) => {
      new Card({ $target: this.$element, data: cat });
    });

    this.$element.addEventListener("click", (event) => {
      const $target: HTMLElement = (event.target as HTMLElement).closest(
        ".card"
      );
      const id = $target.dataset.id;
      const cat = this.findCatById(id);

      this.onOpenModal(cat);
    });
  }

  findCatById(id: string): Cat {
    return this.data.find((cat) => cat.id === id);
  }
}
