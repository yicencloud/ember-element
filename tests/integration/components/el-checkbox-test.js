import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | el-checkbox", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ElCheckbox />`);

    assert.equal(this.element.textContent.trim(), "");

    // Template block usage:
    await render(hbs`
      <ElCheckbox>
        template block text
      </ElCheckbox>
    `);

    assert.equal(this.element.textContent.trim(), "template block text");
  });

  test("it is checked", async function (assert) {
    assert.expect(2);

    this.set("value", true);

    await render(hbs`<ElCheckbox @value={{this.value}}>Option</ElCheckbox>`);

    assert.equal(
      this.element
        .querySelector(".el-checkbox")
        .classList.contains("is-checked"),
      true,
      "outer label is checked"
    );
    assert.equal(
      this.element
        .querySelector(".el-checkbox__input")
        .classList.contains("is-checked"),
      true,
      "inner span is checked"
    );
  });

  test("it is not checked", async function(assert) {
    assert.expect(2);


    this.set("value", false);

    await render(hbs`<ElCheckbox @value={{this.value}}>Option</ElCheckbox>`);

    assert.equal(
      this.element
        .querySelector(".el-checkbox")
        .classList.contains("is-checked"),
      false,
      "outer label is not checked"
    );
    assert.equal(
      this.element
        .querySelector(".el-checkbox__input")
        .classList.contains("is-checked"),
      false,
      "inner span is not checked"
    );
  });
});
