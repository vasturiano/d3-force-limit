import constant from './constant';

export default function() {
  let nDim,
    nodes,
    radius = (node => 1),     // accessor: number > 0
    x0 = (node => -Infinity), // accessor: min X
    x1 = (node => Infinity),  // accessor: max X
    y0 = (node => -Infinity), // accessor: min Y
    y1 = (node => Infinity),  // accessor: max Y
    z0 = (node => -Infinity), // accessor: min z
    z1 = (node => Infinity);  // accessor: max z

  function force() {
    nodes.forEach(node => {
      const r = radius(node);

      ['x', 'y', 'z'].slice(0, nDim).forEach(coord => {
        if (!node.hasOwnProperty(coord)) { return; }

        const range = { x: [x0, x1], y: [y0, y1], z: [z0, z1] }[coord]
          .map(accessFn => accessFn(node))
          .sort((a,b) => a - b);

        const center = node[coord];

        if (center-r < range[0] || center+r > range[1]) {
          // coordinate out of bounds
          const isBefore = center-r < range[0];
          const vAttr = `v${coord}`;
          if (isBefore === node[vAttr] < 0) {
            node[vAttr] = 0; // moving outwards, stop its motion
          }
          node[coord] = range[isBefore ? 0 : 1]; // move it to the closest edge
        }
      });
    });

    //
  }

  function initialize() {}

  force.initialize = function(initNodes, numDimensions = 2) {
    nodes = initNodes;
    nDim = numDimensions;
    initialize();
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), force) : radius;
  };

  force.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), force) : x0;
  };

  force.x1 = function(_) {
    return arguments.length ? (x1 = typeof _ === "function" ? _ : constant(+_), force) : x1;
  };

  force.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), force) : y0;
  };

  force.y1 = function(_) {
    return arguments.length ? (y1 = typeof _ === "function" ? _ : constant(+_), force) : y1;
  };

  force.z0 = function(_) {
    return arguments.length ? (z0 = typeof _ === "function" ? _ : constant(+_), force) : z0;
  };

  force.z1 = function(_) {
    return arguments.length ? (z1 = typeof _ === "function" ? _ : constant(+_), force) : z1;
  };

  return force;
}