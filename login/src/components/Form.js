import React, {Component} from 'react';

class Form extends Component{
    constructor () {
        super();
        this.state = {
          user: '',
          password: '',
        };
      }
    
    
      render() {
        return (
          <div className="card">
            <form className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="user"
                  className="form-control"
                  value={this.state.user}
                  placeholder="Usuario"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  placeholder="Contraseña"
                  />
              </div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        )
      }
    
}

export default Form;