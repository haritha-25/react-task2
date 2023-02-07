import { useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { ItemsList } from "./itemList";
import { Navigation } from "./Navigation";

function App() {
 const [cartCount, setCartCount]=useState(0);

  return (
    <div className="App">
      <Navigation cartCount={cartCount} />
      <Header/>
      <ItemsList cartCount={cartCount} setCartCount={setCartCount} />
      <Footer/>
    </div>
  );
}

export default App;


