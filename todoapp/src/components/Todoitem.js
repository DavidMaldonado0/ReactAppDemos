import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () =>{
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return{
                textDecoration: 'none'
            }
        }
    }


  render() {
    return (
        <div style={this.getStyle()}>
            <p>{ this.props.todo.title }</p>
        </div>
    )
  }
}

Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default Todoitem;


/*import React, { Component } from 'react';



export class Todoitem extends Component {
  render() {
    return (
        <div>

        </div>
    )
  }
}

export default Todoitem; */
