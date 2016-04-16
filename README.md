# Fate Gulp Task
[![Build Status](https://travis-ci.org/kode4food/gulp-fatejs.svg?branch=master)](https://travis-ci.org/kode4food/gulp-fatejs)

[Fate](http://www.fate-lang.org/) is a programming language that targets the V8 JavaScript JVM.  It is a mostly functional language that provides first-class patterns, invocation guards, list comprehensions, flexible function application, and awesome concurrency.

And this is a Gulp Task for compiling it.

## How to Install and Use

```bash
npm install gulp-fatejs --save-dev
```

Then add it to your `gulpfile.js`, like so:

```javascript
// require the Fate module
var fate = require('gulp-fatejs');
```

## License (MIT License)
Copyright (c) 2016 Thomas S. Bradford

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
