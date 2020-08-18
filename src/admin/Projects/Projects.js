import React from 'react';

import useAuth from '@/state/hooks/useAuth';

const Projects = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>Hola {user.displayName}</h1>
    </>
  );
};
export default Projects;
