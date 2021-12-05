import React from 'react';

import { SamplePresentation } from 'presentation/components/pages/sample/presentations/SamplePresentation';
import { useSampleViewModel } from 'presentation/view-models/pages/sample/sample-view-model';

export const SampleContainer = () => {
  const { sampleData } = useSampleViewModel();
  console.log('🚀 ~ file: SampleContainer.tsx ~ line 7 ~ SampleContainer ~ sampleData', sampleData);
  return (
    <div>
      <SamplePresentation />
    </div>
  );
};
