import React from 'react'

import './login.css';

import 'react-toastify/dist/ReactToastify.css';

export default function Connect() {

  return (
    <div>

    
<form id="stripe-login">

        <div className="field padding-bottom--24">
            <label htmlFor="email">UserName</label>
            <input
                 name="" 
                 value=""
                
            />
        </div>
        <div className="field padding-bottom--24">
            <div className="grid--50-50">
                <label htmlFor="password">Password</label>
            </div>
            <input 
                 type="password"
                 name="Password"
                 value="" 
                 />
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
            <a className="ssolink" href="#">Use single sign-on (Google) instead</a>
        </div>

</form>
    </div>
  )
}
