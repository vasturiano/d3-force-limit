d3.forceLimit
==============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![Dependencies][dependencies-img]][dependencies-url]

A force type for the d3-force simulation engine to hard limit nodes positions to a specified range.

It can be used, for example to [keep nodes within boundaries](https://vasturiano.github.io/d3-force-pod/example/basic/).

See also [d3.forceSurface](https://github.com/vasturiano/d3-force-surface).

## Quick start

```
import d3ForceLimit from 'd3-force-limit';
```
or
```
d3.forceLimit = require('d3-force-limit');
```
or even
```
<script src="//unpkg.com/d3-force-limit"></script>
```
then
```
d3.forceSimulation()
    .nodes(<myNodes>)
    .force('limit', d3.forceLimit()
        .x0(20)
        .x1(45)
    );
```

## API reference

| Method | Description | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <b>radius</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node radius accessor function (`fn(node)`) or a constant (`num`) for all nodes. | 1 |
| <b>x0</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the minimum X accessor function (`fn(node)`) or a constant (`num`) for all nodes. | `-Infinity` |
| <b>x1</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the maximum X accessor function (`fn(node)`) or a constant (`num`) for all nodes. | `Infinity` |
| <b>y0</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the minimum Y accessor function (`fn(node)`) or a constant (`num`) for all nodes. | `-Infinity` |
| <b>y1</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the maximum Y accessor function (`fn(node)`) or a constant (`num`) for all nodes. | `Infinity` |
| <b>z0</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the minimum Z accessor function (`fn(node)`) or a constant (`num`) for all nodes. Only applicable when using a [3-dimensional force engine](https://github.com/vasturiano/d3-force-3d). | `-Infinity` |
| <b>z1</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the maximum Z accessor function (`fn(node)`) or a constant (`num`) for all nodes. Only applicable when using a [3-dimensional force engine](https://github.com/vasturiano/d3-force-3d).| `Infinity` |


[npm-img]: https://img.shields.io/npm/v/d3-force-limit.svg
[npm-url]: https://npmjs.org/package/d3-force-limit
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-force-limit.svg
[build-size-url]: https://bundlephobia.com/result?p=d3-force-limit
[dependencies-img]: https://img.shields.io/david/vasturiano/d3-force-limit.svg
[dependencies-url]: https://david-dm.org/vasturiano/d3-force-limit
