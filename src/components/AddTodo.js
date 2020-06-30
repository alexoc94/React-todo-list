import React, { Component } from 'react';


export class Addtodo extends Component {
  state = {
    title: ''
  }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });//Clears the field by setting the title back to nothing
      }

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
      //Your setting the target name to the target value via ':' ie title: e.target.value 
    
    render() {
        return (
          <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
              type="text" 
              name="title" 
              style={{ flex: '10', padding: '5px' }}
              placeholder="Add Todo ..." 
              value={this.state.title}
              onChange={this.onChange}
            />
            <input 
              type="submit" 
              value="Submit" 
              className="btn"
              style={{flex: '1'}}
            />
          </form>
        )
      }
    }



export default Addtodo

