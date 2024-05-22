# Node Api Deployment In Netlify

A repository for deploying Node.js applications seamlessly using Netlify.

## Getting Started

Follow these steps to set up and deploy your Node.js application using Netlify.

### Step 1: Initialize a Node Project

Create a folder for your project and initialize a Node.js project with the following command:

```bash
npm init -y
```

### Step 2: Install Required Dependencies

Install the necessary dependencies:

```bash
npm install express netlify-cli netlify-lambda serverless-http
```

### Step 3: Add Build Script to `package.json`

Add the following script to your `package.json` file:

```json
"scripts": {
    "build": "netlify deploy --prod"
}
```

### Step 4: Create Folder Structure

Create the necessary folder structure for your project:

```
your-project-folder/
│
├── functions/
│   └── app.js
├── netlify.toml
└── package.json
```

### Step 5: Create and Configure `app.js`

Create a file named `app.js` inside the `functions` folder and add the following code:

```javascript
// app.js

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
```

### Step 6: Create and Configure `netlify.toml`

Create a `netlify.toml` file in the root directory and add the following syntax:

```toml
[build]
    functions = "functions"
```

### Step 7: Create `.gitignore` File

Create a `.gitignore` file and add the following entries:

```
node_modules/
.netlify
```

### Step 8: Initialize a Git Repository (for mannual you can skip this step)

Initialize a git repository and commit your changes:

```bash
git init
git add .
git commit -m "initial commit"
```

### Step 9: Initialize Netlify

Create an account on Netlify, then return to your project and open your terminal. Initialize Netlify:

```bash
netlify init
```

### Step 10: Deploy Your Application

Deploy your application to a draft URL:

```bash
netlify deploy
```

After the deployment, you will receive a draft URL.

### Step 11: Deploy to Production

To deploy your application to production, use the following command:

```bash
netlify deploy --prod
```

Your application is now deployed on Netlify! You can visit the provided URL to see your running application.
