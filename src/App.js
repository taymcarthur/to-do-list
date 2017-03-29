import React from 'react'
import TodoForm from './components/TodoForm'
import ItemList from './components/ItemList'
import {generate as id} from 'shortid'

//console.log(uuid(), uuid(), uuid())

export default React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },
  updateList(task) {
    this.setState({
      items: [...this.state.items, {
        title: task,
        id: "id" + id()
      }]
    })
  },
  destroyItem(id) {
    this.setState({
      items: this.state.items.filter(item=>{
        if (item.id === id) {
          return false
        } else {
          return true
        }
      })
    })
  },
  render() {
    return (
        <div>
          <h1>To Do List</h1>
          <TodoForm updateList={this.updateList}/>
          <ItemList destroyItem={this.destroyItem} items={this.state.items} foo="bar" />
        </div>
      ) 
   }
})