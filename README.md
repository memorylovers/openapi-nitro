# openapi-nitro

Generate a unjs/nitro routes dirs from an OpenAPI spec

## How to Use

```shell
$ pnpm dlx openapi-nitro ./openapi.yaml -o ./routes
$ tree routes/
routes/
└── pets
    ├── [petId]
    │   ├── index.delete.ts
    │   ├── index.get.ts
    │   └── toys
    │       └── index.get.ts
    ├── index.get.ts
    └── index.post.ts
```

### Comman line Options

```shell
$ pnpm dlx openapi-nitro --help
Generator nitro routes from OpenAPI (openapi-nitro v0.0.1)                                                                                                                                                             7:25:17

USAGE openapi-nitro [OPTIONS] [INPUT]

ARGUMENTS

  INPUT="./openapi.yaml"    Input OpenAPI file path    

OPTIONS

  -o, --output="./routes"    Output dir path
```

## Used Packages

- [@apidevtools/swagger-parser](https://www.npmjs.com/package/@apidevtools/swagger-parser) ... OpenAPI parser/validator
- [openapi3-ts](https://www.npmjs.com/package/openapi3-ts) ... TypeScript library to help building OpenAPI 3.x
- [unjs/citty](https://github.com/unjs/citty) ... CLI Builder
- [unjs/unbuild](https://github.com/unjs/unbuild) ... bundler

## Inspired Packages

- [typed-openapi](https://github.com/astahmer/typed-openapi) ... generator API Client and Scheme, Model from OpenAPI spec
- [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen) ... transform TypeScript to [valibot](https://github.com/fabian-hiller/valibot), [zod](https://github.com/colinhacks/zod), etc.

## License

[MIT License](/LICENSE) ©[Memory Lovers, LLC](https://memory-lovers.com)
