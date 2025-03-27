import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content";
import Card from "./components/card";
import "./App.css";

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
    <Content />
    <Card title="Zunoon" desc="I am web developer" style={{ textAlign: "center" }} />

      <Card title="Azmeer" desc="I am Frontend Developer" /> 
      <Card title="Ali Athar" desc="I am PHP Developer" /> 
      <Card title="Fariz" desc="I am Aptech rookie" /> 
      <Card title="Ahmed" desc="I am Salesman" /> 
      <Card title="Saad" desc="I am Student" /> 
    </div>
    <Footer />
  </>
  );
};

export default App;
