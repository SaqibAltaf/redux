import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from './../actions/postActions';
class Posts extends Component {
   
    componentWillMount(){
        this.props.fetchPosts();
    }
    render() {
        const postItem = this.props.po.map((val, key) => {
            return (
                <div key={key}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                </div>
            )
        });

        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        )
    }
}
const mapStateToProps = state  => ({
    po: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Posts);
