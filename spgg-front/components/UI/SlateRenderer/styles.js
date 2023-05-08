import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const EditorTextContainer = styled.div`
    // border: 1px solid ${palette.bordes} !important;
    // padding: 0 20px 20px;
    div:nth-child(1){
        height: auto;
        overflow-y: auto;
        margin-top: 20px;

        ul, ol{
            padding-left: 20px;
        }
        ol li{
            list-style: decimal;
            ${textStyles.P16A};
            color: ${palette.darkGray};
        }

        ul li{
            list-style: disc;
            ${textStyles.P16A};
            color: ${palette.darkGray};
        }
        p{
            ${textStyles.P16A};
            color: ${palette.darkGray};
            margin-bottom: 20px;
        }

        blockquote{
            font-style: italic;
            margin: 20px 0;
            ${textStyles.blockquote};
            &:before{
                content: '“';
            }
            &:after{
                content: '”';
            }
        }
    }
`;

export const ToolbarContainer = styled.div`
`;

export const Button = styled.button``;
