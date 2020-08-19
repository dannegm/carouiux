import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

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
import { Save } from '@material-ui/icons';

import DropZone from './../components/DropZone';

import { Wrapper, CardHeader, CardHeaderButton } from './Projects.styled';

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
  const clearProject = () => {
    setProjectModel(INITIAL_PROJECT);
    uid.current = uuid();
    updateField('uid', uid.current);
  };

  const handleSave = async () => {
    try {
      await db.collection('projects').doc(projectModel.uid).set(projectModel);
      alert('Todo bien :D');
      clearProject();
    } catch (e) {
      alert('Algo malió sal');
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Card>
        <CardHeader
          title="New Project"
          action={
            <CardHeaderButton
              variant="contained"
              color="primary"
              endIcon={<Save />}
              onClick={handleSave}
            >
              Save Project
            </CardHeaderButton>
          }
        />
        <CardContent>
          <Grid container>
            <Grid container item xs={6} direction="column" spacing={2}>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Title"
                    variant="outlined"
                    value={projectModel.title}
                    onChange={(e) => handleChange(e, 'title')}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Preview Text"
                    variant="outlined"
                    value={projectModel.previewText}
                    onChange={(e) => handleChange(e, 'previewText')}
                    rows={2}
                    multiline
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <Divider />
              </Grid>

              <DropZone
                folder="covers"
                picture={projectModel.cover}
                onSuccess={(picture) => updateField('cover', picture)}
              />
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              style={{ marginLeft: '1rem', marginRight: '1rem' }}
            />

            <Grid container item xs direction="column" spacing={3}>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Project"
                    variant="outlined"
                    value={projectModel.project}
                    onChange={(e) => handleChange(e, 'project')}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Role"
                    variant="outlined"
                    value={projectModel.role}
                    onChange={(e) => handleChange(e, 'role')}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Description"
                    variant="outlined"
                    value={projectModel.description}
                    onChange={(e) => handleChange(e, 'description')}
                    rows={8}
                    multiline
                  />
                </FormControl>
              </Grid>

              <Grid item>
                <Divider />
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="Call To Action Label"
                    variant="outlined"
                    value={projectModel.callToActionLabel}
                    onChange={(e) => handleChange(e, 'callToActionLabel')}
                  />
                </FormControl>
              </Grid>
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
