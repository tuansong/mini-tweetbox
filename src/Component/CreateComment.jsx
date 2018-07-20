import React, { Component } from 'react';

class CreateComment extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleType} className="cmt"/>
                <button onClick={this.props.handleCreateComment} className="btn btn-info">Comment</button>
            </div>
        )
    }
}

export default CreateComment