# CWD
cd pikchr

# Update C
wget -O pikchr.c https://raw.githubusercontent.com/drhsqlite/pikchr/html-defense/pikchr.c

# Update WASM (Speed)
emcc -O3 -s SINGLE_FILE=1 -s EXPORTED_FUNCTIONS='["_pikchr", "_free"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -s MALLOC=emmalloc -s MODULARIZE=1 -s STRICT=1 -o pikchr.speed.js pikchr.c

# Update WASM (Size)
emcc -Os -s SINGLE_FILE=1 -s EXPORTED_FUNCTIONS='["_pikchr", "_free"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -s MALLOC=emmalloc -s MODULARIZE=1 -s STRICT=1 -o pikchr.size.js pikchr.c
