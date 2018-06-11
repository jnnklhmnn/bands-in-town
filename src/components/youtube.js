import PropTypes from 'prop-types';
import React, { Component } from "react";
import styles from '../styles/youtube.module.css';
import Spinner from './spinner';

class Youtube extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '',
                spinner: false,
                result: ''
            };
        }

        componentWillMount() {
            this.setState({ spinner: true });
            let self = this;
            const youtubekey = process.env.REACT_APP_YOUTUBE_KEY;

            fetch(`https://www.googleapis.com/youtube/v3/search?q=${this.props.query}&part=snippet&type=video&key=${youtubekey}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    self.setState({ spinner: false, result: data });
                })
                .catch(function (err) {
                    return false;
                });
        }

        render() {
            let content;
            if (!process.env.REACT_APP_YOUTUBE_KEY) {
                content= <p className={styles.nokey}>no Youtube API Key Provided :(</p>;
            } else if (this.state.spinner === false) {
                content =  this.state.result.items.map(function (data) {
                    return (
                        <li className={styles.youtubelist} key={data.id.videoId}>
                            <img src={data.snippet.thumbnails.default.url} alt={data.snippet.title}/>
                            <p className={styles.youtubecopy}> {data.snippet.title}</p>
                            <a className={styles.youtubelink} href={`https://www.youtube.com/watch?v=${data.id.videoId}`}>
                                <span className={styles.linktext}>{data.snippet.title}</span>
                            </a>
                        </li>
                    );
                })
            } else {
                content =  <li><Spinner/></li>;
            }

            return (<div className={styles.contentbox}>
                <div className={styles.youtubeheader}>
                    <h3>Youtube Results</h3>
                    <svg fill="#ff0000" width="50" height="50" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M711 1128l484-250-484-253v503zm185-862q168 0 324.5 4.5t229.5 9.5l73 4q1 0 17 1.5t23 3 23.5 4.5 28.5 8 28 13 31 19.5 29 26.5q6 6 15.5 18.5t29 58.5 26.5 101q8 64 12.5 136.5t5.5 113.5v176q1 145-18 290-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19-28 12.5-28.5 8-24 4.5-23 3-16.5 1.5q-251 19-627 19-207-2-359.5-6.5t-200.5-7.5l-49-4-36-4q-36-5-54.5-10t-51-21-56.5-41q-6-6-15.5-18.5t-29-58.5-26.5-101q-8-64-12.5-136.5t-5.5-113.5v-176q-1-145 18-290 7-55 25-99.5t32-61.5l14-17q14-15 29-26.5t31-19.5 28-13 28.5-8 23.5-4.5 23-3 17-1.5q251-18 627-18z" /></svg>
                </div>
                <div className={styles.youtubebody}>
                    <ul>
                        {content}
                    </ul>
                </div>
            </div>);
        }
}

export default Youtube;

Youtube.propTypes = {
    query: PropTypes.string
};
