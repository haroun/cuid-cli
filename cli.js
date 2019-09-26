#!/usr/bin/env node

const meow = require('meow');
const getStdin = require('get-stdin');
const cuid = require('cuid');

const cli = meow(`$ cuid --help

  Usage
    $ cuid [--slug] [number]
    $ echo [number] | cuid [--slug]

  Options
    -s, --slug Get slug

  Examples
    $ cuid
    ciyefyc630000x0y7mhd8o67n

    $ cuid 4
    ciyefyc630000x0y7mhd8o67n
    ciyefyc650001x0y7f9rqtegv
    ciyefyc650002x0y7e9826mhe
    ciyefyc650003x0y7az4v96ec

    $ cuid --slug
    1m0z7cm

    $ cuid 4 --slug
    1m0z7cm
    1n1z7om
    1o2z7ud
    1o3z73h

    $ echo '4' | cuid --slug
    1m0z7cm
    1n1z7om
    1o2z7ud
    1o3z73h
`, {
  flags: {
    slug: {
      type: 'boolean',
      alias: 's',
      default: false
    }
  }
});

const {input: [input], flags} = cli;

const init = async (data = 1, flags = {slug: false}) => {
  const cmd = (flags.s || flags.slug) === true ? cuid.slug : cuid;
  const loop = Number(data || 1);

  [...new Array(loop)].forEach(() => console.log(cmd()));
};

(async () => {
  if (input) {
    init(input, flags);
  } else {
    const data = await getStdin();
    init(data, flags);
  }
})();
