import React from "react";

const Login = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const user=e.target.username.value;
    const pass=e.target.password.value;
    const remember=e.target.remember.checked ? 'True': 'False' ;
    console.log("Username: " + user, "\n", "Password: " + pass, "\n", "Remember: " + remember);
  }
  return (
    <div className="containe">
      <div className="position-absolute top-50 start-50 translate-middle w-50 p-3">
        <form className='p-3 form bg-dark pt-5 pb-5'onSubmit={handleSubmit}>
          <div className="mb-3">
              <h2 className="text-center text-primary">LOGIN</h2>
          </div>

          <div className="mb-3">
              <label htmlFor="username" className="form-label  text-primary">Username</label>
              <input name="username"
                type="text"
                className="form-control" 
                id="username"
                placeholder="Username"/>
          </div>

          <div className="mb-3">
              <label htmlFor="password" className="form-label text-primary">Password</label>
              <input name="password" 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password"/>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={'on'} name="remember" id="remember"/>
            <label className="form-check-label text-danger" htmlFor="remember">
              Remember me
            </label>
          </div>
          <div className="mb-3 boxdiv">
            <button type='submit' 
              className='btn btn-dark bg-primary text-white' >Log In</button>
          </div>
        </form>   
      </div>
    </div>
        
  );
};

export default Login;
