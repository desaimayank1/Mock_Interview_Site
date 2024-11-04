import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LoginRoute = ({ children }) => {
    const {isLoggedIn} = useSelector((state) => state.auth);


    // console.log(user)
    if (!isLoggedIn) {
        // User is not logged in, allow access to login page
        console.log("LoginRoute",isLoggedIn);    
        return children;
    }

    // User is logged in, redirect to home or another protected route
    return <Navigate to="/" />;
};

export default LoginRoute;