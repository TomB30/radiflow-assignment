import { NavLink} from "react-router-dom/cjs/react-router-dom.min"
import logo from '../assets/logo.svg'

export const AppHeader = () => {
    return (
        <header className="app-header">
        <NavLink exact to='/' className="logo-wrapper"><img src={logo} alt="" /></NavLink>    
        <nav>
        <NavLink to='/about'>About</NavLink>    
        <NavLink to='/todo'>Todos</NavLink>    
        </nav>
        </header>
    )
}