import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { storage } from '@/services/firebase';

import { CircularProgress } from '@material-ui/core';
import { ImageSearch } from '@material-ui/icons';

import {
  DropZoneWrapper,
  DropZonePicture,
  DropZoneMessage,
  DropZoneIcon,
  DropZoneDescription,
  FilePicker,
} from './DropZone.styled';

const allowedTypes = 'image/png, image/jpeg';

const DropZone = ({ picture, folder, onSuccess, onError }) => {
  const dropZone = useRef();
  const filePicker = useRef();

  const [pictureUrl, setPictureUrl] = useState(picture);
  const [isDragOver, setIsDragOver] = useState(false);
  const [progress, setProgress] = useState(0);

  const $storage = storage.ref();
  let $pictureRef = null;

  const dragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const fileDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const [file] = e.dataTransfer.files;

    const isAllowed = allowedTypes.split(',').some((type) => {
      return type.trim() === file.type;
    });

    if (isAllowed) {
      handleUpload(file);
    }
  };

  const handleError = (error) => {
    onError(error);
  };
  const handleSuccess = () => {
    $pictureRef.getDownloadURL().then((url) => {
      setPictureUrl(url);
      onSuccess(url);
      setProgress(0);
    });
  };

  const handleUpload = (file) => {
    $pictureRef = $storage.child(`${folder}/${file.name}`);
    const uploaderTask = $pictureRef.put(file);
    uploaderTask.on(
      'state_changed',
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      handleError,
      handleSuccess
    );
  };

  return (
    <DropZoneWrapper
      ref={dropZone}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      dragOver={isDragOver}
    >
      <FilePicker
        ref={filePicker}
        type="file"
        accept={allowedTypes}
        onChange={(e) => handleUpload(e.target.files[0])}
      />
      {pictureUrl !== '' && (
        <DropZonePicture src={pictureUrl} alt="Vista previa" />
      )}
      <DropZoneMessage onClick={() => filePicker.current.click()} role="button">
        <DropZoneIcon>
          {progress ? (
            <CircularProgress variant="determinate" value={progress} />
          ) : (
            <ImageSearch />
          )}
        </DropZoneIcon>
        <DropZoneDescription>
          drag&drop an image here or click to find one
        </DropZoneDescription>
      </DropZoneMessage>
    </DropZoneWrapper>
  );
};

DropZone.propTypes = {
  picture: PropTypes.string,
  folder: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DropZone.defaultProps = {
  picture: '',
  folder: '',
  onSuccess: () => null,
  onError: () => null,
};

export default DropZone;
