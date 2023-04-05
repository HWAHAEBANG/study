import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./types";

const fetchCommentSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchComments = () => {
  // thunk를 썼기 때문에 return에
  // dispatch를 인자로 넘겨받은 함수를 사용할 수 있는 것임.
  return (dispatch) => {
    dispatch(fetchCommentRequest());
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((reponse) => reponse.json())
      .then((comments) => dispatch(fetchCommentSuccess(comments))) // 페이로드로 넘겨서 처리
      .catch((error) => dispatch(fetchCommentFailure(error)));
  };
};
