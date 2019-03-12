import Base from '../Base.js';

class CustomDialog extends Base {
  constructor() {
    super(__dirname);
  }

  _ready(shadowDom) {
    this._dialog = shadowDom.querySelector('.dialog-content');
  }

  open() {
    this._isOpen = true;
    this._dialog.style.display = 'block';
  }

  close() {
    this._isOpen = false;
    this._dialog.style.display = 'none';
  }

  isOpen() {
    return this._isOpen;
  }
}

customElements.define('custom-dialog', CustomDialog);
