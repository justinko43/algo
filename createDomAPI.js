class SmartObject {
  constructor(selector) {
    this.list = [...document.querySelectorAll(selector)];
  }

  filterMe(selector) {
    this.list = this.list.filter((node) => node.tagName.toLowerCase() === selector.toLowerCase());
    return this.list;
  }

  addClass(string) {
    this.list.forEach(element => element.className += (" " +string));
  }
}

const f = new SmartObject('.style-scope');
f.filterMe('div').addClass('foo');