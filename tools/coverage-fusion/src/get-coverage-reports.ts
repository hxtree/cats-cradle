import { findFilesRecursively } from './find-files-recursively';

export function getCoverageReports(
  directoryToSearch: string,
  fileNameToFind: string,
): string[] {
  if (directoryToSearch === null) {
    return [];
  }

  const coverageFiles = findFilesRecursively(directoryToSearch, fileNameToFind);

  console.info(coverageFiles);

  return coverageFiles;
}
