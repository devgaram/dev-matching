import SearchButton from "./Search/SearchAction";

export default class RecentKeyword {
  $element: HTMLDivElement;
  data: Array<string>;
  callback: (key) => {};

  constructor({ $target, callback }) {
    const $element = document.createElement("div");
    $element.className = "recent-keyword";
    this.data = [];

    this.$element = $element;
    this.callback = callback;
    $target.appendChild(this.$element);
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.$element.innerHTML = "";

    this.data.map((key) => {
      new SearchButton({
        $target: this.$element,
        buttonText: key,
        clickEventListener: () => {
          this.callback(key);
        },
      });
    });
  }
}
