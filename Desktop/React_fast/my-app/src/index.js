import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// App 은 app.js 에서  import해왔고

ReactDOM.render(<App />, document.getElementById('root'));
// 여기에서 render 된다
// App 은 브라우저가 이해 못한다. 다만 App.js에서 렌더링을 통해서 브라우저에 보여진다
