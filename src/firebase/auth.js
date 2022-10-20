import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  // sendSignInLinkToEmail,
  // isSignInWithEmailLink,
  // signInWithEmailLink,
} from "firebase/auth";

import { auth } from "./firebaseConfig";

//Create user with email and password
export const authCreate = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// Login user
export const authLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
};

// Logout user
export const authLogout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out Successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

// Reset password
export const authPasswordReset = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => console.log("Email Sent"))
    .catch((error) => console.log(error));
};

/*****
 * *****
 * TO SEND AUTH LINK TO USER EMAIL
 * *******
 * *********
 * */
// Send a link to the users email upon registering
// export const authSendSignInLink = ()=>{

//   sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
//     // The link was successfully sent. Inform the user.
//     // Save the email locally so you don't need to ask the user for it again
//     // if they open the link on the same device.
//     window.localStorage.setItem("emailForSignIn", email);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });
// }
  
// {// Confirm the link is a sign-in with email link.
// if (isSignInWithEmailLink(auth, window.location.href)) {
//   // Additional state parameters can also be passed via URL.
//   // This can be used to continue the user's intended action before triggering
//   // the sign-in operation.
//   // Get the email if available. This should be available if the user completes
//   // the flow on the same device where they started it.
//   let email = window.localStorage.getItem("emailForSignIn");
//   if (!email) {
//     // User opened the link on a different device. To prevent session fixation
//     // attacks, ask the user to provide the associated email again. For example:
//     email = window.prompt("Please provide your email for confirmation");
//   }
//   // The client SDK will parse the code from the link for you.
//   signInWithEmailLink(auth, email, window.location.href)
//     .then((result) => {
//       // Clear email from storage.
//       window.localStorage.removeItem("emailForSignIn");
//       // You can access the new user via result.user
//       // Additional user info profile not available via:
//       // result.additionalUserInfo.profile == null
//       // You can check if the user is new or existing:
//       // result.additionalUserInfo.isNewUser
//     })
//     .catch((error) => {
//       // Some error occurred, you can inspect the code: error.code
//       // Common errors could be invalid email and invalid or expired OTPs.
//     });
// }}
