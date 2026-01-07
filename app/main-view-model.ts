import { Observable } from "@nativescript/core";
import { LoadingIndicator } from "@nstudio/nativescript-loading-indicator";

export class HelloWorldModel extends Observable {
  private _message1: string;
  private _message2: string;
  progress = new LoadingIndicator();

  get message1(): string {
    return this._message1;
  }

  set message1(value: string) {
    if (this._message1 !== value) {
      this._message1 = value;
      this.notifyPropertyChange("message1", value);
    }
  }

  get message2(): string {
    return this._message2;
  }

  set message2(value: string) {
    if (this._message2 !== value) {
      this._message2 = value;
      this.notifyPropertyChange("message2", value);
    }
  }

  importDebounceFromLodash() {
    this.progress.show();
    // allow sync ui update (tap up) before starting import
    this.invokeImport(async () => {
      const { default: _ } = await import("https://esm.sh/lodash@4.17.21");

      const slowdown = _.debounce(() => {
        const msg = `Debounced to 1 call\nbut this was invoked 100 times!`;
        console.log(msg);
        this.message1 += `\n${msg}`;
      }, 200);
      for (let i = 0; i < 100; i++) {
        slowdown();
      }
      this.message1 = `Lodash imported successfully: ${_.VERSION}`;
      console.log(this.message1);
      this.progress.hide();
    });
  }

  importFromYaml() {
    this.progress.show();
    // allow sync ui update (tap up) before starting import
    this.invokeImport(async () => {
      const { default: YAML } = await import("https://esm.sh/yaml@2.8.2");
      const parsed = YAML.parse("a: 1\nb:\n  - 2");
      console.log(parsed);
      this.message2 = `yaml imported successfully:\n${JSON.stringify(
        parsed,
        null,
        4
      )}`;
      console.log(this.message2);
      this.progress.hide();
    });
  }

  invokeImport(fn: () => void) {
    setTimeout(async () => {
      fn();
    });
  }
}
