import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<section className="contacts">
				<h2>Get in touch!</h2>
				<div className="form-group">
					<div className="form-control-inline">
						<label htmlFor="name" className="sr-only">Name</label>
						<input type="text" name="name" placeholder="Name" />
					</div>
					<div className="form-control-inline">
						<label htmlFor="email" className="sr-only">Email</label>
						<input type="text" name="email" placeholder="Email" />
					</div>
					<div className="form-control">
						<label htmlFor="message" className="sr-only">Message</label>
						<textarea name="message" placeholder="Message"></textarea>
					</div>
					<div className="form-control">
						<button className="submit-btn">SUBMIT</button>
					</div>
				</div>
			</section>
		);
	}
} 