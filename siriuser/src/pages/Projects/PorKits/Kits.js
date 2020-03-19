import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Container } from '../../../styles/Container';

import { MdCompareArrows } from 'react-icons/md'

import { IoMdTrash } from 'react-icons/io'

import Modal from '../../Modals/ProductModal'

import { 
  CardsContainer, 
  Card, 
  ProductPhoto, 
  ProductDescription, 
  ProductActions, 
  Quantity 
} from './styles'

import api from '../../../services/api';

import { 
  formatPrice 
} from '../../../util/formt';

class Kits extends Component {

  state = {
    products: [],
  }

  async componentDidMount(){
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormat: formatPrice(product.price)
    }));

    this.setState({products: data});
  }

  openModal = () => {
    // this.setState({modal: true});
    const { dispatch } = this.props;

    dispatch({
      type: 'MODAL',
      // modal,
    })
  };

  render() {
    const { products } = this.state;
    const { modalOpen } = this.props;

    return (
      <Container>
        <CardsContainer className='row'>
          {
            products.map(product =>
              <Card className='shadow col-md-3' key={product.id}>
                <button
                onClick={() => this.openModal()}>
                  abrir
                </button>
                <ProductPhoto>
                  <img src={product.img} alt='' width='190' height='210'/>
                </ProductPhoto>
                <hr/>
                <ProductDescription>
                  <h5>
                  {product.title}
                  </h5>
                  <p>Quantidade:</p>
                  <ProductActions>
                    <Quantity>
                      <input className='form-control' type='number'/>
                    </Quantity>
                    <div>
                      <button className='btn btn-outline-success'>
                        <MdCompareArrows size={25} />
                      </button>
                      <button className='btn btn-outline-danger'>
                        <IoMdTrash size={25}/>
                      </button>
                    </div>
                  </ProductActions>
                </ProductDescription>
                {
                  modalOpen ? (
                    <>
                      <Modal/>
                    </>
                    
                  ) : (
                    null
                  )
                }
              </Card>
            )
          }
        </CardsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.modal
});

export default connect(mapStateToProps)(Kits);