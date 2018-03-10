{/* <CardText expandable={true}>
  {(this.props.comments.length > 0) && (
    this.props.comments.filter(comment => (comment.parentId === this.props.post.id))
    .map(comment => {
      return (
        <Comment key={comment.id} comment={comment} />
      )
    })
  )}
  {(this.props.comments.filter(comment => (comment.parentId === this.props.post.id)).length === 0) && (
    <div>
      <div>No comments.</div>
      <div>Make one!</div>
    </div>
  )}
</CardText> */}
