import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import RepoGitHub from '../containers/RepoGitHub';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {/*<RepoGitHub />*/}
        <WeatherList />
      </div>
    );
  }
}
