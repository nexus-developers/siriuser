import React, { Component } from 'react';

import { Container } from '../../../styles/Container';

import { MdCompareArrows } from 'react-icons/md'

import { IoMdTrash } from 'react-icons/io'

import { CardsContainer, Card, ProductPhoto, ProductDescription, ProductActions, Quantity } from './styles'

import Painel from './Assets/painel.png'

export default class Kits extends Component {
  render() {
    return (
      <Container>
        <CardsContainer>


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
          </Card>
        </CardsContainer>
      </Container>
    );
  }
}
