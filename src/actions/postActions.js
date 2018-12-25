import {FETCH_POST, NEW_POST} from './types';

export const   fetchPosts = () => dispatch =>{
    // return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_POST,
            payload: res
        }));
    // }
}