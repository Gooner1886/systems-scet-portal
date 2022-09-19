import axios from 'axios';
import { useContext, useEffect} from 'react';
import Logged from "./context"

const API_KEY="AIzaSyAhgUECEcnMz7li38-C_nkJcltw536Kcx4"; 
//HIDE LATER IN ENV


async function VerifyCaptcha(token){
    let status=false;
    
    await axios.post("http://localhost:3001/post",{token}).then(()=>{
        status=true; 
    }).catch(()=>{
        status=false;
    })

    return status;
}


function CheckSignIn(callback)
{
    let token=localStorage.getItem('token');
    let url="https://identitytoolkit.googleapis.com/v1/accounts:lookup?key="+API_KEY;
    const user=useContext(Logged);

    useEffect(()=>{
    axios.post(url,{idToken:token})                                 //GET USERNAME CORRESPONDING TO TOKEN
    .then((response)=>{console.log(response.data);user.setter(true);callback(response.data.users[0].localId)})
    .catch((err)=>{
        user.setter(false);
        console.log("Not Logged In")}
    )},[url]);
}


function LoginInterface(props){
    let email=props.email;
    let password=props.password;

    const authData = {
            email: email,
            password: password,
            returnSecureToken: true
    }

    let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+API_KEY;

    axios.post(url,authData)                                                    //PERFORM AUTH REQUEST
    .then((response)=>{
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);                 //EXPIRES IN 1 HR
        localStorage.setItem('token', response.data.idToken);                   
        localStorage.setItem('expirationDate', expirationDate);
        window.location.reload();
        console.log("LOGGED IN");
    })
    .catch((err)=>{
        //console.log(err.response.data.error.message);
        let st=err.response.data.error.message;
        st=st.replace("_"," ");
        alert(st);
    });
}


function ResetPass(email,callback){
    let url="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key="+API_KEY

    const resetData={
        requestType:"PASSWORD_RESET",
        email:email
    }

    axios.post(url,resetData)
    .then((response)=>{
        alert("Reset Email sent");
        callback(true);
    })
    .catch((err)=>{
        alert("Invalid Email");
    })
}


export {LoginInterface,CheckSignIn,ResetPass,VerifyCaptcha};