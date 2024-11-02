import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ProtectedRoute = ({ children }) => {
    const {isLoggedIn} = useSelector((state) => state.auth);


    if (isLoggedIn) {
        // User is logged in, allow access to protected routes
        console.log("ProtectedRoute",isLoggedIn)
        return children;
    }

    // User is not logged in, redirect to login page
    return <Navigate to="/login"/>;
};



export default ProtectedRoute;