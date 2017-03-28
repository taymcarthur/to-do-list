import React from 'react'

import TodoItems from "./components/TodoItems"

export default = React.createClass({
	render: function () {
		var createItem = function(itemText) {
			return (
				<TodoItems>{itemText}</TodoItems>
			)
		}
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
})