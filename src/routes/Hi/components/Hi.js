import React from 'react'
import './Hi.css'

const duck=require('../assets/Duck.jpg');

class Hi extends React.Component {
    constructor (props) {
        super(props);
        this.add = this.add.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }

    add () {
        if(this.refs.comment.value != '')
        this.props.addComments(this.refs.comment.value);
    }

    renderComment (comment,i) {
        return (
            <li key = {i}>
                {comment}
                <button className = "remove-comment" onClick = {this.props.removeComment.bind(this,i)}>&times;</button>     
            </li>
        )
    }

    render () {
        return (
            <div>
                <div className = "photo">
                <img src = {duck} />
                </div>
                <div>
                    <button onClick = {this.props.addLikes}>Like:{this.props.likes}</button>
                    <br />
                    <button onClick = {this.add}>Add Comment</button>
                    <input type = 'text' ref = 'comment' placeholder = 'input' />  
                </div>
                <div>
                    <ul className = "comment_list" >
                    {this.props.comments.map(this.renderComment)}
                    </ul>
                </div>
            </div>
        )
    }
}


Hi.propTypes = {
  likes        : React.PropTypes.number.isRequired,
  comments     : React.PropTypes.array.isRequired,
  addLikes     : React.PropTypes.func.isRequired,
  addComments  : React.PropTypes.func.isRequired,
  removeComment: React.PropTypes.func.isRequired
}

export default Hi
