import PropTypes from 'prop-types';
import React, { Component } from "react";
import { dateTimeToDate } from "../services/date";
import styles from '../styles/events.module.css';

class Events extends Component {

   /**
   * Creates the Markup for the Event Section
   * @param data, array
   * @returns Markup
   */
    getEvents = (data) => {
        if (data.length === 0) {
            return (
                <li className={styles.listitem} key={data.id}>
                    <span className={styles.right}>
                        <p className={styles.listitemcopy}>nothing going on</p>
                    </span>
                </li>
            );
        } else {
            return data.map(function (data) {
                return (
                    <li className={styles.listitem} key={data.id}>
                        <span className={styles.left}>
                            <p className={styles.listitemcopy}><span className={styles.month}>{dateTimeToDate(data.datetime)[0]}</span> <span className={styles.day}> {dateTimeToDate(data.datetime)[1]}</span></p>
                        </span>
                        <span className={styles.right}>
                            <p className={styles.listitemcopy}>{data.venue.name}</p>
                            <p className={styles.listitemcopy}>{data.venue.city}</p>
                            <p className={styles.listitemcopy}>{data.venue.country}</p>
                        </span>
                    </li>
                );
            })
        }

    }

    render() {
        const events = this.getEvents(this.props.events);
        const name = this.props.info.name ? this.props.info.name : '';
        const url = this.props.info.thumb_url ? this.props.info.thumb_url : '';


        return (
            <div className={styles.contentbox}>
                <div className={styles.headerwrapper}>
                    <h3 className={styles.name}>Go See {name} live!</h3>
                    <img className={styles.image} src={url} alt={name}/>
                </div>
                <ul className={styles.list}>
                    {events}
                </ul>
            </div>
        );
    }
}

export default Events;

Events.propTypes = {
    info: PropTypes.object,
    events: PropTypes.array
};
