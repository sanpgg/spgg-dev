/* eslint-disable no-else-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { upperFirst } from 'lodash';
import * as SectionComponents from './Sections';
import styled from 'styled-components';
import { palette } from './Layout/ThemeProvider';

export const SectionLayout = styled.div``;

export const SectionContainer = styled.div``;

function resolveSections(section) {
  // console.log(section, 'section to show');
  const { data } = section;
  const parsed_data = JSON.parse(data);
  const { key } = parsed_data;
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[upperFirst(key)];

  if (Section) {
    return Section;
  }

  // console.error('Cant find section', section); // eslint-disable-line no-console
  return null;
}

function parseFields(item) {
  if (item.type === 'array' && item.array) {
    const items = [];
    let newItem = {};
    item.array.map((element) => {
      element.fields.map((field) => {
        newItem = {
          ...newItem,
          [field.key]: field.value
        };
      });
      items.push(newItem);
    });
    return items;
  } else {
    let fields = {};
    item.fields.map((field) => {
      fields = {
        ...fields,
        [field.key]: field.value
      };
    });
    return fields;
  }
}

function parseData(section) {
  const {
    data, collection
  } = section;
  const content = JSON.parse(data);
  let cleanData = {};
  if (collection) {
    cleanData = {
      ...cleanData,
      collection
    };
  }
  const { items } = content;
  items.map((item) => {
    cleanData = {
      ...cleanData,
      [item.key]: parseFields(item)
    };
  });
  // console.log(cleanData, 'test data content');
  return cleanData;
}

function RenderSections(props) {
  const { sections } = props;
  // console.log(props, 'sections content');

  if (!sections) {
    // console.error('Missing section');
    return <div>Missing sections</div>;
  }

  // eslint-disable-next-line no-unused-vars
  function getMargins(key, section) {
    // console.log(section, 'testing sections');
    // console.log(section[`${key}`], 'testing margins');
    return section[`${key}`];
  }

  return (
    <Fragment>
      <SectionLayout>
        {sections?.map((section) => {
          const SectionComponent = resolveSections(section);
          if (!SectionComponent) {
            return (
              <div>
                Missing section
                {' '}
                {section._type}
              </div>
            );
          }
          return (
            <SectionContainer
              id={`${getMargins('div_id', section) || section.id}`}>
              <SectionComponent {...parseData(section)} key={section._key} />
            </SectionContainer>
          );
        })}
      </SectionLayout>
    </Fragment>
  );
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object)
    })
  )
};

export default RenderSections;
