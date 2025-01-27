import { module, test } from 'qunit';
import { setupTest } from 'frontend-ember/tests/helpers';

module('Unit | Route | team-edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:team-edit');
    assert.ok(route);
  });
});
