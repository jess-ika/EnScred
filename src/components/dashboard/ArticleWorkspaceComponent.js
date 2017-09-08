import React from 'react';
import styled from 'styled-components';
import { boxContainer, box, workspaceButton } from '../utils/style-utils';
import { Grid } from 'grid-styled'
import Title from './TitleComponent'

const Container = styled.div` 
${ boxContainer }
`;

const Box = styled.div` 
${ box }
`;

const BoxTitle = styled.div` 
font-size: 1.3em;
`;

const Btn = styled.div` 
  ${ workspaceButton }
`;

const InputTitle = styled.textarea` 
  width: 100%;
  height: 20vh;
  margin-top: 10px;
`;

class ArticleWorkspaceComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWorkspace: 'Titre',
      title: '',
      descriptionTop: '',
      descriptionBottom: '',
      image: '',
    }
  }

  setWorkSpace(inputName) {
    this.setState({ currentWorkspace: inputName });
  }
  
  handleChange(stateField, event) {
    this.setState({ [stateField]: event.target.value })
  }

  displayWorkSpace = () => {
    var field;
    var fieldValue;

    switch (this.state.currentWorkspace) {
      case 'Titre':
        field = "title";
        fieldValue = this.state.title;
      break;
      case 'Description Haut':
        field = "descriptionTop";
        fieldValue = this.state.descriptionTop;
      break;
      case 'Description Bas':
        field = "descriptionBottom";
        fieldValue = this.state.descriptionBottom;
      break;
      case 'Image':
        field = "image";
        fieldValue = this.state.image;
      break;
      default:
        field = "title";
    }

    return (
      <div>
          <BoxTitle>{ this.state.currentWorkspace }</BoxTitle>
          <div>
              <InputTitle
                type="text"
                name={field}
                value={fieldValue}
                onChange={this.handleChange.bind(this, field)}
              />
          </div>
      </div>
    ) 
  }

  render() {
    return (
      <Container>
          <Title title='Workspace Article'/>
          <Box>
              <BoxTitle>Composez votre article</BoxTitle>
              <div>
                <Grid width={1/5} pt={'10px'} pr={'10px'}><Btn onClick={ () => this.setWorkSpace('Titre') }>Titre</Btn></Grid>
                <Grid width={1/5} pt={'10px'} pr={'10px'}><Btn onClick={ () => this.setWorkSpace('Description Haut') }>Description Haut</Btn></Grid>
                <Grid width={1/5} pt={'10px'} pr={'10px'}><Btn onClick={ () => this.setWorkSpace('Description Bas') }>Description Bas</Btn></Grid>
                <Grid width={1/5} pt={'10px'} pr={'10px'}><Btn onClick={ () => this.setWorkSpace('Image') }>Image</Btn></Grid>
                <Grid width={1/5} pt={'10px'} pr={'10px'}><Btn onClick={ () => this.setWorkSpace('Image') }>Image</Btn></Grid>
              </div>
          </Box>
          <Box>{this.displayWorkSpace()}</Box>
      </Container>
    );
  }
}

// ArticleWorkspaceComponent.propTypes = {};
// ArticleWorkspaceComponent.defaultProps = {};

export default ArticleWorkspaceComponent;
