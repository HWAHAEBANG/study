import React from "react";
import { connect } from "react-redux";
// import { addSubscriber, removeSubscriber } from "../redux/subscribers/actions";
import { addSubscriber, removeSubscriber } from "../redux/index";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className='items'>
      <h2>구독자 수 : {count} </h2>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.subscribers.count,
  };
};

// // 함수 형태로 만들어본 것
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

// 오브젝트 형태
const mapDispatchToProps = {
  // addSubscriber: addSubscriber, //그대로 매핑해주기.
  addSubscriber, // 생략까지 한 최종 결과
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
