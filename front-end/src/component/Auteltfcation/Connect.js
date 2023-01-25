import "./login.css";
import "react-toastify/dist/ReactToastify.css";
import { POST } from "../../API/Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Connect() {
  const [Data, SetData] = useState({});
  const [Error, SetError] = useState();

  const navig = useNavigate();
  const handleChange = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      POST("user/login", Data)
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            // localStorage.setItem("username", res.data.username);
            navig("/");
          } else {
            SetError(e.response.data);
          }
        console.log(res)
        })
        .catch((e) => {
          SetError(e.response.data);
        });
    } catch (e) {
      SetError(e.response.data);
    }
  };
  return (
    <div>
      <form id="stripe-login" onSubmit={handleSubmit}>
        <div className="field padding-bottom--24">
          <label htmlFor="email">Email</label>
          <input name="email" onChange={handleChange} />
        </div>
        <div className="field padding-bottom--24">
          <div className="grid--50-50">
            <label htmlFor="password">Password</label>
          </div>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" /> Stay signed in for a week
          </label>
        </div>
        <div className="field padding-bottom--24">
          <input type="submit" name="submit" defaultValue="Continue" />
        </div>
        <div className="field">
          <a className="ssolink" href="#">
            Use single sign-on (Google) instead
          </a>
        </div>
      </form>
    </div>
  );
}
