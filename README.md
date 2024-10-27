# Single Page App with HTML Modules and Webpack

This is a simple single-page application using HTML files as modules with Webpack for bundling. The project demonstrates dynamic content loading, where HTML files are loaded as strings and inserted into the DOM when navigating between different tabs (Home, Menu, and Contact).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Webpack Configuration](#webpack-configuration)
- 
## Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To start the development server, run:

```bash
npm start
```

This command will run Webpack’s development server, allowing you to test the navigation and content loading.

## Project Structure
your-repo/
├── src/
│   ├── home.html           # Home page content
│   ├── menu.html           # Menu page content
│   ├── about.html          # Contact page content
│   ├── index.js            # Main JavaScript file
│   └── style.css           # Styling for the application
├── dist/
│   └── (generated files)   # Webpack output files
├── webpack.config.js       # Webpack configuration
└── package.json            # Project dependencies and scripts

## Webpack Configuration
This project uses Webpack to bundle the HTML modules and JavaScript. Key configurations:

HTML Loader: We use html-loader to import HTML files as strings so they can be dynamically inserted into the DOM.

## Webpack Setup

1. Install html-loader as a development dependency:
```bash
npm install html-loader --save-dev
```
2. Configure Webpack by adding the following rule in webpack.config.js:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
};

```
