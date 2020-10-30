import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register();
