export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDom() {
    const fragment = document.createDocumentFragment();

    this.element.innerHTML = '';

    for (const name of this.items) {
      const element = document.createElement('div');
      element.classList.add('user-list-item');
      element.textContent = name;
      fragment.append(element);
    }
    this.element.append(fragment);
  }
  add(name) {
    this.items.add(name);
    this.buildDom();
  }

  remove(name) {
    this.items.delete(name);
    this.buildDom();
  }
}
