import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Results from './components/Results/Results'
function App() {
  return (
    <BrowserRouter>
      <Route path="/MoviesApp/">
        <NavBar />
      </Route>
      <Switch>
        <Route exact path="/MoviesApp/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
