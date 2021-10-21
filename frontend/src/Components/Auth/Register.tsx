import React, { useState } from "react";
import "./scss/Register.scss";
import Logo from "../Assets/Image/shortFLIX.png";
import { useHistory } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAlt,
  faKey,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AzureAxios from "../API/Azure_Api";

library.add(faUserAlt, faKey, faEnvelope);

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const onChangeHandler = (e: { target: { name: any; value: any } }) => {
    const {
      target: { name, value },
    } = e;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "checkPassword") {
      setCheckPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };
  const onRegisterHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (password === checkPassword) {
      AzureAxios.post("/register", {
        email: id,
        password: password,
        username: username,
      })
        .then((response: any) => {
          if (response.status === 200) {
            history.push("/login");
          }
        })
        .catch((error) => {
          if (error.response) {
            alert("이미 존재하는 아이디입니다.");
          } else if (error.request) {
            alert("응답을 받지 못했습니다. 다시 시도해주세요.");
          }
        });
    }
  };
  return (
    <div className="Register__Container">
      <div className="Register__Contents">
        <img className="Register__Logo" src={Logo} alt="" />
        <form className="Register__Form">
          <div>
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="이메일을 입력하세요."
              name="id"
              autoComplete="off"
              value={id}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUserAlt} />
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              required
              autoComplete="off"
              placeholder="이름을 입력하세요."
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="password">
              <FontAwesomeIcon icon={faKey} />
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              required
              placeholder="비밀번호를 입력하세요."
              onChange={onChangeHandler}
            />
          </div>
          <span className="Register__checkPassword">
            {checkPassword && password !== checkPassword
              ? "비밀번호가 일치하지 않습니다."
              : ""}
          </span>
          <div>
            <label htmlFor="checkPassword">
              <FontAwesomeIcon icon={faKey} />
            </label>
            <input
              id="checkPassword"
              type="password"
              name="checkPassword"
              value={checkPassword}
              required
              placeholder="비밀번호를 체크합니다."
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" onClick={onRegisterHandler}>
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
