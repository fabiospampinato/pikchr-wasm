
/* MAIN */

const generate = ( Module: Function ) => {

  let instance;

  return {

    /* LIFECYCLE API */

    loadWASM: async (): Promise<void> => {

      if ( instance ) return;

      instance = await Module ();

    },

    /* API */

    render: ( markup: string, svgClass: string = 'pikchr', flags: number = 0, height: number = 1, width: number = 1 ): string => {

      if ( !instance ) throw new Error ( '[pikchr] You need to call and await "pikchr.loadWASM" first' );

      const svg = instance.ccall ( 'pikchr', 'string', ['string', 'string', 'number', 'number', 'number'], [markup, svgClass, flags, height, width] );

      instance._free ( svg );

      return svg;

    }

  };

};

/* EXPORT */

export default generate;
