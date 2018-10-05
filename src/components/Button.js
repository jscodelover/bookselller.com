
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 15px;
    margin-right: 5px;
    background: #d9656e;
    width: 210px;
    border: none;
    outline: none;
    color: white;
    font-family: inherit;
    font-size: 30px;
    border-radius: 3px;
    min-height: auto;
    cursor: pointer;
    box-shadow: 0 5px 0px #c54b55;
    border-bottom: 2px solid #c54b55;

    &:hover{
        transition: all 0.1s ease-in;
    }

    &:active{
        transform:translateY(4px);
        border-bottom-width: 2px;
        box-shadow: none;
    }

    @media (max-width:975px){
        width: 150px;
        font-size: 20px;
    }
`;

export default StyledButton;