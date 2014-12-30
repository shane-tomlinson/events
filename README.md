# Events

A Backbone inspired events system.

## API:
### on(eventName, callback)

Add an event listener

#### Params:

* **string** *eventName*
* **function** *callback*

### off(eventName, callback)

Remove an event listener

#### Params:

* **string** *eventName*
* **function** *callback*

### trigger(eventName, [arguments])

Trigger one or more event listeners.

#### Params:

* **string** *eventName*
* **variant** *[arguments]*

, args...

### once(eventName, callback)

Add an event listener that can be run at most one time.

#### Params:

* **string** *eventName*
* **function** *callback*

## Author:
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson

## Get involved:

## License:
This software is available under version 2.0 of the MPL:

  https://www.mozilla.org/MPL/

