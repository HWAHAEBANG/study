import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux"; // ?

const Comments = ({ fetchComments, loading, comments }) => {
  //컴포넌트가 랜더링되면 바로 한번 실행이 될 수 있도록 useEffect 사용
  useEffect(() => {
    fetchComments();
  }, []);

  console.log("wauyyyy", comments);

  const commentsItems = loading ? (
    <div>is loading...</div>
  ) : (
    comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );

  return <div className='comments'>{commentsItems}</div>;
};

const mapStateToProps = (/* state */ { comments }) => {
  return {
    comments: /* state. */ comments.items,
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
