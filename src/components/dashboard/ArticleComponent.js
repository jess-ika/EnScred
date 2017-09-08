import React from 'react';
import Title from './TitleComponent'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shadow, boxContainer, box } from '../utils/style-utils';

const articleslist = [
  {title : 'Assasin Panda Girl'},
  {title : 'Kendrick Lamar le Nouvel Album'},
  {title : 'Comics Bad Boys'}
];

const Container = styled.div` 
  ${ boxContainer }
`;

const Box = styled.div` 
  ${ box }
`;

const BoxTitle = styled.div` 
  font-size: 1.3em;
`;

const List = styled.div` 
  margin-top: 10px;
  border: 1px solid #ECF0F1;
`;

const Row = styled.div` 
  border-bottom: 1px solid #ECF0F1;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div` 
  border-left: 1px solid #ECF0F1;
  padding: 10px;
`;

const ColumnStart = Column.extend` 
  flex: 1;
`;

const ColumnMiddle = Column.extend` 
  flex: 5;
`;

const ColumnEnd = Column.extend` 
  flex: 2;
`;

class ArticleComponent extends React.Component {

  displayArticles() {
    var list = articleslist.map(function(val, index){
      return (
        <Row key={val.title}>
          <ColumnStart>#{ index }</ColumnStart>
          <ColumnMiddle>{ val.title }</ColumnMiddle>
          <ColumnEnd>{ index }</ColumnEnd>
        </Row>
      )
    })
    return list;
  }

  render() {
    return (
      <Container>
        <Title title='Bienvenu Maxime'/>
        <Box>
          <BoxTitle>Gestion des Articles</BoxTitle>
          <Link to="/add-article">Ajouter un article</Link>
        </Box>
        <Box>
          <BoxTitle> List d'Articles</BoxTitle>
          <List>
            {this.displayArticles()}
          </List>
        </Box>
      </Container>
    );
  }
}

ArticleComponent.displayName = 'DashboardArticleComponent';

// ArticleComponent.propTypes = {};
// ArticleComponent.defaultProps = {};

export default ArticleComponent;
