import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { siginIn } from "../reducks/users/oparation";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.router);

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(siginIn())}>ログインする</button>
    </div>
  );
};
export default Login;
