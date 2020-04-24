import React, {useEffect, useReducer} from "react";
import {PostsListState, Post} from "./post";

enum STATE {
    SUCCESS,
    FAIL,
    CLEAR
}

const PostList = () => {
    const initialState: PostsListState = {
        error: null,
        posts: []
    };

    const fetchPosts = async url => {
        try {
            const response = await fetch(url);
            if (response.status != 200) {
                return response;
            }
            const jsonResponse = await response.json();
            dispatch({
                type: STATE.SUCCESS,
                payload: jsonResponse
            });
        } catch (e) {
            dispatch({type: STATE.FAIL, error: e});
        }
    };

    const reducer = (state: PostsListState, action: any) => {
        switch (action.type) {
            case STATE.SUCCESS:
                return {
                    error: null,
                    posts: action.posts as Post[]
                };

            case STATE.FAIL:
                return {
                    error: action.posts as Error,
                    posts: []
                };

            default:
                return state;
        }
    };


    const [state, dispatch] = useReducer(reducer, initialState);
    const {posts, error} = state;

    const clearPost = () => {
        dispatch({type: STATE.CLEAR});
    };

    const getPosts = () => {
        fetchPosts("https://jsonplaceholder.typicode.com/posts");
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {error && <p> Error : {error} </p>}
            <button onClick={clearPost}>Clear All</button>
            <button onClick={getPosts}>Get Posts</button>
            <h1>This is post list </h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h4> {post.title}</h4>
                        <p>{post.body} </p>
                    </div>
                );
            })}
        </div>
    );
};

export default PostList;