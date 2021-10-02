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
            <Route path='/face' component={() => window.location = 'https://www.facebook.com/groups/kapry'}/>
            <Route path='/twitter' component={() => window.location = 'https://twitter.com/KAP__ry'}/>
            <Route path='/instagram' component={() => window.location = 'https://www.facebook.com/groups/kapry'}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}