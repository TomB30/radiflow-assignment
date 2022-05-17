import './styles/main.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { TodoPage } from './pages/TodosPage';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Switch>
            <Route path='/todo' component={TodoPage}></Route>
            <Route path='/about' component={AboutPage}></Route>
            <Route exact path='/' component={HomePage}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
