# type-script-techno-craft

Init TypeScriptProject

npm i -D typescript ts-node-dev @types/express

It transpiles down to plain JavaScript and allows us to build scalable and enterprise grade applications with JavaScript via the TypeScript compiler . Then these libraries are not required after the code is transpiled from TypeScript to JavaScript meaning they are just bloating our image.

Multi-stage strategy will be:


Let’s build the image using:

docker build -t <docker-username>/typescriptapi:latest .

Note the tag name 'latest' is not necessary, the docker deamon assognt the tag 'latest' by default.

docker build --target builder -t <docker-username>/typescriptapi:dev 

Run: 
docker run -p 3100:3100 -e NODE_ENV=production test/typescriptapi 


