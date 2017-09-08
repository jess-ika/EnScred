require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SideBar from 'components/dashboard/SidebarComponent';
import Article from 'components/dashboard/ArticleComponent'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Article />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
