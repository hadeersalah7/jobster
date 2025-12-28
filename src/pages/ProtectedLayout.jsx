import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedLayout = ({ children }) => {
    const { user } = useSelector((state) => state.user);

    if (!user) return <Navigate to="/landing" />;
    return( <div>{ children }</div>)
};

export default ProtectedLayout;
