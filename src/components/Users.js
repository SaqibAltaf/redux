import React, { Component } from 'react';
import './Users.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchUsers} from './../actions/postActions';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            index:0
         }
    }
componentWillReceiveProps(nextProp){
    console.log(nextProp)
    this.props.users.push(nextProp.users);
}

    checkUser(){
        console.log(this.props)
        let index = this.state.index;
        index = index+1;
        this.setState({
            index:index
        }, () =>{
            this.props.fetchUsers(index);
        })
        
       

    }
    render() { 
        return ( 
            <React.Fragment>
                <button className="btn btn-primary" onClick={() => this.checkUser()}>Check User</button>

                {this.props.users.length>0 ? 
                <React.Fragment>
                        <h2>Users</h2>
                        {this.props.users.map((val, key) => {
                            return (
                                    <table key={key}>
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{val.userId}</td>
                                                <td>{val.id}</td>
                                                <td>{val.title}</td>
                                                <td>{val.userId}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            )
                        })}
                   
                </React.Fragment> : ""
            }
            </React.Fragment>
            
         );
    }
}
 
Users.prototypes = {
    users : PropTypes.array.isRequired
}

 const mapStatetoProps = state => ({
    users : state.posts.users
})
export default connect(mapStatetoProps, {fetchUsers})(Users);