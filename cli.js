#!/usr/bin/env node

import meow from 'meow'
import stdin from 'get-stdin'
import cuid from 'cuid'

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
})

const {input: [input], flags} = cli
const {slug = false} = flags

const init = async ({data = 1, slug = false}) => {
  const cmd = slug === true ? cuid.slug : cuid
  const loop = Number(data || 1)

  Array.from({length: loop}).map(() => console.log(cmd()))
};

(async () => {
  if (input) {
    init({data: input, slug})
  } else {
    const data = await stdin()
    init({data, slug})
  }
})()
