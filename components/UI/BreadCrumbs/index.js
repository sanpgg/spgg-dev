import React from 'react';
import {
  PagesContainer,
  Page,
  PageTitle,
  PageTitleLink,
  Arrow
} from './styles';
import PropTypes from 'prop-types';
import breadCrumbArrow from '../../../assets/breadCrumb.svg';

function BreadCrumbs(
  {
    size, pages
  }
) {
  // console.log(pages, 'pages');
  return (
    <PagesContainer className={`${size}`}>
      {pages.map((page, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Page key={`${page.title}-${index}`} className={`${size}`}>
          {index === pages.length - 1 ? (
            <PageTitle>
              {page.title}
            </PageTitle>
          )
            : (
              <PageTitleLink className="hidden md:block" href={page.link}>
                {page.title}
              </PageTitleLink>
            )}
          {index < pages.length - 1
            ? <Arrow className={`${index > 0 ? 'hidden md:block' : ''} arrow-page`} src={breadCrumbArrow} />
            : null }
        </Page>
      ))}
    </PagesContainer>
  );
}

BreadCrumbs.propTypes = {
  /**
   * How large should the BreadCrumbs be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Pages
   */
  pages: PropTypes.arrayOf(PropTypes.object)
};

BreadCrumbs.defaultProps = {
  size: 'large',
  pages: [
    {
      id: 1,
      title: 'Page 1',
      link: '/'
    },
    {
      id: 2,
      title: 'Page 2',
      link: '/'
    },
    {
      id: 3,
      title: 'Page 3',
      link: '/'
    },
    {
      id: 4,
      title: 'Page 4',
      link: '/'
    }
  ]
};

export default BreadCrumbs;
