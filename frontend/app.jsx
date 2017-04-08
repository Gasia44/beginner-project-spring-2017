import React from 'react';
import { render } from 'react-dom';
import { Link, Route, BrowserRouter as R} from 'react-router-dom';

import Layout from './Layout';

const HomePage= () =>(
  <div>
    Home page
  </div>
);


const App = () =>{
  return(
    <R>
    <div>
      <Route exact path={'/'} component={HomePage}/>
      <Route path={'/Piano'} component={Layout}/>

      <p><Link to={'/Piano'}> Piano </Link></p>
      <p><Link to={'/Drum'}> Drum </Link></p>
      <p><Link to={'/Guitar'}> Guitar </Link></p>

    </div>
  </R>
);
};

render(<App/>, document.getElementById('container'));
