import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | team-edit', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EditTeam />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <EditTeam>
        template block text
      </EditTeam>
    `);

    assert.dom().hasText('template block text');
  });
});
