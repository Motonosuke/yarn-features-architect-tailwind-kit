import { NextPage } from 'next';
import React from 'react';

import { SampleContainer } from 'presentation/components/pages/sample/containers/SampleContainer';

const Component = () => {
  return (
    <div>
      <SampleContainer />
    </div>
  );
};

const Sample: NextPage = () => {
  return (
    <>
      <Component />
    </>
  );
};

export default Sample;
