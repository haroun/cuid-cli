# cuid-cli ![Node.js CI](https://github.com/haroun/cuid-cli/workflows/Node.js%20CI/badge.svg) ![CodeQL](https://github.com/haroun/cuid-cli/workflows/CodeQL/badge.svg)

> Command line interface for [cuid](https://github.com/ericelliott/cuid)


## Install

```
$ npm install --global @haroun/cuid-cli
```

If you don't want to install the package globally, you can use npx instead

```
$ npx @haroun/cuid-cli
```


## Usage

```
$ cuid --help

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
```


## Related

*   [cuid](https://github.com/ericelliott/cuid) - API for this module


## License

MIT © [Harouna Traore](https://github.com/haroun)
