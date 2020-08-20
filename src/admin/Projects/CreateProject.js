import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useSnackbar } from 'notistack';
import slug from 'slug';
import clsx from 'clsx';

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
  Link,
  IconButton,
  Tooltip,
  Collapse,
  makeStyles,
} from '@material-ui/core';

import { Save, DeleteSweep, ExpandMore } from '@material-ui/icons';

import {
  Wrapper,
  CardHeader,
  CardHeaderButton,
  Breadcrumbs,
} from './Projects.styled';

import DropZone from './../components/DropZone';
import TextEditor from './../components/TextEditor';

import validator, { noEmptyString } from '@/utils/helpers/validator';
import { useHistory } from 'react-router-dom';

const initialCaseStudyRowId = uuid();
const INITIAL_PROJECT = {
  uid: uuid(),
  title: '',
  slug: '',
  previewText: '',
  cover: '',
  project: '',
  role: 'UI UX Designer',
  description: '',
  callToActionLabel: 'View case study',
  showInHome: true,
  caseStudy: [
    {
      uid: initialCaseStudyRowId,
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
};

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

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
  const history = useHistory();
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
        const projectToSave = {
          ...projectModel,
          slug: slug(projectModel.title),
        };

        await db
          .collection('projects')
          .doc(projectToSave.uid)
          .set(projectToSave);

        enqueueSnackbar('The project has been created', { variant: 'success' });
        history.push(`/secret/projects/edit/${projectToSave.uid}`);
      } catch (e) {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
        console.error(e);
      }
    }
  };

  // Expand/Collapse
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  return (
    <Wrapper>
      <Card>
        <CardHeader
          title={
            <Breadcrumbs>
              <Link href="/secret">🏠</Link>
              <Link href="/secret/projects">Projects</Link>
              <Link href="/secret/projects/create">New Project</Link>
            </Breadcrumbs>
          }
          action={
            <>
              <Tooltip title="Show/Hide Baisc Info" placement="left">
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={() => setExpanded(!expanded)}
                >
                  <ExpandMore />
                </IconButton>
              </Tooltip>
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
        <Collapse in={expanded} timeout="auto">
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
        </Collapse>
      </Card>
      <TextEditor
        data={projectModel.caseStudy}
        onChange={(value) => updateField('caseStudy', value)}
        requestSave={handleSave}
      />
    </Wrapper>
  );
};
export default CreateProject;
