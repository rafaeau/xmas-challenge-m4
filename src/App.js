import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from './components/MyNavbar';
import MySearch from './components/MySearch';
import InspirationSection from './components/InspirationSection'
import DiscoverySection from './components/DiscoverySection'
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
    <MyNavbar/>
    {/* <MySearch/> */}
    <InspirationSection/>
    <DiscoverySection/>
    <MyFooter/>
    </>
  )
}

export default App;