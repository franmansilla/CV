import React from 'React';
import styled from 'styled-components';

const StyledH2 = styled.h2`
font-family: 'Roboto', sains-serif;
font-weight: 300;
letter-spacing: .8px;
margin: 1em 0 0 0;
color: #000000;
`;

const H2Styled=({name})=><StyledH2> {name}</StyledH2>;

export default H2Styled