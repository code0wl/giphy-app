# Giphy app

Total time spent: approx. 7 hrs

To not draw focus away from the Frontend, I have used iFrames instead of having a backend server reading the gifs. 
It amounts to the same thing to avoid cors issues.

The project follows a structure I am used to working in.
Dumb components with simple inputs and outputs.
Also allows the components to accumulate logic over time as it is easy to cover them in tests.
More over, I stick to using a simple interface with expansions on `@Input` and `@output` decorators.

Dumb components should end up in the design system and support a typed interface for users to be able to pluck and adjust. I recommend here either e2e or snapshot testing.

On the other hand, feature components by nature contain business logic and should all get tested thoroughly.

## Development Meta

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
