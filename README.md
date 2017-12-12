# cuid-cli [![Build Status](https://travis-ci.org/haroun/cuid-cli.svg?branch=master)](https://travis-ci.org/haroun/cuid-cli)

> Command line interface for [cuid](https://github.com/ericelliott/cuid)


## Install

```
$ npm install --global cuid-cli
```


## Usage

```
$ cuid --help

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
```


## Related

*   [cuid](https://github.com/ericelliott/cuid) - API for this module


## License

MIT © [Harouna Traore](https://github.com/haroun)
