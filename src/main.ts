// import { bulbasaur, pokemons } from './bases/02-objects';
// import { name, age } from './bases/01-types';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2';

import './style.css';



const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${ charmander.name } ${ charmander.id }!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
