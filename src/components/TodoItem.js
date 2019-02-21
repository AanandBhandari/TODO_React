import React, { Component } from 'react'
import propTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      background:'#f4f4f4',
      padding: '10px',
      borderBottom:'1px #ccc dotted',
      textDecoration : this.props.todo.completed ?
      'line-through' : 'none '}
  }
  render() {
    const {id,title} =this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange=
          // .bind(this,id) bcoz to pass id back to app.js to change the state of app
          {this.props.markComplete.bind(this,id)}/>
          {title}
          <button style={btnStyle} onClick={this.props.deleteItem.bind(this,id)}>X</button>
        </p>
      </div>
    )
  }
}
TodoItem.propTypes = {
    todo : propTypes.object.isRequired
}

const btnStyle = {
  background:'red',
  color:'white',
  border:'none',
  padding:'5px 10px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}
export default TodoItem