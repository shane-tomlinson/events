/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jscs: disable */
/* jshint ignore:start */
;(function(define){define(function(require,exports,module){
/* jshint ignore:end */
/* jscs: enable */
  'use strict';

  module.exports = {
    on: function (eventName, callback) {
      if (! this._handlers) {
        this._handlers = {};
      }

      this._handlers[eventName] = this._handlers[eventName] || [];
      this._handlers[eventName].push(callback);
    },

    off: function (eventName, callback) {
      if (! (this._handlers &&
             this._handlers[eventName])) {
        return;
      }

      var self = this;
      this._handlers[eventName].forEach(function(handler, index) {
        if (handler === callback ||
            handler.__wraps === callback) {
          self._handlers[eventName].splice(index, 1);
        }
      });
    },

    trigger: function (eventName/*, args...*/) {
      if (! (this._handlers &&
             this._handlers[eventName])) {
        return;
      }

      var args = [].slice.call(arguments, 1);
      this._handlers[eventName].forEach(function(func) {
        func.apply(null, args);
      });
    },

    once: function (eventName, callback) {
      var self = this;
      var handler = function () {
        self.off(eventName, handler);
        var args = [].slice.call(arguments, 0);
        callback.apply(null, args);
      };
      // used to remove the handler before being triggered.
      handler.__wraps = callback;

      self.on(eventName, handler);
    }
  };

/* jscs: disable */
/* jshint ignore:start */
});})(typeof define=='function'&&define.amd?define
:(function(n,w){'use strict';return typeof module=='object'?function(c){
c(require,exports,module);}:function(c){var m={exports:{}};c(function(n){
return w[n];},m.exports,m);w[n]=m.exports;};})('Events',this));
/* jshint ignore:end*/
/* jscs: enable */
