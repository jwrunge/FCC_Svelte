
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
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

  var stylesheet;
  var active = 0;
  var current_rules = {}; // https://github.com/darkskyapp/string-hash/blob/master/index.js

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

    if (!current_rules[name]) {
      if (!stylesheet) {
        var style = element('style');
        document.head.appendChild(style);
        stylesheet = style.sheet;
      }

      current_rules[name] = true;
      stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
    }

    var animation = node.style.animation || '';
    node.style.animation = "".concat(animation ? "".concat(animation, ", ") : "").concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
    active += 1;
    return name;
  }

  function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '').split(', ').filter(name ? function (anim) {
      return anim.indexOf(name) < 0;
    } // remove specific animation
    : function (anim) {
      return anim.indexOf('__svelte') === -1;
    } // remove all Svelte animations
    ).join(', ');
    if (name && ! --active) clear_rules();
  }

  function clear_rules() {
    raf(function () {
      if (active) return;
      var i = stylesheet.cssRules.length;

      while (i--) {
        stylesheet.deleteRule(i);
      }

      current_rules = {};
    });
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
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

      if (running_program) {
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

  var globals = typeof window !== 'undefined' ? window : global;

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
      dirty: dirty
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if ($$.bound[i]) $$.bound[i](value);
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.l(children(options.target));
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
      value: function $set() {// overridden by instance, if it has props
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.19.2'
    }, detail)));
  }

  function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev("SvelteDOMRemoveEventListener", {
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
    if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
      node: node,
      attribute: attribute
    });else dispatch_dev("SvelteDOMSetAttribute", {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data) return;
    dispatch_dev("SvelteDOMSetData", {
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

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _possibleConstructorReturn(this, _getPrototypeOf(SvelteComponentDev).call(this));
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn("Component was already destroyed"); // eslint-disable-line no-console
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
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "☰";
        attr_dev(div, "class", "mobile-menu-open svelte-1jk9doh");
        add_location(div, file, 41, 8, 1506);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        dispose = listen_dev(div, "click",
        /*click_handler_1*/
        ctx[9], false, false, false);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
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
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "✖";
        attr_dev(div, "class", "mobile-menu-close svelte-1jk9doh");
        add_location(div, file, 39, 8, 1402);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        dispose = listen_dev(div, "click",
        /*click_handler*/
        ctx[8], false, false, false);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
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
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "☰";
        attr_dev(div, "class", "forceOpen svelte-1jk9doh");
        toggle_class(div, "onTop",
        /*scrollTop*/
        ctx[2] > 500);
        add_location(div, file, 46, 4, 1663);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        current = true;
        dispose = listen_dev(div, "click",
        /*click_handler_2*/
        ctx[10], false, false, false);
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
        a3.textContent = "Newsletters";
        t7 = space();
        a4 = element("a");
        a4.textContent = "Resources";
        t9 = space();
        if_block0.c();
        t10 = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
        attr_dev(a0, "href", "#home");
        attr_dev(a0, "class", "svelte-1jk9doh");
        toggle_class(a0, "inactive", !
        /*curPage*/
        ctx[4] ||
        /*curPage*/
        ctx[4] == "#home");
        add_location(a0, file, 32, 8, 962);
        attr_dev(a1, "href", "#about");
        attr_dev(a1, "class", "svelte-1jk9doh");
        toggle_class(a1, "inactive",
        /*curPage*/
        ctx[4] == "#about");
        add_location(a1, file, 33, 8, 1044);
        attr_dev(a2, "href", "#worship");
        attr_dev(a2, "class", "svelte-1jk9doh");
        toggle_class(a2, "inactive",
        /*curPage*/
        ctx[4] == "#worship");
        add_location(a2, file, 34, 8, 1120);
        attr_dev(a3, "href", "#newsletters");
        attr_dev(a3, "class", "svelte-1jk9doh");
        toggle_class(a3, "inactive",
        /*curPage*/
        ctx[4] == "#newsletters");
        add_location(a3, file, 35, 8, 1199);
        attr_dev(a4, "href", "#links");
        attr_dev(a4, "class", "svelte-1jk9doh");
        toggle_class(a4, "inactive",
        /*curPage*/
        ctx[4] == "#links");
        add_location(a4, file, 36, 8, 1290);
        attr_dev(span, "class", "nav-links svelte-1jk9doh");
        toggle_class(span, "shown",
        /*mobileOpen*/
        ctx[0]);
        add_location(span, file, 31, 4, 903);
        attr_dev(nav, "class", "svelte-1jk9doh");
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
          ctx[4] == "#newsletters");
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
            transition_in(if_block1, 1);
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
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Navigation", $$slots, []);

    var click_handler = function click_handler() {
      $$invalidate(0, mobileOpen = false);
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(0, mobileOpen = true);
    };

    var click_handler_2 = function click_handler_2() {
      $$invalidate(5, forceOpen = true);
    };

    $$self.$set = function ($$props) {
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

    return [mobileOpen, subpageStyle, scrollTop, subpageOpen, curPage, forceOpen, main, scrollListener, click_handler, click_handler_1, click_handler_2];
  }

  var Navigation = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Navigation, _SvelteComponentDev);

    function Navigation(options) {
      var _this;

      _classCallCheck(this, Navigation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this, options));
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
  } // (101:4) {:then images}


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
            transition_in(if_block0, 1);
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
            transition_in(if_block1, 1);
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
      source: "(101:4) {:then images}",
      ctx: ctx
    });
    return block;
  } // (102:8) {#if showImg}


  function create_if_block_2(ctx) {
    var img;
    var img_src_value;
    var img_transition;
    var t;
    var if_block_anchor;
    var current;
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
        img = element("img");
        t = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr_dev(img, "class", "slideshow svelte-j081t2");
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
        add_location(img, file$1, 102, 12, 2832);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
        insert_dev(target, t, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
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
            transition_in(if_block, 1);
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
        if (detaching) detach_dev(img);
        if (detaching && img_transition) img_transition.end();
        if (detaching) detach_dev(t);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2.name,
      type: "if",
      source: "(102:8) {#if showImg}",
      ctx: ctx
    });
    return block;
  } // (108:12) {#if images[currentImg].caption && showCaptions}


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
        attr_dev(div, "class", "caption svelte-j081t2");
        add_location(div, file$1, 108, 16, 3244);
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
      source: "(108:12) {#if images[currentImg].caption && showCaptions}",
      ctx: ctx
    });
    return block;
  } // (116:20) {:else}


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
        attr_dev(a, "class", "svelte-j081t2");
        add_location(a, file$1, 116, 24, 3719);
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
      source: "(116:20) {:else}",
      ctx: ctx
    });
    return block;
  } // (110:20) {#if window.innerWidth >= 500}


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
        attr_dev(h2, "class", "svelte-j081t2");
        add_location(h2, file$1, 110, 24, 3359);
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
      source: "(110:20) {#if window.innerWidth >= 500}",
      ctx: ctx
    });
    return block;
  } // (113:24) {#if images[currentImg].linkto && images[currentImg].linktext}


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
        attr_dev(a, "class", "svelte-j081t2");
        add_location(a, file$1, 113, 28, 3568);
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
      source: "(113:24) {#if images[currentImg].linkto && images[currentImg].linktext}",
      ctx: ctx
    });
    return block;
  } // (122:8) {#if showCaptions}


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
        attr_dev(img0, "class", "svelte-j081t2");
        add_location(img0, file$1, 123, 16, 3966);
        if (img1.src !== (img1_src_value = "/icons/next.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Next slide");
        attr_dev(img1, "class", "svelte-j081t2");
        add_location(img1, file$1, 129, 16, 4381);
        attr_dev(div0, "class", "timer-fill svelte-j081t2");
        set_style(div0, "max-width",
        /*timeLeft*/
        ctx[6] * 100 /
        /*slideShowTime*/
        ctx[10] + "%");
        add_location(div0, file$1, 131, 20, 4541);
        attr_dev(div1, "class", "timer-container svelte-j081t2");
        add_location(div1, file$1, 130, 16, 4490);
        attr_dev(div2, "class", "controls svelte-j081t2");
        add_location(div2, file$1, 122, 12, 3910);
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
        dispose = [listen_dev(img0, "click",
        /*click_handler*/
        ctx[20], false, false, false), listen_dev(img1, "click",
        /*click_handler_2*/
        ctx[22], false, false, false)];
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
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(122:8) {#if showCaptions}",
      ctx: ctx
    });
    return block;
  } // (127:16) {:else}


  function create_else_block$1(ctx) {
    var img;
    var img_src_value;
    var dispose;
    var block = {
      c: function create() {
        img = element("img");
        if (img.src !== (img_src_value = "/icons/pause.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Pause slideshow");
        attr_dev(img, "class", "svelte-j081t2");
        add_location(img, file$1, 127, 20, 4245);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
        dispose = listen_dev(img, "click",
        /*click_handler_1*/
        ctx[21], false, false, false);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$1.name,
      type: "else",
      source: "(127:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (125:16) {#if paused}


  function create_if_block_1$1(ctx) {
    var img;
    var img_src_value;
    var dispose;
    var block = {
      c: function create() {
        img = element("img");
        if (img.src !== (img_src_value = "/icons/play.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Play slideshow");
        attr_dev(img, "class", "svelte-j081t2");
        add_location(img, file$1, 125, 20, 4128);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
        dispose = listen_dev(img, "click",
        /*startTimer*/
        ctx[14], false, false, false);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(125:16) {#if paused}",
      ctx: ctx
    });
    return block;
  } // (97:46)           <div class='loader'>              <img src='/icons/loading.svg' alt='loading content'>          </div>      {:then images}


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
        add_location(img, file$1, 98, 12, 2707);
        attr_dev(div, "class", "loader");
        add_location(div, file$1, 97, 8, 2673);
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
      source: "(97:46)           <div class='loader'>              <img src='/icons/loading.svg' alt='loading content'>          </div>      {:then images}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$1(ctx) {
    var div;
    var promise;
    var div_style_value;
    var current;
    var dispose;
    add_render_callback(
    /*onwindowresize*/
    ctx[19]);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
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
        attr_dev(div, "class", "slideshow-wrapper svelte-j081t2");
        attr_dev(div, "style", div_style_value =
        /*winWidth*/
        ctx[7] < 1000 ? "transform: translateY(" + (
        /*header*/
        ctx[1].clientHeight - 50) + "px); height: " + (
        /*winHeight*/
        ctx[8] -
        /*header*/
        ctx[1].clientHeight + 50) + "px;" : "");
        add_location(div, file$1, 95, 0, 2432);
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
        dispose = listen_dev(window_1, "resize",
        /*onwindowresize*/
        ctx[19]);
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var image = _step.value;
          var img = new Image();
          img.src = image.src;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      resolve(images);
    });
  }

  function instance$1($$self, $$props, $$invalidate) {
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
      $$invalidate(3, showImg = true);
      $$invalidate(6, timeLeft = slideShowTime);
      startTimer();
      if (currentImg == images.length - 1) $$invalidate(9, currentImg = 0);else $$invalidate(9, currentImg += 1);
    }

    function prevImg(images) {
      $$invalidate(3, showImg = true);
      $$invalidate(6, timeLeft = slideShowTime);
      startTimer();
      $$invalidate(4, goBack = false);
      if (currentImg == 0) $$invalidate(9, currentImg = images.length - 1);else $$invalidate(9, currentImg -= 1);
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
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Slideshow", $$slots, []);

    function onwindowresize() {
      $$invalidate(7, winWidth = window_1.innerWidth);
      $$invalidate(8, winHeight = window_1.innerHeight);
    }

    var click_handler = function click_handler() {
      clearTimer();
      $$invalidate(4, goBack = true);
      $$invalidate(3, showImg = false);
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(5, paused = true);
      clearTimer();
    };

    var click_handler_2 = function click_handler_2() {
      clearTimer();
      $$invalidate(3, showImg = false);
    };

    $$self.$set = function ($$props) {
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

    return [scrollTop, header, showCaptions, showImg, goBack, paused, timeLeft, winWidth, winHeight, currentImg, slideShowTime, getImages, nextImg, prevImg, startTimer, clearTimer, subpageOpen, getPageData, interval, onwindowresize, click_handler, click_handler_1, click_handler_2];
  }

  var Slideshow = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Slideshow, _SvelteComponentDev);

    function Slideshow(options) {
      var _this;

      _classCallCheck(this, Slideshow);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Slideshow).call(this, options));
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
        add_location(feFlood, file$2, 25, 8, 887);
        attr_dev(feComposite0, "in", "flood");
        attr_dev(feComposite0, "in2", "SourceGraphic");
        attr_dev(feComposite0, "operator", "in");
        attr_dev(feComposite0, "result", "composite1");
        add_location(feComposite0, file$2, 29, 8, 1012);
        attr_dev(feGaussianBlur, "in", "composite1");
        attr_dev(feGaussianBlur, "stdDeviation", "2");
        attr_dev(feGaussianBlur, "result", "blur");
        add_location(feGaussianBlur, file$2, 34, 8, 1153);
        attr_dev(feOffset, "dx", "1.1");
        attr_dev(feOffset, "dy", "0");
        attr_dev(feOffset, "result", "offset");
        add_location(feOffset, file$2, 38, 8, 1266);
        attr_dev(feComposite1, "in", "SourceGraphic");
        attr_dev(feComposite1, "in2", "offset");
        attr_dev(feComposite1, "operator", "over");
        attr_dev(feComposite1, "result", "composite2");
        add_location(feComposite1, file$2, 42, 8, 1358);
        set_style(filter, "color-interpolation-filters", "sRGB");
        attr_dev(filter, "id", "filter1024");
        attr_dev(filter, "x", "0");
        attr_dev(filter, "y", "0");
        add_location(filter, file$2, 20, 8, 764);
        attr_dev(path0, "id", "redline");
        attr_dev(path0, "d", "M 5,58.099995 H 109.01905 L -6.4439273,524.58749 1.8250001,243.55417 Z");
        attr_dev(path0, "class", "svelte-2rku1c");
        add_location(path0, file$2, 54, 12, 1719);
        set_style(g0, "filter", "url(#filter1024)");
        attr_dev(g0, "transform", "translate(6.1699857,-262.90504)");
        add_location(g0, file$2, 51, 8, 1600);
        attr_dev(path1, "d", "M -10.57445,-213.74498 119.34262,-227.96372 61.846874,4.3010952 -6.7418857,26.00338 Z");
        set_style(path1, "opacity", "1");
        set_style(path1, "fill", "#ffffff");
        set_style(path1, "fill-opacity", "1");
        set_style(path1, "stroke", "none");
        set_style(path1, "stroke-width", "0.26499999");
        set_style(path1, "stroke-miterlimit", "4");
        set_style(path1, "stroke-dasharray", "none");
        set_style(path1, "stroke-opacity", "1");
        add_location(path1, file$2, 57, 8, 1852);
        attr_dev(path2, "d", "M -9.5454621,-98.524419 -5.0553341,36.340029 0.12229573,255.81567 62.194998,3.0223225 Z");
        set_style(path2, "opacity", "1");
        set_style(path2, "fill", "#d1bca6");
        set_style(path2, "fill-opacity", "1");
        set_style(path2, "stroke", "none");
        set_style(path2, "stroke-width", "0.26499999");
        set_style(path2, "stroke-miterlimit", "4");
        set_style(path2, "stroke-dasharray", "none");
        set_style(path2, "stroke-opacity", "1");
        add_location(path2, file$2, 60, 8, 2124);
        attr_dev(g1, "transform", "translate(0,203)");
        set_style(g1, "display", "inline");
        add_location(g1, file$2, 48, 4, 1517);
        attr_dev(svg, "id", "decorative-angle-left");
        attr_dev(svg, "version", "1.1");
        attr_dev(svg, "viewBox", "0 0 119 500");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "xmlns:cc", "http://creativecommons.org/ns#");
        attr_dev(svg, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
        attr_dev(svg, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        attr_dev(svg, "preserveAspectRatio", "none");
        attr_dev(svg, "class", "svelte-2rku1c");
        add_location(svg, file$2, 16, 0, 464);
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
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<LeftAngle> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("LeftAngle", $$slots, []);
    return [];
  }

  var LeftAngle = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(LeftAngle, _SvelteComponentDev);

    function LeftAngle(options) {
      var _this;

      _classCallCheck(this, LeftAngle);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftAngle).call(this, options));
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
        attr_dev(p, "class", "svelte-1nw8n21");
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
            transition_in(if_block, 1);
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
    var dispose;

    function outroend_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*outroend_handler*/
        (_ctx = ctx)[9].apply(_ctx, [
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
        attr_dev(p, "class", "svelte-1nw8n21");
        add_location(p, file$3, 52, 20, 1765);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t0);
        append_dev(p, t1);
        append_dev(p, t2);
        current = true;
        dispose = listen_dev(p, "outroend", outroend_handler, false, false, false);
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
        attr_dev(img, "class", "bg svelte-1nw8n21");
        if (img.src !== (img_src_value = "/primary-images/hearts.png")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        attr_dev(img, "style", img_style_value = "transform: translateY(-15%) translateY(" +
        /*loveTop*/
        ctx[1] / 5 + "px);");
        add_location(img, file$3, 40, 4, 1109);
        attr_dev(h2, "class", "svelte-1nw8n21");
        add_location(h2, file$3, 43, 8, 1295);
        attr_dev(p, "class", "svelte-1nw8n21");
        add_location(p, file$3, 44, 8, 1333);
        attr_dev(div0, "class", "phrases svelte-1nw8n21");
        add_location(div0, file$3, 45, 8, 1464);
        attr_dev(div1, "class", "inner svelte-1nw8n21");
        add_location(div1, file$3, 42, 4, 1266);
        attr_dev(div2, "class", "love-box svelte-1nw8n21");
        add_location(div2, file$3, 39, 0, 1081);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, img);
        /*img_binding*/

        ctx[8](img);
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

        ctx[8](null);
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
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("LoveBox", $$slots, []);

    function img_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(0, loveImage = $$value);
      });
    }

    var outroend_handler = function outroend_handler(phrases) {
      nextPhrase(phrases);
    };

    $$self.$set = function ($$props) {
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

    return [loveImage, loveTop, currentPhrase, showPhrase, nextPhrase, getPhrases, getPageData, interval, img_binding, outroend_handler];
  }

  var LoveBox = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(LoveBox, _SvelteComponentDev);

    function LoveBox(options) {
      var _this;

      _classCallCheck(this, LoveBox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LoveBox).call(this, options));
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
        t14 = text(" if you are using a calendar installed on your computer or mobile device—you will need to open the downloaded calendar file. Choose either ");
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
        attr_dev(img0, "class", "svelte-875f7y");
        add_location(img0, file$4, 69, 16, 3276);
        attr_dev(a0, "download", a0_download_value =
        /*curEvent*/
        ctx[1].name.replace(/[\\ \/:\*\?\"<>\|]/g, "") + ".ics");
        attr_dev(a0, "class", "device-calendar svelte-875f7y");
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href",
        /*icsFile*/
        ctx[4]);
        add_location(a0, file$4, 68, 12, 3086);
        if (img1.src !== (img1_src_value = "/icons/google.png")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Google calendar logo");
        attr_dev(img1, "class", "svelte-875f7y");
        add_location(img1, file$4, 73, 16, 3507);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href",
        /*googleCalendarLink*/
        ctx[2]);
        attr_dev(a1, "class", "svelte-875f7y");
        add_location(a1, file$4, 72, 12, 3399);
        if (img2.src !== (img2_src_value = "/icons/yahoo.jpg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "Yahoo calendar logo");
        attr_dev(img2, "class", "svelte-875f7y");
        add_location(img2, file$4, 77, 16, 3735);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href",
        /*yahooCalendarLink*/
        ctx[3]);
        attr_dev(a2, "class", "svelte-875f7y");
        add_location(a2, file$4, 76, 12, 3628);
        attr_dev(div1, "class", "calendar-options svelte-875f7y");
        add_location(div1, file$4, 67, 8, 3042);
        add_location(strong0, file$4, 82, 32, 3979);
        add_location(strong1, file$4, 82, 209, 4156);
        add_location(strong2, file$4, 82, 236, 4183);
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
        dispose = [listen_dev(div0, "click",
        /*click_handler*/
        ctx[5], false, false, false), listen_dev(a0, "click",
        /*click_handler_1*/
        ctx[6], false, false, false), listen_dev(a1, "click",
        /*click_handler_2*/
        ctx[7], false, false, false), listen_dev(a2, "click",
        /*click_handler_3*/
        ctx[8], false, false, false)];
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
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("CalendarModal", $$slots, []);

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

    $$self.$set = function ($$props) {
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

    function CalendarModal(options) {
      var _this;

      _classCallCheck(this, CalendarModal);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarModal).call(this, options));
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

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    return child_ctx;
  } // (43:12) {:else}


  function create_else_block_1$1(ctx) {
    var await_block_anchor;
    var promise;
    var current;
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block_1,
      then: create_then_block_1,
      catch: create_catch_block_1,
      value: 9,
      blocks: [,,,]
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/sermons.json"), info);
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
        dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/sermons.json")) && handle_promise(promise, info);
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
      id: create_else_block_1$1.name,
      type: "else",
      source: "(43:12) {:else}",
      ctx: ctx
    });
    return block;
  } // (19:12) {#if show == 'videos'}


  function create_if_block$3(ctx) {
    var await_block_anchor;
    var promise;
    var current;
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block$2,
      then: create_then_block$2,
      catch: create_catch_block$2,
      value: 9,
      blocks: [,,,]
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/sermons.json"), info);
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
        ctx[0]("/data/sermons.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[9] = info.resolved;
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
          var _block2 = info.blocks[i];
          transition_out(_block2);
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
      id: create_if_block$3.name,
      type: "if",
      source: "(19:12) {#if show == 'videos'}",
      ctx: ctx
    });
    return block;
  } // (1:0) <script>      import {flyModified}


  function create_catch_block_1(ctx) {
    var block = {
      c: noop,
      m: noop,
      i: noop,
      o: noop,
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
  } // (48:16) {:then embeds}


  function create_then_block_1(ctx) {
    var div;
    var p;
    var strong;
    var div_intro;
    var div_outro;
    var current;
    var block = {
      c: function create() {
        div = element("div");
        p = element("p");
        strong = element("strong");
        strong.textContent = "Manuscripts coming soon!";
        add_location(strong, file$5, 49, 27, 2528);
        add_location(p, file$5, 49, 24, 2525);
        attr_dev(div, "class", "manuscript-list");
        add_location(div, file$5, 48, 20, 2438);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, p);
        append_dev(p, strong);
        current = true;
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
        if (detaching && div_outro) div_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block_1.name,
      type: "then",
      source: "(48:16) {:then embeds}",
      ctx: ctx
    });
    return block;
  } // (44:58)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then embeds}


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
        add_location(img, file$5, 45, 24, 2304);
        attr_dev(div, "class", "loader");
        add_location(div, file$5, 44, 20, 2258);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_pending_block_1.name,
      type: "pending",
      source: "(44:58)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then embeds}",
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
  } // (24:16) {:then embeds}


  function create_then_block$2(ctx) {
    var div1;
    var t;
    var div0;
    var div1_intro;
    var div1_outro;
    var current;
    var each_value =
    /*embeds*/
    ctx[9].sort(
    /*func*/
    ctx[7]).slice(0,
    /*results*/
    ctx[1]);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    function select_block_type_1(ctx, dirty) {
      if (
      /*results*/
      ctx[1] <
      /*embeds*/
      ctx[9].length) return create_if_block_1$2;
      return create_else_block$2;
    }

    var current_block_type = select_block_type_1(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        div1 = element("div");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        t = space();
        div0 = element("div");
        if_block.c();
        attr_dev(div0, "class", "centered");
        add_location(div0, file$5, 33, 24, 1754);
        attr_dev(div1, "class", "video-list");
        add_location(div1, file$5, 24, 20, 993);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div1, null);
        }

        append_dev(div1, t);
        append_dev(div1, div0);
        if_block.m(div0, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, Date, results*/
        3) {
          each_value =
          /*embeds*/
          ctx[9].sort(
          /*func*/
          ctx[7]).slice(0,
          /*results*/
          ctx[1]);
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(div1, t);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }

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
      id: create_then_block$2.name,
      type: "then",
      source: "(24:16) {:then embeds}",
      ctx: ctx
    });
    return block;
  } // (26:24) {#each embeds.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf()).slice(0, results) as embed}


  function create_each_block(ctx) {
    var div1;
    var h3;
    var t0_value =
    /*embed*/
    ctx[10].title + "";
    var t0;
    var t1;
    var div0;
    var iframe;
    var iframe_title_value;
    var iframe_src_value;
    var block = {
      c: function create() {
        div1 = element("div");
        h3 = element("h3");
        t0 = text(t0_value);
        t1 = space();
        div0 = element("div");
        iframe = element("iframe");
        add_location(h3, file$5, 27, 32, 1279);
        attr_dev(iframe, "title", iframe_title_value =
        /*embed*/
        ctx[10].title);
        if (iframe.src !== (iframe_src_value =
        /*embed*/
        ctx[10].src)) attr_dev(iframe, "src", iframe_src_value);
        attr_dev(iframe, "width", "560");
        attr_dev(iframe, "height", "487");
        set_style(iframe, "border", "none");
        set_style(iframe, "overflow", "hidden");
        attr_dev(iframe, "scrolling", "no");
        attr_dev(iframe, "frameborder", "0");
        attr_dev(iframe, "allowtransparency", "true");
        attr_dev(iframe, "allow", "encrypted-media");
        iframe.allowFullscreen = "true";
        add_location(iframe, file$5, 29, 36, 1402);
        attr_dev(div0, "class", "embed-container");
        add_location(div0, file$5, 28, 32, 1335);
        attr_dev(div1, "class", "video-container svelte-1x76hxb");
        add_location(div1, file$5, 26, 28, 1216);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, h3);
        append_dev(h3, t0);
        append_dev(div1, t1);
        append_dev(div1, div0);
        append_dev(div0, iframe);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, results*/
        3 && t0_value !== (t0_value =
        /*embed*/
        ctx[10].title + "")) set_data_dev(t0, t0_value);

        if (dirty &
        /*getPageData, results*/
        3 && iframe_title_value !== (iframe_title_value =
        /*embed*/
        ctx[10].title)) {
          attr_dev(iframe, "title", iframe_title_value);
        }

        if (dirty &
        /*getPageData, results*/
        3 && iframe.src !== (iframe_src_value =
        /*embed*/
        ctx[10].src)) {
          attr_dev(iframe, "src", iframe_src_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(26:24) {#each embeds.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf()).slice(0, results) as embed}",
      ctx: ctx
    });
    return block;
  } // (37:28) {:else}


  function create_else_block$2(ctx) {
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
      id: create_else_block$2.name,
      type: "else",
      source: "(37:28) {:else}",
      ctx: ctx
    });
    return block;
  } // (35:28) {#if results < embeds.length}


  function create_if_block_1$2(ctx) {
    var a;
    var dispose;
    var block = {
      c: function create() {
        a = element("a");
        a.textContent = "More videos";
        attr_dev(a, "href", "#moreVids");
        add_location(a, file$5, 35, 32, 1869);
      },
      m: function mount(target, anchor) {
        insert_dev(target, a, anchor);
        dispose = listen_dev(a, "click", prevent_default(
        /*click_handler_2*/
        ctx[8]), false, true, false);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$2.name,
      type: "if",
      source: "(35:28) {#if results < embeds.length}",
      ctx: ctx
    });
    return block;
  } // (20:58)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then embeds}


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
        add_location(img, file$5, 21, 24, 859);
        attr_dev(div, "class", "loader");
        add_location(div, file$5, 20, 20, 813);
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
      source: "(20:58)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then embeds}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$5(ctx) {
    var div3;
    var t0;
    var div2;
    var div1;
    var h1;
    var t2;
    var div0;
    var button0;
    var t4;
    var button1;
    var t6;
    var current_block_type_index;
    var if_block;
    var div2_intro;
    var div2_outro;
    var current;
    var dispose;
    var default_slot_template =
    /*$$slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);
    var if_block_creators = [create_if_block$3, create_else_block_1$1];
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
        div3 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div2 = element("div");
        div1 = element("div");
        h1 = element("h1");
        h1.textContent = "Worship Services";
        t2 = space();
        div0 = element("div");
        button0 = element("button");
        button0.textContent = "Videos";
        t4 = space();
        button1 = element("button");
        button1.textContent = "Manuscripts";
        t6 = space();
        if_block.c();
        add_location(h1, file$5, 13, 12, 383);
        attr_dev(button0, "class", "svelte-1x76hxb");
        toggle_class(button0, "selected",
        /*show*/
        ctx[2] == "videos");
        add_location(button0, file$5, 15, 16, 462);
        attr_dev(button1, "class", "svelte-1x76hxb");
        toggle_class(button1, "selected",
        /*show*/
        ctx[2] == "manuscripts");
        add_location(button1, file$5, 16, 16, 570);
        attr_dev(div0, "class", "switcher svelte-1x76hxb");
        add_location(div0, file$5, 14, 12, 422);
        attr_dev(div1, "class", "content");
        add_location(div1, file$5, 12, 8, 348);
        add_location(div2, file$5, 11, 4, 237);
        attr_dev(div3, "class", "page");
        add_location(div3, file$5, 9, 0, 194);
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
        append_dev(div1, div0);
        append_dev(div0, button0);
        append_dev(div0, t4);
        append_dev(div0, button1);
        append_dev(div1, t6);
        if_blocks[current_block_type_index].m(div1, null);
        current = true;
        dispose = [listen_dev(button0, "click",
        /*click_handler*/
        ctx[5], false, false, false), listen_dev(button1, "click",
        /*click_handler_1*/
        ctx[6], false, false, false)];
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        8) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[3], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[3], dirty, null));
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
          if_block.m(div1, null);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        transition_in(if_block);
        add_render_callback(function () {
          if (div2_outro) div2_outro.end(1);
          if (!div2_intro) div2_intro = create_in_transition(div2, flyModified, {
            y: 300,
            duration: 300,
            delay: 500
          });
          div2_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        transition_out(if_block);
        if (div2_intro) div2_intro.invalidate();
        div2_outro = create_out_transition(div2, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div3);
        if (default_slot) default_slot.d(detaching);
        if_blocks[current_block_type_index].d();
        if (detaching && div2_outro) div2_outro.end();
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
    var getPageData = $$props.getPageData;
    var results = 5;
    var show = "videos";
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Sermons> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Sermons", $$slots, ['default']);

    var click_handler = function click_handler() {
      $$invalidate(2, show = "videos");
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(2, show = "manuscripts");
    };

    var func = function func(a, b) {
      return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    };

    var click_handler_2 = function click_handler_2() {
      $$invalidate(1, results += 5);
    };

    $$self.$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        fade: fade,
        getPageData: getPageData,
        results: results,
        show: show
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("results" in $$props) $$invalidate(1, results = $$props.results);
      if ("show" in $$props) $$invalidate(2, show = $$props.show);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, results, show, $$scope, $$slots, click_handler, click_handler_1, func, click_handler_2];
  }

  var Sermons = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Sermons, _SvelteComponentDev);

    function Sermons(options) {
      var _this;

      _classCallCheck(this, Sermons);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Sermons).call(this, options));
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

  var file$6 = "src\\views\\About.svelte";

  function create_fragment$6(ctx) {
    var div6;
    var t0;
    var div5;
    var div4;
    var h10;
    var t2;
    var div0;
    var a0;
    var t4;
    var a1;
    var t6;
    var a2;
    var t8;
    var p0;
    var t10;
    var div1;
    var t11;
    var span;
    var t13;
    var t14;
    var p1;
    var t16;
    var img;
    var img_src_value;
    var t17;
    var p2;
    var t19;
    var p3;
    var t21;
    var p4;
    var t22;
    var a3;
    var t24;
    var t25;
    var h11;
    var t27;
    var p5;
    var strong0;
    var t29;
    var p6;
    var t31;
    var div2;
    var h30;
    var t33;
    var p7;
    var strong1;
    var t35;
    var br;
    var t36;
    var strong2;
    var t38;
    var t39;
    var p8;
    var t41;
    var p9;
    var strong3;
    var t43;
    var p10;
    var t45;
    var h12;
    var t47;
    var p11;
    var strong4;
    var t49;
    var p12;
    var t51;
    var div3;
    var h31;
    var t53;
    var ul;
    var li0;
    var strong5;
    var t55;
    var t56;
    var li1;
    var strong6;
    var t58;
    var t59;
    var li2;
    var strong7;
    var t61;
    var t62;
    var li3;
    var strong8;
    var t64;
    var t65;
    var li4;
    var strong9;
    var t67;
    var t68;
    var li5;
    var strong10;
    var t70;
    var t71;
    var li6;
    var strong11;
    var t73;
    var div5_intro;
    var div5_outro;
    var current;
    var default_slot_template =
    /*$$slots*/
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
        h10 = element("h1");
        h10.textContent = "About Us";
        t2 = space();
        div0 = element("div");
        a0 = element("a");
        a0.textContent = "Staff";
        t4 = space();
        a1 = element("a");
        a1.textContent = "Directions";
        t6 = space();
        a2 = element("a");
        a2.textContent = "Facebook";
        t8 = space();
        p0 = element("p");
        p0.textContent = "First Christian Church of Galesburg was founded in 1872.  We are a manifestation of the church body known as The Christian Church (Disciples of Christ).  We have been worshiping and witnessing at this location since 1916, though the building was not completed and dedicated until 1928.";
        t10 = space();
        div1 = element("div");
        t11 = text("We are growing ");
        span = element("span");
        span.textContent = "passionate disciples of Christ ";
        t13 = text("for the transformation of our world");
        t14 = space();
        p1 = element("p");
        p1.textContent = "As \"Disciples of Christ\" we are one of over 4,000 similar congregations across the USA and Canada which had its origins on the American frontier in the early 19th century.  Founding fathers of our church organization were Thomas and Alexander Campbell, Barton W. Stone,and Walter Scott.  Since its beginning the Christian Church (Disciples of Christ) has endeavored to promote unity and to increase respect and understanding within the family of God.";
        t16 = space();
        img = element("img");
        t17 = space();
        p2 = element("p");
        p2.textContent = "As Disciples we strive to remain obedient to the Lordship and teachings of Jesus and the New Testament by practicing a faith which is socially relevant and intellectually sound.  Members are bound together in fellowship and service by belief in the central \"confession\" of the New Testament, that \"Jesus is the Christ, the Son of the living God.\"";
        t19 = space();
        p3 = element("p");
        p3.textContent = "In Illinois there are about 190 congregations of Disciples with over 50,000 members.";
        t21 = space();
        p4 = element("p");
        t22 = text("To access the web site of the national office of the Disciples of Christ, ");
        a3 = element("a");
        a3.textContent = "click here";
        t24 = text(".");
        t25 = space();
        h11 = element("h1");
        h11.textContent = "Worship";
        t27 = space();
        p5 = element("p");
        strong0 = element("strong");
        strong0.textContent = "This section is under construction!";
        t29 = space();
        p6 = element("p");
        p6.textContent = "More information coming very soon. Thanks for your patience!";
        t31 = space();
        div2 = element("div");
        h30 = element("h3");
        h30.textContent = "Sunday Morning Worship";
        t33 = space();
        p7 = element("p");
        strong1 = element("strong");
        strong1.textContent = "Contemporary Service";
        t35 = text(" - 8:30 AM");
        br = element("br");
        t36 = space();
        strong2 = element("strong");
        strong2.textContent = "Traditional Service";
        t38 = text(" - 11 AM");
        t39 = space();
        p8 = element("p");
        p8.textContent = "Sunday school is available for all ages between services";
        t41 = space();
        p9 = element("p");
        strong3 = element("strong");
        strong3.textContent = "This section is under construction!";
        t43 = space();
        p10 = element("p");
        p10.textContent = "More information coming very soon. Thanks for your patience!";
        t45 = space();
        h12 = element("h1");
        h12.textContent = "Education";
        t47 = space();
        p11 = element("p");
        strong4 = element("strong");
        strong4.textContent = "This section is under construction!";
        t49 = space();
        p12 = element("p");
        p12.textContent = "More information coming very soon. Thanks for your patience!";
        t51 = space();
        div3 = element("div");
        h31 = element("h3");
        h31.textContent = "Sunday School Classes";
        t53 = space();
        ul = element("ul");
        li0 = element("li");
        strong5 = element("strong");
        strong5.textContent = "DiscipleShip";
        t55 = text(" - 5th grade; 2nd Floor Education Building");
        t56 = space();
        li1 = element("li");
        strong6 = element("strong");
        strong6.textContent = "Junior High and High School";
        t58 = text(" - 6th-12th grade; Room #4 Youth Lounge");
        t59 = space();
        li2 = element("li");
        strong7 = element("strong");
        strong7.textContent = "Coffee House Theology";
        t61 = text(" - Library");
        t62 = space();
        li3 = element("li");
        strong8 = element("strong");
        strong8.textContent = "Friendship Class";
        t64 = text(" - Room #12 in Education Building");
        t65 = space();
        li4 = element("li");
        strong9 = element("strong");
        strong9.textContent = "Faithweavers";
        t67 = text(" - Parlor");
        t68 = space();
        li5 = element("li");
        strong10 = element("strong");
        strong10.textContent = "Travelers";
        t70 = text(" - South Side of Large Hall");
        t71 = space();
        li6 = element("li");
        strong11 = element("strong");
        strong11.textContent = "Northern Lights";
        t73 = text(" - Room #17 in Education Building");
        add_location(h10, file$6, 8, 12, 263);
        attr_dev(a0, "href", "#staff");
        add_location(a0, file$6, 10, 16, 331);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        add_location(a1, file$6, 11, 16, 375);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        add_location(a2, file$6, 12, 16, 610);
        attr_dev(div0, "class", "links");
        add_location(div0, file$6, 9, 12, 294);
        add_location(p0, file$6, 15, 12, 792);
        attr_dev(span, "class", "bigger");
        add_location(span, file$6, 16, 49, 1135);
        attr_dev(div1, "class", "emphasis");
        add_location(div1, file$6, 16, 12, 1098);
        add_location(p1, file$6, 17, 12, 1249);
        if (img.src !== (img_src_value = "/primary-images/worshipservice.jpg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        add_location(img, file$6, 18, 12, 1720);
        add_location(p2, file$6, 19, 12, 1787);
        add_location(p3, file$6, 20, 12, 2154);
        attr_dev(a3, "target", "_blank");
        attr_dev(a3, "href", "http://www.disciples.org/");
        add_location(a3, file$6, 21, 89, 2336);
        add_location(p4, file$6, 21, 12, 2259);
        add_location(h11, file$6, 23, 12, 2423);
        add_location(strong0, file$6, 25, 15, 2458);
        add_location(p5, file$6, 25, 12, 2455);
        add_location(p6, file$6, 26, 12, 2528);
        add_location(h30, file$6, 29, 16, 2656);
        add_location(strong1, file$6, 31, 16, 2743);
        add_location(br, file$6, 31, 63, 2790);
        add_location(strong2, file$6, 32, 16, 2812);
        attr_dev(p7, "class", "centered");
        add_location(p7, file$6, 30, 16, 2705);
        attr_dev(p8, "class", "centered");
        add_location(p8, file$6, 34, 16, 2896);
        add_location(strong3, file$6, 36, 19, 2999);
        add_location(p9, file$6, 36, 16, 2996);
        add_location(p10, file$6, 37, 16, 3073);
        attr_dev(div2, "class", "attention-box");
        add_location(div2, file$6, 28, 12, 2611);
        add_location(h12, file$6, 56, 12, 4853);
        add_location(strong4, file$6, 57, 15, 4888);
        add_location(p11, file$6, 57, 12, 4885);
        add_location(p12, file$6, 58, 12, 4958);
        attr_dev(h31, "id", "classes");
        add_location(h31, file$6, 65, 16, 5746);
        add_location(strong5, file$6, 67, 20, 5833);
        add_location(li0, file$6, 67, 16, 5829);
        add_location(strong6, file$6, 68, 20, 5931);
        add_location(li1, file$6, 68, 16, 5927);
        add_location(strong7, file$6, 69, 20, 6041);
        add_location(li2, file$6, 69, 16, 6037);
        add_location(strong8, file$6, 70, 20, 6116);
        add_location(li3, file$6, 70, 16, 6112);
        add_location(strong9, file$6, 71, 20, 6209);
        add_location(li4, file$6, 71, 16, 6205);
        add_location(strong10, file$6, 72, 20, 6274);
        add_location(li5, file$6, 72, 16, 6270);
        add_location(strong11, file$6, 73, 20, 6354);
        add_location(li6, file$6, 73, 16, 6350);
        add_location(ul, file$6, 66, 16, 5807);
        attr_dev(div3, "class", "attention-box");
        add_location(div3, file$6, 64, 12, 5701);
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
        append_dev(div4, h10);
        append_dev(div4, t2);
        append_dev(div4, div0);
        append_dev(div0, a0);
        append_dev(div0, t4);
        append_dev(div0, a1);
        append_dev(div0, t6);
        append_dev(div0, a2);
        append_dev(div4, t8);
        append_dev(div4, p0);
        append_dev(div4, t10);
        append_dev(div4, div1);
        append_dev(div1, t11);
        append_dev(div1, span);
        append_dev(div1, t13);
        append_dev(div4, t14);
        append_dev(div4, p1);
        append_dev(div4, t16);
        append_dev(div4, img);
        append_dev(div4, t17);
        append_dev(div4, p2);
        append_dev(div4, t19);
        append_dev(div4, p3);
        append_dev(div4, t21);
        append_dev(div4, p4);
        append_dev(p4, t22);
        append_dev(p4, a3);
        append_dev(p4, t24);
        append_dev(div4, t25);
        append_dev(div4, h11);
        append_dev(div4, t27);
        append_dev(div4, p5);
        append_dev(p5, strong0);
        append_dev(div4, t29);
        append_dev(div4, p6);
        append_dev(div4, t31);
        append_dev(div4, div2);
        append_dev(div2, h30);
        append_dev(div2, t33);
        append_dev(div2, p7);
        append_dev(p7, strong1);
        append_dev(p7, t35);
        append_dev(p7, br);
        append_dev(p7, t36);
        append_dev(p7, strong2);
        append_dev(p7, t38);
        append_dev(div2, t39);
        append_dev(div2, p8);
        append_dev(div2, t41);
        append_dev(div2, p9);
        append_dev(p9, strong3);
        append_dev(div2, t43);
        append_dev(div2, p10);
        append_dev(div4, t45);
        append_dev(div4, h12);
        append_dev(div4, t47);
        append_dev(div4, p11);
        append_dev(p11, strong4);
        append_dev(div4, t49);
        append_dev(div4, p12);
        append_dev(div4, t51);
        append_dev(div4, div3);
        append_dev(div3, h31);
        append_dev(div3, t53);
        append_dev(div3, ul);
        append_dev(ul, li0);
        append_dev(li0, strong5);
        append_dev(li0, t55);
        append_dev(ul, t56);
        append_dev(ul, li1);
        append_dev(li1, strong6);
        append_dev(li1, t58);
        append_dev(ul, t59);
        append_dev(ul, li2);
        append_dev(li2, strong7);
        append_dev(li2, t61);
        append_dev(ul, t62);
        append_dev(ul, li3);
        append_dev(li3, strong8);
        append_dev(li3, t64);
        append_dev(ul, t65);
        append_dev(ul, li4);
        append_dev(li4, strong9);
        append_dev(li4, t67);
        append_dev(ul, t68);
        append_dev(ul, li5);
        append_dev(li5, strong10);
        append_dev(li5, t70);
        append_dev(ul, t71);
        append_dev(ul, li6);
        append_dev(li6, strong11);
        append_dev(li6, t73);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        1) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[0], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[0], dirty, null));
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
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("About", $$slots, ['default']);

    $$self.$set = function ($$props) {
      if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [$$scope, $$slots];
  }

  var About = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(About, _SvelteComponentDev);

    function About(options) {
      var _this;

      _classCallCheck(this, About);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, options));
      init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "About",
        options: options,
        id: create_fragment$6.name
      });
      return _this;
    }

    return About;
  }(SvelteComponentDev);

  var file$7 = "src\\components\\StaffBio.svelte";

  function create_fragment$7(ctx) {
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
        add_location(div0, file$7, 9, 4, 239);
        if (img.src !== (img_src_value =
        /*staffer*/
        ctx[0].src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", img_alt_value =
        /*staffer*/
        ctx[0].name + " " +
        /*staffer*/
        ctx[0].title);
        attr_dev(img, "class", "svelte-1a9hlu3");
        add_location(img, file$7, 11, 8, 430);
        attr_dev(span0, "class", "name svelte-1a9hlu3");
        add_location(span0, file$7, 13, 12, 544);
        add_location(br, file$7, 14, 32, 620);
        attr_dev(span1, "class", "title svelte-1a9hlu3");
        add_location(span1, file$7, 14, 12, 600);
        attr_dev(span2, "class", "bio svelte-1a9hlu3");
        add_location(span2, file$7, 15, 12, 662);
        attr_dev(span3, "class", "description svelte-1a9hlu3");
        add_location(span3, file$7, 12, 8, 504);
        attr_dev(div1, "class", "side-by-side svelte-1a9hlu3");
        add_location(div1, file$7, 10, 4, 314);
        attr_dev(div2, "class", "bio-frame svelte-1a9hlu3");
        add_location(div2, file$7, 8, 0, 194);
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
        dispose = listen_dev(div0, "click",
        /*click_handler*/
        ctx[2], false, false, false);
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
        dispose();
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
    var staffer = $$props.staffer;
    var dispatch = createEventDispatcher();
    var writable_props = ["staffer"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<StaffBio> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("StaffBio", $$slots, []);

    var click_handler = function click_handler() {
      dispatch("close");
    };

    $$self.$set = function ($$props) {
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

    function StaffBio(options) {
      var _this;

      _classCallCheck(this, StaffBio);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(StaffBio).call(this, options));
      init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {
        staffer: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "StaffBio",
        options: options,
        id: create_fragment$7.name
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

  var file$8 = "src\\views\\Staff.svelte"; // (41:0) {#if showBio}

  function create_if_block$4(ctx) {
    var current;
    var staffbio = new StaffBio({
      props: {
        staffer:
        /*curStaffer*/
        ctx[1]
      },
      $$inline: true
    });
    staffbio.$on("close",
    /*close_handler*/
    ctx[5]);
    var block = {
      c: function create() {
        create_component(staffbio.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(staffbio, target, anchor);
        current = true;
      },
      p: noop,
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
      source: "(41:0) {#if showBio}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$8(ctx) {
    var div2;
    var t0;
    var div1;
    var div0;
    var h1;
    var t2;
    var p;
    var strong;
    var div1_intro;
    var div1_outro;
    var t4;
    var if_block_anchor;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);
    var if_block =
    /*showBio*/
    ctx[0] && create_if_block$4(ctx);
    var block = {
      c: function create() {
        div2 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        h1 = element("h1");
        h1.textContent = "Church Staff";
        t2 = space();
        p = element("p");
        strong = element("strong");
        strong.textContent = "Staff information coming soon!";
        t4 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        add_location(h1, file$8, 22, 12, 4277);
        add_location(strong, file$8, 23, 15, 4315);
        add_location(p, file$8, 23, 12, 4312);
        attr_dev(div0, "class", "content");
        add_location(div0, file$8, 21, 8, 4242);
        add_location(div1, file$8, 20, 4, 4131);
        attr_dev(div2, "class", "page");
        add_location(div2, file$8, 18, 0, 4088);
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
        append_dev(div0, p);
        append_dev(p, strong);
        insert_dev(target, t4, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        8) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[3], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[3], dirty, null));
        }

        if (
        /*showBio*/
        ctx[0]) {
          if (if_block) {
            if_block.p(ctx, dirty);
            transition_in(if_block, 1);
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
        if (detaching && div1_outro) div1_outro.end();
        if (detaching) detach_dev(t4);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
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
    var curStaffer;
    var showBio = false;
    var staffers = [{
      name: "MJ Fitch",
      title: "Pastor",
      src: "/staff-photos/mj.jpg",
      bio: "<p>A native of Oklahoma, she has spent much of her life in Texas. She holds a BA in Religion from Texas Christian University in Fort Worth, Texas, and a Master of Divinity from the Brite Divinity School in Fort Worth. She has served as a Minister to Children at South Hills Christian Church in Fort Worth and as a Co-Pastor with her husband Greg at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. Pastor Martha-Jean (MJ) has served First Christian in Galesburg since July 2003.</p> <p>She and her husband Greg have three children. In her personal time, Pastor MJ enjoys reading, cross-stitching, playing the piano and cooking.</p>"
    }, {
      name: "Greg Fitch",
      title: "Pastor",
      src: "/staff-photos/greg.jpg",
      bio: "<p>A native of Nebraska, Pastor Greg has spent much of his life in Colorado. He holds a BA in Religion from Texas Christian University in Fort Worth, Texas and a Master of Divinity from the Brite Divinity School in Fort Worth. He has served as an Associate Minister at Rosemont Christian Church in Dallas, Texas and as a Co-Pastor with his wife Martha-Jean at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. He also served for 3 years as the Associate Regional Minister of the Christian Church (Disciples of Christ) in Colorado-Wyoming. Pastor Greg has served First Christian in Galesburg since July 2003.</p><p>He and his wife Martha-Jean have three children. In his personal time, Pastor Greg enjoys golfing, fishing, reading, cross-stitching, and cooking.</p>"
    }, {
      name: "Terri Ohelert",
      title: "Office Manager",
      src: "/staff-photos/terri.jpg",
      bio: "<p>Terri and her husband William moved from Iowa to Galesburg in 1985. William (Swede) is employed by BNSF. They have a son, Ryan, now in the army, two cats and a dog. Terri has been employed by FCC since September of 1989 and has seen many changes and growth in the church during that time. She loves her job!</p>"
    }, {
      name: "Lynda White",
      title: "Treasurer/Bookkeeper",
      src: "/staff-photos/lynda.jpg",
      bio: "<p>Lynda is a member of First Christian Church and has been the Bookkeeper since February 2000. She graduated from Galesburg High School. She is a member of the Church board and Circle 3. She is married with 3 children and one granddaughter.</p>"
    }, {
      name: "Steve Jackson",
      title: "Minister of Music",
      src: "/staff-photos/steve.jpg",
      bio: "<p>Steve joined the staff of First Christian Church in August 2009. Steve is a native of Galesburg who graduated from Galesburg High School in 1985, majored in music and philosophy at Knox College (1989), and earned a doctorate in music (jazz studies) at the University of Illinois (May 2009). Steve has served in music ministry (and in youth ministry with his wife Tracy) at Norwood Gospel Chapel and Northwest Bible Chapel in Chicago and at Stratford Park Bible Chapel in Champaign. Steve and Tracy, who helped lead Steve to Christ in 1992, have two young children. Steve also teaches music classes at Carl Sandburg College and plays in the Knox-Galesburg Symphony.</p>"
    }, {
      name: "Amber Clark",
      title: "Organist",
      src: "/staff-photos/amber.jpg",
      bio: "<p>Amber earned a music degree in Appleton Wisconsin.  She came to Galesburg to teach piano and organ at Knox College, where she was also the accompanist for the Knox College choir.  She was the organist at the Presbyterian Church for many years.</p>"
    }, {
      name: "Bob Conley",
      title: "Custodian",
      src: "/staff-photos/bob.jpg",
      bio: "<p>Bob grew up in Knoxville and worked for some years at Gates.  He then moved to Arizona and worked for Abbott Laboratories until he reached retirement age.  After retirement he returned to this area and again lives in Knoxville. He has two adult children.</p>"
    }];
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Staff> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Staff", $$slots, ['default']);

    var close_handler = function close_handler() {
      $$invalidate(0, showBio = false);
    };

    $$self.$set = function ($$props) {
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
      if ("curStaffer" in $$props) $$invalidate(1, curStaffer = $$props.curStaffer);
      if ("showBio" in $$props) $$invalidate(0, showBio = $$props.showBio);
      if ("staffers" in $$props) staffers = $$props.staffers;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [showBio, curStaffer, staffers, $$scope, $$slots, close_handler];
  }

  var Staff = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Staff, _SvelteComponentDev);

    function Staff(options) {
      var _this;

      _classCallCheck(this, Staff);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Staff).call(this, options));
      init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Staff",
        options: options,
        id: create_fragment$8.name
      });
      return _this;
    }

    return Staff;
  }(SvelteComponentDev);

  var file$9 = "src\\views\\Links.svelte";

  function create_fragment$9(ctx) {
    var div2;
    var t0;
    var div1;
    var div0;
    var h1;
    var t2;
    var p0;
    var t4;
    var h20;
    var t6;
    var ul0;
    var li0;
    var a0;
    var t8;
    var p1;
    var t10;
    var li1;
    var a1;
    var t12;
    var p2;
    var t14;
    var h21;
    var t16;
    var ul1;
    var li2;
    var a2;
    var t18;
    var p3;
    var t20;
    var li3;
    var a3;
    var t22;
    var p4;
    var t24;
    var li4;
    var a4;
    var t26;
    var p5;
    var t28;
    var li5;
    var a5;
    var t30;
    var p6;
    var t32;
    var h22;
    var t34;
    var h30;
    var t36;
    var ul2;
    var li6;
    var a6;
    var t38;
    var li7;
    var a7;
    var t40;
    var li8;
    var a8;
    var t42;
    var li9;
    var a9;
    var t44;
    var li10;
    var a10;
    var t46;
    var li11;
    var a11;
    var t48;
    var li12;
    var a12;
    var t50;
    var li13;
    var a13;
    var t52;
    var h31;
    var t54;
    var p7;
    var t56;
    var p8;
    var t58;
    var p9;
    var t60;
    var ul3;
    var li14;
    var a14;
    var t62;
    var li15;
    var a15;
    var t64;
    var li16;
    var a16;
    var t66;
    var li17;
    var a17;
    var t68;
    var li18;
    var a18;
    var t70;
    var li19;
    var a19;
    var t72;
    var li20;
    var a20;
    var t74;
    var li21;
    var a21;
    var t76;
    var li22;
    var a22;
    var t78;
    var li23;
    var a23;
    var t80;
    var li24;
    var a24;
    var t82;
    var li25;
    var a25;
    var div1_intro;
    var div1_outro;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[1].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[0], null);
    var block = {
      c: function create() {
        div2 = element("div");
        if (default_slot) default_slot.c();
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        h1 = element("h1");
        h1.textContent = "Resources";
        t2 = space();
        p0 = element("p");
        p0.textContent = "See below for links to affiliated organizations, useful services and resources, and other interesting information.";
        t4 = space();
        h20 = element("h2");
        h20.textContent = "Disciples of Christ";
        t6 = space();
        ul0 = element("ul");
        li0 = element("li");
        a0 = element("a");
        a0.textContent = "The Christian Church (Disciples of Christ) in the United States and Canada";
        t8 = space();
        p1 = element("p");
        p1.textContent = "The national office for the Christian Church (Disciples of Christ), with information about the denomination and resources for church leaders and congregations.";
        t10 = space();
        li1 = element("li");
        a1 = element("a");
        a1.textContent = "The Christian Church of Illinois and Wisconsin (CCIW)";
        t12 = space();
        p2 = element("p");
        p2.textContent = "The home page of the regional office of the Christian Church in Illinois and Wisconsin. Here you will find information about activities, news, and links to other regional churches.";
        t14 = space();
        h21 = element("h2");
        h21.textContent = "Bible Reading and Devotion";
        t16 = space();
        ul1 = element("ul");
        li2 = element("li");
        a2 = element("a");
        a2.textContent = "Bible Gateway";
        t18 = space();
        p3 = element("p");
        p3.textContent = "Online Bible verse lookup and Bible reading tool that allows you to read verses in multiple versions.";
        t20 = space();
        li3 = element("li");
        a3 = element("a");
        a3.textContent = "Back to the Bible";
        t22 = space();
        p4 = element("p");
        p4.textContent = "Provides schedules for reading the Bible in one year as well as multiple devotional readings.";
        t24 = space();
        li4 = element("li");
        a4 = element("a");
        a4.textContent = "Christian Classics Ethereal Library";
        t26 = space();
        p5 = element("p");
        p5.textContent = "A large collection of classic Christian books available online at no charge.";
        t28 = space();
        li5 = element("li");
        a5 = element("a");
        a5.textContent = "Bible-Reading.com";
        t30 = space();
        p6 = element("p");
        p6.textContent = "Has links to the schedule for reading the Bible in one year, as well as numerous other Bible reading choices.";
        t32 = space();
        h22 = element("h2");
        h22.textContent = "Congo Resources";
        t34 = space();
        h30 = element("h3");
        h30.textContent = "English";
        t36 = space();
        ul2 = element("ul");
        li6 = element("li");
        a6 = element("a");
        a6.textContent = "Congo Book 1";
        t38 = space();
        li7 = element("li");
        a7 = element("a");
        a7.textContent = "Congo Book First 50 Years";
        t40 = space();
        li8 = element("li");
        a8 = element("a");
        a8.textContent = "Congo Book Decade 6";
        t42 = space();
        li9 = element("li");
        a9 = element("a");
        a9.textContent = "Congo Book Decade 7";
        t44 = space();
        li10 = element("li");
        a10 = element("a");
        a10.textContent = "Congo Book Decade 8";
        t46 = space();
        li11 = element("li");
        a11 = element("a");
        a11.textContent = "Congo Book Decade 9";
        t48 = space();
        li12 = element("li");
        a12 = element("a");
        a12.textContent = "Congo Book Decade 10";
        t50 = space();
        li13 = element("li");
        a13 = element("a");
        a13.textContent = "50 Years in Congo";
        t52 = space();
        h31 = element("h3");
        h31.textContent = "French";
        t54 = space();
        p7 = element("p");
        p7.textContent = "En 1999, j'ai écrit un livre décrivant l'histoire de l'œuvre de missionnaires envoyés au Congo par l'Église Chrétienne, Disciples du Christ, en Amérique. Le livre a été intitulé \"Congo Centenaire, les Deuxième Cinquante Ans \":. J'ai maintenant terminé une traduction du livre en français pour l'utilisation des Congolais. Cette traduction n'a pas été vérifiée par quelqu'un d'autre. Depuis que le françai";
        t56 = space();
        p8 = element("p");
        p8.textContent = "Centennaire11.pdfs n'est pas ma première langue, et à cause de ma mauvaise vision, il y a sans doute beaucoup d'erreurs de grammaire. Toutefois, le sens du texte devrait être clair.";
        t58 = space();
        p9 = element("p");
        p9.textContent = "J'ai divisé le livre en chapitres pour le rendre plus facile à télécharger. # 1 est l'information préliminaire. # 2 raconte les 50 premières années. Les numéros 3, 5, 7 et 9 ont des photos et des informations biographiques sur les missionnaires qui étaient nouveaux à chaque décennie. Les numéros 4, 6, 8 et 10 décrivent les activités qui ont eu lieu au cours de la 6e, 7e, 8e et 9e décennies. # 11, quand il y avait seulement 2 nouveaux missionnaires, inclus à la fois des photos et du texte de la dixième décennie.";
        t60 = space();
        ul3 = element("ul");
        li14 = element("li");
        a14 = element("a");
        a14.textContent = "Centennaire 1";
        t62 = space();
        li15 = element("li");
        a15 = element("a");
        a15.textContent = "Centennaire 2";
        t64 = space();
        li16 = element("li");
        a16 = element("a");
        a16.textContent = "Centennaire 3";
        t66 = space();
        li17 = element("li");
        a17 = element("a");
        a17.textContent = "Centennaire 4";
        t68 = space();
        li18 = element("li");
        a18 = element("a");
        a18.textContent = "Centennaire 5";
        t70 = space();
        li19 = element("li");
        a19 = element("a");
        a19.textContent = "Centennaire 6";
        t72 = space();
        li20 = element("li");
        a20 = element("a");
        a20.textContent = "Centennaire 7";
        t74 = space();
        li21 = element("li");
        a21 = element("a");
        a21.textContent = "Centennaire 8";
        t76 = space();
        li22 = element("li");
        a22 = element("a");
        a22.textContent = "Centennaire 9";
        t78 = space();
        li23 = element("li");
        a23 = element("a");
        a23.textContent = "Centennaire 10";
        t80 = space();
        li24 = element("li");
        a24 = element("a");
        a24.textContent = "Centennaire 11";
        t82 = space();
        li25 = element("li");
        a25 = element("a");
        a25.textContent = "50 Ans au Congo";
        add_location(h1, file$9, 8, 12, 263);
        add_location(p0, file$9, 10, 12, 297);
        add_location(h20, file$9, 12, 12, 434);
        attr_dev(a0, "href", "https://disciples.org/");
        attr_dev(a0, "target", "_blank");
        add_location(a0, file$9, 15, 20, 542);
        add_location(p1, file$9, 16, 20, 691);
        add_location(li0, file$9, 14, 16, 516);
        attr_dev(a1, "href", "https://cciwdisciples.org/");
        attr_dev(a1, "target", "_blank");
        add_location(a1, file$9, 19, 20, 924);
        add_location(p2, file$9, 20, 20, 1056);
        add_location(li1, file$9, 18, 16, 898);
        attr_dev(ul0, "class", "link-page");
        add_location(ul0, file$9, 13, 12, 476);
        add_location(h21, file$9, 24, 12, 1301);
        attr_dev(a2, "href", "https://www.biblegateway.com/");
        attr_dev(a2, "target", "_blank");
        add_location(a2, file$9, 27, 20, 1416);
        add_location(p3, file$9, 28, 20, 1511);
        add_location(li2, file$9, 26, 16, 1390);
        attr_dev(a3, "href", "https://www.backtothebible.org/forward");
        attr_dev(a3, "target", "_blank");
        add_location(a3, file$9, 31, 20, 1686);
        add_location(p4, file$9, 32, 20, 1794);
        add_location(li3, file$9, 30, 16, 1660);
        attr_dev(a4, "href", "http://www.ccel.org/");
        attr_dev(a4, "target", "_blank");
        add_location(a4, file$9, 35, 20, 1961);
        add_location(p5, file$9, 36, 20, 2069);
        add_location(li4, file$9, 34, 16, 1935);
        attr_dev(a5, "href", "http://www.bible-reading.com/");
        attr_dev(a5, "target", "_blank");
        add_location(a5, file$9, 39, 20, 2219);
        add_location(p6, file$9, 40, 20, 2318);
        add_location(li5, file$9, 38, 16, 2193);
        attr_dev(ul1, "class", "link-page");
        add_location(ul1, file$9, 25, 12, 1350);
        add_location(h22, file$9, 44, 12, 2492);
        add_location(h30, file$9, 45, 12, 2530);
        attr_dev(a6, "href", "/congo-links/English/Congobook1.pdf");
        attr_dev(a6, "target", "_blank");
        add_location(a6, file$9, 47, 20, 2604);
        add_location(li6, file$9, 47, 16, 2600);
        attr_dev(a7, "href", "/congo-links/English/CongoBook-1-First50Years.pdf");
        attr_dev(a7, "target", "_blank");
        add_location(a7, file$9, 48, 20, 2709);
        add_location(li7, file$9, 48, 16, 2705);
        attr_dev(a8, "href", "/congo-links/English/CongoBook-2-SixthDecade.pdf");
        attr_dev(a8, "target", "_blank");
        add_location(a8, file$9, 49, 20, 2841);
        add_location(li8, file$9, 49, 16, 2837);
        attr_dev(a9, "href", "/congo-links/English/CongoBook-3-SeventhDecade.pdf");
        attr_dev(a9, "target", "_blank");
        add_location(a9, file$9, 50, 20, 2966);
        add_location(li9, file$9, 50, 16, 2962);
        attr_dev(a10, "href", "/congo-links/English/CongoBook-4-EighthDecade.pdf");
        attr_dev(a10, "target", "_blank");
        add_location(a10, file$9, 51, 20, 3093);
        add_location(li10, file$9, 51, 16, 3089);
        attr_dev(a11, "href", "/congo-links/English/CongoBook-5-NinthDecade.pdf");
        attr_dev(a11, "target", "_blank");
        add_location(a11, file$9, 52, 20, 3219);
        add_location(li11, file$9, 52, 16, 3215);
        attr_dev(a12, "href", "/congo-links/English/CongoBook-6-TenthDecade.pdf");
        attr_dev(a12, "target", "_blank");
        add_location(a12, file$9, 53, 20, 3344);
        add_location(li12, file$9, 53, 16, 3340);
        attr_dev(a13, "href", "/congo-links/English/50YearsinCongo2.pdf");
        attr_dev(a13, "target", "_blank");
        add_location(a13, file$9, 54, 20, 3470);
        add_location(li13, file$9, 54, 16, 3466);
        attr_dev(ul2, "class", "link-page");
        add_location(ul2, file$9, 46, 12, 2560);
        add_location(h31, file$9, 56, 12, 3596);
        add_location(p7, file$9, 57, 12, 3625);
        add_location(p8, file$9, 58, 12, 4050);
        add_location(p9, file$9, 61, 12, 4284);
        attr_dev(a14, "href", "/congo-links/French/Centennaire1.pdf");
        attr_dev(a14, "target", "_blank");
        add_location(a14, file$9, 63, 20, 4865);
        add_location(li14, file$9, 63, 16, 4861);
        attr_dev(a15, "href", "/congo-links/French/Centennaire2.pdf");
        attr_dev(a15, "target", "_blank");
        add_location(a15, file$9, 64, 20, 4972);
        add_location(li15, file$9, 64, 16, 4968);
        attr_dev(a16, "href", "/congo-links/French/Centennaire3.pdf");
        attr_dev(a16, "target", "_blank");
        add_location(a16, file$9, 65, 20, 5079);
        add_location(li16, file$9, 65, 16, 5075);
        attr_dev(a17, "href", "/congo-links/French/Centennaire4.pdf");
        attr_dev(a17, "target", "_blank");
        add_location(a17, file$9, 66, 20, 5186);
        add_location(li17, file$9, 66, 16, 5182);
        attr_dev(a18, "href", "/congo-links/French/Centennaire5.pdf");
        attr_dev(a18, "target", "_blank");
        add_location(a18, file$9, 67, 20, 5293);
        add_location(li18, file$9, 67, 16, 5289);
        attr_dev(a19, "href", "/congo-links/French/Centennaire6.pdf");
        attr_dev(a19, "target", "_blank");
        add_location(a19, file$9, 68, 20, 5400);
        add_location(li19, file$9, 68, 16, 5396);
        attr_dev(a20, "href", "/congo-links/French/Centennaire7.pdf");
        attr_dev(a20, "target", "_blank");
        add_location(a20, file$9, 69, 20, 5507);
        add_location(li20, file$9, 69, 16, 5503);
        attr_dev(a21, "href", "/congo-links/French/Centennaire8.pdf");
        attr_dev(a21, "target", "_blank");
        add_location(a21, file$9, 70, 20, 5614);
        add_location(li21, file$9, 70, 16, 5610);
        attr_dev(a22, "href", "/congo-links/French/Centennaire9.pdf");
        attr_dev(a22, "target", "_blank");
        add_location(a22, file$9, 71, 20, 5721);
        add_location(li22, file$9, 71, 16, 5717);
        attr_dev(a23, "href", "/congo-links/French/Centennaire10.pdf");
        attr_dev(a23, "target", "_blank");
        add_location(a23, file$9, 72, 20, 5828);
        add_location(li23, file$9, 72, 16, 5824);
        attr_dev(a24, "href", "/congo-links/French/Centennaire11.pdf");
        attr_dev(a24, "target", "_blank");
        add_location(a24, file$9, 73, 20, 5937);
        add_location(li24, file$9, 73, 16, 5933);
        attr_dev(a25, "href", "/congo-links/French/French50Years2.pdf");
        attr_dev(a25, "target", "_blank");
        add_location(a25, file$9, 74, 20, 6046);
        add_location(li25, file$9, 74, 16, 6042);
        attr_dev(ul3, "class", "link-page");
        add_location(ul3, file$9, 62, 12, 4821);
        attr_dev(div0, "class", "content");
        add_location(div0, file$9, 7, 8, 228);
        add_location(div1, file$9, 6, 4, 117);
        attr_dev(div2, "class", "page");
        add_location(div2, file$9, 4, 0, 74);
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
        append_dev(div0, p0);
        append_dev(div0, t4);
        append_dev(div0, h20);
        append_dev(div0, t6);
        append_dev(div0, ul0);
        append_dev(ul0, li0);
        append_dev(li0, a0);
        append_dev(li0, t8);
        append_dev(li0, p1);
        append_dev(ul0, t10);
        append_dev(ul0, li1);
        append_dev(li1, a1);
        append_dev(li1, t12);
        append_dev(li1, p2);
        append_dev(div0, t14);
        append_dev(div0, h21);
        append_dev(div0, t16);
        append_dev(div0, ul1);
        append_dev(ul1, li2);
        append_dev(li2, a2);
        append_dev(li2, t18);
        append_dev(li2, p3);
        append_dev(ul1, t20);
        append_dev(ul1, li3);
        append_dev(li3, a3);
        append_dev(li3, t22);
        append_dev(li3, p4);
        append_dev(ul1, t24);
        append_dev(ul1, li4);
        append_dev(li4, a4);
        append_dev(li4, t26);
        append_dev(li4, p5);
        append_dev(ul1, t28);
        append_dev(ul1, li5);
        append_dev(li5, a5);
        append_dev(li5, t30);
        append_dev(li5, p6);
        append_dev(div0, t32);
        append_dev(div0, h22);
        append_dev(div0, t34);
        append_dev(div0, h30);
        append_dev(div0, t36);
        append_dev(div0, ul2);
        append_dev(ul2, li6);
        append_dev(li6, a6);
        append_dev(ul2, t38);
        append_dev(ul2, li7);
        append_dev(li7, a7);
        append_dev(ul2, t40);
        append_dev(ul2, li8);
        append_dev(li8, a8);
        append_dev(ul2, t42);
        append_dev(ul2, li9);
        append_dev(li9, a9);
        append_dev(ul2, t44);
        append_dev(ul2, li10);
        append_dev(li10, a10);
        append_dev(ul2, t46);
        append_dev(ul2, li11);
        append_dev(li11, a11);
        append_dev(ul2, t48);
        append_dev(ul2, li12);
        append_dev(li12, a12);
        append_dev(ul2, t50);
        append_dev(ul2, li13);
        append_dev(li13, a13);
        append_dev(div0, t52);
        append_dev(div0, h31);
        append_dev(div0, t54);
        append_dev(div0, p7);
        append_dev(div0, t56);
        append_dev(div0, p8);
        append_dev(div0, t58);
        append_dev(div0, p9);
        append_dev(div0, t60);
        append_dev(div0, ul3);
        append_dev(ul3, li14);
        append_dev(li14, a14);
        append_dev(ul3, t62);
        append_dev(ul3, li15);
        append_dev(li15, a15);
        append_dev(ul3, t64);
        append_dev(ul3, li16);
        append_dev(li16, a16);
        append_dev(ul3, t66);
        append_dev(ul3, li17);
        append_dev(li17, a17);
        append_dev(ul3, t68);
        append_dev(ul3, li18);
        append_dev(li18, a18);
        append_dev(ul3, t70);
        append_dev(ul3, li19);
        append_dev(li19, a19);
        append_dev(ul3, t72);
        append_dev(ul3, li20);
        append_dev(li20, a20);
        append_dev(ul3, t74);
        append_dev(ul3, li21);
        append_dev(li21, a21);
        append_dev(ul3, t76);
        append_dev(ul3, li22);
        append_dev(li22, a22);
        append_dev(ul3, t78);
        append_dev(ul3, li23);
        append_dev(li23, a23);
        append_dev(ul3, t80);
        append_dev(ul3, li24);
        append_dev(li24, a24);
        append_dev(ul3, t82);
        append_dev(ul3, li25);
        append_dev(li25, a25);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        1) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[0], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[0], dirty, null));
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
        if (detaching && div1_outro) div1_outro.end();
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
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Links> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Links", $$slots, ['default']);

    $$self.$set = function ($$props) {
      if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [$$scope, $$slots];
  }

  var Links = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Links, _SvelteComponentDev);

    function Links(options) {
      var _this;

      _classCallCheck(this, Links);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Links).call(this, options));
      init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Links",
        options: options,
        id: create_fragment$9.name
      });
      return _this;
    }

    return Links;
  }(SvelteComponentDev);

  var file$a = "src\\views\\Newsletters.svelte";

  function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[6] = list[i];
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
  } // (22:12) {:then newsletters}


  function create_then_block$3(ctx) {
    var div;
    var each_value =
    /*newsletters*/
    ctx[5].sort(
    /*func*/
    ctx[4]);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        div = element("div");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        attr_dev(div, "class", "news-grid svelte-z10e82");
        add_location(div, file$a, 22, 16, 698);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div, null);
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, Date, bgImages, Math*/
        3) {
          each_value =
          /*newsletters*/
          ctx[5].sort(
          /*func*/
          ctx[4]);
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$1(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$1(child_ctx);

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
      id: create_then_block$3.name,
      type: "then",
      source: "(22:12) {:then newsletters}",
      ctx: ctx
    });
    return block;
  } // (24:20) {#each newsletters.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf()) as newsletter}


  function create_each_block$1(ctx) {
    var a;
    var img;
    var img_src_value;
    var t0;
    var span;
    var t1_value =
    /*newsletter*/
    ctx[6].title + "";
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
        attr_dev(img, "class", "svelte-z10e82");
        add_location(img, file$a, 25, 28, 963);
        attr_dev(span, "class", "svelte-z10e82");
        add_location(span, file$a, 26, 28, 1066);
        attr_dev(a, "target", "_blank");
        attr_dev(a, "href", a_href_value =
        /*newsletter*/
        ctx[6].href);
        attr_dev(a, "class", "newsletter svelte-z10e82");
        add_location(a, file$a, 24, 24, 872);
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
        /*getPageData*/
        1 && t1_value !== (t1_value =
        /*newsletter*/
        ctx[6].title + "")) set_data_dev(t1, t1_value);

        if (dirty &
        /*getPageData*/
        1 && a_href_value !== (a_href_value =
        /*newsletter*/
        ctx[6].href)) {
          attr_dev(a, "href", a_href_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$1.name,
      type: "each",
      source: "(24:20) {#each newsletters.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf()) as newsletter}",
      ctx: ctx
    });
    return block;
  } // (18:58)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then newsletters}


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
        add_location(img, file$a, 19, 20, 571);
        attr_dev(div, "class", "loader");
        add_location(div, file$a, 18, 16, 529);
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
      source: "(18:58)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then newsletters}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$a(ctx) {
    var div2;
    var t0;
    var div1;
    var div0;
    var h1;
    var t2;
    var promise;
    var div1_intro;
    var div1_outro;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[3].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[2], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block$3,
      then: create_then_block$3,
      catch: create_catch_block$3,
      value: 5
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/newsletters.json"), info);
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
        info.block.c();
        add_location(h1, file$a, 15, 12, 429);
        attr_dev(div0, "class", "content");
        add_location(div0, file$a, 14, 8, 394);
        add_location(div1, file$a, 13, 4, 283);
        attr_dev(div2, "class", "page");
        add_location(div2, file$a, 11, 0, 240);
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

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        4) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[2], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[2], dirty, null));
        }

        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/newsletters.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[5] = info.resolved;
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
      id: create_fragment$a.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$a($$self, $$props, $$invalidate) {
    var getPageData = $$props.getPageData;
    var bgImages = ["/primary-images/ns1.jpg", "/primary-images/ns2.jpg", "/primary-images/ns3.jpg"];
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Newsletters> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Newsletters", $$slots, ['default']);

    var func = function func(a, b) {
      return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    };

    $$self.$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        getPageData: getPageData,
        bgImages: bgImages
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("bgImages" in $$props) $$invalidate(1, bgImages = $$props.bgImages);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, bgImages, $$scope, $$slots, func];
  }

  var Newsletters = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Newsletters, _SvelteComponentDev);

    function Newsletters(options) {
      var _this;

      _classCallCheck(this, Newsletters);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Newsletters).call(this, options));
      init(_assertThisInitialized(_this), options, instance$a, create_fragment$a, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Newsletters",
        options: options,
        id: create_fragment$a.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*getPageData*/
      ctx[0] === undefined && !("getPageData" in props)) {
        console.warn("<Newsletters> was created without expected prop 'getPageData'");
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

  var file$b = "src\\views\\AllEvents.svelte";

  function get_each_context$2(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    child_ctx[12] = i;
    return child_ctx;
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
  } // (28:16) {:then events}


  function create_then_block$4(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (
      /*events*/
      ctx[9] &&
      /*events*/
      ctx[9].length) return create_if_block_1$3;
      return create_else_block$3;
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
      id: create_then_block$4.name,
      type: "then",
      source: "(28:16) {:then events}",
      ctx: ctx
    });
    return block;
  } // (47:20) {:else}


  function create_else_block$3(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "No events found.";
        add_location(li, file$b, 47, 24, 2252);
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
      id: create_else_block$3.name,
      type: "else",
      source: "(47:20) {:else}",
      ctx: ctx
    });
    return block;
  } // (29:20) {#if events && events.length}


  function create_if_block_1$3(ctx) {
    var each_1_anchor;
    var each_value =
    /*events*/
    ctx[9];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
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
        /*openCalendarModal, getPageData, Date, months*/
        25) {
          each_value =
          /*events*/
          ctx[9];
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$2(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$2(child_ctx);

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
      source: "(29:20) {#if events && events.length}",
      ctx: ctx
    });
    return block;
  } // (31:28) {#if i == 0 || new Date(event.date).getMonth() != new Date(events[i-1].date).getMonth()}


  function create_if_block_2$1(ctx) {
    var h3;
    var t_value =
    /*months*/
    ctx[3][new Date(
    /*event*/
    ctx[10].date).getMonth()] + "";
    var t;
    var block = {
      c: function create() {
        h3 = element("h3");
        t = text(t_value);
        add_location(h3, file$b, 31, 32, 1235);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h3, anchor);
        append_dev(h3, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData*/
        1 && t_value !== (t_value =
        /*months*/
        ctx[3][new Date(
        /*event*/
        ctx[10].date).getMonth()] + "")) set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$1.name,
      type: "if",
      source: "(31:28) {#if i == 0 || new Date(event.date).getMonth() != new Date(events[i-1].date).getMonth()}",
      ctx: ctx
    });
    return block;
  } // (30:24) {#each events as event, i}


  function create_each_block$2(ctx) {
    var show_if =
    /*i*/
    ctx[12] == 0 || new Date(
    /*event*/
    ctx[10].date).getMonth() != new Date(
    /*events*/
    ctx[9][
    /*i*/
    ctx[12] - 1].date).getMonth();
    var t0;
    var li;
    var div0;
    var strong;
    var t1_value =
    /*event*/
    ctx[10].name + "";
    var t1;
    var t2;
    var t3_value = new Date(
    /*event*/
    ctx[10].date).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Chicago"
    }) + "";
    var t3;
    var t4;
    var div1;
    var t5_value =
    /*event*/
    ctx[10].description + "";
    var t5;
    var t6;
    var div2;
    var a0;
    var a0_href_value;
    var t8;
    var a1;
    var t10;
    var dispose;
    var if_block = show_if && create_if_block_2$1(ctx);

    function click_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler*/
        (_ctx = ctx)[7].apply(_ctx, [
        /*event*/
        ctx[10]].concat(args))
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
        t5 = text(t5_value);
        t6 = space();
        div2 = element("div");
        a0 = element("a");
        a0.textContent = "View event";
        t8 = text(" | \r\n                                    ");
        a1 = element("a");
        a1.textContent = "Add to calendar";
        t10 = space();
        add_location(strong, file$b, 35, 36, 1452);
        attr_dev(div0, "class", "overflow-box");
        add_location(div0, file$b, 34, 32, 1388);
        attr_dev(div1, "class", "overflow-box");
        add_location(div1, file$b, 37, 32, 1677);
        attr_dev(a0, "href", a0_href_value = "#singleevent/" +
        /*i*/
        ctx[12]);
        add_location(a0, file$b, 41, 36, 1909);
        attr_dev(a1, "href", "#events/i");
        add_location(a1, file$b, 42, 36, 1991);
        attr_dev(div2, "class", "right-align event-links");
        add_location(div2, file$b, 40, 32, 1834);
        add_location(li, file$b, 33, 28, 1350);
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
        append_dev(div1, t5);
        append_dev(li, t6);
        append_dev(li, div2);
        append_dev(div2, a0);
        append_dev(div2, t8);
        append_dev(div2, a1);
        append_dev(li, t10);
        dispose = listen_dev(a1, "click", prevent_default(click_handler), false, true, false);
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*getPageData*/
        1) show_if =
        /*i*/
        ctx[12] == 0 || new Date(
        /*event*/
        ctx[10].date).getMonth() != new Date(
        /*events*/
        ctx[9][
        /*i*/
        ctx[12] - 1].date).getMonth();

        if (show_if) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_2$1(ctx);
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
        ctx[10].name + "")) set_data_dev(t1, t1_value);
        if (dirty &
        /*getPageData*/
        1 && t3_value !== (t3_value = new Date(
        /*event*/
        ctx[10].date).toLocaleString("en-US", {
          dateStyle: "short",
          timeStyle: "short",
          timeZone: "America/Chicago"
        }) + "")) set_data_dev(t3, t3_value);
        if (dirty &
        /*getPageData*/
        1 && t5_value !== (t5_value =
        /*event*/
        ctx[10].description + "")) set_data_dev(t5, t5_value);
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(li);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$2.name,
      type: "each",
      source: "(30:24) {#each events as event, i}",
      ctx: ctx
    });
    return block;
  } // (24:57)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then events}


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
        add_location(img, file$b, 25, 24, 868);
        attr_dev(div, "class", "loader");
        add_location(div, file$b, 24, 20, 822);
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
      source: "(24:57)                       <div class='loader'>                          <img src='/icons/loading.svg' alt='loading content'>                      </div>                  {:then events}",
      ctx: ctx
    });
    return block;
  } // (57:0) {#if calendarModalOpen && curEvent}


  function create_if_block$5(ctx) {
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
    ctx[2] !== void 0) {
      calendarmodal_props.calendarModalOpen =
      /*calendarModalOpen*/
      ctx[2];
    }

    var calendarmodal = new CalendarModal({
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
      id: create_if_block$5.name,
      type: "if",
      source: "(57:0) {#if calendarModalOpen && curEvent}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$b(ctx) {
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
    /*$$slots*/
    ctx[6].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[5], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block$4,
      then: create_then_block$4,
      catch: create_catch_block$4,
      value: 9
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/events.json"), info);
    var if_block =
    /*calendarModalOpen*/
    ctx[2] &&
    /*curEvent*/
    ctx[1] && create_if_block$5(ctx);
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
        add_location(h2, file$b, 21, 12, 692);
        add_location(ul, file$b, 22, 12, 737);
        attr_dev(div0, "class", "content events");
        add_location(div0, file$b, 20, 8, 650);
        add_location(div1, file$b, 19, 4, 539);
        attr_dev(div2, "class", "page");
        add_location(div2, file$b, 17, 0, 496);
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

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        32) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[5], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[5], dirty, null));
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
        ctx[2] &&
        /*curEvent*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);
            transition_in(if_block, 1);
          } else {
            if_block = create_if_block$5(ctx);
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
      id: create_fragment$b.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$b($$self, $$props, $$invalidate) {
    var getPageData = $$props.getPageData;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var curEvent;
    var calendarModalOpen = false;

    function openCalendarModal(event) {
      $$invalidate(1, curEvent = event);
      $$invalidate(2, calendarModalOpen = true);
    }

    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<AllEvents> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("AllEvents", $$slots, ['default']);

    var click_handler = function click_handler(event) {
      openCalendarModal(event);
    };

    function calendarmodal_calendarModalOpen_binding(value) {
      calendarModalOpen = value;
      $$invalidate(2, calendarModalOpen);
    }

    $$self.$set = function ($$props) {
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
        openCalendarModal: openCalendarModal
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("months" in $$props) $$invalidate(3, months = $$props.months);
      if ("curEvent" in $$props) $$invalidate(1, curEvent = $$props.curEvent);
      if ("calendarModalOpen" in $$props) $$invalidate(2, calendarModalOpen = $$props.calendarModalOpen);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, curEvent, calendarModalOpen, months, openCalendarModal, $$scope, $$slots, click_handler, calendarmodal_calendarModalOpen_binding];
  }

  var AllEvents = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(AllEvents, _SvelteComponentDev);

    function AllEvents(options) {
      var _this;

      _classCallCheck(this, AllEvents);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AllEvents).call(this, options));
      init(_assertThisInitialized(_this), options, instance$b, create_fragment$b, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "AllEvents",
        options: options,
        id: create_fragment$b.name
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

  var file$c = "src\\views\\SingleEvent.svelte"; // (1:0) <script>      import {flyModified}

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
  } // (32:12) {:then events}


  function create_then_block$5(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (
      /*events*/
      ctx[10] &&
      /*events*/
      ctx[10].length) return create_if_block_1$4;
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
      id: create_then_block$5.name,
      type: "then",
      source: "(32:12) {:then events}",
      ctx: ctx
    });
    return block;
  } // (49:16) {:else}


  function create_else_block$4(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "Event not found.";
        add_location(li, file$c, 49, 20, 2167);
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
      source: "(49:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (33:16) {#if events && events.length}


  function create_if_block_1$4(ctx) {
    var h2;
    var t0_value =
    /*events*/
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
    /*events*/
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
    /*events*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].location + "";
    var t9;
    var t10;
    var div2;
    var h3;
    var t12;
    var p;
    var raw_value =
    /*events*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].description + "";
    var t13;
    var div1;
    var a;
    var dispose;
    var if_block =
    /*events*/
    ctx[10][
    /*eventIndex*/
    ctx[2]].img && create_if_block_2$2(ctx);

    function click_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler*/
        (_ctx = ctx)[8].apply(_ctx, [
        /*events*/
        ctx[10]].concat(args))
      );
    }

    var block = {
      c: function create() {
        h2 = element("h2");
        t0 = text(t0_value);
        t1 = space();
        if (if_block) if_block.c();
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
        p = element("p");
        t13 = space();
        div1 = element("div");
        a = element("a");
        a.textContent = "Add to calendar";
        add_location(h2, file$c, 33, 20, 1101);
        add_location(strong0, file$c, 38, 30, 1415);
        attr_dev(span0, "class", "svelte-tajzb3");
        add_location(span0, file$c, 38, 24, 1409);
        add_location(strong1, file$c, 39, 30, 1609);
        attr_dev(span1, "class", "svelte-tajzb3");
        add_location(span1, file$c, 39, 24, 1603);
        attr_dev(div0, "class", "event-details svelte-tajzb3");
        add_location(div0, file$c, 37, 20, 1356);
        add_location(h3, file$c, 42, 24, 1769);
        add_location(p, file$c, 43, 24, 1821);
        attr_dev(a, "href", "#events/i");
        add_location(a, file$c, 45, 28, 1949);
        attr_dev(div1, "class", "mt-2 centered");
        add_location(div1, file$c, 44, 24, 1892);
        attr_dev(div2, "class", "detail-box svelte-tajzb3");
        add_location(div2, file$c, 41, 20, 1719);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h2, anchor);
        append_dev(h2, t0);
        insert_dev(target, t1, anchor);
        if (if_block) if_block.m(target, anchor);
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
        append_dev(div2, p);
        p.innerHTML = raw_value;
        append_dev(div2, t13);
        append_dev(div2, div1);
        append_dev(div1, a);
        dispose = listen_dev(a, "click", prevent_default(click_handler), false, true, false);
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*getPageData, eventIndex*/
        5 && t0_value !== (t0_value =
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].name + "")) set_data_dev(t0, t0_value);

        if (
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_2$2(ctx);
            if_block.c();
            if_block.m(t2.parentNode, t2);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*getPageData, eventIndex*/
        5 && t5_value !== (t5_value = new Date(
        /*events*/
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
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].location + "")) set_data_dev(t9, t9_value);
        if (dirty &
        /*getPageData, eventIndex*/
        5 && raw_value !== (raw_value =
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].description + "")) p.innerHTML = raw_value;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h2);
        if (detaching) detach_dev(t1);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t2);
        if (detaching) detach_dev(div0);
        if (detaching) detach_dev(t10);
        if (detaching) detach_dev(div2);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$4.name,
      type: "if",
      source: "(33:16) {#if events && events.length}",
      ctx: ctx
    });
    return block;
  } // (35:20) {#if events[eventIndex].img}


  function create_if_block_2$2(ctx) {
    var img;
    var img_src_value;
    var img_alt_value;
    var block = {
      c: function create() {
        img = element("img");
        attr_dev(img, "class", "sm-bottom-margin");
        if (img.src !== (img_src_value =
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.src)) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", img_alt_value =
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.alt);
        add_location(img, file$c, 35, 24, 1211);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*getPageData, eventIndex*/
        5 && img.src !== (img_src_value =
        /*events*/
        ctx[10][
        /*eventIndex*/
        ctx[2]].img.src)) {
          attr_dev(img, "src", img_src_value);
        }

        if (dirty &
        /*getPageData, eventIndex*/
        5 && img_alt_value !== (img_alt_value =
        /*events*/
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
      id: create_if_block_2$2.name,
      type: "if",
      source: "(35:20) {#if events[eventIndex].img}",
      ctx: ctx
    });
    return block;
  } // (28:53)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then events}


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
        add_location(img, file$c, 29, 20, 928);
        attr_dev(div, "class", "loader");
        add_location(div, file$c, 28, 16, 886);
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
      source: "(28:53)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then events}",
      ctx: ctx
    });
    return block;
  } // (58:0) {#if calendarModalOpen && curEvent}


  function create_if_block$6(ctx) {
    var updating_calendarModalOpen;
    var current;

    function calendarmodal_calendarModalOpen_binding(value) {
      /*calendarmodal_calendarModalOpen_binding*/
      ctx[9].call(null, value);
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

    var calendarmodal = new CalendarModal({
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
      id: create_if_block$6.name,
      type: "if",
      source: "(58:0) {#if calendarModalOpen && curEvent}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$c(ctx) {
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
    /*$$slots*/
    ctx[7].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[6], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block$5,
      then: create_then_block$5,
      catch: create_catch_block$5,
      value: 10
    };
    handle_promise(promise =
    /*getPageData*/
    ctx[0]("/data/events.json"), info);
    var if_block =
    /*calendarModalOpen*/
    ctx[3] &&
    /*curEvent*/
    ctx[1] && create_if_block$6(ctx);
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
        add_location(div0, file$c, 26, 8, 792);
        add_location(div1, file$c, 25, 4, 681);
        attr_dev(div2, "class", "page");
        add_location(div2, file$c, 23, 0, 638);
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

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        64) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[6], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[6], dirty, null));
        }

        info.ctx = ctx;

        if (dirty &
        /*getPageData*/
        1 && promise !== (promise =
        /*getPageData*/
        ctx[0]("/data/events.json")) && handle_promise(promise, info)) ; else {
          var child_ctx = ctx.slice();
          child_ctx[10] = info.resolved;
          info.block.p(child_ctx, dirty);
        }

        if (
        /*calendarModalOpen*/
        ctx[3] &&
        /*curEvent*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);
            transition_in(if_block, 1);
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
        if (detaching) detach_dev(t1);
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
    var getPageData = $$props.getPageData;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("SingleEvent", $$slots, ['default']);

    var click_handler = function click_handler(events) {
      openCalendarModal(events[eventIndex]);
    };

    function calendarmodal_calendarModalOpen_binding(value) {
      calendarModalOpen = value;
      $$invalidate(3, calendarModalOpen);
    }

    $$self.$set = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        onMount: onMount,
        CalendarModal: CalendarModal,
        getPageData: getPageData,
        months: months,
        curEvent: curEvent,
        eventIndex: eventIndex,
        calendarModalOpen: calendarModalOpen,
        openCalendarModal: openCalendarModal
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("getPageData" in $$props) $$invalidate(0, getPageData = $$props.getPageData);
      if ("months" in $$props) months = $$props.months;
      if ("curEvent" in $$props) $$invalidate(1, curEvent = $$props.curEvent);
      if ("eventIndex" in $$props) $$invalidate(2, eventIndex = $$props.eventIndex);
      if ("calendarModalOpen" in $$props) $$invalidate(3, calendarModalOpen = $$props.calendarModalOpen);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [getPageData, curEvent, eventIndex, calendarModalOpen, openCalendarModal, months, $$scope, $$slots, click_handler, calendarmodal_calendarModalOpen_binding];
  }

  var SingleEvent = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(SingleEvent, _SvelteComponentDev);

    function SingleEvent(options) {
      var _this;

      _classCallCheck(this, SingleEvent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleEvent).call(this, options));
      init(_assertThisInitialized(_this), options, instance$c, create_fragment$c, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "SingleEvent",
        options: options,
        id: create_fragment$c.name
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

  var file$d = "src\\views\\Article.svelte"; // (1:0) <script>      import {flyModified}

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
      source: "(1:0) <script>      import {flyModified}",
      ctx: ctx
    });
    return block;
  } // (21:12) {:then slides}


  function create_then_block$6(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (
      /*slides*/
      ctx[4] &&
      /*slides*/
      ctx[4].length) return create_if_block$7;
      return create_else_block$5;
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
      id: create_then_block$6.name,
      type: "then",
      source: "(21:12) {:then slides}",
      ctx: ctx
    });
    return block;
  } // (28:16) {:else}


  function create_else_block$5(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "Event not found.";
        add_location(li, file$d, 28, 20, 1074);
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
      id: create_else_block$5.name,
      type: "else",
      source: "(28:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (22:16) {#if slides && slides.length}


  function create_if_block$7(ctx) {
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
        add_location(img, file$d, 22, 20, 720);
        add_location(h2, file$d, 23, 20, 838);
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
      id: create_if_block$7.name,
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
        add_location(div, file$d, 25, 24, 956);
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
        add_location(img, file$d, 18, 20, 547);
        attr_dev(div, "class", "loader");
        add_location(div, file$d, 17, 16, 505);
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
      source: "(17:56)                   <div class='loader'>                      <img src='/icons/loading.svg' alt='loading content'>                  </div>              {:then slides}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$d(ctx) {
    var div2;
    var t;
    var div1;
    var div0;
    var promise;
    var div1_intro;
    var div1_outro;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[3].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[2], null);
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block$6,
      then: create_then_block$6,
      catch: create_catch_block$6,
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
        add_location(div0, file$d, 15, 8, 408);
        add_location(div1, file$d, 14, 4, 297);
        attr_dev(div2, "class", "page");
        add_location(div2, file$d, 12, 0, 254);
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

        if (default_slot && default_slot.p && dirty &
        /*$$scope*/
        4) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[2], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[2], dirty, null));
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
      id: create_fragment$d.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$d($$self, $$props, $$invalidate) {
    var getPageData = $$props.getPageData;
    var articleIndex;
    onMount(function () {
      $$invalidate(1, articleIndex = window.location.hash.split("/")[1]);
    });
    var writable_props = ["getPageData"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Article> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Article", $$slots, ['default']);

    $$self.$set = function ($$props) {
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

    return [getPageData, articleIndex, $$scope, $$slots];
  }

  var Article = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Article, _SvelteComponentDev);

    function Article(options) {
      var _this;

      _classCallCheck(this, Article);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Article).call(this, options));
      init(_assertThisInitialized(_this), options, instance$d, create_fragment$d, safe_not_equal, {
        getPageData: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Article",
        options: options,
        id: create_fragment$d.name
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

  var Object_1 = globals.Object,
      console_1$1 = globals.console;
  var file$e = "src\\App.svelte";

  function get_each_context$3(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[35] = list[i];
    child_ctx[37] = i;
    return child_ctx;
  } // (1:0) <script>     import {fly, fade, scale}


  function create_catch_block_1$1(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block_1$1.name,
      type: "catch",
      source: "(1:0) <script>     import {fly, fade, scale}",
      ctx: ctx
    });
    return block;
  } // (191:16) {:then embed}


  function create_then_block_1$1(ctx) {
    var show_if = new Date(
    /*embed*/
    ctx[38].date).getDate() >= new Date().getDate() - 7;
    var if_block_anchor;
    var if_block = show_if && create_if_block_5$1(ctx);
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
        if (show_if) if_block.p(ctx, dirty);
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block_1$1.name,
      type: "then",
      source: "(191:16) {:then embed}",
      ctx: ctx
    });
    return block;
  } // (192:20) {#if new Date(embed.date).getDate() >= new Date().getDate() - 7}


  function create_if_block_5$1(ctx) {
    var div1;
    var h2;
    var t0_value =
    /*embed*/
    ctx[38].title + "";
    var t0;
    var t1;
    var div0;
    var iframe;
    var iframe_title_value;
    var iframe_src_value;
    var block = {
      c: function create() {
        div1 = element("div");
        h2 = element("h2");
        t0 = text(t0_value);
        t1 = space();
        div0 = element("div");
        iframe = element("iframe");
        attr_dev(h2, "class", "svelte-trolnd");
        add_location(h2, file$e, 193, 28, 7506);
        attr_dev(iframe, "title", iframe_title_value =
        /*embed*/
        ctx[38].title);
        if (iframe.src !== (iframe_src_value =
        /*embed*/
        ctx[38].src)) attr_dev(iframe, "src", iframe_src_value);
        attr_dev(iframe, "width", "560");
        attr_dev(iframe, "height", "487");
        set_style(iframe, "border", "none");
        set_style(iframe, "overflow", "hidden");
        attr_dev(iframe, "scrolling", "no");
        attr_dev(iframe, "frameborder", "0");
        attr_dev(iframe, "allowtransparency", "true");
        attr_dev(iframe, "allow", "encrypted-media");
        iframe.allowFullscreen = "true";
        add_location(iframe, file$e, 195, 32, 7619);
        attr_dev(div0, "class", "embed-container");
        add_location(div0, file$e, 194, 28, 7557);
        attr_dev(div1, "class", "fp-video-container svelte-trolnd");
        add_location(div1, file$e, 192, 24, 7445);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, h2);
        append_dev(h2, t0);
        append_dev(div1, t1);
        append_dev(div1, div0);
        append_dev(div0, iframe);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_5$1.name,
      type: "if",
      source: "(192:20) {#if new Date(embed.date).getDate() >= new Date().getDate() - 7}",
      ctx: ctx
    });
    return block;
  } // (187:63)                      <div class='loader'>                         <img src='/icons/loading.svg' alt='loading content'>                     </div>                 {:then embed}


  function create_pending_block_1$1(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        attr_dev(img, "class", "svelte-trolnd");
        add_location(img, file$e, 188, 24, 7226);
        attr_dev(div, "class", "loader");
        add_location(div, file$e, 187, 20, 7181);
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
      id: create_pending_block_1$1.name,
      type: "pending",
      source: "(187:63)                      <div class='loader'>                         <img src='/icons/loading.svg' alt='loading content'>                     </div>                 {:then embed}",
      ctx: ctx
    });
    return block;
  } // (1:0) <script>     import {fly, fade, scale}


  function create_catch_block$7(ctx) {
    var block = {
      c: noop,
      m: noop,
      p: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_catch_block$7.name,
      type: "catch",
      source: "(1:0) <script>     import {fly, fade, scale}",
      ctx: ctx
    });
    return block;
  } // (213:20) {:then events}


  function create_then_block$7(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (
      /*events*/
      ctx[34] &&
      /*events*/
      ctx[34].length > 0) return create_if_block_2$3;
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
        if_block.p(ctx, dirty);
      },
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_then_block$7.name,
      type: "then",
      source: "(213:20) {:then events}",
      ctx: ctx
    });
    return block;
  } // (238:24) {:else}


  function create_else_block$6(ctx) {
    var li;
    var block = {
      c: function create() {
        li = element("li");
        li.textContent = "No events found.";
        add_location(li, file$e, 238, 28, 10191);
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
      source: "(238:24) {:else}",
      ctx: ctx
    });
    return block;
  } // (214:24) {#if events && events.length > 0}


  function create_if_block_2$3(ctx) {
    var t;
    var if_block_anchor;
    var each_value =
    /*events*/
    ctx[34].slice(0, 5);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    }

    var if_block =
    /*events*/
    ctx[34].length > 5 && create_if_block_3$1(ctx);
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
        /*openCalendarModal, months*/
        163840) {
          each_value =
          /*events*/
          ctx[34].slice(0, 5);
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$3(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$3(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(t.parentNode, t);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }

        if (
        /*events*/
        ctx[34].length > 5) if_block.p(ctx, dirty);
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
      id: create_if_block_2$3.name,
      type: "if",
      source: "(214:24) {#if events && events.length > 0}",
      ctx: ctx
    });
    return block;
  } // (216:32) {#if i == 0 || new Date(event.date).getMonth() != new Date(events[i-1].date).getMonth()}


  function create_if_block_4$1(ctx) {
    var h3;
    var t_value =
    /*months*/
    ctx[15][new Date(
    /*event*/
    ctx[35].date).getMonth()] + "";
    var t;
    var block = {
      c: function create() {
        h3 = element("h3");
        t = text(t_value);
        attr_dev(h3, "class", "svelte-trolnd");
        add_location(h3, file$e, 216, 36, 8837);
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
      source: "(216:32) {#if i == 0 || new Date(event.date).getMonth() != new Date(events[i-1].date).getMonth()}",
      ctx: ctx
    });
    return block;
  } // (215:28) {#each events.slice(0, 5) as event, i}


  function create_each_block$3(ctx) {
    var show_if =
    /*i*/
    ctx[37] == 0 || new Date(
    /*event*/
    ctx[35].date).getMonth() != new Date(
    /*events*/
    ctx[34][
    /*i*/
    ctx[37] - 1].date).getMonth();
    var t0;
    var li;
    var div0;
    var strong;
    var t1_value =
    /*event*/
    ctx[35].name + "";
    var t1;
    var t2;
    var t3_value = new Date(
    /*event*/
    ctx[35].date).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Chicago"
    }) + "";
    var t3;
    var t4;
    var div1;
    var raw_value =
    /*event*/
    ctx[35].description + "";
    var t5;
    var div2;
    var a0;
    var a0_href_value;
    var t7;
    var a1;
    var dispose;
    var if_block = show_if && create_if_block_4$1(ctx);

    function click_handler_2() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler_2*/
        (_ctx = ctx)[27].apply(_ctx, [
        /*event*/
        ctx[35]].concat(args))
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
        add_location(strong, file$e, 220, 40, 9066);
        attr_dev(div0, "class", "overflow-box");
        add_location(div0, file$e, 219, 36, 8999);
        attr_dev(div1, "class", "overflow-box");
        add_location(div1, file$e, 222, 36, 9297);
        attr_dev(a0, "href", a0_href_value = "#singleevent/" +
        /*i*/
        ctx[37]);
        attr_dev(a0, "class", "svelte-trolnd");
        add_location(a0, file$e, 226, 40, 9547);
        attr_dev(a1, "href", "#events/i");
        attr_dev(a1, "class", "svelte-trolnd");
        add_location(a1, file$e, 227, 40, 9632);
        attr_dev(div2, "class", "right-align event-links");
        add_location(div2, file$e, 225, 36, 9469);
        add_location(li, file$e, 218, 32, 8958);
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
        dispose = listen_dev(a1, "click", prevent_default(click_handler_2), false, true, false);
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (show_if) if_block.p(ctx, dirty);
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(li);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$3.name,
      type: "each",
      source: "(215:28) {#each events.slice(0, 5) as event, i}",
      ctx: ctx
    });
    return block;
  } // (233:28) {#if events.length > 5}


  function create_if_block_3$1(ctx) {
    var div;
    var a;
    var t0;
    var t1_value =
    /*events*/
    ctx[34].length + "";
    var t1;
    var t2;
    var block = {
      c: function create() {
        div = element("div");
        a = element("a");
        t0 = text("Show all ");
        t1 = text(t1_value);
        t2 = text(" events");
        attr_dev(a, "href", "#allevents");
        attr_dev(a, "class", "svelte-trolnd");
        add_location(a, file$e, 234, 36, 10001);
        attr_dev(div, "class", "centered eventBtn");
        add_location(div, file$e, 233, 32, 9933);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, a);
        append_dev(a, t0);
        append_dev(a, t1);
        append_dev(a, t2);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3$1.name,
      type: "if",
      source: "(233:28) {#if events.length > 5}",
      ctx: ctx
    });
    return block;
  } // (209:61)                          <div class='loader'>                             <img src='/icons/loading.svg' alt='loading content'>                         </div>                     {:then events}


  function create_pending_block$7(ctx) {
    var div;
    var img;
    var img_src_value;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        attr_dev(img, "class", "svelte-trolnd");
        add_location(img, file$e, 210, 28, 8436);
        attr_dev(div, "class", "loader");
        add_location(div, file$e, 209, 24, 8387);
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
      id: create_pending_block$7.name,
      type: "pending",
      source: "(209:61)                          <div class='loader'>                             <img src='/icons/loading.svg' alt='loading content'>                         </div>                     {:then events}",
      ctx: ctx
    });
    return block;
  } // (264:0) {#if subpageOpen}


  function create_if_block_1$6(ctx) {
    var div;
    var div_transition;
    var current;
    var switch_value =
    /*page*/
    ctx[16][
    /*curPage*/
    ctx[13]];

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
      var switch_instance = new switch_value(switch_props(ctx));
    }

    var block = {
      c: function create() {
        div = element("div");
        if (switch_instance) create_component(switch_instance.$$.fragment);
        attr_dev(div, "class", "subpage");
        add_location(div, file$e, 264, 4, 11493);
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
        28929 | dirty[1] &
        /*$$scope*/
        256) {
          switch_instance_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        if (switch_value !== (switch_value =
        /*page*/
        ctx[16][
        /*curPage*/
        ctx[13]])) {
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
      source: "(264:0) {#if subpageOpen}",
      ctx: ctx
    });
    return block;
  } // (266:8) <svelte:component this={page[curPage]} {getPageData}>


  function create_default_slot(ctx) {
    var div;
    var img;
    var img_src_value;
    var t;
    var updating_mobileOpen;
    var updating_curPage;
    var current;
    var dispose;

    function navigation_mobileOpen_binding_1(value) {
      /*navigation_mobileOpen_binding_1*/
      ctx[31].call(null, value);
    }

    function navigation_curPage_binding_1(value) {
      /*navigation_curPage_binding_1*/
      ctx[32].call(null, value);
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
    ctx[12] !== void 0) {
      navigation_props.mobileOpen =
      /*mobileOpen*/
      ctx[12];
    }

    if (
    /*curPage*/
    ctx[13] !== void 0) {
      navigation_props.curPage =
      /*curPage*/
      ctx[13];
    }

    var navigation = new Navigation({
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
        add_location(img, file$e, 266, 87, 11680);
        attr_dev(div, "href", "#home");
        attr_dev(div, "class", "back-arrow");
        add_location(div, file$e, 266, 12, 11605);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
        insert_dev(target, t, anchor);
        mount_component(navigation, target, anchor);
        current = true;
        dispose = listen_dev(div, "click",
        /*click_handler_3*/
        ctx[30], false, false, false);
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
        4096) {
          updating_mobileOpen = true;
          navigation_changes.mobileOpen =
          /*mobileOpen*/
          ctx[12];
          add_flush_callback(function () {
            return updating_mobileOpen = false;
          });
        }

        if (!updating_curPage && dirty[0] &
        /*curPage*/
        8192) {
          updating_curPage = true;
          navigation_changes.curPage =
          /*curPage*/
          ctx[13];
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
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_default_slot.name,
      type: "slot",
      source: "(266:8) <svelte:component this={page[curPage]} {getPageData}>",
      ctx: ctx
    });
    return block;
  } // (274:0) {#if calendarModalOpen && curEvent}


  function create_if_block$8(ctx) {
    var updating_calendarModalOpen;
    var current;

    function calendarmodal_calendarModalOpen_binding(value) {
      /*calendarmodal_calendarModalOpen_binding*/
      ctx[33].call(null, value);
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

    var calendarmodal = new CalendarModal({
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
      id: create_if_block$8.name,
      type: "if",
      source: "(274:0) {#if calendarModalOpen && curEvent}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$e(ctx) {
    var div26;
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
    var t16;
    var div14;
    var img2;
    var img2_src_value;
    var img2_style_value;
    var t17;
    var div13;
    var h30;
    var t19;
    var div10;
    var t21;
    var div11;
    var t23;
    var hr;
    var t24;
    var div12;
    var t26;
    var a3;
    var t28;
    var button0;
    var t30;
    var button1;
    var t32;
    var div25;
    var div18;
    var div17;
    var div16;
    var h20;
    var t34;
    var div15;
    var img3;
    var img3_src_value;
    var t35;
    var p0;
    var t37;
    var h31;
    var t38;
    var em;
    var t40;
    var p1;
    var t42;
    var promise;
    var t43;
    var div20;
    var img4;
    var img4_src_value;
    var img4_style_value;
    var t44;
    var div19;
    var h21;
    var t46;
    var ul;
    var promise_1;
    var t47;
    var div22;
    var div21;
    var a4;
    var img5;
    var img5_src_value;
    var span3;
    var span2;
    var t49;
    var a5;
    var img6;
    var img6_src_value;
    var span5;
    var span4;
    var t51;
    var a6;
    var img7;
    var img7_src_value;
    var span7;
    var span6;
    var t53;
    var a7;
    var img8;
    var img8_src_value;
    var span9;
    var span8;
    var t55;
    var updating_loveImage;
    var t56;
    var div24;
    var div23;
    var t60;
    var t61;
    var if_block1_anchor;
    var current;
    var dispose;

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
    ctx[12] !== void 0) {
      navigation_props.mobileOpen =
      /*mobileOpen*/
      ctx[12];
    }

    if (
    /*curPage*/
    ctx[13] !== void 0) {
      navigation_props.curPage =
      /*curPage*/
      ctx[13];
    }

    var navigation = new Navigation({
      props: navigation_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(navigation, "mobileOpen", navigation_mobileOpen_binding);
    });
    binding_callbacks.push(function () {
      return bind(navigation, "curPage", navigation_curPage_binding);
    });
    var slideshow = new Slideshow({
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
    var info = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block_1$1,
      then: create_then_block_1$1,
      catch: create_catch_block_1$1,
      value: 38
    };
    handle_promise(promise = getPageData("/data/latestsermon.json"), info);
    var info_1 = {
      ctx: ctx,
      current: null,
      token: null,
      pending: create_pending_block$7,
      then: create_then_block$7,
      catch: create_catch_block$7,
      value: 34
    };
    handle_promise(promise_1 = getPageData("/data/events.json"), info_1);

    function lovebox_loveImage_binding(value) {
      /*lovebox_loveImage_binding*/
      ctx[28].call(null, value);
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

    var lovebox = new LoveBox({
      props: lovebox_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(lovebox, "loveImage", lovebox_loveImage_binding);
    });
    var if_block0 =
    /*subpageOpen*/
    ctx[14] && create_if_block_1$6(ctx);
    var if_block1 =
    /*calendarModalOpen*/
    ctx[6] &&
    /*curEvent*/
    ctx[7] && create_if_block$8(ctx);
    var block = {
      c: function create() {
        div26 = element("div");
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
        span0.textContent = "Disciples of Christ";
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
        img2 = element("img");
        t17 = space();
        div13 = element("div");
        h30 = element("h3");
        h30.textContent = "Sunday Worship";
        t19 = space();
        div10 = element("div");
        div10.textContent = "Contemporary: 8:30am";
        t21 = space();
        div11 = element("div");
        div11.textContent = "Traditional: 11am";
        t23 = space();
        hr = element("hr");
        t24 = space();
        div12 = element("div");
        div12.textContent = "All-ages Sunday School Classes: 9:30am";
        t26 = space();
        a3 = element("a");
        a3.textContent = "Give online";
        t28 = space();
        button0 = element("button");
        button0.textContent = "Give Online";
        t30 = space();
        button1 = element("button");
        button1.textContent = "Learn More";
        t32 = space();
        div25 = element("div");
        div18 = element("div");
        div17 = element("div");
        div16 = element("div");
        h20 = element("h2");
        h20.textContent = "What's going on now at FCC Galesburg?";
        t34 = space();
        div15 = element("div");
        img3 = element("img");
        t35 = space();
        p0 = element("p");
        p0.textContent = "Our building of our church is currently closed due to the COVID 19 virus. But the church is alive and connected through our worship virtually. Join us in worship by clicking the accompanying video.";
        t37 = space();
        h31 = element("h3");
        t38 = text("Sermon Series: ");
        em = element("em");
        em.textContent = "Shelter";
        t40 = space();
        p1 = element("p");
        p1.textContent = "As we shelter at home, we are claiming that shelter we have in God – our refuge and strength. Our sermon series focuses on the book of Psalms, looking at those seasons of life we go through and how God is our shelter throughout them all.";
        t42 = space();
        info.block.c();
        t43 = space();
        div20 = element("div");
        img4 = element("img");
        t44 = space();
        div19 = element("div");
        h21 = element("h2");
        h21.textContent = "Upcoming Events at FCC";
        t46 = space();
        ul = element("ul");
        info_1.block.c();
        t47 = space();
        div22 = element("div");
        div21 = element("div");
        a4 = element("a");
        img5 = element("img");
        span3 = element("span");
        span2 = element("span");
        span2.textContent = "Staff";
        t49 = space();
        a5 = element("a");
        img6 = element("img");
        span5 = element("span");
        span4 = element("span");
        span4.textContent = "Sermons";
        t51 = space();
        a6 = element("a");
        img7 = element("img");
        span7 = element("span");
        span6 = element("span");
        span6.textContent = "Newsletters";
        t53 = space();
        a7 = element("a");
        img8 = element("img");
        span9 = element("span");
        span8 = element("span");
        span8.textContent = "Facebook";
        t55 = space();
        create_component(lovebox.$$.fragment);
        t56 = space();
        div24 = element("div");
        div23 = element("div");
        div23.textContent = "\xA9 ".concat(new Date().getFullYear(), " First Christian Church, Disciples of Christ - Galesburg, IL");
        t60 = space();
        if (if_block0) if_block0.c();
        t61 = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
        attr_dev(div0, "class", "accent-angle svelte-trolnd");
        add_location(div0, file$e, 124, 8, 3588);
        if (img0.src !== (img0_src_value = "/icons/chalice.svg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "Disciples of Christ chalice logo");
        attr_dev(img0, "class", "primary-img svelte-trolnd");
        add_location(img0, file$e, 128, 12, 3733);
        if (img1.src !== (img1_src_value = "/icons/chalice.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Disciples of Christ chalice logo");
        attr_dev(img1, "class", "primary-img-mobile svelte-trolnd");
        add_location(img1, file$e, 131, 20, 3926);
        attr_dev(span0, "class", "smaller svelte-trolnd");
        add_location(span0, file$e, 133, 51, 4101);
        attr_dev(h1, "class", "svelte-trolnd");
        add_location(h1, file$e, 133, 24, 4074);
        add_location(span1, file$e, 132, 20, 4043);
        attr_dev(div1, "class", "logo svelte-trolnd");
        add_location(div1, file$e, 130, 16, 3887);
        attr_dev(div2, "class", "mt");
        add_location(div2, file$e, 138, 20, 4279);
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href", "tel:1-309-343-9960");
        add_location(a0, file$e, 140, 24, 4387);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href", "mailto:fccgalesburg@gmail.com");
        add_location(a1, file$e, 141, 24, 4476);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        add_location(a2, file$e, 142, 24, 4572);
        add_location(div3, file$e, 139, 20, 4357);
        attr_dev(div4, "class", "contact-links svelte-trolnd");
        add_location(div4, file$e, 137, 16, 4231);
        attr_dev(div5, "class", "mobile-formatting-div svelte-trolnd");
        add_location(div5, file$e, 129, 12, 3835);
        attr_dev(div6, "class", "header svelte-trolnd");
        add_location(div6, file$e, 127, 8, 3681);
        attr_dev(div7, "class", "forefront-content svelte-trolnd");
        add_location(div7, file$e, 121, 4, 3484);
        attr_dev(div8, "class", "inner svelte-trolnd");
        add_location(div8, file$e, 151, 8, 5029);
        attr_dev(div9, "class", "decorative-bottom-angle svelte-trolnd");
        add_location(div9, file$e, 150, 4, 4983);
        attr_dev(img2, "class", "bg svelte-trolnd");
        if (img2.src !== (img2_src_value = "/primary-images/worshipservice.jpg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "");
        attr_dev(img2, "style", img2_style_value = "transform: translateY(-25%) translateY(" +
        /*infoTop*/
        ctx[11] / 5 + "px);");
        add_location(img2, file$e, 159, 8, 5249);
        attr_dev(h30, "class", "svelte-trolnd");
        add_location(h30, file$e, 161, 12, 5458);
        add_location(div10, file$e, 162, 12, 5494);
        add_location(div11, file$e, 163, 12, 5538);
        attr_dev(hr, "class", "svelte-trolnd");
        add_location(hr, file$e, 164, 12, 5579);
        attr_dev(div12, "class", "ss-classes");
        add_location(div12, file$e, 165, 12, 5596);
        attr_dev(div13, "class", "worship-times svelte-trolnd");
        add_location(div13, file$e, 160, 8, 5418);
        attr_dev(a3, "id", "giveonline");
        attr_dev(a3, "target", "_blank");
        set_style(a3, "display", "none");
        attr_dev(a3, "href", "https://tithe.ly/give?c=1478951");
        add_location(a3, file$e, 167, 8, 5688);
        attr_dev(button0, "class", "red");
        add_location(button0, file$e, 168, 8, 5808);
        attr_dev(button1, "class", "not-mobile svelte-trolnd");
        add_location(button1, file$e, 169, 8, 5922);
        attr_dev(div14, "class", "infobox svelte-trolnd");
        add_location(div14, file$e, 158, 4, 5219);
        attr_dev(h20, "class", "svelte-trolnd");
        add_location(h20, file$e, 177, 20, 6293);
        attr_dev(img3, "alt", "Shelter theme slide");
        if (img3.src !== (img3_src_value = "/uploads/events/shelter.jpg")) attr_dev(img3, "src", img3_src_value);
        attr_dev(img3, "class", "svelte-trolnd");
        add_location(img3, file$e, 179, 24, 6413);
        add_location(p0, file$e, 180, 24, 6503);
        add_location(em, file$e, 181, 43, 6751);
        add_location(h31, file$e, 181, 24, 6732);
        add_location(p1, file$e, 182, 24, 6797);
        attr_dev(div15, "class", "current-events");
        add_location(div15, file$e, 178, 20, 6360);
        attr_dev(div16, "class", "box svelte-trolnd");
        add_location(div16, file$e, 176, 16, 6255);
        attr_dev(div17, "class", "inner svelte-trolnd");
        add_location(div17, file$e, 175, 12, 6219);
        attr_dev(div18, "class", "content svelte-trolnd");
        attr_dev(div18, "id", "current");
        add_location(div18, file$e, 174, 8, 6172);
        attr_dev(img4, "class", "bg svelte-trolnd");
        if (img4.src !== (img4_src_value = "/primary-images/church.jpg")) attr_dev(img4, "src", img4_src_value);
        attr_dev(img4, "alt", "");
        attr_dev(img4, "style", img4_style_value = "transform: translateY(-25%) translateY(" +
        /*eventsTop*/
        ctx[9] / 5 + "px);");
        add_location(img4, file$e, 204, 12, 8046);
        attr_dev(h21, "class", "svelte-trolnd");
        add_location(h21, file$e, 206, 16, 8248);
        add_location(ul, file$e, 207, 16, 8296);
        attr_dev(div19, "class", "inner svelte-trolnd");
        add_location(div19, file$e, 205, 12, 8212);
        attr_dev(div20, "class", "events svelte-trolnd");
        attr_dev(div20, "id", "events");
        add_location(div20, file$e, 203, 8, 8001);
        if (img5.src !== (img5_src_value = "/icons/staff.svg")) attr_dev(img5, "src", img5_src_value);
        attr_dev(img5, "alt", "Staff");
        attr_dev(img5, "class", "svelte-trolnd");
        add_location(img5, file$e, 247, 33, 10435);
        attr_dev(span2, "class", "inner svelte-trolnd");
        add_location(span2, file$e, 247, 97, 10499);
        attr_dev(span3, "class", "linklabel svelte-trolnd");
        add_location(span3, file$e, 247, 73, 10475);
        attr_dev(a4, "href", "#staff");
        attr_dev(a4, "class", "svelte-trolnd");
        add_location(a4, file$e, 247, 16, 10418);
        if (img6.src !== (img6_src_value = "/icons/sermons.svg")) attr_dev(img6, "src", img6_src_value);
        attr_dev(img6, "alt", "Sermons");
        attr_dev(img6, "class", "svelte-trolnd");
        add_location(img6, file$e, 248, 35, 10578);
        attr_dev(span4, "class", "inner svelte-trolnd");
        add_location(span4, file$e, 248, 103, 10646);
        attr_dev(span5, "class", "linklabel svelte-trolnd");
        add_location(span5, file$e, 248, 79, 10622);
        attr_dev(a5, "href", "#sermons");
        attr_dev(a5, "class", "svelte-trolnd");
        add_location(a5, file$e, 248, 16, 10559);
        if (img7.src !== (img7_src_value = "/icons/newsletters.svg")) attr_dev(img7, "src", img7_src_value);
        attr_dev(img7, "alt", "Newsletters");
        attr_dev(img7, "class", "svelte-trolnd");
        add_location(img7, file$e, 249, 39, 10731);
        attr_dev(span6, "class", "inner svelte-trolnd");
        add_location(span6, file$e, 249, 115, 10807);
        attr_dev(span7, "class", "linklabel svelte-trolnd");
        add_location(span7, file$e, 249, 91, 10783);
        attr_dev(a6, "href", "#newsletters");
        attr_dev(a6, "class", "svelte-trolnd");
        add_location(a6, file$e, 249, 16, 10708);
        if (img8.src !== (img8_src_value = "/icons/facebooklogo.svg")) attr_dev(img8, "src", img8_src_value);
        attr_dev(img8, "alt", "Facebook");
        attr_dev(img8, "class", "svelte-trolnd");
        add_location(img8, file$e, 250, 146, 11003);
        attr_dev(span8, "class", "inner svelte-trolnd");
        add_location(span8, file$e, 250, 220, 11077);
        attr_dev(span9, "class", "linklabel svelte-trolnd");
        add_location(span9, file$e, 250, 196, 11053);
        attr_dev(a7, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        attr_dev(a7, "target", "_blank");
        attr_dev(a7, "class", "svelte-trolnd");
        add_location(a7, file$e, 250, 16, 10873);
        attr_dev(div21, "class", "inner svelte-trolnd");
        add_location(div21, file$e, 246, 12, 10382);
        attr_dev(div22, "class", "quicklinks svelte-trolnd");
        add_location(div22, file$e, 245, 8, 10345);
        attr_dev(div23, "class", "copy svelte-trolnd");
        add_location(div23, file$e, 257, 12, 11267);
        attr_dev(div24, "class", "footer svelte-trolnd");
        add_location(div24, file$e, 256, 8, 11234);
        attr_dev(div25, "class", "frontpage-content svelte-trolnd");
        set_style(div25, "transform", "translateY(100vh)");
        set_style(div25, "top", "-" +
        /*navheight*/
        ctx[5] + "px");
        add_location(div25, file$e, 173, 4, 6073);
        attr_dev(div26, "class", "main");
        add_location(div26, file$e, 116, 0, 3282);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div26, anchor);
        mount_component(navigation, div26, null);
        append_dev(div26, t0);
        append_dev(div26, div7);
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
        append_dev(div26, t14);
        append_dev(div26, div9);
        append_dev(div9, div8);
        append_dev(div26, t15);
        mount_component(slideshow, div26, null);
        append_dev(div26, t16);
        append_dev(div26, div14);
        append_dev(div14, img2);
        /*img2_binding*/

        ctx[23](img2);
        append_dev(div14, t17);
        append_dev(div14, div13);
        append_dev(div13, h30);
        append_dev(div13, t19);
        append_dev(div13, div10);
        append_dev(div13, t21);
        append_dev(div13, div11);
        append_dev(div13, t23);
        append_dev(div13, hr);
        append_dev(div13, t24);
        append_dev(div13, div12);
        append_dev(div14, t26);
        append_dev(div14, a3);
        append_dev(div14, t28);
        append_dev(div14, button0);
        append_dev(div14, t30);
        append_dev(div14, button1);
        append_dev(div26, t32);
        append_dev(div26, div25);
        append_dev(div25, div18);
        append_dev(div18, div17);
        append_dev(div17, div16);
        append_dev(div16, h20);
        append_dev(div16, t34);
        append_dev(div16, div15);
        append_dev(div15, img3);
        append_dev(div15, t35);
        append_dev(div15, p0);
        append_dev(div15, t37);
        append_dev(div15, h31);
        append_dev(h31, t38);
        append_dev(h31, em);
        append_dev(div15, t40);
        append_dev(div15, p1);
        append_dev(div17, t42);
        info.block.m(div17, info.anchor = null);

        info.mount = function () {
          return div17;
        };

        info.anchor = null;
        append_dev(div25, t43);
        append_dev(div25, div20);
        append_dev(div20, img4);
        /*img4_binding*/

        ctx[26](img4);
        append_dev(div20, t44);
        append_dev(div20, div19);
        append_dev(div19, h21);
        append_dev(div19, t46);
        append_dev(div19, ul);
        info_1.block.m(ul, info_1.anchor = null);

        info_1.mount = function () {
          return ul;
        };

        info_1.anchor = null;
        append_dev(div25, t47);
        append_dev(div25, div22);
        append_dev(div22, div21);
        append_dev(div21, a4);
        append_dev(a4, img5);
        append_dev(a4, span3);
        append_dev(span3, span2);
        append_dev(div21, t49);
        append_dev(div21, a5);
        append_dev(a5, img6);
        append_dev(a5, span5);
        append_dev(span5, span4);
        append_dev(div21, t51);
        append_dev(div21, a6);
        append_dev(a6, img7);
        append_dev(a6, span7);
        append_dev(span7, span6);
        append_dev(div21, t53);
        append_dev(div21, a7);
        append_dev(a7, img8);
        append_dev(a7, span9);
        append_dev(span9, span8);
        append_dev(div25, t55);
        mount_component(lovebox, div25, null);
        append_dev(div25, t56);
        append_dev(div25, div24);
        append_dev(div24, div23);
        /*div26_binding*/

        ctx[29](div26);
        insert_dev(target, t60, anchor);
        if (if_block0) if_block0.m(target, anchor);
        insert_dev(target, t61, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert_dev(target, if_block1_anchor, anchor);
        current = true;
        dispose = [listen_dev(button0, "click",
        /*click_handler*/
        ctx[24], false, false, false), listen_dev(button1, "click",
        /*click_handler_1*/
        ctx[25], false, false, false)];
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
        4096) {
          updating_mobileOpen = true;
          navigation_changes.mobileOpen =
          /*mobileOpen*/
          ctx[12];
          add_flush_callback(function () {
            return updating_mobileOpen = false;
          });
        }

        if (!updating_curPage && dirty[0] &
        /*curPage*/
        8192) {
          updating_curPage = true;
          navigation_changes.curPage =
          /*curPage*/
          ctx[13];
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

        if (!current || dirty[0] &
        /*infoTop*/
        2048 && img2_style_value !== (img2_style_value = "transform: translateY(-25%) translateY(" +
        /*infoTop*/
        ctx[11] / 5 + "px);")) {
          attr_dev(img2, "style", img2_style_value);
        }

        {
          var child_ctx = ctx.slice();
          child_ctx[38] = info.resolved;
          info.block.p(child_ctx, dirty);
        }

        if (!current || dirty[0] &
        /*eventsTop*/
        512 && img4_style_value !== (img4_style_value = "transform: translateY(-25%) translateY(" +
        /*eventsTop*/
        ctx[9] / 5 + "px);")) {
          attr_dev(img4, "style", img4_style_value);
        }

        {
          var _child_ctx = ctx.slice();

          _child_ctx[34] = info_1.resolved;
          info_1.block.p(_child_ctx, dirty);
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
        32) {
          set_style(div25, "top", "-" +
          /*navheight*/
          ctx[5] + "px");
        }

        if (
        /*subpageOpen*/
        ctx[14]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
            transition_in(if_block0, 1);
          } else {
            if_block0 = create_if_block_1$6(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t61.parentNode, t61);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, function () {
            if_block0 = null;
          });
          check_outros();
        }

        if (
        /*calendarModalOpen*/
        ctx[6] &&
        /*curEvent*/
        ctx[7]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
            transition_in(if_block1, 1);
          } else {
            if_block1 = create_if_block$8(ctx);
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
        transition_in(navigation.$$.fragment, local);
        transition_in(slideshow.$$.fragment, local);
        transition_in(lovebox.$$.fragment, local);
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(navigation.$$.fragment, local);
        transition_out(slideshow.$$.fragment, local);
        transition_out(lovebox.$$.fragment, local);
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div26);
        destroy_component(navigation);
        /*div6_binding*/

        ctx[22](null);
        destroy_component(slideshow);
        /*img2_binding*/

        ctx[23](null);
        info.block.d();
        info.token = null;
        info = null;
        /*img4_binding*/

        ctx[26](null);
        info_1.block.d();
        info_1.token = null;
        info_1 = null;
        destroy_component(lovebox);
        /*div26_binding*/

        ctx[29](null);
        if (detaching) detach_dev(t60);
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach_dev(t61);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach_dev(if_block1_anchor);
        run_all(dispose);
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

  function instance$e($$self, $$props, $$invalidate) {
    var main;
    var header;
    var eventsImage;
    var loveImage;
    var infoboxImage;
    var angle;
    var navheight = 0; //Calendar modal data

    var calendarModalOpen = false;
    var curEvent; //Scroll positions

    var scrollTop = 0;
    var eventsTop = 0;
    var loveTop = 0;
    var infoTop = 0;
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
      "#sermons": Sermons
    };
    var curPage = "";

    function openCalendarModal(event) {
      $$invalidate(7, curEvent = event);
      $$invalidate(6, calendarModalOpen = true);
    }

    window.onhashchange = function () {
      if (Object.keys(page).includes(window.location.hash.split("/")[0])) {
        $$invalidate(13, curPage = window.location.hash.split("/")[0]);
        $$invalidate(12, mobileOpen = false);
      } else {
        setTimeout(function () {
          window.location.hash = curPage;
        }, 1000);
      }
    };

    onMount(function () {
      if (Object.keys(page).includes(window.location.hash.split("/")[0])) $$invalidate(13, curPage = window.location.hash.split("/")[0]);else window.location.hash = curPage;
      main.addEventListener("scroll", function (e) {
        $$invalidate(8, scrollTop = e.target.scrollTop);
        $$invalidate(9, eventsTop = eventsImage.getBoundingClientRect().top);
        $$invalidate(10, loveTop = loveImage.getBoundingClientRect().top);
        $$invalidate(11, infoTop = infoboxImage.getBoundingClientRect().top);
      });
      $$invalidate(5, navheight = document.querySelector("nav").offsetHeight);
    });
    var writable_props = [];
    Object_1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn("<App> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("App", $$slots, []);

    function navigation_mobileOpen_binding(value) {
      mobileOpen = value;
      $$invalidate(12, mobileOpen);
    }

    function navigation_curPage_binding(value) {
      curPage = value;
      $$invalidate(13, curPage);
    }

    function div6_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(1, header = $$value);
      });
    }

    function img2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(4, infoboxImage = $$value);
      });
    }

    var click_handler = function click_handler() {
      document.getElementById("giveonline").click();
    };

    var click_handler_1 = function click_handler_1() {
      window.location.hash = "#current";
    };

    function img4_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(2, eventsImage = $$value);
      });
    }

    var click_handler_2 = function click_handler_2(event) {
      openCalendarModal(event);
    };

    function lovebox_loveImage_binding(value) {
      loveImage = value;
      $$invalidate(3, loveImage);
    }

    function div26_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(0, main = $$value);
      });
    }

    var click_handler_3 = function click_handler_3() {
      return window.history.back();
    };

    function navigation_mobileOpen_binding_1(value) {
      mobileOpen = value;
      $$invalidate(12, mobileOpen);
    }

    function navigation_curPage_binding_1(value) {
      curPage = value;
      $$invalidate(13, curPage);
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
        About: About,
        Staff: Staff,
        Links: Links,
        Sermons: Sermons,
        Newsletters: Newsletters,
        AllEvents: AllEvents,
        SingleEvent: SingleEvent,
        Article: Article,
        main: main,
        header: header,
        eventsImage: eventsImage,
        loveImage: loveImage,
        infoboxImage: infoboxImage,
        angle: angle,
        navheight: navheight,
        calendarModalOpen: calendarModalOpen,
        curEvent: curEvent,
        scrollTop: scrollTop,
        eventsTop: eventsTop,
        loveTop: loveTop,
        infoTop: infoTop,
        angleTop: angleTop,
        months: months,
        mobileOpen: mobileOpen,
        page: page,
        curPage: curPage,
        getPageData: getPageData,
        showAllEvents: showAllEvents,
        openCalendarModal: openCalendarModal,
        subpageOpen: subpageOpen
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("main" in $$props) $$invalidate(0, main = $$props.main);
      if ("header" in $$props) $$invalidate(1, header = $$props.header);
      if ("eventsImage" in $$props) $$invalidate(2, eventsImage = $$props.eventsImage);
      if ("loveImage" in $$props) $$invalidate(3, loveImage = $$props.loveImage);
      if ("infoboxImage" in $$props) $$invalidate(4, infoboxImage = $$props.infoboxImage);
      if ("angle" in $$props) angle = $$props.angle;
      if ("navheight" in $$props) $$invalidate(5, navheight = $$props.navheight);
      if ("calendarModalOpen" in $$props) $$invalidate(6, calendarModalOpen = $$props.calendarModalOpen);
      if ("curEvent" in $$props) $$invalidate(7, curEvent = $$props.curEvent);
      if ("scrollTop" in $$props) $$invalidate(8, scrollTop = $$props.scrollTop);
      if ("eventsTop" in $$props) $$invalidate(9, eventsTop = $$props.eventsTop);
      if ("loveTop" in $$props) $$invalidate(10, loveTop = $$props.loveTop);
      if ("infoTop" in $$props) $$invalidate(11, infoTop = $$props.infoTop);
      if ("angleTop" in $$props) angleTop = $$props.angleTop;
      if ("months" in $$props) $$invalidate(15, months = $$props.months);
      if ("mobileOpen" in $$props) $$invalidate(12, mobileOpen = $$props.mobileOpen);
      if ("page" in $$props) $$invalidate(16, page = $$props.page);
      if ("curPage" in $$props) $$invalidate(13, curPage = $$props.curPage);
      if ("subpageOpen" in $$props) $$invalidate(14, subpageOpen = $$props.subpageOpen);
    };

    var subpageOpen;

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty[0] &
      /*curPage*/
      8192) {
         $$invalidate(14, subpageOpen = curPage && curPage != "#home" ? true : false);
      }
    };

    return [main, header, eventsImage, loveImage, infoboxImage, navheight, calendarModalOpen, curEvent, scrollTop, eventsTop, loveTop, infoTop, mobileOpen, curPage, subpageOpen, months, page, openCalendarModal, angle, angleTop, navigation_mobileOpen_binding, navigation_curPage_binding, div6_binding, img2_binding, click_handler, click_handler_1, img4_binding, click_handler_2, lovebox_loveImage_binding, div26_binding, click_handler_3, navigation_mobileOpen_binding_1, navigation_curPage_binding_1, calendarmodal_calendarModalOpen_binding];
  }

  var App = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(App, _SvelteComponentDev);

    function App(options) {
      var _this;

      _classCallCheck(this, App);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, options));
      init(_assertThisInitialized(_this), options, instance$e, create_fragment$e, safe_not_equal, {}, [-1, -1]);
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "App",
        options: options,
        id: create_fragment$e.name
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
