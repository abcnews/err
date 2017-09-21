# err

A simple wrapper for logging errors on the ABC News site.

```javascript
const errorLogger = require('@abcnews/err')('your project tag');

try {
	// some code which throws
} catch(e) {
	errorLogger(e);
}

// Or

Promise.reject('Meltdown').catch(errorLogger);
```