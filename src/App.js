import { Container } from "./componnts/styles/Container.style";
import Header from "./componnts/Header";
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./componnts/styles/Global";
import content from "./Content";
import Card from "./componnts/Card";
import Footer from "./componnts/Footer";
const theme = {
  colors: {
    headers: '#ebfbff',
    body:'#fff',
    footer:'#003333',
  },

  mobile: '768px'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header />
   <Container>
    {content.map((item ,index)=>(
     <Card
     key={index}
      item={item}
     />
    ))}
   </Container>
   <Footer />
   </>
   </ThemeProvider>
  );
}

export default App;
