import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { RowContent } from './styles';
import { Container } from '../Grid/styles';
function NavBar() {
  return (
    <Container>
        <RowContent>
          Header content
        </RowContent>
    </Container>
  );
}
export default NavBar;
