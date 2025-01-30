import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-member', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FormMember />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FormMember>
        template block text
      </FormMember>
    `);

    assert.dom().hasText('template block text');
  });
});
