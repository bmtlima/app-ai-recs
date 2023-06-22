//import ReactDOM from 'react-dom';
//import ApolloProvider from './ApolloProvider';

//ReactDOM.render(ApolloProvider, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import ApolloProvider from './ApolloProvider';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(ApolloProvider);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();