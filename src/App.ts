import Search from './components/Search';
import List from './components/List';
import Loader from './components/Loader';
import Modal from './components/Modal';
import RecentKeyword from './components/RecentKeyword';
import Api from './Api'
import { Cat } from './types'
import Storage from './util/storage';
import './App.scss';

export default class App  {
  cats: Array<Cat>;

  constructor($target: HTMLElement) {
    this.cats = [];
    
    const api = new Api();
    const storage = new Storage();

    const loader = new Loader($target);

    const search = new Search({ $target, onRandomSearch: async () => {
      loader.show();
      const randowData = await api.getRandom();
      this.cats = randowData;
      list.setState(randowData);
      loader.hide();
    }, onSearch: async () => {
      loader.show();
      storage.setKeyword(search.$elInput.getState());
      recentKeyword.setState(storage.getRecentKeywordsFive());
      const cats = await api.getCatByName(search.$elInput.getState());
      this.cats = cats;
      list.setState(cats);
      loader.hide();
    }});

    const recentKeyword = new RecentKeyword({ $target, callback: async (key) => {
      loader.show();
      search.$elInput.setState(key);
      const cats = await api.getCatByName(key);
      this.cats = cats;
      list.setState(cats);
      loader.hide();
    } });

    const list = new List({ $target, data: this.cats, onOpenModal: (cat: Cat) => {
      modal.setState(cat);
      modal.open();
    } });

    const modal = new Modal($target);


    (async () => {
      recentKeyword.setState(storage.getRecentKeywordsFive());
      loader.show();
      search.$elInput.setState(storage.getLastKeyword());
      const cats = await api.getCatByName(storage.getLastKeyword());
      this.cats = cats;
      list.setState(cats);
      loader.hide();
    })();
    
  }

}