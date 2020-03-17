import React, { Component } from 'react';

import { Container } from '../../../styles/Container';

import { MdCompareArrows } from 'react-icons/md'

import { IoMdTrash } from 'react-icons/io'

import { CardsContainer, Card, ProductPhoto, ProductDescription, ProductActions, Quantity } from './styles'

import Painel from './Assets/painel.png'
import api from '../../../services/api';
import { formatPrice } from '../../../util/formt';

export default class Kits extends Component {

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

  render() {
    const { products } = this.state;

    return (
      <Container>
        <CardsContainer>

          {
            products.map(product =>
              <Card className='shadow' key={product.id}>
                <ProductPhoto>
                  <img src={Painel} alt='Painel' width='200' height='230'/>
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
              </Card>
            )
          }
          
          {/* <Card className='shadow'>
            <ProductPhoto>
              <img src={Painel} alt='Painel' width='200' height='230'/>
            </ProductPhoto>
            <hr/>
            <ProductDescription>
              <h5>
              Painel Solar Fotovoltaico 335W - Upsolar UP-M335P
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
          </Card>


          <Card className='shadow'>
            <ProductPhoto>
              <img src={Painel} alt='Painel' width='200' height='230'/>
            </ProductPhoto>
            <hr/>
            <ProductDescription>
              <h5>
              Painel Solar Fotovoltaico 335W - Upsolar UP-M335P
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
          </Card>

          <Card className='shadow'>
            <ProductPhoto>
              <img src={Painel} alt='Painel' width='200' height='230'/>
            </ProductPhoto>
            <hr/>
            <ProductDescription>
              <h5>
              Painel Solar Fotovoltaico 335W - Upsolar UP-M335P
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
          </Card> */}
        </CardsContainer>
      </Container>
    );
  }
}
