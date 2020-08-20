import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import {
  TextEditorWrapper,
  RowWrapper,
  RowContent,
  ColWrapper,
  ColContent,
  ActionsWrapper,
  Toolbar,
  Spacer,
  TextWrapper,
  CustomEditor,
  ImageWrapper,
} from './TextEditor.styled';

import {
  Card,
  CardHeader,
  CardContent,
  ButtonGroup,
  Button,
} from '@material-ui/core';

import { Add, Save } from '@material-ui/icons';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import DropZone from '../DropZone';

const ContentEditor = ({ type, content, onChange }) => {
  const [_type, setType] = useState(type);
  const [_content, setContent] = useState(content);

  useEffect(() => {
    setType(type);
  }, [type]);

  useEffect(() => {
    setContent(content);
  }, [content]);

  useEffect(() => {
    onChange({
      type: _type,
      content: _content,
    });
  }, [_type, _content]);

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <ColWrapper>
      <Toolbar>
        <ButtonGroup disableElevation size="small" variant="contained">
          <Button
            color={_type === 'text' && 'secondary'}
            onClick={() => setType('text')}
          >
            Text
          </Button>
          <Button
            color={_type === 'image' && 'secondary'}
            onClick={() => setType('image')}
          >
            Image
          </Button>
        </ButtonGroup>
      </Toolbar>
      <ColContent>
        {_type === 'text' ? (
          <TextWrapper>
            <CustomEditor
              text={_content}
              onChange={handleChange}
              options={{
                placeholder: {
                  text: 'Start typing something...',
                },
              }}
            />
          </TextWrapper>
        ) : (
          <ImageWrapper>
            <DropZone
              folder="test"
              picture={_content}
              onSuccess={handleChange}
            />
          </ImageWrapper>
        )}
      </ColContent>
    </ColWrapper>
  );
};
ContentEditor.propTypes = {
  type: PropTypes.oneOf(['text', 'image']),
  content: PropTypes.string,
  onChange: PropTypes.func,
};
ContentEditor.defaultProps = {
  type: 'text',
  content: '',
  onChange: () => null,
};

const RowSection = ({ content, distribution, onChange }) => {
  const [_distribution, setDistribution] = useState(distribution);
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  const [_content, setContent] = useState(content);

  const handleSingleColumn = () => {
    setIsSingleColumn(true);
    setDistribution('1x');
  };

  const handleTwoColumns = () => {
    setIsSingleColumn(false);
    setDistribution('1x2');
  };

  useEffect(() => {
    if (distribution === '1x') {
      handleSingleColumn();
    } else {
      setDistribution(distribution);
    }
  }, [distribution]);

  useEffect(() => {
    onChange({
      distribution: _distribution,
      content: _content,
    });
  }, [_distribution, _content]);

  return (
    <RowWrapper>
      <Toolbar>
        <ButtonGroup disableElevation size="small" variant="contained">
          <Button
            color={isSingleColumn && 'secondary'}
            onClick={handleSingleColumn}
          >
            Single Column
          </Button>
          <Button
            color={!isSingleColumn && 'secondary'}
            onClick={handleTwoColumns}
          >
            Two Columns
          </Button>
        </ButtonGroup>
        {!isSingleColumn && (
          <ButtonGroup disableElevation size="small" variant="contained">
            <Button
              color={_distribution === '1x2' && 'secondary'}
              onClick={() => setDistribution('1x2')}
            >
              1x2
            </Button>
            <Button
              color={_distribution === '1x3' && 'secondary'}
              onClick={() => setDistribution('1x3')}
            >
              1x3
            </Button>
            <Button
              color={_distribution === '2x3' && 'secondary'}
              onClick={() => setDistribution('2x3')}
            >
              2x3
            </Button>
          </ButtonGroup>
        )}
      </Toolbar>
      <RowContent distribution={_distribution}>
        <ContentEditor
          type={_content[0].type}
          content={_content[0].content}
          onChange={(value) => setContent([value, _content[1]])}
        />
        {!isSingleColumn && (
          <ContentEditor
            type={_content[1].type}
            content={_content[1].content}
            onChange={(value) => setContent([_content[0], value])}
          />
        )}
      </RowContent>
    </RowWrapper>
  );
};
RowSection.propTypes = {
  distribution: PropTypes.oneOf(['1x', '1x2', '1x3', '2x3']),
  content: PropTypes.any,
  onChange: PropTypes.func,
};
RowSection.defaultProps = {
  distribution: '1x2',
  content: [
    {
      type: 'text',
      content: '',
    },
    {
      type: 'image',
      content: '',
    },
  ],
  onChange: () => null,
};

const TextEditor = ({ data, onChange, requestSave }) => {
  const [content, setContent] = useState(data);

  const defaultRow = {
    distribution: '1x2',
    content: [
      {
        type: 'text',
        content: '',
      },
      {
        type: 'image',
        content: '',
      },
    ],
  };

  const pushRow = () => {
    const newRow = {
      ...defaultRow,
      uid: uuid(),
    };
    setContent([...content, newRow]);
  };

  const handleContent = (row, index) => {
    const copyContent = [...content];
    copyContent[index] = row;
    setContent(copyContent);
  };

  useEffect(() => {
    onChange(content);
  }, [content]);

  return (
    <TextEditorWrapper>
      <Card>
        <CardHeader title="📖 Case Study Content" />
        <CardContent>
          {content.map((row, index) => (
            <RowSection
              key={row.uid}
              distribution={row.distribution}
              content={row.content}
              onChange={(value) => handleContent(value, index)}
            />
          ))}

          <ActionsWrapper>
            <Button
              disableElevation
              variant="contained"
              color="secondary"
              startIcon={<Add />}
              onClick={pushRow}
            >
              New Section
            </Button>
            <Spacer />
            <Button
              disableElevation
              variant="contained"
              color="primary"
              startIcon={<Save />}
              onClick={requestSave}
            >
              Save Project
            </Button>
          </ActionsWrapper>
        </CardContent>
      </Card>
    </TextEditorWrapper>
  );
};
TextEditor.propTypes = {
  data: PropTypes.any,
  onChange: PropTypes.func,
  requestSave: PropTypes.func,
};

const defaultRowId = uuid();
TextEditor.defaultProps = {
  data: [
    {
      uid: defaultRowId,
      distribution: '1x2',
      content: [
        {
          type: 'text',
          content: '',
        },
        {
          type: 'image',
          content: '',
        },
      ],
    },
  ],
  onChange: () => null,
  requestSave: () => null,
};

export default TextEditor;
