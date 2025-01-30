import { module, test } from 'qunit';
import { setupTest } from 'frontend-ember/tests/helpers';

module('Unit | Route | team-detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:team-detail');
    assert.ok(route);
  });
});
