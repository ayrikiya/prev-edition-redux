import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}


	shouldComponentUpdate(nextProps, nextState){
  if(nextProps.content !== this.props.content){
    return true;
  }else{
    return false;
  }
}


	render() {
		const { content } = this.props;
		return (
			<div onClick = {this.handleClick}>
				{content}	
			</div>
		)
	}

	
	handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);

	}

}


Todoitem.propTypes = {
	content: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}


export default Todoitem;