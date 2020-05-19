import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import Logo from '../../styles/GlobalAssets/logo.png'

import { Container } from '../../styles/Container'


import {
  ButtonAlter,
  ContainerIndexON,
  ContainerOn,
  ContainerProject,
  Form,
  ImageBack,
  ImageLogo,
  InternContainer,
  Title,
} from './styles';

class pages extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <Container>

        <InternContainer>
          <Form onSubmit={this.handleSubmit} className="relative center">
            <ImageLogo src={Logo} alt="logo" />
            <ContainerOn>
              <ContainerIndexON>
                <Title className="large">Orçamento concluído com sucesso!</Title>
                <h4>Obrigado por escolher a Sirius</h4>
                <ContainerProject>
                  <h4 className="bold">Projeto: 54601</h4>
                  <Link to='/projects/personalizado' style={{ textDecoration: 'none' }}>
                    <ButtonAlter className='shadow'>
                      <span>Ir para Orçamentos</span>
                    </ButtonAlter>
                  </Link>
                </ContainerProject>
              </ContainerIndexON>
              <ImageBack src={require('./../../assets/mobile_user_svg.svg')} />
            </ContainerOn>

          </Form>
        </InternContainer>

      </Container>
    );
  }
}

export default connect()(pages);