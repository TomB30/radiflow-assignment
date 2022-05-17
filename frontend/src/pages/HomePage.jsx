import { NavLink } from "react-router-dom"

export const HomePage = () => {

    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <h3>Welcome to our task management app</h3>
            <NavLink to="/todo"><button className="btn primary"><h1>Let's start</h1></button></NavLink>
        </div>
    )
}