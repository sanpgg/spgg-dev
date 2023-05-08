import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import { FileDrop } from 'react-file-drop';

export const DropZone = styled(FileDrop)`
    max-width: 380px;
    min-height: 380px;
    border: 1px solid ${palette.bordes};
    padding: 20px;
    position: relative;
    ${textStyles.P16A}
    &:hover{
        border-color: ${palette.lightGray};
    }
`;

export const DropCenter = styled.div`
    border: 2px dashed ${palette.lightGray};
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
        margin: 16px 0 20px;
    }
    &:hover{
        border-color: ${palette.black};
        span{
            color: ${palette.darkGray};
        }
    }
`;

export const DropText = styled.span`
    ${textStyles.P16A}
    color: ${palette.lightGray}
`;

export const HiddenInput = styled.input`
 opacity: 0;
 position: absolute;
 cursor: pointer;
`;
