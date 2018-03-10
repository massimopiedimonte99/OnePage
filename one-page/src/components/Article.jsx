import React, { Component } from 'react';

export default class Article extends Component {
	render() {
		// Use the objects provided by the WordPress REST API to display dynamic content.
		return (
			<article className="article">
				<h2 dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></h2>
				<p dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}></p>
				<a href={this.props.post.link} className="readmore">READ MORE</a>
			</article>
		);
	}
} 