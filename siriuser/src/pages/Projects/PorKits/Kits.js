import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

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
    type: []
  }

  async componentDidMount(){
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormat: formatPrice(product.price)
    }));

    this.setState({products: data});
  }

  openModal = product => {
    // this.setState({modal: true});
    const { dispatch } = this.props;

    dispatch({
      type: 'MODAL_KITS',
      product
    })

    const data = product.type;

    this.setState({type: data})
  };

  render() {
    const { products, type } = this.state;
    const { modalOpen } = this.props;

    return (
      <Container>
        <CardsContainer className='row'>
          {
            products.map(product =>
                <Card className='shadow col-md-3' key={product.id}>
                  <ProductPhoto>
                    <Link onClick={() => this.openModal(product)}>
                    <img src={product.img} alt='' width='190' height='210'/>
                    </Link>
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
                    modalOpen && type ? (
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
  modalOpen: state.modal[0],
});

export default connect(mapStateToProps)(Kits);