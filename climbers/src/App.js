import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import {light} from './styles/Themes'

import Navigation from './components/Navigation';
import Home from './components/sections/Home'
import Profile from './components/sections/Profile';
import Leaderboard from './components/sections/Leaderboard';
import Store from './components/sections/Store';
import Stake from './components/sections/Stake';
import Litepaper from './components/sections/Litepaper';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        {/* <Profile />
        <Leaderboard />
        <Store />
        <Stake />
        <Litepaper />
        <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
