import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        {/* {this.props.isAuth ? <Redirect to="/dashboard" /> : null} */}
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Project</h1>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-primary">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-success">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
