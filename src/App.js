import React, { Component, Fragment } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './style.css';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: true,
			list: []
		}
		this.handleToggle = this.handleToggle.bind(this);
		this.handleAdditem = this.handleAdditem.bind(this);
	}


	render() {
		return (
			<Fragment>
				<CSSTransition 
					in = {this.state.show}
					timeout = {1000} 
					classNames = 'fade'
					appear = 'true'
			  >
					<div>hello</div>
				</CSSTransition>
				<button onClick = {this.handleToggle}>toggle</button>

				<TransitionGroup>
					{
						this.state.list.map((item, index) => {
							return (
								<CSSTransition
									key = {index} 
									timeout = {1000} 
									classNames = 'fade'
									appear = 'true'
			  				>
									<div>{item}</div>
								</CSSTransition>
							)
						})
					}
				</TransitionGroup>
				<button onClick = {this.handleAdditem}>toggle</button>
			</Fragment>
		)
	} 


	handleToggle() {
		this.setState({
			show: this.state.show ? false : true
		})
	}


	handleAdditem() {
		this.setState((prevState) => {
			return {
					list: [...prevState.list, 'item']
			}
		})
	}


}

export default App;