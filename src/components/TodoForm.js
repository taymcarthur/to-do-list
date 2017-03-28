import React from 'react'

export default React.createClass({
	getInitialState() {
		return {
			task: ''
		}
	},
 	handleSubmit(e) {
 		e.preventDefault()
 		console.log("submitted")
 		this.props.updateList(this.state.task)
 		this.setState({
 			task: ''
 		})
 	},
 	handleChange(e) {
 		this.setState({
 			task:e.target.value
 		})
 	},
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="What needs to be done?" value={this.state.task} onChange={this.handleChange}/>
			</form>
			)
		}
	})

	