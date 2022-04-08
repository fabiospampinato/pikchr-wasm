
/* IMPORT */

import {describe} from 'fava';
import psize from '../dist/size.js';
import pspeed from '../dist/speed.js';

/* MAIN */

describe ( 'pikchr', () => {

  for ( const [pikchr, name] of [[psize, 'size'], [pspeed, 'speed']] ) {

    describe ( name, it => {

      it ( 'works', async t => {

        const markup = `box`;

        const svg = (
          `<svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 112.32 76.32">\n` +
            `<path d="M2,74L110,74L110,2L2,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />\n` +
          `</svg>\n`
        );

        await pikchr.loadWASM ();

        const output = pikchr.render ( markup );

        t.is ( output, svg );

      });

    });

  }

});
