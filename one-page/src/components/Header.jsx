import React, { Component } from 'react';

export default class Header extends Component {
	handleClickHome(e) {
		this.props.getPostsOnClick(e.target.getAttribute('data-website'));
		this.props.changePageOnClick(e.target.innerHTML);
	}
	handleClickPage(e) {
		this.props.changePageOnClick(e.target.innerHTML);
	}
	render() {
		return (
			<header>
				<nav>
					<li onClick={this.handleClickHome.bind(this)} data-website="http://bymaz.altervista.org/wp-json/wp/v2/posts">Home</li>
					<li onClick={this.handleClickPage.bind(this)}>About</li>
					<li onClick={this.handleClickPage.bind(this)}>Contacts</li>
				</nav>
			</header>
		);
	}
} 