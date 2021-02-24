"use strict";

const rsvp = require("rsvp");
const fs = require("fs-extra");
const path = require("path");
const writeFile = rsvp.denodeify(fs.writeFile);
const chalk = require("chalk");

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  name: "ember-element",

  description: "Configure ember-element",

  afterInstall() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [{ name: "ember-truth-helpers", target: "^3.0.0" }],
    })
      .then(() => {
        // Add npm packages to package.json
        return this.addPackagesToProject([
          { name: "element-ui", target: "^2.15.0" },
        ]);
      })
      .then(() => this._addStyleImport());
  },

  _addStyleImport() {
    let importStatement = '\n@import "ember-element";\n';

    let stylePath = path.join("app", "styles");

    let file = path.join(stylePath, `app.css`);

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }
    if (fs.existsSync(file)) {
      this.ui.writeLine(chalk.green(`Added import statement to ${file}`));
      return this.insertIntoFile(file, importStatement, {});
    } else {
      this.ui.writeLine(chalk.green(`Created ${file}`));
      return writeFile(file, importStatement);
    }
  },
};
