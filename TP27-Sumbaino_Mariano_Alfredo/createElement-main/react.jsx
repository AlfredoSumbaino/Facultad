const create = React.createElement;

const page = create(
  'div',
  null,
  create('h1', null, 'Con lo visto hasta ahora'),
  create('h2', null, 'Replica este HTML'),
  create('h3', null, 'Usando'),
  create('h4', null, 'React.js'),
  create('footer', null, 'Suerte!')
);

ReactDOM.createRoot(document.getElementById('root')).render(page);