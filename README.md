"# azapollogplts" 

# Apollo GraphQL starter on Azure Function with TypeScript support

Use this template to start building Apollo GraphQL function on Azure Function.  This project is configured to support TypeScript inside Azure function, and 

## Compile Typescript code

The TypeScript code need to be compiled before function can be tested locally. To do that run command 

```bash
npm run build
```

## Running locally

To run locally, open the development server with the following command:

```bash
npm i
npm run build
func host start
```

Next, open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
