import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './styles/index.module.css';
import './styles/reset.css';


ReactDOM.render(
    <div className={styles.wrapper}>
            <h1 className={styles.heading}>Search your favorite Band!</h1>
            <App />
        </div>
, document.getElementById('root'));
