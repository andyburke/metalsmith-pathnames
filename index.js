const extend = require( 'extend' );
const match = require( 'minimatch' );
const path = require( 'path' );

/**
 * @param {Object} options
 * @param {String} options.pattern is the glob pattern for matching files to process, default: *.html
 */
module.exports = function( _options ) {
    const options = extend( {
        pattern: '**/*.html',
        index: '**/index.html',
        base: ''
    }, _options );

    return ( files, metalsmith, done ) => {
        Object.keys( files ).filter( filename => match( filename, options.pattern ) ).forEach( filename => {
            const file = files[ filename ];
            file.path = `${ options.base}${ match( filename, options.index ) ? path.dirname( filename ) : filename }`;
            file.filename = path.basename( filename );
        } );

        done();
    };
};
