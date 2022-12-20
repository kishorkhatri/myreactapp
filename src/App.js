import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar 
    SiteName="MyReactApp" 
    HomeText="Home" 
    BlogText="Blog" 
    AboutusText="About Us"
    ContactusText="Contact Us"
    PrivacyPolicyText="Privacy Policy"
    DisclaimerText="Disclaimer"
    />
    </>
  );
}

export default App;
