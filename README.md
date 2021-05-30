# RestedXP Addon Guide Editor
This project is built to support the RestedXP WoW Leveling Guide Addon (https://www.restedxp.com/). A challenge that I encountered with this add-on, is that despite being an open-source solution to creating in-game leveling guides, the syntax for defining a guide is a bit technical (especially for non-technical guide creators). With this tool, I hope to create a more visual way for speedrunners and other guide creators to create and maintain their leveling guides. Once completed, this tool will allow a user to create a new guide or edit an existing one using a GUI, and export their creation out into the appropriate .lua format that is expected by the RestedXP guide. 

## Link to official RestedXP documentation for guide creation
https://www.restedxp.com/create-your-own-restedxp-guide/

## Technologies used
- VueJS 3
- Bootstrap 5
- File-saver (https://www.npmjs.com/package/file-saver)

## TODO:
- ~~Finish basic front-end form to create a new guide~~
- ~~Determine serialization format for converting app data into either JSON or LUA~~
- ~~Determine if Vue can handle the LUA file creation, otherwise create .NET CORE application to handle~~
- Improve UI for guide creation
- Create guide step item selector in modal window so guide step items can be abstracted and look better
- Create import existing guide functionality
- Share with addon devs :)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
