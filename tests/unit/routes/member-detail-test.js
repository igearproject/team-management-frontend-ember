import { module, test } from 'qunit';
import { setupTest } from 'frontend-ember/tests/helpers';

module('Unit | Route | member-detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:member-detail');
    assert.ok(route);
  });
});
