import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRepo} from "../actions/index";

class RepoGitHub extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            owner : undefined,
            repo: undefined
        }
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSave(event){
        event.preventDefault();
        this.props.fetchRepo(this.state.owner , this.state.repo);
        this.setState({
            term: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="owner" onChange={this.handleChange}/>
                <input type="text" name="repo" onChange={this.handleChange}/>
                <button onClick={this.handleSave}>Click</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchRepo} , dispatch);
}

export default connect(null , mapDispatchToProps)(RepoGitHub);
