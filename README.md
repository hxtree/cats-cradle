# @galaxyops :milky_way:

The @galaxyops offers a robust architecture for efficient project management and
deployment on AWS. It empowers your domain-driven DevOps teams, guiding them
through AWS with clarity and purpose, fostering a seamless journey toward
operational excellence.

[![CI](https://github.com/hxtree/galaxyops/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/galaxyops/actions/workflows/on-merge.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/galaxyops/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/galaxyops/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)

## Overview

Running multiple cloud applications without a robust architectural framework
leads to chaos. The @galaxyops provides a comprehensive cloud architecture
solution, emphasizing modern DevOps practices on AWS. This repository lays the
groundwork for enterprise software landscapes, ensuring scalability and
maintainability across projects.

## Features

- **Universal Language**: Leveraging TypeScript for microservices, enhancing
  performance, readability, and maintenance.

- **Simple Setup**: Turn-key deployment on bare metal systems, designed for
  MacOS silicon environments without Docker dependency.

- **Monorepo Architecture**: Centralizes development, streamlining code sharing,
  versioning, and dependency management with tools like Nx and PNPM.

- **CI/CD Pipeline**: Autonomous pipeline for deploying auditable artifacts to
  AWS using IaC, ensuring consistency and scalability.

- **Event-Driven Microservices**: Fault-tolerant communication via queues, with
  event data archived in a data lake for analytics.

- **Schema Contracts**: Automatic mocking and validation for seamless
  inter-service communication and data integrity.

- **Ephemeral Environments**: Provisioning of TLS certificates and email
  services using AWS Org Formation.

- **User Authentication**: Integration of Cognito for user registration and
  authentication.

- **SPA Frontend with BFF**: Single-page application frontend hosted on S3 and
  deployed via CloudFront, with middleware for backend operations.

## Getting Started

To install and build all packages, follow these steps:

```bash
corepack enable pnpm
pnpm install
pnpm nx run-many -t build --all
```

Scripts from any project can be ran:

```zshrc
pnpm nx run package-name:script
```

Install the following

```zshrc
brew install jq # MacOS, used for lambda layer builder
```

![Flow Chart](docs/flow-chart.drawio.svg)

### AWS Multi-Account Architecture Initial Setup

These steps only need to be performed once by the platform team to initialize
the IaaS.

1. Setup [AWS Org Formation](/platform/aws-org-formation/README.md).

2. Login via SSO and bootstrap deployments. Deploy platform, services, and then
   clients in that order.

   ```bash
    aws configure sso
    export AWS_PROFILE=DeveloperSandbox
    pnpm nx run aws-sso:start DeveloperSandbox
    pnpm nx run-many -t cdk:bootstrap --all
    pnpm nx run-many -t cdk:deploy --projects=tag:scope:platform
    pnpm nx run-many -t cdk:deploy --projects=tag:scope:services
    pnpm nx run-many -t cdk:deploy --projects=tag:scope:middleware
    pnpm nx run-many -t cdk:deploy --projects=tag:scope:clients
   ```

3. Login via SSO to tools account and then deploy tools.

   ```bash
   pnpm nx run aws-sso:start tools
   pnpm nx run-many -t cdk:bootstrap --all
   pnpm nx run-many -t cdk:deploy --projects=tag:scope:aws-tools-account
   ```

## Documentation

Comprehensive documentation is essential for understanding and maintaining the
project. Each project and folder structure should be documented in README.md
files following RFC 2119 standards.

> **Note** Use `./tools/help.sh` for information on builtin commands.

<details>
  <summary>Third Party Documentation</summary>

- [NX Package Based Repo](https://nx.dev/getting-started/tutorials/package-based-repo-tutorial)
- [AWS CLI](https://docs.aws.amazon.com/cdk/v2/guide/cli.html)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Jest](https://jestjs.io/)
</details>

## Contributing

Pull requests and bug reports are welcome on GitHub at
<https://github.com/hxtree/cats-cradle>. Please follow the
[code of conduct](docs/CODE_OF_CONDUCT.md) when contributing.

### Acknowledgements

<a href="https://github.com/hxtree/cats-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/cats-cradle" />
</a>

## License

All packages available [NPM](https://www.npmjs.com/search?q=%40cats-cradle) are
MIT licensed.
