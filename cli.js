#!/usr/bin/env node

const meow = require('meow');
const stdin = require('get-stdin');
const cuid = require('cuid');

const cli = meow(`
  Usage
    $ cuid [number]

  Options:
    --slug, -s Get slug

  Example
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
  alias: {
    s: 'slug'
  }
});

const input = cli.input[0];
const fn = cli.flags.slug ? cuid.slug : cuid;

function init(data, cmd = cuid) {
  let loop = Number(data) || 0;
  do {
    console.log(cmd());
    loop -= 1;
  } while (loop > 0);
}

if (input && process.stdin.isTTY) {
  init(input, fn);
} else {
  stdin().then(data => init(data, fn));
}
