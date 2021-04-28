import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Auth } from '../views/Auth/Auth';
import Home from '../views/Home/Home';
import PrivateRoute from './PrivateRoute';
import Error from '../views/Error/Error';
import ItemDetailHero from '../views/ItemDetailHero/ItemDetailHero';
import Layout from '../views/Layout/Layout';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Switch>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          <Route path="/auth" component={Auth} />
          <Layout>
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/details" component={ItemDetailHero} />
              <Route exact path="*" component={Error} />
            </Switch>
          </Layout>
        </Switch>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
