import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound'
import Layout from './component/Layout';

const App =()=> (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>;
        <Route exact path='/blog' component={Blog}/>;
        <Route exact path='/blogs' component={Blogs}/>;
        <Route exact path='/profile' component={Profile}/>;
        <Route component={NotFound}/>;
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;