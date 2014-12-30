/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


describe('events', function () {
  'use strict';

  var assert = chai.assert;

  var testObj;

  beforeEach(function () {
    testObj = Object.create(Events);
  });

  describe('on/trigger/off', function () {
    it('on attaches an event handler, trigger triggers an event, off stops listening', function () {
      var spy = sinon.spy();

      testObj.on('listen-for', spy);
      testObj.trigger('listen-for', 1, 2, 3);
      testObj.trigger('listen-for', 4, 5, 6);
      testObj.off('listen-for', spy);
      testObj.trigger('listen-for', 7, 8, 9);

      assert.isTrue(spy.calledTwice);
      assert.isTrue(spy.calledWith(1, 2, 3));
      assert.isTrue(spy.calledWith(4, 5, 6));
      assert.isFalse(spy.calledWith(7, 8, 9));
    });
  });

  describe('once/trigger', function () {
    it('only triggers an event once', function () {
      var spy = sinon.spy();

      testObj.once('listen-for', spy);
      testObj.trigger('listen-for', 1, 2, 3);
      testObj.trigger('listen-for', 4, 5, 6);

      assert.isTrue(spy.calledOnce);
      assert.isTrue(spy.calledWith(1, 2, 3));
      assert.isFalse(spy.calledWith(4, 5, 6));
    });

    it('can be removed before being triggered', function () {
      var spy = sinon.spy();

      testObj.once('listen-for', spy);
      testObj.off('listen-for', spy);

      testObj.trigger('listen-for', 1, 2, 3);

      assert.isFalse(spy.called);
    });
  });
});

