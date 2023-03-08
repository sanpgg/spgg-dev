/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Icon from '../Icon';
import { Collapse } from 'react-collapse';
import {
  AccordionContainer,
  AccordionHead,
  AccordionTitle,
  AccordionBody,
  AccordionContent
} from './styles';
import PropTypes from 'prop-types';
import { Container } from 'components/Layout/Grid/styles';
import SlateRenderer from '../SlateRenderer';

function Accordion(
  {
    size, accordions
  }
) {
  const [data, setData] = useState(accordions);

  const openAccordion = (id) => {
    const accordions_new = data;
    accordions_new[id] = {
      ...accordions_new[id],
      open: !accordions_new[id].open
    };
    const new_data = [...accordions_new];
    setData(new_data);
  };

  return (
    <Container className={`${size}`}>
      {data.length > 0 ? data.map((accordion, index) => (
        <AccordionContainer key={accordion.id} className={`${size}`}>
          <AccordionHead onClick={() => { openAccordion(index); }} className={`${accordion.open ? 'active' : ''}`}>
            <Icon
              icon={`${accordion.open ? accordion.iconActive : accordion.icon}`}
              size="small"
              className="input mr-5"
              onClick={() => {
                false;
              }}
            />
            <AccordionTitle>
              {accordion.title}
            </AccordionTitle>
          </AccordionHead>
          <Collapse isOpened={accordion.open} className={`collapse-box ${accordion.open ? 'show' : ''}`}>
            <AccordionBody>
              <AccordionContent>
                {accordion.content}
                {accordion.contentEditor && (
                  <SlateRenderer content={accordion.contentEditor} />
                )}
              </AccordionContent>
            </AccordionBody>
          </Collapse>
        </AccordionContainer>
      )) : null}
    </Container>
  );
}

Accordion.propTypes = {
  /**
   * How large should the Accordion be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Accordion data
   */
  accordions: PropTypes.arrayOf(PropTypes.object)
};

Accordion.defaultProps = {
  size: 'large',
  accordions: []
};

export default Accordion;
