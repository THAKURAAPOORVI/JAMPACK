// import React, { useState, useEffect,useContext } from 'react'
// import '../CSS/Signin.css'
// import { auth } from "./Firebase"
// import { Redirect, useHistory } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { Puff } from 'react-loader-spinner'
// import { useUserAuth } from './AuthContext'


// const Signin = () => {
//   const [isInitialLoad, setInitialLoad] = useState(true);
//   const [isVisible, setVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setpassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [redirectToDashboard, setRedirectToDashboard] = useState(false);

//   // useEffect(() => {
//   //   const token = localStorage.getItem('Accesstoken');
//   //   if (token !== null) {
//   //     setRedirectToDashboard(true);
//   //   }
//   //   setInitialLoad(false);
//   // }, []);
//   const toggle = () => {
//     setVisible(!isVisible);
//   };
//   const onLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         setLoading(false);
//         const user = userCredential._tokenResponse.refreshToken;
//         let user2 = userCredential.user.accessToken;
//         localStorage.setItem('Accesstoken', user2);
//         localStorage.setItem('Refreshtoken', user);
//         localStorage.setItem('email', userCredential.user.email);
//         localStorage.setItem('name', userCredential.user.displayName);
//         console.log(userCredential, 'userCredential');
//         setRedirectToDashboard(true);
//         console.log('successfully login');
//       })
//       .catch((error) => {
//         setLoading(false);
//         const errorCode = error.code;
//         alert('Wrong Email/Password');
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         console.log('Invalid email or password');
//       });
//   };

//   if (redirectToDashboard) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <>
//       <div className='main'>
//         <div className='pic'>
//           <img src='../assests/jamlogo.png'></img>
//         </div>
//         <div className='head'>
//           <h1>Jampack</h1>
//         </div>
//       </div>
//       {/* card   */}

//       <div className='col-lg-12 for' >
//         <form class="row g-3 needs-validation mains  signspace "
//           onSubmit={onLogin}
//           novalidate>

//           <div className='col-md-12'>
//             <div className='col sign'>
//               <h4>Sign in to your account</h4>
//             </div>
//           </div>
//           <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label">Email ID</label>
//             <input type="email" autoComplete="off" class="form-control" id="exampleFormControlInput1"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}  required

//               placeholder="Enter email ID" />
//           </div>
//           <Puff
//             height="80"
//             width="80"
//             radius={1}
//             color="#4fa94d"
//             ariaLabel="puff-loading"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={loading}
//           />

//           <div class="mb-3 pass">
//             <div className='lb'>
//               <label for="exampleFormControlInput1" autoComplete="off" class="form-label">Password  <a href="forget"><h6>Forgot Password?</h6></a> </label></div>
//             <div className='inp'>
//               <input type={!isVisible ? "password" : "text"}
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//                 required class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
//               {/* <div className='imm  pass-icon'>
//     <img  src='../assests/eye2.png'></img>
//   </div> */}
//               <span toggle="#password-field" className="icon" onClick={toggle}   >
//                 {isVisible ? <i class="fa-regular fa-eye  field-icon toggle-password"></i> : <i class="fa-regular fa-eye-slash  field-icon toggle-password"></i>}
//               </span>
//             </div>
//           </div>
//           <div className='checkform'>
//             <div class="form-check">
//               <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"   required/>
//               <label class="form-check-label" for="flexCheckChecked"  >
//                 Keep me logged in
//               </label>
//             </div></div>
//           <div className='signbtn'>
//             <div class="col-12">
//               <button type="submit" class="btn" id='login'>LOGIN</button>



//             </div></div>
//           <div className='create padapu'>
//             <p class="text--center">Not to Jampack? <a href="signup">Create new account?</a> </p>
//           </div>

         
//         </form>
//       </div>



//     </>
//   );
// };

// export default Signin;



// import React, { useState, useEffect } from 'react';
// import '../CSS/Signin.css';
// import { auth } from "./Firebase";
// import { Redirect } from 'react-router-dom';
//  import { Redirect, useHistory } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { Puff } from 'react-loader-spinner';
// import { useUserAuth } from './AuthContext';

// const Signin = () => {
//   const [isVisible, setVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { logIn, googleSignIn } = useUserAuth();
//   const [redirectToNextPage, setRedirectToNextPage] = useState(false);

//   const toggle = () => {
//     setVisible(!isVisible);
//   };

  // useEffect(() => {
  //   const token = localStorage.getItem('Accesstoken');
  //   if (token !== null) {
  //     window.location.href = '/';
  //     console.log(token, "qqqqqqqqqqqqqqqqqqqqqqq");
  //   }
  // }, []);

  // const onLogin = (e) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       setLoading(false);
  //       const user = userCredential._tokenResponse.refreshToken;
  //       let user2 = userCredential.user.accessToken;
  //       localStorage.setItem('Accesstoken', user2);
  //       localStorage.setItem('Refreshtoken', user);
  //       localStorage.setItem('email', userCredential.user.email);
  //       localStorage.setItem('name', userCredential.user.displayName);
  //       console.log(userCredential, 'userCredential');
  //       logIn(email, password);
  //       setRedirectToNextPage(true); // Set the state to trigger redirection
  //       console.log(user);
  //       console.log("successfully login");
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       const errorCode = error.code;
  //       alert('Wrong Email/Password');
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       console.log("invalid please check your email and password");
  //     });
  // }

  // if (redirectToNextPage) {
  //   return       window.location.href = '/'; // Replace '/next-page' with the actual path of the next page
  // }



  // changed code  

 import React, { useState, useEffect,useContext } from 'react'
import '../CSS/Signin.css'
import { auth } from "./Firebase"
import { Redirect, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Puff } from 'react-loader-spinner'
import { useUserAuth } from './AuthContext'


const Signin = () => {
  const [isInitialLoad, setInitialLoad] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('Accesstoken');
  //   if (token !== null) {
  //     setRedirectToDashboard(true);
  //   }
  //   setInitialLoad(false);
  // }, []);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential._tokenResponse.refreshToken;
        let user2 = userCredential.user.accessToken;
        localStorage.setItem('Accesstoken', user2);
        localStorage.setItem('Refreshtoken', user);
        localStorage.setItem('email', userCredential.user.email);
        localStorage.setItem('name', userCredential.user.displayName);
        console.log(userCredential, 'userCredential');
        setRedirectToDashboard(true);
        console.log('successfully login');
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        alert('Wrong Email/Password');
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        console.log('Invalid email or password');
      });
  };

  if (redirectToDashboard) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <Puff
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="puff-loading"
            visible={true}
          />
        </div>
      ) :
        <div className='main'>
          <div className='pic'>
            <img src='../assests/jamlogo.png' alt="logo"></img>
          </div>
          <div className='head'>
            <h1>Jampack</h1>
          </div>
        </div>
      }

      {!loading && (
        <div className='col-lg-12 for'>
          <form
            className="row g-3 needs-validation mains signspace"
            onSubmit={onLogin}
            noValidate
          >
            <div className='col-md-12'>
              <div className='col sign'>
                <h4>Sign in to your account</h4>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email ID</label>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                id="exampleFormControlInput1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email ID"
              />
            </div>
            <Puff
              height={80}
              width={80}
              color="#4fa94d"
              ariaLabel="puff-loading"
              visible={loading}
            />

            <div className="mb-3 pass">
              <div className='lb'>
                <label htmlFor="exampleFormControlInput1" autoComplete="off" className="form-label">Password  <a href="forget"><h6>Forgot Password?</h6></a> </label>
              </div>
              <div className='inp'>
                <input
                  type={!isVisible ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your password"
                />
                <span toggle="#password-field" className="icon" onClick={toggle}>
                  {isVisible ? <i className="fa-regular fa-eye  field-icon toggle-password"></i> : <i className="fa-regular fa-eye-slash  field-icon toggle-password"></i>}
                </span>
              </div>
            </div>
            <div className='checkform'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" required />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Keep me logged in
                </label>
              </div>
            </div>
            <div className='signbtn'>
              <div className="col-12">
                <button type="submit" className="btn" id="login">LOGIN</button>
              </div>
            </div>
            <div className='create padapu'>
              <p className="text--center">Not to Jampack? <a href="signup">Create a new account?</a></p>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Signin;
