import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSports } from '.';

export default class FetchSports extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // go and fetch data
        this.props.fetchSports(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input
                placeholder="Get List of Registered Sports"
                className="form-control"
                value={this.stat.term}
                onChange={this.onInputChange} />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchSports},dispatch)
}

export default connect(null,mapDispatchToProps)(FetchSports)


