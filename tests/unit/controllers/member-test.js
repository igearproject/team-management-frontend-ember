import { module, test } from 'qunit';
import { setupTest } from 'frontend-ember/tests/helpers';

module('Unit | Controller | member', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:member');
    assert.ok(controller);
  });
});
