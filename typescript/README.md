# Typescript

[Reference](https://frontendmasters.com/courses/typescript-v2/introduction/)

## Flags for compiler

```bash
tsc src/index.ts # compiles to js compatible with IE6
tsc src/index.ts --target ES2015 # compatible with ES2015
tsc src/index.ts --target ES2017 # compatible with ES2017
tsc src/index.ts --target ES2017 --module commonjs
tsc src/index.ts --target ES2017 --module commonjs --watch # live changes
```

## Configuring TypeScript Compiler

`tscconfig.json`

```json
{
  "include" : ["src"], // input ts files
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "outDir": "lib", // outputs here!
    "declaration": true, // export definitions in .d.ts file (contains type info)
    "sourceMap": true, // maps the js to ts for debugging purpose
    "noImplicitAny": true, // ImplicitAny allows no type safety at some places
    "strictNullChecks": true,
    "allowJs": true,
    "types": [],
    "experimentalDecorators":, true,
    "emitDecoratorMetadata": true,
    "moduleResolution": "node",
    "target": "es2015",
  }
}
```

```bash
tsc # in root folder
```

## Function overloading

### Motivation

```js
function contactPeople(
   method: "email" | "phone",
   ...people: (HasPhoneNumber | HasEmail)[]
): void {
   if (method === "email") {
      (people as HasEmail[]).forEach(sendEmail);
   } else {
      (people as HasPhoneNumber[]).forEach(sendTextMessage);
   }
}
```

If only the below definition exists, we can have a `method` as `"email"` and `people` as `HasPhoneNumber[]` which will violate the rules set as user.

### Solution

To get rid of that we will have some function declarations which will
provide multiple function signatures to choose from (or overloaded functions).

```js
function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

function contactPeople(
   method: "email" | "phone",
   ...people: (HasPhoneNumber | HasEmail)[]
): void {
   if (method === "email") {
      (people as HasEmail[]).forEach(sendEmail);
   } else {
      (people as HasPhoneNumber[]).forEach(sendTextMessage);
   }
}
```

Now the definition needs to be wider and should be able to contain all the
narrow declarations. \
But remember, don't make the definition super general, try to keep it as
narrow as possible but still able to wider or equivalent to all the definitions.

## Converting `js` to `ts`

- Do not do functional changes. If the checks are for falsy values, don't change them to `typeof` checks.
- Make sure you pass the tests at each iteration of porting.

**I got too lazy to add more stuff here!. Kindly check the codes. I've tried to explain a lot of stuffs there itself**

### Refer Links:

- [extends keyof / in keyof](https://stackoverflow.com/a/57338105), Also refer `src/utility-types.ts`
- [infer keyword](https://stackoverflow.com/a/60067851), Also refer `src/adv-types.ts`
- [utility-types](https://www.typescriptlang.org/docs/handbook/utility-types.html), Also refer `src/utility-types.ts`
- [index signature](https://basarat.gitbook.io/typescript/type-system/index-signatures#declaring-an-index-signature)
- [Tryout exercises](https://exercism.io/my/tracks/typescript)
