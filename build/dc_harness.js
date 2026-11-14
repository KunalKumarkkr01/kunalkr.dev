/*
 * Shared headless harness for tests of site/index.html.
 *
 * Extracts the real <script type="text/x-dc"> body and instantiates its
 * Component class against minimal stubs, so tests exercise the shipped code.
 * Same approach as test_solitaire.js (left untouched on purpose).
 */
'use strict';

const fs = require('fs');
const path = require('path');

const INDEX = path.join(__dirname, '..', 'site', 'index.html');

/**
 * readIndex - the current site/index.html as a string.
 * Returns: string. Usage: const html = readIndex();
 */
function readIndex() {
  return fs.readFileSync(INDEX, 'utf8');
}

/**
 * makeComponent - a fresh Component instance with synchronous setState.
 * Returns: the Component instance (state starts as its class-field defaults).
 * Usage: const c = makeComponent(); c.boot();
 */
function makeComponent() {
  const html = readIndex();
  const open = html.indexOf('<script type="text/x-dc"');
  if (open === -1) throw new Error('dc-script not found');
  const bodyStart = html.indexOf('>', open) + 1;
  const bodyEnd = html.indexOf('</script>', bodyStart);
  const source = html.slice(bodyStart, bodyEnd);

  class DCLogic {
    constructor() { this.state = {}; this.props = {}; }
    setState(patch, cb) {
      const next = typeof patch === 'function' ? patch(this.state) : patch;
      if (next) this.state = Object.assign({}, this.state, next);
      if (cb) cb();
    }
  }
  const React = { createRef: () => ({ current: null }) };

  const factory = new Function('React', 'DCLogic', 'matchMedia', source + '\nreturn Component;');
  const Component = factory(React, DCLogic, undefined);
  const c = new Component();
  c.state = Object.assign({}, c.state);
  return c;
}

module.exports = { makeComponent, readIndex, INDEX };
