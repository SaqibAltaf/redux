import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from './../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {
   
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(Object.keys(nextProps.newPost).length > 0){
        console.log(nextProps)
            this.props.po.unshift(nextProps.newPost)
        }
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

Posts.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    po: PropTypes.array.isRequired,
    newPost : PropTypes.object
}

const mapStateToProps = state  => ({
    po: state.posts.items,
    newPost :state.posts.item
})
export default connect(mapStateToProps, {fetchPosts})(Posts);
