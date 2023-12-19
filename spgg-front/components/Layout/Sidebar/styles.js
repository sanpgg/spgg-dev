import styled from 'styled-components';
import { palette } from '../ThemeProvider';
import { textStyles } from '../ThemeProvider/textStyles';

export const SidebarContainer = styled.div`
	width: 20rem;
    height: 100vh;
    z-index: 1038;
	flex-shrink: 0;
	transition: width .4s cubic-bezier(.25,.8,.25,1);
	overflow-x: hidden;
	border-right: 1px solid #e5eaef;
`;
