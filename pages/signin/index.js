import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase/firebaseConfig";
import { useRouter } from "next/router";
import UserContext from "../../context/UserContext";

function Signin() {
  const router = useRouter();
  const contUser = useContext(UserContext);

  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        localStorage.setItem("users", res.user.uid);
        router.push("/");
        contUser.setUser(res.user.uid);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="singn-btn-section">
      <button onClick={handleSignin}>
        {" "}
        <FcGoogle size={30} />
        Sign In With Google
      </button>
    </div>
  );
}

export default Signin;
