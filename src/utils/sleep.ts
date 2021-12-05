export const sleep: (waitSeconds: number) => Promise<unknown> = (waitSeconds) =>
  new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));

export const millSecSleep: (waitMillSeconds: number) => Promise<unknown> = (waitMillSeconds) =>
  new Promise((resolve) => setTimeout(resolve, waitMillSeconds));
