import React, { Component,Fragment } from 'react';
import Todoitem from './Todoitem';
import axios from 'axios';
import './style.css';


class Todolist extends Component {


	constructor(props){
		super(props);
		this.state = {
			inputValue: 'dadada',
			list: ['学习英文', '学习数学']
		}	
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}


	render(){
		return (
			<Fragment>
				<div>
					<label htmlFor = "insertArea">输入内容</label>
					<input 
						id = "insertArea"
						className = 'input'
						value = {this.state.inputValue}
						onChange = {this.handleInputChange} 
						ref = {(input) => {this.input = input}}
					/>
					<button onClick = {this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}


	componentDidMount(){
		axios.get('/api/todolist')
		.then(() => {alert('succ')})
		.catch(() => {alert('error')})
	}


	getTodoItem(){
		return this.state.list.map((item, index) => {
		  return (
					<Todoitem 
						key = {index}
						content = {item} 
						index = {index}
						deleteItem = {this.handleItemDelete}
					/>
			) 
    })
	}


	handleInputChange(e){
		const value = this.input.value;
		// const value = e.target.value;
		this.setState(() => {
			return {
				inputValue: value
			}
		})

	}


	handleBtnClick(){
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))

	}


	handleItemDelete(index){
		// console.log(index)
		const list= [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		})
	}


}



export default Todolist;
