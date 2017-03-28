import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoItems from "./components/TodoItems"
import TodoList from "./components/TodoList"

export default React.createClass({
  getInitialState: function(){
    return {
      items: []
    };
  },
updateItems: function(newItem){
  var allItems=this.state.items.concat([newItems]);
  this.setState({items: allItems});
},
render: function (){
  return (
    <div>
      <h3>To Do List</h3>
      <TodoList items = {this.state.items}/>
      <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    )
  }
})
