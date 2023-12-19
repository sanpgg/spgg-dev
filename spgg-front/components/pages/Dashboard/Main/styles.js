import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';

export const ContentRight = styled.div`
    width: 100%;
    background-color: #F1F1F1;
`;

export const ContentFilter = styled.div`
    margin-top: 20px;
    padding: 20px 0;
    margin-bottom: 25px;
    border-bottom: 1px solid #e0e0e0;

    button{
        background-color: ${palette.dark};
        color: ${palette.white};
    }
`;

export const ContentCard = styled.div`
    h3{
        font-size: 40px;
        font-weight: bold;
    }
`;

export const Table = styled.table`
`;