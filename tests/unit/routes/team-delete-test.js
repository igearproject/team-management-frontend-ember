import { module, test } from 'qunit';
import { setupTest } from 'frontend-ember/tests/helpers';

module('Unit | Route | team-delete', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:team-delete');
    assert.ok(route);
  });
});
