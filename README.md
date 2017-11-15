# Metalsmith Pathnames

A very simple [Metalsmith](http://metalsmith.io) plugin that adds path and filename to a file's metadata.

## Installation

```bash
npm install --save-dev metalsmith-pathnames
```

## Usage

### JavaScript

```js
const pathnames = require( 'metalsmith-pathnames' );

Metalsmith( __dirname )
    .use( pathnames( {
        pattern: '**/*.html', // default file pattern to add path/filename to
        index: '**/index.html', // default index name to strip,
        base: '' // default base directory
    } ) )
    .build( error => {
        if ( error ) {
            console.error( error )
        }
    } );
```

### metalsmith.json

```json
{
  "plugins": {
    "metalsmith-pathnames": {
        "pattern": "**/*.html",
        "index": "**/index.html",
        "base": ""
    }
  }
}
```

## Options

- `pattern` is the file glob to match for files to add path/filename
- `index` is the file glob mathing your index to be stripped from the path
- `base` is an optional base directory to add

## License

The MIT License (MIT)

## Thanks

This plugin was developed at Oportun, Inc.