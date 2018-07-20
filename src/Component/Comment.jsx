import React, { Component } from 'react';

class Comment extends Component {
    render() {
        let comment = this.props.comment
        return (
            <div>
                <img src="https://accounts-cdn.9gag.com/media/default-avatar/1_67_100_v0.jpg" alt="Cate" className="avatar" />
                <p>{comment}</p>
            </div>

        )
    }
}

export default Comment;