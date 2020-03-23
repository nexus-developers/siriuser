import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

import { Container } from '../../styles/Container';

import { ModalContainer, InternContainer, DetailsProduct, FirstInformation, TablesInformation } from './styles'

import { AiOutlineClose } from 'react-icons/ai'

import Logo from '../../styles/GlobalAssets/logo.png'

import Painel from './assets/painel.png'

import api from '../../services/api';


 class ProductModal extends Component {
    state = {
        products: [],
        module: [],
        infos: []
    }

    async componentDidMount(){
        const { type } = this.props;
        const response = await api.get(type);
        
        const data = response.data.map(modolo => ({
            ...modolo
        }));
        
        this.setState({module: data});
    }

    closeModal = () => {
        const { dispatch } = this.props;
    
        dispatch({
          type: 'MODAL_CLOSE',
        })
      };

  render() {

    const { module } = this.state;
    const { modalClose, type, title, img } = this.props

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
                                <img src={img} alt='product' width='190' height='210'/>
                                <div>
                                    <h5>{title}</h5>
                                </div>
                            </FirstInformation>
                            <hr/>
                            <TablesInformation>
                                {
                                    module.map(item =>
                                        <table className='table table-sm'>
                                            <thead class="" key={item.id}>
                                                <tr>
                                                    <th scope="col">{item.title}</th>
                                                    <th scope='col'>RESULTADOS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                item.infos.map(({id, infoT, value}) =>
                                                    <tr key={id}>
                                                        <th>{infoT}</th>
                                                        <th>{value}</th>
                                                    </tr>   
                                                    )
                                                }
                                            </tbody>
                                        </table>    
                                    )
                                }
                                
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
    modalClose: state.modal[0],
    type: state.modal[1].type,
    title: state.modal[1].title,
    img: state.modal[1].img
});

export default connect(mapStateToProps)(ProductModal);
