# Static HTML Starter with TailwindCSS and AlpineJS
This is a totally blank-late starter template for a single page HTML site. It uses the following: 
- TailwindCSS v3.2.7
  - TailwindCSS Aspect Ratio v0.4.2
  - TailwindCSS Forms v0.5.3
  - TailwindCSS Typography v0.5.9
- AlpineJS v3.11.1 (added via script tag)
  - AlpineJS Focus Plugin

# Developing with this Starter
This was made for my own personal use but I see it as a great place to start if you want to modern conviencience of modern web dev tools and the classic simplicity of a single HTML file. I guess you could call it JAMstack but it's an HTML file. As it stands, this repo does require a build process CI/CD setup. I currently use Netlify but you can use whatever you like or commit your built files to your own repo.

## \"Variables\"
Find and replace anything that starts with `update:` to set the site metadata.

## Compile Assets

### For Production
To build for production
```
npm run build
```

### For Development
I use the Visual Studio Code Plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to run a simple server for the index file. Run the folowing command to watch for changes
```
npm run dev
```

# SEO
There are a few predefined SEO Meta Tags to get you started. Pay attention to the preloaded Meta Image. It will help with your page speed score and [it's good practice](https://web.dev/preload-responsive-images/). There's no sitemap file in this starter since it's meant as a one-pager.