import {default as React} from 'react';
import {createRoot} from 'react-dom/client';
import {ImgPickDialog} from "@/components/common/dialog/ImgPickDialog";

class Media {
  static get toolbox() {
    return {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>`,
      title: 'Media',
    };
  }

  constructor({ data, api }) {
    this.api = api;
    this.data = {
      url: data && data.url ? data.url : '',
    };
    this._element = this._createImageElement();
  }

  _createImageElement() {
    const image = document.createElement('img');
    image.classList.add('custom-image-tool-image');
    image.src = this.data.url;
    return image;
  }
  render() {
    const modalRoot = document.createElement('div');
    const modal = (
      <ImgPickDialog
        onOk={imageUrl => {
          console.log(imageUrl);
          this.data.url = imageUrl;
          this._element.src = imageUrl;
          closeModal();
        }}
      />
    );
    const root = createRoot(modalRoot);
    root.render(modal);
    const closeModal = () => {
      root.unmount();
    };

    return this._element;
  }

  save() {
    return {
      url: this.data.url,
    };
  }
}

export default Media;
