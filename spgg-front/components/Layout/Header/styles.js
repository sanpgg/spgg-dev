import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';

export const WrapperHeader = styled.div`
`;

export const PageTitle = styled.h2`
     color: ${palette.dark};
    ${textStyles.h1Title}
    font-family: 'arial', sans-serif;
    font-size: 20px;
    font-weight: bold;
`;

export const ContentLogo = styled.div`
    img{
        max-width: 200px;
    }
`;
