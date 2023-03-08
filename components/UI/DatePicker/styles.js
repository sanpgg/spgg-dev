import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

// DATE PICKER STYLES

export const DatePickerContainer = styled.div`
    position: absolute;
    top: 55px;
    left:0;
    width: 100%;
    @media (min-width: 600px) {
        width: 370px;
    }
  
    height: 370px;
    border: 1px solid ${palette.lightGray};
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
    margin-top: 10px;
    z-index: 9999;
    background-color: ${palette.white};
`;

export const Calendar = styled.table`
    width: 100%;
    td{
        width: 50px;
        height: 50px;
        text-align: center;
        cursor: pointer;
        ${textStyles.P16A}
        &.selected{
            background-color: ${palette.black};
            color: ${palette.white};
        }
    }
`;

export const CalendarHeader = styled.tr``;

export const MonthYear = styled.td``;

export const Previous = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Next = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DayHeader = styled.tr``;

export const WeekDay = styled.td`
    color: ${palette.lightGray};
`;

export const Day = styled.td`
    &.selected {
        background-color: ${palette.black};
        color: ${palette.white} !important;
    }
    &.notInMonth {
        opacity: 0.3;
    }
`;

export const DatePickerStyled = styled.div`
    position: relative;
`;

// INPUT DATE STYLES

export const InputDate = styled.div`
    position:relative;
`;

export const DateIcon = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
`;
