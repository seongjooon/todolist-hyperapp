import { app } from 'hyperapp';

import view from './components/Counter';
import state from './state';
import actions from './actions';
import '../styles/app.css';

const appArgs = [state, actions, view, document.getElementById('app')];

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools').then((devtools) => {
    devtools.default(app)(...appArgs);
  });
} else {
  app(...appArgs);
}
