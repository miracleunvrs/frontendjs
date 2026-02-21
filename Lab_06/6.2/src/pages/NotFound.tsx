import type { JSX } from "react";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
    return(
        <div>
            <h1>404 - Page not found</h1>
            <p>Page Does not exist</p>
            <Link to = "/">Back home</Link>
        </div>
    );
};
export default NotFound;