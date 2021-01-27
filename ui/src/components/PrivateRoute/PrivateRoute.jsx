import {Redirect, Route, useLocation} from "react-router-dom";
import useUser from "../hooks/useUser"
import _ from "lodash";

export default ({children, roles, ...props}) => {

    const user = useUser();


    const authorized = roles ? !!_.intersection(user?.roles, roles).length : !!user;

    const location = useLocation();

    return (
        <Route {...props}>
            {
                authorized ? children : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: location
                        }
                    }}
                    />
                )
            }
        </Route>
    )
}