import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () =>{
       return {
           background: '#A43931',
           color: '#fff',
           padding: '15px',
           borderBottom: '1px #fff dotted',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none'
       }
    }


  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
  }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#1D4350',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
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
