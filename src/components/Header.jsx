import { useTheme } from "./useTheme";

import styles from "../styles/estilos.module.css";

const Header =()=>{

    const { theme, toggleTheme } = useTheme();

    return (
        <header>
            <h2> Mi App = Tema: {theme}</h2>
            <button onClick={toggleTheme}>Cambiar Tema {theme === 'light' ? 'dark' : 'light'}</button>
        </header>
    )
}
export default Header;