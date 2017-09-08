import React from 'react';
import styled from 'styled-components';
import { shadow } from '../utils/style-utils';

const Container = styled.div`
  width: 100%;
  height: 15  vh;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFF;
  ${ shadow }
`;

const Title = styled.span`
  font-size: 2.2em;
`;

const SubTitle = styled.span`
font-size: 1.5em;
`;

const PageTitle = styled.div`
  padding: 10px 10px 10px 0;
  font-size: 1.8em;
  color: #044F67;
`;

class TitleComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <div>
          <Title>En scred </Title>
          <SubTitle>- gestion du blog </SubTitle>
        </div>
        <PageTitle>
          {this.props.title}
        </PageTitle>
      </Container>
    );
  }
}

TitleComponent.displayName = 'DashboardTitleComponent';

// TitleComponent.propTypes = {};
// TitleComponent.defaultProps = {};

export default TitleComponent;
