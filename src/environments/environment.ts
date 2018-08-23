// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiurl:
    // "https://api.github.com/users/kamransumar?access_token=9ec706f01a179f4b2e68fb22ec730baf4dd84375",
    "https://api.github.com/users/kamransumar?client_id=d875772d2935dbeb1121&client_secret=ce11e278ada07ab96c6a115c09f76a19a5a34571",
  repoapi: "https://api.github.com/users/kamransumar/repos",
  apiKey: "9ec706f01a179f4b2e68fb22ec730baf4dd84375",
  clientId: "d875772d2935dbeb1121",
  clientSecret: "ce11e278ada07ab96c6a115c09f76a19a5a34571",
  production: false
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
