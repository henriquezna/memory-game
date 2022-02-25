import styled from 'styled-components'

export const StyledBoard = styled.div`
    background-color: #253274;
    
    height: 1250px;
    width: 940px;
    margin: 10px;

    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
`;