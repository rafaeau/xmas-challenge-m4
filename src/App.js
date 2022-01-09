import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from './components/MyNavbar';
import MySearch from './components/MySearch';
import InspirationSection from './components/InspirationSection'

function App() {
  return (
    <>
    <MyNavbar/>
    {/* <MySearch/> */}
    <InspirationSection/>
    </>
  )
}

export default App;