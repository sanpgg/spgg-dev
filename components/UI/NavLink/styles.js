import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const LinkStyled = styled.a`
    cursor: pointer;
    ${textStyles.H19A}
`;

export const LinkContainer = styled.a`
    line-height: 28px;
    ${(props) => (props.icon ? 'display: flex;' : '')}
`;
