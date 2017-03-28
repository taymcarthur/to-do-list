import React from 'react'

export default React.createClass({
	getDefaultProps() {
		return {
			items: []
		}
	},
	render() {
		return (
			<ul>
				{this.props.items.map(item=>(
					<li>	
						<input type="checkbox" id={item.id}/>
						<label htmlFor={item.id}>{item.title}</label>
						<button>X</button>
					</li>
				))}
			</ul>
		)
	}
})

