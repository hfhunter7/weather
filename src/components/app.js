import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import RepoGitHub from '../containers/RepoGitHub';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RepoGitHub />
      </div>
    );
  }
}
