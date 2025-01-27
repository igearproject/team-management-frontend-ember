import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | create-product', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CreateTeam />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CreateTeam>
        template block text
      </CreateTeam>
    `);

    assert.dom().hasText('template block text');
  });
});
