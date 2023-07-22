
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function noop() {}

  var identity = function identity(x) {
    return x;
  };

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function is_promise(value) {
    return value && _typeof(value) === 'object' && typeof value.then === 'function';
  }

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }

  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }

  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      var lets = definition[2](fn(dirty));

      if ($$scope.dirty === undefined) {
        return lets;
      }

      if (_typeof(lets) === 'object') {
        var merged = [];
        var len = Math.max($$scope.dirty.length, lets.length);

        for (var i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }

        return merged;
      }

      return $$scope.dirty | lets;
    }

    return $$scope.dirty;
  }

  function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    var slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

    if (slot_changes) {
      var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }

  var is_client = typeof window !== 'undefined';
  var now = is_client ? function () {
    return window.performance.now();
  } : function () {
    return Date.now();
  };
  var raf = is_client ? function (cb) {
    return requestAnimationFrame(cb);
  } : noop; // used internally for testing

  var tasks = new Set();

  function run_tasks(now) {
    tasks.forEach(function (task) {
      if (!task.c(now)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0) raf(run_tasks);
  }
  /**
   * Creates a new task that runs on each raf frame
   * until it returns a falsy value or is aborted
   */


  function loop(callback) {
    var task;
    if (tasks.size === 0) raf(run_tasks);
    return {
      promise: new Promise(function (fulfill) {
        tasks.add(task = {
          c: callback,
          f: fulfill
        });
      }),
      abort: function abort() {
        tasks.delete(task);
      }
    };
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function prevent_default(fn) {
    return function (event) {
      event.preventDefault(); // @ts-ignore

      return fn.call(this, event);
    };
  }

  function stop_propagation(fn) {
    return function (event) {
      event.stopPropagation(); // @ts-ignore

      return fn.call(this, event);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
  }

  function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
  }

  function custom_event(type, detail) {
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
  }

  var active_docs = new Set();
  var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

  function hash(str) {
    var hash = 5381;
    var i = str.length;

    while (i--) {
      hash = (hash << 5) - hash ^ str.charCodeAt(i);
    }

    return hash >>> 0;
  }

  function create_rule(node, a, b, duration, delay, ease, fn) {
    var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var step = 16.666 / duration;
    var keyframes = '{\n';

    for (var p = 0; p <= 1; p += step) {
      var t = a + (b - a) * ease(p);
      keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
    }

    var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
    var name = "__svelte_".concat(hash(rule), "_").concat(uid);
    var doc = node.ownerDocument;
    active_docs.add(doc);
    var stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
    var current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

    if (!current_rules[name]) {
      current_rules[name] = true;
      stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
    }

    var animation = node.style.animation || '';
    node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
    active += 1;
    return name;
  }

  function delete_rule(node, name) {
    var previous = (node.style.animation || '').split(', ');
    var next = previous.filter(name ? function (anim) {
      return anim.indexOf(name) < 0;
    } // remove specific animation
    : function (anim) {
      return anim.indexOf('__svelte') === -1;
    } // remove all Svelte animations
    );
    var deleted = previous.length - next.length;

    if (deleted) {
      node.style.animation = next.join(', ');
      active -= deleted;
      if (!active) clear_rules();
    }
  }

  function clear_rules() {
    raf(function () {
      if (active) return;
      active_docs.forEach(function (doc) {
        var stylesheet = doc.__svelte_stylesheet;
        var i = stylesheet.cssRules.length;

        while (i--) {
          stylesheet.deleteRule(i);
        }

        doc.__svelte_rules = {};
      });
      active_docs.clear();
    });
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }

  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }

  function createEventDispatcher() {
    var component = get_current_component();
    return function (type, detail) {
      var callbacks = component.$$.callbacks[type];

      if (callbacks) {
        // TODO are there situations where events could be dispatched
        // in a server (non-DOM) environment?
        var event = custom_event(type, detail);
        callbacks.slice().forEach(function (fn) {
          fn.call(component, event);
        });
      }
    };
  }
  // shorthand events, or if we want to implement
  // a real bubbling mechanism


  function bubble(component, event) {
    var callbacks = component.$$.callbacks[event.type];

    if (callbacks) {
      callbacks.slice().forEach(function (fn) {
        return fn(event);
      });
    }
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i = 0; _i < render_callbacks.length; _i += 1) {
        var callback = render_callbacks[_i];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var promise;

  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(function () {
        promise = null;
      });
    }

    return promise;
  }

  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var null_transition = {
    duration: 0
  };

  function create_in_transition(node, fn, params) {
    var config = fn(node, params);
    var running = false;
    var animation_name;
    var task;
    var uid = 0;

    function cleanup() {
      if (animation_name) delete_rule(node, animation_name);
    }

    function go() {
      var _ref = config || null_transition,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 300 : _ref$duration,
          _ref$easing = _ref.easing,
          easing = _ref$easing === void 0 ? identity : _ref$easing,
          _ref$tick = _ref.tick,
          tick = _ref$tick === void 0 ? noop : _ref$tick,
          css = _ref.css;

      if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
      tick(0, 1);
      var start_time = now() + delay;
      var end_time = start_time + duration;
      if (task) task.abort();
      running = true;
      add_render_callback(function () {
        return dispatch(node, true, 'start');
      });
      task = loop(function (now) {
        if (running) {
          if (now >= end_time) {
            tick(1, 0);
            dispatch(node, true, 'end');
            cleanup();
            return running = false;
          }

          if (now >= start_time) {
            var t = easing((now - start_time) / duration);
            tick(t, 1 - t);
          }
        }

        return running;
      });
    }

    var started = false;
    return {
      start: function start() {
        if (started) return;
        delete_rule(node);

        if (is_function(config)) {
          config = config();
          wait().then(go);
        } else {
          go();
        }
      },
      invalidate: function invalidate() {
        started = false;
      },
      end: function end() {
        if (running) {
          cleanup();
          running = false;
        }
      }
    };
  }

  function create_out_transition(node, fn, params) {
    var config = fn(node, params);
    var running = true;
    var animation_name;
    var group = outros;
    group.r += 1;

    function go() {
      var _ref2 = config || null_transition,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === void 0 ? 300 : _ref2$duration,
          _ref2$easing = _ref2.easing,
          easing = _ref2$easing === void 0 ? identity : _ref2$easing,
          _ref2$tick = _ref2.tick,
          tick = _ref2$tick === void 0 ? noop : _ref2$tick,
          css = _ref2.css;

      if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
      var start_time = now() + delay;
      var end_time = start_time + duration;
      add_render_callback(function () {
        return dispatch(node, false, 'start');
      });
      loop(function (now) {
        if (running) {
          if (now >= end_time) {
            tick(0, 1);
            dispatch(node, false, 'end');

            if (! --group.r) {
              // this will result in `end()` being called,
              // so we don't need to clean up here
              run_all(group.c);
            }

            return false;
          }

          if (now >= start_time) {
            var t = easing((now - start_time) / duration);
            tick(1 - t, t);
          }
        }

        return running;
      });
    }

    if (is_function(config)) {
      wait().then(function () {
        // @ts-ignore
        config = config();
        go();
      });
    } else {
      go();
    }

    return {
      end: function end(reset) {
        if (reset && config.tick) {
          config.tick(1, 0);
        }

        if (running) {
          if (animation_name) delete_rule(node, animation_name);
          running = false;
        }
      }
    };
  }

  function create_bidirectional_transition(node, fn, params, intro) {
    var config = fn(node, params);
    var t = intro ? 0 : 1;
    var running_program = null;
    var pending_program = null;
    var animation_name = null;

    function clear_animation() {
      if (animation_name) delete_rule(node, animation_name);
    }

    function init(program, duration) {
      var d = program.b - t;
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d: d,
        duration: duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }

    function go(b) {
      var _ref3 = config || null_transition,
          _ref3$delay = _ref3.delay,
          delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === void 0 ? 300 : _ref3$duration,
          _ref3$easing = _ref3.easing,
          easing = _ref3$easing === void 0 ? identity : _ref3$easing,
          _ref3$tick = _ref3.tick,
          tick = _ref3$tick === void 0 ? noop : _ref3$tick,
          css = _ref3.css;

      var program = {
        start: now() + delay,
        b: b
      };

      if (!b) {
        // @ts-ignore todo: improve typings
        program.group = outros;
        outros.r += 1;
      }

      if (running_program || pending_program) {
        pending_program = program;
      } else {
        // if this is an intro, and there's a delay, we need to do
        // an initial tick and/or apply CSS animation immediately
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b, duration, delay, easing, css);
        }

        if (b) tick(0, 1);
        running_program = init(program, duration);
        add_render_callback(function () {
          return dispatch(node, b, 'start');
        });
        loop(function (now) {
          if (pending_program && now > pending_program.start) {
            running_program = init(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, 'start');

            if (css) {
              clear_animation();
              animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
            }
          }

          if (running_program) {
            if (now >= running_program.end) {
              tick(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, 'end');

              if (!pending_program) {
                // we're done
                if (running_program.b) {
                  // intro — we can tidy up immediately
                  clear_animation();
                } else {
                  // outro — needs to be coordinated
                  if (! --running_program.group.r) run_all(running_program.group.c);
                }
              }

              running_program = null;
            } else if (now >= running_program.start) {
              var p = now - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick(t, 1 - t);
            }
          }

          return !!(running_program || pending_program);
        });
      }
    }

    return {
      run: function run(b) {
        if (is_function(config)) {
          wait().then(function () {
            // @ts-ignore
            config = config();
            go(b);
          });
        } else {
          go(b);
        }
      },
      end: function end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }

  function handle_promise(promise, info) {
    var token = info.token = {};

    function update(type, index, key, value) {
      if (info.token !== token) return;
      info.resolved = value;
      var child_ctx = info.ctx;

      if (key !== undefined) {
        child_ctx = child_ctx.slice();
        child_ctx[key] = value;
      }

      var block = type && (info.current = type)(child_ctx);
      var needs_flush = false;

      if (info.block) {
        if (info.blocks) {
          info.blocks.forEach(function (block, i) {
            if (i !== index && block) {
              group_outros();
              transition_out(block, 1, 1, function () {
                info.blocks[i] = null;
              });
              check_outros();
            }
          });
        } else {
          info.block.d(1);
        }

        block.c();
        transition_in(block, 1);
        block.m(info.mount(), info.anchor);
        needs_flush = true;
      }

      info.block = block;
      if (info.blocks) info.blocks[index] = block;

      if (needs_flush) {
        flush();
      }
    }

    if (is_promise(promise)) {
      var _current_component = get_current_component();

      promise.then(function (value) {
        set_current_component(_current_component);
        update(info.then, 1, info.value, value);
        set_current_component(null);
      }, function (error) {
        set_current_component(_current_component);
        update(info.catch, 2, info.error, error);
        set_current_component(null);

        if (!info.hasCatch) {
          throw error;
        }
      }); // if we previously had a then/catch block, destroy it

      if (info.current !== info.pending) {
        update(info.pending, 0);
        return true;
      }
    } else {
      if (info.current !== info.then) {
        update(info.then, 1, info.value, promise);
        return true;
      }

      info.resolved = promise;
    }
  }

  var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

  function bind(component, name, callback) {
    var index = component.$$.props[name];

    if (index !== undefined) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.29.4'
    }, detail)));
  }

  function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev('SvelteDOMRemoveEventListener', {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      dispose();
    };
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
      node: node,
      attribute: attribute
    });else dispatch_dev('SvelteDOMSetAttribute', {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', {
      node: text,
      data: data
    });
    text.data = data;
  }

  function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
      var msg = '{#each} only iterates over array-like objects.';

      if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
        msg += ' You can use a spread to convert this iterable into an array.';
      }

      throw new Error(msg);
    }
  }

  function validate_slots(name, slot, keys) {
    for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
      var slot_key = _Object$keys[_i2];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }

  var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(SvelteComponentDev, _SvelteComponent);

    var _super2 = _createSuper(SvelteComponentDev);

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _super2.call(this);
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
      }
    }, {
      key: "$capture_state",
      value: function $capture_state() {}
    }, {
      key: "$inject_state",
      value: function $inject_state() {}
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  }

  function fade(node, _ref2) {
    var _ref2$delay = _ref2.delay,
        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? identity : _ref2$easing;
    var o = +getComputedStyle(node).opacity;
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t) {
        return "opacity: ".concat(t * o);
      }
    };
  }

  function fly(node, _ref3) {
    var _ref3$delay = _ref3.delay,
        delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
        _ref3$easing = _ref3.easing,
        easing = _ref3$easing === void 0 ? cubicOut : _ref3$easing,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y,
        _ref3$opacity = _ref3.opacity,
        opacity = _ref3$opacity === void 0 ? 0 : _ref3$opacity;
    var style = getComputedStyle(node);
    var target_opacity = +style.opacity;
    var transform = style.transform === 'none' ? '' : style.transform;
    var od = target_opacity * (1 - opacity);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t, u) {
        return "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u);
      }
    };
  }

  function scale(node, _ref5) {
    var _ref5$delay = _ref5.delay,
        delay = _ref5$delay === void 0 ? 0 : _ref5$delay,
        _ref5$duration = _ref5.duration,
        duration = _ref5$duration === void 0 ? 400 : _ref5$duration,
        _ref5$easing = _ref5.easing,
        easing = _ref5$easing === void 0 ? cubicOut : _ref5$easing,
        _ref5$start = _ref5.start,
        start = _ref5$start === void 0 ? 0 : _ref5$start,
        _ref5$opacity = _ref5.opacity,
        opacity = _ref5$opacity === void 0 ? 0 : _ref5$opacity;
    var style = getComputedStyle(node);
    var target_opacity = +style.opacity;
    var transform = style.transform === 'none' ? '' : style.transform;
    var sd = 1 - start;
    var od = target_opacity * (1 - opacity);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(_t, u) {
        return "\n\t\t\ttransform: ".concat(transform, " scale(").concat(1 - sd * u, ");\n\t\t\topacity: ").concat(target_opacity - od * u, "\n\t\t");
      }
    };
  }

  var file = "src\\components\\Navigation.svelte"; // (41:4) {:else}

  function create_else_block(ctx) {
    var div;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "☰";
        attr_dev(div, "class", "mobile-menu-open svelte-5xezfq");
        add_location(div, file, 41, 8, 1503);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (!mounted) {
          dispose = listen_dev(div, "click",
          /*click_handler_1*/
          ctx[8], false, false, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block.name,
      type: "else",
      source: "(41:4) {:else}",
      ctx: ctx
    });
    return block;
  } // (39:4) {#if mobileOpen}


  function create_if_block_1(ctx) {
    var div;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "✖";
        attr_dev(div, "class", "mobile-menu-close svelte-5xezfq");
        add_location(div, file, 39, 8, 1399);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (!mounted) {
          dispose = listen_dev(div, "click",
          /*click_handler*/
          ctx[7], false, false, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1.name,
      type: "if",
      source: "(39:4) {#if mobileOpen}",
      ctx: ctx
    });
    return block;
  } // (46:0) {#if scrollTop > 50 && !forceOpen && !subpageOpen}


  function create_if_block(ctx) {
    var div;
    var div_transition;
    var current;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "☰";
        attr_dev(div, "class", "forceOpen svelte-5xezfq");
        toggle_class(div, "onTop",
        /*scrollTop*/
        ctx[2] > 500);
        add_location(div, file, 46, 4, 1660);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        current = true;

        if (!mounted) {
          dispose = listen_dev(div, "click",
          /*click_handler_2*/
          ctx[9], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*scrollTop*/
        4) {
          toggle_class(div, "onTop",
          /*scrollTop*/
          ctx[2] > 500);
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!div_transition) div_transition = create_bidirectional_transition(div, fly, {
            y: -50
          }, true);
          div_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!div_transition) div_transition = create_bidirectional_transition(div, fly, {
          y: -50
        }, false);
        div_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (detaching && div_transition) div_transition.end();
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(46:0) {#if scrollTop > 50 && !forceOpen && !subpageOpen}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment(ctx) {
    var nav;
    var span;
    var a0;
    var t1;
    var a1;
    var t3;
    var a2;
    var t5;
    var a3;
    var t7;
    var a4;
    var t9;
    var t10;
    var if_block1_anchor;
    var current;

    function select_block_type(ctx, dirty) {
      if (
      /*mobileOpen*/
      ctx[0]) return create_if_block_1;
      return create_else_block;
    }

    var current_block_type = select_block_type(ctx);
    var if_block0 = current_block_type(ctx);
    var if_block1 =
    /*scrollTop*/
    ctx[2] > 50 && !
    /*forceOpen*/
    ctx[5] && !
    /*subpageOpen*/
    ctx[3] && create_if_block(ctx);
    var block = {
      c: function create() {
        nav = element("nav");
        span = element("span");
        a0 = element("a");
        a0.textContent = "Home";
        t1 = space();
        a1 = element("a");
        a1.textContent = "About Us";
        t3 = space();
        a2 = element("a");
        a2.textContent = "Worship";
        t5 = space();
        a3 = element("a");
        a3.textContent = "Ministries";
        t7 = space();
        a4 = element("a");
        a4.textContent = "Resources";
        t9 = space();
        if_block0.c();
        t10 = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
        attr_dev(a0, "href", "#home");
        attr_dev(a0, "class", "svelte-5xezfq");
        toggle_class(a0, "inactive", !
        /*curPage*/
        ctx[4] ||
        /*curPage*/
        ctx[4] == "#home");
        add_location(a0, file, 32, 8, 962);
        attr_dev(a1, "href", "#about");
        attr_dev(a1, "class", "svelte-5xezfq");
        toggle_class(a1, "inactive",
        /*curPage*/
        ctx[4] == "#about");
        add_location(a1, file, 33, 8, 1044);
        attr_dev(a2, "href", "#worship");
        attr_dev(a2, "class", "svelte-5xezfq");
        toggle_class(a2, "inactive",
        /*curPage*/
        ctx[4] == "#worship");
        add_location(a2, file, 34, 8, 1120);
        attr_dev(a3, "href", "#ministries");
        attr_dev(a3, "class", "svelte-5xezfq");
        toggle_class(a3, "inactive",
        /*curPage*/
        ctx[4] == "#ministries");
        add_location(a3, file, 35, 8, 1199);
        attr_dev(a4, "href", "#links");
        attr_dev(a4, "class", "svelte-5xezfq");
        toggle_class(a4, "inactive",
        /*curPage*/
        ctx[4] == "#links");
        add_location(a4, file, 36, 8, 1287);
        attr_dev(span, "class", "nav-links svelte-5xezfq");
        toggle_class(span, "shown",
        /*mobileOpen*/
        ctx[0]);
        add_location(span, file, 31, 4, 903);
        attr_dev(nav, "class", "svelte-5xezfq");
        toggle_class(nav, "subpageStyle",
        /*subpageStyle*/
        ctx[1]);
        toggle_class(nav, "mobileOpen",
        /*mobileOpen*/
        ctx[0]);
        toggle_class(nav, "hidden",
        /*scrollTop*/
        ctx[2] > 50 && !
        /*subpageStyle*/
        ctx[1] && !
        /*forceOpen*/
        ctx[5]);
        toggle_class(nav, "onTop",
        /*scrollTop*/
        ctx[2] > 500);
        add_location(nav, file, 30, 0, 737);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, nav, anchor);
        append_dev(nav, span);
        append_dev(span, a0);
        append_dev(span, t1);
        append_dev(span, a1);
        append_dev(span, t3);
        append_dev(span, a2);
        append_dev(span, t5);
        append_dev(span, a3);
        append_dev(span, t7);
        append_dev(span, a4);
        append_dev(nav, t9);
        if_block0.m(nav, null);
        insert_dev(target, t10, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert_dev(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*curPage*/
        16) {
          toggle_class(a0, "inactive", !
          /*curPage*/
          ctx[4] ||
          /*curPage*/
          ctx[4] == "#home");
        }

        if (dirty &
        /*curPage*/
        16) {
          toggle_class(a1, "inactive",
          /*curPage*/
          ctx[4] == "#about");
        }

        if (dirty &
        /*curPage*/
        16) {
          toggle_class(a2, "inactive",
          /*curPage*/
          ctx[4] == "#worship");
        }

        if (dirty &
        /*curPage*/
        16) {
          toggle_class(a3, "inactive",
          /*curPage*/
          ctx[4] == "#ministries");
        }

        if (dirty &
        /*curPage*/
        16) {
          toggle_class(a4, "inactive",
          /*curPage*/
          ctx[4] == "#links");
        }

        if (dirty &
        /*mobileOpen*/
        1) {
          toggle_class(span, "shown",
          /*mobileOpen*/
          ctx[0]);
        }

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0.d(1);
          if_block0 = current_block_type(ctx);

          if (if_block0) {
            if_block0.c();
            if_block0.m(nav, null);
          }
        }

        if (dirty &
        /*subpageStyle*/
        2) {
          toggle_class(nav, "subpageStyle",
          /*subpageStyle*/
          ctx[1]);
        }

        if (dirty &
        /*mobileOpen*/
        1) {
          toggle_class(nav, "mobileOpen",
          /*mobileOpen*/
          ctx[0]);
        }

        if (dirty &
        /*scrollTop, subpageStyle, forceOpen*/
        38) {
          toggle_class(nav, "hidden",
          /*scrollTop*/
          ctx[2] > 50 && !
          /*subpageStyle*/
          ctx[1] && !
          /*forceOpen*/
          ctx[5]);
        }

        if (dirty &
        /*scrollTop*/
        4) {
          toggle_class(nav, "onTop",
          /*scrollTop*/
          ctx[2] > 500);
        }

        if (
        /*scrollTop*/
        ctx[2] > 50 && !
        /*forceOpen*/
        ctx[5] && !
        /*subpageOpen*/
        ctx[3]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*scrollTop, forceOpen, subpageOpen*/
            44) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(nav);
        if_block0.d();
        if (detaching) detach_dev(t10);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach_dev(if_block1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Navigation", slots, []);
    var mobileOpen = $$props.mobileOpen;
    var _$$props$subpageStyle = $$props.subpageStyle,
        subpageStyle = _$$props$subpageStyle === void 0 ? false : _$$props$subpageStyle;
    var scrollTop = $$props.scrollTop;
    var subpageOpen = $$props.subpageOpen;
    var main = $$props.main;
    var curPage = $$props.curPage;
    var forceOpen = false;

    function scrollListener() {
      if (scrollTop > 50) {
        $$invalidate(5, forceOpen = false);
      }
    }

    onMount(function () {
      if (!subpageStyle) document.getElementsByClassName("main")[0].addEventListener("scroll", scrollListener);
    });
    onDestroy(function () {
      if (!subpageStyle) document.getElementsByClassName("main")[0].removeEventListener("scroll", scrollListener);
    });
    var writable_props = ["mobileOpen", "subpageStyle", "scrollTop", "subpageOpen", "main", "curPage"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Navigation> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      $$invalidate(0, mobileOpen = false);
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(0, mobileOpen = true);
    };

    var click_handler_2 = function click_handler_2() {
      $$invalidate(5, forceOpen = true);
    };

    $$self.$$set = function ($$props) {
      if ("mobileOpen" in $$props) $$invalidate(0, mobileOpen = $$props.mobileOpen);
      if ("subpageStyle" in $$props) $$invalidate(1, subpageStyle = $$props.subpageStyle);
      if ("scrollTop" in $$props) $$invalidate(2, scrollTop = $$props.scrollTop);
      if ("subpageOpen" in $$props) $$invalidate(3, subpageOpen = $$props.subpageOpen);
      if ("main" in $$props) $$invalidate(6, main = $$props.main);
      if ("curPage" in $$props) $$invalidate(4, curPage = $$props.curPage);
    };

    $$self.$capture_state = function () {
      return {
        fly: fly,
        onMount: onMount,
        onDestroy: onDestroy,
        mobileOpen: mobileOpen,
        subpageStyle: subpageStyle,
        scrollTop: scrollTop,
        subpageOpen: subpageOpen,
        main: main,
        curPage: curPage,
        forceOpen: forceOpen,
        scrollListener: scrollListener
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("mobileOpen" in $$props) $$invalidate(0, mobileOpen = $$props.mobileOpen);
      if ("subpageStyle" in $$props) $$invalidate(1, subpageStyle = $$props.subpageStyle);
      if ("scrollTop" in $$props) $$invalidate(2, scrollTop = $$props.scrollTop);
      if ("subpageOpen" in $$props) $$invalidate(3, subpageOpen = $$props.subpageOpen);
      if ("main" in $$props) $$invalidate(6, main = $$props.main);
      if ("curPage" in $$props) $$invalidate(4, curPage = $$props.curPage);
      if ("forceOpen" in $$props) $$invalidate(5, forceOpen = $$props.forceOpen);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [mobileOpen, subpageStyle, scrollTop, subpageOpen, curPage, forceOpen, main, click_handler, click_handler_1, click_handler_2];
  }

  var Navigation = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Navigation, _SvelteComponentDev);

    var _super = _createSuper(Navigation);

    function Navigation(options) {
      var _this;

      _classCallCheck(this, Navigation);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        mobileOpen: 0,
        subpageStyle: 1,
        scrollTop: 2,
        subpageOpen: 3,
        main: 6,
        curPage: 4
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Navigation",
        options: options,
        id: create_fragment.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*mobileOpen*/
      ctx[0] === undefined && !("mobileOpen" in props)) {
        console.warn("<Navigation> was created without expected prop 'mobileOpen'");
      }

      if (
      /*scrollTop*/
      ctx[2] === undefined && !("scrollTop" in props)) {
        console.warn("<Navigation> was created without expected prop 'scrollTop'");
      }

      if (
      /*subpageOpen*/
      ctx[3] === undefined && !("subpageOpen" in props)) {
        console.warn("<Navigation> was created without expected prop 'subpageOpen'");
      }

      if (
      /*main*/
      ctx[6] === undefined && !("main" in props)) {
        console.warn("<Navigation> was created without expected prop 'main'");
      }

      if (
      /*curPage*/
      ctx[4] === undefined && !("curPage" in props)) {
        console.warn("<Navigation> was created without expected prop 'curPage'");
      }

      return _this;
    }

    _createClass(Navigation, [{
      key: "mobileOpen",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "subpageStyle",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "scrollTop",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "subpageOpen",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "main",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "curPage",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Navigation;
  }(SvelteComponentDev);

  var console_1 = globals.console,
      window_1 = globals.window;
  var file$1 = "src\\components\\Slideshow.svelte"; // (1:0) <script>      import {onMount}

  function create_catch_block(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block.name,
      type: "catch",
      source: "(1:0) <script>      import {onMount}",
      ctx: ctx
    });
    return block;
  } // (104:4) {:then images}


  function create_then_block(ctx) {
    var t;
    var if_block1_anchor;
    var current;
    var if_block0 =
    /*showImg*/
    ctx[3] && create_if_block_2(ctx);
    var if_block1 =
    /*showCaptions*/
    ctx[2] && create_if_block$1(ctx);
    var block = {
      c: function create() {
        if (if_block0) if_block0.c();
        t = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block0) if_block0.m(target, anchor);
        insert_dev(target, t, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert_dev(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (
        /*showImg*/
        ctx[3]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty &
            /*showImg*/
            8) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_2(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t.parentNode, t);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, function () {
            if_block0 = null;
          });
          check_outros();
        }

        if (
        /*showCaptions*/
        ctx[2]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*showCaptions*/
            4) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$1(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach_dev(t);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach_dev(if_block1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block.name,
      type: "then",
      source: "(104:4) {:then images}",
      ctx: ctx
    });
    return block;
  } // (105:8) {#if showImg}


  function create_if_block_2(ctx) {
    var picture;
    var img;
    var img_src_value;
    var img_transition;
    var t;
    var if_block_anchor;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].caption &&
    /*showCaptions*/
    ctx[2] && create_if_block_3(ctx);
    var block = {
      c: function create() {
        picture = element("picture");
        img = element("img");
        t = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr_dev(img, "class", "slideshow svelte-oev82h");
        if (img.src !== (img_src_value =
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        set_style(img, "transform", "translateY(" +
        /*scrollTop*/
        ctx[0] / 5 + "px)");
        set_style(img, "object-position",
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].focus ?
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].focus : "50% 50%");
        add_location(img, file$1, 106, 16, 2907);
        add_location(picture, file$1, 105, 12, 2880);
      },
      m: function mount(target, anchor) {
        insert_dev(target, picture, anchor);
        append_dev(picture, img);
        insert_dev(target, t, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;

        if (!mounted) {
          dispose = listen_dev(img, "outroend", function () {
            if (is_function(
            /*goBack*/
            ctx[4] ?
            /*prevImg*/
            ctx[13](
            /*images*/
            ctx[23]) :
            /*nextImg*/
            ctx[12](
            /*images*/
            ctx[23]))) (
            /*goBack*/
            ctx[4] ?
            /*prevImg*/
            ctx[13](
            /*images*/
            ctx[23]) :
            /*nextImg*/
            ctx[12](
            /*images*/
            ctx[23])).apply(this, arguments);
          }, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;

        if (!current || dirty &
        /*currentImg*/
        512 && img.src !== (img_src_value =
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].src)) {
          attr_dev(img, "src", img_src_value);
        }

        if (!current || dirty &
        /*scrollTop*/
        1) {
          set_style(img, "transform", "translateY(" +
          /*scrollTop*/
          ctx[0] / 5 + "px)");
        }

        if (!current || dirty &
        /*currentImg*/
        512) {
          set_style(img, "object-position",
          /*images*/
          ctx[23][
          /*currentImg*/
          ctx[9]].focus ?
          /*images*/
          ctx[23][
          /*currentImg*/
          ctx[9]].focus : "50% 50%");
        }

        if (
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].caption &&
        /*showCaptions*/
        ctx[2]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*currentImg, showCaptions*/
            516) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_3(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!img_transition) img_transition = create_bidirectional_transition(img, fade, {}, true);
          img_transition.run(1);
        });
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        if (!img_transition) img_transition = create_bidirectional_transition(img, fade, {}, false);
        img_transition.run(0);
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(picture);
        if (detaching && img_transition) img_transition.end();
        if (detaching) detach_dev(t);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2.name,
      type: "if",
      source: "(105:8) {#if showImg}",
      ctx: ctx
    });
    return block;
  } // (113:12) {#if images[currentImg].caption && showCaptions}


  function create_if_block_3(ctx) {
    var div;
    var div_transition;
    var current;

    function select_block_type(ctx, dirty) {
      if (window.innerWidth >= 500) return create_if_block_4;
      return create_else_block_1;
    }

    var current_block_type = select_block_type();
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div = element("div");
        if_block.c();
        attr_dev(div, "class", "caption svelte-oev82h");
        add_location(div, file$1, 113, 16, 3359);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        if_block.m(div, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if_block.p(ctx, dirty);
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
          div_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
        div_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if_block.d();
        if (detaching && div_transition) div_transition.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3.name,
      type: "if",
      source: "(113:12) {#if images[currentImg].caption && showCaptions}",
      ctx: ctx
    });
    return block;
  } // (121:20) {:else}


  function create_else_block_1(ctx) {
    var a;
    var t_value =
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].heading + "";
    var t;
    var a_href_value;
    var block = {
      c: function create() {
        a = element("a");
        t = text(t_value);
        attr_dev(a, "href", a_href_value = "#article/" +
        /*currentImg*/
        ctx[9]);
        attr_dev(a, "class", "svelte-oev82h");
        add_location(a, file$1, 121, 24, 3834);
      },
      m: function mount(target, anchor) {
        insert_dev(target, a, anchor);
        append_dev(a, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*currentImg*/
        512 && t_value !== (t_value =
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].heading + "")) set_data_dev(t, t_value);

        if (dirty &
        /*currentImg*/
        512 && a_href_value !== (a_href_value = "#article/" +
        /*currentImg*/
        ctx[9])) {
          attr_dev(a, "href", a_href_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_1.name,
      type: "else",
      source: "(121:20) {:else}",
      ctx: ctx
    });
    return block;
  } // (115:20) {#if window.innerWidth >= 500}


  function create_if_block_4(ctx) {
    var h2;
    var t0_value =
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].heading + "";
    var t0;
    var t1;
    var t2_value =
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].caption + "";
    var t2;
    var t3;
    var if_block_anchor;
    var if_block =
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].linkto &&
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].linktext && create_if_block_5(ctx);
    var block = {
      c: function create() {
        h2 = element("h2");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
        t3 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr_dev(h2, "class", "svelte-oev82h");
        add_location(h2, file$1, 115, 24, 3474);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h2, anchor);
        append_dev(h2, t0);
        insert_dev(target, t1, anchor);
        insert_dev(target, t2, anchor);
        insert_dev(target, t3, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*currentImg*/
        512 && t0_value !== (t0_value =
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].heading + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*currentImg*/
        512 && t2_value !== (t2_value =
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].caption + "")) set_data_dev(t2, t2_value);

        if (
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].linkto &&
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].linktext) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_5(ctx);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h2);
        if (detaching) detach_dev(t1);
        if (detaching) detach_dev(t2);
        if (detaching) detach_dev(t3);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_4.name,
      type: "if",
      source: "(115:20) {#if window.innerWidth >= 500}",
      ctx: ctx
    });
    return block;
  } // (118:24) {#if images[currentImg].linkto && images[currentImg].linktext}


  function create_if_block_5(ctx) {
    var a;
    var t_value =
    /*images*/
    ctx[23][
    /*currentImg*/
    ctx[9]].linktext + "";
    var t;
    var a_href_value;
    var block = {
      c: function create() {
        a = element("a");
        t = text(t_value);
        attr_dev(a, "href", a_href_value = "#article/" +
        /*currentImg*/
        ctx[9]);
        attr_dev(a, "class", "svelte-oev82h");
        add_location(a, file$1, 118, 28, 3683);
      },
      m: function mount(target, anchor) {
        insert_dev(target, a, anchor);
        append_dev(a, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*currentImg*/
        512 && t_value !== (t_value =
        /*images*/
        ctx[23][
        /*currentImg*/
        ctx[9]].linktext + "")) set_data_dev(t, t_value);

        if (dirty &
        /*currentImg*/
        512 && a_href_value !== (a_href_value = "#article/" +
        /*currentImg*/
        ctx[9])) {
          attr_dev(a, "href", a_href_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_5.name,
      type: "if",
      source: "(118:24) {#if images[currentImg].linkto && images[currentImg].linktext}",
      ctx: ctx
    });
    return block;
  } // (127:8) {#if showCaptions}


  function create_if_block$1(ctx) {
    var div2;
    var img0;
    var img0_src_value;
    var t0;
    var t1;
    var img1;
    var img1_src_value;
    var t2;
    var div1;
    var div0;
    var div2_transition;
    var current;
    var mounted;
    var dispose;

    function select_block_type_1(ctx, dirty) {
      if (
      /*paused*/
      ctx[5]) return create_if_block_1$1;
      return create_else_block$1;
    }

    var current_block_type = select_block_type_1(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div2 = element("div");
        img0 = element("img");
        t0 = space();
        if_block.c();
        t1 = space();
        img1 = element("img");
        t2 = space();
        div1 = element("div");
        div0 = element("div");
        if (img0.src !== (img0_src_value = "/icons/prev.svg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "Previous slide");
        attr_dev(img0, "class", "svelte-oev82h");
        add_location(img0, file$1, 128, 16, 4081);
        if (img1.src !== (img1_src_value = "/icons/next.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Next slide");
        attr_dev(img1, "class", "svelte-oev82h");
        add_location(img1, file$1, 134, 16, 4517);
        attr_dev(div0, "class", "timer-fill svelte-oev82h");
        set_style(div0, "max-width",
        /*timeLeft*/
        ctx[6] * 100 /
        /*slideShowTime*/
        ctx[10] + "%");
        add_location(div0, file$1, 136, 20, 4677);
        attr_dev(div1, "class", "timer-container svelte-oev82h");
        add_location(div1, file$1, 135, 16, 4626);
        attr_dev(div2, "class", "controls svelte-oev82h");
        add_location(div2, file$1, 127, 12, 4025);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, img0);
        append_dev(div2, t0);
        if_block.m(div2, null);
        append_dev(div2, t1);
        append_dev(div2, img1);
        append_dev(div2, t2);
        append_dev(div2, div1);
        append_dev(div1, div0);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(img0, "click",
          /*click_handler*/
          ctx[19], false, false, false), listen_dev(img1, "click",
          /*click_handler_2*/
          ctx[21], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div2, t1);
          }
        }

        if (!current || dirty &
        /*timeLeft*/
        64) {
          set_style(div0, "max-width",
          /*timeLeft*/
          ctx[6] * 100 /
          /*slideShowTime*/
          ctx[10] + "%");
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!div2_transition) div2_transition = create_bidirectional_transition(div2, fade, {}, true);
          div2_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!div2_transition) div2_transition = create_bidirectional_transition(div2, fade, {}, false);
        div2_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if_block.d();
        if (detaching && div2_transition) div2_transition.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(127:8) {#if showCaptions}",
      ctx: ctx
    });
    return block;
  } // (132:16) {:else}


  function create_else_block$1(ctx) {
    var img;
    var img_src_value;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        img = element("img");
        if (img.src !== (img_src_value = "/icons/pause.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Pause slideshow");
        attr_dev(img, "class", "svelte-oev82h");
        add_location(img, file$1, 132, 20, 4381);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);

        if (!mounted) {
          dispose = listen_dev(img, "click",
          /*click_handler_1*/
          ctx[20], false, false, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$1.name,
      type: "else",
      source: "(132:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (130:16) {#if paused}


  function create_if_block_1$1(ctx) {
    var img;
    var img_src_value;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        img = element("img");
        if (img.src !== (img_src_value = "/icons/play.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Play slideshow");
        attr_dev(img, "class", "svelte-oev82h");
        add_location(img, file$1, 130, 20, 4264);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);

        if (!mounted) {
          dispose = listen_dev(img, "click",
          /*startTimer*/
          ctx[14], false, false, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(130:16) {#if paused}",
      ctx: ctx
    });
    return block;
  } // (100:46)           <div class='loader'>              <img src='/icons/loading.svg' alt='loading content'>          </div>      {:then images}


  function create_pending_block(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$1, 101, 12, 2755);
        attr_dev(div, "class", "loader");
        add_location(div, file$1, 100, 8, 2721);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block.name,
      type: "pending",
      source: "(100:46)           <div class='loader'>              <img src='/icons/loading.svg' alt='loading content'>          </div>      {:then images}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$1(ctx) {
    var div;
    var promise;
    var div_style_value;
    var current;
    var mounted;
    var dispose;
    add_render_callback(
    /*onwindowresize*/
    ctx[18]);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block,
      then: create_then_block,
      catch: create_catch_block,
      value: 23,
      blocks: [,,,]
    };
    handle_promise(promise =
    /*getImages*/
    ctx[11]("/data/slideshow.json"), info);
    var block = {
      c: function create() {
        div = element("div");
        info.block.c();
        attr_dev(div, "class", "slideshow-wrapper svelte-oev82h");
        attr_dev(div, "style", div_style_value =
        /*winWidth*/
        ctx[7] < 1000 ? "transform: translateY(" + (
        /*header*/
        ctx[1].clientHeight - 50) + "px); height: " + (
        /*winHeight*/
        ctx[8] -
        /*header*/
        ctx[1].clientHeight + 50) + "px;" : "");
        add_location(div, file$1, 98, 0, 2480);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        info.block.m(div, info.anchor = null);

        info.mount = function () {
          return div;
        };

        info.anchor = null;
        current = true;

        if (!mounted) {
          dispose = listen_dev(window_1, "resize",
          /*onwindowresize*/
          ctx[18]);
          mounted = true;
        }
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;
        {
          var child_ctx = ctx.slice();
          child_ctx[23] = info.resolved;
          info.block.p(child_ctx, dirty);
        }

        if (!current || dirty &
        /*winWidth, header, winHeight*/
        386 && div_style_value !== (div_style_value =
        /*winWidth*/
        ctx[7] < 1000 ? "transform: translateY(" + (
        /*header*/
        ctx[1].clientHeight - 50) + "px); height: " + (
        /*winHeight*/
        ctx[8] -
        /*header*/
        ctx[1].clientHeight + 50) + "px;" : "")) {
          attr_dev(div, "style", div_style_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(info.block);
        current = true;
      },
      o: function outro(local) {
        for (var i = 0; i < 3; i += 1) {
          var _block = info.blocks[i];
          transition_out(_block);
        }

        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        info.block.d();
        info.token = null;
        info = null;
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function preload(images) {
    return new Promise(function (resolve, reject) {
      var _iterator = _createForOfIteratorHelper(images),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var image = _step.value;
          var img = new Image();
          img.src = image.src;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      resolve(images);
    });
  }

  function instance$1($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Slideshow", slots, []);
    var scrollTop = $$props.scrollTop;
    var showCaptions = true;
    var showImg = true;
    var goBack = false;
    var interval;
    var paused = false;
    var slideShowTime = 10000;
    var timeLeft = slideShowTime;
    var winWidth;
    var winHeight;
    var header = $$props.header;
    var subpageOpen = $$props.subpageOpen;
    var getPageData = $$props.getPageData;

    function getImages(loc) {
      return new Promise(function (resolve, reject) {
        getPageData(loc).then(function (images) {
          preload(images).then(function (results) {
            startTimer();
            resolve(results);
          }).catch(function (err) {
            console.log(err);
            reject(err);
          });
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }

    var currentImg = 0; //Change images

    function nextImg(images) {
      console.log("next");
      $$invalidate(3, showImg = true);
      $$invalidate(6, timeLeft = slideShowTime);
      startTimer();
      $$invalidate(9, currentImg += 1);
      if (currentImg > images.length - 1) $$invalidate(9, currentImg = 0);
    }

    function prevImg(images) {
      console.log("back");
      $$invalidate(3, showImg = true);
      $$invalidate(6, timeLeft = slideShowTime);
      startTimer();
      $$invalidate(9, currentImg -= 1);
      if (currentImg < 0) $$invalidate(9, currentImg = images.length - 1);
      $$invalidate(4, goBack = false);
    }

    function startTimer() {
      $$invalidate(5, paused = false);
      interval = setInterval(function () {
        if (!subpageOpen && showCaptions) {
          $$invalidate(6, timeLeft -= 10);

          if (!timeLeft) {
            $$invalidate(3, showImg = false);
            $$invalidate(6, timeLeft = slideShowTime);
            clearInterval(interval);
          }
        }
      }, 10);
    }

    function clearTimer() {
      clearInterval(interval);
    }

    var writable_props = ["scrollTop", "header", "subpageOpen", "getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Slideshow> was created with unknown prop '".concat(key, "'"));
    });

    function onwindowresize() {
      $$invalidate(7, winWidth = window_1.innerWidth);
      $$invalidate(8, winHeight = window_1.innerHeight);
    }

    var click_handler = function click_handler() {
      $$invalidate(4, goBack = true);
      clearTimer();
      setTimeout(function () {
        return $$invalidate(3, showImg = false);
      }, 200);
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(5, paused = true);
      clearTimer();
    };

    var click_handler_2 = function click_handler_2() {
      clearTimer();
      $$invalidate(3, showImg = false);
    };

    $$self.$$set = function ($$props) {
      if ("scrollTop" in $$props) $$invalidate(0, scrollTop = $$props.scrollTop);
      if ("header" in $$props) $$invalidate(1, header = $$props.header);
      if ("subpageOpen" in $$props) $$invalidate(16, subpageOpen = $$props.subpageOpen);
      if ("getPageData" in $$props) $$invalidate(17, getPageData = $$props.getPageData);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        fade: fade,
        scrollTop: scrollTop,
        showCaptions: showCaptions,
        showImg: showImg,
        goBack: goBack,
        interval: interval,
        paused: paused,
        slideShowTime: slideShowTime,
        timeLeft: timeLeft,
        winWidth: winWidth,
        winHeight: winHeight,
        header: header,
        subpageOpen: subpageOpen,
        getPageData: getPageData,
        preload: preload,
        getImages: getImages,
        currentImg: currentImg,
        nextImg: nextImg,
        prevImg: prevImg,
        startTimer: startTimer,
        clearTimer: clearTimer
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("scrollTop" in $$props) $$invalidate(0, scrollTop = $$props.scrollTop);
      if ("showCaptions" in $$props) $$invalidate(2, showCaptions = $$props.showCaptions);
      if ("showImg" in $$props) $$invalidate(3, showImg = $$props.showImg);
      if ("goBack" in $$props) $$invalidate(4, goBack = $$props.goBack);
      if ("interval" in $$props) interval = $$props.interval;
      if ("paused" in $$props) $$invalidate(5, paused = $$props.paused);
      if ("slideShowTime" in $$props) $$invalidate(10, slideShowTime = $$props.slideShowTime);
      if ("timeLeft" in $$props) $$invalidate(6, timeLeft = $$props.timeLeft);
      if ("winWidth" in $$props) $$invalidate(7, winWidth = $$props.winWidth);
      if ("winHeight" in $$props) $$invalidate(8, winHeight = $$props.winHeight);
      if ("header" in $$props) $$invalidate(1, header = $$props.header);
      if ("subpageOpen" in $$props) $$invalidate(16, subpageOpen = $$props.subpageOpen);
      if ("getPageData" in $$props) $$invalidate(17, getPageData = $$props.getPageData);
      if ("currentImg" in $$props) $$invalidate(9, currentImg = $$props.currentImg);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*scrollTop*/
      1) {
         $$invalidate(2, showCaptions = scrollTop <= 50);
      }
    };

    return [scrollTop, header, showCaptions, showImg, goBack, paused, timeLeft, winWidth, winHeight, currentImg, slideShowTime, getImages, nextImg, prevImg, startTimer, clearTimer, subpageOpen, getPageData, onwindowresize, click_handler, click_handler_1, click_handler_2];
  }

  var Slideshow = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Slideshow, _SvelteComponentDev);

    var _super = _createSuper(Slideshow);

    function Slideshow(options) {
      var _this;

      _classCallCheck(this, Slideshow);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        scrollTop: 0,
        header: 1,
        subpageOpen: 16,
        getPageData: 17
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Slideshow",
        options: options,
        id: create_fragment$1.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*scrollTop*/
      ctx[0] === undefined && !("scrollTop" in props)) {
        console_1.warn("<Slideshow> was created without expected prop 'scrollTop'");
      }

      if (
      /*header*/
      ctx[1] === undefined && !("header" in props)) {
        console_1.warn("<Slideshow> was created without expected prop 'header'");
      }

      if (
      /*subpageOpen*/
      ctx[16] === undefined && !("subpageOpen" in props)) {
        console_1.warn("<Slideshow> was created without expected prop 'subpageOpen'");
      }

      if (
      /*getPageData*/
      ctx[17] === undefined && !("getPageData" in props)) {
        console_1.warn("<Slideshow> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(Slideshow, [{
      key: "scrollTop",
      get: function get() {
        throw new Error("<Slideshow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Slideshow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "header",
      get: function get() {
        throw new Error("<Slideshow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Slideshow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "subpageOpen",
      get: function get() {
        throw new Error("<Slideshow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Slideshow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "getPageData",
      get: function get() {
        throw new Error("<Slideshow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Slideshow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Slideshow;
  }(SvelteComponentDev);

  var file$2 = "src\\components\\LeftAngle.svelte";

  function create_fragment$2(ctx) {
    var svg;
    var filter;
    var feFlood;
    var feComposite0;
    var feGaussianBlur;
    var feOffset;
    var feComposite1;
    var g1;
    var g0;
    var path0;
    var path1;
    var path2;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        filter = svg_element("filter");
        feFlood = svg_element("feFlood");
        feComposite0 = svg_element("feComposite");
        feGaussianBlur = svg_element("feGaussianBlur");
        feOffset = svg_element("feOffset");
        feComposite1 = svg_element("feComposite");
        g1 = svg_element("g");
        g0 = svg_element("g");
        path0 = svg_element("path");
        path1 = svg_element("path");
        path2 = svg_element("path");
        attr_dev(feFlood, "flood-opacity", "0.498039");
        attr_dev(feFlood, "flood-color", "rgb(0,0,0)");
        attr_dev(feFlood, "result", "flood");
        add_location(feFlood, file$2, 24, 8, 772);
        attr_dev(feComposite0, "in", "flood");
        attr_dev(feComposite0, "in2", "SourceGraphic");
        attr_dev(feComposite0, "operator", "in");
        attr_dev(feComposite0, "result", "composite1");
        add_location(feComposite0, file$2, 28, 8, 897);
        attr_dev(feGaussianBlur, "in", "composite1");
        attr_dev(feGaussianBlur, "stdDeviation", "2");
        attr_dev(feGaussianBlur, "result", "blur");
        add_location(feGaussianBlur, file$2, 33, 8, 1038);
        attr_dev(feOffset, "dx", "1.1");
        attr_dev(feOffset, "dy", "0");
        attr_dev(feOffset, "result", "offset");
        add_location(feOffset, file$2, 37, 8, 1151);
        attr_dev(feComposite1, "in", "SourceGraphic");
        attr_dev(feComposite1, "in2", "offset");
        attr_dev(feComposite1, "operator", "over");
        attr_dev(feComposite1, "result", "composite2");
        add_location(feComposite1, file$2, 41, 8, 1243);
        set_style(filter, "color-interpolation-filters", "sRGB");
        attr_dev(filter, "id", "filter1024");
        attr_dev(filter, "x", "0");
        attr_dev(filter, "y", "0");
        add_location(filter, file$2, 19, 8, 649);
        attr_dev(path0, "id", "redline");
        attr_dev(path0, "d", "M 5,58.099995 H 109.01905 L -6.4439273,524.58749 1.8250001,243.55417 Z");
        attr_dev(path0, "class", "svelte-w9s8l7");
        add_location(path0, file$2, 53, 12, 1604);
        set_style(g0, "filter", "url(#filter1024)");
        attr_dev(g0, "transform", "translate(6.1699857,-262.90504)");
        add_location(g0, file$2, 50, 8, 1485);
        attr_dev(path1, "d", "M -10.57445,-213.74498 119.34262,-227.96372 61.846874,4.3010952 -6.7418857,26.00338 Z");
        set_style(path1, "opacity", "1");
        set_style(path1, "fill", "#ffffff");
        set_style(path1, "fill-opacity", "1");
        set_style(path1, "stroke", "none");
        set_style(path1, "stroke-width", "0.26499999");
        set_style(path1, "stroke-miterlimit", "4");
        set_style(path1, "stroke-dasharray", "none");
        set_style(path1, "stroke-opacity", "1");
        add_location(path1, file$2, 56, 8, 1737);
        attr_dev(path2, "d", "M -9.5454621,-98.524419 -5.0553341,36.340029 0.12229573,255.81567 62.194998,3.0223225 Z");
        set_style(path2, "opacity", "1");
        set_style(path2, "fill", "#d1bca6");
        set_style(path2, "fill-opacity", "1");
        set_style(path2, "stroke", "none");
        set_style(path2, "stroke-width", "0.26499999");
        set_style(path2, "stroke-miterlimit", "4");
        set_style(path2, "stroke-dasharray", "none");
        set_style(path2, "stroke-opacity", "1");
        add_location(path2, file$2, 59, 8, 2009);
        attr_dev(g1, "transform", "translate(0,203)");
        set_style(g1, "display", "inline");
        add_location(g1, file$2, 47, 4, 1402);
        attr_dev(svg, "id", "decorative-angle-left");
        attr_dev(svg, "version", "1.1");
        attr_dev(svg, "viewBox", "0 0 119 500");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "xmlns:cc", "http://creativecommons.org/ns#");
        attr_dev(svg, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
        attr_dev(svg, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        attr_dev(svg, "preserveAspectRatio", "none");
        attr_dev(svg, "class", "svelte-w9s8l7");
        add_location(svg, file$2, 15, 0, 349);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, filter);
        append_dev(filter, feFlood);
        append_dev(filter, feComposite0);
        append_dev(filter, feGaussianBlur);
        append_dev(filter, feOffset);
        append_dev(filter, feComposite1);
        append_dev(svg, g1);
        append_dev(g1, g0);
        append_dev(g0, path0);
        append_dev(g1, path1);
        append_dev(g1, path2);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$2($$self, $$props) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("LeftAngle", slots, []);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<LeftAngle> was created with unknown prop '".concat(key, "'"));
    });
    return [];
  }

  var LeftAngle = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(LeftAngle, _SvelteComponentDev);

    var _super = _createSuper(LeftAngle);

    function LeftAngle(options) {
      var _this;

      _classCallCheck(this, LeftAngle);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "LeftAngle",
        options: options,
        id: create_fragment$2.name
      });
      return _this;
    }

    return LeftAngle;
  }(SvelteComponentDev);

  function flip(node, animation, params) {
    var style = getComputedStyle(node);
    var transform = style.transform === 'none' ? '' : style.transform;
    var scaleX = animation.from.width / node.clientWidth;
    var scaleY = animation.from.height / node.clientHeight;
    var dx = (animation.from.left - animation.to.left) / scaleX;
    var dy = (animation.from.top - animation.to.top) / scaleY;
    var d = Math.sqrt(dx * dx + dy * dy);
    var _params$delay = params.delay,
        delay = _params$delay === void 0 ? 0 : _params$delay,
        _params$duration = params.duration,
        duration = _params$duration === void 0 ? function (d) {
      return Math.sqrt(d) * 120;
    } : _params$duration,
        _params$easing = params.easing,
        easing = _params$easing === void 0 ? cubicOut : _params$easing;
    return {
      delay: delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing: easing,
      css: function css(_t, u) {
        return "transform: ".concat(transform, " translate(").concat(u * dx, "px, ").concat(u * dy, "px);");
      }
    };
  }

  var file$3 = "src\\components\\LoveBox.svelte"; // (55:12) {:catch}

  function create_catch_block$1(ctx) {
    var p;
    var block = {
      c: function create() {
        p = element("p");
        p.textContent = "Error loading phrases";
        attr_dev(p, "class", "svelte-16olmsy");
        add_location(p, file$3, 55, 16, 1919);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$1.name,
      type: "catch",
      source: "(55:12) {:catch}",
      ctx: ctx
    });
    return block;
  } // (51:12) {:then phrases}


  function create_then_block$1(ctx) {
    var if_block_anchor;
    var current;
    var if_block =
    /*showPhrase*/
    ctx[3] && create_if_block$2(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (
        /*showPhrase*/
        ctx[3]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*showPhrase*/
            8) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$2(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$1.name,
      type: "then",
      source: "(51:12) {:then phrases}",
      ctx: ctx
    });
    return block;
  } // (52:16) {#if showPhrase}


  function create_if_block$2(ctx) {
    var p;
    var t0;
    var t1_value =
    /*phrases*/
    ctx[10][
    /*currentPhrase*/
    ctx[2]] + "";
    var t1;
    var t2;
    var p_transition;
    var current;
    var mounted;
    var dispose;

    function outroend_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*outroend_handler*/
        (_ctx = ctx)[8].apply(_ctx, [
        /*phrases*/
        ctx[10]].concat(args))
      );
    }

    var block = {
      c: function create() {
        p = element("p");
        t0 = text("\"");
        t1 = text(t1_value);
        t2 = text("\"");
        attr_dev(p, "class", "svelte-16olmsy");
        add_location(p, file$3, 52, 20, 1765);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t0);
        append_dev(p, t1);
        append_dev(p, t2);
        current = true;

        if (!mounted) {
          dispose = listen_dev(p, "outroend", outroend_handler, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty &
        /*currentPhrase*/
        4) && t1_value !== (t1_value =
        /*phrases*/
        ctx[10][
        /*currentPhrase*/
        ctx[2]] + "")) set_data_dev(t1, t1_value);
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!p_transition) p_transition = create_bidirectional_transition(p, scale, {}, true);
          p_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!p_transition) p_transition = create_bidirectional_transition(p, scale, {}, false);
        p_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
        if (detaching && p_transition) p_transition.end();
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(52:16) {#if showPhrase}",
      ctx: ctx
    });
    return block;
  } // (47:57)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then phrases}


  function create_pending_block$1(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$3, 48, 20, 1604);
        attr_dev(div, "class", "loader");
        add_location(div, file$3, 47, 16, 1562);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block$1.name,
      type: "pending",
      source: "(47:57)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then phrases}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var div2;
    var img;
    var img_src_value;
    var img_style_value;
    var t0;
    var div1;
    var h2;
    var t2;
    var p;
    var t4;
    var div0;
    var promise;
    var current;
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: true,
      pending: create_pending_block$1,
      then: create_then_block$1,
      catch: create_catch_block$1,
      value: 10,
      blocks: [,,,]
    };
    handle_promise(promise =
    /*getPhrases*/
    ctx[5]("/data/lovephrases.json"), info);
    var block = {
      c: function create() {
        div2 = element("div");
        img = element("img");
        t0 = space();
        div1 = element("div");
        h2 = element("h2");
        h2.textContent = "We love our church!";
        t2 = space();
        p = element("p");
        p.textContent = "We asked our church family to name a few of the things they love about First Christian Church, and they delivered!";
        t4 = space();
        div0 = element("div");
        info.block.c();
        attr_dev(img, "class", "bg svelte-16olmsy");
        if (img.src !== (img_src_value = "/primary-images/hearts.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        attr_dev(img, "style", img_style_value = "transform: translateY(-15%) translateY(" +
        /*loveTop*/
        ctx[1] / 5 + "px);");
        add_location(img, file$3, 40, 4, 1109);
        attr_dev(h2, "class", "svelte-16olmsy");
        add_location(h2, file$3, 43, 8, 1295);
        attr_dev(p, "class", "svelte-16olmsy");
        add_location(p, file$3, 44, 8, 1333);
        attr_dev(div0, "class", "phrases svelte-16olmsy");
        add_location(div0, file$3, 45, 8, 1464);
        attr_dev(div1, "class", "inner svelte-16olmsy");
        add_location(div1, file$3, 42, 4, 1266);
        attr_dev(div2, "class", "love-box svelte-16olmsy");
        add_location(div2, file$3, 39, 0, 1081);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, img);
        /*img_binding*/

        ctx[7](img);
        append_dev(div2, t0);
        append_dev(div2, div1);
        append_dev(div1, h2);
        append_dev(div1, t2);
        append_dev(div1, p);
        append_dev(div1, t4);
        append_dev(div1, div0);
        info.block.m(div0, info.anchor = null);

        info.mount = function () {
          return div0;
        };

        info.anchor = null;
        current = true;
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;

        if (!current || dirty &
        /*loveTop*/
        2 && img_style_value !== (img_style_value = "transform: translateY(-15%) translateY(" +
        /*loveTop*/
        ctx[1] / 5 + "px);")) {
          attr_dev(img, "style", img_style_value);
        }

        {
          var child_ctx = ctx.slice();
          child_ctx[10] = info.resolved;
          info.block.p(child_ctx, dirty);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(info.block);
        current = true;
      },
      o: function outro(local) {
        for (var i = 0; i < 3; i += 1) {
          var _block = info.blocks[i];
          transition_out(_block);
        }

        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        /*img_binding*/

        ctx[7](null);
        info.block.d();
        info.token = null;
        info = null;
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("LoveBox", slots, []);
    var currentPhrase = 0;
    var showPhrase = true;
    var interval;
    var _$$props$loveImage = $$props.loveImage,
        loveImage = _$$props$loveImage === void 0 ? null : _$$props$loveImage;
    var loveTop = $$props.loveTop;
    var getPageData = $$props.getPageData; //Change phrases

    function nextPhrase(phrases) {
      $$invalidate(3, showPhrase = true);
      if (currentPhrase == phrases.length - 1) $$invalidate(2, currentPhrase = 0);else $$invalidate(2, currentPhrase += 1);
    }

    function getPhrases(loc) {
      return new Promise(function (resolve, reject) {
        getPageData(loc).then(function (phrases) {
          $$invalidate(2, currentPhrase = Math.floor(Math.random() * phrases.length));
          resolve(phrases);
        }).catch(function (err) {
          return reject();
        });
      });
    }

    onMount(function () {
      //Interval to outro one phrase and prompt phrase change
      interval = setInterval(function () {
        $$invalidate(3, showPhrase = false);
      }, 6000);
    });
    var writable_props = ["loveImage", "loveTop", "getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<LoveBox> was created with unknown prop '".concat(key, "'"));
    });

    function img_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        loveImage = $$value;
        $$invalidate(0, loveImage);
      });
    }

    var outroend_handler = function outroend_handler(phrases) {
      nextPhrase(phrases);
    };

    $$self.$$set = function ($$props) {
      if ("loveImage" in $$props) $$invalidate(0, loveImage = $$props.loveImage);
      if ("loveTop" in $$props) $$invalidate(1, loveTop = $$props.loveTop);
      if ("getPageData" in $$props) $$invalidate(6, getPageData = $$props.getPageData);
    };

    $$self.$capture_state = function () {
      return {
        scale: scale,
        flip: flip,
        onMount: onMount,
        currentPhrase: currentPhrase,
        showPhrase: showPhrase,
        interval: interval,
        loveImage: loveImage,
        loveTop: loveTop,
        getPageData: getPageData,
        nextPhrase: nextPhrase,
        getPhrases: getPhrases
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("currentPhrase" in $$props) $$invalidate(2, currentPhrase = $$props.currentPhrase);
      if ("showPhrase" in $$props) $$invalidate(3, showPhrase = $$props.showPhrase);
      if ("interval" in $$props) interval = $$props.interval;
      if ("loveImage" in $$props) $$invalidate(0, loveImage = $$props.loveImage);
      if ("loveTop" in $$props) $$invalidate(1, loveTop = $$props.loveTop);
      if ("getPageData" in $$props) $$invalidate(6, getPageData = $$props.getPageData);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [loveImage, loveTop, currentPhrase, showPhrase, nextPhrase, getPhrases, getPageData, img_binding, outroend_handler];
  }

  var LoveBox = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(LoveBox, _SvelteComponentDev);

    var _super = _createSuper(LoveBox);

    function LoveBox(options) {
      var _this;

      _classCallCheck(this, LoveBox);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        loveImage: 0,
        loveTop: 1,
        getPageData: 6
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "LoveBox",
        options: options,
        id: create_fragment$3.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*loveTop*/
      ctx[1] === undefined && !("loveTop" in props)) {
        console.warn("<LoveBox> was created without expected prop 'loveTop'");
      }

      if (
      /*getPageData*/
      ctx[6] === undefined && !("getPageData" in props)) {
        console.warn("<LoveBox> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(LoveBox, [{
      key: "loveImage",
      get: function get() {
        throw new Error("<LoveBox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<LoveBox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "loveTop",
      get: function get() {
        throw new Error("<LoveBox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<LoveBox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "getPageData",
      get: function get() {
        throw new Error("<LoveBox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<LoveBox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return LoveBox;
  }(SvelteComponentDev);

  var file$4 = "src\\components\\CalendarModal.svelte";

  function create_fragment$4(ctx) {
    var div3;
    var div2;
    var div0;
    var t1;
    var h3;
    var t2;
    var t3_value =
    /*curEvent*/
    ctx[1].name + "";
    var t3;
    var t4;
    var t5;
    var div1;
    var a0;
    var img0;
    var img0_src_value;
    var t6;
    var a0_download_value;
    var t7;
    var a1;
    var img1;
    var img1_src_value;
    var t8;
    var t9;
    var a2;
    var img2;
    var img2_src_value;
    var t10;
    var t11;
    var p;
    var t12;
    var strong0;
    var t14;
    var strong1;
    var t16;
    var strong2;
    var t18;
    var div2_transition;
    var div3_transition;
    var current;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        div3 = element("div");
        div2 = element("div");
        div0 = element("div");
        div0.textContent = "×";
        t1 = space();
        h3 = element("h3");
        t2 = text("Add \"");
        t3 = text(t3_value);
        t4 = text("\" to your calendar");
        t5 = space();
        div1 = element("div");
        a0 = element("a");
        img0 = element("img");
        t6 = text("\r\n                Device Calendar");
        t7 = space();
        a1 = element("a");
        img1 = element("img");
        t8 = text("\r\n                Google Calendar");
        t9 = space();
        a2 = element("a");
        img2 = element("img");
        t10 = text("\r\n                Yahoo! Calendar");
        t11 = space();
        p = element("p");
        t12 = text("Choose ");
        strong0 = element("strong");
        strong0.textContent = "Device Calendar";
        t14 = text(" if you are using a calendar installed on your computer or mobile device, such as the Microsoft Outlook desktop application—you will need to open the downloaded calendar file. Choose either ");
        strong1 = element("strong");
        strong1.textContent = "Google";
        t16 = text(" or ");
        strong2 = element("strong");
        strong2.textContent = "Yahoo! Calendar";
        t18 = text(" to add an event to the selected online calendar service.");
        attr_dev(div0, "class", "close");
        add_location(div0, file$4, 65, 8, 2898);
        add_location(h3, file$4, 66, 8, 2985);
        if (img0.src !== (img0_src_value = "/icons/calendar.jpg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "device calendar logo");
        attr_dev(img0, "class", "svelte-d719p0");
        add_location(img0, file$4, 69, 16, 3276);
        attr_dev(a0, "download", a0_download_value =
        /*curEvent*/
        ctx[1].name.replace(/[\\ \/:\*\?\"<>\|]/g, "") + ".ics");
        attr_dev(a0, "class", "device-calendar svelte-d719p0");
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href",
        /*icsFile*/
        ctx[4]);
        add_location(a0, file$4, 68, 12, 3086);
        if (img1.src !== (img1_src_value = "/icons/google.png")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Google calendar logo");
        attr_dev(img1, "class", "svelte-d719p0");
        add_location(img1, file$4, 73, 16, 3507);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href",
        /*googleCalendarLink*/
        ctx[2]);
        attr_dev(a1, "class", "svelte-d719p0");
        add_location(a1, file$4, 72, 12, 3399);
        if (img2.src !== (img2_src_value = "/icons/yahoo.jpg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "Yahoo calendar logo");
        attr_dev(img2, "class", "svelte-d719p0");
        add_location(img2, file$4, 77, 16, 3735);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href",
        /*yahooCalendarLink*/
        ctx[3]);
        attr_dev(a2, "class", "svelte-d719p0");
        add_location(a2, file$4, 76, 12, 3628);
        attr_dev(div1, "class", "calendar-options svelte-d719p0");
        add_location(div1, file$4, 67, 8, 3042);
        add_location(strong0, file$4, 82, 32, 3979);
        add_location(strong1, file$4, 82, 260, 4207);
        add_location(strong2, file$4, 82, 287, 4234);
        attr_dev(p, "class", "small");
        add_location(p, file$4, 82, 8, 3955);
        attr_dev(div2, "class", "inner wider");
        add_location(div2, file$4, 64, 4, 2846);
        attr_dev(div3, "class", "modal");
        add_location(div3, file$4, 63, 0, 2805);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div3, anchor);
        append_dev(div3, div2);
        append_dev(div2, div0);
        append_dev(div2, t1);
        append_dev(div2, h3);
        append_dev(h3, t2);
        append_dev(h3, t3);
        append_dev(h3, t4);
        append_dev(div2, t5);
        append_dev(div2, div1);
        append_dev(div1, a0);
        append_dev(a0, img0);
        append_dev(a0, t6);
        append_dev(div1, t7);
        append_dev(div1, a1);
        append_dev(a1, img1);
        append_dev(a1, t8);
        append_dev(div1, t9);
        append_dev(div1, a2);
        append_dev(a2, img2);
        append_dev(a2, t10);
        append_dev(div2, t11);
        append_dev(div2, p);
        append_dev(p, t12);
        append_dev(p, strong0);
        append_dev(p, t14);
        append_dev(p, strong1);
        append_dev(p, t16);
        append_dev(p, strong2);
        append_dev(p, t18);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(div0, "click",
          /*click_handler*/
          ctx[5], false, false, false), listen_dev(a0, "click",
          /*click_handler_1*/
          ctx[6], false, false, false), listen_dev(a1, "click",
          /*click_handler_2*/
          ctx[7], false, false, false), listen_dev(a2, "click",
          /*click_handler_3*/
          ctx[8], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if ((!current || dirty &
        /*curEvent*/
        2) && t3_value !== (t3_value =
        /*curEvent*/
        ctx[1].name + "")) set_data_dev(t3, t3_value);

        if (!current || dirty &
        /*curEvent*/
        2 && a0_download_value !== (a0_download_value =
        /*curEvent*/
        ctx[1].name.replace(/[\\ \/:\*\?\"<>\|]/g, "") + ".ics")) {
          attr_dev(a0, "download", a0_download_value);
        }

        if (!current || dirty &
        /*icsFile*/
        16) {
          attr_dev(a0, "href",
          /*icsFile*/
          ctx[4]);
        }

        if (!current || dirty &
        /*googleCalendarLink*/
        4) {
          attr_dev(a1, "href",
          /*googleCalendarLink*/
          ctx[2]);
        }

        if (!current || dirty &
        /*yahooCalendarLink*/
        8) {
          attr_dev(a2, "href",
          /*yahooCalendarLink*/
          ctx[3]);
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!div2_transition) div2_transition = create_bidirectional_transition(div2, scale, {}, true);
          div2_transition.run(1);
        });
        add_render_callback(function () {
          if (!div3_transition) div3_transition = create_bidirectional_transition(div3, fade, {}, true);
          div3_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!div2_transition) div2_transition = create_bidirectional_transition(div2, scale, {}, false);
        div2_transition.run(0);
        if (!div3_transition) div3_transition = create_bidirectional_transition(div3, fade, {}, false);
        div3_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div3);
        if (detaching && div2_transition) div2_transition.end();
        if (detaching && div3_transition) div3_transition.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("CalendarModal", slots, []);
    var curEvent = $$props.curEvent,
        calendarModalOpen = $$props.calendarModalOpen;
    var googleCalendarLink, yahooCalendarLink, icsFile;
    onMount(function () {
      var today = new Date(Date.now());
      var startDate = new Date(curEvent.date).toISOString().replace(/(.000|-|:)/g, "");
      var endDate = new Date(curEvent.date);
      endDate.setMinutes(endDate.getMinutes() + curEvent.duration);
      endDate = endDate.toISOString().replace(/(.000|-|:)/g, "");
      var googleFormattedDates = startDate + "%2F" + endDate;
      $$invalidate(2, googleCalendarLink = "https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&text=" + curEvent.name + "&details=" + curEvent.description + "&dates=" + googleFormattedDates + "&location=" + curEvent.location);
      $$invalidate(3, yahooCalendarLink = "https://calendar.yahoo.com/?v=60&view=d&type=20&title=" + curEvent.name + "&st=" + startDate + "&dur=" + curEvent.duration + "&desc=" + curEvent.description + "&in_loc=" + curEvent.location + "&uid="); // outlookCalendarLink = 'https://outlook.live.com/owa/?path=%2fcalendar%2Faction%2Fcompose&rru=addevent&startdt=' + startDate + '&enddt=' + endDate + '&subject=' + curEvent.name + '&body=' + curEvent.description + '&location=' + curEvent.location

      $$invalidate(4, icsFile = "BEGIN:VCALENDAR\n            VERSION:2.0\n            CALSCALE:GREGORIAN\n            BEGIN:VTIMEZONE\n            TZID:America/Chicago\n            TZURL:http://tzurl.org/zoneinfo-outlook/America/Chicago\n            X-LIC-LOCATION:America/Chicago\n            BEGIN:DAYLIGHT\n            TZOFFSETFROM:-0600\n            TZOFFSETTO:-0500\n            TZNAME:CDT\n            DTSTART:19700308T020000\n            RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\n            END:DAYLIGHT\n            BEGIN:STANDARD\n            TZOFFSETFROM:-0500\n            TZOFFSETTO:-0600\n            TZNAME:CST\n            DTSTART:19701101T020000\n            RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\n            END:STANDARD\n            END:VTIMEZONE\n            BEGIN:VEVENT\n            DTSTAMP:".concat(today.toISOString().replace(/(.000|-|:)/g, ""), "\n            UID:20200420T174139Z-1007770359@marudot.com\n            DTSTART;TZID=America/Chicago:").concat(startDate, "\n            DTEND;TZID=America/Chicago:").concat(endDate, "\n            SUMMARY:").concat(curEvent.name, "\n            DESCRIPTION:").concat(curEvent.description, "\n            LOCATION:").concat(curEvent.location, "\n            BEGIN:VALARM\n            ACTION:DISPLAY\n            DESCRIPTION:").concat(curEvent.description, "\n            TRIGGER:-PT15M\n            END:VALARM\n            END:VEVENT\n            END:VCALENDAR\n        "));
      $$invalidate(4, icsFile = "data:text/calendar;charset=utf8," + encodeURI(icsFile.replace(/^(\t| )+/gm, "")));
    });
    var writable_props = ["curEvent", "calendarModalOpen"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<CalendarModal> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      $$invalidate(0, calendarModalOpen = false);
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(0, calendarModalOpen = false);
    };

    var click_handler_2 = function click_handler_2() {
      $$invalidate(0, calendarModalOpen = false);
    };

    var click_handler_3 = function click_handler_3() {
      $$invalidate(0, calendarModalOpen = false);
    };

    $$self.$$set = function ($$props) {
      if ("curEvent" in $$props) $$invalidate(1, curEvent = $$props.curEvent);
      if ("calendarModalOpen" in $$props) $$invalidate(0, calendarModalOpen = $$props.calendarModalOpen);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        fade: fade,
        scale: scale,
        curEvent: curEvent,
        calendarModalOpen: calendarModalOpen,
        googleCalendarLink: googleCalendarLink,
        yahooCalendarLink: yahooCalendarLink,
        icsFile: icsFile
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("curEvent" in $$props) $$invalidate(1, curEvent = $$props.curEvent);
      if ("calendarModalOpen" in $$props) $$invalidate(0, calendarModalOpen = $$props.calendarModalOpen);
      if ("googleCalendarLink" in $$props) $$invalidate(2, googleCalendarLink = $$props.googleCalendarLink);
      if ("yahooCalendarLink" in $$props) $$invalidate(3, yahooCalendarLink = $$props.yahooCalendarLink);
      if ("icsFile" in $$props) $$invalidate(4, icsFile = $$props.icsFile);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [calendarModalOpen, curEvent, googleCalendarLink, yahooCalendarLink, icsFile, click_handler, click_handler_1, click_handler_2, click_handler_3];
  }

  var CalendarModal = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(CalendarModal, _SvelteComponentDev);

    var _super = _createSuper(CalendarModal);

    function CalendarModal(options) {
      var _this;

      _classCallCheck(this, CalendarModal);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        curEvent: 1,
        calendarModalOpen: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "CalendarModal",
        options: options,
        id: create_fragment$4.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*curEvent*/
      ctx[1] === undefined && !("curEvent" in props)) {
        console.warn("<CalendarModal> was created without expected prop 'curEvent'");
      }

      if (
      /*calendarModalOpen*/
      ctx[0] === undefined && !("calendarModalOpen" in props)) {
        console.warn("<CalendarModal> was created without expected prop 'calendarModalOpen'");
      }

      return _this;
    }

    _createClass(CalendarModal, [{
      key: "curEvent",
      get: function get() {
        throw new Error("<CalendarModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<CalendarModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "calendarModalOpen",
      get: function get() {
        throw new Error("<CalendarModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<CalendarModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return CalendarModal;
  }(SvelteComponentDev);

  function cubicOut$1(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  }

  function flyModified(node, _ref) {
    var _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 400 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === void 0 ? cubicOut$1 : _ref$easing,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? "relative" : _ref$position;
    var style = getComputedStyle(node);
    var opacity = +style.opacity;
    var transform = style.transform === "none" ? "" : style.transform;
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t) {
        return "\n        transform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n        opacity: ").concat(t * opacity, ";\n        position: ").concat(position, ";");
      }
    };
  }

  var file$5 = "src\\views\\Sermons.svelte";

  function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[17] = list[i];
    return child_ctx;
  }

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[13] = list[i];
    return child_ctx;
  } // (84:12) {:else}


  function create_else_block_3(ctx) {
    var await_block_anchor;
    var promise;
    var current;
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block$2,
      then: create_then_block$2,
      catch: create_catch_block$2,
      value: 16,
      blocks: [,,,]
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/manuscripts.json"), info);
    var block = {
      c: function create() {
        await_block_anchor = empty();
        info.block.c();
      },
      m: function mount(target, anchor) {
        insert_dev(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);

        info.mount = function () {
          return await_block_anchor.parentNode;
        };

        info.anchor = await_block_anchor;
        current = true;
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/manuscripts.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[16] = info.resolved;
          info.block.p(child_ctx, dirty);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(info.block);
        current = true;
      },
      o: function outro(local) {
        for (var i = 0; i < 3; i += 1) {
          var _block = info.blocks[i];
          transition_out(_block);
        }

        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_3.name,
      type: "else",
      source: "(84:12) {:else}",
      ctx: ctx
    });
    return block;
  } // (54:12) {#if show == 'videos'}


  function create_if_block$3(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block_1$2, create_else_block$2];
    var if_blocks = [];

    function select_block_type_1(ctx, dirty) {
      if (!
      /*embeds*/
      ctx[4].length) return 0;
      return 1;
    }

    current_block_type_index = select_block_type_1(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$3.name,
      type: "if",
      source: "(54:12) {#if show == 'videos'}",
      ctx: ctx
    });
    return block;
  } // (1:0) <script>      import {flyModified}


  function create_catch_block$2(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$2.name,
      type: "catch",
      source: "(1:0) <script>      import {flyModified}",
      ctx: ctx
    });
    return block;
  } // (89:16) {:then mans}


  function create_then_block$2(ctx) {
    var div;
    var ul;
    var div_intro;
    var div_outro;
    var current;
    var each_value_1 =
    /*mans*/
    ctx[16].sort(
    /*func*/
    ctx[10]);
    validate_each_argument(each_value_1);
    var each_blocks = [];

    for (var i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }

    var block = {
      c: function create() {
        div = element("div");
        ul = element("ul");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        add_location(ul, file$5, 90, 24, 4326);
        attr_dev(div, "class", "manuscript-list");
        add_location(div, file$5, 89, 20, 4239);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, ul);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(ul, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, Date*/
        1) {
          each_value_1 =
          /*mans*/
          ctx[16].sort(
          /*func*/
          ctx[10]);
          validate_each_argument(each_value_1);

          var _i3;

          for (_i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
            var child_ctx = get_each_context_1(ctx, each_value_1, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block_1(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(ul, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value_1.length;
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (div_outro) div_outro.end(1);
          if (!div_intro) div_intro = create_in_transition(div, fade, {
            delay: 500
          });
          div_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        if (div_intro) div_intro.invalidate();
        div_outro = create_out_transition(div, fade, {});
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_each(each_blocks, detaching);
        if (detaching && div_outro) div_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$2.name,
      type: "then",
      source: "(89:16) {:then mans}",
      ctx: ctx
    });
    return block;
  } // (92:28) {#each mans.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime()) as man}


  function create_each_block_1(ctx) {
    var li;
    var a;
    var strong;
    var t0_value =
    /*man*/
    ctx[17].title + "";
    var t0;
    var t1;
    var t2_value =
    /*man*/
    ctx[17].series + "";
    var t2;
    var t3;
    var t4_value = func_1() + "";
    var t4;
    var a_href_value;
    var t5;

    function func_1() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*func_1*/
        (_ctx = ctx)[11].apply(_ctx, [
        /*man*/
        ctx[17]].concat(args))
      );
    }

    var block = {
      c: function create() {
        li = element("li");
        a = element("a");
        strong = element("strong");
        t0 = text(t0_value);
        t1 = text(" - ");
        t2 = text(t2_value);
        t3 = text(" - ");
        t4 = text(t4_value);
        t5 = space();
        add_location(strong, file$5, 93, 90, 4579);
        attr_dev(a, "target", "_blank");
        attr_dev(a, "href", a_href_value = "data/manuscripts/" +
        /*man*/
        ctx[17].file);
        add_location(a, file$5, 93, 36, 4525);
        add_location(li, file$5, 92, 32, 4483);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        append_dev(li, a);
        append_dev(a, strong);
        append_dev(strong, t0);
        append_dev(a, t1);
        append_dev(a, t2);
        append_dev(a, t3);
        append_dev(a, t4);
        append_dev(li, t5);
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*getPageData*/
        1 && t0_value !== (t0_value =
        /*man*/
        ctx[17].title + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*getPageData*/
        1 && t2_value !== (t2_value =
        /*man*/
        ctx[17].series + "")) set_data_dev(t2, t2_value);
        if (dirty &
        /*getPageData*/
        1 && t4_value !== (t4_value = func_1() + "")) set_data_dev(t4, t4_value);

        if (dirty &
        /*getPageData*/
        1 && a_href_value !== (a_href_value = "data/manuscripts/" +
        /*man*/
        ctx[17].file)) {
          attr_dev(a, "href", a_href_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1.name,
      type: "each",
      source: "(92:28) {#each mans.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime()) as man}",
      ctx: ctx
    });
    return block;
  } // (85:62)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then mans}


  function create_pending_block$2(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$5, 86, 24, 4107);
        attr_dev(div, "class", "loader");
        add_location(div, file$5, 85, 20, 4061);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block$2.name,
      type: "pending",
      source: "(85:62)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then mans}",
      ctx: ctx
    });
    return block;
  } // (59:16) {:else}


  function create_else_block$2(ctx) {
    var div1;
    var t;
    var div0;
    var div1_intro;
    var div1_outro;
    var current;
    var each_value =
    /*embeds*/
    ctx[4];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    function select_block_type_3(ctx, dirty) {
      if (
      /*showing*/
      ctx[1] <=
      /*totalResultsPossible*/
      ctx[3]) return create_if_block_2$1;
      return create_else_block_1$1;
    }

    var current_block_type = select_block_type_3(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div1 = element("div");

        for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].c();
        }

        t = space();
        div0 = element("div");
        if_block.c();
        attr_dev(div0, "class", "centered");
        add_location(div0, file$5, 74, 24, 3553);
        attr_dev(div1, "class", "video-list");
        add_location(div1, file$5, 59, 20, 2491);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].m(div1, null);
        }

        append_dev(div1, t);
        append_dev(div1, div0);
        if_block.m(div0, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*embeds*/
        16) {
          each_value =
          /*embeds*/
          ctx[4];
          validate_each_argument(each_value);

          var _i6;

          for (_i6 = 0; _i6 < each_value.length; _i6 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i6);

            if (each_blocks[_i6]) {
              each_blocks[_i6].p(child_ctx, dirty);
            } else {
              each_blocks[_i6] = create_each_block(child_ctx);

              each_blocks[_i6].c();

              each_blocks[_i6].m(div1, t);
            }
          }

          for (; _i6 < each_blocks.length; _i6 += 1) {
            each_blocks[_i6].d(1);
          }

          each_blocks.length = each_value.length;
        }

        if (current_block_type === (current_block_type = select_block_type_3(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div0, null);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          if (!div1_intro) div1_intro = create_in_transition(div1, fade, {
            delay: 800
          });
          div1_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1, fade, {});
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        destroy_each(each_blocks, detaching);
        if_block.d();
        if (detaching && div1_outro) div1_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$2.name,
      type: "else",
      source: "(59:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (55:16) {#if !embeds.length}


  function create_if_block_1$2(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$5, 56, 24, 2364);
        attr_dev(div, "class", "loader");
        add_location(div, file$5, 55, 20, 2318);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$2.name,
      type: "if",
      source: "(55:16) {#if !embeds.length}",
      ctx: ctx
    });
    return block;
  } // (69:36) {:else}


  function create_else_block_2(ctx) {
    var iframe;
    var iframe_title_value;
    var iframe_src_value;
    var block = {
      c: function create() {
        iframe = element("iframe");
        attr_dev(iframe, "title", iframe_title_value =
        /*embed*/
        ctx[13].title);
        if (iframe.src !== (iframe_src_value =
        /*embed*/
        ctx[13].src)) attr_dev(iframe, "src", iframe_src_value);
        attr_dev(iframe, "width", "560");
        attr_dev(iframe, "height", "487");
        set_style(iframe, "border", "none");
        set_style(iframe, "overflow", "hidden");
        attr_dev(iframe, "scrolling", "no");
        attr_dev(iframe, "frameborder", "0");
        attr_dev(iframe, "allowtransparency", "true");
        attr_dev(iframe, "allow", "encrypted-media");
        iframe.allowFullscreen = "true";
        add_location(iframe, file$5, 69, 40, 3158);
      },
      m: function mount(target, anchor) {
        insert_dev(target, iframe, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*embeds*/
        16 && iframe_title_value !== (iframe_title_value =
        /*embed*/
        ctx[13].title)) {
          attr_dev(iframe, "title", iframe_title_value);
        }

        if (dirty &
        /*embeds*/
        16 && iframe.src !== (iframe_src_value =
        /*embed*/
        ctx[13].src)) {
          attr_dev(iframe, "src", iframe_src_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(iframe);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_2.name,
      type: "else",
      source: "(69:36) {:else}",
      ctx: ctx
    });
    return block;
  } // (65:36) {#if embed.type && embed.type == "onsite"}


  function create_if_block_3$1(ctx) {
    var video;
    var source;
    var source_src_value;
    var video_poster_value;
    var block = {
      c: function create() {
        video = element("video");
        source = element("source");
        if (source.src !== (source_src_value =
        /*embed*/
        ctx[13].src)) attr_dev(source, "src", source_src_value);
        attr_dev(source, "type", "video/mp4");
        add_location(source, file$5, 66, 44, 2980);
        video.controls = true;
        attr_dev(video, "poster", video_poster_value =
        /*embed*/
        ctx[13].poster);
        add_location(video, file$5, 65, 40, 2896);
      },
      m: function mount(target, anchor) {
        insert_dev(target, video, anchor);
        append_dev(video, source);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*embeds*/
        16 && source.src !== (source_src_value =
        /*embed*/
        ctx[13].src)) {
          attr_dev(source, "src", source_src_value);
        }

        if (dirty &
        /*embeds*/
        16 && video_poster_value !== (video_poster_value =
        /*embed*/
        ctx[13].poster)) {
          attr_dev(video, "poster", video_poster_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(video);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3$1.name,
      type: "if",
      source: "(65:36) {#if embed.type && embed.type == \\\"onsite\\\"}",
      ctx: ctx
    });
    return block;
  } // (61:24) {#each embeds as embed}


  function create_each_block(ctx) {
    var div1;
    var h3;
    var t0_value =
    /*embed*/
    ctx[13].title + "";
    var t0;
    var t1;
    var div0;

    function select_block_type_2(ctx, dirty) {
      if (
      /*embed*/
      ctx[13].type &&
      /*embed*/
      ctx[13].type == "onsite") return create_if_block_3$1;
      return create_else_block_2;
    }

    var current_block_type = select_block_type_2(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div1 = element("div");
        h3 = element("h3");
        t0 = text(t0_value);
        t1 = space();
        div0 = element("div");
        if_block.c();
        add_location(h3, file$5, 62, 32, 2689);
        attr_dev(div0, "class", "embed-container");
        add_location(div0, file$5, 63, 32, 2745);
        attr_dev(div1, "class", "video-container svelte-dupnrw");
        add_location(div1, file$5, 61, 28, 2626);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, h3);
        append_dev(h3, t0);
        append_dev(div1, t1);
        append_dev(div1, div0);
        if_block.m(div0, null);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*embeds*/
        16 && t0_value !== (t0_value =
        /*embed*/
        ctx[13].title + "")) set_data_dev(t0, t0_value);

        if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div0, null);
          }
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(61:24) {#each embeds as embed}",
      ctx: ctx
    });
    return block;
  } // (78:28) {:else}


  function create_else_block_1$1(ctx) {
    var t;
    var block = {
      c: function create() {
        t = text("No more videos");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_1$1.name,
      type: "else",
      source: "(78:28) {:else}",
      ctx: ctx
    });
    return block;
  } // (76:28) {#if showing <= totalResultsPossible}


  function create_if_block_2$1(ctx) {
    var a;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        a = element("a");
        a.textContent = "More videos";
        attr_dev(a, "href", "#moreVids");
        add_location(a, file$5, 76, 32, 3676);
      },
      m: function mount(target, anchor) {
        insert_dev(target, a, anchor);

        if (!mounted) {
          dispose = listen_dev(a, "click", prevent_default(
          /*getMoreVideos*/
          ctx[5]), false, true, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$1.name,
      type: "if",
      source: "(76:28) {#if showing <= totalResultsPossible}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$5(ctx) {
    var div6;
    var t0;
    var div5;
    var div4;
    var h1;
    var t2;
    var div2;
    var h3;
    var t4;
    var div0;
    var t6;
    var div1;
    var t7;
    var a;
    var t9;
    var div3;
    var button0;
    var t11;
    var button1;
    var t13;
    var current_block_type_index;
    var if_block;
    var div5_intro;
    var div5_outro;
    var current;
    var mounted;
    var dispose;
    var default_slot_template =
    /*#slots*/
    ctx[7].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[6], null);
    var if_block_creators = [create_if_block$3, create_else_block_3];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*show*/
      ctx[2] == "videos") return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var block = {
      c: function create() {
        div6 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div5 = element("div");
        div4 = element("div");
        h1 = element("h1");
        h1.textContent = "Worship Services";
        t2 = space();
        div2 = element("div");
        h3 = element("h3");
        h3.textContent = "Join Us for Worship!";
        t4 = space();
        div0 = element("div");
        div0.textContent = "Worshipping in-person Sundays at 10am";
        t6 = space();
        div1 = element("div");
        t7 = text("Live worship streamed on ");
        a = element("a");
        a.textContent = "Facebook";
        t9 = space();
        div3 = element("div");
        button0 = element("button");
        button0.textContent = "Videos";
        t11 = space();
        button1 = element("button");
        button1.textContent = "Manuscripts";
        t13 = space();
        if_block.c();
        add_location(h1, file$5, 35, 12, 997);
        add_location(h3, file$5, 37, 16, 1090);
        add_location(div0, file$5, 38, 16, 1137);
        attr_dev(a, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        add_location(a, file$5, 39, 46, 1233);
        add_location(div1, file$5, 39, 16, 1203);
        attr_dev(div2, "class", "attention-box centered");
        add_location(div2, file$5, 36, 12, 1036);
        attr_dev(button0, "class", "svelte-dupnrw");
        toggle_class(button0, "selected",
        /*show*/
        ctx[2] == "videos");
        add_location(button0, file$5, 50, 16, 1989);
        attr_dev(button1, "class", "svelte-dupnrw");
        toggle_class(button1, "selected",
        /*show*/
        ctx[2] == "manuscripts");
        add_location(button1, file$5, 51, 16, 2097);
        attr_dev(div3, "class", "switcher svelte-dupnrw");
        add_location(div3, file$5, 49, 12, 1949);
        attr_dev(div4, "class", "content");
        add_location(div4, file$5, 34, 8, 962);
        add_location(div5, file$5, 33, 4, 851);
        attr_dev(div6, "class", "page");
        add_location(div6, file$5, 31, 0, 808);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div6, anchor);

        if (default_slot) {
          default_slot.m(div6, null);
        }

        append_dev(div6, t0);
        append_dev(div6, div5);
        append_dev(div5, div4);
        append_dev(div4, h1);
        append_dev(div4, t2);
        append_dev(div4, div2);
        append_dev(div2, h3);
        append_dev(div2, t4);
        append_dev(div2, div0);
        append_dev(div2, t6);
        append_dev(div2, div1);
        append_dev(div1, t7);
        append_dev(div1, a);
        append_dev(div4, t9);
        append_dev(div4, div3);
        append_dev(div3, button0);
        append_dev(div3, t11);
        append_dev(div3, button1);
        append_dev(div4, t13);
        if_blocks[current_block_type_index].m(div4, null);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(button0, "click",
          /*click_handler*/
          ctx[8], false, false, false), listen_dev(button1, "click",
          /*click_handler_1*/
          ctx[9], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          64) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[6], dirty, null, null);
          }
        }

        if (dirty &
        /*show*/
        4) {
          toggle_class(button0, "selected",
          /*show*/
          ctx[2] == "videos");
        }

        if (dirty &
        /*show*/
        4) {
          toggle_class(button1, "selected",
          /*show*/
          ctx[2] == "manuscripts");
        }

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(div4, null);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        transition_in(if_block);
        add_render_callback(function () {
          if (div5_outro) div5_outro.end(1);
          if (!div5_intro) div5_intro = create_in_transition(div5, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div5_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        transition_out(if_block);
        if (div5_intro) div5_intro.invalidate();
        div5_outro = create_out_transition(div5, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div6);
        if (default_slot) default_slot.d(detaching);
        if_blocks[current_block_type_index].d();
        if (detaching && div5_outro) div5_outro.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$5.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$5($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Sermons", slots, ['default']);
    var results = 5;
    var showing = 0;
    var show = "videos";
    var totalResultsPossible = 0;
    var embeds = [];
    var getPageData = $$props.getPageData;

    function getMoreVideos() {
      fetch("data/php/getSermons.php?start=" + showing + "&end=" + (showing + results) + "&direction=desc").then(function (data) {
        return data.json();
      }).then(function (videos) {
        videos.results.forEach(function (video) {
          embeds.push(JSON.parse(video));
        });
        $$invalidate(4, embeds);
        $$invalidate(1, showing += results);
        $$invalidate(3, totalResultsPossible = videos.files);
      });
    }

    onMount(function () {
      getMoreVideos();
    });
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Sermons> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      $$invalidate(2, show = "videos");
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(2, show = "manuscripts");
    };

    var func = function func(a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    };

    var func_1 = function func_1(man) {
      var parts = man.date.split("-");
      parts[2] = parts[2].replace(/ .*?$/, ""); //Remove timezone

      return "".concat(parts[1], "/").concat(parts[2], "/").concat(parts[0]);
    };

    $$self.$$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        fade: fade,
        onMount: onMount,
        results: results,
        showing: showing,
        show: show,
        totalResultsPossible: totalResultsPossible,
        embeds: embeds,
        getPageData: getPageData,
        getMoreVideos: getMoreVideos
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("results" in $$props) results = $$props.results;
      if ("showing" in $$props) $$invalidate(1, showing = $$props.showing);
      if ("show" in $$props) $$invalidate(2, show = $$props.show);
      if ("totalResultsPossible" in $$props) $$invalidate(3, totalResultsPossible = $$props.totalResultsPossible);
      if ("embeds" in $$props) $$invalidate(4, embeds = $$props.embeds);
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, showing, show, totalResultsPossible, embeds, getMoreVideos, $$scope, slots, click_handler, click_handler_1, func, func_1];
  }

  var Sermons = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Sermons, _SvelteComponentDev);

    var _super = _createSuper(Sermons);

    function Sermons(options) {
      var _this;

      _classCallCheck(this, Sermons);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Sermons",
        options: options,
        id: create_fragment$5.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*getPageData*/
      ctx[0] === undefined && !("getPageData" in props)) {
        console.warn("<Sermons> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(Sermons, [{
      key: "getPageData",
      get: function get() {
        throw new Error("<Sermons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Sermons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Sermons;
  }(SvelteComponentDev);

  var file$6 = "src\\views\\Ministries.svelte";

  function create_fragment$6(ctx) {
    var div6;
    var t0;
    var div5;
    var div4;
    var h1;
    var t2;
    var h20;
    var t4;
    var div1;
    var div0;
    var img0;
    var img0_src_value;
    var t5;
    var p0;
    var t7;
    var p1;
    var t9;
    var ul;
    var li0;
    var t11;
    var li1;
    var t13;
    var li2;
    var t15;
    var li3;
    var t17;
    var li4;
    var t19;
    var br0;
    var t20;
    var h21;
    var t22;
    var div3;
    var img1;
    var img1_src_value;
    var t23;
    var div2;
    var p2;
    var t25;
    var p3;
    var t27;
    var p4;
    var t29;
    var br1;
    var div5_intro;
    var div5_outro;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[1].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[0], null);
    var block = {
      c: function create() {
        div6 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div5 = element("div");
        div4 = element("div");
        h1 = element("h1");
        h1.textContent = "Ministries";
        t2 = space();
        h20 = element("h2");
        h20.textContent = "The Blessing Box";
        t4 = space();
        div1 = element("div");
        div0 = element("div");
        img0 = element("img");
        t5 = space();
        p0 = element("p");
        p0.textContent = "Reaching out to our neighbors is an especially important part of our mission. To meet the needs of families in our neighborhood a blessing box was put in place on the south side of the building. It is labeled: Take What You Need, Leave What You Can, Be Blessed. Since its beginning in October of 2019, the box is visited daily. We have discovered that not only is the need great, but the kindness of church and community members helps support this ministry. Items may be placed directly in the box or in the barrel inside near the pastor’s office. We are glad to divide bulk items into individual packages.";
        t7 = space();
        p1 = element("p");
        p1.textContent = "Items needed:";
        t9 = space();
        ul = element("ul");
        li0 = element("li");
        li0.textContent = "Hygiene Items such as deodorant, soap, toothpaste, shampoo, razors";
        t11 = space();
        li1 = element("li");
        li1.textContent = "Personal Items such as toilet paper, pads/tampons, socks, hats, gloves";
        t13 = space();
        li2 = element("li");
        li2.textContent = "Baby items such as diapers and wipes";
        t15 = space();
        li3 = element("li");
        li3.textContent = "Cleaning supplies such as detergent, cleanser, trash bags, dish soap, paper towels";
        t17 = space();
        li4 = element("li");
        li4.textContent = "Non-perishable food items";
        t19 = space();
        br0 = element("br");
        t20 = space();
        h21 = element("h2");
        h21.textContent = "New City Church";
        t22 = space();
        div3 = element("div");
        img1 = element("img");
        t23 = space();
        div2 = element("div");
        p2 = element("p");
        p2.textContent = "FCC has had a connection with the Democratic Republic of Congo for decades. The relationship began when Dr. Gene and Sue Johnson joined our congregation after serving as missionaries in the African nation.  Dr. Johnson spent two terms, 1957-1964 and 1967-1971, in Monieka where he oversaw the medical work and also taught in the school for children of missionaries.  His wife, Sue, supervised back country schools and station finances as well as taught her children in primary grades.";
        t25 = space();
        p3 = element("p");
        p3.textContent = "The Johnson’s shared their love and concern with our congregation and over fifteen years ago a partnership or jumelage began with New City Church (Nouvelle Cite’ Parish) in Mbandaka, DRC.  Each congregation supports the other through prayer and communicating aspects of church life and family and community needs.  Funds are sent to our sister church annually to support a project that improves quality of life for our brothers and sisters in Mbandaka.  We proudly supported microcredit courses that teach women to sew and provide for their families, school supply kiosks at the church which provide affordable supplies and school uniforms, funds to build a new parsonage, wells for potable water and financial support for a much needed new church building.";
        t27 = space();
        p4 = element("p");
        p4.textContent = "It has been our honor to host visits from New City Church member, Oscar Pekombe and also Rev. Christianne Ikete, Director of the Disciples Office of Women and Family in DRC. In 2012, FCC member, Stephanie Line, traveled to Mbandaka and worshipped with our brothers and sisters of New City.  We are committed to continue to promote these cultural and spiritual ties….our Jumelage….with our sister church!";
        t29 = space();
        br1 = element("br");
        add_location(h1, file$6, 8, 12, 263);
        add_location(h20, file$6, 33, 12, 1840);
        set_style(img0, "float", "right");
        set_style(img0, "margin", "0");
        set_style(img0, "margin-left", "1em");
        set_style(img0, "margin-bottom", "1em");
        if (img0.src !== (img0_src_value = "primary-images/bbox.jpg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "The Blessing Box, stocked");
        add_location(img0, file$6, 36, 20, 1929);
        add_location(p0, file$6, 37, 20, 2089);
        add_location(p1, file$6, 38, 20, 2724);
        add_location(li0, file$6, 40, 24, 2796);
        add_location(li1, file$6, 41, 24, 2897);
        add_location(li2, file$6, 42, 24, 3002);
        add_location(li3, file$6, 43, 24, 3073);
        add_location(li4, file$6, 44, 24, 3190);
        add_location(ul, file$6, 39, 20, 2766);
        add_location(div0, file$6, 35, 16, 1902);
        attr_dev(br0, "class", "svelte-1fpp3m6");
        add_location(br0, file$6, 47, 16, 3293);
        add_location(div1, file$6, 34, 12, 1879);
        add_location(h21, file$6, 50, 12, 3333);
        set_style(img1, "float", "left");
        set_style(img1, "margin", "0");
        set_style(img1, "margin-right", "1em");
        set_style(img1, "margin-bottom", "1em");
        if (img1.src !== (img1_src_value = "uploads/newImages/Oscar Pekombe and us.jpg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "");
        add_location(img1, file$6, 53, 16, 3538);
        add_location(p2, file$6, 55, 20, 3715);
        add_location(p3, file$6, 56, 20, 4228);
        add_location(p4, file$6, 57, 20, 5014);
        add_location(div2, file$6, 54, 16, 3688);
        attr_dev(br1, "class", "svelte-1fpp3m6");
        add_location(br1, file$6, 59, 16, 5466);
        add_location(div3, file$6, 51, 12, 3371);
        attr_dev(div4, "class", "content");
        add_location(div4, file$6, 7, 8, 228);
        add_location(div5, file$6, 6, 4, 117);
        attr_dev(div6, "class", "page");
        add_location(div6, file$6, 4, 0, 74);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div6, anchor);

        if (default_slot) {
          default_slot.m(div6, null);
        }

        append_dev(div6, t0);
        append_dev(div6, div5);
        append_dev(div5, div4);
        append_dev(div4, h1);
        append_dev(div4, t2);
        append_dev(div4, h20);
        append_dev(div4, t4);
        append_dev(div4, div1);
        append_dev(div1, div0);
        append_dev(div0, img0);
        append_dev(div0, t5);
        append_dev(div0, p0);
        append_dev(div0, t7);
        append_dev(div0, p1);
        append_dev(div0, t9);
        append_dev(div0, ul);
        append_dev(ul, li0);
        append_dev(ul, t11);
        append_dev(ul, li1);
        append_dev(ul, t13);
        append_dev(ul, li2);
        append_dev(ul, t15);
        append_dev(ul, li3);
        append_dev(ul, t17);
        append_dev(ul, li4);
        append_dev(div1, t19);
        append_dev(div1, br0);
        append_dev(div4, t20);
        append_dev(div4, h21);
        append_dev(div4, t22);
        append_dev(div4, div3);
        append_dev(div3, img1);
        append_dev(div3, t23);
        append_dev(div3, div2);
        append_dev(div2, p2);
        append_dev(div2, t25);
        append_dev(div2, p3);
        append_dev(div2, t27);
        append_dev(div2, p4);
        append_dev(div3, t29);
        append_dev(div3, br1);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          1) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[0], dirty, null, null);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div5_outro) div5_outro.end(1);
          if (!div5_intro) div5_intro = create_in_transition(div5, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div5_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div5_intro) div5_intro.invalidate();
        div5_outro = create_out_transition(div5, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div6);
        if (default_slot) default_slot.d(detaching);
        if (detaching && div5_outro) div5_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$6.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$6($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Ministries", slots, ['default']);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Ministries> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [$$scope, slots];
  }

  var Ministries = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Ministries, _SvelteComponentDev);

    var _super = _createSuper(Ministries);

    function Ministries(options) {
      var _this;

      _classCallCheck(this, Ministries);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Ministries",
        options: options,
        id: create_fragment$6.name
      });
      return _this;
    }

    return Ministries;
  }(SvelteComponentDev);

  var file$7 = "src\\views\\About.svelte";

  function create_fragment$7(ctx) {
    var div5;
    var t0;
    var div4;
    var div3;
    var h1;
    var t2;
    var div1;
    var div0;
    var a0;
    var img0;
    var img0_src_value;
    var span1;
    var span0;
    var t4;
    var a1;
    var img1;
    var img1_src_value;
    var span3;
    var span2;
    var t6;
    var a2;
    var img2;
    var img2_src_value;
    var span5;
    var span4;
    var t8;
    var a3;
    var img3;
    var img3_src_value;
    var span7;
    var span6;
    var t10;
    var h20;
    var t12;
    var p0;
    var t14;
    var div2;
    var t15;
    var span8;
    var t17;
    var p1;
    var t19;
    var img4;
    var img4_src_value;
    var t20;
    var p2;
    var t22;
    var p3;
    var t24;
    var p4;
    var t25;
    var a4;
    var t27;
    var t28;
    var h21;
    var t30;
    var p5;
    var t31;
    var a5;
    var t33;
    var t34;
    var h30;
    var t36;
    var p6;
    var t38;
    var p7;
    var t40;
    var h31;
    var t42;
    var p8;
    var t43;
    var em0;
    var t45;
    var h32;
    var t47;
    var p9;
    var t48;
    var em1;
    var t50;
    var p10;
    var div4_intro;
    var div4_outro;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[1].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[0], null);
    var block = {
      c: function create() {
        div5 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div4 = element("div");
        div3 = element("div");
        h1 = element("h1");
        h1.textContent = "About Us";
        t2 = space();
        div1 = element("div");
        div0 = element("div");
        a0 = element("a");
        img0 = element("img");
        span1 = element("span");
        span0 = element("span");
        span0.textContent = "Staff";
        t4 = space();
        a1 = element("a");
        img1 = element("img");
        span3 = element("span");
        span2 = element("span");
        span2.textContent = "Events";
        t6 = space();
        a2 = element("a");
        img2 = element("img");
        span5 = element("span");
        span4 = element("span");
        span4.textContent = "Directions";
        t8 = space();
        a3 = element("a");
        img3 = element("img");
        span7 = element("span");
        span6 = element("span");
        span6.textContent = "Facebook";
        t10 = space();
        h20 = element("h2");
        h20.textContent = "Who We Are";
        t12 = space();
        p0 = element("p");
        p0.textContent = "First Christian Church of Galesburg was founded in 1872.  We are a manifestation of the church body known as The Christian Church (Disciples of Christ).  We have been worshiping and witnessing at this location since 1916, though the building was not completed and dedicated until 1928.";
        t14 = space();
        div2 = element("div");
        t15 = text("We are growing ");
        span8 = element("span");
        span8.textContent = "Spirit-filled, committed disciples of Christ";
        t17 = space();
        p1 = element("p");
        p1.textContent = "As \"Disciples of Christ\" we are one of over 4,000 similar congregations across the USA and Canada which had its origins on the American frontier in the early 19th century.  Founding fathers of our church organization were Thomas and Alexander Campbell, Barton W. Stone,and Walter Scott.  Since its beginning the Christian Church (Disciples of Christ) has endeavored to promote unity and to increase respect and understanding within the family of God.";
        t19 = space();
        img4 = element("img");
        t20 = space();
        p2 = element("p");
        p2.textContent = "As Disciples we strive to remain obedient to the Lordship and teachings of Jesus and the New Testament by practicing a faith which is socially relevant and intellectually sound.  Members are bound together in fellowship and service by belief in the central \"confession\" of the New Testament, that \"Jesus is the Christ, the Son of the living God.\"";
        t22 = space();
        p3 = element("p");
        p3.textContent = "In Illinois there are about 190 congregations of Disciples with over 50,000 members.";
        t24 = space();
        p4 = element("p");
        t25 = text("To access the web site of the national office of the Disciples of Christ, ");
        a4 = element("a");
        a4.textContent = "click here";
        t27 = text(".");
        t28 = space();
        h21 = element("h2");
        h21.textContent = "The Christian Church (Disciples of Christ)";
        t30 = space();
        p5 = element("p");
        t31 = text("First Christian Church is a part of the Christian Church (Disciples of Christ) denomination. For more information on the Disciples of Christ, see ");
        a5 = element("a");
        a5.textContent = "disciples.org";
        t33 = text(".");
        t34 = space();
        h30 = element("h3");
        h30.textContent = "Our Identity";
        t36 = space();
        p6 = element("p");
        p6.textContent = "We are Disciples of Christ, a movement for wholeness in a fragmented world.";
        t38 = space();
        p7 = element("p");
        p7.textContent = "As part of the one body of Christ, we welcome all to the Lord’s Table as God has welcomed us.";
        t40 = space();
        h31 = element("h3");
        h31.textContent = "Our Vision";
        t42 = space();
        p8 = element("p");
        t43 = text("To be a faithful, growing church, that demonstrates true community, deep Christian spirituality and a passion for justice. ");
        em0 = element("em");
        em0.textContent = "- Micah 6:8";
        t45 = space();
        h32 = element("h3");
        h32.textContent = "Our Mission";
        t47 = space();
        p9 = element("p");
        t48 = text("To be and to share the Good News of Jesus Christ, witnessing, loving and serving from our doorsteps \"to the ends of the earth.\" ");
        em1 = element("em");
        em1.textContent = "- Acts 1:8";
        t50 = space();
        p10 = element("p");
        p10.textContent = "And as First Christian in Galesburg, our mission is Growing Spirit-filled, committed disciples of Christ.";
        add_location(h1, file$7, 8, 12, 263);
        if (img0.src !== (img0_src_value = "/icons/round/staff.svg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "Staff");
        add_location(img0, file$7, 11, 61, 413);
        attr_dev(span0, "class", "inner");
        add_location(span0, file$7, 11, 131, 483);
        attr_dev(span1, "class", "linklabel");
        add_location(span1, file$7, 11, 107, 459);
        set_style(a0, "color", "#ad8559");
        attr_dev(a0, "href", "#staff");
        add_location(a0, file$7, 11, 20, 372);
        if (img1.src !== (img1_src_value = "/icons/round/events.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Events");
        add_location(img1, file$7, 12, 65, 593);
        attr_dev(span2, "class", "inner");
        add_location(span2, file$7, 12, 137, 665);
        attr_dev(span3, "class", "linklabel");
        add_location(span3, file$7, 12, 113, 641);
        set_style(a1, "color", "#0053a0");
        attr_dev(a1, "href", "#allevents");
        add_location(a1, file$7, 12, 20, 548);
        if (img2.src !== (img2_src_value = "/icons/round/directions.svg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "Directions");
        add_location(img2, file$7, 13, 247, 958);
        attr_dev(span4, "class", "inner");
        add_location(span4, file$7, 13, 327, 1038);
        attr_dev(span5, "class", "linklabel");
        add_location(span5, file$7, 13, 303, 1014);
        set_style(a2, "color", "#D40F41");
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        add_location(a2, file$7, 13, 20, 731);
        if (img3.src !== (img3_src_value = "/icons/round/facebooklogo.svg")) attr_dev(img3, "src", img3_src_value);
        attr_dev(img3, "alt", "Facebook");
        add_location(img3, file$7, 14, 174, 1262);
        attr_dev(span6, "class", "inner");
        add_location(span6, file$7, 14, 254, 1342);
        attr_dev(span7, "class", "linklabel");
        add_location(span7, file$7, 14, 230, 1318);
        set_style(a3, "color", "#2D88FF");
        attr_dev(a3, "target", "_blank");
        attr_dev(a3, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        add_location(a3, file$7, 14, 20, 1108);
        attr_dev(div0, "class", "inner");
        add_location(div0, file$7, 10, 16, 331);
        attr_dev(div1, "class", "links");
        add_location(div1, file$7, 9, 12, 294);
        add_location(h20, file$7, 18, 12, 1452);
        add_location(p0, file$7, 19, 12, 1485);
        attr_dev(span8, "class", "bigger");
        add_location(span8, file$7, 20, 49, 1828);
        attr_dev(div2, "class", "emphasis");
        add_location(div2, file$7, 20, 12, 1791);
        add_location(p1, file$7, 21, 12, 1920);
        if (img4.src !== (img4_src_value = "/primary-images/worshipservice.jpg")) attr_dev(img4, "src", img4_src_value);
        attr_dev(img4, "alt", "");
        add_location(img4, file$7, 22, 12, 2391);
        add_location(p2, file$7, 23, 12, 2458);
        add_location(p3, file$7, 24, 12, 2825);
        attr_dev(a4, "target", "_blank");
        attr_dev(a4, "href", "http://www.disciples.org/");
        add_location(a4, file$7, 25, 89, 3007);
        add_location(p4, file$7, 25, 12, 2930);
        add_location(h21, file$7, 27, 12, 3094);
        attr_dev(a5, "href", "http://disciples.org");
        add_location(a5, file$7, 28, 161, 3308);
        add_location(p5, file$7, 28, 12, 3159);
        add_location(h30, file$7, 30, 12, 3389);
        add_location(p6, file$7, 31, 12, 3424);
        add_location(p7, file$7, 32, 12, 3520);
        add_location(h31, file$7, 34, 12, 3636);
        add_location(em0, file$7, 35, 138, 3795);
        add_location(p8, file$7, 35, 12, 3669);
        add_location(h32, file$7, 37, 12, 3835);
        add_location(em1, file$7, 38, 143, 4000);
        add_location(p9, file$7, 38, 12, 3869);
        add_location(p10, file$7, 39, 12, 4037);
        attr_dev(div3, "class", "content");
        add_location(div3, file$7, 7, 8, 228);
        add_location(div4, file$7, 6, 4, 117);
        attr_dev(div5, "class", "page");
        add_location(div5, file$7, 4, 0, 74);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div5, anchor);

        if (default_slot) {
          default_slot.m(div5, null);
        }

        append_dev(div5, t0);
        append_dev(div5, div4);
        append_dev(div4, div3);
        append_dev(div3, h1);
        append_dev(div3, t2);
        append_dev(div3, div1);
        append_dev(div1, div0);
        append_dev(div0, a0);
        append_dev(a0, img0);
        append_dev(a0, span1);
        append_dev(span1, span0);
        append_dev(div0, t4);
        append_dev(div0, a1);
        append_dev(a1, img1);
        append_dev(a1, span3);
        append_dev(span3, span2);
        append_dev(div0, t6);
        append_dev(div0, a2);
        append_dev(a2, img2);
        append_dev(a2, span5);
        append_dev(span5, span4);
        append_dev(div0, t8);
        append_dev(div0, a3);
        append_dev(a3, img3);
        append_dev(a3, span7);
        append_dev(span7, span6);
        append_dev(div3, t10);
        append_dev(div3, h20);
        append_dev(div3, t12);
        append_dev(div3, p0);
        append_dev(div3, t14);
        append_dev(div3, div2);
        append_dev(div2, t15);
        append_dev(div2, span8);
        append_dev(div3, t17);
        append_dev(div3, p1);
        append_dev(div3, t19);
        append_dev(div3, img4);
        append_dev(div3, t20);
        append_dev(div3, p2);
        append_dev(div3, t22);
        append_dev(div3, p3);
        append_dev(div3, t24);
        append_dev(div3, p4);
        append_dev(p4, t25);
        append_dev(p4, a4);
        append_dev(p4, t27);
        append_dev(div3, t28);
        append_dev(div3, h21);
        append_dev(div3, t30);
        append_dev(div3, p5);
        append_dev(p5, t31);
        append_dev(p5, a5);
        append_dev(p5, t33);
        append_dev(div3, t34);
        append_dev(div3, h30);
        append_dev(div3, t36);
        append_dev(div3, p6);
        append_dev(div3, t38);
        append_dev(div3, p7);
        append_dev(div3, t40);
        append_dev(div3, h31);
        append_dev(div3, t42);
        append_dev(div3, p8);
        append_dev(p8, t43);
        append_dev(p8, em0);
        append_dev(div3, t45);
        append_dev(div3, h32);
        append_dev(div3, t47);
        append_dev(div3, p9);
        append_dev(p9, t48);
        append_dev(p9, em1);
        append_dev(div3, t50);
        append_dev(div3, p10);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          1) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[0], dirty, null, null);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div4_outro) div4_outro.end(1);
          if (!div4_intro) div4_intro = create_in_transition(div4, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div4_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div4_intro) div4_intro.invalidate();
        div4_outro = create_out_transition(div4, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div5);
        if (default_slot) default_slot.d(detaching);
        if (detaching && div4_outro) div4_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$7.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$7($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("About", slots, ['default']);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [$$scope, slots];
  }

  var About = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(About, _SvelteComponentDev);

    var _super = _createSuper(About);

    function About(options) {
      var _this;

      _classCallCheck(this, About);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "About",
        options: options,
        id: create_fragment$7.name
      });
      return _this;
    }

    return About;
  }(SvelteComponentDev);

  var file$8 = "src\\components\\StaffBio.svelte";

  function create_fragment$8(ctx) {
    var div2;
    var div0;
    var t1;
    var div1;
    var img;
    var img_src_value;
    var img_alt_value;
    var t2;
    var span3;
    var span0;
    var t3_value =
    /*staffer*/
    ctx[0].name + "";
    var t3;
    var t4;
    var span1;
    var br;
    var t5_value =
    /*staffer*/
    ctx[0].title + "";
    var t5;
    var t6;
    var span2;
    var raw_value =
    /*staffer*/
    ctx[0].bio + "";
    var div1_intro;
    var div1_outro;
    var div2_transition;
    var current;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        div2 = element("div");
        div0 = element("div");
        div0.textContent = "×";
        t1 = space();
        div1 = element("div");
        img = element("img");
        t2 = space();
        span3 = element("span");
        span0 = element("span");
        t3 = text(t3_value);
        t4 = space();
        span1 = element("span");
        br = element("br");
        t5 = text(t5_value);
        t6 = space();
        span2 = element("span");
        attr_dev(div0, "class", "close");
        add_location(div0, file$8, 9, 4, 239);
        if (img.src !== (img_src_value =
        /*staffer*/
        ctx[0].src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", img_alt_value =
        /*staffer*/
        ctx[0].name + " " +
        /*staffer*/
        ctx[0].title);
        attr_dev(img, "class", "svelte-1rb0m4q");
        add_location(img, file$8, 11, 8, 430);
        attr_dev(span0, "class", "name svelte-1rb0m4q");
        add_location(span0, file$8, 13, 12, 544);
        add_location(br, file$8, 14, 32, 620);
        attr_dev(span1, "class", "title svelte-1rb0m4q");
        add_location(span1, file$8, 14, 12, 600);
        attr_dev(span2, "class", "bio svelte-1rb0m4q");
        add_location(span2, file$8, 15, 12, 662);
        attr_dev(span3, "class", "description svelte-1rb0m4q");
        add_location(span3, file$8, 12, 8, 504);
        attr_dev(div1, "class", "side-by-side svelte-1rb0m4q");
        add_location(div1, file$8, 10, 4, 314);
        attr_dev(div2, "class", "bio-frame svelte-1rb0m4q");
        add_location(div2, file$8, 8, 0, 194);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, div0);
        append_dev(div2, t1);
        append_dev(div2, div1);
        append_dev(div1, img);
        append_dev(div1, t2);
        append_dev(div1, span3);
        append_dev(span3, span0);
        append_dev(span0, t3);
        append_dev(span3, t4);
        append_dev(span3, span1);
        append_dev(span1, br);
        append_dev(span1, t5);
        append_dev(span3, t6);
        append_dev(span3, span2);
        span2.innerHTML = raw_value;
        current = true;

        if (!mounted) {
          dispose = listen_dev(div0, "click",
          /*click_handler*/
          ctx[2], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (!current || dirty &
        /*staffer*/
        1 && img.src !== (img_src_value =
        /*staffer*/
        ctx[0].src)) {
          attr_dev(img, "src", img_src_value);
        }

        if (!current || dirty &
        /*staffer*/
        1 && img_alt_value !== (img_alt_value =
        /*staffer*/
        ctx[0].name + " " +
        /*staffer*/
        ctx[0].title)) {
          attr_dev(img, "alt", img_alt_value);
        }

        if ((!current || dirty &
        /*staffer*/
        1) && t3_value !== (t3_value =
        /*staffer*/
        ctx[0].name + "")) set_data_dev(t3, t3_value);
        if ((!current || dirty &
        /*staffer*/
        1) && t5_value !== (t5_value =
        /*staffer*/
        ctx[0].title + "")) set_data_dev(t5, t5_value);
        if ((!current || dirty &
        /*staffer*/
        1) && raw_value !== (raw_value =
        /*staffer*/
        ctx[0].bio + "")) span2.innerHTML = raw_value;
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          if (!div1_intro) div1_intro = create_in_transition(div1, fly, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div1_intro.start();
        });
        add_render_callback(function () {
          if (!div2_transition) div2_transition = create_bidirectional_transition(div2, fade, {}, true);
          div2_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1, fly, {
          y: -300,
          duration: 300
        });
        if (!div2_transition) div2_transition = create_bidirectional_transition(div2, fade, {}, false);
        div2_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (detaching && div1_outro) div1_outro.end();
        if (detaching && div2_transition) div2_transition.end();
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$8.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$8($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("StaffBio", slots, []);
    var staffer = $$props.staffer;
    var dispatch = createEventDispatcher();
    var writable_props = ["staffer"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<StaffBio> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      dispatch("close");
    };

    $$self.$$set = function ($$props) {
      if ("staffer" in $$props) $$invalidate(0, staffer = $$props.staffer);
    };

    $$self.$capture_state = function () {
      return {
        createEventDispatcher: createEventDispatcher,
        fade: fade,
        fly: fly,
        staffer: staffer,
        dispatch: dispatch
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("staffer" in $$props) $$invalidate(0, staffer = $$props.staffer);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [staffer, dispatch, click_handler];
  }

  var StaffBio = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(StaffBio, _SvelteComponentDev);

    var _super = _createSuper(StaffBio);

    function StaffBio(options) {
      var _this;

      _classCallCheck(this, StaffBio);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {
        staffer: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "StaffBio",
        options: options,
        id: create_fragment$8.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*staffer*/
      ctx[0] === undefined && !("staffer" in props)) {
        console.warn("<StaffBio> was created without expected prop 'staffer'");
      }

      return _this;
    }

    _createClass(StaffBio, [{
      key: "staffer",
      get: function get() {
        throw new Error("<StaffBio>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<StaffBio>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return StaffBio;
  }(SvelteComponentDev);

  var file$9 = "src\\views\\Staff.svelte";

  function get_each_context_1$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
  }

  function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    child_ctx[10] = i;
    return child_ctx;
  } // (36:28) {#each staffer.emails as email}


  function create_each_block_1$1(ctx) {
    var div;
    var a;
    var t_value =
    /*email*/
    ctx[11] + "";
    var t;
    var a_href_value;
    var block = {
      c: function create() {
        div = element("div");
        a = element("a");
        t = text(t_value);
        attr_dev(a, "target", "_blank");
        attr_dev(a, "href", a_href_value = "mailto:" +
        /*email*/
        ctx[11]);
        attr_dev(a, "class", "svelte-1mo2m1e");
        add_location(a, file$9, 36, 51, 9927);
        attr_dev(div, "class", "email svelte-1mo2m1e");
        add_location(div, file$9, 36, 32, 9908);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, a);
        append_dev(a, t);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1$1.name,
      type: "each",
      source: "(36:28) {#each staffer.emails as email}",
      ctx: ctx
    });
    return block;
  } // (31:16) {#each staffers as staffer, i}


  function create_each_block$1(ctx) {
    var div2;
    var img;
    var img_src_value;
    var t0;
    var div1;
    var t1_value =
    /*staffer*/
    ctx[8].name + "";
    var t1;
    var t2;
    var div0;
    var t3_value =
    /*staffer*/
    ctx[8].title + "";
    var t3;
    var t4;
    var t5;
    var mounted;
    var dispose;
    var each_value_1 =
    /*staffer*/
    ctx[8].emails;
    validate_each_argument(each_value_1);
    var each_blocks = [];

    for (var i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    }

    function click_handler_1() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler_1*/
        (_ctx = ctx)[6].apply(_ctx, [
        /*staffer*/
        ctx[8]].concat(args))
      );
    }

    var block = {
      c: function create() {
        div2 = element("div");
        img = element("img");
        t0 = space();
        div1 = element("div");
        t1 = text(t1_value);
        t2 = space();
        div0 = element("div");
        t3 = text(t3_value);
        t4 = space();

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        t5 = space();
        if (img.src !== (img_src_value =
        /*staffer*/
        ctx[8].src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        attr_dev(img, "class", "svelte-1mo2m1e");
        add_location(img, file$9, 32, 24, 9620);
        attr_dev(div0, "class", "title svelte-1mo2m1e");
        add_location(div0, file$9, 34, 28, 9771);
        attr_dev(div1, "class", "staff-name svelte-1mo2m1e");
        add_location(div1, file$9, 33, 24, 9676);
        attr_dev(div2, "class", "staff-box svelte-1mo2m1e");
        add_location(div2, file$9, 31, 20, 9515);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, img);
        append_dev(div2, t0);
        append_dev(div2, div1);
        append_dev(div1, t1);
        append_dev(div1, t2);
        append_dev(div1, div0);
        append_dev(div0, t3);
        append_dev(div1, t4);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div1, null);
        }

        append_dev(div2, t5);

        if (!mounted) {
          dispose = [listen_dev(div1, "click", stop_propagation(
          /*click_handler*/
          ctx[5]), false, false, true), listen_dev(div2, "click", click_handler_1, false, false, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;

        if (dirty &
        /*staffers*/
        4) {
          each_value_1 =
          /*staffer*/
          ctx[8].emails;
          validate_each_argument(each_value_1);

          var _i3;

          for (_i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
            var child_ctx = get_each_context_1$1(ctx, each_value_1, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block_1$1(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(div1, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value_1.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$1.name,
      type: "each",
      source: "(31:16) {#each staffers as staffer, i}",
      ctx: ctx
    });
    return block;
  } // (47:0) {#if showBio}


  function create_if_block$4(ctx) {
    var staffbio;
    var current;
    staffbio = new StaffBio({
      props: {
        staffer:
        /*curStaffer*/
        ctx[0]
      },
      $$inline: true
    });
    staffbio.$on("close",
    /*close_handler*/
    ctx[7]);
    var block = {
      c: function create() {
        create_component(staffbio.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(staffbio, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var staffbio_changes = {};
        if (dirty &
        /*curStaffer*/
        1) staffbio_changes.staffer =
        /*curStaffer*/
        ctx[0];
        staffbio.$set(staffbio_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(staffbio.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(staffbio.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(staffbio, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$4.name,
      type: "if",
      source: "(47:0) {#if showBio}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$9(ctx) {
    var div3;
    var t0;
    var div2;
    var div1;
    var h1;
    var t2;
    var p;
    var t4;
    var div0;
    var div2_intro;
    var div2_outro;
    var t5;
    var if_block_anchor;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);
    var each_value =
    /*staffers*/
    ctx[2];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }

    var if_block =
    /*showBio*/
    ctx[1] && create_if_block$4(ctx);
    var block = {
      c: function create() {
        div3 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div2 = element("div");
        div1 = element("div");
        h1 = element("h1");
        h1.textContent = "Church Staff";
        t2 = space();
        p = element("p");
        p.textContent = "Click any photo for a brief staff biography.";
        t4 = space();
        div0 = element("div");

        for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].c();
        }

        t5 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        add_location(h1, file$9, 26, 12, 9319);
        add_location(p, file$9, 27, 12, 9354);
        attr_dev(div0, "class", "photo-grid svelte-1mo2m1e");
        add_location(div0, file$9, 29, 12, 9421);
        attr_dev(div1, "class", "content");
        add_location(div1, file$9, 25, 8, 9284);
        add_location(div2, file$9, 24, 4, 9173);
        attr_dev(div3, "class", "page");
        add_location(div3, file$9, 22, 0, 9130);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div3, anchor);

        if (default_slot) {
          default_slot.m(div3, null);
        }

        append_dev(div3, t0);
        append_dev(div3, div2);
        append_dev(div2, div1);
        append_dev(div1, h1);
        append_dev(div1, t2);
        append_dev(div1, p);
        append_dev(div1, t4);
        append_dev(div1, div0);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].m(div0, null);
        }

        insert_dev(target, t5, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          8) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[3], dirty, null, null);
          }
        }

        if (dirty &
        /*curStaffer, staffers, showBio*/
        7) {
          each_value =
          /*staffers*/
          ctx[2];
          validate_each_argument(each_value);

          var _i6;

          for (_i6 = 0; _i6 < each_value.length; _i6 += 1) {
            var child_ctx = get_each_context$1(ctx, each_value, _i6);

            if (each_blocks[_i6]) {
              each_blocks[_i6].p(child_ctx, dirty);
            } else {
              each_blocks[_i6] = create_each_block$1(child_ctx);

              each_blocks[_i6].c();

              each_blocks[_i6].m(div0, null);
            }
          }

          for (; _i6 < each_blocks.length; _i6 += 1) {
            each_blocks[_i6].d(1);
          }

          each_blocks.length = each_value.length;
        }

        if (
        /*showBio*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*showBio*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$4(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div2_outro) div2_outro.end(1);
          if (!div2_intro) div2_intro = create_in_transition(div2, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div2_intro.start();
        });
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div2_intro) div2_intro.invalidate();
        div2_outro = create_out_transition(div2, flyModified, {
          y: -300,
          duration: 300
        });
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div3);
        if (default_slot) default_slot.d(detaching);
        destroy_each(each_blocks, detaching);
        if (detaching && div2_outro) div2_outro.end();
        if (detaching) detach_dev(t5);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$9.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$9($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Staff", slots, ['default']);
    var curStaffer;
    var showBio = false;
    var staffers = [{
      name: "MJ and Greg Fitch",
      emails: ["pastormj02@gmail.com", "pastorgreg02@gmail.com"],
      title: "Co-Pastors",
      src: "/staff-photos/mj.jpg",
      bio: "<h3>Martha Jean</h3><p>A native of Oklahoma, she has spent much of her life in Texas. She holds a BA in Religion from Texas Christian University in Fort Worth, Texas, and a Master of Divinity from the Brite Divinity School in Fort Worth. She has served as a Minister to Children at South Hills Christian Church in Fort Worth and as a Co-Pastor with her husband Greg at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. Pastor Martha-Jean (MJ) has served First Christian in Galesburg since July 2003.</p> <p>She and her husband Greg have three children. In her personal time, Pastor MJ enjoys reading, cross-stitching, playing the piano and cooking.</p><h3>Greg</h3><p>A native of Nebraska, Pastor Greg has spent much of his life in Colorado. He holds a BA in Religion from Texas Christian University in Fort Worth, Texas and a Master of Divinity from the Brite Divinity School in Fort Worth. He has served as an Associate Minister at Rosemont Christian Church in Dallas, Texas and as a Co-Pastor with his wife Martha-Jean at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. He also served for 3 years as the Associate Regional Minister of the Christian Church (Disciples of Christ) in Colorado-Wyoming. Pastor Greg has served First Christian in Galesburg since July 2003.</p><p>He and his wife Martha-Jean have three children and one grandchild. In his personal time, Pastor Greg enjoys golfing, fishing, reading, cross-stitching, and cooking.</p>"
    }, // { name: 'Greg Fitch', title: "Pastor", src: '/staff-photos/greg.jpg', bio: "<p>A native of Nebraska, Pastor Greg has spent much of his life in Colorado. He holds a BA in Religion from Texas Christian University in Fort Worth, Texas and a Master of Divinity from the Brite Divinity School in Fort Worth. He has served as an Associate Minister at Rosemont Christian Church in Dallas, Texas and as a Co-Pastor with his wife Martha-Jean at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. He also served for 3 years as the Associate Regional Minister of the Christian Church (Disciples of Christ) in Colorado-Wyoming. Pastor Greg has served First Christian in Galesburg since July 2003.</p><p>He and his wife Martha-Jean have three children. In his personal time, Pastor Greg enjoys golfing, fishing, reading, cross-stitching, and cooking.</p>"},
    // { name: 'Christina Griswold', title: "Office Manager", emails: ["fccgalesburg@gmail.com"], src: '/staff-photos/christina.jpg', bio: "<p>Christina Moved to Galesburg from Canton, Il when she married her husband Rich in 2012. She and her husband are raising their son Luke, a student at GHS. Christina has previously held positions in children's ministry and is enjoying her role at FCC. \"I love greeting the church family in the office and helping every way possible.\"</p>"},
    {
      name: "Lorraine Stone",
      title: "Secretary/Treasurer",
      emails: ["fccgalesburg@gmail.com"],
      src: "/staff-photos/lorraine.jpg",
      bio: "<p>Lorraine was raised in Knoxville and graduated from Knoxville High School. She earned an associates in administrative secretarial degree from Carl Sandburg College. She says, \"God has blessed me with a loving husband, three wonderful children, and an amazing grandson. I enjoy reading, cross-stitch and puzzles.\"</p>"
    }, // { name: 'Lynda White', title: "Treasurer/Bookkeeper", emails: ["fcclwhite@gmail.com"], src: '/staff-photos/lynda.jpg', bio: "<p>Lynda is a member of First Christian Church and has been the Bookkeeper since February 2000. She graduated from Galesburg High School. She is married with three children and six grandchildren.</p>"},
    {
      name: "Steve Jackson",
      title: "Minister of Music",
      emails: ["sjackson@sandburg.edu"],
      src: "/staff-photos/steve.jpg",
      bio: "<p>Steve joined the staff of First Christian Church in August 2009. Steve is a native of Galesburg who graduated from Galesburg High School in 1985, majored in music and philosophy at Knox College (1989), and earned a doctorate in music (jazz studies) at the University of Illinois (May 2009). Steve has served in music ministry (and in youth ministry with his wife Tracy) at Norwood Gospel Chapel and Northwest Bible Chapel in Chicago and at Stratford Park Bible Chapel in Champaign. Steve and Tracy have two children. Steve also teaches music classes at Carl Sandburg College and plays in the Knox-Galesburg Symphony.</p>"
    }, // { name: 'Mary Harlan', title: "Organist", emails: [], src: '/staff-photos/harlan.jpg', bio: "<p>Mary grew up in a farming family outside of Oneida, Illinois, and has been active in music her entire life.  She received a Bachelor of Music in Organ Performance from Southern Illinois University in Carbondale, IL in 1992, and a Master of Music in Organ Performance and Church Music from Indiana University in Bloomington, IN in 1995.  Mary serves as Director of Music and Organist at Covenant Church in Galesburg, IL and is delighted to be serving at First Christian Church too. She teaches piano and organ to many children and adults and organ at Knox College. Mary is also the pianist/organist at Hinchliff Pearson and West Funeral Home in Galesburg and involved in accompanying voice and instrumental students at area high schools.  Mary is thrilled that Brady Warner, a very talented piano and organ student, is also serving at First Christian Church.</p><p>Mary lives in Oneida, has three grown children who are married and five awesome grandchildren!  Her favorite days are those spent with family.  Mary also enjoys time with friends, and sewing, baking/cooking and gardening.</p>"},
    {
      name: "Brady Warner",
      title: "Pianist",
      emails: [],
      src: "/staff-photos/warner.jpg",
      bio: "<p>Hi everyone!  My name is Brady Warner.  I am 15 years old and a junior at Galesburg High School.  I have been taking piano lessons for as long as I can remember, but with Mary Harlan for about 8 years (we think).  I started taking organ lessons in 2019 before the pandemic, but have just started taking them again, hoping to begin playing the organ for the congregation soon.  I am in Wind Symphony at the high school, as well as Marching Band, Jazz Band, and a newly founded saxophone quartet.  I am looking forward to playing at your church, and I am very glad to be given this opportunity!</p>"
    }, // { name: 'Luke Acerra', title: "Organist/Keyboardist", emails: ["luke@luxblox.com"], src: '/staff-photos/luke.jpg', bio: "<p>Luke Acerra is a musician from Galesburg, Illinois who recently finished his studies at Indiana University’s Jacob School of Music. Luke graduated with a double BM in cello performance and music composition in May 2019, and continued the following year as a performance diploma student with former LA Philharmonic principal cellist, Peter Stumpf. Luke has studied and performed in masterclasses for cello and composition in the United States as well as Europe. He won two consecutive summer grants from IU’s Honors College to study at the Nadia Boulanger Institute in Paris, France as well as Music-Alp International Academy of Music in Tignes, France respectively. In addition to his principle studies of cello and composition, Luke has played church organ since junior high school. He greatly looks forward to being part of the First Christian Church community and contributing music for the congregation.</p>"},
    // { name: 'Bob Conley', title: "Custodian", src: '/staff-photos/bob.jpg', bio: "<p>Bob grew up in Knoxville and worked for some years at Gates.  He then moved to Arizona and worked for Abbott Laboratories until he reached retirement age.  After retirement he returned to this area and again lives in Knoxville. He has two adult children.</p>"}
    {
      name: "Carlos Juarez",
      title: "Custodian",
      emails: [],
      src: "/staff-photos/carlos.png",
      bio: "<p>We are praising God for our new custodian: Carlos Juarez. Carlos shares this: I'm grateful and thankful to First Christian Church for the opportunity to work here with an excellent staff that I am getting to know and hope to continue serving my brothers in Christ.  I would say to the community that it would be a good time to start seeking Christ no matter what denomination as long as you seek the truth and the truth will set you free.  I am willing to go the extra mile to accommodate the needs of this church and if there is anything that I can help the members or congregation with, I would be glad to try to find time and help them.  I would ask people to pray for my family – 5 kids, 18 grandkids – that they may also find Christ and find a narrow path to righteousness. God Bless you all in the name of the Lord and wish everyone a journey in Christ Jesus.</p>"
    }];
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Staff> was created with unknown prop '".concat(key, "'"));
    });

    function click_handler(event) {
      bubble($$self, event);
    }

    var click_handler_1 = function click_handler_1(staffer) {
      $$invalidate(0, curStaffer = staffer);
      $$invalidate(1, showBio = true);
    };

    var close_handler = function close_handler() {
      $$invalidate(1, showBio = false);
    };

    $$self.$$set = function ($$props) {
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        StaffBio: StaffBio,
        curStaffer: curStaffer,
        showBio: showBio,
        staffers: staffers
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("curStaffer" in $$props) $$invalidate(0, curStaffer = $$props.curStaffer);
      if ("showBio" in $$props) $$invalidate(1, showBio = $$props.showBio);
      if ("staffers" in $$props) $$invalidate(2, staffers = $$props.staffers);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [curStaffer, showBio, staffers, $$scope, slots, click_handler, click_handler_1, close_handler];
  }

  var Staff = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Staff, _SvelteComponentDev);

    var _super = _createSuper(Staff);

    function Staff(options) {
      var _this;

      _classCallCheck(this, Staff);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Staff",
        options: options,
        id: create_fragment$9.name
      });
      return _this;
    }

    return Staff;
  }(SvelteComponentDev);

  var file$a = "src\\views\\Links.svelte";

  function create_fragment$a(ctx) {
    var div4;
    var t0;
    var div3;
    var div2;
    var h1;
    var t2;
    var div1;
    var div0;
    var a0;
    var img0;
    var img0_src_value;
    var span1;
    var span0;
    var t4;
    var a1;
    var img1;
    var img1_src_value;
    var span3;
    var span2;
    var t6;
    var a2;
    var img2;
    var img2_src_value;
    var span5;
    var span4;
    var t8;
    var h20;
    var t10;
    var ul0;
    var li0;
    var a3;
    var t12;
    var p0;
    var t14;
    var li1;
    var a4;
    var t16;
    var p1;
    var t18;
    var h21;
    var t20;
    var ul1;
    var li2;
    var a5;
    var t22;
    var p2;
    var t24;
    var li3;
    var a6;
    var t26;
    var p3;
    var t28;
    var li4;
    var a7;
    var t30;
    var p4;
    var t32;
    var li5;
    var a8;
    var t34;
    var p5;
    var t36;
    var li6;
    var a9;
    var t38;
    var p6;
    var t40;
    var h22;
    var t42;
    var h30;
    var t44;
    var ul2;
    var li7;
    var a10;
    var t46;
    var li8;
    var a11;
    var t48;
    var li9;
    var a12;
    var t50;
    var li10;
    var a13;
    var t52;
    var li11;
    var a14;
    var t54;
    var li12;
    var a15;
    var t56;
    var li13;
    var a16;
    var t58;
    var li14;
    var a17;
    var t60;
    var h31;
    var t62;
    var p7;
    var t64;
    var p8;
    var t66;
    var p9;
    var t68;
    var ul3;
    var li15;
    var a18;
    var t70;
    var li16;
    var a19;
    var t72;
    var li17;
    var a20;
    var t74;
    var li18;
    var a21;
    var t76;
    var li19;
    var a22;
    var t78;
    var li20;
    var a23;
    var t80;
    var li21;
    var a24;
    var t82;
    var li22;
    var a25;
    var t84;
    var li23;
    var a26;
    var t86;
    var li24;
    var a27;
    var t88;
    var li25;
    var a28;
    var t90;
    var li26;
    var a29;
    var div3_intro;
    var div3_outro;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[1].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[0], null);
    var block = {
      c: function create() {
        div4 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div3 = element("div");
        div2 = element("div");
        h1 = element("h1");
        h1.textContent = "Resources";
        t2 = space();
        div1 = element("div");
        div0 = element("div");
        a0 = element("a");
        img0 = element("img");
        span1 = element("span");
        span0 = element("span");
        span0.textContent = "Sermons";
        t4 = space();
        a1 = element("a");
        img1 = element("img");
        span3 = element("span");
        span2 = element("span");
        span2.textContent = "Newsletters";
        t6 = space();
        a2 = element("a");
        img2 = element("img");
        span5 = element("span");
        span4 = element("span");
        span4.textContent = "Tithe.ly";
        t8 = space();
        h20 = element("h2");
        h20.textContent = "Disciples of Christ";
        t10 = space();
        ul0 = element("ul");
        li0 = element("li");
        a3 = element("a");
        a3.textContent = "The Christian Church (Disciples of Christ) in the United States and Canada";
        t12 = space();
        p0 = element("p");
        p0.textContent = "The national office for the Christian Church (Disciples of Christ), with information about the denomination and resources for church leaders and congregations.";
        t14 = space();
        li1 = element("li");
        a4 = element("a");
        a4.textContent = "The Christian Church of Illinois and Wisconsin (CCIW)";
        t16 = space();
        p1 = element("p");
        p1.textContent = "The home page of the regional office of the Christian Church in Illinois and Wisconsin. Here you will find information about activities, news, and links to other regional churches.";
        t18 = space();
        h21 = element("h2");
        h21.textContent = "Bible Reading and Devotion";
        t20 = space();
        ul1 = element("ul");
        li2 = element("li");
        a5 = element("a");
        a5.textContent = "Bible Gateway";
        t22 = space();
        p2 = element("p");
        p2.textContent = "Online Bible verse lookup and Bible reading tool that allows you to read verses in multiple versions.";
        t24 = space();
        li3 = element("li");
        a6 = element("a");
        a6.textContent = "YouVersion";
        t26 = space();
        p3 = element("p");
        p3.textContent = "Bible apps for adults and kids that run on Android, iOS, various smart home speakers, and in the browser.";
        t28 = space();
        li4 = element("li");
        a7 = element("a");
        a7.textContent = "Back to the Bible";
        t30 = space();
        p4 = element("p");
        p4.textContent = "Provides schedules for reading the Bible in one year as well as multiple devotional readings.";
        t32 = space();
        li5 = element("li");
        a8 = element("a");
        a8.textContent = "Christian Classics Ethereal Library";
        t34 = space();
        p5 = element("p");
        p5.textContent = "A large collection of classic Christian books available online at no charge.";
        t36 = space();
        li6 = element("li");
        a9 = element("a");
        a9.textContent = "Bible-Reading.com";
        t38 = space();
        p6 = element("p");
        p6.textContent = "Has links to the schedule for reading the Bible in one year, as well as numerous other Bible reading choices.";
        t40 = space();
        h22 = element("h2");
        h22.textContent = "Congo Resources";
        t42 = space();
        h30 = element("h3");
        h30.textContent = "English";
        t44 = space();
        ul2 = element("ul");
        li7 = element("li");
        a10 = element("a");
        a10.textContent = "Congo Book 1";
        t46 = space();
        li8 = element("li");
        a11 = element("a");
        a11.textContent = "Congo Book First 50 Years";
        t48 = space();
        li9 = element("li");
        a12 = element("a");
        a12.textContent = "Congo Book Decade 6";
        t50 = space();
        li10 = element("li");
        a13 = element("a");
        a13.textContent = "Congo Book Decade 7";
        t52 = space();
        li11 = element("li");
        a14 = element("a");
        a14.textContent = "Congo Book Decade 8";
        t54 = space();
        li12 = element("li");
        a15 = element("a");
        a15.textContent = "Congo Book Decade 9";
        t56 = space();
        li13 = element("li");
        a16 = element("a");
        a16.textContent = "Congo Book Decade 10";
        t58 = space();
        li14 = element("li");
        a17 = element("a");
        a17.textContent = "50 Years in Congo";
        t60 = space();
        h31 = element("h3");
        h31.textContent = "French";
        t62 = space();
        p7 = element("p");
        p7.textContent = "En 1999, j'ai écrit un livre décrivant l'histoire de l'œuvre de missionnaires envoyés au Congo par l'Église Chrétienne, Disciples du Christ, en Amérique. Le livre a été intitulé \"Congo Centenaire, les Deuxième Cinquante Ans \":. J'ai maintenant terminé une traduction du livre en français pour l'utilisation des Congolais. Cette traduction n'a pas été vérifiée par quelqu'un d'autre. Depuis que le françai";
        t64 = space();
        p8 = element("p");
        p8.textContent = "Centennaire11.pdfs n'est pas ma première langue, et à cause de ma mauvaise vision, il y a sans doute beaucoup d'erreurs de grammaire. Toutefois, le sens du texte devrait être clair.";
        t66 = space();
        p9 = element("p");
        p9.textContent = "J'ai divisé le livre en chapitres pour le rendre plus facile à télécharger. # 1 est l'information préliminaire. # 2 raconte les 50 premières années. Les numéros 3, 5, 7 et 9 ont des photos et des informations biographiques sur les missionnaires qui étaient nouveaux à chaque décennie. Les numéros 4, 6, 8 et 10 décrivent les activités qui ont eu lieu au cours de la 6e, 7e, 8e et 9e décennies. # 11, quand il y avait seulement 2 nouveaux missionnaires, inclus à la fois des photos et du texte de la dixième décennie.";
        t68 = space();
        ul3 = element("ul");
        li15 = element("li");
        a18 = element("a");
        a18.textContent = "Centennaire 1";
        t70 = space();
        li16 = element("li");
        a19 = element("a");
        a19.textContent = "Centennaire 2";
        t72 = space();
        li17 = element("li");
        a20 = element("a");
        a20.textContent = "Centennaire 3";
        t74 = space();
        li18 = element("li");
        a21 = element("a");
        a21.textContent = "Centennaire 4";
        t76 = space();
        li19 = element("li");
        a22 = element("a");
        a22.textContent = "Centennaire 5";
        t78 = space();
        li20 = element("li");
        a23 = element("a");
        a23.textContent = "Centennaire 6";
        t80 = space();
        li21 = element("li");
        a24 = element("a");
        a24.textContent = "Centennaire 7";
        t82 = space();
        li22 = element("li");
        a25 = element("a");
        a25.textContent = "Centennaire 8";
        t84 = space();
        li23 = element("li");
        a26 = element("a");
        a26.textContent = "Centennaire 9";
        t86 = space();
        li24 = element("li");
        a27 = element("a");
        a27.textContent = "Centennaire 10";
        t88 = space();
        li25 = element("li");
        a28 = element("a");
        a28.textContent = "Centennaire 11";
        t90 = space();
        li26 = element("li");
        a29 = element("a");
        a29.textContent = "50 Ans au Congo";
        add_location(h1, file$a, 8, 12, 263);
        if (img0.src !== (img0_src_value = "/icons/round/sermons.svg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "Sermons");
        add_location(img0, file$a, 11, 39, 392);
        attr_dev(span0, "class", "inner");
        add_location(span0, file$a, 11, 113, 466);
        attr_dev(span1, "class", "linklabel");
        add_location(span1, file$a, 11, 89, 442);
        attr_dev(a0, "href", "#sermons");
        add_location(a0, file$a, 11, 20, 373);
        if (img1.src !== (img1_src_value = "/icons/round/newsletters.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Newsletters");
        add_location(img1, file$a, 12, 67, 580);
        attr_dev(span2, "class", "inner");
        add_location(span2, file$a, 12, 149, 662);
        attr_dev(span3, "class", "linklabel");
        add_location(span3, file$a, 12, 125, 638);
        set_style(a1, "color", "#1e7953");
        attr_dev(a1, "href", "#newsletters");
        add_location(a1, file$a, 12, 20, 533);
        if (img2.src !== (img2_src_value = "/icons/round/tithely.svg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "Give online");
        add_location(img2, file$a, 13, 102, 815);
        attr_dev(span4, "class", "inner");
        add_location(span4, file$a, 13, 180, 893);
        attr_dev(span5, "class", "linklabel");
        add_location(span5, file$a, 13, 156, 869);
        set_style(a2, "color", "#1e7953");
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "https://tithe.ly/give?c=1478951");
        add_location(a2, file$a, 13, 20, 733);
        attr_dev(div0, "class", "inner");
        add_location(div0, file$a, 10, 16, 332);
        attr_dev(div1, "class", "links");
        add_location(div1, file$a, 9, 12, 295);
        add_location(h20, file$a, 17, 12, 999);
        attr_dev(a3, "href", "https://disciples.org/");
        attr_dev(a3, "target", "_blank");
        add_location(a3, file$a, 20, 20, 1107);
        add_location(p0, file$a, 21, 20, 1256);
        add_location(li0, file$a, 19, 16, 1081);
        attr_dev(a4, "href", "https://cciwdisciples.org/");
        attr_dev(a4, "target", "_blank");
        add_location(a4, file$a, 24, 20, 1489);
        add_location(p1, file$a, 25, 20, 1621);
        add_location(li1, file$a, 23, 16, 1463);
        attr_dev(ul0, "class", "link-page");
        add_location(ul0, file$a, 18, 12, 1041);
        add_location(h21, file$a, 29, 12, 1866);
        attr_dev(a5, "href", "https://www.biblegateway.com/");
        attr_dev(a5, "target", "_blank");
        add_location(a5, file$a, 32, 20, 1981);
        add_location(p2, file$a, 33, 20, 2076);
        add_location(li2, file$a, 31, 16, 1955);
        attr_dev(a6, "href", "https://www.youversion.com/");
        attr_dev(a6, "target", "_blank");
        add_location(a6, file$a, 36, 20, 2251);
        add_location(p3, file$a, 37, 20, 2341);
        add_location(li3, file$a, 35, 16, 2225);
        attr_dev(a7, "href", "https://www.backtothebible.org/forward");
        attr_dev(a7, "target", "_blank");
        add_location(a7, file$a, 40, 20, 2520);
        add_location(p4, file$a, 41, 20, 2628);
        add_location(li4, file$a, 39, 16, 2494);
        attr_dev(a8, "href", "http://www.ccel.org/");
        attr_dev(a8, "target", "_blank");
        add_location(a8, file$a, 44, 20, 2795);
        add_location(p5, file$a, 45, 20, 2903);
        add_location(li5, file$a, 43, 16, 2769);
        attr_dev(a9, "href", "http://www.bible-reading.com/");
        attr_dev(a9, "target", "_blank");
        add_location(a9, file$a, 48, 20, 3053);
        add_location(p6, file$a, 49, 20, 3152);
        add_location(li6, file$a, 47, 16, 3027);
        attr_dev(ul1, "class", "link-page");
        add_location(ul1, file$a, 30, 12, 1915);
        add_location(h22, file$a, 53, 12, 3326);
        add_location(h30, file$a, 54, 12, 3364);
        attr_dev(a10, "href", "/congo-links/English/Congobook1.pdf");
        attr_dev(a10, "target", "_blank");
        add_location(a10, file$a, 56, 20, 3438);
        add_location(li7, file$a, 56, 16, 3434);
        attr_dev(a11, "href", "/congo-links/English/CongoBook-1-First50Years.pdf");
        attr_dev(a11, "target", "_blank");
        add_location(a11, file$a, 57, 20, 3543);
        add_location(li8, file$a, 57, 16, 3539);
        attr_dev(a12, "href", "/congo-links/English/CongoBook-2-SixthDecade.pdf");
        attr_dev(a12, "target", "_blank");
        add_location(a12, file$a, 58, 20, 3675);
        add_location(li9, file$a, 58, 16, 3671);
        attr_dev(a13, "href", "/congo-links/English/CongoBook-3-SeventhDecade.pdf");
        attr_dev(a13, "target", "_blank");
        add_location(a13, file$a, 59, 20, 3800);
        add_location(li10, file$a, 59, 16, 3796);
        attr_dev(a14, "href", "/congo-links/English/CongoBook-4-EighthDecade.pdf");
        attr_dev(a14, "target", "_blank");
        add_location(a14, file$a, 60, 20, 3927);
        add_location(li11, file$a, 60, 16, 3923);
        attr_dev(a15, "href", "/congo-links/English/CongoBook-5-NinthDecade.pdf");
        attr_dev(a15, "target", "_blank");
        add_location(a15, file$a, 61, 20, 4053);
        add_location(li12, file$a, 61, 16, 4049);
        attr_dev(a16, "href", "/congo-links/English/CongoBook-6-TenthDecade.pdf");
        attr_dev(a16, "target", "_blank");
        add_location(a16, file$a, 62, 20, 4178);
        add_location(li13, file$a, 62, 16, 4174);
        attr_dev(a17, "href", "/congo-links/English/50YearsinCongo2.pdf");
        attr_dev(a17, "target", "_blank");
        add_location(a17, file$a, 63, 20, 4304);
        add_location(li14, file$a, 63, 16, 4300);
        attr_dev(ul2, "class", "link-page");
        add_location(ul2, file$a, 55, 12, 3394);
        add_location(h31, file$a, 65, 12, 4430);
        add_location(p7, file$a, 66, 12, 4459);
        add_location(p8, file$a, 67, 12, 4884);
        add_location(p9, file$a, 70, 12, 5118);
        attr_dev(a18, "href", "/congo-links/French/Centennaire1.pdf");
        attr_dev(a18, "target", "_blank");
        add_location(a18, file$a, 72, 20, 5699);
        add_location(li15, file$a, 72, 16, 5695);
        attr_dev(a19, "href", "/congo-links/French/Centennaire2.pdf");
        attr_dev(a19, "target", "_blank");
        add_location(a19, file$a, 73, 20, 5806);
        add_location(li16, file$a, 73, 16, 5802);
        attr_dev(a20, "href", "/congo-links/French/Centennaire3.pdf");
        attr_dev(a20, "target", "_blank");
        add_location(a20, file$a, 74, 20, 5913);
        add_location(li17, file$a, 74, 16, 5909);
        attr_dev(a21, "href", "/congo-links/French/Centennaire4.pdf");
        attr_dev(a21, "target", "_blank");
        add_location(a21, file$a, 75, 20, 6020);
        add_location(li18, file$a, 75, 16, 6016);
        attr_dev(a22, "href", "/congo-links/French/Centennaire5.pdf");
        attr_dev(a22, "target", "_blank");
        add_location(a22, file$a, 76, 20, 6127);
        add_location(li19, file$a, 76, 16, 6123);
        attr_dev(a23, "href", "/congo-links/French/Centennaire6.pdf");
        attr_dev(a23, "target", "_blank");
        add_location(a23, file$a, 77, 20, 6234);
        add_location(li20, file$a, 77, 16, 6230);
        attr_dev(a24, "href", "/congo-links/French/Centennaire7.pdf");
        attr_dev(a24, "target", "_blank");
        add_location(a24, file$a, 78, 20, 6341);
        add_location(li21, file$a, 78, 16, 6337);
        attr_dev(a25, "href", "/congo-links/French/Centennaire8.pdf");
        attr_dev(a25, "target", "_blank");
        add_location(a25, file$a, 79, 20, 6448);
        add_location(li22, file$a, 79, 16, 6444);
        attr_dev(a26, "href", "/congo-links/French/Centennaire9.pdf");
        attr_dev(a26, "target", "_blank");
        add_location(a26, file$a, 80, 20, 6555);
        add_location(li23, file$a, 80, 16, 6551);
        attr_dev(a27, "href", "/congo-links/French/Centennaire10.pdf");
        attr_dev(a27, "target", "_blank");
        add_location(a27, file$a, 81, 20, 6662);
        add_location(li24, file$a, 81, 16, 6658);
        attr_dev(a28, "href", "/congo-links/French/Centennaire11.pdf");
        attr_dev(a28, "target", "_blank");
        add_location(a28, file$a, 82, 20, 6771);
        add_location(li25, file$a, 82, 16, 6767);
        attr_dev(a29, "href", "/congo-links/French/French50Years2.pdf");
        attr_dev(a29, "target", "_blank");
        add_location(a29, file$a, 83, 20, 6880);
        add_location(li26, file$a, 83, 16, 6876);
        attr_dev(ul3, "class", "link-page");
        add_location(ul3, file$a, 71, 12, 5655);
        attr_dev(div2, "class", "content");
        add_location(div2, file$a, 7, 8, 228);
        add_location(div3, file$a, 6, 4, 117);
        attr_dev(div4, "class", "page");
        add_location(div4, file$a, 4, 0, 74);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div4, anchor);

        if (default_slot) {
          default_slot.m(div4, null);
        }

        append_dev(div4, t0);
        append_dev(div4, div3);
        append_dev(div3, div2);
        append_dev(div2, h1);
        append_dev(div2, t2);
        append_dev(div2, div1);
        append_dev(div1, div0);
        append_dev(div0, a0);
        append_dev(a0, img0);
        append_dev(a0, span1);
        append_dev(span1, span0);
        append_dev(div0, t4);
        append_dev(div0, a1);
        append_dev(a1, img1);
        append_dev(a1, span3);
        append_dev(span3, span2);
        append_dev(div0, t6);
        append_dev(div0, a2);
        append_dev(a2, img2);
        append_dev(a2, span5);
        append_dev(span5, span4);
        append_dev(div2, t8);
        append_dev(div2, h20);
        append_dev(div2, t10);
        append_dev(div2, ul0);
        append_dev(ul0, li0);
        append_dev(li0, a3);
        append_dev(li0, t12);
        append_dev(li0, p0);
        append_dev(ul0, t14);
        append_dev(ul0, li1);
        append_dev(li1, a4);
        append_dev(li1, t16);
        append_dev(li1, p1);
        append_dev(div2, t18);
        append_dev(div2, h21);
        append_dev(div2, t20);
        append_dev(div2, ul1);
        append_dev(ul1, li2);
        append_dev(li2, a5);
        append_dev(li2, t22);
        append_dev(li2, p2);
        append_dev(ul1, t24);
        append_dev(ul1, li3);
        append_dev(li3, a6);
        append_dev(li3, t26);
        append_dev(li3, p3);
        append_dev(ul1, t28);
        append_dev(ul1, li4);
        append_dev(li4, a7);
        append_dev(li4, t30);
        append_dev(li4, p4);
        append_dev(ul1, t32);
        append_dev(ul1, li5);
        append_dev(li5, a8);
        append_dev(li5, t34);
        append_dev(li5, p5);
        append_dev(ul1, t36);
        append_dev(ul1, li6);
        append_dev(li6, a9);
        append_dev(li6, t38);
        append_dev(li6, p6);
        append_dev(div2, t40);
        append_dev(div2, h22);
        append_dev(div2, t42);
        append_dev(div2, h30);
        append_dev(div2, t44);
        append_dev(div2, ul2);
        append_dev(ul2, li7);
        append_dev(li7, a10);
        append_dev(ul2, t46);
        append_dev(ul2, li8);
        append_dev(li8, a11);
        append_dev(ul2, t48);
        append_dev(ul2, li9);
        append_dev(li9, a12);
        append_dev(ul2, t50);
        append_dev(ul2, li10);
        append_dev(li10, a13);
        append_dev(ul2, t52);
        append_dev(ul2, li11);
        append_dev(li11, a14);
        append_dev(ul2, t54);
        append_dev(ul2, li12);
        append_dev(li12, a15);
        append_dev(ul2, t56);
        append_dev(ul2, li13);
        append_dev(li13, a16);
        append_dev(ul2, t58);
        append_dev(ul2, li14);
        append_dev(li14, a17);
        append_dev(div2, t60);
        append_dev(div2, h31);
        append_dev(div2, t62);
        append_dev(div2, p7);
        append_dev(div2, t64);
        append_dev(div2, p8);
        append_dev(div2, t66);
        append_dev(div2, p9);
        append_dev(div2, t68);
        append_dev(div2, ul3);
        append_dev(ul3, li15);
        append_dev(li15, a18);
        append_dev(ul3, t70);
        append_dev(ul3, li16);
        append_dev(li16, a19);
        append_dev(ul3, t72);
        append_dev(ul3, li17);
        append_dev(li17, a20);
        append_dev(ul3, t74);
        append_dev(ul3, li18);
        append_dev(li18, a21);
        append_dev(ul3, t76);
        append_dev(ul3, li19);
        append_dev(li19, a22);
        append_dev(ul3, t78);
        append_dev(ul3, li20);
        append_dev(li20, a23);
        append_dev(ul3, t80);
        append_dev(ul3, li21);
        append_dev(li21, a24);
        append_dev(ul3, t82);
        append_dev(ul3, li22);
        append_dev(li22, a25);
        append_dev(ul3, t84);
        append_dev(ul3, li23);
        append_dev(li23, a26);
        append_dev(ul3, t86);
        append_dev(ul3, li24);
        append_dev(li24, a27);
        append_dev(ul3, t88);
        append_dev(ul3, li25);
        append_dev(li25, a28);
        append_dev(ul3, t90);
        append_dev(ul3, li26);
        append_dev(li26, a29);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          1) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[0], dirty, null, null);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div3_outro) div3_outro.end(1);
          if (!div3_intro) div3_intro = create_in_transition(div3, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div3_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div3_intro) div3_intro.invalidate();
        div3_outro = create_out_transition(div3, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div4);
        if (default_slot) default_slot.d(detaching);
        if (detaching && div3_outro) div3_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$a.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$a($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Links", slots, ['default']);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Links> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [$$scope, slots];
  }

  var Links = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Links, _SvelteComponentDev);

    var _super = _createSuper(Links);

    function Links(options) {
      var _this;

      _classCallCheck(this, Links);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$a, create_fragment$a, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Links",
        options: options,
        id: create_fragment$a.name
      });
      return _this;
    }

    return Links;
  }(SvelteComponentDev);

  var console_1$1 = globals.console;
  var file$b = "src\\views\\Newsletters.svelte";

  function get_each_context$2(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
  } // (44:12) {:else}


  function create_else_block$3(ctx) {
    var div;
    var each_value =
    /*newsletters*/
    ctx[0].sort(
    /*func*/
    ctx[5]).reverse();
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        div = element("div");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        attr_dev(div, "class", "news-grid svelte-1rco2zb");
        add_location(div, file$b, 44, 16, 1243);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div, null);
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*newsletters, Date, console, bgImages, Math*/
        3) {
          each_value =
          /*newsletters*/
          ctx[0].sort(
          /*func*/
          ctx[5]).reverse();
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$2(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$2(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(div, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$3.name,
      type: "else",
      source: "(44:12) {:else}",
      ctx: ctx
    });
    return block;
  } // (40:12) {#if !newsletters.length}


  function create_if_block$5(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$b, 41, 20, 1128);
        attr_dev(div, "class", "loader");
        add_location(div, file$b, 40, 16, 1086);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$5.name,
      type: "if",
      source: "(40:12) {#if !newsletters.length}",
      ctx: ctx
    });
    return block;
  } // (46:20) {#each newsletters.sort((a,b)=> {                          let adate = new Date(b.match(/\d*\.\d*\.\d*(?=\.pdf)/i))                          let bdate = new Date(a.match(/\d*\.\d*\.\d*(?=\.pdf)/i))                          console.log(adate, bdate)                          return bdate - adate                       }).reverse() as newsletter}


  function create_each_block$2(ctx) {
    var a;
    var img;
    var img_src_value;
    var t0;
    var span;
    var t1_value = new Date(
    /*newsletter*/
    ctx[11].slice(0, -4)).toLocaleDateString() + "";
    var t1;
    var t2;
    var a_href_value;
    var block = {
      c: function create() {
        a = element("a");
        img = element("img");
        t0 = space();
        span = element("span");
        t1 = text(t1_value);
        t2 = space();
        if (img.src !== (img_src_value =
        /*bgImages*/
        ctx[1][Math.floor(Math.random(
        /*bgImages*/
        ctx[1].length) * 3)])) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        attr_dev(img, "class", "svelte-1rco2zb");
        add_location(img, file$b, 52, 28, 1744);
        attr_dev(span, "class", "svelte-1rco2zb");
        add_location(span, file$b, 53, 28, 1847);
        attr_dev(a, "target", "_blank");
        attr_dev(a, "href", a_href_value =
        /*newsletter*/
        ctx[11]);
        attr_dev(a, "class", "newsletter svelte-1rco2zb");
        add_location(a, file$b, 51, 24, 1658);
      },
      m: function mount(target, anchor) {
        insert_dev(target, a, anchor);
        append_dev(a, img);
        append_dev(a, t0);
        append_dev(a, span);
        append_dev(span, t1);
        append_dev(a, t2);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*newsletters*/
        1 && t1_value !== (t1_value = new Date(
        /*newsletter*/
        ctx[11].slice(0, -4)).toLocaleDateString() + "")) set_data_dev(t1, t1_value);

        if (dirty &
        /*newsletters*/
        1 && a_href_value !== (a_href_value =
        /*newsletter*/
        ctx[11])) {
          attr_dev(a, "href", a_href_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$2.name,
      type: "each",
      source: "(46:20) {#each newsletters.sort((a,b)=> {                          let adate = new Date(b.match(/\\d*\\.\\d*\\.\\d*(?=\\.pdf)/i))                          let bdate = new Date(a.match(/\\d*\\.\\d*\\.\\d*(?=\\.pdf)/i))                          console.log(adate, bdate)                          return bdate - adate                       }).reverse() as newsletter}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$b(ctx) {
    var div2;
    var t0;
    var div1;
    var div0;
    var h1;
    var t2;
    var div1_intro;
    var div1_outro;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);

    function select_block_type(ctx, dirty) {
      if (!
      /*newsletters*/
      ctx[0].length) return create_if_block$5;
      return create_else_block$3;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div2 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        h1 = element("h1");
        h1.textContent = "Newsletters";
        t2 = space();
        if_block.c();
        add_location(h1, file$b, 37, 12, 1007);
        attr_dev(div0, "class", "content");
        add_location(div0, file$b, 36, 8, 972);
        add_location(div1, file$b, 35, 4, 861);
        attr_dev(div2, "class", "page");
        add_location(div2, file$b, 33, 0, 818);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);

        if (default_slot) {
          default_slot.m(div2, null);
        }

        append_dev(div2, t0);
        append_dev(div2, div1);
        append_dev(div1, div0);
        append_dev(div0, h1);
        append_dev(div0, t2);
        if_block.m(div0, null);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          8) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[3], dirty, null, null);
          }
        }

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div0, null);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          if (!div1_intro) div1_intro = create_in_transition(div1, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div1_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (default_slot) default_slot.d(detaching);
        if_block.d();
        if (detaching && div1_outro) div1_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$b.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$b($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Newsletters", slots, ['default']);
    var results = 25;
    var showing = 0;
    var show = "newsletters";
    var totalResultsPossible = 0;
    var getPageData = $$props.getPageData;
    var newsletters = [];

    function getMoreNewsletters() {
      fetch("data/php/getNewsletters.php?start=" + showing + "&end=" + (showing + results) + "&direction=desc").then(function (data) {
        return data.json();
      }).then(function (ns) {
        $$invalidate(0, newsletters = ns.results);
        showing += results;
        totalResultsPossible = ns.files;
      });
    }

    onMount(function () {
      getMoreNewsletters();
    });
    var bgImages = ["/primary-images/ns1.JPG", "/primary-images/ns2.JPG", "/primary-images/ns3.JPG"];
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn("<Newsletters> was created with unknown prop '".concat(key, "'"));
    });

    var func = function func(a, b) {
      var adate = new Date(b.match(/\d*\.\d*\.\d*(?=\.pdf)/i));
      var bdate = new Date(a.match(/\d*\.\d*\.\d*(?=\.pdf)/i));
      console.log(adate, bdate);
      return bdate - adate;
    };

    $$self.$$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(2, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        onMount: onMount,
        results: results,
        showing: showing,
        show: show,
        totalResultsPossible: totalResultsPossible,
        getPageData: getPageData,
        newsletters: newsletters,
        getMoreNewsletters: getMoreNewsletters,
        bgImages: bgImages
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("results" in $$props) results = $$props.results;
      if ("showing" in $$props) showing = $$props.showing;
      if ("show" in $$props) show = $$props.show;
      if ("totalResultsPossible" in $$props) totalResultsPossible = $$props.totalResultsPossible;
      if ("getPageData" in $$props) $$invalidate(2, getPageData = $$props.getPageData);
      if ("newsletters" in $$props) $$invalidate(0, newsletters = $$props.newsletters);
      if ("bgImages" in $$props) $$invalidate(1, bgImages = $$props.bgImages);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [newsletters, bgImages, getPageData, $$scope, slots, func];
  }

  var Newsletters = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Newsletters, _SvelteComponentDev);

    var _super = _createSuper(Newsletters);

    function Newsletters(options) {
      var _this;

      _classCallCheck(this, Newsletters);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$b, create_fragment$b, safe_not_equal, {
        getPageData: 2
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Newsletters",
        options: options,
        id: create_fragment$b.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*getPageData*/
      ctx[2] === undefined && !("getPageData" in props)) {
        console_1$1.warn("<Newsletters> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(Newsletters, [{
      key: "getPageData",
      get: function get() {
        throw new Error("<Newsletters>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Newsletters>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Newsletters;
  }(SvelteComponentDev);

  var file$c = "src\\views\\AllEvents.svelte";

  function get_each_context$3(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[14] = list[i];
    child_ctx[16] = i;
    return child_ctx;
  } // (1:0) <script>      import {flyModified}


  function create_catch_block$3(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$3.name,
      type: "catch",
      source: "(1:0) <script>      import {flyModified}",
      ctx: ctx
    });
    return block;
  } // (42:16) {:then events}


  function create_then_block$3(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (
      /*events*/
      ctx[13] &&
      /*events*/
      ctx[13].length) return create_if_block_1$3;
      return create_else_block$4;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$3.name,
      type: "then",
      source: "(42:16) {:then events}",
      ctx: ctx
    });
    return block;
  } // (64:20) {:else}


  function create_else_block$4(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "No events found.";
        add_location(li, file$c, 64, 24, 2812);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$4.name,
      type: "else",
      source: "(64:20) {:else}",
      ctx: ctx
    });
    return block;
  } // (43:20) {#if events && events.length}


  function create_if_block_1$3(ctx) {
    var each_1_anchor;
    var each_value =
    /*events*/
    ctx[13].sort(
    /*func*/
    ctx[7]).filter(
    /*func_1*/
    ctx[8]);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        each_1_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(target, anchor);
        }

        insert_dev(target, each_1_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*openCalendarModal, getPageData, Date, changeEventMonth*/
        25) {
          each_value =
          /*events*/
          ctx[13].sort(
          /*func*/
          ctx[7]).filter(
          /*func_1*/
          ctx[8]);
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$3(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$3(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      d: function destroy(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach_dev(each_1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$3.name,
      type: "if",
      source: "(43:20) {#if events && events.length}",
      ctx: ctx
    });
    return block;
  } // (48:28) {#if changeEventMonth(event, true)}


  function create_if_block_2$2(ctx) {
    var h3;
    var t_value =
    /*changeEventMonth*/
    ctx[4](
    /*event*/
    ctx[14], false) + "";
    var t;
    var block = {
      c: function create() {
        h3 = element("h3");
        t = text(t_value);
        add_location(h3, file$c, 48, 32, 1796);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h3, anchor);
        append_dev(h3, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData*/
        1 && t_value !== (t_value =
        /*changeEventMonth*/
        ctx[4](
        /*event*/
        ctx[14], false) + "")) set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$2.name,
      type: "if",
      source: "(48:28) {#if changeEventMonth(event, true)}",
      ctx: ctx
    });
    return block;
  } // (44:24) {#each events                              .sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())                              .filter(event=> (new Date(event.date)).getTime() > Date.now())                           as event, i}


  function create_each_block$3(ctx) {
    var show_if =
    /*changeEventMonth*/
    ctx[4](
    /*event*/
    ctx[14], true);
    var t0;
    var li;
    var div0;
    var strong;
    var t1_value =
    /*event*/
    ctx[14].name + "";
    var t1;
    var t2;
    var t3_value = new Date(
    /*event*/
    ctx[14].date).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Chicago"
    }) + "";
    var t3;
    var t4;
    var div1;
    var raw_value =
    /*event*/
    ctx[14].description + "";
    var t5;
    var div2;
    var a0;
    var a0_href_value;
    var t7;
    var a1;
    var a1_href_value;
    var t9;
    var mounted;
    var dispose;
    var if_block = show_if && create_if_block_2$2(ctx);

    function click_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler*/
        (_ctx = ctx)[9].apply(_ctx, [
        /*event*/
        ctx[14]].concat(args))
      );
    }

    var block = {
      c: function create() {
        if (if_block) if_block.c();
        t0 = space();
        li = element("li");
        div0 = element("div");
        strong = element("strong");
        t1 = text(t1_value);
        t2 = text(" - ");
        t3 = text(t3_value);
        t4 = space();
        div1 = element("div");
        t5 = space();
        div2 = element("div");
        a0 = element("a");
        a0.textContent = "View event";
        t7 = text(" | \r\n                                    ");
        a1 = element("a");
        a1.textContent = "Add to calendar";
        t9 = space();
        add_location(strong, file$c, 52, 36, 2004);
        attr_dev(div0, "class", "overflow-box");
        add_location(div0, file$c, 51, 32, 1940);
        attr_dev(div1, "class", "overflow-box");
        add_location(div1, file$c, 54, 32, 2229);
        attr_dev(a0, "href", a0_href_value = "#singleevent/" +
        /*i*/
        ctx[16]);
        add_location(a0, file$c, 58, 36, 2467);
        attr_dev(a1, "href", a1_href_value = "#events/" +
        /*i*/
        ctx[16]);
        add_location(a1, file$c, 59, 36, 2549);
        attr_dev(div2, "class", "right-align event-links");
        add_location(div2, file$c, 57, 32, 2392);
        add_location(li, file$c, 50, 28, 1902);
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, t0, anchor);
        insert_dev(target, li, anchor);
        append_dev(li, div0);
        append_dev(div0, strong);
        append_dev(strong, t1);
        append_dev(div0, t2);
        append_dev(div0, t3);
        append_dev(li, t4);
        append_dev(li, div1);
        div1.innerHTML = raw_value;
        append_dev(li, t5);
        append_dev(li, div2);
        append_dev(div2, a0);
        append_dev(div2, t7);
        append_dev(div2, a1);
        append_dev(li, t9);

        if (!mounted) {
          dispose = listen_dev(a1, "click", prevent_default(click_handler), false, true, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*getPageData*/
        1) show_if =
        /*changeEventMonth*/
        ctx[4](
        /*event*/
        ctx[14], true);

        if (show_if) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_2$2(ctx);
            if_block.c();
            if_block.m(t0.parentNode, t0);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*getPageData*/
        1 && t1_value !== (t1_value =
        /*event*/
        ctx[14].name + "")) set_data_dev(t1, t1_value);
        if (dirty &
        /*getPageData*/
        1 && t3_value !== (t3_value = new Date(
        /*event*/
        ctx[14].date).toLocaleString("en-US", {
          dateStyle: "short",
          timeStyle: "short",
          timeZone: "America/Chicago"
        }) + "")) set_data_dev(t3, t3_value);
        if (dirty &
        /*getPageData*/
        1 && raw_value !== (raw_value =
        /*event*/
        ctx[14].description + "")) div1.innerHTML = raw_value;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(li);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$3.name,
      type: "each",
      source: "(44:24) {#each events                              .sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())                              .filter(event=> (new Date(event.date)).getTime() > Date.now())                           as event, i}",
      ctx: ctx
    });
    return block;
  } // (38:57)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then events}


  function create_pending_block$3(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$c, 39, 24, 1259);
        attr_dev(div, "class", "loader");
        add_location(div, file$c, 38, 20, 1213);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block$3.name,
      type: "pending",
      source: "(38:57)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then events}",
      ctx: ctx
    });
    return block;
  } // (74:0) {#if calendarModalOpen && curEvent}


  function create_if_block$6(ctx) {
    var calendarmodal;
    var updating_calendarModalOpen;
    var current;

    function calendarmodal_calendarModalOpen_binding(value) {
      /*calendarmodal_calendarModalOpen_binding*/
      ctx[10].call(null, value);
    }

    var calendarmodal_props = {
      curEvent:
      /*curEvent*/
      ctx[1]
    };

    if (
    /*calendarModalOpen*/
    ctx[2] !== void 0) {
      calendarmodal_props.calendarModalOpen =
      /*calendarModalOpen*/
      ctx[2];
    }

    calendarmodal = new CalendarModal({
      props: calendarmodal_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(calendarmodal, "calendarModalOpen", calendarmodal_calendarModalOpen_binding);
    });
    var block = {
      c: function create() {
        create_component(calendarmodal.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(calendarmodal, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var calendarmodal_changes = {};
        if (dirty &
        /*curEvent*/
        2) calendarmodal_changes.curEvent =
        /*curEvent*/
        ctx[1];

        if (!updating_calendarModalOpen && dirty &
        /*calendarModalOpen*/
        4) {
          updating_calendarModalOpen = true;
          calendarmodal_changes.calendarModalOpen =
          /*calendarModalOpen*/
          ctx[2];
          add_flush_callback(function () {
            return updating_calendarModalOpen = false;
          });
        }

        calendarmodal.$set(calendarmodal_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(calendarmodal.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(calendarmodal.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(calendarmodal, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$6.name,
      type: "if",
      source: "(74:0) {#if calendarModalOpen && curEvent}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$c(ctx) {
    var div2;
    var t0;
    var div1;
    var div0;
    var h2;
    var t2;
    var ul;
    var promise;
    var div1_intro;
    var div1_outro;
    var t3;
    var if_block_anchor;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[6].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[5], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block$3,
      then: create_then_block$3,
      catch: create_catch_block$3,
      value: 13
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/events.json"), info);
    var if_block =
    /*calendarModalOpen*/
    ctx[2] &&
    /*curEvent*/
    ctx[1] && create_if_block$6(ctx);
    var block = {
      c: function create() {
        div2 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        h2 = element("h2");
        h2.textContent = "Upcoming Events at FCC";
        t2 = space();
        ul = element("ul");
        info.block.c();
        t3 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        add_location(h2, file$c, 35, 12, 1083);
        add_location(ul, file$c, 36, 12, 1128);
        attr_dev(div0, "class", "content events");
        add_location(div0, file$c, 34, 8, 1041);
        add_location(div1, file$c, 33, 4, 930);
        attr_dev(div2, "class", "page");
        add_location(div2, file$c, 31, 0, 887);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);

        if (default_slot) {
          default_slot.m(div2, null);
        }

        append_dev(div2, t0);
        append_dev(div2, div1);
        append_dev(div1, div0);
        append_dev(div0, h2);
        append_dev(div0, t2);
        append_dev(div0, ul);
        info.block.m(ul, info.anchor = null);

        info.mount = function () {
          return ul;
        };

        info.anchor = null;
        insert_dev(target, t3, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          32) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[5], dirty, null, null);
          }
        }

        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/events.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[13] = info.resolved;
          info.block.p(child_ctx, dirty);
        }

        if (
        /*calendarModalOpen*/
        ctx[2] &&
        /*curEvent*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*calendarModalOpen, curEvent*/
            6) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$6(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          if (!div1_intro) div1_intro = create_in_transition(div1, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div1_intro.start();
        });
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1, flyModified, {
          y: -300,
          duration: 300
        });
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (default_slot) default_slot.d(detaching);
        info.block.d();
        info.token = null;
        info = null;
        if (detaching && div1_outro) div1_outro.end();
        if (detaching) detach_dev(t3);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$c.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$c($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("AllEvents", slots, ['default']);
    var getPageData = $$props.getPageData;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var curEvent;
    var calendarModalOpen = false;

    function openCalendarModal(event) {
      $$invalidate(1, curEvent = event);
      $$invalidate(2, calendarModalOpen = true);
    }

    var previousMonth;

    function changeEventMonth(event) {
      var skipSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var newMonth = new Date(event.date).getMonth();
      newMonth = months[newMonth];
      if (previousMonth && newMonth === previousMonth) return false;
      if (skipSet) return true;else {
        previousMonth = newMonth;
        return newMonth;
      }
    }

    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<AllEvents> was created with unknown prop '".concat(key, "'"));
    });

    var func = function func(a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };

    var func_1 = function func_1(event) {
      return new Date(event.date).getTime() > Date.now();
    };

    var click_handler = function click_handler(event) {
      openCalendarModal(event);
    };

    function calendarmodal_calendarModalOpen_binding(value) {
      calendarModalOpen = value;
      $$invalidate(2, calendarModalOpen);
    }

    $$self.$$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        CalendarModal: CalendarModal,
        getPageData: getPageData,
        months: months,
        curEvent: curEvent,
        calendarModalOpen: calendarModalOpen,
        openCalendarModal: openCalendarModal,
        previousMonth: previousMonth,
        changeEventMonth: changeEventMonth
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("months" in $$props) months = $$props.months;
      if ("curEvent" in $$props) $$invalidate(1, curEvent = $$props.curEvent);
      if ("calendarModalOpen" in $$props) $$invalidate(2, calendarModalOpen = $$props.calendarModalOpen);
      if ("previousMonth" in $$props) previousMonth = $$props.previousMonth;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, curEvent, calendarModalOpen, openCalendarModal, changeEventMonth, $$scope, slots, func, func_1, click_handler, calendarmodal_calendarModalOpen_binding];
  }

  var AllEvents = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(AllEvents, _SvelteComponentDev);

    var _super = _createSuper(AllEvents);

    function AllEvents(options) {
      var _this;

      _classCallCheck(this, AllEvents);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$c, create_fragment$c, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "AllEvents",
        options: options,
        id: create_fragment$c.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*getPageData*/
      ctx[0] === undefined && !("getPageData" in props)) {
        console.warn("<AllEvents> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(AllEvents, [{
      key: "getPageData",
      get: function get() {
        throw new Error("<AllEvents>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<AllEvents>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return AllEvents;
  }(SvelteComponentDev);

  var file$d = "src\\views\\SingleEvent.svelte"; // (1:0) <script>      import {flyModified}

  function create_catch_block_1(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block_1.name,
      type: "catch",
      source: "(1:0) <script>      import {flyModified}",
      ctx: ctx
    });
    return block;
  } // (39:12) {:then events}


  function create_then_block$4(ctx) {
    var await_block_anchor;
    var promise;
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block_1,
      then: create_then_block_1,
      catch: create_catch_block$4,
      value: 10
    };
    handle_promise(promise = sortEvents(
    /*events*/
    ctx[9]), info);
    var block = {
      c: function create() {
        await_block_anchor = empty();
        info.block.c();
      },
      m: function mount(target, anchor) {
        insert_dev(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);

        info.mount = function () {
          return await_block_anchor.parentNode;
        };

        info.anchor = await_block_anchor;
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise = sortEvents(
        /*events*/
        ctx[9])) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[10] = info.resolved;
          info.block.p(child_ctx, dirty);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$4.name,
      type: "then",
      source: "(39:12) {:then events}",
      ctx: ctx
    });
    return block;
  } // (1:0) <script>      import {flyModified}


  function create_catch_block$4(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$4.name,
      type: "catch",
      source: "(1:0) <script>      import {flyModified}",
      ctx: ctx
    });
    return block;
  } // (44:16) {:then sortedEvents}


  function create_then_block_1(ctx) {
    var h2;
    var t0_value =
    /*sortedEvents*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].name + "";
    var t0;
    var t1;
    var t2;
    var div0;
    var span0;
    var strong0;
    var t4;
    var t5_value = new Date(
    /*sortedEvents*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].date).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Chicago"
    }) + "";
    var t5;
    var t6;
    var span1;
    var strong1;
    var t8;
    var t9_value =
    /*sortedEvents*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].location + "";
    var t9;
    var t10;
    var div2;
    var h3;
    var t12;
    var t13;
    var div1;
    var a;
    var mounted;
    var dispose;
    var if_block0 =
    /*sortedEvents*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].img && create_if_block_2$3(ctx);

    function select_block_type(ctx, dirty) {
      if (
      /*sortedEvents*/
      ctx[10][
      /*eventIndex*/
      ctx[2]].description) return create_if_block_1$4;
      return create_else_block$5;
    }

    var current_block_type = select_block_type(ctx);
    var if_block1 = current_block_type(ctx);

    function click_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler*/
        (_ctx = ctx)[7].apply(_ctx, [
        /*sortedEvents*/
        ctx[10]].concat(args))
      );
    }

    var block = {
      c: function create() {
        h2 = element("h2");
        t0 = text(t0_value);
        t1 = space();
        if (if_block0) if_block0.c();
        t2 = space();
        div0 = element("div");
        span0 = element("span");
        strong0 = element("strong");
        strong0.textContent = "When:";
        t4 = space();
        t5 = text(t5_value);
        t6 = space();
        span1 = element("span");
        strong1 = element("strong");
        strong1.textContent = "Where:";
        t8 = space();
        t9 = text(t9_value);
        t10 = space();
        div2 = element("div");
        h3 = element("h3");
        h3.textContent = "Event Description";
        t12 = space();
        if_block1.c();
        t13 = space();
        div1 = element("div");
        a = element("a");
        a.textContent = "Add to calendar";
        add_location(h2, file$d, 44, 20, 1517);
        add_location(strong0, file$d, 49, 30, 1855);
        attr_dev(span0, "class", "svelte-jcz1aa");
        add_location(span0, file$d, 49, 24, 1849);
        add_location(strong1, file$d, 50, 30, 2055);
        attr_dev(span1, "class", "svelte-jcz1aa");
        add_location(span1, file$d, 50, 24, 2049);
        attr_dev(div0, "class", "event-details svelte-jcz1aa");
        add_location(div0, file$d, 48, 20, 1796);
        add_location(h3, file$d, 53, 24, 2221);
        attr_dev(a, "href", "#events/i");
        add_location(a, file$d, 60, 28, 2610);
        attr_dev(div1, "class", "mt-2 centered");
        add_location(div1, file$d, 59, 24, 2553);
        attr_dev(div2, "class", "detail-box svelte-jcz1aa");
        add_location(div2, file$d, 52, 20, 2171);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h2, anchor);
        append_dev(h2, t0);
        insert_dev(target, t1, anchor);
        if (if_block0) if_block0.m(target, anchor);
        insert_dev(target, t2, anchor);
        insert_dev(target, div0, anchor);
        append_dev(div0, span0);
        append_dev(span0, strong0);
        append_dev(span0, t4);
        append_dev(span0, t5);
        append_dev(div0, t6);
        append_dev(div0, span1);
        append_dev(span1, strong1);
        append_dev(span1, t8);
        append_dev(span1, t9);
        insert_dev(target, t10, anchor);
        insert_dev(target, div2, anchor);
        append_dev(div2, h3);
        append_dev(div2, t12);
        if_block1.m(div2, null);
        append_dev(div2, t13);
        append_dev(div2, div1);
        append_dev(div1, a);

        if (!mounted) {
          dispose = listen_dev(a, "click", prevent_default(click_handler), false, true, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*getPageData, eventIndex*/
        5 && t0_value !== (t0_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].name + "")) set_data_dev(t0, t0_value);

        if (
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2$3(ctx);
            if_block0.c();
            if_block0.m(t2.parentNode, t2);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (dirty &
        /*getPageData, eventIndex*/
        5 && t5_value !== (t5_value = new Date(
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].date).toLocaleString("en-US", {
          dateStyle: "short",
          timeStyle: "short",
          timeZone: "America/Chicago"
        }) + "")) set_data_dev(t5, t5_value);
        if (dirty &
        /*getPageData, eventIndex*/
        5 && t9_value !== (t9_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].location + "")) set_data_dev(t9, t9_value);

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1.d(1);
          if_block1 = current_block_type(ctx);

          if (if_block1) {
            if_block1.c();
            if_block1.m(div2, t13);
          }
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h2);
        if (detaching) detach_dev(t1);
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach_dev(t2);
        if (detaching) detach_dev(div0);
        if (detaching) detach_dev(t10);
        if (detaching) detach_dev(div2);
        if_block1.d();
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block_1.name,
      type: "then",
      source: "(44:16) {:then sortedEvents}",
      ctx: ctx
    });
    return block;
  } // (46:20) {#if sortedEvents[eventIndex].img}


  function create_if_block_2$3(ctx) {
    var img;
    var img_src_value;
    var img_alt_value;
    var block = {
      c: function create() {
        img = element("img");
        attr_dev(img, "class", "sm-bottom-margin");
        if (img.src !== (img_src_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", img_alt_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.alt);
        add_location(img, file$d, 46, 24, 1639);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, eventIndex*/
        5 && img.src !== (img_src_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.src)) {
          attr_dev(img, "src", img_src_value);
        }

        if (dirty &
        /*getPageData, eventIndex*/
        5 && img_alt_value !== (img_alt_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.alt)) {
          attr_dev(img, "alt", img_alt_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$3.name,
      type: "if",
      source: "(46:20) {#if sortedEvents[eventIndex].img}",
      ctx: ctx
    });
    return block;
  } // (57:24) {:else}


  function create_else_block$5(ctx) {
    var p;
    var block = {
      c: function create() {
        p = element("p");
        p.textContent = "No description for this event!";
        add_location(p, file$d, 57, 28, 2459);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$5.name,
      type: "else",
      source: "(57:24) {:else}",
      ctx: ctx
    });
    return block;
  } // (55:24) {#if sortedEvents[eventIndex].description}


  function create_if_block_1$4(ctx) {
    var p;
    var raw_value =
    /*sortedEvents*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].description + "";
    var block = {
      c: function create() {
        p = element("p");
        add_location(p, file$d, 55, 28, 2345);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        p.innerHTML = raw_value;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, eventIndex*/
        5 && raw_value !== (raw_value =
        /*sortedEvents*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].description + "")) p.innerHTML = raw_value;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$4.name,
      type: "if",
      source: "(55:24) {#if sortedEvents[eventIndex].description}",
      ctx: ctx
    });
    return block;
  } // (40:43)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then sortedEvents}


  function create_pending_block_1(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$d, 41, 24, 1377);
        attr_dev(div, "class", "loader");
        add_location(div, file$d, 40, 20, 1331);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block_1.name,
      type: "pending",
      source: "(40:43)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then sortedEvents}",
      ctx: ctx
    });
    return block;
  } // (35:53)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then events}


  function create_pending_block$4(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$d, 36, 20, 1160);
        attr_dev(div, "class", "loader");
        add_location(div, file$d, 35, 16, 1118);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block$4.name,
      type: "pending",
      source: "(35:53)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then events}",
      ctx: ctx
    });
    return block;
  } // (71:0) {#if calendarModalOpen && curEvent}


  function create_if_block$7(ctx) {
    var calendarmodal;
    var updating_calendarModalOpen;
    var current;

    function calendarmodal_calendarModalOpen_binding(value) {
      /*calendarmodal_calendarModalOpen_binding*/
      ctx[8].call(null, value);
    }

    var calendarmodal_props = {
      curEvent:
      /*curEvent*/
      ctx[1]
    };

    if (
    /*calendarModalOpen*/
    ctx[3] !== void 0) {
      calendarmodal_props.calendarModalOpen =
      /*calendarModalOpen*/
      ctx[3];
    }

    calendarmodal = new CalendarModal({
      props: calendarmodal_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(calendarmodal, "calendarModalOpen", calendarmodal_calendarModalOpen_binding);
    });
    var block = {
      c: function create() {
        create_component(calendarmodal.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(calendarmodal, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var calendarmodal_changes = {};
        if (dirty &
        /*curEvent*/
        2) calendarmodal_changes.curEvent =
        /*curEvent*/
        ctx[1];

        if (!updating_calendarModalOpen && dirty &
        /*calendarModalOpen*/
        8) {
          updating_calendarModalOpen = true;
          calendarmodal_changes.calendarModalOpen =
          /*calendarModalOpen*/
          ctx[3];
          add_flush_callback(function () {
            return updating_calendarModalOpen = false;
          });
        }

        calendarmodal.$set(calendarmodal_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(calendarmodal.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(calendarmodal.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(calendarmodal, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$7.name,
      type: "if",
      source: "(71:0) {#if calendarModalOpen && curEvent}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$d(ctx) {
    var div2;
    var t0;
    var div1;
    var div0;
    var promise;
    var div1_intro;
    var div1_outro;
    var t1;
    var if_block_anchor;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[6].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[5], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block$4,
      then: create_then_block$4,
      catch: create_catch_block_1,
      value: 9
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/events.json"), info);
    var if_block =
    /*calendarModalOpen*/
    ctx[3] &&
    /*curEvent*/
    ctx[1] && create_if_block$7(ctx);
    var block = {
      c: function create() {
        div2 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        info.block.c();
        t1 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr_dev(div0, "class", "content");
        add_location(div0, file$d, 33, 8, 1024);
        add_location(div1, file$d, 32, 4, 913);
        attr_dev(div2, "class", "page");
        add_location(div2, file$d, 30, 0, 870);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);

        if (default_slot) {
          default_slot.m(div2, null);
        }

        append_dev(div2, t0);
        append_dev(div2, div1);
        append_dev(div1, div0);
        info.block.m(div0, info.anchor = null);

        info.mount = function () {
          return div0;
        };

        info.anchor = null;
        insert_dev(target, t1, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          32) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[5], dirty, null, null);
          }
        }

        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/events.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[9] = info.resolved;
          info.block.p(child_ctx, dirty);
        }

        if (
        /*calendarModalOpen*/
        ctx[3] &&
        /*curEvent*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*calendarModalOpen, curEvent*/
            10) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$7(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          if (!div1_intro) div1_intro = create_in_transition(div1, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div1_intro.start();
        });
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1, flyModified, {
          y: -300,
          duration: 300
        });
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (default_slot) default_slot.d(detaching);
        info.block.d();
        info.token = null;
        info = null;
        if (detaching && div1_outro) div1_outro.end();
        if (detaching) detach_dev(t1);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$d.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function sortEvents(events) {
    return new Promise(function (resolve, reject) {
      if (!events || !events.length) reject();
      var sortedEvents = events.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }).filter(function (event) {
        return new Date(event.date).getTime() > Date.now();
      });
      resolve(sortedEvents);
    });
  }

  function instance$d($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("SingleEvent", slots, ['default']);
    var getPageData = $$props.getPageData;
    var curEvent;
    var eventIndex;
    var calendarModalOpen = false;

    function openCalendarModal(event) {
      $$invalidate(1, curEvent = event);
      $$invalidate(3, calendarModalOpen = true);
    }

    onMount(function () {
      $$invalidate(2, eventIndex = window.location.hash.split("/")[1]);
    });
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SingleEvent> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler(sortedEvents) {
      openCalendarModal(sortedEvents[eventIndex]);
    };

    function calendarmodal_calendarModalOpen_binding(value) {
      calendarModalOpen = value;
      $$invalidate(3, calendarModalOpen);
    }

    $$self.$$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        onMount: onMount,
        CalendarModal: CalendarModal,
        getPageData: getPageData,
        curEvent: curEvent,
        eventIndex: eventIndex,
        calendarModalOpen: calendarModalOpen,
        openCalendarModal: openCalendarModal,
        sortEvents: sortEvents
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("curEvent" in $$props) $$invalidate(1, curEvent = $$props.curEvent);
      if ("eventIndex" in $$props) $$invalidate(2, eventIndex = $$props.eventIndex);
      if ("calendarModalOpen" in $$props) $$invalidate(3, calendarModalOpen = $$props.calendarModalOpen);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, curEvent, eventIndex, calendarModalOpen, openCalendarModal, $$scope, slots, click_handler, calendarmodal_calendarModalOpen_binding];
  }

  var SingleEvent = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(SingleEvent, _SvelteComponentDev);

    var _super = _createSuper(SingleEvent);

    function SingleEvent(options) {
      var _this;

      _classCallCheck(this, SingleEvent);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$d, create_fragment$d, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "SingleEvent",
        options: options,
        id: create_fragment$d.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*getPageData*/
      ctx[0] === undefined && !("getPageData" in props)) {
        console.warn("<SingleEvent> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(SingleEvent, [{
      key: "getPageData",
      get: function get() {
        throw new Error("<SingleEvent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SingleEvent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return SingleEvent;
  }(SvelteComponentDev);

  var file$e = "src\\views\\Article.svelte"; // (1:0) <script>      import {flyModified}

  function create_catch_block$5(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$5.name,
      type: "catch",
      source: "(1:0) <script>      import {flyModified}",
      ctx: ctx
    });
    return block;
  } // (21:12) {:then slides}


  function create_then_block$5(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (
      /*slides*/
      ctx[4] &&
      /*slides*/
      ctx[4].length) return create_if_block$8;
      return create_else_block$6;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$5.name,
      type: "then",
      source: "(21:12) {:then slides}",
      ctx: ctx
    });
    return block;
  } // (28:16) {:else}


  function create_else_block$6(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "Event not found.";
        add_location(li, file$e, 28, 20, 1074);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$6.name,
      type: "else",
      source: "(28:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (22:16) {#if slides && slides.length}


  function create_if_block$8(ctx) {
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var h2;
    var t1_value =
    /*slides*/
    ctx[4][
    /*articleIndex*/
    ctx[1]].heading + "";
    var t1;
    var t2;
    var if_block_anchor;
    var if_block =
    /*slides*/
    ctx[4][
    /*articleIndex*/
    ctx[1]].text && create_if_block_1$5(ctx);
    var block = {
      c: function create() {
        img = element("img");
        t0 = space();
        h2 = element("h2");
        t1 = text(t1_value);
        t2 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr_dev(img, "class", "no-bottom-margin");
        if (img.src !== (img_src_value =
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", img_alt_value =
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].caption);
        add_location(img, file$e, 22, 20, 720);
        add_location(h2, file$e, 23, 20, 838);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
        insert_dev(target, t0, anchor);
        insert_dev(target, h2, anchor);
        append_dev(h2, t1);
        insert_dev(target, t2, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, articleIndex*/
        3 && img.src !== (img_src_value =
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].src)) {
          attr_dev(img, "src", img_src_value);
        }

        if (dirty &
        /*getPageData, articleIndex*/
        3 && img_alt_value !== (img_alt_value =
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].caption)) {
          attr_dev(img, "alt", img_alt_value);
        }

        if (dirty &
        /*getPageData, articleIndex*/
        3 && t1_value !== (t1_value =
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].heading + "")) set_data_dev(t1, t1_value);

        if (
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].text) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_1$5(ctx);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(h2);
        if (detaching) detach_dev(t2);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$8.name,
      type: "if",
      source: "(22:16) {#if slides && slides.length}",
      ctx: ctx
    });
    return block;
  } // (25:20) {#if slides[articleIndex].text}


  function create_if_block_1$5(ctx) {
    var div;
    var raw_value =
    /*slides*/
    ctx[4][
    /*articleIndex*/
    ctx[1]].text + "";
    var block = {
      c: function create() {
        div = element("div");
        add_location(div, file$e, 25, 24, 956);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        div.innerHTML = raw_value;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, articleIndex*/
        3 && raw_value !== (raw_value =
        /*slides*/
        ctx[4][
        /*articleIndex*/
        ctx[1]].text + "")) div.innerHTML = raw_value;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$5.name,
      type: "if",
      source: "(25:20) {#if slides[articleIndex].text}",
      ctx: ctx
    });
    return block;
  } // (17:56)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then slides}


  function create_pending_block$5(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        add_location(img, file$e, 18, 20, 547);
        attr_dev(div, "class", "loader");
        add_location(div, file$e, 17, 16, 505);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block$5.name,
      type: "pending",
      source: "(17:56)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then slides}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$e(ctx) {
    var div2;
    var t;
    var div1;
    var div0;
    var promise;
    var div1_intro;
    var div1_outro;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[3].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[2], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block$5,
      then: create_then_block$5,
      catch: create_catch_block$5,
      value: 4
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/slideshow.json"), info);
    var block = {
      c: function create() {
        div2 = element("div");
        if (default_slot) default_slot.c();
        t = space();
        div1 = element("div");
        div0 = element("div");
        info.block.c();
        attr_dev(div0, "class", "content");
        add_location(div0, file$e, 15, 8, 408);
        add_location(div1, file$e, 14, 4, 297);
        attr_dev(div2, "class", "page");
        add_location(div2, file$e, 12, 0, 254);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);

        if (default_slot) {
          default_slot.m(div2, null);
        }

        append_dev(div2, t);
        append_dev(div2, div1);
        append_dev(div1, div0);
        info.block.m(div0, info.anchor = null);

        info.mount = function () {
          return div0;
        };

        info.anchor = null;
        current = true;
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          4) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[2], dirty, null, null);
          }
        }

        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/slideshow.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[4] = info.resolved;
          info.block.p(child_ctx, dirty);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          if (!div1_intro) div1_intro = create_in_transition(div1, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div1_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (default_slot) default_slot.d(detaching);
        info.block.d();
        info.token = null;
        info = null;
        if (detaching && div1_outro) div1_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$e.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$e($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Article", slots, ['default']);
    var getPageData = $$props.getPageData;
    var articleIndex;
    onMount(function () {
      $$invalidate(1, articleIndex = window.location.hash.split("/")[1]);
    });
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Article> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        onMount: onMount,
        getPageData: getPageData,
        articleIndex: articleIndex
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("articleIndex" in $$props) $$invalidate(1, articleIndex = $$props.articleIndex);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, articleIndex, $$scope, slots];
  }

  var Article = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Article, _SvelteComponentDev);

    var _super = _createSuper(Article);

    function Article(options) {
      var _this;

      _classCallCheck(this, Article);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$e, create_fragment$e, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Article",
        options: options,
        id: create_fragment$e.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*getPageData*/
      ctx[0] === undefined && !("getPageData" in props)) {
        console.warn("<Article> was created without expected prop 'getPageData'");
      }

      return _this;
    }

    _createClass(Article, [{
      key: "getPageData",
      get: function get() {
        throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Article;
  }(SvelteComponentDev);

  var file$f = "src\\specials\\Starwords.svelte"; // (17:4) {#if showWord}

  function create_if_block$9(ctx) {
    var p;
    var t;
    var p_transition;
    var current;
    var block = {
      c: function create() {
        p = element("p");
        t = text(
        /*word*/
        ctx[0]);
        attr_dev(p, "id", "starWord");
        attr_dev(p, "class", "svelte-1fzh2fa");
        add_location(p, file$f, 17, 8, 2577);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (!current || dirty &
        /*word*/
        1) set_data_dev(t,
        /*word*/
        ctx[0]);
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!p_transition) p_transition = create_bidirectional_transition(p, scale, {}, true);
          p_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!p_transition) p_transition = create_bidirectional_transition(p, scale, {}, false);
        p_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
        if (detaching && p_transition) p_transition.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$9.name,
      type: "if",
      source: "(17:4) {#if showWord}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$f(ctx) {
    var div;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*showWord*/
    ctx[1] && create_if_block$9(ctx);
    var block = {
      c: function create() {
        div = element("div");
        if (if_block) if_block.c();
        attr_dev(div, "class", "stars svelte-1fzh2fa");
        add_location(div, file$f, 14, 0, 2404);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        if (if_block) if_block.m(div, null);
        current = true;

        if (!mounted) {
          dispose = listen_dev(div, "click",
          /*changeWord*/
          ctx[2], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*showWord*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*showWord*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$9(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (if_block) if_block.d();
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$f.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$f($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Starwords", slots, []);
    var words = ["kindness", "caring", "sharing", "giving", "compassion", "love", "openness", "pardon", "understanding", "discipleship", "servanthood", "stability", "hopefulness", "innocence", "prayerfulness", "praise", "gentleness", "knowledge", "happiness", "laughter", "acceptance", "self-control", "restraint", "mercy", "truth", "peace", "faith", "consideration", "fellowship", "unity", "teaching", "singing", "celebration", "perseverance", "judgment", "discipline", "courage", "confidence", "clarity", "honor", "contentment", "imagination", "commitment", "friendship", "freedom", "creativity", "devotion", "joy", "strength", "comfort", "leadership", "discernment", "obedience", "thoughtfulness", "responsibility", "patience", "forgiveness", "humility", "faithfulness", "hope", "tenderness", "enthusiasm", "evangelism", "healing", "loyalty", "rejoicing", "respect", "insight", "selflessness", "righteousness", "assurance", "justice", "honesty", "wisdom", "awareness", "tolerance", "wholeness", "guidance", "hospitality", "foresight", "trust", "learning", "proclamation", "encouragement", "trustworthiness", "inspiration", "wonder", "flexibility", "grace", "graciousness", "integrity", "helping", "witnessing", "generosity", "perceptiveness", "purity", "prayer", "service", "steadfastness", "determination", "nurturing", "renewal", "purpose", "peacefulness", "power", "excitement", "harmony", "reliability", "goodness", "reverence", "serenity", "humor", "boldness", "genuineness", "illumination", "vision", "dependability", "endurance", "listening", "accountability", "speaking", "sincerity", "writing", "music", "motivation", "art", "building", "crafts", "planning", "organization", "drama", "cheerfulness", "focus", "balance", "helpfulness", "languages", "cooking", "sympathy", "empathy", "sensitivity", "time", "conviction", "delight", "responsiveness", "education", "intelligence", "experience", "visitation", "sobriety", "spirituality", "travel", "thankfulness", "money", "dignity", "quietness", "playfulness", "dedication", "empathy", "solitude", "zeal", "appreciation", "affirmation", "charity"];
    var word;
    var showWord = true;

    function changeWord() {
      $$invalidate(1, showWord = false);
      setTimeout(function () {
        $$invalidate(1, showWord = true);
        $$invalidate(0, word = words[Math.floor(Math.random() * words.length)]);
      }, 100);
    }

    changeWord();
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Starwords> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$capture_state = function () {
      return {
        scale: scale,
        words: words,
        word: word,
        showWord: showWord,
        changeWord: changeWord
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("words" in $$props) words = $$props.words;
      if ("word" in $$props) $$invalidate(0, word = $$props.word);
      if ("showWord" in $$props) $$invalidate(1, showWord = $$props.showWord);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [word, showWord, changeWord];
  }

  var Starwords = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Starwords, _SvelteComponentDev);

    var _super = _createSuper(Starwords);

    function Starwords(options) {
      var _this;

      _classCallCheck(this, Starwords);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$f, create_fragment$f, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Starwords",
        options: options,
        id: create_fragment$f.name
      });
      return _this;
    }

    return Starwords;
  }(SvelteComponentDev);

  var Object_1 = globals.Object,
      console_1$2 = globals.console;
  var file$g = "src\\App.svelte";

  function get_each_context$4(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[40] = list[i];
    child_ctx[42] = i;
    return child_ctx;
  } // (235:24) {#if frontpage && frontpage.file}


  function create_if_block_9(ctx) {
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        img = element("img");
        attr_dev(img, "class", "float svelte-oz1w6e");
        attr_dev(img, "alt", "");
        if (img.src !== (img_src_value =
        /*frontpage*/
        ctx[13].file)) attr_dev(img, "src", img_src_value);
        add_location(img, file$g, 235, 28, 9357);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*frontpage*/
        8192 && img.src !== (img_src_value =
        /*frontpage*/
        ctx[13].file)) {
          attr_dev(img, "src", img_src_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_9.name,
      type: "if",
      source: "(235:24) {#if frontpage && frontpage.file}",
      ctx: ctx
    });
    return block;
  } // (241:24) {:else}


  function create_else_block_2$1(ctx) {
    var p0;
    var strong0;
    var t1;
    var t2;
    var p1;
    var strong1;
    var t4;
    var em0;
    var t6;
    var p2;
    var strong2;
    var t8;
    var em1;
    var t10;
    var block = {
      c: function create() {
        p0 = element("p");
        strong0 = element("strong");
        strong0.textContent = "Our Identity";
        t1 = text(" We are Disciples of Christ, a movement for wholeness in a fragmented world. As part of the one body of Christ, we welcome all to the Lord’s Table as God has welcomed us.");
        t2 = space();
        p1 = element("p");
        strong1 = element("strong");
        strong1.textContent = "Our Vision";
        t4 = text(" To be a faithful, growing church, that demonstrates true community, deep Christian spirituality and a passion for justice. ");
        em0 = element("em");
        em0.textContent = "- Micah 6:8";
        t6 = space();
        p2 = element("p");
        strong2 = element("strong");
        strong2.textContent = "Our Mission";
        t8 = text(" To be and to share the Good News of Jesus Christ, witnessing, loving and serving from our doorsteps \"to the ends of the earth.\" ");
        em1 = element("em");
        em1.textContent = "- Acts 1:8";
        t10 = text(" And as First Christian in Galesburg, our mission is Growing Spirit-filled, committed disciples of Christ.");
        add_location(strong0, file$g, 241, 31, 9703);
        add_location(p0, file$g, 241, 28, 9700);
        add_location(strong1, file$g, 242, 31, 9938);
        add_location(em0, file$g, 242, 182, 10089);
        add_location(p1, file$g, 242, 28, 9935);
        add_location(strong2, file$g, 243, 31, 10145);
        add_location(em1, file$g, 243, 188, 10302);
        add_location(p2, file$g, 243, 28, 10142);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p0, anchor);
        append_dev(p0, strong0);
        append_dev(p0, t1);
        insert_dev(target, t2, anchor);
        insert_dev(target, p1, anchor);
        append_dev(p1, strong1);
        append_dev(p1, t4);
        append_dev(p1, em0);
        insert_dev(target, t6, anchor);
        insert_dev(target, p2, anchor);
        append_dev(p2, strong2);
        append_dev(p2, t8);
        append_dev(p2, em1);
        append_dev(p2, t10);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(p0);
        if (detaching) detach_dev(t2);
        if (detaching) detach_dev(p1);
        if (detaching) detach_dev(t6);
        if (detaching) detach_dev(p2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_2$1.name,
      type: "else",
      source: "(241:24) {:else}",
      ctx: ctx
    });
    return block;
  } // (239:24) {#if frontpage && frontpage.content}


  function create_if_block_8(ctx) {
    var t_value =
    /*frontpage*/
    ctx[13].content + "";
    var t;
    var block = {
      c: function create() {
        t = text(t_value);
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*frontpage*/
        8192 && t_value !== (t_value =
        /*frontpage*/
        ctx[13].content + "")) set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_8.name,
      type: "if",
      source: "(239:24) {#if frontpage && frontpage.content}",
      ctx: ctx
    });
    return block;
  } // (255:16) {#if latestVid}


  function create_if_block_5$1(ctx) {
    var show_if = new Date(
    /*latestVid*/
    ctx[5].date).getDate() >= new Date().getDate() - 14;
    var if_block_anchor;
    var if_block = show_if && create_if_block_6(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*latestVid*/
        32) show_if = new Date(
        /*latestVid*/
        ctx[5].date).getDate() >= new Date().getDate() - 14;

        if (show_if) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_6(ctx);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_5$1.name,
      type: "if",
      source: "(255:16) {#if latestVid}",
      ctx: ctx
    });
    return block;
  } // (256:20) {#if new Date(latestVid.date).getDate() >= new Date().getDate() - 14}


  function create_if_block_6(ctx) {
    var div1;
    var h2;
    var t0_value =
    /*latestVid*/
    ctx[5].title + "";
    var t0;
    var t1;
    var div0;

    function select_block_type_1(ctx, dirty) {
      if (
      /*latestVid*/
      ctx[5].type &&
      /*latestVid*/
      ctx[5].type == "onsite") return create_if_block_7;
      return create_else_block_1$2;
    }

    var current_block_type = select_block_type_1(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div1 = element("div");
        h2 = element("h2");
        t0 = text(t0_value);
        t1 = space();
        div0 = element("div");
        if_block.c();
        attr_dev(h2, "class", "svelte-oz1w6e");
        add_location(h2, file$g, 257, 28, 11594);
        attr_dev(div0, "class", "embed-container");
        add_location(div0, file$g, 258, 28, 11649);
        attr_dev(div1, "class", "fp-video-container svelte-oz1w6e");
        add_location(div1, file$g, 256, 24, 11533);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, h2);
        append_dev(h2, t0);
        append_dev(div1, t1);
        append_dev(div1, div0);
        if_block.m(div0, null);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*latestVid*/
        32 && t0_value !== (t0_value =
        /*latestVid*/
        ctx[5].title + "")) set_data_dev(t0, t0_value);

        if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div0, null);
          }
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_6.name,
      type: "if",
      source: "(256:20) {#if new Date(latestVid.date).getDate() >= new Date().getDate() - 14}",
      ctx: ctx
    });
    return block;
  } // (264:32) {:else}


  function create_else_block_1$2(ctx) {
    var iframe;
    var iframe_title_value;
    var iframe_src_value;
    var block = {
      c: function create() {
        iframe = element("iframe");
        attr_dev(iframe, "title", iframe_title_value =
        /*latestVid*/
        ctx[5].title);
        if (iframe.src !== (iframe_src_value =
        /*latestVid*/
        ctx[5].src)) attr_dev(iframe, "src", iframe_src_value);
        attr_dev(iframe, "width", "560");
        attr_dev(iframe, "height", "487");
        set_style(iframe, "border", "none");
        set_style(iframe, "overflow", "hidden");
        attr_dev(iframe, "scrolling", "no");
        attr_dev(iframe, "frameborder", "0");
        attr_dev(iframe, "allowtransparency", "true");
        attr_dev(iframe, "allow", "encrypted-media");
        iframe.allowFullscreen = "true";
        add_location(iframe, file$g, 264, 36, 12048);
      },
      m: function mount(target, anchor) {
        insert_dev(target, iframe, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*latestVid*/
        32 && iframe_title_value !== (iframe_title_value =
        /*latestVid*/
        ctx[5].title)) {
          attr_dev(iframe, "title", iframe_title_value);
        }

        if (dirty[0] &
        /*latestVid*/
        32 && iframe.src !== (iframe_src_value =
        /*latestVid*/
        ctx[5].src)) {
          attr_dev(iframe, "src", iframe_src_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(iframe);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_1$2.name,
      type: "else",
      source: "(264:32) {:else}",
      ctx: ctx
    });
    return block;
  } // (260:32) {#if latestVid.type && latestVid.type == "onsite"}


  function create_if_block_7(ctx) {
    var video;
    var source;
    var source_src_value;
    var video_poster_value;
    var block = {
      c: function create() {
        video = element("video");
        source = element("source");
        if (source.src !== (source_src_value =
        /*latestVid*/
        ctx[5].src)) attr_dev(source, "src", source_src_value);
        attr_dev(source, "type", "video/mp4");
        add_location(source, file$g, 261, 40, 11881);
        video.controls = true;
        attr_dev(video, "poster", video_poster_value =
        /*latestVid*/
        ctx[5].poster);
        add_location(video, file$g, 260, 36, 11798);
      },
      m: function mount(target, anchor) {
        insert_dev(target, video, anchor);
        append_dev(video, source);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*latestVid*/
        32 && source.src !== (source_src_value =
        /*latestVid*/
        ctx[5].src)) {
          attr_dev(source, "src", source_src_value);
        }

        if (dirty[0] &
        /*latestVid*/
        32 && video_poster_value !== (video_poster_value =
        /*latestVid*/
        ctx[5].poster)) {
          attr_dev(video, "poster", video_poster_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(video);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_7.name,
      type: "if",
      source: "(260:32) {#if latestVid.type && latestVid.type == \\\"onsite\\\"}",
      ctx: ctx
    });
    return block;
  } // (1:0) <script>     import {fly, fade, scale}


  function create_catch_block$6(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$6.name,
      type: "catch",
      source: "(1:0) <script>     import {fly, fade, scale}",
      ctx: ctx
    });
    return block;
  } // (297:20) {:then events}


  function create_then_block$6(ctx) {
    var if_block_anchor;

    function select_block_type_2(ctx, dirty) {
      if (
      /*events*/
      ctx[39] &&
      /*events*/
      ctx[39].sort(
      /*func*/
      ctx[18]).filter(
      /*func_1*/
      ctx[19]).slice(0, 5).length > 0) return create_if_block_2$4;
      return create_else_block$7;
    }

    var current_block_type = select_block_type_2(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if_block.p(ctx, dirty);
      },
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$6.name,
      type: "then",
      source: "(297:20) {:then events}",
      ctx: ctx
    });
    return block;
  } // (328:24) {:else}


  function create_else_block$7(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "No events found.";
        add_location(li, file$g, 328, 28, 16255);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$7.name,
      type: "else",
      source: "(328:24) {:else}",
      ctx: ctx
    });
    return block;
  } // (298:24) {#if events && (events.sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())                                 .filter(event=> (new Date(event.date)).getTime() > Date.now())                                 .slice(0, 5)).length > 0}


  function create_if_block_2$4(ctx) {
    var t;
    var if_block_anchor;
    var each_value =
    /*events*/
    ctx[39].sort(
    /*func_2*/
    ctx[24]).filter(
    /*func_3*/
    ctx[25]).slice(0, 5);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    }

    var if_block =
    /*events*/
    ctx[39].length > 5 && create_if_block_3$2(ctx);
    var block = {
      c: function create() {
        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        t = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(target, anchor);
        }

        insert_dev(target, t, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*openCalendarModal, changeEventMonth*/
        196608) {
          each_value =
          /*events*/
          ctx[39].sort(
          /*func_2*/
          ctx[24]).filter(
          /*func_3*/
          ctx[25]).slice(0, 5);
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$4(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$4(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(t.parentNode, t);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      d: function destroy(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach_dev(t);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$4.name,
      type: "if",
      source: "(298:24) {#if events && (events.sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())                                 .filter(event=> (new Date(event.date)).getTime() > Date.now())                                 .slice(0, 5)).length > 0}",
      ctx: ctx
    });
    return block;
  } // (306:32) {#if changeEventMonth(event, true)}


  function create_if_block_4$1(ctx) {
    var h3;
    var t_value =
    /*changeEventMonth*/
    ctx[16](
    /*event*/
    ctx[40], false) + "";
    var t;
    var block = {
      c: function create() {
        h3 = element("h3");
        t = text(t_value);
        attr_dev(h3, "class", "svelte-oz1w6e");
        add_location(h3, file$g, 306, 36, 14924);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h3, anchor);
        append_dev(h3, t);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(h3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_4$1.name,
      type: "if",
      source: "(306:32) {#if changeEventMonth(event, true)}",
      ctx: ctx
    });
    return block;
  } // (301:28) {#each events                                 .sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())                                 .filter(event=> (new Date(event.date)).getTime() > Date.now())                                 .slice(0, 5)                             as event, i}


  function create_each_block$4(ctx) {
    var show_if =
    /*changeEventMonth*/
    ctx[16](
    /*event*/
    ctx[40], true);
    var t0;
    var li;
    var div0;
    var strong;
    var t1_value =
    /*event*/
    ctx[40].name + "";
    var t1;
    var t2;
    var t3_value = new Date(
    /*event*/
    ctx[40].date).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Chicago"
    }) + "";
    var t3;
    var t4;
    var div1;
    var raw_value =
    /*event*/
    ctx[40].description + "";
    var t5;
    var div2;
    var a0;
    var a0_href_value;
    var t7;
    var a1;
    var a1_href_value;
    var mounted;
    var dispose;
    var if_block = show_if && create_if_block_4$1(ctx);

    function click_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler*/
        (_ctx = ctx)[26].apply(_ctx, [
        /*event*/
        ctx[40]].concat(args))
      );
    }

    var block = {
      c: function create() {
        if (if_block) if_block.c();
        t0 = space();
        li = element("li");
        div0 = element("div");
        strong = element("strong");
        t1 = text(t1_value);
        t2 = text(" - ");
        t3 = text(t3_value);
        t4 = space();
        div1 = element("div");
        t5 = space();
        div2 = element("div");
        a0 = element("a");
        a0.textContent = "View event";
        t7 = text(" | \n                                        ");
        a1 = element("a");
        a1.textContent = "Add to calendar";
        add_location(strong, file$g, 310, 40, 15144);
        attr_dev(div0, "class", "overflow-box");
        add_location(div0, file$g, 309, 36, 15077);
        attr_dev(div1, "class", "overflow-box");
        add_location(div1, file$g, 312, 36, 15375);
        attr_dev(a0, "href", a0_href_value = "#singleevent/" +
        /*i*/
        ctx[42]);
        add_location(a0, file$g, 316, 40, 15625);
        attr_dev(a1, "href", a1_href_value = "#events/" +
        /*i*/
        ctx[42]);
        add_location(a1, file$g, 317, 40, 15710);
        attr_dev(div2, "class", "right-align event-links");
        add_location(div2, file$g, 315, 36, 15547);
        add_location(li, file$g, 308, 32, 15036);
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, t0, anchor);
        insert_dev(target, li, anchor);
        append_dev(li, div0);
        append_dev(div0, strong);
        append_dev(strong, t1);
        append_dev(div0, t2);
        append_dev(div0, t3);
        append_dev(li, t4);
        append_dev(li, div1);
        div1.innerHTML = raw_value;
        append_dev(li, t5);
        append_dev(li, div2);
        append_dev(div2, a0);
        append_dev(div2, t7);
        append_dev(div2, a1);

        if (!mounted) {
          dispose = listen_dev(a1, "click", prevent_default(click_handler), false, true, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (show_if) if_block.p(ctx, dirty);
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(li);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$4.name,
      type: "each",
      source: "(301:28) {#each events                                 .sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())                                 .filter(event=> (new Date(event.date)).getTime() > Date.now())                                 .slice(0, 5)                             as event, i}",
      ctx: ctx
    });
    return block;
  } // (323:28) {#if events.length > 5}


  function create_if_block_3$2(ctx) {
    var div;
    var a;
    var block = {
      c: function create() {
        div = element("div");
        a = element("a");
        a.textContent = "Show all events";
        attr_dev(a, "href", "#allevents");
        add_location(a, file$g, 324, 36, 16081);
        attr_dev(div, "class", "centered eventBtn");
        add_location(div, file$g, 323, 32, 16013);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, a);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3$2.name,
      type: "if",
      source: "(323:28) {#if events.length > 5}",
      ctx: ctx
    });
    return block;
  } // (293:61)                          <div class='loader'>                             <img src='/icons/loading.svg' alt='loading content'>                         </div>                     {:then events}


  function create_pending_block$6(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        attr_dev(img, "class", "svelte-oz1w6e");
        add_location(img, file$g, 294, 28, 14095);
        attr_dev(div, "class", "loader");
        add_location(div, file$g, 293, 24, 14046);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block$6.name,
      type: "pending",
      source: "(293:61)                          <div class='loader'>                             <img src='/icons/loading.svg' alt='loading content'>                         </div>                     {:then events}",
      ctx: ctx
    });
    return block;
  } // (354:0) {#if subpageOpen}


  function create_if_block_1$6(ctx) {
    var div;
    var switch_instance;
    var div_transition;
    var current;
    var switch_value =
    /*page*/
    ctx[15][
    /*curPage*/
    ctx[12]];

    function switch_props(ctx) {
      return {
        props: {
          getPageData: getPageData,
          $$slots: {
            default: [create_default_slot]
          },
          $$scope: {
            ctx: ctx
          }
        },
        $$inline: true
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }

    var block = {
      c: function create() {
        div = element("div");
        if (switch_instance) create_component(switch_instance.$$.fragment);
        attr_dev(div, "class", "subpage");
        add_location(div, file$g, 354, 4, 17575);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (switch_instance) {
          mount_component(switch_instance, div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        var switch_instance_changes = {};

        if (dirty[0] &
        /*subpageOpen, scrollTop, main, mobileOpen, curPage*/
        22785 | dirty[1] &
        /*$$scope*/
        4096) {
          switch_instance_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        if (switch_value !== (switch_value =
        /*page*/
        ctx[15][
        /*curPage*/
        ctx[12]])) {
          if (switch_instance) {
            group_outros();
            var old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, function () {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div, null);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function intro(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        add_render_callback(function () {
          if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
          div_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
        div_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (switch_instance) destroy_component(switch_instance);
        if (detaching && div_transition) div_transition.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$6.name,
      type: "if",
      source: "(354:0) {#if subpageOpen}",
      ctx: ctx
    });
    return block;
  } // (356:8) <svelte:component this={page[curPage]} {getPageData}>


  function create_default_slot(ctx) {
    var div;
    var img;
    var img_src_value;
    var t;
    var navigation;
    var updating_mobileOpen;
    var updating_curPage;
    var current;
    var mounted;
    var dispose;

    function navigation_mobileOpen_binding_1(value) {
      /*navigation_mobileOpen_binding_1*/
      ctx[30].call(null, value);
    }

    function navigation_curPage_binding_1(value) {
      /*navigation_curPage_binding_1*/
      ctx[31].call(null, value);
    }

    var navigation_props = {
      subpageOpen:
      /*subpageOpen*/
      ctx[14],
      subpageStyle: true,
      scrollTop:
      /*scrollTop*/
      ctx[8],
      main:
      /*main*/
      ctx[0]
    };

    if (
    /*mobileOpen*/
    ctx[11] !== void 0) {
      navigation_props.mobileOpen =
      /*mobileOpen*/
      ctx[11];
    }

    if (
    /*curPage*/
    ctx[12] !== void 0) {
      navigation_props.curPage =
      /*curPage*/
      ctx[12];
    }

    navigation = new Navigation({
      props: navigation_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(navigation, "mobileOpen", navigation_mobileOpen_binding_1);
    });
    binding_callbacks.push(function () {
      return bind(navigation, "curPage", navigation_curPage_binding_1);
    });
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        t = space();
        create_component(navigation.$$.fragment);
        if (img.src !== (img_src_value = "/icons/back.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Back to main page");
        add_location(img, file$g, 356, 87, 17762);
        attr_dev(div, "href", "#home");
        attr_dev(div, "class", "back-arrow");
        add_location(div, file$g, 356, 12, 17687);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
        insert_dev(target, t, anchor);
        mount_component(navigation, target, anchor);
        current = true;

        if (!mounted) {
          dispose = listen_dev(div, "click",
          /*click_handler_1*/
          ctx[29], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        var navigation_changes = {};
        if (dirty[0] &
        /*subpageOpen*/
        16384) navigation_changes.subpageOpen =
        /*subpageOpen*/
        ctx[14];
        if (dirty[0] &
        /*scrollTop*/
        256) navigation_changes.scrollTop =
        /*scrollTop*/
        ctx[8];
        if (dirty[0] &
        /*main*/
        1) navigation_changes.main =
        /*main*/
        ctx[0];

        if (!updating_mobileOpen && dirty[0] &
        /*mobileOpen*/
        2048) {
          updating_mobileOpen = true;
          navigation_changes.mobileOpen =
          /*mobileOpen*/
          ctx[11];
          add_flush_callback(function () {
            return updating_mobileOpen = false;
          });
        }

        if (!updating_curPage && dirty[0] &
        /*curPage*/
        4096) {
          updating_curPage = true;
          navigation_changes.curPage =
          /*curPage*/
          ctx[12];
          add_flush_callback(function () {
            return updating_curPage = false;
          });
        }

        navigation.$set(navigation_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(navigation.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(navigation.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (detaching) detach_dev(t);
        destroy_component(navigation, detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_default_slot.name,
      type: "slot",
      source: "(356:8) <svelte:component this={page[curPage]} {getPageData}>",
      ctx: ctx
    });
    return block;
  } // (364:0) {#if calendarModalOpen && curEvent}


  function create_if_block$a(ctx) {
    var calendarmodal;
    var updating_calendarModalOpen;
    var current;

    function calendarmodal_calendarModalOpen_binding(value) {
      /*calendarmodal_calendarModalOpen_binding*/
      ctx[32].call(null, value);
    }

    var calendarmodal_props = {
      curEvent:
      /*curEvent*/
      ctx[7]
    };

    if (
    /*calendarModalOpen*/
    ctx[6] !== void 0) {
      calendarmodal_props.calendarModalOpen =
      /*calendarModalOpen*/
      ctx[6];
    }

    calendarmodal = new CalendarModal({
      props: calendarmodal_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(calendarmodal, "calendarModalOpen", calendarmodal_calendarModalOpen_binding);
    });
    var block = {
      c: function create() {
        create_component(calendarmodal.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(calendarmodal, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var calendarmodal_changes = {};
        if (dirty[0] &
        /*curEvent*/
        128) calendarmodal_changes.curEvent =
        /*curEvent*/
        ctx[7];

        if (!updating_calendarModalOpen && dirty[0] &
        /*calendarModalOpen*/
        64) {
          updating_calendarModalOpen = true;
          calendarmodal_changes.calendarModalOpen =
          /*calendarModalOpen*/
          ctx[6];
          add_flush_callback(function () {
            return updating_calendarModalOpen = false;
          });
        }

        calendarmodal.$set(calendarmodal_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(calendarmodal.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(calendarmodal.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(calendarmodal, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$a.name,
      type: "if",
      source: "(364:0) {#if calendarModalOpen && curEvent}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$g(ctx) {
    var div24;
    var navigation;
    var updating_mobileOpen;
    var updating_curPage;
    var t0;
    var div7;
    var div0;
    var t1;
    var div6;
    var img0;
    var img0_src_value;
    var t2;
    var div5;
    var div1;
    var img1;
    var img1_src_value;
    var t3;
    var span1;
    var h1;
    var t4;
    var span0;
    var t6;
    var div4;
    var div2;
    var t8;
    var div3;
    var a0;
    var t10;
    var a1;
    var t12;
    var a2;
    var t14;
    var div9;
    var div8;
    var t15;
    var slideshow;
    var t16;
    var div14;
    var div11;
    var h30;
    var t18;
    var div10;
    var t19;
    var br;
    var t20;
    var a3;
    var t22;
    var div13;
    var div12;
    var a4;
    var img2;
    var img2_src_value;
    var span3;
    var span2;
    var t24;
    var a5;
    var img3;
    var img3_src_value;
    var span5;
    var span4;
    var t26;
    var a6;
    var img4;
    var img4_src_value;
    var span7;
    var span6;
    var t28;
    var a7;
    var img5;
    var img5_src_value;
    var span9;
    var span8;
    var t30;
    var a8;
    var img6;
    var img6_src_value;
    var span11;
    var span10;
    var t32;
    var a9;
    var img7;
    var img7_src_value;
    var span13;
    var span12;
    var t34;
    var div23;
    var div18;
    var div17;
    var div16;
    var h20;
    var t36;
    var div15;
    var t37;
    var h31;
    var t38_value = (
    /*frontpage*/
    ctx[13] ?
    /*frontpage*/
    ctx[13].header : "Spreading the Love of God") + "";
    var t38;
    var t39;
    var t40;
    var t41;
    var div20;
    var img8;
    var img8_src_value;
    var img8_style_value;
    var t42;
    var div19;
    var h21;
    var t44;
    var ul;
    var promise;
    var t45;
    var lovebox;
    var updating_loveImage;
    var t46;
    var div22;
    var div21;
    var t50;
    var t51;
    var if_block4_anchor;
    var current;

    function navigation_mobileOpen_binding(value) {
      /*navigation_mobileOpen_binding*/
      ctx[20].call(null, value);
    }

    function navigation_curPage_binding(value) {
      /*navigation_curPage_binding*/
      ctx[21].call(null, value);
    }

    var navigation_props = {
      scrollTop:
      /*scrollTop*/
      ctx[8],
      subpageOpen:
      /*subpageOpen*/
      ctx[14],
      main:
      /*main*/
      ctx[0]
    };

    if (
    /*mobileOpen*/
    ctx[11] !== void 0) {
      navigation_props.mobileOpen =
      /*mobileOpen*/
      ctx[11];
    }

    if (
    /*curPage*/
    ctx[12] !== void 0) {
      navigation_props.curPage =
      /*curPage*/
      ctx[12];
    }

    navigation = new Navigation({
      props: navigation_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(navigation, "mobileOpen", navigation_mobileOpen_binding);
    });
    binding_callbacks.push(function () {
      return bind(navigation, "curPage", navigation_curPage_binding);
    });
    slideshow = new Slideshow({
      props: {
        scrollTop:
        /*scrollTop*/
        ctx[8],
        subpageOpen:
        /*subpageOpen*/
        ctx[14],
        header:
        /*header*/
        ctx[1],
        getPageData: getPageData
      },
      $$inline: true
    });
    var if_block0 =
    /*frontpage*/
    ctx[13] &&
    /*frontpage*/
    ctx[13].file && create_if_block_9(ctx);

    function select_block_type(ctx, dirty) {
      if (
      /*frontpage*/
      ctx[13] &&
      /*frontpage*/
      ctx[13].content) return create_if_block_8;
      return create_else_block_2$1;
    }

    var current_block_type = select_block_type(ctx);
    var if_block1 = current_block_type(ctx);
    var if_block2 =
    /*latestVid*/
    ctx[5] && create_if_block_5$1(ctx);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block$6,
      then: create_then_block$6,
      catch: create_catch_block$6,
      value: 39
    };
    handle_promise(promise = getPageData("/data/events.json"), info);

    function lovebox_loveImage_binding(value) {
      /*lovebox_loveImage_binding*/
      ctx[27].call(null, value);
    }

    var lovebox_props = {
      loveTop:
      /*loveTop*/
      ctx[10],
      getPageData: getPageData
    };

    if (
    /*loveImage*/
    ctx[3] !== void 0) {
      lovebox_props.loveImage =
      /*loveImage*/
      ctx[3];
    }

    lovebox = new LoveBox({
      props: lovebox_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(lovebox, "loveImage", lovebox_loveImage_binding);
    });
    var if_block3 =
    /*subpageOpen*/
    ctx[14] && create_if_block_1$6(ctx);
    var if_block4 =
    /*calendarModalOpen*/
    ctx[6] &&
    /*curEvent*/
    ctx[7] && create_if_block$a(ctx);
    var block = {
      c: function create() {
        div24 = element("div");
        create_component(navigation.$$.fragment);
        t0 = space();
        div7 = element("div");
        div0 = element("div");
        t1 = space();
        div6 = element("div");
        img0 = element("img");
        t2 = space();
        div5 = element("div");
        div1 = element("div");
        img1 = element("img");
        t3 = space();
        span1 = element("span");
        h1 = element("h1");
        t4 = text("First Christian Church ");
        span0 = element("span");
        span0.textContent = "(Disciples of Christ)";
        t6 = space();
        div4 = element("div");
        div2 = element("div");
        div2.textContent = "301 N Broad St, Galesburg, IL 61401";
        t8 = space();
        div3 = element("div");
        a0 = element("a");
        a0.textContent = "309.343.9960";
        t10 = text(" | \n                        ");
        a1 = element("a");
        a1.textContent = "Email us";
        t12 = text(" | \n                        ");
        a2 = element("a");
        a2.textContent = "Directions";
        t14 = space();
        div9 = element("div");
        div8 = element("div");
        t15 = space();
        create_component(slideshow.$$.fragment);
        t16 = space();
        div14 = element("div");
        div11 = element("div");
        h30 = element("h3");
        h30.textContent = "Sunday Worship";
        t18 = space();
        div10 = element("div");
        t19 = text("Gathering Sundays at 10am");
        br = element("br");
        t20 = text("or ");
        a3 = element("a");
        a3.textContent = "worship with us online!";
        t22 = space();
        div13 = element("div");
        div12 = element("div");
        a4 = element("a");
        img2 = element("img");
        span3 = element("span");
        span2 = element("span");
        span2.textContent = "Sermons";
        t24 = space();
        a5 = element("a");
        img3 = element("img");
        span5 = element("span");
        span4 = element("span");
        span4.textContent = "Events";
        t26 = space();
        a6 = element("a");
        img4 = element("img");
        span7 = element("span");
        span6 = element("span");
        span6.textContent = "Newsletters";
        t28 = space();
        a7 = element("a");
        img5 = element("img");
        span9 = element("span");
        span8 = element("span");
        span8.textContent = "Staff";
        t30 = space();
        a8 = element("a");
        img6 = element("img");
        span11 = element("span");
        span10 = element("span");
        span10.textContent = "Tithe.ly";
        t32 = space();
        a9 = element("a");
        img7 = element("img");
        span13 = element("span");
        span12 = element("span");
        span12.textContent = "Facebook";
        t34 = space();
        div23 = element("div");
        div18 = element("div");
        div17 = element("div");
        div16 = element("div");
        h20 = element("h2");
        h20.textContent = "What's going on now at FCC Galesburg?";
        t36 = space();
        div15 = element("div");
        if (if_block0) if_block0.c();
        t37 = space();
        h31 = element("h3");
        t38 = text(t38_value);
        t39 = space();
        if_block1.c();
        t40 = space();
        if (if_block2) if_block2.c();
        t41 = space();
        div20 = element("div");
        img8 = element("img");
        t42 = space();
        div19 = element("div");
        h21 = element("h2");
        h21.textContent = "Upcoming Events at FCC";
        t44 = space();
        ul = element("ul");
        info.block.c();
        t45 = space();
        create_component(lovebox.$$.fragment);
        t46 = space();
        div22 = element("div");
        div21 = element("div");
        div21.textContent = "\xA9 ".concat(new Date().getFullYear(), " First Christian Church (Disciples of Christ) - Galesburg, IL");
        t50 = space();
        if (if_block3) if_block3.c();
        t51 = space();
        if (if_block4) if_block4.c();
        if_block4_anchor = empty();
        attr_dev(div0, "class", "accent-angle svelte-oz1w6e");
        add_location(div0, file$g, 166, 8, 4723);
        if (img0.src !== (img0_src_value = "/icons/chalice.svg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "Disciples of Christ chalice logo");
        attr_dev(img0, "class", "primary-img svelte-oz1w6e");
        add_location(img0, file$g, 170, 12, 4868);
        if (img1.src !== (img1_src_value = "/icons/chalice.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Disciples of Christ chalice logo");
        attr_dev(img1, "class", "primary-img-mobile svelte-oz1w6e");
        add_location(img1, file$g, 173, 20, 5061);
        attr_dev(span0, "class", "smaller svelte-oz1w6e");
        add_location(span0, file$g, 175, 51, 5236);
        attr_dev(h1, "class", "svelte-oz1w6e");
        add_location(h1, file$g, 175, 24, 5209);
        add_location(span1, file$g, 174, 20, 5178);
        attr_dev(div1, "class", "logo svelte-oz1w6e");
        add_location(div1, file$g, 172, 16, 5022);
        attr_dev(div2, "class", "mt");
        add_location(div2, file$g, 180, 20, 5416);
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href", "tel:1-309-343-9960");
        attr_dev(a0, "class", "svelte-oz1w6e");
        add_location(a0, file$g, 182, 24, 5524);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href", "mailto:fccgalesburg@gmail.com");
        attr_dev(a1, "class", "svelte-oz1w6e");
        add_location(a1, file$g, 183, 24, 5613);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        attr_dev(a2, "class", "svelte-oz1w6e");
        add_location(a2, file$g, 184, 24, 5709);
        add_location(div3, file$g, 181, 20, 5494);
        attr_dev(div4, "class", "contact-links svelte-oz1w6e");
        add_location(div4, file$g, 179, 16, 5368);
        attr_dev(div5, "class", "mobile-formatting-div svelte-oz1w6e");
        add_location(div5, file$g, 171, 12, 4970);
        attr_dev(div6, "class", "header svelte-oz1w6e");
        add_location(div6, file$g, 169, 8, 4816);
        attr_dev(div7, "class", "forefront-content svelte-oz1w6e");
        add_location(div7, file$g, 163, 4, 4619);
        attr_dev(div8, "class", "inner svelte-oz1w6e");
        add_location(div8, file$g, 193, 8, 6166);
        attr_dev(div9, "class", "decorative-bottom-angle svelte-oz1w6e");
        add_location(div9, file$g, 192, 4, 6120);
        attr_dev(h30, "class", "svelte-oz1w6e");
        add_location(h30, file$g, 203, 12, 6604);
        add_location(br, file$g, 204, 42, 6670);
        attr_dev(a3, "href", "#worship");
        add_location(a3, file$g, 204, 50, 6678);
        add_location(div10, file$g, 204, 12, 6640);
        attr_dev(div11, "class", "worship-times svelte-oz1w6e");
        add_location(div11, file$g, 202, 8, 6564);
        if (img2.src !== (img2_src_value = "/icons/round/sermons.svg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "Sermons");
        attr_dev(img2, "class", "svelte-oz1w6e");
        add_location(img2, file$g, 217, 35, 7596);
        attr_dev(span2, "class", "inner");
        add_location(span2, file$g, 217, 109, 7670);
        attr_dev(span3, "class", "linklabel");
        add_location(span3, file$g, 217, 85, 7646);
        attr_dev(a4, "href", "#sermons");
        add_location(a4, file$g, 217, 16, 7577);
        if (img3.src !== (img3_src_value = "/icons/round/events.svg")) attr_dev(img3, "src", img3_src_value);
        attr_dev(img3, "alt", "Events");
        attr_dev(img3, "class", "svelte-oz1w6e");
        add_location(img3, file$g, 218, 61, 7777);
        attr_dev(span4, "class", "inner");
        add_location(span4, file$g, 218, 133, 7849);
        attr_dev(span5, "class", "linklabel");
        add_location(span5, file$g, 218, 109, 7825);
        set_style(a5, "color", "#0053a0");
        attr_dev(a5, "href", "#allevents");
        add_location(a5, file$g, 218, 16, 7732);
        if (img4.src !== (img4_src_value = "/icons/round/newsletters.svg")) attr_dev(img4, "src", img4_src_value);
        attr_dev(img4, "alt", "Newsletters");
        attr_dev(img4, "class", "svelte-oz1w6e");
        add_location(img4, file$g, 219, 63, 7957);
        attr_dev(span6, "class", "inner");
        add_location(span6, file$g, 219, 145, 8039);
        attr_dev(span7, "class", "linklabel");
        add_location(span7, file$g, 219, 121, 8015);
        set_style(a6, "color", "#1e7953");
        attr_dev(a6, "href", "#newsletters");
        add_location(a6, file$g, 219, 16, 7910);
        if (img5.src !== (img5_src_value = "/icons/round/staff.svg")) attr_dev(img5, "src", img5_src_value);
        attr_dev(img5, "alt", "Staff");
        attr_dev(img5, "class", "svelte-oz1w6e");
        add_location(img5, file$g, 220, 57, 8146);
        attr_dev(span8, "class", "inner");
        add_location(span8, file$g, 220, 127, 8216);
        attr_dev(span9, "class", "linklabel");
        add_location(span9, file$g, 220, 103, 8192);
        set_style(a7, "color", "#ad8559");
        attr_dev(a7, "href", "#staff");
        add_location(a7, file$g, 220, 16, 8105);
        if (img6.src !== (img6_src_value = "/icons/round/tithely.svg")) attr_dev(img6, "src", img6_src_value);
        attr_dev(img6, "alt", "Give online");
        attr_dev(img6, "class", "svelte-oz1w6e");
        add_location(img6, file$g, 221, 98, 8358);
        attr_dev(span10, "class", "inner");
        add_location(span10, file$g, 221, 176, 8436);
        attr_dev(span11, "class", "linklabel");
        add_location(span11, file$g, 221, 152, 8412);
        set_style(a8, "color", "#1e7953");
        attr_dev(a8, "target", "_blank");
        attr_dev(a8, "href", "https://tithe.ly/give?c=1478951");
        add_location(a8, file$g, 221, 16, 8276);
        if (img7.src !== (img7_src_value = "/icons/round/facebooklogo.svg")) attr_dev(img7, "src", img7_src_value);
        attr_dev(img7, "alt", "Facebook");
        attr_dev(img7, "class", "svelte-oz1w6e");
        add_location(img7, file$g, 222, 170, 8653);
        attr_dev(span12, "class", "inner");
        add_location(span12, file$g, 222, 250, 8733);
        attr_dev(span13, "class", "linklabel");
        add_location(span13, file$g, 222, 226, 8709);
        set_style(a9, "color", "#2D88FF");
        attr_dev(a9, "target", "_blank");
        attr_dev(a9, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        add_location(a9, file$g, 222, 16, 8499);
        attr_dev(div12, "class", "inner svelte-oz1w6e");
        add_location(div12, file$g, 216, 12, 7541);
        attr_dev(div13, "class", "quicklinks");
        add_location(div13, file$g, 215, 8, 7504);
        attr_dev(div14, "class", "infobox svelte-oz1w6e");
        add_location(div14, file$g, 200, 4, 6356);
        attr_dev(h20, "class", "svelte-oz1w6e");
        add_location(h20, file$g, 232, 20, 9175);
        add_location(h31, file$g, 237, 24, 9461);
        attr_dev(div15, "class", "current-events");
        add_location(div15, file$g, 233, 20, 9242);
        attr_dev(div16, "class", "box svelte-oz1w6e");
        add_location(div16, file$g, 231, 16, 9137);
        attr_dev(div17, "class", "inner svelte-oz1w6e");
        toggle_class(div17, "grid",
        /*latestVid*/
        ctx[5] && new Date(
        /*latestVid*/
        ctx[5].date).getDate() >= new Date().getDate() - 14);
        add_location(div17, file$g, 230, 12, 9011);
        attr_dev(div18, "class", "content svelte-oz1w6e");
        attr_dev(div18, "id", "current");
        add_location(div18, file$g, 229, 8, 8964);
        attr_dev(img8, "class", "bg svelte-oz1w6e");
        if (img8.src !== (img8_src_value = "/primary-images/church.jpg")) attr_dev(img8, "src", img8_src_value);
        attr_dev(img8, "alt", "");
        attr_dev(img8, "style", img8_style_value = "transform: translateY(-25%) translateY(" +
        /*eventsTop*/
        ctx[9] / 5 + "px);");
        add_location(img8, file$g, 288, 12, 13705);
        attr_dev(h21, "class", "svelte-oz1w6e");
        add_location(h21, file$g, 290, 16, 13907);
        add_location(ul, file$g, 291, 16, 13955);
        attr_dev(div19, "class", "inner svelte-oz1w6e");
        add_location(div19, file$g, 289, 12, 13871);
        attr_dev(div20, "class", "events svelte-oz1w6e");
        attr_dev(div20, "id", "events");
        add_location(div20, file$g, 287, 8, 13660);
        attr_dev(div21, "class", "copy svelte-oz1w6e");
        add_location(div21, file$g, 347, 12, 17348);
        attr_dev(div22, "class", "footer svelte-oz1w6e");
        add_location(div22, file$g, 346, 8, 17315);
        attr_dev(div23, "class", "frontpage-content svelte-oz1w6e");
        set_style(div23, "transform", "translateY(100vh)");
        set_style(div23, "top", "-" +
        /*navheight*/
        ctx[4] + "px");
        add_location(div23, file$g, 228, 4, 8865);
        attr_dev(div24, "class", "main");
        add_location(div24, file$g, 158, 0, 4417);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div24, anchor);
        mount_component(navigation, div24, null);
        append_dev(div24, t0);
        append_dev(div24, div7);
        append_dev(div7, div0);
        append_dev(div7, t1);
        append_dev(div7, div6);
        append_dev(div6, img0);
        append_dev(div6, t2);
        append_dev(div6, div5);
        append_dev(div5, div1);
        append_dev(div1, img1);
        append_dev(div1, t3);
        append_dev(div1, span1);
        append_dev(span1, h1);
        append_dev(h1, t4);
        append_dev(h1, span0);
        append_dev(div5, t6);
        append_dev(div5, div4);
        append_dev(div4, div2);
        append_dev(div4, t8);
        append_dev(div4, div3);
        append_dev(div3, a0);
        append_dev(div3, t10);
        append_dev(div3, a1);
        append_dev(div3, t12);
        append_dev(div3, a2);
        /*div6_binding*/

        ctx[22](div6);
        append_dev(div24, t14);
        append_dev(div24, div9);
        append_dev(div9, div8);
        append_dev(div24, t15);
        mount_component(slideshow, div24, null);
        append_dev(div24, t16);
        append_dev(div24, div14);
        append_dev(div14, div11);
        append_dev(div11, h30);
        append_dev(div11, t18);
        append_dev(div11, div10);
        append_dev(div10, t19);
        append_dev(div10, br);
        append_dev(div10, t20);
        append_dev(div10, a3);
        append_dev(div14, t22);
        append_dev(div14, div13);
        append_dev(div13, div12);
        append_dev(div12, a4);
        append_dev(a4, img2);
        append_dev(a4, span3);
        append_dev(span3, span2);
        append_dev(div12, t24);
        append_dev(div12, a5);
        append_dev(a5, img3);
        append_dev(a5, span5);
        append_dev(span5, span4);
        append_dev(div12, t26);
        append_dev(div12, a6);
        append_dev(a6, img4);
        append_dev(a6, span7);
        append_dev(span7, span6);
        append_dev(div12, t28);
        append_dev(div12, a7);
        append_dev(a7, img5);
        append_dev(a7, span9);
        append_dev(span9, span8);
        append_dev(div12, t30);
        append_dev(div12, a8);
        append_dev(a8, img6);
        append_dev(a8, span11);
        append_dev(span11, span10);
        append_dev(div12, t32);
        append_dev(div12, a9);
        append_dev(a9, img7);
        append_dev(a9, span13);
        append_dev(span13, span12);
        append_dev(div24, t34);
        append_dev(div24, div23);
        append_dev(div23, div18);
        append_dev(div18, div17);
        append_dev(div17, div16);
        append_dev(div16, h20);
        append_dev(div16, t36);
        append_dev(div16, div15);
        if (if_block0) if_block0.m(div15, null);
        append_dev(div15, t37);
        append_dev(div15, h31);
        append_dev(h31, t38);
        append_dev(div15, t39);
        if_block1.m(div15, null);
        append_dev(div17, t40);
        if (if_block2) if_block2.m(div17, null);
        append_dev(div23, t41);
        append_dev(div23, div20);
        append_dev(div20, img8);
        /*img8_binding*/

        ctx[23](img8);
        append_dev(div20, t42);
        append_dev(div20, div19);
        append_dev(div19, h21);
        append_dev(div19, t44);
        append_dev(div19, ul);
        info.block.m(ul, info.anchor = null);

        info.mount = function () {
          return ul;
        };

        info.anchor = null;
        append_dev(div23, t45);
        mount_component(lovebox, div23, null);
        append_dev(div23, t46);
        append_dev(div23, div22);
        append_dev(div22, div21);
        /*div24_binding*/

        ctx[28](div24);
        insert_dev(target, t50, anchor);
        if (if_block3) if_block3.m(target, anchor);
        insert_dev(target, t51, anchor);
        if (if_block4) if_block4.m(target, anchor);
        insert_dev(target, if_block4_anchor, anchor);
        current = true;
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        var navigation_changes = {};
        if (dirty[0] &
        /*scrollTop*/
        256) navigation_changes.scrollTop =
        /*scrollTop*/
        ctx[8];
        if (dirty[0] &
        /*subpageOpen*/
        16384) navigation_changes.subpageOpen =
        /*subpageOpen*/
        ctx[14];
        if (dirty[0] &
        /*main*/
        1) navigation_changes.main =
        /*main*/
        ctx[0];

        if (!updating_mobileOpen && dirty[0] &
        /*mobileOpen*/
        2048) {
          updating_mobileOpen = true;
          navigation_changes.mobileOpen =
          /*mobileOpen*/
          ctx[11];
          add_flush_callback(function () {
            return updating_mobileOpen = false;
          });
        }

        if (!updating_curPage && dirty[0] &
        /*curPage*/
        4096) {
          updating_curPage = true;
          navigation_changes.curPage =
          /*curPage*/
          ctx[12];
          add_flush_callback(function () {
            return updating_curPage = false;
          });
        }

        navigation.$set(navigation_changes);
        var slideshow_changes = {};
        if (dirty[0] &
        /*scrollTop*/
        256) slideshow_changes.scrollTop =
        /*scrollTop*/
        ctx[8];
        if (dirty[0] &
        /*subpageOpen*/
        16384) slideshow_changes.subpageOpen =
        /*subpageOpen*/
        ctx[14];
        if (dirty[0] &
        /*header*/
        2) slideshow_changes.header =
        /*header*/
        ctx[1];
        slideshow.$set(slideshow_changes);

        if (
        /*frontpage*/
        ctx[13] &&
        /*frontpage*/
        ctx[13].file) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_9(ctx);
            if_block0.c();
            if_block0.m(div15, t37);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if ((!current || dirty[0] &
        /*frontpage*/
        8192) && t38_value !== (t38_value = (
        /*frontpage*/
        ctx[13] ?
        /*frontpage*/
        ctx[13].header : "Spreading the Love of God") + "")) set_data_dev(t38, t38_value);

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1.d(1);
          if_block1 = current_block_type(ctx);

          if (if_block1) {
            if_block1.c();
            if_block1.m(div15, null);
          }
        }

        if (
        /*latestVid*/
        ctx[5]) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
          } else {
            if_block2 = create_if_block_5$1(ctx);
            if_block2.c();
            if_block2.m(div17, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }

        if (dirty[0] &
        /*latestVid*/
        32) {
          toggle_class(div17, "grid",
          /*latestVid*/
          ctx[5] && new Date(
          /*latestVid*/
          ctx[5].date).getDate() >= new Date().getDate() - 14);
        }

        if (!current || dirty[0] &
        /*eventsTop*/
        512 && img8_style_value !== (img8_style_value = "transform: translateY(-25%) translateY(" +
        /*eventsTop*/
        ctx[9] / 5 + "px);")) {
          attr_dev(img8, "style", img8_style_value);
        }

        {
          var child_ctx = ctx.slice();
          child_ctx[39] = info.resolved;
          info.block.p(child_ctx, dirty);
        }
        var lovebox_changes = {};
        if (dirty[0] &
        /*loveTop*/
        1024) lovebox_changes.loveTop =
        /*loveTop*/
        ctx[10];

        if (!updating_loveImage && dirty[0] &
        /*loveImage*/
        8) {
          updating_loveImage = true;
          lovebox_changes.loveImage =
          /*loveImage*/
          ctx[3];
          add_flush_callback(function () {
            return updating_loveImage = false;
          });
        }

        lovebox.$set(lovebox_changes);

        if (!current || dirty[0] &
        /*navheight*/
        16) {
          set_style(div23, "top", "-" +
          /*navheight*/
          ctx[4] + "px");
        }

        if (
        /*subpageOpen*/
        ctx[14]) {
          if (if_block3) {
            if_block3.p(ctx, dirty);

            if (dirty[0] &
            /*subpageOpen*/
            16384) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_1$6(ctx);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(t51.parentNode, t51);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, function () {
            if_block3 = null;
          });
          check_outros();
        }

        if (
        /*calendarModalOpen*/
        ctx[6] &&
        /*curEvent*/
        ctx[7]) {
          if (if_block4) {
            if_block4.p(ctx, dirty);

            if (dirty[0] &
            /*calendarModalOpen, curEvent*/
            192) {
              transition_in(if_block4, 1);
            }
          } else {
            if_block4 = create_if_block$a(ctx);
            if_block4.c();
            transition_in(if_block4, 1);
            if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
          }
        } else if (if_block4) {
          group_outros();
          transition_out(if_block4, 1, 1, function () {
            if_block4 = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(navigation.$$.fragment, local);
        transition_in(slideshow.$$.fragment, local);
        transition_in(lovebox.$$.fragment, local);
        transition_in(if_block3);
        transition_in(if_block4);
        current = true;
      },
      o: function outro(local) {
        transition_out(navigation.$$.fragment, local);
        transition_out(slideshow.$$.fragment, local);
        transition_out(lovebox.$$.fragment, local);
        transition_out(if_block3);
        transition_out(if_block4);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div24);
        destroy_component(navigation);
        /*div6_binding*/

        ctx[22](null);
        destroy_component(slideshow);
        if (if_block0) if_block0.d();
        if_block1.d();
        if (if_block2) if_block2.d();
        /*img8_binding*/

        ctx[23](null);
        info.block.d();
        info.token = null;
        info = null;
        destroy_component(lovebox);
        /*div24_binding*/

        ctx[28](null);
        if (detaching) detach_dev(t50);
        if (if_block3) if_block3.d(detaching);
        if (detaching) detach_dev(t51);
        if (if_block4) if_block4.d(detaching);
        if (detaching) detach_dev(if_block4_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$g.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function getPageData(loc) {
    return new Promise(function (resolve, reject) {
      fetch(loc).then(function (res) {
        return res.json();
      }).then(function (json) {
        return resolve(json);
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    });
  }

  function showAllEvents(events) {
    allEvents = events;
    allEventsModalOpen = true;
  }

  function instance$g($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("App", slots, []);
    var main;
    var header;
    var eventsImage;
    var loveImage;
    var infoboxImage;
    var angle;
    var navheight = 0;
    var latestVid; //Calendar modal data

    var calendarModalOpen = false;
    var curEvent; //Scroll positions

    var scrollTop = 0;
    var eventsTop = 0;
    var loveTop = 0; // let infoTop = 0

    var angleTop = 0;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var mobileOpen = false; //Hash routing

    var page = {
      "#": false,
      "": false,
      "#home": false,
      "#worship": Sermons,
      "#about": About,
      "#staff": Staff,
      "#links": Links,
      "#newsletters": Newsletters,
      "#allevents": AllEvents,
      "#singleevent": SingleEvent,
      "#article": Article,
      "#sermons": Sermons,
      "#ministries": Ministries
    };
    var curPage = "";
    var previousMonth;

    function changeEventMonth(event) {
      var skipSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var newMonth = new Date(event.date).getMonth();
      newMonth = months[newMonth];
      if (previousMonth && newMonth === previousMonth) return false;
      if (skipSet) return true;else {
        previousMonth = newMonth;
        return newMonth;
      }
    }

    function openCalendarModal(event) {
      $$invalidate(7, curEvent = event);
      $$invalidate(6, calendarModalOpen = true);
    }

    window.onhashchange = function () {
      if (Object.keys(page).includes(window.location.hash.split("/")[0])) {
        $$invalidate(12, curPage = window.location.hash.split("/")[0]);
        $$invalidate(11, mobileOpen = false);
      } else {
        setTimeout(function () {
          window.location.hash = curPage;
        }, 1000);
      }
    };

    var frontpage = null;

    function get_frontpage() {
      fetch("data/frontpage.json").then(function (res) {
        return res.json();
      }).then(function (data) {
        return $$invalidate(13, frontpage = data);
      }).catch(function (e) {
        console.error(e);
        $$invalidate(13, frontpage = null);
      });
    }

    onMount(function () {
      if (Object.keys(page).includes(window.location.hash.split("/")[0])) $$invalidate(12, curPage = window.location.hash.split("/")[0]);else window.location.hash = curPage;
      main.addEventListener("scroll", function (e) {
        $$invalidate(8, scrollTop = e.target.scrollTop);
        $$invalidate(9, eventsTop = eventsImage.getBoundingClientRect().top);
        $$invalidate(10, loveTop = loveImage.getBoundingClientRect().top);
      }); // infoTop = infoboxImage.getBoundingClientRect().top

      $$invalidate(4, navheight = document.querySelector("nav").offsetHeight);
      fetch("data/php/getSermons.php?start=0&end=1&direction=desc").then(function (data) {
        return data.json();
      }).then(function (video) {
        $$invalidate(5, latestVid = JSON.parse(video.results[0]));
        console.log(latestVid);
      }).catch(function (e) {
        console.log(e);
      });
      get_frontpage();
    });
    var writable_props = [];
    Object_1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$2.warn("<App> was created with unknown prop '".concat(key, "'"));
    });

    var func = function func(a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };

    var func_1 = function func_1(event) {
      return new Date(event.date).getTime() > Date.now();
    };

    function navigation_mobileOpen_binding(value) {
      mobileOpen = value;
      $$invalidate(11, mobileOpen);
    }

    function navigation_curPage_binding(value) {
      curPage = value;
      $$invalidate(12, curPage);
    }

    function div6_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        header = $$value;
        $$invalidate(1, header);
      });
    }

    function img8_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        eventsImage = $$value;
        $$invalidate(2, eventsImage);
      });
    }

    var func_2 = function func_2(a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };

    var func_3 = function func_3(event) {
      return new Date(event.date).getTime() > Date.now();
    };

    var click_handler = function click_handler(event) {
      openCalendarModal(event);
    };

    function lovebox_loveImage_binding(value) {
      loveImage = value;
      $$invalidate(3, loveImage);
    }

    function div24_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        main = $$value;
        $$invalidate(0, main);
      });
    }

    var click_handler_1 = function click_handler_1() {
      return window.history.back();
    };

    function navigation_mobileOpen_binding_1(value) {
      mobileOpen = value;
      $$invalidate(11, mobileOpen);
    }

    function navigation_curPage_binding_1(value) {
      curPage = value;
      $$invalidate(12, curPage);
    }

    function calendarmodal_calendarModalOpen_binding(value) {
      calendarModalOpen = value;
      $$invalidate(6, calendarModalOpen);
    }

    $$self.$capture_state = function () {
      return {
        fly: fly,
        fade: fade,
        scale: scale,
        onMount: onMount,
        Navigation: Navigation,
        Slideshow: Slideshow,
        LeftAngle: LeftAngle,
        LoveBox: LoveBox,
        CalendarModal: CalendarModal,
        Worship: Sermons,
        Ministries: Ministries,
        About: About,
        Staff: Staff,
        Links: Links,
        Sermons: Sermons,
        Newsletters: Newsletters,
        AllEvents: AllEvents,
        SingleEvent: SingleEvent,
        Article: Article,
        Starwords: Starwords,
        main: main,
        header: header,
        eventsImage: eventsImage,
        loveImage: loveImage,
        infoboxImage: infoboxImage,
        angle: angle,
        navheight: navheight,
        latestVid: latestVid,
        calendarModalOpen: calendarModalOpen,
        curEvent: curEvent,
        scrollTop: scrollTop,
        eventsTop: eventsTop,
        loveTop: loveTop,
        angleTop: angleTop,
        months: months,
        mobileOpen: mobileOpen,
        page: page,
        curPage: curPage,
        getPageData: getPageData,
        previousMonth: previousMonth,
        changeEventMonth: changeEventMonth,
        showAllEvents: showAllEvents,
        openCalendarModal: openCalendarModal,
        frontpage: frontpage,
        get_frontpage: get_frontpage,
        subpageOpen: subpageOpen
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("main" in $$props) $$invalidate(0, main = $$props.main);
      if ("header" in $$props) $$invalidate(1, header = $$props.header);
      if ("eventsImage" in $$props) $$invalidate(2, eventsImage = $$props.eventsImage);
      if ("loveImage" in $$props) $$invalidate(3, loveImage = $$props.loveImage);
      if ("infoboxImage" in $$props) infoboxImage = $$props.infoboxImage;
      if ("angle" in $$props) angle = $$props.angle;
      if ("navheight" in $$props) $$invalidate(4, navheight = $$props.navheight);
      if ("latestVid" in $$props) $$invalidate(5, latestVid = $$props.latestVid);
      if ("calendarModalOpen" in $$props) $$invalidate(6, calendarModalOpen = $$props.calendarModalOpen);
      if ("curEvent" in $$props) $$invalidate(7, curEvent = $$props.curEvent);
      if ("scrollTop" in $$props) $$invalidate(8, scrollTop = $$props.scrollTop);
      if ("eventsTop" in $$props) $$invalidate(9, eventsTop = $$props.eventsTop);
      if ("loveTop" in $$props) $$invalidate(10, loveTop = $$props.loveTop);
      if ("angleTop" in $$props) angleTop = $$props.angleTop;
      if ("months" in $$props) months = $$props.months;
      if ("mobileOpen" in $$props) $$invalidate(11, mobileOpen = $$props.mobileOpen);
      if ("page" in $$props) $$invalidate(15, page = $$props.page);
      if ("curPage" in $$props) $$invalidate(12, curPage = $$props.curPage);
      if ("previousMonth" in $$props) previousMonth = $$props.previousMonth;
      if ("frontpage" in $$props) $$invalidate(13, frontpage = $$props.frontpage);
      if ("subpageOpen" in $$props) $$invalidate(14, subpageOpen = $$props.subpageOpen);
    };

    var subpageOpen;

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty[0] &
      /*curPage*/
      4096) {
         $$invalidate(14, subpageOpen = curPage && curPage != "#home" ? true : false);
      }
    };

    return [main, header, eventsImage, loveImage, navheight, latestVid, calendarModalOpen, curEvent, scrollTop, eventsTop, loveTop, mobileOpen, curPage, frontpage, subpageOpen, page, changeEventMonth, openCalendarModal, func, func_1, navigation_mobileOpen_binding, navigation_curPage_binding, div6_binding, img8_binding, func_2, func_3, click_handler, lovebox_loveImage_binding, div24_binding, click_handler_1, navigation_mobileOpen_binding_1, navigation_curPage_binding_1, calendarmodal_calendarModalOpen_binding];
  }

  var App = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(App, _SvelteComponentDev);

    var _super = _createSuper(App);

    function App(options) {
      var _this;

      _classCallCheck(this, App);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$g, create_fragment$g, safe_not_equal, {}, [-1, -1]);
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "App",
        options: options,
        id: create_fragment$g.name
      });
      return _this;
    }

    return App;
  }(SvelteComponentDev);

  var app = new App({
    target: document.body
  });

  return app;

}());
//# sourceMappingURL=bundle.js.map
