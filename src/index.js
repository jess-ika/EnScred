import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import App from './components/Main';
import ArticleWorkspace from './components/dashboard/ArticleWorkspaceComponent';
import SideBar from './components/dashboard/SidebarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div className="dashboard">
        <div className="sidebar"> <SideBar /> </div>
        <div className="menu">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/add-article" component={ArticleWorkspace} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

render(<Root/>, document.querySelector('#app'));
