
/* IMPORT */

const {default: pindex} = require ( '..' );
const {default: psize} = require ( '../size' );
const {default: pspeed} = require ( '../speed' );

/* MAIN */

const test = async Pikchr => {

  const markup = `box`;

  const svg = (
    `<svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 112.32 76.32">\n` +
      `<path d="M2,74L110,74L110,2L2,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />\n` +
    `</svg>\n`
  );

  await Pikchr.loadWASM ();

  const output = Pikchr.render ( markup );

  console.assert ( output === svg, 'Rendering works' );

};

test ( pindex );
test ( psize );
test ( pspeed );
