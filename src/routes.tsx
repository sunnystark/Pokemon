import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainStyle } from './styles/Styles';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <MainStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:pokemonName" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
