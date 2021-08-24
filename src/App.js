import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Frontpage from './components/FrontPage';
import Formpage from './components/FormPage';
import Events from './components/Events';

export default function App(){

  return(
    <BrowserRouter>
        <div>
          
          <Switch>
            <Route exact path='/' component={ Frontpage }/>
            <Route path='/form/' component={ Formpage }/>
            <Route path='/events/' component={ Events }/>
            <Route component={ Frontpage }/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}