# Link
https://edupala.com/angular-firebase-crud-operation-using-angularfire/


   run: |
        npm install
        npm run build
    
    - name: Firebase Deploy
      run: |
        sudo npm install -g firebase-tools
        firebase deploy --only hosting:admin --token ${{ secrets.FIREBASE_TOKEN }}


echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


## Componentes
ng generate component components/home
ng generate component components/player
ng generate component components/list-player
ng generate component components/search-player

ng generate component modal/edit-player
ng generate service services/player

# FdqWeekly

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
