import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider/index';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
`;
export const WrapperPage = styled.div`
    min-height: 100vh;
    width: 100%;
`;

export const ContentRight = styled.div`
    width: 100%;
    background-color: #F1F1F1;
    padding: 30px;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  width: calc(100% - 640px);
  margin-left: 640px;
  padding: 20px 40px;
  box-sizing: border-box;
  &.large{
    width: calc(100% - 320px);
    margin-left: 320px;
    padding: 20px 200px;
  }
`;

export const CenterPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 700px;
  height: 100vh;
`;

export const PageContainer = styled.div`
  
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
  width: 100%;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${palette.bordes};
  margin: 20px 0;
`;

export const PageContent = styled.div`
  min-height: calc(100vh - 206px);
`;

/*Form*/
export const SelectType = styled.select`
    height: 56px;
    padding: 10px;
    margin: 0;
    min-width: 0%;
    border-color: rgba(0, 0, 0, 0.23);
    background: white;
    border-radius: 3px;
`;
