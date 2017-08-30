import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post';
import Post from './Post';
import style from '../../style/components/main.css';

class Main extends Component {

    //retrieve all post before component is rendered
    componentWillMount() {
        this.props.fetchPost();
    }

    renderPosts() {
        return this.props.posts.map((post,index)=> {
            return (
                <Post 
                    key={index}
                    username={post.author} 
                    date={post.date} 
                    school={post.school} 
                    post={post.post} 
                    upvote={post.upvotes}
                    question={post.question}/>
            );
        })   
    }

    render() {
        return (
            <div className={style.mainContainer}>
                {this.renderPosts()}
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.post}
}

export default connect(mapStateToProps, actions)(Main)