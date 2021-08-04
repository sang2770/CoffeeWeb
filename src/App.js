import "./CSS_WEB/Grid.css";
import "./App.css";
import "./CSS_WEB/Response.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/index";
import Menu from "./pages/Menu/Menu";
import Footer from "./Component/Footer/Footer";
import Service from "./pages/Service/Service";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ScrollToTop from "./ScrollToTop";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Menu" component={Menu}></Route>
          <Route exact path="/Service" component={Service}></Route>
          <Route exact path="/Blog" component={Blog}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
          <Route path="/SingleProduct/:id" component={SingleProduct}></Route>
        </Switch>
        <ScrollToTop />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
