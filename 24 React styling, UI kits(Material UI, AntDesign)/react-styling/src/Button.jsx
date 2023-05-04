import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    border-radius: 10px;
    padding:15px 30px;
    ${props => props.primary && css`
        color: white;
        background-color: skyblue;
        transition:.3s;
        &:hover{
            background-color: blue;
        }
    `};
    ${props => props.success && css`
        color: white;
        background-color: seagreen;
        transition:.3s;
        &:hover{
            background-color: green;
        }
    `}
   
`;

const StyledParagraph = styled.p`
    color:#aaa;
    font-size:30px
`

const Button = () => {
  return ( 
   <>
    <StyledButton primary>Click Me!</StyledButton>
    <StyledButton>Click Me!</StyledButton>
    <StyledButton success>Click Me!</StyledButton>

    <StyledParagraph>Lorem ipsum dolor sit amet.</StyledParagraph>
   </>
  )
}

export default Button