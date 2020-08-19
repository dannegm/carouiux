import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useSnackbar } from 'notistack';

import { db } from '@/services/firebase';

import {
  Grid,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  TextField,
  Checkbox,
  Divider,
} from '@material-ui/core';
import { Save, DeleteSweep } from '@material-ui/icons';

import DropZone from './../components/DropZone';

import { Wrapper, CardHeader, CardHeaderButton } from './Projects.styled';

import validator, { noEmptyString } from '@/utils/helpers/validator';

const INITIAL_PROJECT = {
  uid: null,
  title: '',
  previewText: '',
  cover: '',
  project: '',
  role: 'UI UX Designer',
  description: '',
  callToActionLabel: 'View case study',
  showInHome: true,
};

const CreateProject = () => {
  // Project Data
  const uid = useRef(uuid());
  const [projectModel, setProjectModel] = useState(INITIAL_PROJECT);

  const updateField = (field, value) => {
    setProjectModel({
      ...projectModel,
      [field]: value,
    });
  };

  const handleChange = (event, field) => {
    updateField(field, event.target.value);
  };

  useEffect(() => {
    updateField('uid', uid.current);
  }, []);

  // Save Project
  const { enqueueSnackbar } = useSnackbar();

  const validations = {
    title: validator(projectModel.title, [noEmptyString()]),
    previewText: validator(projectModel.previewText, [noEmptyString()]),
    cover: validator(projectModel.cover, [noEmptyString()]),
    project: validator(projectModel.project, [noEmptyString()]),
    role: validator(projectModel.role, [noEmptyString()]),
    description: validator(projectModel.description, [noEmptyString()]),
    callToActionLabel: validator(projectModel.callToActionLabel, [
      noEmptyString(),
    ]),
  };

  const isValid = Object.values(validations).every((i) => !i);

  const clearProject = () => {
    setProjectModel({
      ...INITIAL_PROJECT,
      uid: uuid(),
    });
  };

  const handleSave = async () => {
    if (isValid) {
      try {
        await db.collection('projects').doc(projectModel.uid).set(projectModel);
        enqueueSnackbar('The project has been created', { variant: 'success' });
        clearProject();
      } catch (e) {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
        console.error(e);
      }
    }
  };

  return (
    <Wrapper>
      <Card>
        <CardHeader
          title="New Project"
          action={
            <>
              <CardHeaderButton
                variant="contained"
                endIcon={<DeleteSweep />}
                onClick={clearProject}
              >
                Clear
              </CardHeaderButton>
              <CardHeaderButton
                variant="contained"
                color="primary"
                endIcon={<Save />}
                onClick={handleSave}
                disabled={!isValid}
              >
                Save Project
              </CardHeaderButton>
            </>
          }
        />
        <CardContent>
          <Grid container>
            <Grid container item xs={6} direction="column" spacing={2}>
              {/* Title */}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Title"
                    variant="outlined"
                    value={projectModel.title}
                    onChange={(e) => handleChange(e, 'title')}
                    error={!!validations.title}
                    helperText={validations.title}
                  />
                </FormControl>
              </Grid>

              {/* Preview Text */}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Preview Text"
                    variant="outlined"
                    value={projectModel.previewText}
                    onChange={(e) => handleChange(e, 'previewText')}
                    error={!!validations.previewText}
                    helperText={validations.previewText}
                    rows={2}
                    multiline
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <Divider />
              </Grid>

              {/* Cover */}
              <DropZone
                folder="covers"
                picture={projectModel.cover}
                onSuccess={(picture) => updateField('cover', picture)}
                error={!!validations.cover}
              />
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              style={{ marginLeft: '1rem', marginRight: '1rem' }}
            />

            <Grid container item xs direction="column" spacing={3}>
              {/* Project */}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Project"
                    variant="outlined"
                    value={projectModel.project}
                    onChange={(e) => handleChange(e, 'project')}
                    error={!!validations.project}
                    helperText={validations.project}
                  />
                </FormControl>
              </Grid>

              {/* Role */}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Role"
                    variant="outlined"
                    value={projectModel.role}
                    onChange={(e) => handleChange(e, 'role')}
                    error={!!validations.role}
                    helperText={validations.role}
                  />
                </FormControl>
              </Grid>

              {/* Description */}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Description"
                    variant="outlined"
                    value={projectModel.description}
                    onChange={(e) => handleChange(e, 'description')}
                    error={!!validations.description}
                    helperText={validations.description}
                    rows={8}
                    multiline
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <Divider />
              </Grid>

              {/* Call To Action Label */}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Call To Action Label"
                    variant="outlined"
                    value={projectModel.callToActionLabel}
                    onChange={(e) => handleChange(e, 'callToActionLabel')}
                    error={!!validations.callToActionLabel}
                    helperText={validations.callToActionLabel}
                  />
                </FormControl>
              </Grid>

              {/* Show In Home */}
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={projectModel.showInHome}
                      onChange={(e) =>
                        updateField('showInHome', e.target.checked)
                      }
                    />
                  }
                  label="Show in Home"
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Wrapper>
  );
};
export default CreateProject;
