# plweb2 v2

This project is the new version of [plweb2](https://plweb.turtlesim.com), a web application for [Physics Lab AR](https://turtlesim.com/products/physics-lab/index-cn.html) (Chen, J. & Zhao, L. (2017)). It only provides basic community support and DOES NOT CONTAIN EXPERIMENT-RELATED FUNCTIONS.

And most importantly, we sincerely thanks to the previous contributors: Arenfelle, sfls-huangzeyuan, and other warm-hearted people who help us fin many bugs in the physicslab's community.

- technologies used: vue3, typescript, vite, [richtext render based on c++ wasm](https://github.com/SekaiArendelle/pltxt2htm)
- other development tools:
    + Vector icon library: https://icomoon.io/app/#/select
    + vue3 component library: https://www.naiveui.com/zh-CN/os-theme/components/t
- recommended IDE plugins: prettier, errorlens, vue3-official
- recommended browser plugins: vue.js devtools

## Contribution

To start a contribution follow these steps

### set up an enviroment

1. Install [Node.js](https://nodejs.org/) (v22).We recommend you install [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) and run `nvm install 22`.
2. [Optional] Install [nrm](https://github.com/Pana/nrm) (NPM Registry Manager) and run `nrm use taobao`.This will speed up the installation if you are in China.
3. Clone the repository and run `npm install` to install dependencies. You can ignore all warnings.

### start coding

Before you modify the code youd better run `npm run dev` to start the dev server.This will automatically apply your notifications to the browser.And you can also preview the current version on your smart phone or other devices.Most importantly, if you want to add some features related to the API,please read the [API Interface Documentation](./src/services//api/readme.md).

### start a pull request

Run `npm run lint` to format the code and check ESLint.Run `npm run build` to perform TypeScript checks.After that you can start a poor request and it will be revealed within a few days once it has been margin into the main branch it will automatically deploy to to the production environment.

## Project structure & interfaces

- `public/`: **Add pictures and icons here**, DO NOT import them in code using relative paths.If you add a new page, please remember to add the route in `src/router/index.ts`.
- `src/views`: Pages, each page corresponds to a route.
- `src/components/popup`: Donnot import these components in other components, use funtions from @services/pupup instead.These components are seperate from the root vue instance.
- Each interface contains readme firls on `src/services/*`: We have frtch richtext-render popup-compoments storage errorlogger and evebt-emitter interface.
- **DONNOT derectly import static files with its path**, use `getPath` function from @services/utils instead
- We use i18n , so donnot use hardcoded strings in components
- It is highly recommended to make this configurable variables set in `services/congig`
- We use pl-server main from @maizi20 for ts checks, But it May not always be accurate see more informations at api interface docks

## TO do list

If you want to start a contribution, here is some directions:
- [x] Complete the settings page(including i18n switch, export error log etc), the components in ./views/settings user.config.ts system.config.ts already have a prototype
- [ ] Redesign the error log, the format now is terrible
- [x] Fix the style when the window is too large
- [x] Improve the responsive design, there are problems with font size and others now
- [ ] Make the work item and work block, as well as tags responsive
- [x] Finish the error handling when API fails(We seldom check it, Im to blame)
- [ ] Better storage management(**Using indexDB**).Some requests can be cached, and when we need to fetch them again, we can use the cached version first, and fetch the real source in the same time, then update it(Vue has an incredible stratege to make accurate dom element update). 
- [ ] Transpile the code to support older browsers, using plugins(assigned to @wsxiaolin)
- [ ] Shorten the route names in router, e.g. change #experiment-summary/:id to #p/:id , userProfile to u etc.
