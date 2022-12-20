import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

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
    <Textform/>
    </>
  );
}

export default App;
