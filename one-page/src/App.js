import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Contents from './components/Contents.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [], // This array will contains the posts fetched by the getPosts() method.
      page: 'Home' // This property will be used in Components.jsx to switch between the pages.
    }
  }

  // Fetch the posts based on the given URL, if no url is given... use the default one.
  getPosts(url = "http://bymaz.altervista.org/wp-json/wp/v2/posts") {
    fetch(url).then((res) => res.json()).then((res) => this.setState({ posts: res }));
  }

  // Once you change page by clicking on a link, this function update the "page" property.
  changePage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <div className="wrapper">
        <Header changePageOnClick={this.changePage.bind(this)} getPostsOnClick={this.getPosts.bind(this)}/>
        <Contents page={this.state.page} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
