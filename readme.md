TypeScript project setup

npm init -y
npm install -D typescript
npx tsc --version
npx tsc --init

modify package.json scripts
"scripts": {
"build": "tsc",
"start": "node dist/index.js",
"dev": "tsc --watch"
},

npm run build
npm run start
npm run dev
