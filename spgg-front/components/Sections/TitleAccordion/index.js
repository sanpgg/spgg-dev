import React, { useEffect, useState } from 'react';
import Icon from 'components/UI/Icon';
import { Collapse } from 'react-collapse';
import {
  TitleAccordionContainer,
  TitleContainer,
  Content,
  AccordionContainer,
  TitleAccordionContent,
  AccordionHead,
  AccordionTitle,
  AccordionBody,
  AccordionContent,
  Title
} from './styles';
import PropTypes from 'prop-types';
import { Container } from 'components/Layout/Grid/styles';
import parse from 'html-react-parser';

function TitleAccordion(
  {
    accordions, sectionSettings
  }
) {
  const {
    iconActive, icon, title
  } = sectionSettings;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (accordions.length > 0) {
      const items = [];
      // eslint-disable-next-line array-callback-return
      accordions.map((accordion, index) => {
        if (index === 0) {
          const accordion_n = {
            ...accordion,
            open: true
          };
          items.push(accordion_n);
        } else {
          items.push(accordion);
        }
      });
      setData(items);
    }
  }, [accordions]);

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
    <TitleAccordionContainer className="pb-10 md:pb-20">
      <Container>
        <TitleAccordionContent className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <TitleContainer className="col-span-6">
            <Title className="mb-10 md:mb-0">
              {parse(title || '')}
            </Title>
          </TitleContainer>
          <Content className="col-span-6">
            {data.length > 0 ? data.map((accordion, index) => (
              <AccordionContainer key={accordion.id}>
                <AccordionHead
                  className={`${accordion.open ? 'active' : ''}`}
                  onClick={() => { openAccordion(index); }}
                >
                  <Icon
                    icon={`${accordion.open ? iconActive : icon}`}
                    size="small"
                    className="input mr-5"
                    onClick={() => {}}
                  />
                  <AccordionTitle>
                    {accordion.title}
                  </AccordionTitle>
                </AccordionHead>
                <Collapse isOpened={accordion.open} className={`collapse-box ${accordion.open ? 'show' : ''}`}>
                  <AccordionBody>
                    <AccordionContent>
                      {accordion.content}
                    </AccordionContent>
                  </AccordionBody>
                </Collapse>
              </AccordionContainer>
            )) : null}
          </Content>
        </TitleAccordionContent>
      </Container>
    </TitleAccordionContainer>
  );
}

TitleAccordion.propTypes = {
  /**
   * How large should the Accordion be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Accordion data
   */
  accordions: PropTypes.arrayOf(PropTypes.object),
  sectionSettings: PropTypes.objectOf(PropTypes.any)
};

TitleAccordion.defaultProps = {
  accordions: [],
  sectionSettings: {
    icon: 'bx bx-chevron-right',
    iconActive: 'bx bx-chevron-down',
    title: 'Accordion <span>Section</span>'
  }
};

export default TitleAccordion;
