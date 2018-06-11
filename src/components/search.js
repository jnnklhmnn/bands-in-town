import React, { Component } from "react";
import Results from './results';
import Error from './error';
import Spinner from './spinner';
import {URLify} from '../services/urlify';
import { writeLastSearch, readLastSearch } from '../services/lastsearch';
import { askApi } from '../services/api';
import styles from '../styles/search.module.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            spinner: false
            };
    }
    
    componentDidMount() {
        if (readLastSearch(true)){
            this.getData(readLastSearch(true));
            this.setState({ value: decodeURI(readLastSearch(true)) });
        }
    }
    
    handleChange = (event) => {
        this.setState({ value: event.target.value });   
    }
    
    /**
    * event handler for form submit,
    * manages error state,
    * writes query to Localstorage via service
    * triggers getData
    * @param submitevent
    */
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ error: false });
        let input = URLify(this.state.value);
        if (input.length === 0) {
            this.setState({ error: true });
        } else {
            writeLastSearch(input);
            this.getData(input);
        }

    }
    
    /**
    * async function takes search query as input
    * manages spinner state, await api Service
    * @param input string
    */
    getData = async (input) => {
        this.setState({ spinner: true});
        this.setState({answer: await askApi(URLify(input))});
        this.setState({ spinner: false });
    }  

   /**
   * Creates the Markup for the Searchbar
   * @returns Markup
   */
    getSearchbar = () => {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className={styles.input} placeholder="Search for Band Name" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" className={styles.button} disabled={!this.state.value}> Go!</button>
                </form>
            </div>
        );
    }
    
   /**
   * returns the Results components when there is data in the Component State
   * @returns Results Component/null
   */
    getResults = () => {
        // scheint nur den spinnzer zu werfen, keinen error upzudaten....
        if (this.state.answer && this.state.answer.error === true ) {
            return (<Error />);
        }
        // debugger;
        if ((this.state.answer && this.state.answer.get()) || (this.state.answer && this.state.answer.get('events'))) {
            return <Results info={this.state.answer.get('info')} events={this.state.answer.get('events')}/>;
        } else {
            return null;
        }
    }
    
   /**
   * Creates the Markup for the latest Search functionality
   * @returns Markup
   */
   getLatestSearch = () => {
       return (
           <div>
               <button onClick={this.lastSearch} className={styles.button} disabled={!readLastSearch()}>search last band again</button>
        </div>
        );
    }
    
    /**
     * Eventhandler for lastSearch functionality
     * gets query via readLastSearch Service
     * gets Data via getData service
     */
    lastSearch = () => {
        if (readLastSearch()) {
            this.setState({ error: false });
            this.setState({ value: decodeURI(readLastSearch()) });
            this.getData(readLastSearch());
        }
    }
    
    /**
    * returns Error Component
    * @returns React Component
    */
    getError = () => {
        return (<Error />);
    }

    render() {
        const searchBar = this.getSearchbar();
        const results = this.getResults();
        const latestSearch = this.getLatestSearch();
        const error = this.getError();
        
        let bottomPart;
        
        const topPart = 
            <div className={styles.inputsection}>
                {searchBar}
                {latestSearch}
            </div>;


        if (this.state.spinner) {
            bottomPart = <Spinner/>;
        } else if (this.state.error) {
            bottomPart = error;
        } else {
            bottomPart = results;
        }

        return (<div className={styles.bitcontent}>
            {topPart}
            {bottomPart}
        </div>);

    }
}

export default Search;
