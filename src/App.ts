import Search from './components/Search';
import List from './components/List';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Api from './Api'
import { Cat } from './types'
import './App.scss';

export default class App  {
  cats: Array<Cat>;

  constructor($target: HTMLElement) {
    this.cats = [];
    
    const api = new Api();

    const loader = new Loader($target);

    const search = new Search({ $target, onRandomSearch: async () => {
      loader.show();
      const randowData = await api.getRandom();
      this.cats = randowData;
      list.setState(randowData);
      loader.hide();
    }, onSearch: () => {
      console.log('검색')
    } });

    const list = new List({ $target, data: this.cats, onOpenModal: (cat: Cat) => {
      console.log(cat);
      modal.open();
    } });

    const modal = new Modal($target);
  }
}