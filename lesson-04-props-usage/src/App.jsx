import { useState } from "react";
import "./App.css";
import Product from './Product'
import Container from "./Container";

function App() {
  return (
    <div>
      {/* <Product productName="shoe" price={3200} />
      <hr />
      <Product productName="skirt" price={650} /> */}
      
      <Container>  {/*now this is parent element */}
        <Product procuctName="pants" price="700"/> {/*and this is children element */}
        </Container>
    </div>
  );
}

export default App;
