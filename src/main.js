import Handlebars from 'handlebars';
import productsTemplateSource from './templates/products.hbs?raw';
import { products } from '../data.js';

const appContainer = document.querySelector('#app');
if (appContainer && appContainer.innerHTML.trim() === '') {
  const template = Handlebars.compile(productsTemplateSource);
  appContainer.innerHTML = template({ products });
}
