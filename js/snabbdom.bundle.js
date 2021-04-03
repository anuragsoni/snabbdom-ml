(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

var _snabbdom = require("snabbdom");

global.h = _snabbdom.h;
global.classModule = _snabbdom.classModule;
global.init = _snabbdom.init;
global.propsModule = _snabbdom.propsModule;
global.eventListenersModule = _snabbdom.eventListenersModule;
global.styleModule = _snabbdom.styleModule;
global.attributesModule = _snabbdom.attributesModule;
global.datasetModule = _snabbdom.datasetModule;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"snabbdom":2}],2:[function(require,module,exports){
'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function createElement(tagName, options) {
  return document.createElement(tagName, options);
}

function createElementNS(namespaceURI, qualifiedName, options) {
  return document.createElementNS(namespaceURI, qualifiedName, options);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(elm) {
  return elm.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function getTextContent(node) {
  return node.textContent;
}

function isElement(node) {
  return node.nodeType === 1;
}

function isText(node) {
  return node.nodeType === 3;
}

function isComment(node) {
  return node.nodeType === 8;
}

var htmlDomApi = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  getTextContent: getTextContent,
  isElement: isElement,
  isText: isText,
  isComment: isComment
};

function vnode(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {
    sel: sel,
    data: data,
    children: children,
    text: text,
    elm: elm,
    key: key
  };
}

var array = Array.isArray;

function primitive(s) {
  return typeof s === "string" || typeof s === "number";
}

function isUndef(s) {
  return s === undefined;
}

function isDef(s) {
  return s !== undefined;
}

var emptyNode = vnode("", {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  var _a, _b;

  var isSameKey = vnode1.key === vnode2.key;
  var isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
  var isSameSel = vnode1.sel === vnode2.sel;
  return isSameSel && isSameKey && isSameIs;
}

function isVnode(vnode) {
  return vnode.sel !== undefined;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var _a;

  var map = {};

  for (var i = beginIdx; i <= endIdx; ++i) {
    var key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;

    if (key !== undefined) {
      map[key] = i;
    }
  }

  return map;
}

var hooks = ["create", "update", "remove", "destroy", "pre", "post"];

function init$1(modules, domApi) {
  var i;
  var j;
  var cbs = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  };
  var api = domApi !== undefined ? domApi : htmlDomApi;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      var hook = modules[j][hooks[i]];

      if (hook !== undefined) {
        cbs[hooks[i]].push(hook);
      }
    }
  }

  function emptyNodeAt(elm) {
    var id = elm.id ? "#" + elm.id : "";
    var c = elm.className ? "." + elm.className.split(" ").join(".") : "";
    return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    return function rmCb() {
      if (--listeners === 0) {
        var parent = api.parentNode(childElm);
        api.removeChild(parent, childElm);
      }
    };
  }

  function createElm(vnode, insertedVnodeQueue) {
    var _a, _b;

    var i;
    var data = vnode.data;

    if (data !== undefined) {
      var _init = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;

      if (isDef(_init)) {
        _init(vnode);

        data = vnode.data;
      }
    }

    var children = vnode.children;
    var sel = vnode.sel;

    if (sel === "!") {
      if (isUndef(vnode.text)) {
        vnode.text = "";
      }

      vnode.elm = api.createComment(vnode.text);
    } else if (sel !== undefined) {
      // Parse selector
      var hashIdx = sel.indexOf("#");
      var dotIdx = sel.indexOf(".", hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);
      if (hash < dot) elm.setAttribute("id", sel.slice(hash + 1, dot));
      if (dotIdx > 0) elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));

      for (i = 0; i < cbs.create.length; ++i) {
        cbs.create[i](emptyNode, vnode);
      }

      if (array(children)) {
        for (i = 0; i < children.length; ++i) {
          var ch = children[i];

          if (ch != null) {
            api.appendChild(elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else if (primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }

      var _hook = vnode.data.hook;

      if (isDef(_hook)) {
        (_b = _hook.create) === null || _b === void 0 ? void 0 : _b.call(_hook, emptyNode, vnode);

        if (_hook.insert) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } else {
      vnode.elm = api.createTextNode(vnode.text);
    }

    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (ch != null) {
        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
      }
    }
  }

  function invokeDestroyHook(vnode) {
    var _a, _b;

    var data = vnode.data;

    if (data !== undefined) {
      (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);

      for (var _i = 0; _i < cbs.destroy.length; ++_i) {
        cbs.destroy[_i](vnode);
      }

      if (vnode.children !== undefined) {
        for (var _j = 0; _j < vnode.children.length; ++_j) {
          var child = vnode.children[_j];

          if (child != null && typeof child !== "string") {
            invokeDestroyHook(child);
          }
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    var _a, _b;

    for (; startIdx <= endIdx; ++startIdx) {
      var listeners = void 0;
      var rm = void 0;
      var ch = vnodes[startIdx];

      if (ch != null) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);

          for (var _i2 = 0; _i2 < cbs.remove.length; ++_i2) {
            cbs.remove[_i2](ch, rm);
          }

          var removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;

          if (isDef(removeHook)) {
            removeHook(ch, rm);
          } else {
            rm();
          }
        } else {
          // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx;
    var idxInOld;
    var elmToMove;
    var before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx];
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = oldKeyToIdx[newStartVnode.key];

        if (isUndef(idxInOld)) {
          // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
        } else {
          elmToMove = oldCh[idxInOld];

          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
      if (oldStartIdx > oldEndIdx) {
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var _a, _b, _c, _d, _e;

    var hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
    (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (oldVnode === vnode) return;

    if (vnode.data !== undefined) {
      for (var _i3 = 0; _i3 < cbs.update.length; ++_i3) {
        cbs.update[_i3](oldVnode, vnode);
      }

      (_d = (_c = vnode.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c, oldVnode, vnode);
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, "");
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, "");
      }
    } else if (oldVnode.text !== vnode.text) {
      if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }

      api.setTextContent(elm, vnode.text);
    }

    (_e = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _e === void 0 ? void 0 : _e.call(hook, oldVnode, vnode);
  }

  return function patch(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];

    for (i = 0; i < cbs.pre.length; ++i) {
      cbs.pre[i]();
    }

    if (!isVnode(oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);
      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }

    for (i = 0; i < cbs.post.length; ++i) {
      cbs.post[i]();
    }

    return vnode;
  };
}

function addNS(data, children, sel) {
  data.ns = "http://www.w3.org/2000/svg";

  if (sel !== "foreignObject" && children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      var childData = children[i].data;

      if (childData !== undefined) {
        addNS(childData, children[i].children, children[i].sel);
      }
    }
  }
}

function h(sel, b, c) {
  var data = {};
  var children;
  var text;
  var i;

  if (c !== undefined) {
    if (b !== null) {
      data = b;
    }

    if (array(c)) {
      children = c;
    } else if (primitive(c)) {
      text = c;
    } else if (c && c.sel) {
      children = [c];
    }
  } else if (b !== undefined && b !== null) {
    if (array(b)) {
      children = b;
    } else if (primitive(b)) {
      text = b;
    } else if (b && b.sel) {
      children = [b];
    } else {
      data = b;
    }
  }

  if (children !== undefined) {
    for (i = 0; i < children.length; ++i) {
      if (primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined);
    }
  }

  if (sel[0] === "s" && sel[1] === "v" && sel[2] === "g" && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
    addNS(data, children, sel);
  }

  return vnode(sel, data, children, text, undefined);
}

function copyToThunk(vnode, thunk) {
  vnode.data.fn = thunk.data.fn;
  vnode.data.args = thunk.data.args;
  thunk.data = vnode.data;
  thunk.children = vnode.children;
  thunk.text = vnode.text;
  thunk.elm = vnode.elm;
}

function init(thunk) {
  var cur = thunk.data;
  var vnode = cur.fn.apply(cur, _toConsumableArray(cur.args));
  copyToThunk(vnode, thunk);
}

function prepatch(oldVnode, thunk) {
  var i;
  var old = oldVnode.data;
  var cur = thunk.data;
  var oldArgs = old.args;
  var args = cur.args;

  if (old.fn !== cur.fn || oldArgs.length !== args.length) {
    copyToThunk(cur.fn.apply(cur, _toConsumableArray(args)), thunk);
    return;
  }

  for (i = 0; i < args.length; ++i) {
    if (oldArgs[i] !== args[i]) {
      copyToThunk(cur.fn.apply(cur, _toConsumableArray(args)), thunk);
      return;
    }
  }

  copyToThunk(oldVnode, thunk);
}

var thunk = function thunk(sel, key, fn, args) {
  if (args === undefined) {
    args = fn;
    fn = key;
    key = undefined;
  }

  return h(sel, {
    key: key,
    hook: {
      init: init,
      prepatch: prepatch
    },
    fn: fn,
    args: args
  });
};

function pre$1(vnode, newVnode) {
  var attachData = vnode.data.attachData; // Copy created placeholder and real element from old vnode

  newVnode.data.attachData.placeholder = attachData.placeholder;
  newVnode.data.attachData.real = attachData.real; // Mount real element in vnode so the patch process operates on it

  vnode.elm = vnode.data.attachData.real;
}

function post$1(_, vnode) {
  // Mount dummy placeholder in vnode so potential reorders use it
  vnode.elm = vnode.data.attachData.placeholder;
}

function destroy$1(vnode) {
  // Remove placeholder
  if (vnode.elm !== undefined) {
    vnode.elm.parentNode.removeChild(vnode.elm);
  } // Remove real element from where it was inserted


  vnode.elm = vnode.data.attachData.real;
}

function create$1(_, vnode) {
  var real = vnode.elm;
  var attachData = vnode.data.attachData;
  var placeholder = document.createElement("span"); // Replace actual element with dummy placeholder
  // Snabbdom will then insert placeholder instead

  vnode.elm = placeholder;
  attachData.target.appendChild(real);
  attachData.real = real;
  attachData.placeholder = placeholder;
}

function attachTo(target, vnode) {
  if (vnode.data === undefined) vnode.data = {};
  if (vnode.data.hook === undefined) vnode.data.hook = {};
  var data = vnode.data;
  var hook = vnode.data.hook;
  data.attachData = {
    target: target,
    placeholder: undefined,
    real: undefined
  };
  hook.create = create$1;
  hook.prepatch = pre$1;
  hook.postpatch = post$1;
  hook.destroy = destroy$1;
  return vnode;
}

function toVNode(node, domApi) {
  var api = domApi !== undefined ? domApi : htmlDomApi;
  var text;

  if (api.isElement(node)) {
    var id = node.id ? "#" + node.id : "";
    var cn = node.getAttribute("class");
    var c = cn ? "." + cn.split(" ").join(".") : "";
    var sel = api.tagName(node).toLowerCase() + id + c;
    var attrs = {};
    var children = [];
    var name;
    var i, n;
    var elmAttrs = node.attributes;
    var elmChildren = node.childNodes;

    for (i = 0, n = elmAttrs.length; i < n; i++) {
      name = elmAttrs[i].nodeName;

      if (name !== "id" && name !== "class") {
        attrs[name] = elmAttrs[i].nodeValue;
      }
    }

    for (i = 0, n = elmChildren.length; i < n; i++) {
      children.push(toVNode(elmChildren[i], domApi));
    }

    return vnode(sel, {
      attrs: attrs
    }, children, undefined, node);
  } else if (api.isText(node)) {
    text = api.getTextContent(node);
    return vnode(undefined, undefined, undefined, text, node);
  } else if (api.isComment(node)) {
    text = api.getTextContent(node);
    return vnode("!", {}, [], text, node);
  } else {
    return vnode("", {}, [], undefined, node);
  }
}

var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var colonChar = 58;
var xChar = 120;

function updateAttrs(oldVnode, vnode) {
  var key;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs;
  var attrs = vnode.data.attrs;
  if (!oldAttrs && !attrs) return;
  if (oldAttrs === attrs) return;
  oldAttrs = oldAttrs || {};
  attrs = attrs || {}; // update modified attributes, add new attributes

  for (key in attrs) {
    var cur = attrs[key];
    var old = oldAttrs[key];

    if (old !== cur) {
      if (cur === true) {
        elm.setAttribute(key, "");
      } else if (cur === false) {
        elm.removeAttribute(key);
      } else {
        if (key.charCodeAt(0) !== xChar) {
          elm.setAttribute(key, cur);
        } else if (key.charCodeAt(3) === colonChar) {
          // Assume xml namespace
          elm.setAttributeNS(xmlNS, key, cur);
        } else if (key.charCodeAt(5) === colonChar) {
          // Assume xlink namespace
          elm.setAttributeNS(xlinkNS, key, cur);
        } else {
          elm.setAttribute(key, cur);
        }
      }
    }
  } // remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined


  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}

var attributesModule = {
  create: updateAttrs,
  update: updateAttrs
};

function updateClass(oldVnode, vnode) {
  var cur;
  var name;
  var elm = vnode.elm;
  var oldClass = oldVnode.data.class;
  var klass = vnode.data.class;
  if (!oldClass && !klass) return;
  if (oldClass === klass) return;
  oldClass = oldClass || {};
  klass = klass || {};

  for (name in oldClass) {
    if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {
      // was `true` and now not provided
      elm.classList.remove(name);
    }
  }

  for (name in klass) {
    cur = klass[name];

    if (cur !== oldClass[name]) {
      elm.classList[cur ? "add" : "remove"](name);
    }
  }
}

var classModule = {
  create: updateClass,
  update: updateClass
};
var CAPS_REGEX = /[A-Z]/g;

function updateDataset(oldVnode, vnode) {
  var elm = vnode.elm;
  var oldDataset = oldVnode.data.dataset;
  var dataset = vnode.data.dataset;
  var key;
  if (!oldDataset && !dataset) return;
  if (oldDataset === dataset) return;
  oldDataset = oldDataset || {};
  dataset = dataset || {};
  var d = elm.dataset;

  for (key in oldDataset) {
    if (!dataset[key]) {
      if (d) {
        if (key in d) {
          delete d[key];
        }
      } else {
        elm.removeAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase());
      }
    }
  }

  for (key in dataset) {
    if (oldDataset[key] !== dataset[key]) {
      if (d) {
        d[key] = dataset[key];
      } else {
        elm.setAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase(), dataset[key]);
      }
    }
  }
}

var datasetModule = {
  create: updateDataset,
  update: updateDataset
};

function invokeHandler(handler, vnode, event) {
  if (typeof handler === "function") {
    // call function handler
    handler.call(vnode, event, vnode);
  } else if (_typeof(handler) === "object") {
    // call multiple handlers
    for (var i = 0; i < handler.length; i++) {
      invokeHandler(handler[i], vnode, event);
    }
  }
}

function handleEvent(event, vnode) {
  var name = event.type;
  var on = vnode.data.on; // call event handler(s) if exists

  if (on && on[name]) {
    invokeHandler(on[name], vnode, event);
  }
}

function createListener() {
  return function handler(event) {
    handleEvent(event, handler.vnode);
  };
}

function updateEventListeners(oldVnode, vnode) {
  var oldOn = oldVnode.data.on;
  var oldListener = oldVnode.listener;
  var oldElm = oldVnode.elm;
  var on = vnode && vnode.data.on;
  var elm = vnode && vnode.elm;
  var name; // optimization for reused immutable handlers

  if (oldOn === on) {
    return;
  } // remove existing listeners which no longer used


  if (oldOn && oldListener) {
    // if element changed or deleted we remove all existing listeners unconditionally
    if (!on) {
      for (name in oldOn) {
        // remove listener if element was changed or existing listeners removed
        oldElm.removeEventListener(name, oldListener, false);
      }
    } else {
      for (name in oldOn) {
        // remove listener if existing listener removed
        if (!on[name]) {
          oldElm.removeEventListener(name, oldListener, false);
        }
      }
    }
  } // add new listeners which has not already attached


  if (on) {
    // reuse existing listener or create new
    var listener = vnode.listener = oldVnode.listener || createListener(); // update vnode for listener

    listener.vnode = vnode; // if element changed or added we add all needed listeners unconditionally

    if (!oldOn) {
      for (name in on) {
        // add listener if element was changed or new listeners added
        elm.addEventListener(name, listener, false);
      }
    } else {
      for (name in on) {
        // add listener if new listener added
        if (!oldOn[name]) {
          elm.addEventListener(name, listener, false);
        }
      }
    }
  }
}

var eventListenersModule = {
  create: updateEventListeners,
  update: updateEventListeners,
  destroy: updateEventListeners
};
var raf$1 = typeof window !== "undefined" && window.requestAnimationFrame || setTimeout;

var nextFrame$1 = function nextFrame$1(fn) {
  raf$1(function () {
    raf$1(fn);
  });
};

function setNextFrame$1(obj, prop, val) {
  nextFrame$1(function () {
    obj[prop] = val;
  });
}

function getTextNodeRect(textNode) {
  var rect;

  if (document.createRange) {
    var range = document.createRange();
    range.selectNodeContents(textNode);

    if (range.getBoundingClientRect) {
      rect = range.getBoundingClientRect();
    }
  }

  return rect;
}

function calcTransformOrigin(isTextNode, textRect, boundingRect) {
  if (isTextNode) {
    if (textRect) {
      // calculate pixels to center of text from left edge of bounding box
      var relativeCenterX = textRect.left + textRect.width / 2 - boundingRect.left;
      var relativeCenterY = textRect.top + textRect.height / 2 - boundingRect.top;
      return "".concat(relativeCenterX, "px ").concat(relativeCenterY, "px");
    }
  }

  return "0 0"; // top left
}

function getTextDx(oldTextRect, newTextRect) {
  if (oldTextRect && newTextRect) {
    return oldTextRect.left + oldTextRect.width / 2 - (newTextRect.left + newTextRect.width / 2);
  }

  return 0;
}

function getTextDy(oldTextRect, newTextRect) {
  if (oldTextRect && newTextRect) {
    return oldTextRect.top + oldTextRect.height / 2 - (newTextRect.top + newTextRect.height / 2);
  }

  return 0;
}

function isTextElement(elm) {
  return elm.childNodes.length === 1 && elm.childNodes[0].nodeType === 3;
}

var removed, created;

function pre() {
  removed = {};
  created = [];
}

function create(oldVnode, vnode) {
  var hero = vnode.data.hero;

  if (hero && hero.id) {
    created.push(hero.id);
    created.push(vnode);
  }
}

function destroy(vnode) {
  var hero = vnode.data.hero;

  if (hero && hero.id) {
    var elm = vnode.elm;
    vnode.isTextNode = isTextElement(elm); // is this a text node?

    vnode.boundingRect = elm.getBoundingClientRect(); // save the bounding rectangle to a new property on the vnode

    vnode.textRect = vnode.isTextNode ? getTextNodeRect(elm.childNodes[0]) : null; // save bounding rect of inner text node

    var computedStyle = window.getComputedStyle(elm, undefined); // get current styles (includes inherited properties)

    vnode.savedStyle = JSON.parse(JSON.stringify(computedStyle)); // save a copy of computed style values

    removed[hero.id] = vnode;
  }
}

function post() {
  var i, id, newElm, oldVnode, oldElm, hRatio, wRatio, oldRect, newRect, dx, dy, origTransform, origTransition, newStyle, oldStyle, newComputedStyle, isTextNode, newTextRect, oldTextRect;

  for (i = 0; i < created.length; i += 2) {
    id = created[i];
    newElm = created[i + 1].elm;
    oldVnode = removed[id];

    if (oldVnode) {
      isTextNode = oldVnode.isTextNode && isTextElement(newElm); // Are old & new both text?

      newStyle = newElm.style;
      newComputedStyle = window.getComputedStyle(newElm, undefined); // get full computed style for new element

      oldElm = oldVnode.elm;
      oldStyle = oldElm.style; // Overall element bounding boxes

      newRect = newElm.getBoundingClientRect();
      oldRect = oldVnode.boundingRect; // previously saved bounding rect
      // Text node bounding boxes & distances

      if (isTextNode) {
        newTextRect = getTextNodeRect(newElm.childNodes[0]);
        oldTextRect = oldVnode.textRect;
        dx = getTextDx(oldTextRect, newTextRect);
        dy = getTextDy(oldTextRect, newTextRect);
      } else {
        // Calculate distances between old & new positions
        dx = oldRect.left - newRect.left;
        dy = oldRect.top - newRect.top;
      }

      hRatio = newRect.height / Math.max(oldRect.height, 1);
      wRatio = isTextNode ? hRatio : newRect.width / Math.max(oldRect.width, 1); // text scales based on hRatio
      // Animate new element

      origTransform = newStyle.transform;
      origTransition = newStyle.transition;

      if (newComputedStyle.display === "inline") {
        // inline elements cannot be transformed
        newStyle.display = "inline-block"; // this does not appear to have any negative side effects
      }

      newStyle.transition = origTransition + "transform 0s";
      newStyle.transformOrigin = calcTransformOrigin(isTextNode, newTextRect, newRect);
      newStyle.opacity = "0";
      newStyle.transform = "".concat(origTransform, "translate(").concat(dx, "px, ").concat(dy, "px) scale(").concat(1 / wRatio, ", ").concat(1 / hRatio, ")");
      setNextFrame$1(newStyle, "transition", origTransition);
      setNextFrame$1(newStyle, "transform", origTransform);
      setNextFrame$1(newStyle, "opacity", "1"); // Animate old element

      for (var key in oldVnode.savedStyle) {
        // re-apply saved inherited properties
        if (String(parseInt(key)) !== key) {
          var ms = key.substring(0, 2) === "ms";
          var moz = key.substring(0, 3) === "moz";
          var webkit = key.substring(0, 6) === "webkit";

          if (!ms && !moz && !webkit) {
            // ignore prefixed style properties
            oldStyle[key] = oldVnode.savedStyle[key];
          }
        }
      }

      oldStyle.position = "absolute";
      oldStyle.top = "".concat(oldRect.top, "px"); // start at existing position

      oldStyle.left = "".concat(oldRect.left, "px");
      oldStyle.width = "".concat(oldRect.width, "px"); // Needed for elements who were sized relative to their parents

      oldStyle.height = "".concat(oldRect.height, "px"); // Needed for elements who were sized relative to their parents

      oldStyle.margin = "0"; // Margin on hero element leads to incorrect positioning

      oldStyle.transformOrigin = calcTransformOrigin(isTextNode, oldTextRect, oldRect);
      oldStyle.transform = "";
      oldStyle.opacity = "1";
      document.body.appendChild(oldElm);
      setNextFrame$1(oldStyle, "transform", "translate(".concat(-dx, "px, ").concat(-dy, "px) scale(").concat(wRatio, ", ").concat(hRatio, ")")); // scale must be on far right for translate to be correct

      setNextFrame$1(oldStyle, "opacity", "0");
      oldElm.addEventListener("transitionend", function (ev) {
        if (ev.propertyName === "transform") {
          document.body.removeChild(ev.target);
        }
      });
    }
  }

  removed = created = undefined;
}

var heroModule = {
  pre: pre,
  create: create,
  destroy: destroy,
  post: post
};

function updateProps(oldVnode, vnode) {
  var key;
  var cur;
  var old;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.props;
  var props = vnode.data.props;
  if (!oldProps && !props) return;
  if (oldProps === props) return;
  oldProps = oldProps || {};
  props = props || {};

  for (key in props) {
    cur = props[key];
    old = oldProps[key];

    if (old !== cur && (key !== "value" || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}

var propsModule = {
  create: updateProps,
  update: updateProps
}; // Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.

var raf = typeof window !== "undefined" && window.requestAnimationFrame.bind(window) || setTimeout;

var nextFrame = function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
};

var reflowForced = false;

function setNextFrame(obj, prop, val) {
  nextFrame(function () {
    obj[prop] = val;
  });
}

function updateStyle(oldVnode, vnode) {
  var cur;
  var name;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style;
  var style = vnode.data.style;
  if (!oldStyle && !style) return;
  if (oldStyle === style) return;
  oldStyle = oldStyle || {};
  style = style || {};
  var oldHasDel = ("delayed" in oldStyle);

  for (name in oldStyle) {
    if (!style[name]) {
      if (name[0] === "-" && name[1] === "-") {
        elm.style.removeProperty(name);
      } else {
        elm.style[name] = "";
      }
    }
  }

  for (name in style) {
    cur = style[name];

    if (name === "delayed" && style.delayed) {
      for (var name2 in style.delayed) {
        cur = style.delayed[name2];

        if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
          setNextFrame(elm.style, name2, cur);
        }
      }
    } else if (name !== "remove" && cur !== oldStyle[name]) {
      if (name[0] === "-" && name[1] === "-") {
        elm.style.setProperty(name, cur);
      } else {
        elm.style[name] = cur;
      }
    }
  }
}

function applyDestroyStyle(vnode) {
  var style;
  var name;
  var elm = vnode.elm;
  var s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;

  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;

  if (!s || !s.remove) {
    rm();
    return;
  }

  if (!reflowForced) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    vnode.elm.offsetLeft;
    reflowForced = true;
  }

  var name;
  var elm = vnode.elm;
  var i = 0;
  var style = s.remove;
  var amount = 0;
  var applied = [];

  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }

  var compStyle = getComputedStyle(elm);
  var props = compStyle["transition-property"].split(", ");

  for (; i < props.length; ++i) {
    if (applied.indexOf(props[i]) !== -1) amount++;
  }

  elm.addEventListener("transitionend", function (ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

function forceReflow() {
  reflowForced = false;
}

var styleModule = {
  pre: forceReflow,
  create: updateStyle,
  update: updateStyle,
  destroy: applyDestroyStyle,
  remove: applyRemoveStyle
};
/* eslint-disable @typescript-eslint/no-namespace, import/export */

function flattenAndFilter(children, flattened) {
  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;

      // filter out falsey children, except 0 since zero can be a valid value e.g inside a chart
      if (child !== undefined && child !== null && child !== false && child !== "") {
        if (Array.isArray(child)) {
          flattenAndFilter(child, flattened);
        } else if (typeof child === "string" || typeof child === "number" || typeof child === "boolean") {
          flattened.push(vnode(undefined, undefined, undefined, String(child), undefined));
        } else {
          flattened.push(child);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return flattened;
}
/**
 * jsx/tsx compatible factory function
 * see: https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */


function jsx(tag, data) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var flatChildren = flattenAndFilter(children, []);

  if (typeof tag === "function") {
    // tag is a function component
    return tag(data, flatChildren);
  } else {
    if (flatChildren.length === 1 && !flatChildren[0].sel && flatChildren[0].text) {
      // only child is a simple text node, pass as text for a simpler vtree
      return h(tag, data, flatChildren[0].text);
    } else {
      return h(tag, data, flatChildren);
    }
  }
}

(function (jsx) {})(jsx || (jsx = {}));

/* common-shake removed: exports.array = */ void array;
/* common-shake removed: exports.attachTo = */ void attachTo;
exports.attributesModule = attributesModule;
exports.classModule = classModule;
exports.datasetModule = datasetModule;
exports.eventListenersModule = eventListenersModule;
exports.h = h;
/* common-shake removed: exports.heroModule = */ void heroModule;
/* common-shake removed: exports.htmlDomApi = */ void htmlDomApi;
exports.init = init$1;
/* common-shake removed: exports.jsx = */ void jsx;
/* common-shake removed: exports.primitive = */ void primitive;
exports.propsModule = propsModule;
exports.styleModule = styleModule;
/* common-shake removed: exports.thunk = */ void thunk;
/* common-shake removed: exports.toVNode = */ void toVNode;
/* common-shake removed: exports.vnode = */ void vnode;

},{}]},{},[1]);
