<div align="center">
<p>
    <a href="https://moonwell.fi" target="_blank">
      <img alt="Moonwell Logo" src="media/spaceman.png" width="300" />
    </a>
</p>
<p style="font-size: 1.5rem; font-weight: bold">Moonwell.js</p>

<img src="https://img.shields.io/npm/v/@moonwell-fi/moonwell.js?label=Latest+NPM+Version" />
<img src="https://img.shields.io/github/package-json/v/moonwell-fi/moonwell.js?label=Master+Branch+Version" />

<br />

<img src="https://img.shields.io/bundlephobia/minzip/@moonwell-fi/moonwell.js" />
<img src="https://img.shields.io/github/last-commit/moonwell-fi/moonwell.js" />
</div>

🌕 **Moonwell.js** is your one-stop library for interacting with the [Moonwell protocol](https://moonwell.fi).

* 📝 An up-to-date repository of all deployed contracts
* 📜 (**COMING SOON**) An up-to-date repository of the latest contract code
* 📊 (**COMING SOON**) A collection of utilities for querying and calculating various things about positions, rewards, etc
* 👩‍🚀 (**COMING SOON**) A collection of high level functions to do things within the Moonwell protocol (borrow, supply, etc)

# Installation

<p style="background: #0081E4; color: white; padding: 0.5rem 0.75rem; border-radius: 10px; border: none;">
    <span style="font-weight: bold">Please Note</span>: 
    This library is currently considered <span style="font-weight: bold">in ALPHA</span>, which means while we'll strive to keep module semantics and names consistent moving forward,
    there's likely going to be a number of changes as the library grows towards v1.0 
    <br><br>
    We will follow <a target="_blank" style="color: #FFCF60" href="https://semver.org/">semantic versioning</a> though, so you can safely use older versions without breakge! 
</p>

As with other javascript modules, you can use `NPM` to install `moonwell.js`:

```shell
$ npm install --save @moonwell-fi/moonwell.js
```

# Docs

You can find the latest typedoc docs deployed at https://moonwell-fi.github.io/moonwell.js/modules.html which holds an overview of the library and examples for usage.

# Examples

Examples can be found in `examples/`

- [Query Contract Addresses For Moonriver](examples/query-contracts/index.js)