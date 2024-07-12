import { auth } from "../../firebaseConfring"; // Corrected typo
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

/*Normal funcition */
 
/*signin normol function */
const Signup = (newuser) => {
    return {
        type: 'SIGNUPSUC',
        payload: newuser
    }
}

const signupErr = (err) => {
    return {
        type: 'SIGNUPERR',
        payload: err
    }
}

/* login normal function */

const loginData = (luser) => {
    return {
        type: 'LOGINSUC',
        payload: luser
    }
}

const loginErr = (luserrr) => {
    return {
        type: 'LOGINERR', 
        payload: luserrr
    }
}

/*SignOut normal function */

const signout = () =>{
    return {
        type: 'SIGNOUT',
        
    }
}


/* Redux Thunk Foucation */

export const SigninAsync = (inputU) => {
    console.log("Input", inputU);

    return dispatch => {
        createUserWithEmailAndPassword(auth, inputU.email, inputU.password).then((res) => {
            console.log(res);
            dispatch(Signup(res));
        }).catch((err) => {
            console.log("err", err);
            dispatch(signupErr(err));
        });
    }
}

export const loginAsync = (inputL) => { 

    return dispatch => {
        signInWithEmailAndPassword(auth, inputL.email, inputL.password).then((res) => {
            dispatch(loginData(res));
        }).catch((err) => {
            console.log("err", err);
            dispatch(loginErr(err)); 
        });
    }
}

export const googleAsynic = () => {
    return dispatch => {
        signInWithPopup(auth, provider).then((res) => {
            console.log("Google", res);
            dispatch(loginData(res));
        }).catch((Gerr) => {
            console.log("Gerr", Gerr);
            dispatch(loginErr(Gerr));
        });
    }
}


export const userLogoutAsynic = ()=>{

    return dispatch =>{
        signOut(auth).then((res)=>{
            console.log("Logout successfuyll", res);
            dispatch(signout())
        }).catch((err)=>{
            console.log("Logout error", err);
            // dispatch(signouterr())
        })
    }
}