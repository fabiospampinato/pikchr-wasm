
/* IMPORT */

import once from 'function-once';

/* MAIN */

const generate = ( Module: Function ) => {

  const Pikchr = {

    /* LIFECYCLE API */

    loadWASM: once ( async (): Promise<void> => {

      const instance = await Module ();

      Pikchr.render = ( markup: string, svgClass: string = 'pikchr', flags: number = 0, height: number = 1, width: number = 1 ): string => {

        const svg = instance.ccall ( 'pikchr', 'string', ['string', 'string', 'number', 'number', 'number'], [markup, svgClass, flags, height, width] );

        instance._free ( svg );

        return svg;

      };

    }),

    /* API */

    render: ( markup: string, svgClass: string = 'pikchr', flags: number = 0, height: number = 1, width: number = 1 ): string => {

      throw new Error ( '[pikchr] You need to call and await "pikchr.loadWASM" first' );

    }

  };

  return Pikchr;

};

/* EXPORT */

export default generate;
