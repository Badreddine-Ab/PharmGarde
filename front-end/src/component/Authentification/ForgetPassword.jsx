import { POST } from "../../API/Axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [Error, SetError] = useState("");
  const [sucess, setSucess] = useState("");
  const handleChange = (e) => {
    setEmail(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(email);
      POST("user/forgetpassword", email)
        .then((res) => {
          if (res.status == 200) {
            setSucess(res.data);
            console.log(sucess);
          } else {
            SetError(e.res.data);
          }
          console.log(res);
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
      {sucess && ( <>
      <div className="alert alert-success mt-4" role="alert">{sucess}</div>
      <Link className="field padding-bottom--24" to="/"> <button className="btn btn-dark text-center"> back to login</button></Link>

      </>)}
      {!sucess && (
        <>
         {Error && ( <div className="alert alert-danger" role="alert">{Error}</div>)}
          <form id="stripe-login" onSubmit={handleSubmit}>
            <div className="field padding-bottom--24">
              <label htmlFor="email">Email</label>
              <input name="email" onChange={handleChange} />
            </div>

            <div className="field padding-bottom--24">
              <input type="submit" name="submit" defaultValue="Send" />
            </div>
          </form>
          </>
      )}
    </div>
  );
}
