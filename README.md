# EthCC Website

The Ethereum Community Conference (EthCC) is the largest annual European Ethereum event focused on technology and community. Three intense days of conferences, networking and learning.

This repo stores the EthCC website. The code is served at [ethcc.io](https://ethcc.io/).

## Development / Build Requirements

-   Node 14.17.0*
-   Yarn >= 1.22.10**

*Higher versions should work fine, but may cause inconsistencies.  
**npm is NOT supported for package management. MyCrypto uses yarn.lock to ensure sub-dependency versions are pinned, so yarn is required to install node_modules

***For users trying to build with WSL, you'll need to have install libpng via `sudo apt-get install libpng16-dev`.

## Running the App

First, you must run  `yarn`  to grab all the dependencies. If you are ever having trouble with something, a good place to start is by trying  `rm -rf node_modules/ && yarn`  which will completely clear all your previously installs dependencies and re-install them from scratch.

Then, you can run various commands depending on what you want to do:

#### Development

```bash
# run app in dev mode in browser, rebuild on file changes
yarn start
 ```
 
#### Production
```bash
# builds app for production
yarn build
```

## Project structure

This project utilizes import aliases for childs folder of the `src/` folder. To import something from one of those folders re-export them in the `index.ts` file of the corresponding folder and use `import { something } from @folder` to target it.

```bash
src/
├── assets/  # Assets (images) that are imported in the code
│   └── picture.jpg
├── components/ # React components used in the website
│   ├── index.ts
│   └── component.tsx
├── config/ # Config files
│   ├── index.ts
│   └── config.ts
├── hooks/ # Custom hooks
│   ├── index.ts
│   └── hook.ts
├── services/ # Generator functions used to call our different API used
│   ├── index.ts
│   └── Service.ts
├── theme/ # Theme-UI theme declaration
│   └── index.ts
├── types/ # Types declarations
│   ├── index.ts
│   └── type.ts
├── utils/ # Utility functions
│   ├── index.ts
│   └── util.ts
├── App.tsx # Component containing all the Providers wrappers
├── index.html # Static index.html used by react for the build
├── static/ # Static content folder
│	├── speakers/ # Speakers images folder
│   │	└── speaker.jpg
... # Outside of src/ are stored different tools config such as Webpack or eslint.
```

## Adding ressources

The major part of the website is built dynamically from config files (arrays of content).

### Routes

All the routes of the app (which defines the different pages routes of the website) are stored under `config/routes.ts`.

The `route` object look something like this :

```ts
PAGE_NAME: {
	path: '/path/to/page',
	name: 'Display Name',
	component: ImportedComponent
}
```

### Speakers

All the speakers are stored under `config/speakers.ts`.

For ease of use the speakers pictures are stored in a static folder included at build time. If you need to add a speaker picture just drop the file in `static/speakers`.

The `speaker` object looks something like this :

```ts
{
	company: 'Awesome Company',
	fistname: 'John',
	lastname: 'Wick',
	link: 'https://twitter.com/JohnWick',
	picture: '/speakers/John_Wick.jpg'
}
```
### Partners

All the partners are stored under `config/partners.ts`.

The `partner` object looks something like this :

```ts
{
	name: 'Partner name',
	picture: ImportedPicture,
	link: 'https://website.com'
}
```

### Sponsors

All the sponsors are stored under `config/sponsors.ts`.

They are classified under their specific sponsor level (eg. gold, silver, iron, ...).

The `sponsor` object looks something like this :
```ts
{
	name: 'Sponsor name',
	picture: ImportedPicture,
	link: 'https://website.com'
}
```
