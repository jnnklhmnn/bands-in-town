import PropTypes from 'prop-types';
import React, { Component } from "react";
import Events from './events';
import Youtube from './youtube';
import styles from '../styles/results.module.css';

class Results extends Component {

   /**
   * Creates the Markup for the Artist Box
   * which includes Foto and name of artis
   * @param name, string
   * @param url, string
   * @returns Markup
   */
    getResults = (name, url) => {
        return (
            <React.Fragment>
                <div className={styles.left}>
                    <div className={styles.contentbox}>
                        <div className={styles.contentboxwrapper}>
                            <div className={styles.name}>
                                <h2>{name}</h2>
                            </div>
                            <div className={styles.imagewrapper}>
                                <img className={styles.image} src={url} alt={name} />
                            </div>
                            <a className={styles.facebooklink} href={this.props.info.facebook_page_url} title={`Visit ${name} on Facebook`}>
                                <span className={styles.linkcopywrapper}>
                                    <span className={styles.linkcopy}>
                                        Visit {name} on
                                            <svg className={styles.facebookicon} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1579 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z" /></svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    render() {
        const name = this.props.info.name ? this.props.info.name : '';
        const url = this.props.info.thumb_url ? this.props.info.thumb_url : '';
        const results = this.getResults(name, url);
        return (
            <div className={styles.wrapper}>
                <div className={styles.flexwrapper}>
                    {results}
                </div>
                <div>
                    <Youtube query={name}/>
                </div>
                <div>
                    <Events info={this.props.info} events={this.props.events}/>
                </div>
            </div>
        );
    }
}

export default Results;

Results.propTypes = {
    info: PropTypes.object,
    events: PropTypes.array
};
