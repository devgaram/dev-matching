export const SEARCH_KEY = "SEARCH_KEYWORD";

export default class Storage {
  recentKeywords: Array<string>;
  size: number;

  constructor() {
    this.recentKeywords =
      window.localStorage.getItem(SEARCH_KEY)?.split(",") || [];
    this.size = this.recentKeywords.length;
  }

  getRecentKeywordsFive() {
    return this.recentKeywords;
  }

  getLastKeyword() {
    return (
      this.recentKeywords && this.recentKeywords[this.recentKeywords.length - 1]
    );
  }

  setKeyword(keyword) {
    if (this.size === 5) this.recentKeywords.shift();
    else this.size++;

    this.recentKeywords.push(keyword);
    window.localStorage.setItem(SEARCH_KEY, this.recentKeywords.toString());
  }
}
