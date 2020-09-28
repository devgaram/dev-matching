import SearchInput from './SearchInput';
import SearchAction from './SearchAction'

interface Params {
  $target: HTMLElement;
  onRandomSearch?: EventListener;
  onSearch?: EventListener;
}
export default class Search {
  $element: HTMLElement;

  constructor({ $target, onRandomSearch, onSearch }: Params) {
    const $element = document.createElement('section');
    $element.className = 'search';

    new SearchInput($element);
    new SearchAction({ $target: $element, buttonText: '검색', clickEventListener: onSearch });
    new SearchAction({ $target: $element, buttonText: '랜덤검색', clickEventListener: onRandomSearch });
   
    this.$element = $element;
    $target.appendChild(this.$element);
  }

}