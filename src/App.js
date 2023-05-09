import {Box} from '@mui/material';

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:"76px"}}>
        <Home/>
      </Box>
      <Footer/>
    </DataProvider>
  );
}

export default App;