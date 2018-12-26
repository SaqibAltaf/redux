import {FETCH_POST, NEW_POST} from './types';

export const fetchPosts = () => dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_POST,
            payload: res
        }));
}


export const newPosts = (post) => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(res => dispatch({
        type: NEW_POST,
        payload: res
    })
    );
}