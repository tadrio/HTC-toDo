import {Container} from './components/Container/index.js';

const $root = document.querySelector('#root');  

const props = {
  children: 'Marcos'
}

const container = Container({ children: 'plinio' });
$root.appendChild(container);