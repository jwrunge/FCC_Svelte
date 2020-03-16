
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
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

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function set_custom_element_data(node, prop, value) {
    if (prop in node) {
      node[prop] = value;
    } else {
      attr(node, prop, value);
    }
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

  var file = "src\\components\\Navigation.svelte"; // (18:4) {:else}

  function create_else_block(ctx) {
    var div;
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "✖";
        attr_dev(div, "class", "mobile-menu-close svelte-1a18ujp");
        add_location(div, file, 18, 8, 529);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        dispose = listen_dev(div, "click",
        /*click_handler_1*/
        ctx[3], false, false, false);
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
      source: "(18:4) {:else}",
      ctx: ctx
    });
    return block;
  } // (16:4) {#if mobileOpen}


  function create_if_block(ctx) {
    var div;
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        div.textContent = "☰";
        attr_dev(div, "class", "mobile-menu-open svelte-1a18ujp");
        add_location(div, file, 16, 8, 427);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        dispose = listen_dev(div, "click",
        /*click_handler*/
        ctx[2], false, false, false);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(16:4) {#if mobileOpen}",
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

    function select_block_type(ctx, dirty) {
      if (
      /*mobileOpen*/
      ctx[0]) return create_if_block;
      return create_else_block;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
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
        a3.textContent = "Education";
        t7 = space();
        a4 = element("a");
        a4.textContent = "Resources";
        t9 = space();
        if_block.c();
        attr_dev(a0, "href", "#home");
        attr_dev(a0, "class", "svelte-1a18ujp");
        add_location(a0, file, 9, 8, 195);
        attr_dev(a1, "href", "#about");
        attr_dev(a1, "class", "svelte-1a18ujp");
        add_location(a1, file, 10, 8, 229);
        attr_dev(a2, "href", "#worship");
        attr_dev(a2, "class", "svelte-1a18ujp");
        add_location(a2, file, 11, 8, 268);
        attr_dev(a3, "href", "#learn");
        attr_dev(a3, "class", "svelte-1a18ujp");
        add_location(a3, file, 12, 8, 308);
        attr_dev(a4, "href", "#resources");
        attr_dev(a4, "class", "svelte-1a18ujp");
        add_location(a4, file, 13, 8, 348);
        attr_dev(span, "class", "nav-links svelte-1a18ujp");
        toggle_class(span, "shown",
        /*mobileOpen*/
        ctx[0]);
        add_location(span, file, 8, 4, 136);
        attr_dev(nav, "class", "svelte-1a18ujp");
        toggle_class(nav, "subpageStyle",
        /*subpageStyle*/
        ctx[1]);
        add_location(nav, file, 7, 0, 91);
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
        if_block.m(nav, null);
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*mobileOpen*/
        1) {
          toggle_class(span, "shown",
          /*mobileOpen*/
          ctx[0]);
        }

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(nav, null);
          }
        }

        if (dirty &
        /*subpageStyle*/
        2) {
          toggle_class(nav, "subpageStyle",
          /*subpageStyle*/
          ctx[1]);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(nav);
        if_block.d();
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
    var writable_props = ["mobileOpen", "subpageStyle"];
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
      $$invalidate(0, mobileOpen = false);
    };

    $$self.$set = function ($$props) {
      if ("mobileOpen" in $$props) $$invalidate(0, mobileOpen = $$props.mobileOpen);
      if ("subpageStyle" in $$props) $$invalidate(1, subpageStyle = $$props.subpageStyle);
    };

    $$self.$capture_state = function () {
      return {
        mobileOpen: mobileOpen,
        subpageStyle: subpageStyle
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("mobileOpen" in $$props) $$invalidate(0, mobileOpen = $$props.mobileOpen);
      if ("subpageStyle" in $$props) $$invalidate(1, subpageStyle = $$props.subpageStyle);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [mobileOpen, subpageStyle, click_handler, click_handler_1];
  }

  var Navigation = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Navigation, _SvelteComponentDev);

    function Navigation(options) {
      var _this;

      _classCallCheck(this, Navigation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this, options));
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        mobileOpen: 0,
        subpageStyle: 1
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
    }]);

    return Navigation;
  }(SvelteComponentDev);

  var file$1 = "src\\components\\Slideshow.svelte";

  function create_fragment$1(ctx) {
    var scrolling = false;

    var clear_scrolling = function clear_scrolling() {
      scrolling = false;
    };

    var scrolling_timeout;
    var div;
    var img;
    var img_src_value;
    var dispose;
    add_render_callback(
    /*onwindowscroll*/
    ctx[1]);
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        attr_dev(img, "class", "slideshow svelte-116sjr1");
        if (img.src !== (img_src_value = "/background-slides/band.jpg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        set_style(img, "transform", "translate(0, " +
        /*y*/
        ctx[0] / 5 + "px)");
        add_location(img, file$1, 7, 4, 108);
        attr_dev(div, "class", "slideshow-wrapper svelte-116sjr1");
        add_location(div, file$1, 6, 0, 71);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
        dispose = listen_dev(window, "scroll", function () {
          scrolling = true;
          clearTimeout(scrolling_timeout);
          scrolling_timeout = setTimeout(clear_scrolling, 100);
          /*onwindowscroll*/

          ctx[1]();
        });
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*y*/
        1 && !scrolling) {
          scrolling = true;
          clearTimeout(scrolling_timeout);
          scrollTo(window.pageXOffset,
          /*y*/
          ctx[0]);
          scrolling_timeout = setTimeout(clear_scrolling, 100);
        }

        if (dirty &
        /*y*/
        1) {
          set_style(img, "transform", "translate(0, " +
          /*y*/
          ctx[0] / 5 + "px)");
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
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

  function instance$1($$self, $$props, $$invalidate) {
    var y;
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Slideshow> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Slideshow", $$slots, []);

    function onwindowscroll() {
      $$invalidate(0, y = window.pageYOffset);
    }

    $$self.$capture_state = function () {
      return {
        y: y
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("y" in $$props) $$invalidate(0, y = $$props.y);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [y, onwindowscroll];
  }

  var Slideshow = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Slideshow, _SvelteComponentDev);

    function Slideshow(options) {
      var _this;

      _classCallCheck(this, Slideshow);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Slideshow).call(this, options));
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Slideshow",
        options: options,
        id: create_fragment$1.name
      });
      return _this;
    }

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
        attr_dev(feFlood, "id", "feFlood1014");
        add_location(feFlood, file$2, 24, 8, 836);
        attr_dev(feComposite0, "in", "flood");
        attr_dev(feComposite0, "in2", "SourceGraphic");
        attr_dev(feComposite0, "operator", "in");
        attr_dev(feComposite0, "result", "composite1");
        attr_dev(feComposite0, "id", "feComposite1016");
        add_location(feComposite0, file$2, 29, 8, 991);
        attr_dev(feGaussianBlur, "in", "composite1");
        attr_dev(feGaussianBlur, "stdDeviation", "2");
        attr_dev(feGaussianBlur, "result", "blur");
        attr_dev(feGaussianBlur, "id", "feGaussianBlur1018");
        add_location(feGaussianBlur, file$2, 35, 8, 1167);
        attr_dev(feOffset, "dx", "1.1");
        attr_dev(feOffset, "dy", "0");
        attr_dev(feOffset, "result", "offset");
        attr_dev(feOffset, "id", "feOffset1020");
        add_location(feOffset, file$2, 40, 8, 1318);
        attr_dev(feComposite1, "in", "SourceGraphic");
        attr_dev(feComposite1, "in2", "offset");
        attr_dev(feComposite1, "operator", "over");
        attr_dev(feComposite1, "result", "composite2");
        attr_dev(feComposite1, "id", "feComposite1022");
        add_location(feComposite1, file$2, 45, 8, 1442);
        set_style(filter, "color-interpolation-filters", "sRGB");
        attr_dev(filter, "id", "filter1024");
        attr_dev(filter, "x", "0");
        attr_dev(filter, "y", "0");
        attr_dev(filter, "width", "1.03");
        attr_dev(filter, "height", "1");
        add_location(filter, file$2, 17, 8, 671);
        attr_dev(path0, "id", "redline");
        attr_dev(path0, "d", "M 5,58.099995 H 212.73571 L -6.4439273,533.18645 1.8250001,243.55417 Z");
        attr_dev(path0, "class", "svelte-dshwe2");
        add_location(path0, file$2, 58, 12, 1838);
        set_style(g0, "filter", "url(#filter1024)");
        attr_dev(g0, "transform", "translate(2.1699857,-262.90504)");
        add_location(g0, file$2, 55, 8, 1719);
        attr_dev(path1, "d", "M -7.3003981,-203.40833 218.39583,-217.62707 102.7807,34.094965 -5.0553341,36.340029 Z");
        set_style(path1, "opacity", "1");
        set_style(path1, "fill", "#ffffff");
        set_style(path1, "fill-opacity", "1");
        set_style(path1, "stroke", "none");
        set_style(path1, "stroke-width", "0.26499999");
        set_style(path1, "stroke-miterlimit", "4");
        set_style(path1, "stroke-dasharray", "none");
        set_style(path1, "stroke-opacity", "1");
        add_location(path1, file$2, 61, 8, 1971);
        attr_dev(path2, "d", "M -9.5454621,-98.524419 -5.0553341,36.340029 0.12229573,255.81567 117.22833,3.0223225 Z");
        set_style(path2, "opacity", "1");
        set_style(path2, "fill", "#e4d7c9");
        set_style(path2, "fill-opacity", "1");
        set_style(path2, "stroke", "none");
        set_style(path2, "stroke-width", "0.26499999");
        set_style(path2, "stroke-miterlimit", "4");
        set_style(path2, "stroke-dasharray", "none");
        set_style(path2, "stroke-opacity", "1");
        add_location(path2, file$2, 64, 8, 2247);
        attr_dev(g1, "transform", "translate(0,203)");
        set_style(g1, "display", "inline");
        add_location(g1, file$2, 52, 4, 1636);
        attr_dev(svg, "id", "decorative-angle-left");
        attr_dev(svg, "version", "1.1");
        attr_dev(svg, "viewBox", "0 0 225 500");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "xmlns:cc", "http://creativecommons.org/ns#");
        attr_dev(svg, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
        attr_dev(svg, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        attr_dev(svg, "class", "svelte-dshwe2");
        add_location(svg, file$2, 16, 0, 416);
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

  var file$3 = "src\\components\\LoveBox.svelte";

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    child_ctx[7] = i;
    return child_ctx;
  } // (27:12) {#if index == currentPhrase}


  function create_if_block$1(ctx) {
    var p;
    var t_value =
    /*phrase*/
    ctx[5] + "";
    var t;
    var p_intro;
    var p_outro;
    var current;
    var block = {
      c: function create() {
        p = element("p");
        t = text(t_value);
        attr_dev(p, "class", "svelte-12coatf");
        add_location(p, file$3, 27, 16, 1232);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (p_outro) p_outro.end(1);
          if (!p_intro) p_intro = create_in_transition(p, flyModified, {
            x: 100,
            duration: 300,
            delay: 500,
            position: "absolute"
          });
          p_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        if (p_intro) p_intro.invalidate();
        p_outro = create_out_transition(p, flyModified, {
          x: -100,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
        if (detaching && p_outro) p_outro.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(27:12) {#if index == currentPhrase}",
      ctx: ctx
    });
    return block;
  } // (26:8) {#each phrases as phrase, index}


  function create_each_block(ctx) {
    var if_block_anchor;
    var current;
    var if_block =
    /*index*/
    ctx[7] ==
    /*currentPhrase*/
    ctx[0] && create_if_block$1(ctx);
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
        /*index*/
        ctx[7] ==
        /*currentPhrase*/
        ctx[0]) {
          if (if_block) {
            if_block.p(ctx, dirty);
            transition_in(if_block, 1);
          } else {
            if_block = create_if_block$1(ctx);
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
      id: create_each_block.name,
      type: "each",
      source: "(26:8) {#each phrases as phrase, index}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var div1;
    var div0;
    var h2;
    var t1;
    var current;
    var each_value =
    /*phrases*/
    ctx[2];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    var out = function out(i) {
      return transition_out(each_blocks[i], 1, 1, function () {
        each_blocks[i] = null;
      });
    };

    var block = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        h2 = element("h2");
        h2.textContent = "We love our church!";
        t1 = space();

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        attr_dev(h2, "class", "svelte-12coatf");
        add_location(h2, file$3, 24, 8, 1102);
        attr_dev(div0, "class", "inner svelte-12coatf");
        add_location(div0, file$3, 23, 4, 1052);
        attr_dev(div1, "class", "love-box svelte-12coatf");
        add_location(div1, file$3, 22, 0, 1024);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, div0);
        append_dev(div0, h2);
        append_dev(div0, t1);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div0, null);
        }
        /*div0_binding*/


        ctx[4](div0);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*phrases, currentPhrase*/
        5) {
          each_value =
          /*phrases*/
          ctx[2];
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);

              transition_in(each_blocks[_i3], 1);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              transition_in(each_blocks[_i3], 1);

              each_blocks[_i3].m(div0, null);
            }
          }

          group_outros();

          for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
            out(_i3);
          }

          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;

        for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
          transition_in(each_blocks[_i4]);
        }

        current = true;
      },
      o: function outro(local) {
        each_blocks = each_blocks.filter(Boolean);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          transition_out(each_blocks[_i5]);
        }

        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        destroy_each(each_blocks, detaching);
        /*div0_binding*/

        ctx[4](null);
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
    var phrases = ["0 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur.", "1 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur.", "2 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur. 2 Dolore cillum Lorem eiusmod irure consectetur.", "3 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur.", "4 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur."];
    var currentPhrase = 0;
    var innerDiv; //Interval to change phrases

    var interval = setInterval(function () {
      if (currentPhrase == phrases.length - 1) $$invalidate(0, currentPhrase = 0);else $$invalidate(0, currentPhrase += 1);
    }, 4000);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<LoveBox> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("LoveBox", $$slots, []);

    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(1, innerDiv = $$value);
      });
    }

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified,
        phrases: phrases,
        currentPhrase: currentPhrase,
        innerDiv: innerDiv,
        interval: interval
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("phrases" in $$props) $$invalidate(2, phrases = $$props.phrases);
      if ("currentPhrase" in $$props) $$invalidate(0, currentPhrase = $$props.currentPhrase);
      if ("innerDiv" in $$props) $$invalidate(1, innerDiv = $$props.innerDiv);
      if ("interval" in $$props) interval = $$props.interval;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [currentPhrase, innerDiv, phrases, interval, div0_binding];
  }

  var LoveBox = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(LoveBox, _SvelteComponentDev);

    function LoveBox(options) {
      var _this;

      _classCallCheck(this, LoveBox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LoveBox).call(this, options));
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "LoveBox",
        options: options,
        id: create_fragment$3.name
      });
      return _this;
    }

    return LoveBox;
  }(SvelteComponentDev);

  var file$4 = "src\\components\\Loader.svelte"; // (6:0) {#if show}

  function create_if_block$2(ctx) {
    var div;
    var img;
    var img_src_value;
    var div_transition;
    var current;
    var block = {
      c: function create() {
        div = element("div");
        img = element("img");
        if (img.src !== (img_src_value = "/icons/loading.svg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "loading content");
        attr_dev(img, "class", "svelte-1p8iekd");
        add_location(img, file$4, 7, 8, 158);
        attr_dev(div, "class", "loader svelte-1p8iekd");
        add_location(div, file$4, 6, 4, 112);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, img);
        current = true;
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
        if (detaching && div_transition) div_transition.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(6:0) {#if show}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$4(ctx) {
    var if_block_anchor;
    var current;
    var if_block =
    /*show*/
    ctx[0] && create_if_block$2(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*show*/
        ctx[0]) {
          if (!if_block) {
            if_block = create_if_block$2(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          } else {
            transition_in(if_block, 1);
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
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var _$$props$show = $$props.show,
        show = _$$props$show === void 0 ? false : _$$props$show;
    var writable_props = ["show"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Loader> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Loader", $$slots, []);

    $$self.$set = function ($$props) {
      if ("show" in $$props) $$invalidate(0, show = $$props.show);
    };

    $$self.$capture_state = function () {
      return {
        fade: fade,
        show: show
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("show" in $$props) $$invalidate(0, show = $$props.show);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [show];
  }

  var Loader = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Loader, _SvelteComponentDev);

    function Loader(options) {
      var _this;

      _classCallCheck(this, Loader);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this, options));
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        show: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Loader",
        options: options,
        id: create_fragment$4.name
      });
      return _this;
    }

    _createClass(Loader, [{
      key: "show",
      get: function get() {
        throw new Error("<Loader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Loader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Loader;
  }(SvelteComponentDev);

  function create_fragment$5(ctx) {
    var block = {
      c: noop,
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
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

  function instance$5($$self, $$props) {
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Worship> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Worship", $$slots, []);
    return [];
  }

  var Worship = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Worship, _SvelteComponentDev);

    function Worship(options) {
      var _this;

      _classCallCheck(this, Worship);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Worship).call(this, options));
      init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Worship",
        options: options,
        id: create_fragment$5.name
      });
      return _this;
    }

    return Worship;
  }(SvelteComponentDev);

  var file$5 = "src\\views\\Learn.svelte";

  function create_fragment$6(ctx) {
    var div3;
    var div2;
    var h1;
    var t1;
    var div0;
    var router_link;
    var t3;
    var a0;
    var t5;
    var a1;
    var t7;
    var p0;
    var t9;
    var div1;
    var t10;
    var span;
    var t12;
    var t13;
    var p1;
    var t15;
    var img;
    var img_src_value;
    var t16;
    var p2;
    var t18;
    var p3;
    var t20;
    var p4;
    var t21;
    var a2;
    var t23;
    var div3_intro;
    var div3_outro;
    var current;
    var block = {
      c: function create() {
        div3 = element("div");
        div2 = element("div");
        h1 = element("h1");
        h1.textContent = "About Us";
        t1 = space();
        div0 = element("div");
        router_link = element("router-link");
        router_link.textContent = "Staff";
        t3 = space();
        a0 = element("a");
        a0.textContent = "Directions";
        t5 = space();
        a1 = element("a");
        a1.textContent = "Facebook";
        t7 = space();
        p0 = element("p");
        p0.textContent = "First Christian Church of Galesburg was founded in 1872.  We are a manifestation of the church body known as The Christian Church (Disciples of Christ).  We have been worshiping and witnessing at this location since 1916, though the building was not completed and dedicated until 1928.";
        t9 = space();
        div1 = element("div");
        t10 = text("We are growing");
        span = element("span");
        span.textContent = "passionate disciples of Christ ";
        t12 = text("for the transformation of our world");
        t13 = space();
        p1 = element("p");
        p1.textContent = "As \"Disciples of Christ\" we are one of over 4,000 similar congregations across the USA and Canada which had its origins on the American frontier in the early 19th century.  Founding fathers of our church organization were Thomas and Alexander Campbell, Barton W. Stone,and Walter Scott.  Since its beginning the Christian Church (Disciples of Christ) has endeavored to promote unity and to increase respect and understanding within the family of God.";
        t15 = space();
        img = element("img");
        t16 = space();
        p2 = element("p");
        p2.textContent = "As Disciples we strive to remain obedient to the Lordship and teachings of Jesus and the New Testament by practicing a faith which is socially relevant and intellectually sound.  Members are bound together in fellowship and service by belief in the central \"confession\" of the New Testament, that \"Jesus is the Christ, the Son of the living God.\"";
        t18 = space();
        p3 = element("p");
        p3.textContent = "In Illinois there are about 190 congregations of Disciples with over 50,000 members.";
        t20 = space();
        p4 = element("p");
        t21 = text("To access the web site of the national office of the Disciples of Christ, ");
        a2 = element("a");
        a2.textContent = "click here";
        t23 = text(".");
        add_location(h1, file$5, 6, 8, 225);
        set_custom_element_data(router_link, "to", "staff");
        add_location(router_link, file$5, 8, 12, 285);
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        add_location(a0, file$5, 9, 12, 342);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        add_location(a1, file$5, 10, 12, 573);
        attr_dev(div0, "class", "links");
        add_location(div0, file$5, 7, 8, 252);
        add_location(p0, file$5, 13, 8, 743);
        attr_dev(span, "class", "bigger");
        add_location(span, file$5, 14, 44, 1081);
        attr_dev(div1, "class", "emphasis");
        add_location(div1, file$5, 14, 8, 1045);
        add_location(p1, file$5, 15, 8, 1192);
        if (img.src !== (img_src_value = "/background-slides/congo.jpg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        add_location(img, file$5, 16, 8, 1659);
        add_location(p2, file$5, 17, 8, 1716);
        add_location(p3, file$5, 18, 8, 2079);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "http://www.disciples.org/");
        add_location(a2, file$5, 19, 85, 2257);
        add_location(p4, file$5, 19, 8, 2180);
        attr_dev(div2, "class", "content");
        add_location(div2, file$5, 5, 4, 194);
        attr_dev(div3, "class", "page");
        add_location(div3, file$5, 4, 0, 74);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div3, anchor);
        append_dev(div3, div2);
        append_dev(div2, h1);
        append_dev(div2, t1);
        append_dev(div2, div0);
        append_dev(div0, router_link);
        append_dev(div0, t3);
        append_dev(div0, a0);
        append_dev(div0, t5);
        append_dev(div0, a1);
        append_dev(div2, t7);
        append_dev(div2, p0);
        append_dev(div2, t9);
        append_dev(div2, div1);
        append_dev(div1, t10);
        append_dev(div1, span);
        append_dev(div1, t12);
        append_dev(div2, t13);
        append_dev(div2, p1);
        append_dev(div2, t15);
        append_dev(div2, img);
        append_dev(div2, t16);
        append_dev(div2, p2);
        append_dev(div2, t18);
        append_dev(div2, p3);
        append_dev(div2, t20);
        append_dev(div2, p4);
        append_dev(p4, t21);
        append_dev(p4, a2);
        append_dev(p4, t23);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current) return;
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
        if (div3_intro) div3_intro.invalidate();
        div3_outro = create_out_transition(div3, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div3);
        if (detaching && div3_outro) div3_outro.end();
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
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Learn> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Learn", $$slots, []);

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [];
  }

  var Learn = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Learn, _SvelteComponentDev);

    function Learn(options) {
      var _this;

      _classCallCheck(this, Learn);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Learn).call(this, options));
      init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Learn",
        options: options,
        id: create_fragment$6.name
      });
      return _this;
    }

    return Learn;
  }(SvelteComponentDev);

  var file$6 = "src\\views\\About.svelte";

  function create_fragment$7(ctx) {
    var div3;
    var div2;
    var h1;
    var t1;
    var div0;
    var router_link;
    var t3;
    var a0;
    var t5;
    var a1;
    var t7;
    var p0;
    var t9;
    var div1;
    var t10;
    var span;
    var t12;
    var t13;
    var p1;
    var t15;
    var img;
    var img_src_value;
    var t16;
    var p2;
    var t18;
    var p3;
    var t20;
    var p4;
    var t21;
    var a2;
    var t23;
    var div3_intro;
    var div3_outro;
    var current;
    var block = {
      c: function create() {
        div3 = element("div");
        div2 = element("div");
        h1 = element("h1");
        h1.textContent = "About Us";
        t1 = space();
        div0 = element("div");
        router_link = element("router-link");
        router_link.textContent = "Staff";
        t3 = space();
        a0 = element("a");
        a0.textContent = "Directions";
        t5 = space();
        a1 = element("a");
        a1.textContent = "Facebook";
        t7 = space();
        p0 = element("p");
        p0.textContent = "First Christian Church of Galesburg was founded in 1872.  We are a manifestation of the church body known as The Christian Church (Disciples of Christ).  We have been worshiping and witnessing at this location since 1916, though the building was not completed and dedicated until 1928.";
        t9 = space();
        div1 = element("div");
        t10 = text("We are growing");
        span = element("span");
        span.textContent = "passionate disciples of Christ ";
        t12 = text("for the transformation of our world");
        t13 = space();
        p1 = element("p");
        p1.textContent = "As \"Disciples of Christ\" we are one of over 4,000 similar congregations across the USA and Canada which had its origins on the American frontier in the early 19th century.  Founding fathers of our church organization were Thomas and Alexander Campbell, Barton W. Stone,and Walter Scott.  Since its beginning the Christian Church (Disciples of Christ) has endeavored to promote unity and to increase respect and understanding within the family of God.";
        t15 = space();
        img = element("img");
        t16 = space();
        p2 = element("p");
        p2.textContent = "As Disciples we strive to remain obedient to the Lordship and teachings of Jesus and the New Testament by practicing a faith which is socially relevant and intellectually sound.  Members are bound together in fellowship and service by belief in the central \"confession\" of the New Testament, that \"Jesus is the Christ, the Son of the living God.\"";
        t18 = space();
        p3 = element("p");
        p3.textContent = "In Illinois there are about 190 congregations of Disciples with over 50,000 members.";
        t20 = space();
        p4 = element("p");
        t21 = text("To access the web site of the national office of the Disciples of Christ, ");
        a2 = element("a");
        a2.textContent = "click here";
        t23 = text(".");
        add_location(h1, file$6, 6, 8, 225);
        set_custom_element_data(router_link, "to", "staff");
        add_location(router_link, file$6, 8, 12, 285);
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        add_location(a0, file$6, 9, 12, 342);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        add_location(a1, file$6, 10, 12, 573);
        attr_dev(div0, "class", "links");
        add_location(div0, file$6, 7, 8, 252);
        add_location(p0, file$6, 13, 8, 743);
        attr_dev(span, "class", "bigger");
        add_location(span, file$6, 14, 44, 1081);
        attr_dev(div1, "class", "emphasis");
        add_location(div1, file$6, 14, 8, 1045);
        add_location(p1, file$6, 15, 8, 1192);
        if (img.src !== (img_src_value = "/background-slides/congo.jpg")) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "");
        add_location(img, file$6, 16, 8, 1659);
        add_location(p2, file$6, 17, 8, 1716);
        add_location(p3, file$6, 18, 8, 2079);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "http://www.disciples.org/");
        add_location(a2, file$6, 19, 85, 2257);
        add_location(p4, file$6, 19, 8, 2180);
        attr_dev(div2, "class", "content");
        add_location(div2, file$6, 5, 4, 194);
        attr_dev(div3, "class", "page");
        add_location(div3, file$6, 4, 0, 74);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div3, anchor);
        append_dev(div3, div2);
        append_dev(div2, h1);
        append_dev(div2, t1);
        append_dev(div2, div0);
        append_dev(div0, router_link);
        append_dev(div0, t3);
        append_dev(div0, a0);
        append_dev(div0, t5);
        append_dev(div0, a1);
        append_dev(div2, t7);
        append_dev(div2, p0);
        append_dev(div2, t9);
        append_dev(div2, div1);
        append_dev(div1, t10);
        append_dev(div1, span);
        append_dev(div1, t12);
        append_dev(div2, t13);
        append_dev(div2, p1);
        append_dev(div2, t15);
        append_dev(div2, img);
        append_dev(div2, t16);
        append_dev(div2, p2);
        append_dev(div2, t18);
        append_dev(div2, p3);
        append_dev(div2, t20);
        append_dev(div2, p4);
        append_dev(p4, t21);
        append_dev(p4, a2);
        append_dev(p4, t23);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current) return;
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
        if (div3_intro) div3_intro.invalidate();
        div3_outro = create_out_transition(div3, flyModified, {
          y: -300,
          duration: 300
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div3);
        if (detaching && div3_outro) div3_outro.end();
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
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("About", $$slots, []);

    $$self.$capture_state = function () {
      return {
        flyModified: flyModified
      };
    };

    return [];
  }

  var About = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(About, _SvelteComponentDev);

    function About(options) {
      var _this;

      _classCallCheck(this, About);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, options));
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

  function create_fragment$8(ctx) {
    var block = {
      c: noop,
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
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

  function instance$8($$self, $$props) {
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Resources> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Resources", $$slots, []);
    return [];
  }

  var Resources = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Resources, _SvelteComponentDev);

    function Resources(options) {
      var _this;

      _classCallCheck(this, Resources);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Resources).call(this, options));
      init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Resources",
        options: options,
        id: create_fragment$8.name
      });
      return _this;
    }

    return Resources;
  }(SvelteComponentDev);

  function create_fragment$9(ctx) {
    var block = {
      c: noop,
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
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

  function instance$9($$self, $$props) {
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Staff> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Staff", $$slots, []);
    return [];
  }

  var Staff = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Staff, _SvelteComponentDev);

    function Staff(options) {
      var _this;

      _classCallCheck(this, Staff);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Staff).call(this, options));
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

  function create_fragment$a(ctx) {
    var block = {
      c: noop,
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
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

  function instance$a($$self, $$props) {
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Links> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Links", $$slots, []);
    return [];
  }

  var Links = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Links, _SvelteComponentDev);

    function Links(options) {
      var _this;

      _classCallCheck(this, Links);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Links).call(this, options));
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

  var file$7 = "src\\App.svelte"; // (134:0) {#if subpageOpen}

  function create_if_block$3(ctx) {
    var div;
    var updating_mobileOpen;
    var t;
    var div_transition;
    var current;

    function navigation_mobileOpen_binding_1(value) {
      /*navigation_mobileOpen_binding_1*/
      ctx[5].call(null, value);
    }

    var navigation_props = {
      subpageStyle: true
    };

    if (
    /*mobileOpen*/
    ctx[0] !== void 0) {
      navigation_props.mobileOpen =
      /*mobileOpen*/
      ctx[0];
    }

    var navigation = new Navigation({
      props: navigation_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(navigation, "mobileOpen", navigation_mobileOpen_binding_1);
    });
    var switch_value =
    /*page*/
    ctx[3][
    /*curPage*/
    ctx[1]];

    function switch_props(ctx) {
      return {
        $$inline: true
      };
    }

    if (switch_value) {
      var switch_instance = new switch_value(switch_props());
    }

    var block = {
      c: function create() {
        div = element("div");
        create_component(navigation.$$.fragment);
        t = space();
        if (switch_instance) create_component(switch_instance.$$.fragment);
        attr_dev(div, "class", "subpage");
        add_location(div, file$7, 134, 4, 5276);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        mount_component(navigation, div, null);
        append_dev(div, t);

        if (switch_instance) {
          mount_component(switch_instance, div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        var navigation_changes = {};

        if (!updating_mobileOpen && dirty &
        /*mobileOpen*/
        1) {
          updating_mobileOpen = true;
          navigation_changes.mobileOpen =
          /*mobileOpen*/
          ctx[0];
          add_flush_callback(function () {
            return updating_mobileOpen = false;
          });
        }

        navigation.$set(navigation_changes);

        if (switch_value !== (switch_value =
        /*page*/
        ctx[3][
        /*curPage*/
        ctx[1]])) {
          if (switch_instance) {
            group_outros();
            var old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, function () {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props());
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div, null);
          } else {
            switch_instance = null;
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(navigation.$$.fragment, local);
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        add_render_callback(function () {
          if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
          div_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        transition_out(navigation.$$.fragment, local);
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
        div_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_component(navigation);
        if (switch_instance) destroy_component(switch_instance);
        if (detaching && div_transition) div_transition.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$3.name,
      type: "if",
      source: "(134:0) {#if subpageOpen}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$b(ctx) {
    var updating_mobileOpen;
    var t0;
    var div7;
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
    var div0;
    var t8;
    var div4;
    var div2;
    var t10;
    var div3;
    var a0;
    var t12;
    var a1;
    var t14;
    var a2;
    var t16;
    var div9;
    var div8;
    var t17;
    var t18;
    var div14;
    var div13;
    var h30;
    var t20;
    var div10;
    var t22;
    var div11;
    var t24;
    var hr0;
    var t25;
    var div12;
    var t27;
    var button0;
    var t29;
    var button1;
    var t31;
    var div22;
    var div16;
    var h2;
    var t33;
    var div15;
    var img2;
    var img2_src_value;
    var t34;
    var h31;
    var t36;
    var p0;
    var t38;
    var p1;
    var t40;
    var p2;
    var t42;
    var ul;
    var li0;
    var t44;
    var li1;
    var t46;
    var li2;
    var t48;
    var div18;
    var div17;
    var a3;
    var img3;
    var img3_src_value;
    var span3;
    var span2;
    var t50;
    var a4;
    var img4;
    var img4_src_value;
    var span5;
    var span4;
    var t52;
    var a5;
    var img5;
    var img5_src_value;
    var span7;
    var span6;
    var t54;
    var a6;
    var img6;
    var img6_src_value;
    var span9;
    var span8;
    var t56;
    var t57;
    var div21;
    var hr1;
    var t58;
    var div19;
    var t62;
    var div20;
    var t63;
    var a7;
    var t65;
    var t66;
    var t67;
    var div24;
    var div23;
    var span10;
    var t68;
    var button2;
    var t70;
    var div26;
    var div25;
    var current;

    function navigation_mobileOpen_binding(value) {
      /*navigation_mobileOpen_binding*/
      ctx[4].call(null, value);
    }

    var navigation_props = {};

    if (
    /*mobileOpen*/
    ctx[0] !== void 0) {
      navigation_props.mobileOpen =
      /*mobileOpen*/
      ctx[0];
    }

    var navigation = new Navigation({
      props: navigation_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(navigation, "mobileOpen", navigation_mobileOpen_binding);
    });
    var leftangle = new LeftAngle({
      $$inline: true
    });
    var slideshow = new Slideshow({
      $$inline: true
    });
    var lovebox = new LoveBox({
      $$inline: true
    });
    var if_block =
    /*subpageOpen*/
    ctx[2] && create_if_block$3(ctx);
    var loader = new Loader({
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(navigation.$$.fragment);
        t0 = space();
        div7 = element("div");
        create_component(leftangle.$$.fragment);
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
        div0 = element("div");
        div0.textContent = "Galesburg, IL";
        t8 = space();
        div4 = element("div");
        div2 = element("div");
        div2.textContent = "301 N Broad St, Galesburg, IL 61401";
        t10 = space();
        div3 = element("div");
        a0 = element("a");
        a0.textContent = "309.343.9960";
        t12 = text(" | \n                    ");
        a1 = element("a");
        a1.textContent = "Email us";
        t14 = text(" | \n                    ");
        a2 = element("a");
        a2.textContent = "Directions";
        t16 = space();
        div9 = element("div");
        div8 = element("div");
        t17 = space();
        create_component(slideshow.$$.fragment);
        t18 = space();
        div14 = element("div");
        div13 = element("div");
        h30 = element("h3");
        h30.textContent = "Sunday Worship";
        t20 = space();
        div10 = element("div");
        div10.textContent = "Contemporary: 8:30am";
        t22 = space();
        div11 = element("div");
        div11.textContent = "Traditional: 11am";
        t24 = space();
        hr0 = element("hr");
        t25 = space();
        div12 = element("div");
        div12.textContent = "All-ages Sunday School Classes: 9:30am";
        t27 = space();
        button0 = element("button");
        button0.textContent = "Donate Now";
        t29 = space();
        button1 = element("button");
        button1.textContent = "Online Giving";
        t31 = space();
        div22 = element("div");
        div16 = element("div");
        h2 = element("h2");
        h2.textContent = "What's going on now at FCC Galesburg?";
        t33 = space();
        div15 = element("div");
        img2 = element("img");
        t34 = space();
        h31 = element("h3");
        h31.textContent = "Sermon Series: \"Love Comes to Town\"";
        t36 = space();
        p0 = element("p");
        p0.textContent = "When love comes to town, lives are changed!";
        t38 = space();
        p1 = element("p");
        p1.textContent = "We are called to share the love of Christ with our neighbors and our family and yes, even our enemies! Throughout August and September, we will be going through I Corinthians 13 during our sermon series and discovering more about sharing the love of God.";
        t40 = space();
        p2 = element("p");
        p2.textContent = "Upcoming sermons include:";
        t42 = space();
        ul = element("ul");
        li0 = element("li");
        li0.textContent = "September 1 - Triggered (Dealing with Anger)";
        t44 = space();
        li1 = element("li");
        li1.textContent = "September 8 - Like a Good Neighbor (Be the Church Sunday)";
        t46 = space();
        li2 = element("li");
        li2.textContent = "September 15 - Love Everlasting (Worship in the Park)";
        t48 = space();
        div18 = element("div");
        div17 = element("div");
        a3 = element("a");
        img3 = element("img");
        span3 = element("span");
        span2 = element("span");
        span2.textContent = "Staff";
        t50 = space();
        a4 = element("a");
        img4 = element("img");
        span5 = element("span");
        span4 = element("span");
        span4.textContent = "Sermons";
        t52 = space();
        a5 = element("a");
        img5 = element("img");
        span7 = element("span");
        span6 = element("span");
        span6.textContent = "Newsletters";
        t54 = space();
        a6 = element("a");
        img6 = element("img");
        span9 = element("span");
        span8 = element("span");
        span8.textContent = "Facebook";
        t56 = space();
        create_component(lovebox.$$.fragment);
        t57 = space();
        div21 = element("div");
        hr1 = element("hr");
        t58 = space();
        div19 = element("div");
        div19.textContent = "\xA9 ".concat(new Date().getFullYear(), " First Christian Church, Disciples of Christ - Galesburg, IL");
        t62 = space();
        div20 = element("div");
        t63 = text("Site design by ");
        a7 = element("a");
        a7.textContent = "Jacob Runge";
        t65 = space();
        if (if_block) if_block.c();
        t66 = space();
        create_component(loader.$$.fragment);
        t67 = space();
        div24 = element("div");
        div23 = element("div");
        span10 = element("span");
        t68 = space();
        button2 = element("button");
        button2.textContent = "OK";
        t70 = space();
        div26 = element("div");
        div25 = element("div");
        if (img0.src !== (img0_src_value = "/icons/chalice.svg")) attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "Disciples of Christ chalice logo");
        attr_dev(img0, "class", "primary-img svelte-1utxw26");
        add_location(img0, file$7, 53, 8, 1409);
        if (img1.src !== (img1_src_value = "/icons/chalice.svg")) attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "Disciples of Christ chalice logo");
        attr_dev(img1, "class", "primary-img-mobile svelte-1utxw26");
        add_location(img1, file$7, 56, 16, 1590);
        attr_dev(span0, "class", "smaller svelte-1utxw26");
        add_location(span0, file$7, 58, 47, 1757);
        attr_dev(h1, "class", "svelte-1utxw26");
        add_location(h1, file$7, 58, 20, 1730);
        add_location(div0, file$7, 59, 20, 1831);
        add_location(span1, file$7, 57, 16, 1703);
        attr_dev(div1, "class", "logo svelte-1utxw26");
        add_location(div1, file$7, 55, 12, 1555);
        attr_dev(div2, "class", "mt");
        add_location(div2, file$7, 64, 16, 1960);
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "href", "tel:1-309-343-9960");
        add_location(a0, file$7, 66, 20, 2060);
        attr_dev(a1, "target", "_blank");
        attr_dev(a1, "href", "mailto:fccgalesburg@gmail.com");
        add_location(a1, file$7, 67, 20, 2145);
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "href", "https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857");
        add_location(a2, file$7, 68, 20, 2237);
        add_location(div3, file$7, 65, 16, 2034);
        attr_dev(div4, "class", "contact-links svelte-1utxw26");
        add_location(div4, file$7, 63, 12, 1916);
        attr_dev(div5, "class", "mobile-formatting-div svelte-1utxw26");
        add_location(div5, file$7, 54, 8, 1507);
        attr_dev(div6, "class", "header svelte-1utxw26");
        add_location(div6, file$7, 52, 4, 1380);
        attr_dev(div7, "class", "forefront-content svelte-1utxw26");
        add_location(div7, file$7, 47, 0, 1253);
        attr_dev(div8, "class", "inner svelte-1utxw26");
        add_location(div8, file$7, 77, 4, 2658);
        attr_dev(div9, "class", "decorative-bottom-angle svelte-1utxw26");
        add_location(div9, file$7, 76, 0, 2616);
        attr_dev(h30, "class", "svelte-1utxw26");
        add_location(h30, file$7, 86, 8, 2823);
        add_location(div10, file$7, 87, 8, 2855);
        add_location(div11, file$7, 88, 8, 2895);
        attr_dev(hr0, "class", "svelte-1utxw26");
        add_location(hr0, file$7, 89, 8, 2932);
        attr_dev(div12, "class", "ss-classes svelte-1utxw26");
        add_location(div12, file$7, 90, 8, 2945);
        attr_dev(div13, "class", "worship-times svelte-1utxw26");
        add_location(div13, file$7, 85, 4, 2787);
        add_location(button0, file$7, 92, 4, 3029);
        add_location(button1, file$7, 93, 4, 3061);
        attr_dev(div14, "class", "infobox svelte-1utxw26");
        add_location(div14, file$7, 84, 0, 2761);
        attr_dev(h2, "class", "svelte-1utxw26");
        add_location(h2, file$7, 99, 8, 3193);
        attr_dev(img2, "alt", "Participating in Be The Church Sunday");
        if (img2.src !== (img2_src_value = "/frontpage_images/bethechurchpic.jpg")) attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "class", "svelte-1utxw26");
        add_location(img2, file$7, 101, 12, 3289);
        add_location(h31, file$7, 102, 12, 3394);
        add_location(p0, file$7, 103, 12, 3451);
        add_location(p1, file$7, 104, 12, 3514);
        add_location(p2, file$7, 105, 12, 3788);
        add_location(li0, file$7, 107, 16, 3854);
        add_location(li1, file$7, 108, 16, 3924);
        add_location(li2, file$7, 109, 16, 4007);
        add_location(ul, file$7, 106, 12, 3833);
        attr_dev(div15, "class", "current-events");
        add_location(div15, file$7, 100, 8, 3248);
        attr_dev(div16, "class", "content svelte-1utxw26");
        add_location(div16, file$7, 98, 4, 3163);
        if (img3.src !== (img3_src_value = "/icons/staff.svg")) attr_dev(img3, "src", img3_src_value);
        attr_dev(img3, "alt", "Staff");
        attr_dev(img3, "class", "svelte-1utxw26");
        add_location(img3, file$7, 116, 29, 4201);
        attr_dev(span2, "class", "inner");
        add_location(span2, file$7, 116, 93, 4265);
        attr_dev(span3, "class", "linklabel svelte-1utxw26");
        add_location(span3, file$7, 116, 69, 4241);
        attr_dev(a3, "href", "#staff");
        attr_dev(a3, "class", "svelte-1utxw26");
        add_location(a3, file$7, 116, 12, 4184);
        if (img4.src !== (img4_src_value = "/icons/sermons.svg")) attr_dev(img4, "src", img4_src_value);
        attr_dev(img4, "alt", "Sermons");
        attr_dev(img4, "class", "svelte-1utxw26");
        add_location(img4, file$7, 117, 31, 4340);
        attr_dev(span4, "class", "inner");
        add_location(span4, file$7, 117, 99, 4408);
        attr_dev(span5, "class", "linklabel svelte-1utxw26");
        add_location(span5, file$7, 117, 75, 4384);
        attr_dev(a4, "href", "#sermons");
        attr_dev(a4, "class", "svelte-1utxw26");
        add_location(a4, file$7, 117, 12, 4321);
        if (img5.src !== (img5_src_value = "/icons/newsletters.svg")) attr_dev(img5, "src", img5_src_value);
        attr_dev(img5, "alt", "Newsletters");
        attr_dev(img5, "class", "svelte-1utxw26");
        add_location(img5, file$7, 118, 35, 4489);
        attr_dev(span6, "class", "inner");
        add_location(span6, file$7, 118, 111, 4565);
        attr_dev(span7, "class", "linklabel svelte-1utxw26");
        add_location(span7, file$7, 118, 87, 4541);
        attr_dev(a5, "href", "#newsletters");
        attr_dev(a5, "class", "svelte-1utxw26");
        add_location(a5, file$7, 118, 12, 4466);
        if (img6.src !== (img6_src_value = "/icons/facebooklogo.svg")) attr_dev(img6, "src", img6_src_value);
        attr_dev(img6, "alt", "Facebook");
        attr_dev(img6, "class", "svelte-1utxw26");
        add_location(img6, file$7, 119, 142, 4757);
        attr_dev(span8, "class", "inner");
        add_location(span8, file$7, 119, 216, 4831);
        attr_dev(span9, "class", "linklabel svelte-1utxw26");
        add_location(span9, file$7, 119, 192, 4807);
        attr_dev(a6, "href", "https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/");
        attr_dev(a6, "target", "_blank");
        attr_dev(a6, "class", "svelte-1utxw26");
        add_location(a6, file$7, 119, 12, 4627);
        attr_dev(div17, "class", "inner svelte-1utxw26");
        add_location(div17, file$7, 115, 8, 4152);
        attr_dev(div18, "class", "quicklinks svelte-1utxw26");
        add_location(div18, file$7, 114, 4, 4119);
        attr_dev(hr1, "class", "svelte-1utxw26");
        add_location(hr1, file$7, 126, 8, 4954);
        attr_dev(div19, "class", "copy svelte-1utxw26");
        add_location(div19, file$7, 127, 8, 4967);
        attr_dev(a7, "target", "_blank");
        attr_dev(a7, "href", "http://jacobrunge.com");
        add_location(a7, file$7, 128, 28, 5113);
        add_location(div20, file$7, 128, 8, 5093);
        attr_dev(div21, "class", "footer svelte-1utxw26");
        add_location(div21, file$7, 125, 4, 4925);
        attr_dev(div22, "class", "frontpage-content svelte-1utxw26");
        add_location(div22, file$7, 97, 0, 3127);
        attr_dev(span10, "class", "centered");
        attr_dev(span10, "v-html", "announcement");
        add_location(span10, file$7, 146, 8, 5566);
        add_location(button2, file$7, 147, 8, 5627);
        attr_dev(div23, "class", "inner");
        add_location(div23, file$7, 145, 4, 5538);
        attr_dev(div24, "class", "modal");
        add_location(div24, file$7, 144, 0, 5514);
        attr_dev(div25, "class", "inner");
        add_location(div25, file$7, 153, 4, 5709);
        attr_dev(div26, "class", "modal");
        add_location(div26, file$7, 152, 0, 5685);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        mount_component(navigation, target, anchor);
        insert_dev(target, t0, anchor);
        insert_dev(target, div7, anchor);
        mount_component(leftangle, div7, null);
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
        append_dev(span1, t6);
        append_dev(span1, div0);
        append_dev(div5, t8);
        append_dev(div5, div4);
        append_dev(div4, div2);
        append_dev(div4, t10);
        append_dev(div4, div3);
        append_dev(div3, a0);
        append_dev(div3, t12);
        append_dev(div3, a1);
        append_dev(div3, t14);
        append_dev(div3, a2);
        insert_dev(target, t16, anchor);
        insert_dev(target, div9, anchor);
        append_dev(div9, div8);
        insert_dev(target, t17, anchor);
        mount_component(slideshow, target, anchor);
        insert_dev(target, t18, anchor);
        insert_dev(target, div14, anchor);
        append_dev(div14, div13);
        append_dev(div13, h30);
        append_dev(div13, t20);
        append_dev(div13, div10);
        append_dev(div13, t22);
        append_dev(div13, div11);
        append_dev(div13, t24);
        append_dev(div13, hr0);
        append_dev(div13, t25);
        append_dev(div13, div12);
        append_dev(div14, t27);
        append_dev(div14, button0);
        append_dev(div14, t29);
        append_dev(div14, button1);
        insert_dev(target, t31, anchor);
        insert_dev(target, div22, anchor);
        append_dev(div22, div16);
        append_dev(div16, h2);
        append_dev(div16, t33);
        append_dev(div16, div15);
        append_dev(div15, img2);
        append_dev(div15, t34);
        append_dev(div15, h31);
        append_dev(div15, t36);
        append_dev(div15, p0);
        append_dev(div15, t38);
        append_dev(div15, p1);
        append_dev(div15, t40);
        append_dev(div15, p2);
        append_dev(div15, t42);
        append_dev(div15, ul);
        append_dev(ul, li0);
        append_dev(ul, t44);
        append_dev(ul, li1);
        append_dev(ul, t46);
        append_dev(ul, li2);
        append_dev(div22, t48);
        append_dev(div22, div18);
        append_dev(div18, div17);
        append_dev(div17, a3);
        append_dev(a3, img3);
        append_dev(a3, span3);
        append_dev(span3, span2);
        append_dev(div17, t50);
        append_dev(div17, a4);
        append_dev(a4, img4);
        append_dev(a4, span5);
        append_dev(span5, span4);
        append_dev(div17, t52);
        append_dev(div17, a5);
        append_dev(a5, img5);
        append_dev(a5, span7);
        append_dev(span7, span6);
        append_dev(div17, t54);
        append_dev(div17, a6);
        append_dev(a6, img6);
        append_dev(a6, span9);
        append_dev(span9, span8);
        append_dev(div22, t56);
        mount_component(lovebox, div22, null);
        append_dev(div22, t57);
        append_dev(div22, div21);
        append_dev(div21, hr1);
        append_dev(div21, t58);
        append_dev(div21, div19);
        append_dev(div21, t62);
        append_dev(div21, div20);
        append_dev(div20, t63);
        append_dev(div20, a7);
        insert_dev(target, t65, anchor);
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, t66, anchor);
        mount_component(loader, target, anchor);
        insert_dev(target, t67, anchor);
        insert_dev(target, div24, anchor);
        append_dev(div24, div23);
        append_dev(div23, span10);
        append_dev(div23, t68);
        append_dev(div23, button2);
        insert_dev(target, t70, anchor);
        insert_dev(target, div26, anchor);
        append_dev(div26, div25);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var navigation_changes = {};

        if (!updating_mobileOpen && dirty &
        /*mobileOpen*/
        1) {
          updating_mobileOpen = true;
          navigation_changes.mobileOpen =
          /*mobileOpen*/
          ctx[0];
          add_flush_callback(function () {
            return updating_mobileOpen = false;
          });
        }

        navigation.$set(navigation_changes);

        if (
        /*subpageOpen*/
        ctx[2]) {
          if (if_block) {
            if_block.p(ctx, dirty);
            transition_in(if_block, 1);
          } else {
            if_block = create_if_block$3(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t66.parentNode, t66);
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
        transition_in(navigation.$$.fragment, local);
        transition_in(leftangle.$$.fragment, local);
        transition_in(slideshow.$$.fragment, local);
        transition_in(lovebox.$$.fragment, local);
        transition_in(if_block);
        transition_in(loader.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(navigation.$$.fragment, local);
        transition_out(leftangle.$$.fragment, local);
        transition_out(slideshow.$$.fragment, local);
        transition_out(lovebox.$$.fragment, local);
        transition_out(if_block);
        transition_out(loader.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(navigation, detaching);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(div7);
        destroy_component(leftangle);
        if (detaching) detach_dev(t16);
        if (detaching) detach_dev(div9);
        if (detaching) detach_dev(t17);
        destroy_component(slideshow, detaching);
        if (detaching) detach_dev(t18);
        if (detaching) detach_dev(div14);
        if (detaching) detach_dev(t31);
        if (detaching) detach_dev(div22);
        destroy_component(lovebox);
        if (detaching) detach_dev(t65);
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t66);
        destroy_component(loader, detaching);
        if (detaching) detach_dev(t67);
        if (detaching) detach_dev(div24);
        if (detaching) detach_dev(t70);
        if (detaching) detach_dev(div26);
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
    var mobileOpen = false; //Hash routing

    var page = {
      "#": false,
      "": false,
      "#home": false,
      "#worship": Worship,
      "#learn": Learn,
      "#about": About,
      "#resources": Resources,
      "#staff": Staff,
      "#links": Links
    };
    var curPage = "";

    window.onhashchange = function () {
      $$invalidate(1, curPage = window.location.hash);
    };

    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<App> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("App", $$slots, []);

    function navigation_mobileOpen_binding(value) {
      mobileOpen = value;
      $$invalidate(0, mobileOpen);
    }

    function navigation_mobileOpen_binding_1(value) {
      mobileOpen = value;
      $$invalidate(0, mobileOpen);
    }

    $$self.$capture_state = function () {
      return {
        fly: fly,
        fade: fade,
        Navigation: Navigation,
        Slideshow: Slideshow,
        LeftAngle: LeftAngle,
        LoveBox: LoveBox,
        Loader: Loader,
        Worship: Worship,
        Learn: Learn,
        About: About,
        Resources: Resources,
        Staff: Staff,
        Links: Links,
        mobileOpen: mobileOpen,
        page: page,
        curPage: curPage,
        subpageOpen: subpageOpen
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("mobileOpen" in $$props) $$invalidate(0, mobileOpen = $$props.mobileOpen);
      if ("page" in $$props) $$invalidate(3, page = $$props.page);
      if ("curPage" in $$props) $$invalidate(1, curPage = $$props.curPage);
      if ("subpageOpen" in $$props) $$invalidate(2, subpageOpen = $$props.subpageOpen);
    };

    var subpageOpen;

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*curPage*/
      2) {
         $$invalidate(2, subpageOpen = curPage && curPage != "#home" ? true : false);
      }
    };

    return [mobileOpen, curPage, subpageOpen, page, navigation_mobileOpen_binding, navigation_mobileOpen_binding_1];
  }

  var App = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(App, _SvelteComponentDev);

    function App(options) {
      var _this;

      _classCallCheck(this, App);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, options));
      init(_assertThisInitialized(_this), options, instance$b, create_fragment$b, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "App",
        options: options,
        id: create_fragment$b.name
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
