import React, { Component } from "react";
import styles from '../styles/error.module.css';

class Error extends Component {
    render() {
        return (
            <div className={styles.contentbox}>
                <div>
                    <h3>Something went terribly wrong, please try again.</h3>
                </div>
            </div>
        );
    }
}
export default Error;
