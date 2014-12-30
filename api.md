

<!-- Start src/events.js -->

## Events

Author: Shane Tomlinson shane@shanetomlinson.com

Version: 0.0.0

## on(eventName, callback)

Add an event listener

### Params:

* **string** *eventName* 
* **function** *callback* 

## off(eventName, callback)

Remove an event listener

### Params:

* **string** *eventName* 
* **function** *callback* 

## trigger(eventName)

Trigger one or more event listeners.

### Params:

* **string** *eventName* 

, args...

## once(eventName, callback)

Add an event listener that can be run at most one time.

### Params:

* **string** *eventName* 
* **function** *callback* 

<!-- End src/events.js -->

