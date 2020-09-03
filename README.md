<p align="center">
  <img width="256" height="256" src="https://imgur.com/7vtEiVr.png">
</p>

<h1 align="center">Dragon Launcher</h1>

<p align="center">
	<a href="https://github.com/SatelliteTeam/DragonLauncher/tree/master/.github/CODE_OF_CONDUCT.md">
    	<img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=for-the-badge" alt="Code of conduct">
  	</a>
	<img alt="GitHub" src="https://img.shields.io/github/license/SatelliteTeam/DragonLauncher?style=for-the-badge">
	<img alt="GitHub package.json version (master)" src="https://img.shields.io/github/package-json/v/SatelliteTeam/DragonLauncher/master?style=for-the-badge">
	<img alt="GitHub package.json version (dev)" src="https://img.shields.io/github/package-json/v/SatelliteTeam/DragonLauncher/dev?style=for-the-badge">
	<a href='https://coveralls.io/github/SatelliteTeam/DragonLauncher?branch=master'>
		<img src='https://img.shields.io/coveralls/github/SatelliteTeam/DragonLauncher/master?style=for-the-badge' alt='Coverage Status' />
	</a>
</p>

# About 📖
This project was born out of pure curiosity, need and desire for a launcher that looks modern, reliable, multiplatform, taking inspiration from other projects such as [MultiMC](https://multimc.org/) or [Technic](https://www.technicpack.net/) solving problems and adding that many recurring players of minecraft and more specifically of modpacks have found and been they have adapted over the years.

## Goals and Future Features 📑

- Multiple accounts support.
- Multiple Instance configuration and management.
- Skin management directly from the launcher.
- Forge, Fabric and Optifine management installation support.
- Built-in mods search and download.
- Built-in Modpack creator for sharing and installation inside other user's launcher.
- Cloud backups for configuration, maps, logs, and screenshots.
- A crash analyser and fix suggestions.
- A friendly community

---
# Contributing 👍
As the first project oriented to this approach, in addition to just starting, there are and will be many flaws or things to improve so if you want to collaborate or contribute your great ideas, we invite you to see the [collaboration guide](https://github.com/SatelliteTeam/DragonLauncher/tree/master/.github/CONTRIBUTING.md) and our [code of conduct](https://github.com/SatelliteTeam/DragonLauncher/tree/master/.github/CODE_OF_CONDUCT.md) **__currently CONTRIBUTOR COVENANT CODE OF CONDUCT__** to open your first issue or pull request 😄.

Also if you want to go deeper and create new features or want to create your own PR / FORK, see the core elements of the project to undestand ebtter how all it works 😄

### Core components and libraries
|                  Core Components                 |                                                     Documentation                                                     |
|:------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|
|                      Node JS                     |                                      [Guide](https://nodejs.org/en/docs/guides/)                                      |
|                       Bash                       |                                          [Guide](https://guide.bash.academy/)                                         |
|                    Typescript                    |                                      [Docs](https://www.typescriptlang.org/docs/)                                     |
|                      Vue JS                      |                                      [Docs / Guide](https://vuejs.org/v2/guide/)                                      |
|                     Electron                     |                                     [Docs](https://www.electronjs.org/docs/README)                                    |
|                   Launcher Core                  |                         [Repo / Docs](https://voxelum.github.io/minecraft-launcher-core-node/)                        |
| Vue Electron Builder (Core and Vue Based plugin) | [Vue Plugin](https://nklayman.github.io/vue-cli-plugin-electron-builder/) \| [Core Docs](https://www.electron.build/) |

## Project setup and command usage 🔧


### Install project dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```
---
### Compiles and create the installers for all the platforms that we supports (Linux, Windows and MacOS)
```
npm run build:all
```
#### For Windows targeted builds use
```
npm run build:win
```
#### For MacOS targeted builds use
```
npm run build:mac
```
**__MacOS default package target are .dmg__**

#### For Linux targeted builds use
```
npm run build:linux
```
**__Linux default package target are .deb__**

---
### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize project configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

# LICENSE ©️
Currently this project is under [GPLV3 License](https://www.gnu.org/licenses/gpl-3.0.html)