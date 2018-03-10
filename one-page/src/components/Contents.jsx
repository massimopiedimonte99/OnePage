import React, { Component } from 'react';
import Home from './../pages/Home.jsx';
import About from './../pages/About.jsx';
import Contact from './../pages/Contact.jsx';

export default class Contents extends Component {
	render() {
		
		let page = undefined;

		// Switch the page based on the state given by the <App /> component.
		switch(this.props.page) {
			case 'Home':
				page = <Home posts={this.props.posts} />;
				break;
			case 'About':
				page = <About />;
				break;
			case 'Contacts':
				page = <Contact />;
				break;
			default: page = <Home posts={this.props.posts} />;
		}

		return (
			<section className="articles">
				{page}
			</section>
		);

	}
} 