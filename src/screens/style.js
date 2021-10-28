import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import dsk from '../assets/dsk.jpeg'

const evilCharacters = [
    {name: 'Supreme King', id :0,},
    {name: 'Lame Malveillante, Héros du mal', id :1,},
    {name: 'Démon Malveillante, Héros du mal', id :2,},
    {name: 'Gaia Sombre, Héros du mal', id :3,}]

const Style = () => {
    const history = useHistory()

    const toEvil = (character) => {
        history.push('/evil', {character: character})
    }

    return (
        <ContainAll>
            <Header>
                <LeftHeader>
            <BoldParagraph>Div</BoldParagraph>
            </LeftHeader>
                <RightHeader>


            <BoldParagraph>Div</BoldParagraph>
            <BoldParagraph>Div</BoldParagraph>
            <BoldParagraph>Div</BoldParagraph>
            </RightHeader>
            </Header>
            <div>
                {evilCharacters.map(evil => <p onClick={() => toEvil(evil)}>{evil.name}</p>)}
            </div>
        <Container>
            <BoldParagraph>Div</BoldParagraph>
            <BoldParagraph>Div</BoldParagraph>
            <BoldParagraph>Div</BoldParagraph>
            <BoldParagraph>Div</BoldParagraph>
        </Container>
        <ContainerColumn>
            <TextContainer>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
            </TextContainer>
        </ContainerColumn>
        <ContainerColumn>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
        </ContainerColumn>
        <ContainerColumn>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
        </ContainerColumn>
        <ContainerColumn>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
        </ContainerColumn>
        <ContainerColumn>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
            <p>Div</p>
        </ContainerColumn>
        <Container>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            
        </Container>
        </ContainAll>
    );
};

const Header = styled.div`
display: flex;
padding:12px;
background-color: yellow;
`

const LeftHeader = styled.div`
    background-color: blue;
    display: flex;
    flex:1;
`

const RightHeader = styled.div`
justify-content:flex-end;
    background-color: purple;
    display: flex ;
    flex: 2;

`



const Square = styled.div`
    width:200px;
    height:200px;
    border-radius: 50%;
    background-color:magenta;
    margin: 6px;
`

const TextContainer = styled.div`
    background-color: rebeccapurple;
`

const BoldParagraph = styled.p`
    font-weight: bold;
`

const ContainAll = styled.div`
    /* background-color:green; */
    /* background-image: url(${dsk}); */
    min-height:100vh;
    height:100%;
    background-repeat: no-repeat;
    background-size:cover;

`

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blue;
    align-items: center;
`

const Container = styled.div`
    background-color:red;
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;

`

export default Style;