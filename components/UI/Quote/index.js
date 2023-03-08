import React from 'react';
import {
  QuoteContainer,
  QuoteBody,
  QuoteText,
  QuoteSignature
} from './styles';
import PropTypes from 'prop-types';

function Quote(
  {
    quoteText, signature, align
  }
) {
  return (
    <QuoteContainer className={`${align}`}>
      <QuoteBody>
        <QuoteText>
          {quoteText}
        </QuoteText>
      </QuoteBody>
      <QuoteSignature>
        —
        {' '}
        {signature}
      </QuoteSignature>
    </QuoteContainer>
  );
}

Quote.propTypes = {
  /**
   * Align text
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Quote text
   */
  quoteText: PropTypes.string,
  /**
   * Quote Signature
   */
  signature: PropTypes.string
};

Quote.defaultProps = {
  align: 'left',
  quoteText: 'Lorep Ipsum',
  signature: 'Sonny Gzz'
};

export default Quote;
