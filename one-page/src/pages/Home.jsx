import React, { Component } from 'react';
import Article from '../components/Article.jsx';

export default class Home extends Component {
	render() {
		// Foreach article, make an <Article /> component.
		let articles = this.props.posts.map((article, index) => <Article post={article} key={index} />)
		return (
			<div className='Home'>
				{articles}
			</div>
		);
	}
} 