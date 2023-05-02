![](docs/assets/images/malace-tsia.jpg)

<h1 align="center">Cats Cradle :yarn:</h1>

Get ready to embark on an adventure with **Cats Cradle** - the upcoming co-op
mobile RPG that will transport you to a nostalgic world filled with wonder! Join
us on this exciting journey as we continue to develop and bring this game to
life.

This repo houses the newest game code, utilizing an enterprise architecture
monorepo. It includes numerous microservices built on a PaaS with IaC for
streamlined development, testing, and deployment.

Although each package is maintained for the game, many are individually
published to [NPM](https://www.npmjs.com/search?q=%40cats-cradle) and available
under open-source software (OSS) license.

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Coverage)

## Getting Started

Simply [fork the repo](https://github.com/hxtree/cats-cradle/fork) open in
Github Codespaces for a turn-key development environment.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, build, test, and deploy apps locally using the
[devcontainer](docs/devcontainer.md).

### Pull Request Lifecycle (~5 mins)

1. Checkout a new branch from main using git.

   ```bash
   git checkout -b feature/improve-readme
   ```

2. Work on changes (e.g. fix a bug or add a new feature). Build, lint, and unit
   test projects.

   ```bash
   rush build
   rush lint
   rush test
   ```

3. Stage and commit changes using
   [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification).

   ```bash
   git add .
   git commit -m 'doc: fix spelling of computers'
   ```

4. (Optional) If changing a library that is published to NPM, document
   [semantic version](https://semver.org/) changes, generate Changelogs, and
   commit changes.

   ```bash
   rush change
   rush version --bump
   git commit -m 'chore: bump change log'
   ```

5. Push code and open a PR. Celebrate contributing to @cats-cradle.

   ```bash
   git push
   ```

## Documentation

See [Documentation](docs/index.md).

> **Note** Use `rush help` for information on builtin commands.

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Join us in building the future of gaming! Contribute to this repo and help shape
the next generation of immersive entertainment.

Pull requests and bug reports are welcome on GitHub at
<https://github.com/hxtree/cats-cradle>. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [code of conduct](docs/CODE_OF_CONDUCT.md).

### Our Contributors

<a href="https://github.com/hxtree/cats-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/cats-cradle" />
</a>

<p align="center">
:hourglass: :infinity: :white_heart:
</p>
