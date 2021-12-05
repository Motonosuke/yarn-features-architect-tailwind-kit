interface SampleViewModel {
  sampleData: string;
}

export const useSampleViewModel: () => SampleViewModel = () => {
  const [{ sampleData }] = useSample();
  return { sampleData };
};
const useSample: () => readonly [{ sampleData: string }] = () => {
  const sampleData = 'sampleData';
  return [{ sampleData }] as const;
};
