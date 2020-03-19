import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

import { Container } from '../../styles/Container';

import { ModalContainer, InternContainer, DetailsProduct, FirstInformation, TablesInformation } from './styles'

import { AiOutlineClose } from 'react-icons/ai'

import Logo from '../../styles/GlobalAssets/logo.png'

import Painel from './assets/painel.png'

 class ProductModal extends Component {
    state = {
        products: [],

    }

    closeModal = () => {
        const { dispatch } = this.props;
    
        dispatch({
          type: 'MODAL_CLOSE',
        })
      };

  render() {

    // const { products } = this.state;
    const { modalClose } = this.props 


    return (
        <>
            {
                modalClose ? (
                    <Container>
                       <ModalContainer>
                           <InternContainer>
                           <header>
                                <img src={Logo} alt='Sirius Plataforma'/>

                                <Link to='/projects/kits' refresh='true'>
                                    <button
                                        onClick={() => this.closeModal()}
                                    >
                                        <AiOutlineClose size={25}/>
                                    </button>
                                </Link>
                            </header>
                            <hr/>
                           <DetailsProduct>
                            <FirstInformation>
                                <img src={Painel} alt='product' width='190' height='210'/>
                                <div>
                                    <h5>DATASHEET MÓDULO 375W MONO 72 CELL</h5>
                                </div>
                            </FirstInformation>
                            <hr/>
                            <TablesInformation>
                             
                                <table className='table table-sm'>
                                    <thead class="">
                                        <tr>
                                            <th scope="col">DADOS ELÉTRICOS (STC)</th>
                                            <th scope='col'>RESULTADOS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Potência Nominal Máxima. Pmax (W)</th>
                                            <th>375</th>
                                        </tr>
                                        <tr>
                                            <th>Tolerância de Potência. Pmax (%)</th>
                                            <th> 0~+3 </th>
                                        </tr>
                                        <tr>
                                            <th>Tensão Operacional Ideal Vmp (V)</th>
                                            <th>39.6</th>
                                        </tr>
                                        <tr>
                                            <th>Corrente Operacional Ideal Imp (A)</th>
                                            <th>9.47</th>
                                        </tr>
                                        <tr>
                                            <th>Tensão de Circuito Aberto Voc (V)</th>
                                            <th>48.3</th>
                                        </tr>
                                        <tr>
                                            <th>Corrente de Curto-circuito Isc (A)</th>
                                            <th>9.97</th>
                                        </tr>
                                        <tr>
                                            <th>Eﬁciência do Módulo</th>
                                            <th>18.71</th>
                                        </tr>
                                    </tbody>

                                    <thead class="">
                                        <tr>
                                            <th scope="col">DADOS ELÉTRICOS (NMOT) </th>
                                            <th scope='col'>RESULTADOS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Potência Nominal Máxima.(Wp)</th>
                                            <th>377.3</th>
                                        </tr>
                                        <tr>
                                            <th>Tensão Operacional Ideal Vmp (V)</th>
                                            <th>39.6</th>
                                        </tr>
                                        <tr>
                                            <th>Corrente Operacional Ideal Imp (A)</th>
                                            <th>9.47</th>
                                        </tr>
                                        <tr>
                                            <th>Tensão de Circuito Aberto Voc (V)</th>
                                            <th>48.3</th>
                                        </tr>
                                        <tr>
                                            <th>Corrente de Curto-circuito Isc (A)</th>
                                            <th>9.97</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </TablesInformation>
                           </DetailsProduct>
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
