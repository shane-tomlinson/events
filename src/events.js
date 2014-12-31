// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

/**
 * @class Events
 * @author Shane Tomlinson shane@shanetomlinson.com
 * @version 0.0.0
 */

// jscs: disable
// jshint ignore:start
;(function(define){define(function(require,exports,module){
// jshint ignore:end
// jscs: enable
  'use strict';

  function hasHandler(handlers, eventName) {
    return eventName in handlers;
  }

  module.exports = {
    /**
     * Add an event listener
     * @method on
     * @param {string} eventName
     * @param {function} callback
     */
    on: function (eventName, callback) {
      if (! this._handlers) {
        this._handlers = {};
      }

      this._handlers[eventName] = this._handlers[eventName] || [];
      this._handlers[eventName].push(callback);
    },

    /**
     * Remove an event listener
     * @method off
     * @param {string} eventName
     * @param {function} callback
     */
    off: function (eventName, callback) {
      if (! hasHandler(this._handlers, eventName)) {
        return;
      }

      this._handlers[eventName] = this._handlers[eventName].filter(function(handler) {
        return (! (handler === callback || handler.__wraps === callback));
      });
    },

    /**
     * Trigger one or more event listeners.
     * @method trigger
     * @param {string} eventName
     */
    trigger: function (eventName/*, args...*/) {
      if (! hasHandler(this._handlers, eventName)) {
        return;
      }

      var args = [].slice.call(arguments, 1);
      this._handlers[eventName].forEach(function(func) {
        func.apply(null, args);
      });
    },

    /**
     * Add an event listener that can be run at most one time.
     * @method once
     * @param {string} eventName
     * @param {function} callback
     */
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

// jscs: disable
// jshint ignore:start
});})(typeof define=='function'&&define.amd?define
:(function(n,w){'use strict';return typeof module=='object'?function(c){
c(require,exports,module);}:function(c){var m={exports:{}};c(function(n){
return w[n];},m.exports,m);w[n]=m.exports;};})('Events',this));
// jshint ignore:end
// jscs: enable

