import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#ED4040',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login/>} /> */}
            {/* <Route path="/register" element={<Register/>} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
