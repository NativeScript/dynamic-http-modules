/// <reference path="./node_modules/@nativescript/types/index.d.ts" />

// Augment strong types where needed for dynamic imports of ES modules via HTTP
declare module "https://esm.sh/lodash@4.17.21" {
  import _ from "lodash";
  export default _;
}

declare module "https://esm.sh/yaml@2.8.2" {
  import YAML from "yaml";
  export default YAML;
}
