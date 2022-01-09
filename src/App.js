import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from './components/MyNavbar';
import MySearch from './components/MySearch';
import InspirationSection from './components/InspirationSection'
import DiscoverySection from './components/DiscoverySection'

function App() {
  return (
    <>
    <MyNavbar/>
    {/* <MySearch/> */}
    <InspirationSection/>
    <DiscoverySection/>
    </>
  )
}

export default App;