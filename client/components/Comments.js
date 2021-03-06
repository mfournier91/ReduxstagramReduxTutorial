import React from 'react';

class Comments extends React.Component {
  constructor(props){
    super(props);
    let self = this;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComment(comment, i){
    const removeComment = self.props.removeComment;
    const {postId} = self.props.params;
    //
    return (
      <div className="comment" key={i}>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment" onClick={removeComment.bind(null, postId, i)}>&times;</button>
      </div>
    )
  }
  handleSubmit(e){
    e.preventDefault();
    console.log("subbitting form");
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(postId, author, comment);
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
    <div className="comments">
      {this.props.postComments.map(this.renderComment)}
      <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="author" placeholder="author"/>
        <input type="text" ref="comment" placeholder="comment"/>
        <input type="submit" hidden />
      </form>
    </div>
  )
  }
}

export default Comments;
