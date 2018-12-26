import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newPosts} from '../actions/postActions';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title : "",
            body : ""
         }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            console.log("New Post =>", nextProps.newPost)
        }

    }

    handleChange(e){
        let name = e.target.name;
        this.setState({
            [name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        let post = {
            title : this.state.title,
            body: this.state.body
        }

     this.props.newPosts(post);
        
        
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Add Post</h1>
                <form onSubmit={(e) =>this.onSubmit(e)}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" value={this.state.body} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <button >Submit</button>
                </form>
            </React.Fragment>
         );
    }
}

PostForm.prototypes = {
    newPosts :   PropTypes.func.isRequired,
    newPost : PropTypes.object
}

const mapStatetoProps = state => ({
    newPost : state.posts.item
})
 
export default connect(mapStatetoProps, {newPosts})(PostForm) ;