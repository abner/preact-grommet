import { h, Component } from 'preact';
import { Notify } from 'preact-fluid';

import style from './style.css';

import { Button } from 'preact-fluid';
export default class Home extends Component<any,any> {
	notification: Notify;

	notify = () => {
		this.notification.add({
			title: 'New Message',
			message: 'Looks like you have a message!',
			type: 'Info'
		})
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<Button primary onClick={this.notify}>Show Notification</Button>
				<Notify id="unique-id-1" ref={(comp) => this.notification = comp } />
			</div>
		);
	}
}
