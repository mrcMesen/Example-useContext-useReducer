import React from 'react';
/**Its best to separate the routes into another file,
 * but in this example we work the main app and the routes together */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/**Context Provider */
import { RegisterProvider } from './context/RegisterContext';

/**Pages */
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';

/**Layout */
import { Layout } from './Layout';

function App() {
  return (
    <RegisterProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </RegisterProvider>
  );
}

export default App;
