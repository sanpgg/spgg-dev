import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';


export const QuoteContainer = styled.div`
    max-width: 400px;
    &.left{
        text-align: left;
    }

    &.center{
        text-align: center;
    }
    
    &.right{
        text-align: right;
    }
`;

export const QuoteBody = styled.div`
    margin-bottom: 20px;
`;

export const QuoteText = styled.span`
    ${textStyles.H26}
    &:before{
        content: '“';
    }
    &:after{
        content: '”';
    }
`;

export const QuoteSignature = styled.span`
    color: ${palette.lightGray};
    ${textStyles.P16A}
`;
