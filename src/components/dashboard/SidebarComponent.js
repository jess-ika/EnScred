'use strict';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shadow } from '../utils/style-utils';


const SideBarList = styled.div`
  width: 100%;
  height: 100%;
  background-color: #264348;
  color: #FFF;
  padding: 15px;
  box-sizing: border-box;
  ${ shadow }
`;

const LinkStyle = styled(Link)`
  color: #FFF;
  text-decoration: none;
`;

class SidebarComponent extends React.Component {
  render() {
    return (
      <SideBarList>
        <LinkStyle to="/">Mes articles</LinkStyle>
      </SideBarList>
    );
  }
}

// SidebarComponent.propTypes = {};
// SidebarComponent.defaultProps = {};

export default SidebarComponent;
