/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, {
  useCallback, useEffect, useMemo, useState
} from 'react';
import PropTypes from 'prop-types';
import {
  Editable, withReact, Slate
} from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';

import { EditorTextContainer } from './styles';

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is a text example...' }
    ]
  }
];

function SlateRenderer({ content }) {
  const [editorValue, setEditorValue] = useState(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  useEffect(() => {
    // console.log(value, 'value parsed');
    if (content) {
      console.log('Content', content);
      const { value: data } = JSON.parse(content);
      setEditorValue(data);
    } else {
      setEditorValue(initialValue);
    }
  }, [content]);

  useEffect(() => {
    // console.log(value, 'value started');
    if (content) {
      const { value: data } = JSON.parse(content);
      setEditorValue(data);
    } else {
      setEditorValue(initialValue);
    }
  }, []);

  return (
    <EditorTextContainer>
      <Slate editor={editor} value={editorValue}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          readOnly
        />
      </Slate>
    </EditorTextContainer>
  );
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'link':
      return <a {...attributes} href={element.url}> {children} </a>;
    default:
      return children;
      //return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

SlateRenderer.propTypes = {
  /**
   * Input Value
   */
  content: PropTypes.string
};

export default SlateRenderer;
