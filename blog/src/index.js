import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//여기에서 임포트해서
import App from './App';
import Counter from './counter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/*여기에 컴파일할 문서 입력 물론 APP이면 전체 컴파일*/}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
