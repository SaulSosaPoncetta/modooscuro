import Header from "./components/Header"
import './App.css'
import ThemeProvider from './components/ThemeProvider'

function App() {
  
  return (
    <ThemeProvider>
        <Header/>
          <main>
            <p>Contenido de la aplicacion</p>
          </main>
    </ThemeProvider>

  );
}

export default App
