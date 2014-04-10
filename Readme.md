## View component [![Build Status](https://travis-ci.org/viewjs/view.svg?branch=master)](https://travis-ci.org/viewjs/view)  [![Npm 0.0.1](http://img.shields.io/badge/npm-0.0.1-orange.svg)]() [![MIT](http://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/viewjs/view/blob/master/LICENSE)    [![Component 0.0.1](http://img.shields.io/badge/component-0.0.1-orange.svg)](https://github.com/component/component)

### Installation

browser:

```bash
component install viewjs/view
```

Npm:

```bash
npm install viewjs
```

### Getting Started

First, require the view component:

```js
var view = require('view');
```

Let's define our first view:

```js
var ExampleView = view();
```

This doesn't do much by default, because almost all the functionality is divided up into separate components. However, each view gets a default empty template, a scope, and an empty renderer. That's it.

Let's create a new view instance. Each instance can be independently manipulated.

```js
var exampleView = new ExampleView();
```

Now we can access the scope:

```js
exampleView.scope
```

Each `View` object have an alias `.set(key, value)`, and `.get(key)` that defer to the attached scope.

The `.get(key)` method works semantically the same as the Scope's `.get(key)` method (i.e., bubbles up to the parents).

```js
exampleView.get('fooBar');
```

If an attribute doesn't exist, `undefined` will be returned.

### Getting Started

WIP

### Licence

The MIT License (MIT)

Copyright (c) 2014 viewjs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
