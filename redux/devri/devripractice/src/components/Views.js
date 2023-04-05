import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className='items'>
      <h2>조회 수 : {count} </h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>조회하기!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.views.count,
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
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
