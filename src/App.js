import React from 'react'
import TodoForm from './components/TodoForm'
import ItemList from './components/ItemList'

export default React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },
  updateList(task) {
    console.log(task)
  },
  render() {
    return (
        <div>
          <h1>To Do List</h1>
          <TodoForm updateList={this.updateList}/>
          <ItemList />
        </div>
      ) 
   }
})


