import React, { Component } from 'react';
import { FileDrop } from 'react-file-drop';

import { Container, SpanColor, ContainerBread, FileContainer, FileLogo, FileDrag } from '../../styles/Container';

import {
    Title,
    AreaInput,
    ImageMobile
} from './styles'

import { ContainerTextArea } from './../Checkout/styles'

export default class Garantia extends Component {
    render() {
        return (
            <Container>
                <Title>Sirius Garantia</Title>
                <ContainerBread>
                    <SpanColor></SpanColor>
                    <SpanColor className="light large"></SpanColor>
                </ContainerBread>
                <AreaInput>
                    <div>
                        <Title className="medium">Preencha o formulário</Title>
                        <ContainerBread>
                            <input
                                className='form-control'
                                placeholder='Nome'
                            />
                            <input
                                className='form-control'
                                placeholder='Telefone'
                            />
                        </ContainerBread>

                        <FileContainer>
                            <FileDrop
                                onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
                                onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                                onFrameDrop={(event) => console.log('onFrameDrop', event)}
                                onDragOver={(event) => console.log('onDragOver', event)}
                                onDragLeave={(event) => console.log('onDragLeave', event)}
                                onDrop={(files, event) => console.log('onDrop!', files, event)}
                            >
                                <FileLogo>
                                    Inserir Imagem
                                </FileLogo>
                                <FileDrag>
                                    Clique para importar uma imagem.
                                </FileDrag>
                            </FileDrop>
                        </FileContainer>




                        <ContainerTextArea className="noPadding">
                            <textarea cols="4" rows="4" placeholder="Descreva o problema..."></textarea>
                        </ContainerTextArea>
                        <h5>Informe o Código do Produto:</h5>
                        <small>Todos os nossos produtos, recebem um código único!</small>
                        <button className='btn btn-success'>Enviar solicitação</button>
                    </div>
                    <div>
                        <h5>Alguma dúvida ou problema?</h5>
                        <small>Digite o seu e-mail abaixo que entraremos em contato com você</small>
                        <input
                            className='form-control'
                            placeholder='Ex: jane@email.com'
                        />
                        <button className='btn btn-success'>Enviar</button>

                        <ImageMobile src={require('./../../assets/email_contact_svg.svg')} ></ImageMobile>
                    </div>
                </AreaInput>
            </Container >
        )
    }
}
