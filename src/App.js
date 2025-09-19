import Home from "./Home";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ajouter from "./Ajouter";
import BlogDetails from "./BlogDetails";
import Notfound from "./Notfound";

function App() {
  // les variables dynamiques 

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <div className="contenue">
          <Switch>
            <Route exact path={'/'}>
              <Home> </Home>
            </Route>
            <Route path={'/Ajouter'}>
              <Ajouter></Ajouter>

            </Route>
            <Route path={'/blogs/:id'}>
              <BlogDetails></BlogDetails>

            </Route>
            <Route path={'*'}>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </div>
      </div>

    </BrowserRouter >
  );
}

export default App;
