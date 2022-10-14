self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/scripts/handler.js',
    bundle: '/scripts/bundle.js',
    config: '/scripts/config.js',
    sw: '/scripts/sw.js',
};
