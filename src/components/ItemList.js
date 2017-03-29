import React from 'react'
import ListItem from './ListItem'

export default React.createClass({
	getDefaultProps() {
		return {
			items: []
		}
	},
	handleClick() {
		alert("hi")

	},
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>{this.props.foo}</button>

			<ul>
				{this.props.items.map(item=>(
					<ListItem key={item.id} destroyItem={this.props.destroyItem} {...item} />
				))}
			</ul>
			</div>
		)
	}
}) 