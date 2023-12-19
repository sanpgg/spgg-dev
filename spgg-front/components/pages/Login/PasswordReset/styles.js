import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';


export const EmailContainer = styled.span`
    color: ${palette.dark};
`;

export const DescriptionContainer = styled.div`
    margin-bottom: 40px;
`;
export const Description = styled.p`
    ${textStyles.body}
`;


export const Img = styled.img`
`;

export const PageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
`;

export const Col_right = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
`;

export const ContainerLogo = styled.div`
    text-align: center;
    img{
        margin:0 auto;
        height: auto;
        width: 100%;
        max-width: 50px;
    }
    h3{
        color: #fff;
    }
`;

export const RecoverLabel = styled.a`
    font-size: 15px;
    font-family: var(--font-neue-haas-roman);
    color: ${palette.blue};
`;

export const Container = styled.div`
    width: 380px;
    @media screen and (max-width: 500px) {
        width:100%;
        padding: 0 15px;
        box-sizing: border-box;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
`;

export const Title = styled.h1`
    color: ${palette.dark};
    padding-bottom: 25px;
    border-bottom: 1px solid ${palette.borders};
    margin-bottom: 40px;
    font-family: var(--font-neue-haas-bold);
    ${textStyles.h1Title2}
`;

export const Form = styled.div`
    button{
        margin-top: 30px;
    }
    label{
        font-size: 18px;
        color: ${palette.black};
        font-family: var(--font-neue-haas-medium);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    button{
        font-size: 18px;
        width: 100%;
        display: block;
        font-family: var(--font-neue-haas-roman);
    }
`;

