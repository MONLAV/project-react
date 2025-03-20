import React from "react";
import Header from "./components/Header/Header";
import HelloSection from "./components/HelloSection/HelloSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Message from "./components/Message/Message.jsx";


const App = () => {
  return <>
    <Header />
    <Message autor='Alex' text='Продам праску' isOnline />
    <Message autor='Igor' text='Продам автомобіль' isOnline={false}/>
    <Message autor='Olena' text='Куплю шафу' isOnline />
    <Message />
    
    <HelloSection />
    <Footer />
  </>
};
 
export default App;
