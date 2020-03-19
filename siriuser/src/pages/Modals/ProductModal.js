import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Container } from '../../styles/Container';

import { ModalContainer, InternContainer} from './styles'

class ProductModal extends Component {
    state = {
        projects: [],
    }

    closeModal = () => {
        const { dispatch } = this.props;
    
        dispatch({
          type: 'MODAL_CLOSE',
        })
      };

  render() {

   const { modalClose } = this.props 

    return (
        <>
            {
                modalClose ? (
                    <Container>
                       <ModalContainer>
                           <InternContainer>
                               <h1>teste</h1>
                               <button
                                    onClick={() => this.closeModal()}
                                >
                                       fechar
                                    </button>
                           </InternContainer>
                       </ModalContainer>
                    </Container>
                ) : (
                    null
                )
            }
        </>
    );
  }
}

const mapStateToProps = state => ({
    modalClose: state.modal
});

export default connect(mapStateToProps)(ProductModal);
