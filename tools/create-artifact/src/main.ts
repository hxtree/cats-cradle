import fs from 'fs';
import { Project } from '@pnpm/types';
import path from 'path';
import { argsParserPromise } from './util/args-parser.js';
import { Workspace } from './util/workspace.js';
import { PackageBundler } from './util/package-bundler.js';
import { Config } from './types/cli.js';
import { archive } from './util/archive';
import { WorkspaceDecouple } from './util/workspace-decouple.js';

export const main = async () => {
  console.log('start bundle project...');

  const dirname = path.dirname(__dirname);
  const workspaceRootDir = Workspace.getRootDir(dirname);

  const argsParser = await argsParserPromise;

  const targetPackageNameOrPath = argsParser._[0];

  console.log(targetPackageNameOrPath);

  if (!targetPackageNameOrPath || typeof targetPackageNameOrPath !== 'string') {
    throw Error('Target package name or path is required');
  }

  const config: Config = {
    outDir: `${workspaceRootDir}dist/${targetPackageNameOrPath.replace(
      '@galaxyops/',
      '',
    )}`,
    overwrite: true,
    workspaceDependenciesFolder: 'workspace-dependencies',
  };

  console.log(`bundling ${targetPackageNameOrPath} to ${config.outDir}`);

  const workspacePackages = await Workspace.getPackages(workspaceRootDir);
  const workspace = new Workspace(workspaceRootDir, workspacePackages);

  const targetPackage: Project | null = workspace.tryToResolvePackage(
    targetPackageNameOrPath,
  );
  if (!targetPackage) {
    throw Error("Couldn't find target package inside workspace");
  }

  const packageBundler = new PackageBundler(workspace, targetPackage, config);

  console.log(`create ${config.outDir}`);
  packageBundler.createDistFolder();

  console.log('copying files...');
  packageBundler.copyPackageFiles();

  const sourcePackageJsonFilepath = `${targetPackage.dir}/package.json`;
  const destinationPackageJsonFilepath = `${config.outDir}/package.json`;
  console.log(
    `workspace decouple ${sourcePackageJsonFilepath} to ${destinationPackageJsonFilepath}`,
  );
  const workspaceDecouple = new WorkspaceDecouple();
  await workspaceDecouple.convertFilename(
    sourcePackageJsonFilepath,
    destinationPackageJsonFilepath,
  );

  console.log(`archive ${config.outDir} to ${config.outDir}.zip`);

  archive(config.outDir, `${config.outDir}.zip`);
};
