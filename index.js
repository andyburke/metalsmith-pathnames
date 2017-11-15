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
        base: '',
        replacements: []
    }, _options );

    return ( files, metalsmith, done ) => {
        const replacements = options.replacements.map( replacement => {
            return [ new RegExp( replacement[ 0 ] ), replacement[ 1 ] ];
        } );

        Object.keys( files ).filter( filename => match( filename, options.pattern ) ).forEach( filename => {
            const file = files[ filename ];
            file.filename = path.basename( filename );
            file.path = match( filename, options.index ) ? path.dirname( filename ) : filename;

            replacements.forEach( replacement => {
                file.path = file.path.replace( replacement[ 0 ], replacement[ 1 ] );
            } );

            if ( options.base.length ) {
                file.path = options.base.length + file.path;
            }
        } );

        done();
    };
};
