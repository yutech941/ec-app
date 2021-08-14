export const SING_IN ="SIGN_IN";
export const signInAction = (userState) => {
    return {
        type:"SIGN_IN",
        payload:{
            isSignedIn:true,
            uid:userState.uid,
            username:userState.username
        }
    }
};

export  const SIGN_OUT = "SIGN_OUT"
export const sginOutAction = () => {
    return {
        type:"SIGN_OUT",
        payload:{
            isSignedIn:false,
            uid:"",
            username:""
        }
    }
}