import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      register: false
    }
  }

  handleRegisterClick(){
    this.setState({register: true})
  }

  render(){
    if (this.state.register) {
      return(
        <div className="container-fluid">
        <form className="form-conatiner">
        <div className="form-group">
        <input type="email" name="email" id="emailRegister" tabindex="1" className="form-control" placeholder="Email Address" value="" />
        </div>
        <div className="form-group">
        <input type="password" name="password" id="passwordRegister" tabindex="2" className="form-control" placeholder="Password" />
        </div>
        <div className="form-group">
        <input type="password" name="retypepassword" id="retypepassword" tabindex="2" className="form-control" placeholder="Confirm Password" />
        </div>
        <div className="form-group">
        <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
        <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now" />
        </div>
        </div>
        </div>
        </form>
        </div>
      )
    }else {
      return(
        <div className="container-fluid">
        <br />
        <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12"></div>
        <div className="col-md-4 col-sm-4 col-xs-12">
        <form className="form-conatiner">
        <h1 className="text-center">Welcome to POS</h1>
        <hr />
        <h3 className="text-center">Login With</h3><br />
        <div className="form-group">
        <label>Username or Email</label>
        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Username or Email" />
        </div>
        <br />
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="checkbox">
        <label>
        <input type="checkbox" /> Remember me
        </label>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block">Login</button>
        <p className="text-center" onClick={this.handleRegisterClick.bind(this)}>Dont have account ? Sign up</p><hr />
        <h4 className="text-center">OR</h4><br />
        <div className="text-center">
        <li  className="fa fa-facebook"></li>
        <li  className="fa fa-twitter"></li>
        <li  className="fa fa-google"></li>
        </div>
        </form>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
        <br />
        </div>
      )
    }
  }
}
