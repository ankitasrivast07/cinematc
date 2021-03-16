
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from "./Components/BottomNav";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container} from '@material-ui/core';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
   <Container>
     <Switch>
       <Route path="/" component={Trending} exact/>
       <Route path="/movies" component={Movies} />
       <Route path="/tvSeries" component={TvSeries} />
       <Route path="/search" component={Search} />
     </Switch>
   </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
