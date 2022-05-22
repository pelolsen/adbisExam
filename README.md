# OTFForms
This Web Application is made as a prototype for an Exam for Copenhagen Buisiness School - Summer 2022

## Usage
1. Make sure that PORT 3000 is not in use in your computer as this application rely on the usage of this port
2. Make sure you have a PDFTron License Key / Demo Key if the key installed in the application is deprecated. [Get Demo Key here](https://www.pdftron.com/pws/get-key)
3. Follow the guide that applies for your operating sistem:

### MACOS / LINUX
1. Open you terminal and navigate to the folder of this application
2. Once you are in the folder, run the following command:
```bash
sh runMacOS.sh
```
3. This will start the Server.
4. Open your browser and navigate to localhost:3000
5. Login: Siteowner Password: apitest1234

### WINDOWS
1. Make sure you have [GitBash](https://git-scm.com/downloads) installed at your computer.
2. In the folder of this aplication simply just click on the runWindows.sh. Otherwise, run the following command on your teminal in the folde scr:
```bash
npm start
```
3. This will open a GitBash terminal where the Shell Script will run.
4. This will start the Server.
5. Open your browser and navigate to localhost:3000
6. Login: Siteowner Password: apitest1234

## Packages in use
```bash
  "dependencies": {
    "@pdftron/pdfnet-node": "^9.2.0-1",
    "@pdftron/pdfnet-node-samples": "^9.2.0-2",
    "axios": "^0.27.2",
    "body-parser": "^1.20.0",
    "ejs": "^3.1.7",
    "express": "^4.18.0",
    "express-session": "^1.17.2",
    "fs": "0.0.1-security",
    "method-override": "^3.0.0",
    "pdf-to-base64": "^1.0.3"
  }
```

## Error Handling
### PDFTron License Key
If there are errors with PDFTron, it will probably be because of the License Key.
1. Enter a valid license key in models/LicenseKey.js

### Other Packages
If for some reason, any package got corrupted and are giving ERROR on the terminal:
1. Delete the **node_modules** file;
2. In your terminal, navigate to the scr file again
3. run:
```bash
npm install
```
4. All the packages should have returned in the right version

### ShellScript(.sh) not working
If the ShellScript does not work, you will have to run the program manually. For that, open a terminal, navigate to app file, and run the following command
```bash
1. node server.js
```


