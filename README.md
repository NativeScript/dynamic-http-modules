
# Dynamically import HTTP ES Modules (v9)

This project uses the latest [v9 release](https://blog.nativescript.org/nativescript-9-announcement/) paired with [Vite](https://docs.nativescript.org/configuration/vite) demonstrating the new dynamically loaded HTTP ES modules feature (loading ESM modules over `https://...` at runtime via dynamic`import()` usage).

The demo imports third-party ESM packages from a CDN (for example, `lodash` and `yaml`) and uses them inside the app right away.

## Run

```sh
npm install
ns run ios
# or
ns run android
```

