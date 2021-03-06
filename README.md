# Marketplace

Marketplace embedded system with the ability to integrate with any platform.

# First Steps

First clone the project found on GitHub and install all dependencies using `npm install`. Then start the project run `ng serve`. If everything works correctly, then we will proceed to implement it as JavaScript/HTML plain.

## How to implement as JavaScript/HTML plain

#### Step 1:
In your main folder of this angular project run `ng build market-place`.

This command will generate a folder named **dist** and if everything worked correctly this message will appear in the console:

![Run Build Success](https://github.com/jantvb/json/blob/main/market-place/run-build-done.jpg)

You will have the following distribution of folders and files within **dist**:

![Dist folder tree](https://github.com/jantvb/json/blob/main/market-place/dist-folder-tree.jpg)

**Note:** The names of the **main**, **polyfills**, **runtime**, **scripts** and **css** files may change, since when doing build it will always generate new names.

#### Step 2:
Copy the **market-place** folder that is inside the **dist** folder in the folder where you will use the market-place content.
For example it should look something like this:

![my-new-app folder tree](https://github.com/jantvb/json/blob/main/market-place/my-new-app-tree.jpg)

#### Step 3:
To use your built market-place element, you need only to import it to an html file like any other javascript code, import the main, polyfills, runtime, scripts and css files.
Edit the html file to obtain the content generated in market-place. It should look like this:

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
	<base href="./">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="market-place/styles.780eb3c8e721d7a9c07d.css"/>
    <script type="text/javascript" src="./market-place/runtime.025432d3dde7178b179a.js"></script>
    <script type="text/javascript" src="./market-place/polyfills.9a90a2c6082fe03321d2.js"></script>
    <script type="text/javascript" src="./market-place/scripts.dc357b0f6dff293d5fa6.js"></script>
    <script type="text/javascript" src="./market-place/main.742538cd222a3f0239b9.js"></script>
  </head>
  <body>
    <market-place storeKey="5hld"></market-place>
  </body>
</html>
```

For the content generated in the market-place to be available on your page you only need to use the `<market-place> </market-place>` selector.
You also have to include the **main**, **polyfills**, **runtime**, **scripts** and **css** files.
In order for the Material styles and icons to be displayed, it is also necessary to include them as shown in the previous code.

Note that an input named storeKey appears in the **market-place** selector that may or may not be present. This input is to handle the integration in a store.

## Page Preview

![my-new-app folder tree](https://github.com/jantvb/json/blob/main/market-place/page-preview.JPG)

