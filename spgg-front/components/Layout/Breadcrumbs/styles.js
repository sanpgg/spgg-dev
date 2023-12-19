import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';

export const WrapperHeader = styled.div`
`;

export const Breadcrumbs_a = styled.a`
    color: ${palette.dark};
    ${textStyles.h1Title}
    font-family: 'arial', sans-serif;
    font-size: 13px;
`;