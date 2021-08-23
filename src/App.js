import {BrowserRouter, Switch, Route} from 'react-router-dom';
import frontpage from './components/FrontPage';
import formpage from './components/FormPage';

export default function App(){

  return(
    <BrowserRouter>
        <div>
          
          <Switch>
            <Route exact path='/' component={ frontpage }/>
            <Route path='/form/' component={ formpage }/>
            <Route component={ frontpage }/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}