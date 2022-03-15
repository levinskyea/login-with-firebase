import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

    const history = useNavigate();

    const gawas = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            history('/')
        }).catch((error) => {
        // An error happened.
            console.log("Sign out unsuccessful.")
        });
    }

    return (
    <>
        <div className="center">
            <h4>Welcome to your admin dashboard.</h4>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => gawas(auth)}>Logout</button>
        </div>
        
    </>
    );
}
