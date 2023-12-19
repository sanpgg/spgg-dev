import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';

export const H1 = styled.h1`
    font-family: var(--font-neue-haas-bold);
    font-size: 30px;
`;

export const H3 = styled.h3`
    font-family: var(--font-neue-haas-bold);
    font-size: 20px;
`;

export const SelectType = styled.select`
    height: 56px;
    padding: 10px;
    margin: 0;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    min-width: 0%;
    border-color: rgba(0, 0, 0, 0.23);
    background: white;
    border-radius: 3px;
`;

export const LabelInputInner = styled.label`
    color: rgba(0, 0, 0, 0.6);
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0;
    position: relative;
    display: block;
    transform-origin: top left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(133% - 32px);
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translate(14px, -9px) scale(0.75);
    -moz-transform: translate(14px, -9px) scale(0.75);
    -ms-transform: translate(14px, -9px) scale(0.75);
    transform: translate(14px, -9px) scale(0.75);
    -webkit-transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,-webkit-transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    z-index: 1;
    pointer-events: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: white;
`;
