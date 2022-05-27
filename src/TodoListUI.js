import React from  'react';
import { Input, Button ,List } from 'antd';


const TodoListUI = (props) => {
    return (
      	<div style = {{marginTop: '10px', marginLeft: '10px'}}>
				<div>

					<Input 
						value = {props.inputValue}
						placeholder = "todo info" 
						style = {{width: '300px', marginRight: '5px'}}
						onChange = {props.handleInputChange}
					/>

					<Button 
						type="primary"
						onClick = {props.handleBtnClick}
					>
					提交
					</Button>

				</div>

				<List
					style = {{marginTop: '10px', width: '370px'}}
		      		bordered
				    dataSource={props.list}
				    renderItem={(item, index) => (
		      			<List.Item
		      			 	onClick = {()=>{props.handleItemDelete(index)}}
		      			>
		      				{index}:{item}
		      			</List.Item>
		      		)}
    			/>
		</div>
    )
}

// class TodoListUI extends Component {

// 	render() {
// 		return (
// 			<div style = {{marginTop: '10px', marginLeft: '10px'}}>
// 				<div>

// 					<Input 
// 						value = {this.props.inputValue}
// 						placeholder = "todo info" 
// 						style = {{width: '300px', marginRight: '5px'}}
// 						onChange = {this.props.handleInputChange}
// 					/>

// 					<Button 
// 						type="primary"
// 						onClick = {this.props.handleBtnClick}
// 					>
// 					提交
// 					</Button>

// 				</div>

// 				<List
// 					style = {{marginTop: '10px', width: '370px'}}
// 		      		bordered
// 				    dataSource={this.props.list}
// 				    renderItem={(item, index) => (
// 		      	<List.Item 
// 		      		onClick={(index) => {this.props.handleItemDelete(index)}}
// 		      	>
// 		      		{item} {index}
// 		      	</List.Item>
// 		      )}
//     		/>
// 		</div>
// 		)
// 	}
// }


export default TodoListUI;