import './App.css';
import React,{useState, useEffect} from 'react';
import ProfileRegistration from './ProfileRegistration/ProfileRegistration';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

function App() {

  const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});

  useEffect(() => {
    console.log('user is ',user);
  }, [user]);

  return (
    <div className="App">
      
      <ChakraProvider>
      <Router>
        <Routes>
          {/* <Route exact path="/*" component={ProfileRegistration} /> */}
          <Route path="/" element={<ProfileRegistration setUser={setUser} />} />
          <Route path="/profile" element={<ProfileInfo user={user}/>} />
        </Routes>
      </Router>      
      </ChakraProvider>

      
     
    </div>
  );
}

export default App;
