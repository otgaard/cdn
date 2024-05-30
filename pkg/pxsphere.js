// src/lib/maths/Vec3.ts
var Vec3 = class _Vec3 extends Float32Array {
  static size = 3;
  constructor(x, y, z) {
    super(_Vec3.size);
    this.set(x ?? 0, y, z);
  }
  static fromBuffer(buffer, offset) {
    const buf = new Float32Array(buffer, offset, 3);
    return buf;
  }
  static create() {
    return new _Vec3();
  }
  clone() {
    return new _Vec3(this);
  }
  put(x, y, z) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    return this;
  }
  set(x, y, z) {
    if (typeof x === "number") {
      this[0] = x;
      this[1] = y ?? 0;
      this[2] = z ?? 0;
    } else {
      super.set(x);
    }
    return this;
  }
  static set(r, x, y, z) {
    r[0] = x;
    r[1] = y;
    r[2] = z;
    return r;
  }
  copy(u) {
    this.set(u);
    return this;
  }
  static copy(r, u) {
    r.set(u);
    return r;
  }
  add(u) {
    this[0] += u[0];
    this[1] += u[1];
    this[2] += u[2];
    return this;
  }
  static add(u, v, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] + v[0];
    r[1] = u[1] + v[1];
    r[2] = u[2] + v[2];
    return r;
  }
  addScalar(s) {
    this[0] += s;
    this[1] += s;
    this[2] += s;
    return this;
  }
  static addScalar(u, s, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] + s;
    r[1] = u[1] + s;
    r[2] = u[2] + s;
    return r;
  }
  sub(u) {
    this[0] -= u[0];
    this[1] -= u[1];
    this[2] -= u[2];
    return this;
  }
  static sub(u, v, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] - v[0];
    r[1] = u[1] - v[1];
    r[2] = u[2] - v[2];
    return r;
  }
  subScalar(s) {
    this[0] -= s;
    this[1] -= s;
    this[2] -= s;
    return this;
  }
  static subScalar(u, s, r) {
    r = r ?? new _Vec3();
    r[0] -= s;
    r[1] -= s;
    r[2] -= s;
    return r;
  }
  mul(u) {
    this[0] *= u[0];
    this[1] *= u[1];
    this[2] *= u[2];
    return this;
  }
  static mul(u, v, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] * v[0];
    r[1] = u[1] * v[1];
    r[2] = u[2] * v[2];
    return r;
  }
  mulScalar(s) {
    this[0] *= s;
    this[1] *= s;
    this[2] *= s;
    return this;
  }
  static mulScalar(u, s, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] * s;
    r[1] = u[1] * s;
    r[2] = u[2] * s;
    return r;
  }
  div(u) {
    this[0] /= u[0];
    this[1] /= u[1];
    this[2] /= u[2];
    return this;
  }
  static div(u, v, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] / v[0];
    r[1] = u[1] / v[1];
    r[2] = u[2] / v[2];
    return r;
  }
  divScalar(s) {
    this[0] /= s;
    this[1] /= s;
    this[2] /= s;
    return this;
  }
  static divScalar(u, s, r) {
    r = r ?? new _Vec3();
    r[0] = u[0] / s;
    r[1] = u[1] / s;
    r[2] = u[2] / s;
    return r;
  }
  dot(u) {
    return this.x * u[0] + this.y * u[1] + this.z * u[2];
  }
  static dot(u, v) {
    return u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
  }
  dotScalar(x, y, z) {
    return this.x * x + this.y * y + this.z * z;
  }
  static dotScalar(u, x, y, z) {
    return u[0] * x + u[1] * y + u[2] * z;
  }
  normalise() {
    return this.mulScalar(1 / this.len());
  }
  static normalise(u) {
    if (Array.isArray(u) || u instanceof Float32Array) {
      const invLen = 1 / _Vec3.len(u);
      for (let i = 0; i !== 3; ++i)
        u[i] *= invLen;
      return u;
    } else if (u instanceof _Vec3) {
      return u.mulScalar(1 / u.len());
    }
    return void 0;
  }
  cross(u) {
    const x = this.x;
    const y = this.y;
    const z = this.z;
    this.x = y * u[2] - z * u[1];
    this.y = z * u[0] - x * u[2];
    this.z = x * u[1] - y * u[0];
    return this;
  }
  static cross(u, v, r) {
    r = r ?? new _Vec3();
    r[0] = u[1] * v[2] - u[2] * v[1];
    r[1] = u[2] * v[0] - u[0] * v[2];
    r[2] = u[0] * v[1] - u[1] * v[0];
    return r;
  }
  static crossF(r, offset, u, v) {
    r[offset] = u[1] * v[2] - u[2] * v[1];
    r[offset + 1] = u[2] * v[0] - u[0] * v[2];
    r[offset + 2] = u[0] * v[1] - u[1] * v[0];
  }
  lenSq() {
    return this.dot(this);
  }
  static lenSq(u) {
    return _Vec3.dot(u, u);
  }
  len() {
    return Math.sqrt(this.lenSq());
  }
  static len(u) {
    return Math.sqrt(_Vec3.dot(u, u));
  }
  get x() {
    return this[0];
  }
  set x(value) {
    this[0] = value;
  }
  get y() {
    return this[1];
  }
  set y(value) {
    this[1] = value;
  }
  get z() {
    return this[2];
  }
  set z(value) {
    this[2] = value;
  }
};

// src/lib/maths/functions.ts
var EPSILON = 1e-6;
var PI = Math.PI;
var TWO_PI = 2 * PI;
var HALF_PI = PI / 2;
function eq(A, B, epsilon = EPSILON) {
  return Math.abs(A - B) < epsilon;
}
function clamp(val, min, max) {
  return val < min ? min : val > max ? max : val;
}
function smoothstep(A, B, u) {
  u = clamp((u - A) / (B - A), 0, 1);
  return u * u * (3 - 2 * u);
}
function lerp(A, B, u) {
  return (1 - u) * A + u * B;
}
function lerpI(A, B, R, u) {
  const um = 1 - u;
  for (let i = 0; i !== R.length; ++i)
    R[i] = um * A[i] + u * B[i];
}

// src/lib/maths/Vec2.ts
var Vec2 = class _Vec2 extends Float32Array {
  static size = 2;
  constructor(x, y) {
    super(_Vec2.size);
    this.set(x ?? 0, y ?? (typeof x === "number" ? x : void 0));
  }
  static create() {
    return new _Vec2();
  }
  clone() {
    return new _Vec2(this);
  }
  put(x, y) {
    this[0] = x;
    this[1] = y;
    return this;
  }
  set(x, y) {
    if (typeof x === "number") {
      this[0] = x;
      this[1] = y ?? 0;
    } else {
      super.set(x);
    }
    return this;
  }
  static set(r, x, y) {
    r[0] = x;
    r[1] = y;
    return r;
  }
  copy(u) {
    this.set(u);
    return this;
  }
  static copy(r, u) {
    r.set(u);
    return r;
  }
  add(u) {
    this[0] += u[0];
    this[1] += u[1];
    return this;
  }
  static add(u, v, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] + v[0];
    r[1] = u[1] + v[1];
    return r;
  }
  addScalar(s) {
    this[0] += s;
    this[1] += s;
    return this;
  }
  static addScalar(u, s, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] + s;
    r[1] = u[1] + s;
    return r;
  }
  addScaled(u, s) {
    this[0] += u[0] * s;
    this[1] += u[1] * s;
    return this;
  }
  static addScaled(u, v, s, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] + v[0] * s;
    r[1] = u[1] + v[1] * s;
    return r;
  }
  sub(u) {
    this[0] -= u[0];
    this[1] -= u[1];
    return this;
  }
  static sub(u, v, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] - v[0];
    r[1] = u[1] - v[1];
    return r;
  }
  subScalar(s) {
    this[0] -= s;
    this[1] -= s;
    return this;
  }
  static subScalar(u, s, r) {
    r = r ?? new _Vec2();
    r[0] -= s;
    r[1] -= s;
    return r;
  }
  mul(u) {
    this[0] *= u[0];
    this[1] *= u[1];
    return this;
  }
  static mul(u, v, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] * v[0];
    r[1] = u[1] * v[1];
    return r;
  }
  mulScalar(s) {
    this[0] *= s;
    this[1] *= s;
    return this;
  }
  static mulScalar(u, s, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] * s;
    r[1] = u[1] * s;
    return r;
  }
  div(u) {
    this[0] /= u[0];
    this[1] /= u[1];
    return this;
  }
  static div(u, v, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] / v[0];
    r[1] = u[1] / v[1];
    return r;
  }
  divScalar(s) {
    this[0] /= s;
    this[1] /= s;
    return this;
  }
  static divScalar(u, s, r) {
    r = r ?? new _Vec2();
    r[0] = u[0] / s;
    r[1] = u[1] / s;
    return r;
  }
  dot(u) {
    return this.x * u[0] + this.y * u[1];
  }
  static dot(u, v) {
    return u[0] * v[0] + u[1] * v[1];
  }
  static perp(u) {
    return new _Vec2(-u.y, u.x);
  }
  dotScalar(x, y) {
    return this.x * x + this.y * y;
  }
  static dotScalar(u, x, y) {
    return u[0] * x + u[1] * y;
  }
  normalise() {
    return this.mulScalar(1 / this.len);
  }
  static normalise(u) {
    if (Array.isArray(u) || u instanceof Float32Array) {
      const invLen = 1 / _Vec2.len(u);
      u[0] *= invLen;
      u[1] *= invLen;
      return u;
    } else if (u instanceof _Vec2) {
      return u.mulScalar(1 / u.len);
    }
    return void 0;
  }
  static kross(u, v) {
    return u[0] * v[1] - u[1] * v[0];
  }
  static reflect(I, N) {
    const th = 2 * _Vec2.dot(I, N);
    const r = _Vec2.mulScalar(N, th);
    return _Vec2.sub(I, r);
  }
  clamp(min, max) {
    this.x = clamp(this.x, min, max);
    this.y = clamp(this.x, min, max);
    return this;
  }
  apply(fnc) {
    this.x = fnc(this.x);
    this.y = fnc(this.y);
    return this;
  }
  static distSq(u, v) {
    return Math.pow(v[0] - u[0], 2) + Math.pow(v[1] - u[1], 2);
  }
  static dist(u, v) {
    return Math.sqrt(_Vec2.distSq(u, v));
  }
  lenSq() {
    return this.dot(this);
  }
  static lenSq(u) {
    return _Vec2.dot(u, u);
  }
  get len() {
    return Math.sqrt(this.lenSq());
  }
  static len(u) {
    return Math.sqrt(_Vec2.dot(u, u));
  }
  invert() {
    this.x = 1 / this.x;
    this.y = 1 / this.y;
    return this;
  }
  get x() {
    return this[0];
  }
  set x(value) {
    this[0] = value;
  }
  get y() {
    return this[1];
  }
  set y(value) {
    this[1] = value;
  }
};

// src/lib/maths/prng.js
function _prng_restore(prng, xg, opts) {
  const state = opts && opts.state;
  if (state) {
    if (typeof state === "object")
      xg.copy(state, xg);
    prng.state = () => xg.copy(xg, {});
  }
}
function _prng_xor_core(xg, opts) {
  const prng = () => (xg.next() >>> 0) / 4294967296;
  prng.double = () => {
    let top, bot, result;
    do {
      top = xg.next() >>> 11;
      bot = (xg.next() >>> 0) / 4294967296;
      result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = () => xg.next() | 0;
  prng.quick = prng;
  _prng_restore(prng, xg, opts);
  return prng;
}
var prng_default = prng_xor128;
function prng_xor128(seed2, opts) {
  const xg = new Xor128Gen(seed2);
  return _prng_xor_core(xg, opts);
}
var Xor128Gen = class {
  constructor(seed2) {
    if (seed2 == null)
      seed2 = +/* @__PURE__ */ new Date();
    let strseed = "";
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
    if (seed2 === (seed2 | 0)) {
      this.x = seed2;
    } else {
      strseed += seed2;
    }
    for (let k = 0; k < strseed.length + 64; k++) {
      this.x ^= strseed.charCodeAt(k) | 0;
      this.next();
    }
  }
  next() {
    const { x, y, z, w } = this;
    const t = x ^ x << 11;
    this.x = y;
    this.y = z;
    this.z = w;
    return this.w = w ^ (w >>> 19 ^ t ^ t >>> 8);
  }
  copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    return t;
  }
};

// src/lib/maths/Poisson.ts
function* SphereDiskSample(radius) {
  const k = 11;
  const m = 4;
  const eps = 1e-6;
  const rotx = Math.cos(2 * Math.PI * m / k);
  const roty = Math.sin(2 * Math.PI * m / k);
  const sradius = Math.tan(0.5 * radius);
  const sradius2 = sradius * sradius;
  const gridsize = Math.ceil((1 - eps) * Math.PI * (1 + Math.sqrt(2)) / 3 / radius);
  const gridPaddedRowSize = 2 * gridsize + 8;
  const grid = new Float64Array(8 * (gridsize + 4) * (gridsize + 4)).fill(NaN);
  const queue = [];
  const generator = prng_default(123);
  const [Px, Py] = random_northern_point();
  yield sample(Px, Py, far(Px, Py));
  pick:
    while (queue.length) {
      const i = generator.double() * queue.length | 0;
      const parent = queue[i];
      const t = tanpi_2(2 * generator.double() - 1);
      const q = 1 / (1 + t * t);
      let dw, dx, dy;
      dx = q ? (1 - t * t) * q : -1;
      dy = q ? 2 * t * q : 0;
      for (let j = 0; j < k; ++j) {
        dw = dx;
        dx = dw * rotx - dy * roty;
        dy = dw * roty + dy * rotx;
        const r2 = candidate_radius();
        const ax = parent[0], ay = parent[1];
        const bx = r2 * dx, by = r2 * dy;
        const px = ax + bx, py = ay + by;
        const qr = 1 - ax * bx - ay * by, qi = ax * by - ay * bx;
        const q2 = 1 / (qr * qr + qi * qi);
        if (q2 === Infinity)
          continue;
        const x = q2 * (px * qr - py * qi);
        const y = q2 * (py * qr + px * qi);
        const indices = far(x, y);
        if (indices) {
          yield sample(x, y, indices);
          continue pick;
        }
      }
      const r = queue.pop();
      if (i < queue.length)
        queue[i] = r;
    }
  function candidate_radius() {
    const rand0 = generator.double();
    const rand1 = generator.double();
    return sradius * (1 + eps + 0.65 * rand0 * rand1);
  }
  function tanpi_2(a) {
    let b = 1 - a * a;
    return a * (-0.0187108 * b + 0.31583526 + 1.27365776 / b);
  }
  function random_northern_point() {
    const t = tanpi_2(2 * generator.double() - 1), u = 0.25 * generator.double(), v = Math.sqrt(u / (1 - u)), s = 1 / (1 + t * t);
    return s !== 0 ? [(1 - t * t) * (v * s), 2 * t * (v * s)] : [-v, 0];
  }
  function stereo_compare(ax, ay, bx, by, rr) {
    let dx = bx - ax, dy = by - ay;
    let qr = 1 + ax * bx + ay * by, qi = ax * by - ay * bx;
    return dx * dx + dy * dy <= rr * (qr * qr + qi * qi);
  }
  function far(x, y) {
    const stereoX = x, stereoY = y;
    const sx = (x >= 0) - (x < 0);
    const sy = (y >= 0) - (y < 0);
    const s = sx * sy;
    x *= sx, y *= sy;
    const r_2 = 1 / (x * x + y * y);
    const rbig = r_2 < 1;
    if (r_2 !== 0 | r_2 !== Infinity) {
      x *= r_2 * rbig + !rbig;
      y *= r_2 * rbig + !rbig;
    } else {
      x = 0, y = 0;
    }
    let xt = x;
    x = 4 / Math.PI * Math.atan2(xt, 1 + y);
    y = 4 / Math.PI * Math.atan2(y, 1 + xt);
    xt = x;
    x = !rbig * x + rbig * (1 - y);
    y = !rbig * y + rbig * (1 - xt);
    x *= gridsize, y *= gridsize;
    let xg = x | 0, yg = y | 0;
    const xr = x - xg, yr = y - yg;
    xg -= s * (s * (2 * xr + yr) < 1.5 * s - 0.5) * (s * (yr - xr) > 0);
    yg -= s * (s * (2 * yr + xr) < 1.5 * s - 0.5) * (s * (yr - xr) <= 0);
    xg = sx * xg - (sx < 0);
    yg = sy * yg - (sy < 0);
    const j0 = yg + gridsize + 1;
    const i0 = xg + gridsize + 1;
    for (let j = j0; j < j0 + 7; ++j) {
      const index0 = 2 * (j * gridPaddedRowSize + i0);
      for (let i = index0; i < index0 + 14; i += 2) {
        const gridx = grid[i];
        if (gridx !== gridx)
          continue;
        if (stereo_compare(stereoX, stereoY, gridx, grid[i + 1], sradius2)) {
          return false;
        }
      }
    }
    return [xg, yg];
  }
  function populate_grid(i, j, x, y) {
    const jpad = j + gridsize + 4, ipad = i + gridsize + 4;
    const index = 2 * (gridPaddedRowSize * jpad + ipad);
    grid[index] = x;
    grid[index + 1] = y;
  }
  function flip(xg) {
    const sx = (xg > 0) - (xg <= 0);
    return ~(xg - sx * gridsize) + sx * gridsize;
  }
  function sample(x, y, [xg, yg]) {
    const w = gridsize;
    const sample_point = [x, y];
    populate_grid(xg, yg, x, y);
    const xg_near_side = xg > w - 4 | xg <= -w + 4;
    const yg_near_side = yg > w - 4 | yg <= -w + 4;
    if (xg_near_side) {
      populate_grid(flip(xg), ~yg, x, y);
      if (yg_near_side)
        populate_grid(~flip(xg), ~flip(yg), x, y);
    }
    if (yg_near_side)
      populate_grid(~xg, flip(yg), x, y);
    queue.push(sample_point);
    return sample_point;
  }
}

// src/lib/geometry/Generator.ts
function makePointRect(gl, x, y) {
  x = Math.floor(x);
  y = Math.floor(y);
  const data = new Float32Array(2 * x * y);
  for (let j = 0; j < y; ++j) {
    for (let i = 0; i < x; ++i) {
      const idx = 2 * (j * x + i);
      data[idx] = i / x;
      data[idx + 1] = j / y;
    }
  }
  const vao = gl.createVertexArray();
  if (vao != null) {
    gl.bindVertexArray(vao);
    const buf = gl.createBuffer();
    if (buf == null)
      return null;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    return [vao, buf, data.length / 2];
  }
  return null;
}
function stereographicToCartesian(u, v) {
  const denominator = 1 + u * u + v * v;
  const x = 2 * u / denominator;
  const y = 2 * v / denominator;
  const z = (-1 + u * u + v * v) / denominator;
  return new Vec3(x, y, z);
}
function makePoissonSphere(gl, radius) {
  const gen = SphereDiskSample(radius);
  const points = [];
  let done = false;
  while (!done) {
    const val = gen.next();
    if (val == null || val.done === true)
      done = true;
    else if (val.value != null) {
      points.push(stereographicToCartesian(val.value[0], val.value[1]));
    }
  }
  const data = new Float32Array(points.length * 3);
  points.forEach((p, i) => {
    data[i * 3] = p.x;
    data[i * 3 + 1] = p.y;
    data[i * 3 + 2] = p.z;
  });
  const vao = gl.createVertexArray();
  if (vao != null) {
    gl.bindVertexArray(vao);
    const buf = gl.createBuffer();
    if (buf == null)
      return null;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    return [vao, buf, points.length];
  }
  return null;
}

// src/lib/engine/Program.ts
function compileProgram(gl, vertexShader, fragmentShader) {
  const progDef = [
    [vertexShader, gl.VERTEX_SHADER, "vertex"],
    [fragmentShader, gl.FRAGMENT_SHADER, "fragment"]
  ];
  const shaders = [];
  const program = gl.createProgram();
  if (program == null) {
    return "Failed to create shader program";
  }
  for (let i = 0; i !== progDef.length; ++i) {
    const shader = gl.createShader(progDef[i][1]);
    if (shader == null)
      return `Failed to create ${progDef[i][2]} shader`;
    let content = progDef[i][0];
    if (!content.includes("#version")) {
      console.log("inserting version");
      content = `#version 300 es
${content}`;
    }
    gl.shaderSource(shader, content);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === true) {
      shaders.push(shader);
      gl.attachShader(program, shader);
    } else {
      shaders.forEach((e) => {
        gl.deleteShader(e);
      });
      const err = gl.getShaderInfoLog(shader) ?? "unknown";
      return `Failed to create ${progDef[i][2]} shader with error:
${err}`;
    }
  }
  gl.linkProgram(program);
  shaders.forEach((s) => {
    gl.deleteShader(s);
  });
  if (gl.getProgramParameter(program, gl.LINK_STATUS) === true) {
    return program;
  } else {
    const err = gl.getProgramInfoLog(program) ?? "unknown";
    gl.deleteProgram(program);
    return `Failed to create program with error:
${err}`;
  }
}

// src/lib/maths/Mat3.ts
var Mat3 = class _Mat3 extends Float32Array {
  static size = 9;
  constructor() {
    super(_Mat3.size);
  }
  static create(copy) {
    const R = new _Mat3();
    if (copy != null)
      R.set(copy);
    return R;
  }
  static idx(row, col) {
    return 3 * col + row;
  }
  static set(mat, row, col, value) {
    mat[_Mat3.idx(row, col)] = value;
  }
  static get(mat, row, col) {
    return mat[_Mat3.idx(row, col)];
  }
  // Returns the rotation matrix as a 3x3
  static fromMat4Rotation(mat) {
    const result = _Mat3.create();
    _Mat3.setColumn(result, 0, Mat4.getColumn(mat, 0));
    _Mat3.setColumn(result, 1, Mat4.getColumn(mat, 1));
    _Mat3.setColumn(result, 2, Mat4.getColumn(mat, 2));
    return result;
  }
  copyMat4Rotation(mat) {
    _Mat3.setColumn(this, 0, Mat4.getColumn(mat, 0));
    _Mat3.setColumn(this, 1, Mat4.getColumn(mat, 1));
    _Mat3.setColumn(this, 2, Mat4.getColumn(mat, 2));
    return this;
  }
  static getColumn(mat, col) {
    return [
      mat[_Mat3.idx(0, col)],
      mat[_Mat3.idx(1, col)],
      mat[_Mat3.idx(2, col)]
    ];
  }
  static setColumn(mat, col, value) {
    mat[_Mat3.idx(0, col)] = value[0];
    mat[_Mat3.idx(1, col)] = value[1];
    mat[_Mat3.idx(2, col)] = value[2] ?? (col === 2 ? 1 : 0);
  }
  static makeTranslation(x, y) {
    const result = _Mat3.makeIdentity();
    result[_Mat3.idx(0, 2)] = x;
    result[_Mat3.idx(1, 2)] = y;
    return result;
  }
  static translate(mat, x, y) {
    if (typeof y === "number") {
      mat[_Mat3.idx(0, 2)] = x;
      mat[_Mat3.idx(1, 2)] = y;
    } else {
      const val = x;
      mat[_Mat3.idx(0, 2)] = val[0];
      mat[_Mat3.idx(1, 2)] = val[1];
    }
    return mat;
  }
  static makeIdentity() {
    const result = _Mat3.create();
    result[_Mat3.idx(0, 0)] = 1;
    result[_Mat3.idx(1, 1)] = 1;
    result[_Mat3.idx(2, 2)] = 1;
    return result;
  }
  static makeRotation(theta) {
    const [cosTheta, sinTheta] = [Math.cos(theta), Math.sin(theta)];
    const r = _Mat3.create();
    _Mat3.set(r, 0, 0, cosTheta);
    _Mat3.set(r, 0, 1, -sinTheta);
    _Mat3.set(r, 1, 0, sinTheta);
    _Mat3.set(r, 1, 1, cosTheta);
    _Mat3.set(r, 2, 2, 1);
    return r;
  }
  static rotate(mat, theta) {
    const [cosTheta, sinTheta] = [Math.cos(theta), Math.sin(theta)];
    _Mat3.set(mat, 0, 0, cosTheta);
    _Mat3.set(mat, 0, 1, -sinTheta);
    _Mat3.set(mat, 1, 0, sinTheta);
    _Mat3.set(mat, 1, 1, cosTheta);
    _Mat3.set(mat, 2, 2, 1);
    return mat;
  }
  static makeScale(scale) {
    const r = _Mat3.create();
    _Mat3.set(r, 0, 0, scale[0]);
    _Mat3.set(r, 1, 1, scale[1]);
    _Mat3.set(r, 2, 2, 1);
    return r;
  }
  static scale(mat, scale) {
    _Mat3.set(mat, 0, 0, scale[0]);
    _Mat3.set(mat, 1, 1, scale[1]);
    _Mat3.set(mat, 2, 2, 1);
    return mat;
  }
  static scaleBy(mat, scale) {
    _Mat3.set(mat, 0, 0, _Mat3.get(mat, 0, 0) * scale[0]);
    _Mat3.set(mat, 0, 1, _Mat3.get(mat, 0, 1) * scale[1]);
    _Mat3.set(mat, 1, 0, _Mat3.get(mat, 1, 0) * scale[0]);
    _Mat3.set(mat, 1, 1, _Mat3.get(mat, 1, 1) * scale[1]);
    return mat;
  }
  static makeTransform(position, scale, rotation) {
    const r = _Mat3.create();
    _Mat3.set(r, 0, 0, scale[0] * Math.cos(rotation));
    _Mat3.set(r, 0, 1, -scale[1] * Math.sin(rotation));
    _Mat3.set(r, 1, 0, scale[0] * Math.sin(rotation));
    _Mat3.set(r, 1, 1, scale[1] * Math.cos(rotation));
    _Mat3.set(r, 0, 2, position[0]);
    _Mat3.set(r, 1, 2, position[1]);
    _Mat3.set(r, 2, 2, 1);
    return r;
  }
  mul2(v) {
    const x = v[0];
    const y = v[1];
    v[0] = _Mat3.get(this, 0, 0) * x + _Mat3.get(this, 0, 1) * y;
    v[1] = _Mat3.get(this, 1, 0) * x + _Mat3.get(this, 1, 1) * y;
    return v;
  }
  transform2(v) {
    const x = v[0];
    const y = v[1];
    v[0] = _Mat3.get(this, 0, 0) * x + _Mat3.get(this, 0, 1) * y + _Mat3.get(this, 0, 2);
    v[1] = _Mat3.get(this, 1, 0) * x + _Mat3.get(this, 1, 1) * y + _Mat3.get(this, 1, 2);
    return v;
  }
  static transform2(mat, v, r, offset) {
    const x = v[0];
    const y = v[1];
    const o = offset ?? 0;
    r[o] = _Mat3.get(mat, 0, 0) * x + _Mat3.get(mat, 0, 1) * y + _Mat3.get(mat, 0, 2);
    r[o + 1] = _Mat3.get(mat, 1, 0) * x + _Mat3.get(mat, 1, 1) * y + _Mat3.get(mat, 1, 2);
    return r;
  }
  static mul(result, a, b) {
    _Mat3.set(
      result,
      0,
      0,
      _Mat3.get(a, 0, 0) * _Mat3.get(b, 0, 0) + _Mat3.get(a, 0, 1) * _Mat3.get(b, 1, 0) + _Mat3.get(a, 0, 2) * _Mat3.get(b, 2, 0)
    );
    _Mat3.set(
      result,
      0,
      1,
      _Mat3.get(a, 0, 0) * _Mat3.get(b, 0, 1) + _Mat3.get(a, 0, 1) * _Mat3.get(b, 1, 1) + _Mat3.get(a, 0, 2) * _Mat3.get(b, 2, 1)
    );
    _Mat3.set(
      result,
      0,
      2,
      _Mat3.get(a, 0, 0) * _Mat3.get(b, 0, 2) + _Mat3.get(a, 0, 1) * _Mat3.get(b, 1, 2) + _Mat3.get(a, 0, 2) * _Mat3.get(b, 2, 2)
    );
    _Mat3.set(
      result,
      1,
      0,
      _Mat3.get(a, 1, 0) * _Mat3.get(b, 0, 0) + _Mat3.get(a, 1, 1) * _Mat3.get(b, 1, 0) + _Mat3.get(a, 1, 2) * _Mat3.get(b, 2, 0)
    );
    _Mat3.set(
      result,
      1,
      1,
      _Mat3.get(a, 1, 0) * _Mat3.get(b, 0, 1) + _Mat3.get(a, 1, 1) * _Mat3.get(b, 1, 1) + _Mat3.get(a, 1, 2) * _Mat3.get(b, 2, 1)
    );
    _Mat3.set(
      result,
      1,
      2,
      _Mat3.get(a, 1, 0) * _Mat3.get(b, 0, 2) + _Mat3.get(a, 1, 1) * _Mat3.get(b, 1, 2) + _Mat3.get(a, 1, 2) * _Mat3.get(b, 2, 2)
    );
    _Mat3.set(
      result,
      2,
      0,
      _Mat3.get(a, 2, 0) * _Mat3.get(b, 0, 0) + _Mat3.get(a, 2, 1) * _Mat3.get(b, 1, 0) + _Mat3.get(a, 2, 2) * _Mat3.get(b, 2, 0)
    );
    _Mat3.set(
      result,
      2,
      1,
      _Mat3.get(a, 2, 0) * _Mat3.get(b, 0, 1) + _Mat3.get(a, 2, 1) * _Mat3.get(b, 1, 1) + _Mat3.get(a, 2, 2) * _Mat3.get(b, 2, 1)
    );
    _Mat3.set(
      result,
      2,
      2,
      _Mat3.get(a, 2, 0) * _Mat3.get(b, 0, 2) + _Mat3.get(a, 2, 1) * _Mat3.get(b, 1, 2) + _Mat3.get(a, 2, 2) * _Mat3.get(b, 2, 2)
    );
    return result;
  }
  static inverse(arr, epsilon = 1e-4) {
    const inv = _Mat3.create();
    inv[0] = arr[4] * arr[8] - arr[5] * arr[7];
    inv[1] = arr[2] * arr[7] - arr[1] * arr[8];
    inv[2] = arr[1] * arr[5] - arr[2] * arr[4];
    inv[3] = arr[5] * arr[6] - arr[3] * arr[8];
    inv[4] = arr[0] * arr[8] - arr[2] * arr[6];
    inv[5] = arr[2] * arr[3] - arr[0] * arr[5];
    inv[6] = arr[3] * arr[7] - arr[4] * arr[6];
    inv[7] = arr[1] * arr[6] - arr[0] * arr[7];
    inv[8] = arr[0] * arr[4] - arr[1] * arr[3];
    const det = arr[0] * inv[0] + arr[1] * inv[3] + arr[2] * inv[6];
    if (Math.abs(det) > epsilon) {
      const invDet = 1 / det;
      inv[0] *= invDet;
      inv[1] *= invDet;
      inv[2] *= invDet;
      inv[3] *= invDet;
      inv[4] *= invDet;
      inv[5] *= invDet;
      inv[6] *= invDet;
      inv[7] *= invDet;
      inv[8] *= invDet;
      return inv;
    }
    return _Mat3.create();
  }
  static transpose(mat) {
    const idx = _Mat3.idx;
    let t = mat[idx(0, 1)];
    mat[idx(0, 1)] = mat[idx(1, 0)];
    mat[idx(1, 0)] = t;
    t = mat[idx(0, 2)];
    mat[idx(0, 2)] = mat[idx(2, 0)];
    mat[idx(2, 0)] = t;
    t = mat[idx(1, 2)];
    mat[idx(1, 2)] = mat[idx(2, 1)];
    mat[idx(2, 1)] = t;
    return mat;
  }
};

// src/lib/maths/Mat4.ts
var Mat4 = class _Mat4 extends Float32Array {
  static size = 16;
  constructor() {
    super(_Mat4.size);
  }
  static create(copy) {
    const R = new _Mat4();
    if (copy != null)
      R.set(copy);
    return R;
  }
  static fromMat3(mat) {
    const ret = _Mat4.makeIdentity();
    _Mat4.set(ret, 0, 0, Mat3.get(mat, 0, 0));
    _Mat4.set(ret, 0, 1, Mat3.get(mat, 0, 1));
    _Mat4.set(ret, 0, 3, Mat3.get(mat, 0, 2));
    _Mat4.set(ret, 1, 0, Mat3.get(mat, 1, 0));
    _Mat4.set(ret, 1, 1, Mat3.get(mat, 1, 1));
    _Mat4.set(ret, 1, 3, Mat3.get(mat, 1, 2));
    return ret;
  }
  static idx(row, col) {
    return 4 * col + row;
  }
  static set(mat, row, col, value) {
    mat[_Mat4.idx(row, col)] = value;
  }
  static get(mat, row, col) {
    return mat[_Mat4.idx(row, col)];
  }
  static makePerspective(fov, AR, dMin, dMax) {
    const m = _Mat4.create();
    const halfTanFOV = Math.tan(fov * Math.PI / 360);
    m[_Mat4.idx(0, 0)] = 1 / (AR * halfTanFOV);
    m[_Mat4.idx(1, 1)] = 1 / halfTanFOV;
    m[_Mat4.idx(2, 2)] = dMax / (dMin - dMax);
    m[_Mat4.idx(2, 3)] = -(dMin * dMax) / (dMax - dMin);
    m[_Mat4.idx(3, 2)] = -1;
    return m;
  }
  static getColumn(mat, col) {
    return [
      mat[_Mat4.idx(0, col)],
      mat[_Mat4.idx(1, col)],
      mat[_Mat4.idx(2, col)],
      mat[_Mat4.idx(3, col)]
    ];
  }
  static setColumn(mat, col, value) {
    mat[_Mat4.idx(0, col)] = value[0];
    mat[_Mat4.idx(1, col)] = value[1];
    mat[_Mat4.idx(2, col)] = value[2];
    mat[_Mat4.idx(3, col)] = value[3] ?? (col === 3 ? 1 : 0);
  }
  static makeOrtho(left, right, bottom, top, near, far) {
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);
    const result = _Mat4.create();
    result[0] = -2 * lr;
    result[1] = 0;
    result[2] = 0;
    result[3] = 0;
    result[4] = 0;
    result[5] = -2 * bt;
    result[6] = 0;
    result[7] = 0;
    result[8] = 0;
    result[9] = 0;
    result[10] = 2 * nf;
    result[11] = 0;
    result[12] = (left + right) * lr;
    result[13] = (top + bottom) * bt;
    result[14] = (far + near) * nf;
    result[15] = 1;
    return result;
  }
  static makeTranslation(x, y, z) {
    const result = _Mat4.makeIdentity();
    result[_Mat4.idx(0, 3)] = x;
    result[_Mat4.idx(1, 3)] = y;
    result[_Mat4.idx(2, 3)] = z;
    return result;
  }
  static makeXAxisReflection() {
    const result = _Mat4.makeIdentity();
    result[_Mat4.idx(0, 0)] = -1;
    return result;
  }
  static makeYAxisReflection() {
    const result = _Mat4.makeIdentity();
    result[_Mat4.idx(1, 1)] = -1;
    return result;
  }
  static makeZAxisReflection() {
    const result = _Mat4.makeIdentity();
    result[_Mat4.idx(2, 2)] = -1;
    return result;
  }
  static translate(mat, x, y, z) {
    mat[_Mat4.idx(0, 3)] = x;
    mat[_Mat4.idx(1, 3)] = y;
    mat[_Mat4.idx(2, 3)] = z;
    return mat;
  }
  static makeIdentity() {
    const result = _Mat4.create();
    result[_Mat4.idx(0, 0)] = 1;
    result[_Mat4.idx(1, 1)] = 1;
    result[_Mat4.idx(2, 2)] = 1;
    result[_Mat4.idx(3, 3)] = 1;
    return result;
  }
  static makeRotation(axis, theta) {
    if (!eq(Vec3.len(axis), 1)) {
      console.log("Warning, input axis to makeRotation should be unit length");
      Vec3.normalise(axis);
    }
    const [cosTheta, sinTheta, t] = [Math.cos(theta), Math.sin(theta), 1 - Math.cos(theta)];
    const [tx, ty, tz] = [t * axis[0], t * axis[1], t * axis[2]];
    const [sx, sy, sz] = [sinTheta * axis[0], sinTheta * axis[1], sinTheta * axis[2]];
    const [txy, tyz, txz] = [tx * axis[1], ty * axis[2], tx * axis[2]];
    const r = _Mat4.create();
    _Mat4.set(r, 0, 0, tx * axis[0] + cosTheta);
    _Mat4.set(r, 0, 1, txy + sz);
    _Mat4.set(r, 0, 2, txz - sy);
    _Mat4.set(r, 1, 0, txy - sz);
    _Mat4.set(r, 1, 1, ty * axis[1] + cosTheta);
    _Mat4.set(r, 1, 2, tyz + sx);
    _Mat4.set(r, 2, 0, txz + sy);
    _Mat4.set(r, 2, 1, tyz - sx);
    _Mat4.set(r, 2, 2, tz * axis[2] + cosTheta);
    _Mat4.set(r, 3, 3, 1);
    return r;
  }
  static rotate(mat, axis, theta) {
    if (!eq(Vec3.len(axis), 1)) {
      console.log("Warning, input axis to makeRotation should be unit length");
      Vec3.normalise(axis);
    }
    const [cosTheta, sinTheta, t] = [Math.cos(theta), Math.sin(theta), 1 - Math.cos(theta)];
    const [tx, ty, tz] = [t * axis[0], t * axis[1], t * axis[2]];
    const [sx, sy, sz] = [sinTheta * axis[0], sinTheta * axis[1], sinTheta * axis[2]];
    const [txy, tyz, txz] = [tx * axis[1], ty * axis[2], tx * axis[2]];
    _Mat4.set(mat, 0, 0, tx * axis[0] + cosTheta);
    _Mat4.set(mat, 0, 1, txy + sz);
    _Mat4.set(mat, 0, 2, txz - sy);
    _Mat4.set(mat, 1, 0, txy - sz);
    _Mat4.set(mat, 1, 1, ty * axis[1] + cosTheta);
    _Mat4.set(mat, 1, 2, tyz + sx);
    _Mat4.set(mat, 2, 0, txz + sy);
    _Mat4.set(mat, 2, 1, tyz - sx);
    _Mat4.set(mat, 2, 2, tz * axis[2] + cosTheta);
    return mat;
  }
  static makeScale(scale) {
    const r = _Mat4.create();
    _Mat4.set(r, 0, 0, scale[0]);
    _Mat4.set(r, 1, 1, scale[1]);
    _Mat4.set(r, 2, 2, scale[2]);
    _Mat4.set(r, 3, 3, 1);
    return r;
  }
  static scale(mat, scale) {
    _Mat4.set(mat, 0, 0, scale[0]);
    _Mat4.set(mat, 1, 1, scale[1]);
    _Mat4.set(mat, 2, 2, scale[2]);
    return mat;
  }
  static makeTransform(scale, rotation, translation) {
    const r = _Mat4.create();
    _Mat4.rotate(r, [1, 0, 0], rotation[0]);
    _Mat4.rotate(r, [0, 1, 0], rotation[1]);
    _Mat4.rotate(r, [0, 0, 1], rotation[2]);
    _Mat4.scale(r, scale);
    _Mat4.translate(r, translation[0], translation[1], translation[2]);
    return r;
  }
  static mul(result, a, b) {
    _Mat4.set(result, 0, 0, _Mat4.get(a, 0, 0) * _Mat4.get(b, 0, 0) + _Mat4.get(a, 0, 1) * _Mat4.get(b, 1, 0) + _Mat4.get(a, 0, 2) * _Mat4.get(b, 2, 0) + _Mat4.get(a, 0, 3) * _Mat4.get(b, 3, 0));
    _Mat4.set(result, 0, 1, _Mat4.get(a, 0, 0) * _Mat4.get(b, 0, 1) + _Mat4.get(a, 0, 1) * _Mat4.get(b, 1, 1) + _Mat4.get(a, 0, 2) * _Mat4.get(b, 2, 1) + _Mat4.get(a, 0, 3) * _Mat4.get(b, 3, 1));
    _Mat4.set(result, 0, 2, _Mat4.get(a, 0, 0) * _Mat4.get(b, 0, 2) + _Mat4.get(a, 0, 1) * _Mat4.get(b, 1, 2) + _Mat4.get(a, 0, 2) * _Mat4.get(b, 2, 2) + _Mat4.get(a, 0, 3) * _Mat4.get(b, 3, 2));
    _Mat4.set(result, 0, 3, _Mat4.get(a, 0, 0) * _Mat4.get(b, 0, 3) + _Mat4.get(a, 0, 1) * _Mat4.get(b, 1, 3) + _Mat4.get(a, 0, 2) * _Mat4.get(b, 2, 3) + _Mat4.get(a, 0, 3) * _Mat4.get(b, 3, 3));
    _Mat4.set(result, 1, 0, _Mat4.get(a, 1, 0) * _Mat4.get(b, 0, 0) + _Mat4.get(a, 1, 1) * _Mat4.get(b, 1, 0) + _Mat4.get(a, 1, 2) * _Mat4.get(b, 2, 0) + _Mat4.get(a, 1, 3) * _Mat4.get(b, 3, 0));
    _Mat4.set(result, 1, 1, _Mat4.get(a, 1, 0) * _Mat4.get(b, 0, 1) + _Mat4.get(a, 1, 1) * _Mat4.get(b, 1, 1) + _Mat4.get(a, 1, 2) * _Mat4.get(b, 2, 1) + _Mat4.get(a, 1, 3) * _Mat4.get(b, 3, 1));
    _Mat4.set(result, 1, 2, _Mat4.get(a, 1, 0) * _Mat4.get(b, 0, 2) + _Mat4.get(a, 1, 1) * _Mat4.get(b, 1, 2) + _Mat4.get(a, 1, 2) * _Mat4.get(b, 2, 2) + _Mat4.get(a, 1, 3) * _Mat4.get(b, 3, 2));
    _Mat4.set(result, 1, 3, _Mat4.get(a, 1, 0) * _Mat4.get(b, 0, 3) + _Mat4.get(a, 1, 1) * _Mat4.get(b, 1, 3) + _Mat4.get(a, 1, 2) * _Mat4.get(b, 2, 3) + _Mat4.get(a, 1, 3) * _Mat4.get(b, 3, 3));
    _Mat4.set(result, 2, 0, _Mat4.get(a, 2, 0) * _Mat4.get(b, 0, 0) + _Mat4.get(a, 2, 1) * _Mat4.get(b, 1, 0) + _Mat4.get(a, 2, 2) * _Mat4.get(b, 2, 0) + _Mat4.get(a, 2, 3) * _Mat4.get(b, 3, 0));
    _Mat4.set(result, 2, 1, _Mat4.get(a, 2, 0) * _Mat4.get(b, 0, 1) + _Mat4.get(a, 2, 1) * _Mat4.get(b, 1, 1) + _Mat4.get(a, 2, 2) * _Mat4.get(b, 2, 1) + _Mat4.get(a, 2, 3) * _Mat4.get(b, 3, 1));
    _Mat4.set(result, 2, 2, _Mat4.get(a, 2, 0) * _Mat4.get(b, 0, 2) + _Mat4.get(a, 2, 1) * _Mat4.get(b, 1, 2) + _Mat4.get(a, 2, 2) * _Mat4.get(b, 2, 2) + _Mat4.get(a, 2, 3) * _Mat4.get(b, 3, 2));
    _Mat4.set(result, 2, 3, _Mat4.get(a, 2, 0) * _Mat4.get(b, 0, 3) + _Mat4.get(a, 2, 1) * _Mat4.get(b, 1, 3) + _Mat4.get(a, 2, 2) * _Mat4.get(b, 2, 3) + _Mat4.get(a, 2, 3) * _Mat4.get(b, 3, 3));
    _Mat4.set(result, 3, 0, _Mat4.get(a, 3, 0) * _Mat4.get(b, 0, 0) + _Mat4.get(a, 3, 1) * _Mat4.get(b, 1, 0) + _Mat4.get(a, 3, 2) * _Mat4.get(b, 2, 0) + _Mat4.get(a, 3, 3) * _Mat4.get(b, 3, 0));
    _Mat4.set(result, 3, 1, _Mat4.get(a, 3, 0) * _Mat4.get(b, 0, 1) + _Mat4.get(a, 3, 1) * _Mat4.get(b, 1, 1) + _Mat4.get(a, 3, 2) * _Mat4.get(b, 2, 1) + _Mat4.get(a, 3, 3) * _Mat4.get(b, 3, 1));
    _Mat4.set(result, 3, 2, _Mat4.get(a, 3, 0) * _Mat4.get(b, 0, 2) + _Mat4.get(a, 3, 1) * _Mat4.get(b, 1, 2) + _Mat4.get(a, 3, 2) * _Mat4.get(b, 2, 2) + _Mat4.get(a, 3, 3) * _Mat4.get(b, 3, 2));
    _Mat4.set(result, 3, 3, _Mat4.get(a, 3, 0) * _Mat4.get(b, 0, 3) + _Mat4.get(a, 3, 1) * _Mat4.get(b, 1, 3) + _Mat4.get(a, 3, 2) * _Mat4.get(b, 2, 3) + _Mat4.get(a, 3, 3) * _Mat4.get(b, 3, 3));
    return result;
  }
  static transform3(mat, v) {
    const x = v[0];
    const y = v[1];
    const z = v[2];
    v[0] = _Mat4.get(mat, 0, 0) * x + _Mat4.get(mat, 0, 1) * y + _Mat4.get(mat, 0, 2) * z + _Mat4.get(mat, 0, 3);
    v[1] = _Mat4.get(mat, 1, 0) * x + _Mat4.get(mat, 1, 1) * y + _Mat4.get(mat, 1, 2) * z + _Mat4.get(mat, 1, 3);
    v[2] = _Mat4.get(mat, 2, 0) * x + _Mat4.get(mat, 2, 1) * y + _Mat4.get(mat, 2, 2) * z + _Mat4.get(mat, 2, 3);
    return v;
  }
  static mul3(mat, v) {
    const x = v[0];
    const y = v[1];
    const z = v[2];
    v[0] = _Mat4.get(mat, 0, 0) * x + _Mat4.get(mat, 0, 1) * y + _Mat4.get(mat, 0, 2) * z;
    v[1] = _Mat4.get(mat, 1, 0) * x + _Mat4.get(mat, 1, 1) * y + _Mat4.get(mat, 1, 2) * z;
    v[2] = _Mat4.get(mat, 2, 0) * x + _Mat4.get(mat, 2, 1) * y + _Mat4.get(mat, 2, 2) * z;
    return v;
  }
  static mul4(mat, v) {
    const x = v[0];
    const y = v[1];
    const z = v[2];
    const w = v[3];
    v[0] = _Mat4.get(mat, 0, 0) * x + _Mat4.get(mat, 0, 1) * y + _Mat4.get(mat, 0, 2) * z + _Mat4.get(mat, 0, 3) * w;
    v[1] = _Mat4.get(mat, 1, 0) * x + _Mat4.get(mat, 1, 1) * y + _Mat4.get(mat, 1, 2) * z + _Mat4.get(mat, 1, 3) * w;
    v[2] = _Mat4.get(mat, 2, 0) * x + _Mat4.get(mat, 2, 1) * y + _Mat4.get(mat, 2, 2) * z + _Mat4.get(mat, 2, 3) * w;
    v[3] = _Mat4.get(mat, 3, 0) * x + _Mat4.get(mat, 3, 1) * y + _Mat4.get(mat, 3, 2) * z + _Mat4.get(mat, 3, 3) * w;
    return v;
  }
  static inverse(arr, epsilon = 1e-3) {
    const a0 = arr[0] * arr[5] - arr[1] * arr[4];
    const a1 = arr[0] * arr[6] - arr[2] * arr[4];
    const a2 = arr[0] * arr[7] - arr[3] * arr[4];
    const a3 = arr[1] * arr[6] - arr[2] * arr[5];
    const a4 = arr[1] * arr[7] - arr[3] * arr[5];
    const a5 = arr[2] * arr[7] - arr[3] * arr[6];
    const b0 = arr[8] * arr[13] - arr[9] * arr[12];
    const b1 = arr[8] * arr[14] - arr[10] * arr[12];
    const b2 = arr[8] * arr[15] - arr[11] * arr[12];
    const b3 = arr[9] * arr[14] - arr[10] * arr[13];
    const b4 = arr[9] * arr[15] - arr[11] * arr[13];
    const b5 = arr[10] * arr[15] - arr[11] * arr[14];
    const det = a0 * b5 - a1 * b4 + a2 * b3 + a3 * b2 - a4 * b1 + a5 * b0;
    const inv = _Mat4.create();
    if (Math.abs(det) <= epsilon)
      return inv;
    inv[0] = +arr[5] * b5 - arr[6] * b4 + arr[7] * b3;
    inv[4] = -arr[4] * b5 + arr[6] * b2 - arr[7] * b1;
    inv[8] = +arr[4] * b4 - arr[5] * b2 + arr[7] * b0;
    inv[12] = -arr[4] * b3 + arr[5] * b1 - arr[6] * b0;
    inv[1] = -arr[1] * b5 + arr[2] * b4 - arr[3] * b3;
    inv[5] = +arr[0] * b5 - arr[2] * b2 + arr[3] * b1;
    inv[9] = -arr[0] * b4 + arr[1] * b2 - arr[3] * b0;
    inv[13] = +arr[0] * b3 - arr[1] * b1 + arr[2] * b0;
    inv[2] = +arr[13] * a5 - arr[14] * a4 + arr[15] * a3;
    inv[6] = -arr[12] * a5 + arr[14] * a2 - arr[15] * a1;
    inv[10] = +arr[12] * a4 - arr[13] * a2 + arr[15] * a0;
    inv[14] = -arr[12] * a3 + arr[13] * a1 - arr[14] * a0;
    inv[3] = -arr[9] * a5 + arr[10] * a4 - arr[11] * a3;
    inv[7] = +arr[8] * a5 - arr[10] * a2 + arr[11] * a1;
    inv[11] = -arr[8] * a4 + arr[9] * a2 - arr[11] * a0;
    inv[15] = +arr[8] * a3 - arr[9] * a1 + arr[10] * a0;
    const invDet = 1 / det;
    inv[0] *= invDet;
    inv[1] *= invDet;
    inv[2] *= invDet;
    inv[3] *= invDet;
    inv[4] *= invDet;
    inv[5] *= invDet;
    inv[6] *= invDet;
    inv[7] *= invDet;
    inv[8] *= invDet;
    inv[9] *= invDet;
    inv[10] *= invDet;
    inv[11] *= invDet;
    inv[12] *= invDet;
    inv[13] *= invDet;
    inv[14] *= invDet;
    inv[15] *= invDet;
    return inv;
  }
  static transpose(mat) {
    const idx = _Mat4.idx;
    let t = mat[idx(0, 1)];
    mat[idx(0, 1)] = mat[idx(1, 0)];
    mat[idx(1, 0)] = t;
    t = mat[idx(0, 2)];
    mat[idx(0, 2)] = mat[idx(2, 0)];
    mat[idx(2, 0)] = t;
    t = mat[idx(0, 3)];
    mat[idx(0, 3)] = mat[idx(3, 0)];
    mat[idx(3, 0)] = t;
    t = mat[idx(1, 2)];
    mat[idx(1, 2)] = mat[idx(2, 1)];
    mat[idx(2, 1)] = t;
    t = mat[idx(1, 3)];
    mat[idx(1, 3)] = mat[idx(3, 1)];
    mat[idx(3, 1)] = t;
    t = mat[idx(2, 3)];
    mat[idx(2, 3)] = mat[idx(3, 2)];
    mat[idx(3, 2)] = t;
    return mat;
  }
  static lookAt(eye, target, up = [0, 1, 0]) {
    let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    const eyex = eye[0];
    const eyey = eye[1];
    const eyez = eye[2];
    const upx = up[0];
    const upy = up[1];
    const upz = up[2];
    const targetx = target[0];
    const targety = target[1];
    const targetz = target[2];
    const EPSILON2 = 1e-6;
    if (Math.abs(eyex - targetx) < EPSILON2 && Math.abs(eyey - targety) < EPSILON2 && Math.abs(eyez - targetz) < EPSILON2) {
      return _Mat4.makeIdentity();
    }
    const mat = _Mat4.create();
    z0 = eyex - targetx;
    z1 = eyey - targety;
    z2 = eyez - targetz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (eq(len, 0)) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (eq(len, 0)) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }
    mat[0] = x0;
    mat[1] = y0;
    mat[2] = z0;
    mat[3] = 0;
    mat[4] = x1;
    mat[5] = y1;
    mat[6] = z1;
    mat[7] = 0;
    mat[8] = x2;
    mat[9] = y2;
    mat[10] = z2;
    mat[11] = 0;
    mat[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    mat[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    mat[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    mat[15] = 1;
    return mat;
  }
  // This function creates a projection matrix for projecting to a plane.
  static makePlaneProjection(normal, point, eye) {
    const mat = _Mat4.create();
    const d = -Vec3.dot(normal, point);
    const NdL = Vec3.dot(normal, eye);
    mat[0] = NdL + d - eye[0] * normal[0];
    mat[1] = -eye[1] * normal[0];
    mat[2] = -eye[2] * normal[0];
    mat[3] = -normal[0];
    mat[4] = -eye[0] * normal[1];
    mat[5] = NdL + d - eye[1] * normal[1];
    mat[6] = -eye[2] * normal[1];
    mat[7] = -normal[1];
    mat[8] = -eye[0] * normal[2];
    mat[9] = -eye[1] * normal[2];
    mat[10] = NdL + d - eye[2] * normal[2];
    mat[11] = -normal[2];
    mat[12] = -eye[0] * d;
    mat[13] = -eye[1] * d;
    mat[14] = -eye[2] * d;
    mat[15] = NdL;
    return mat;
  }
};

// src/lib/maths/Mat2.ts
var Mat2 = class _Mat2 extends Float32Array {
  static size = 4;
  constructor() {
    super(_Mat2.size);
  }
  static create(copy) {
    const R = new Float32Array(_Mat2.size);
    if (copy != null)
      R.set(copy);
    return R;
  }
  static idx(row, col) {
    return 2 * col + row;
  }
  static set(mat, row, col, value) {
    mat[_Mat2.idx(row, col)] = value;
  }
  static get(mat, row, col) {
    return mat[_Mat2.idx(row, col)];
  }
  static transform2(mat, r, v) {
    Vec2.set(
      r,
      _Mat2.get(mat, 0, 0) * v[0] + _Mat2.get(mat, 0, 1) * v[1],
      _Mat2.get(mat, 1, 0) * v[0] + _Mat2.get(mat, 1, 1) * v[1]
    );
    return r;
  }
  static makeIdentity() {
    const result = _Mat2.create();
    result[_Mat2.idx(0, 0)] = 1;
    result[_Mat2.idx(1, 1)] = 1;
    return result;
  }
  static makeRotation(theta) {
    const [cosTheta, sinTheta] = [Math.cos(theta), Math.sin(theta)];
    const r = _Mat2.create();
    _Mat2.set(r, 0, 0, cosTheta);
    _Mat2.set(r, 0, 1, -sinTheta);
    _Mat2.set(r, 1, 0, sinTheta);
    _Mat2.set(r, 1, 1, cosTheta);
    return r;
  }
  static rotate(mat, theta) {
    const [cosTheta, sinTheta] = [Math.cos(theta), Math.sin(theta)];
    _Mat2.set(mat, 0, 0, cosTheta);
    _Mat2.set(mat, 0, 1, -sinTheta);
    _Mat2.set(mat, 1, 0, sinTheta);
    _Mat2.set(mat, 1, 1, cosTheta);
    return mat;
  }
  static makeScale(scale) {
    const r = _Mat2.create();
    _Mat2.set(r, 0, 0, scale[0]);
    _Mat2.set(r, 1, 1, scale[1]);
    return r;
  }
  static mul(result, a, b) {
    _Mat2.set(
      result,
      0,
      0,
      _Mat2.get(a, 0, 0) * _Mat2.get(b, 0, 0) + _Mat2.get(a, 0, 1) * _Mat2.get(b, 1, 0)
    );
    _Mat2.set(
      result,
      0,
      1,
      _Mat2.get(a, 0, 0) * _Mat2.get(b, 0, 1) + _Mat2.get(a, 0, 1) * _Mat2.get(b, 1, 1)
    );
    _Mat2.set(
      result,
      1,
      0,
      _Mat2.get(a, 1, 0) * _Mat2.get(b, 0, 0) + _Mat2.get(a, 1, 1) * _Mat2.get(b, 1, 0)
    );
    _Mat2.set(
      result,
      1,
      1,
      _Mat2.get(a, 1, 0) * _Mat2.get(b, 0, 1) + _Mat2.get(a, 1, 1) * _Mat2.get(b, 1, 1)
    );
    return result;
  }
  static inverse(mat, epsilon = 1e-4) {
    const r = _Mat2.create();
    const det = mat[0] * mat[3] - mat[1] * mat[2];
    if (Math.abs(det) > epsilon) {
      const invDet = 1 / det;
      r[0] = mat[3] * invDet;
      r[1] = -mat[1] * invDet;
      r[2] = -mat[2] * invDet;
      r[3] = mat[0] * invDet;
    } else {
      r.fill(0);
    }
    return r;
  }
};

// src/lib/maths/Vec4.ts
var Vec4 = class _Vec4 extends Float32Array {
  static size = 4;
  constructor(x, y, z, w) {
    super(_Vec4.size);
    this.set(x ?? 0, y, z, w);
  }
  static create() {
    return new _Vec4();
  }
  clone() {
    return new _Vec4(this);
  }
  put(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this;
  }
  set(x, y, z, w) {
    if (typeof x === "number") {
      this[0] = x;
      this[1] = y ?? 0;
      this[2] = z ?? 0;
      this[3] = w ?? 0;
    } else {
      super.set(x);
    }
    return this;
  }
  static set(r, x, y, z, w) {
    r[0] = x;
    r[1] = y;
    r[2] = z;
    r[3] = w;
    return r;
  }
  copy(u) {
    this.set(u);
    return this;
  }
  static copy(r, u) {
    r.set(u);
    return r;
  }
  add(u) {
    this[0] += u[0];
    this[1] += u[1];
    this[2] += u[2];
    this[3] += u[3];
    return this;
  }
  static add(u, v, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] + v[0];
    r[1] = u[1] + v[1];
    r[2] = u[2] + v[2];
    r[3] = u[3] + v[3];
    return r;
  }
  addScalar(s) {
    this[0] += s;
    this[1] += s;
    this[2] += s;
    this[3] += s;
    return this;
  }
  static addScalar(u, s, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] + s;
    r[1] = u[1] + s;
    r[2] = u[2] + s;
    r[3] = u[3] + s;
    return r;
  }
  sub(u) {
    this[0] -= u[0];
    this[1] -= u[1];
    this[2] -= u[2];
    this[3] -= u[3];
    return this;
  }
  static sub(u, v, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] - v[0];
    r[1] = u[1] - v[1];
    r[2] = u[2] - v[2];
    r[3] = u[3] - v[3];
    return r;
  }
  subScalar(s) {
    this[0] -= s;
    this[1] -= s;
    this[2] -= s;
    this[3] -= s;
    return this;
  }
  static subScalar(u, s, r) {
    r = r ?? new _Vec4();
    r[0] -= s;
    r[1] -= s;
    r[2] -= s;
    r[3] -= s;
    return r;
  }
  mul(u) {
    this[0] *= u[0];
    this[1] *= u[1];
    this[2] *= u[2];
    this[3] *= u[3];
    return this;
  }
  static mul(u, v, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] * v[0];
    r[1] = u[1] * v[1];
    r[2] = u[2] * v[2];
    r[3] = u[3] * v[3];
    return r;
  }
  mulScalar(s) {
    this[0] *= s;
    this[1] *= s;
    this[2] *= s;
    this[3] *= s;
    return this;
  }
  static mulScalar(u, s, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] * s;
    r[1] = u[1] * s;
    r[2] = u[2] * s;
    r[3] = u[3] * s;
    return r;
  }
  div(u) {
    this[0] /= u[0];
    this[1] /= u[1];
    this[2] /= u[2];
    this[3] /= u[3];
    return this;
  }
  static div(u, v, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] / v[0];
    r[1] = u[1] / v[1];
    r[2] = u[2] / v[2];
    r[3] = u[3] / v[3];
    return r;
  }
  divScalar(s) {
    this[0] /= s;
    this[1] /= s;
    this[2] /= s;
    this[3] /= s;
    return this;
  }
  static divScalar(u, s, r) {
    r = r ?? new _Vec4();
    r[0] = u[0] / s;
    r[1] = u[1] / s;
    r[2] = u[2] / s;
    r[3] = u[3] / s;
    return r;
  }
  dot(u) {
    return this.x * u[0] + this.y * u[1] + this.z * u[2] + this.w * u[3];
  }
  static dot(u, v) {
    return u[0] * v[0] + u[1] * v[1] + u[2] * v[2] + u[3] * v[3];
  }
  dotScalar(x, y, z, w) {
    return this.x * x + this.y * y + this.z * z + this.w * w;
  }
  static dotScalar(u, x, y, z, w) {
    return u[0] * x + u[1] * y + u[2] * z + u[3] * w;
  }
  normalise() {
    return this.mulScalar(1 / this.len());
  }
  static normalise(u) {
    if (Array.isArray(u) || u instanceof Float32Array) {
      const invLen = 1 / _Vec4.len(u);
      for (let i = 0; i !== 4; ++i)
        u[i] *= invLen;
      return u;
    } else if (u instanceof _Vec4) {
      return u.mulScalar(1 / u.len());
    }
    return void 0;
  }
  lenSq() {
    return this.dot(this);
  }
  static lenSq(u) {
    return _Vec4.dot(u, u);
  }
  len() {
    return Math.sqrt(this.lenSq());
  }
  static len(u) {
    return Math.sqrt(_Vec4.dot(u, u));
  }
  get x() {
    return this[0];
  }
  set x(value) {
    this[0] = value;
  }
  get y() {
    return this[1];
  }
  set y(value) {
    this[1] = value;
  }
  get z() {
    return this[2];
  }
  set z(value) {
    this[2] = value;
  }
  get w() {
    return this[3];
  }
  set w(value) {
    this[3] = value;
  }
};

// src/lib/Renderer/RenderContext.ts
var UniformType = ((UniformType2) => {
  UniformType2[UniformType2["NONE"] = 0] = "NONE";
  UniformType2[UniformType2["BOOL"] = WebGL2RenderingContext.BOOL] = "BOOL";
  UniformType2[UniformType2["UBYTE"] = WebGL2RenderingContext.UNSIGNED_BYTE] = "UBYTE";
  UniformType2[UniformType2["BYTE"] = WebGL2RenderingContext.BYTE] = "BYTE";
  UniformType2[UniformType2["USHORT"] = WebGL2RenderingContext.UNSIGNED_SHORT] = "USHORT";
  UniformType2[UniformType2["SHORT"] = WebGL2RenderingContext.SHORT] = "SHORT";
  UniformType2[UniformType2["UINT"] = WebGL2RenderingContext.UNSIGNED_INT] = "UINT";
  UniformType2[UniformType2["INT"] = WebGL2RenderingContext.INT] = "INT";
  UniformType2[UniformType2["HALF_FLOAT"] = WebGL2RenderingContext.HALF_FLOAT] = "HALF_FLOAT";
  UniformType2[UniformType2["FLOAT"] = WebGL2RenderingContext.FLOAT] = "FLOAT";
  UniformType2[UniformType2["VEC2"] = WebGL2RenderingContext.FLOAT_VEC2] = "VEC2";
  UniformType2[UniformType2["VEC3"] = WebGL2RenderingContext.FLOAT_VEC3] = "VEC3";
  UniformType2[UniformType2["VEC4"] = WebGL2RenderingContext.FLOAT_VEC4] = "VEC4";
  UniformType2[UniformType2["IVEC2"] = WebGL2RenderingContext.INT_VEC2] = "IVEC2";
  UniformType2[UniformType2["IVEC3"] = WebGL2RenderingContext.INT_VEC3] = "IVEC3";
  UniformType2[UniformType2["IVEC4"] = WebGL2RenderingContext.INT_VEC4] = "IVEC4";
  UniformType2[UniformType2["MAT2"] = WebGL2RenderingContext.FLOAT_MAT2] = "MAT2";
  UniformType2[UniformType2["MAT3"] = WebGL2RenderingContext.FLOAT_MAT3] = "MAT3";
  UniformType2[UniformType2["MAT4"] = WebGL2RenderingContext.FLOAT_MAT4] = "MAT4";
  UniformType2[UniformType2["SAMPLER_2D"] = WebGL2RenderingContext.SAMPLER_2D] = "SAMPLER_2D";
  UniformType2[UniformType2["SAMPLER_3D"] = WebGL2RenderingContext.SAMPLER_3D] = "SAMPLER_3D";
  UniformType2[UniformType2["SAMPLER_CUBE"] = WebGL2RenderingContext.SAMPLER_CUBE] = "SAMPLER_CUBE";
  UniformType2[UniformType2["ISAMPLER_2D"] = WebGL2RenderingContext.INT_SAMPLER_2D] = "ISAMPLER_2D";
  UniformType2[UniformType2["ISAMPLER_3D"] = WebGL2RenderingContext.INT_SAMPLER_3D] = "ISAMPLER_3D";
  UniformType2[UniformType2["ISAMPLER_CUBE"] = WebGL2RenderingContext.INT_SAMPLER_CUBE] = "ISAMPLER_CUBE";
  return UniformType2;
})(UniformType || {});
function bindUniform(gl, uniform) {
  const {
    dataType,
    location,
    value,
    count
  } = uniform;
  switch (dataType) {
    case UniformType.BOOL:
    case UniformType.BYTE:
    case UniformType.INT:
    case UniformType.SHORT:
    case UniformType.SAMPLER_2D:
    case UniformType.SAMPLER_3D:
    case UniformType.SAMPLER_CUBE:
    case UniformType.ISAMPLER_2D:
    case UniformType.ISAMPLER_3D:
    case UniformType.ISAMPLER_CUBE:
      count === void 0 || count < 2 ? gl.uniform1i(location, value) : gl.uniform1iv(location, new Int32Array(value));
      break;
    case UniformType.FLOAT:
    case UniformType.HALF_FLOAT:
      gl.uniform1f(location, value);
      break;
    case UniformType.UBYTE:
    case UniformType.UINT:
    case UniformType.USHORT:
      gl.uniform1ui(location, value);
      break;
    case UniformType.VEC2:
      gl.uniform2fv(location, value);
      break;
    case UniformType.VEC3:
      gl.uniform3fv(location, value);
      break;
    case UniformType.VEC4:
      gl.uniform4fv(location, value);
      break;
    case UniformType.IVEC2:
      gl.uniform2iv(location, value);
      break;
    case UniformType.IVEC3:
      gl.uniform3iv(location, value);
      break;
    case UniformType.IVEC4:
      gl.uniform4iv(location, value);
      break;
    case UniformType.MAT2:
      gl.uniformMatrix2fv(location, false, value);
      break;
    case UniformType.MAT3:
      gl.uniformMatrix3fv(location, false, value);
      break;
    case UniformType.MAT4:
      gl.uniformMatrix4fv(location, false, value);
      break;
    case 0 /* NONE */:
    default:
      console.warn("Unrecognised uniform data type");
  }
}
function bindContext(gl, context) {
  const list2 = Object.keys(context);
  for (let i = 0; i !== list2.length; ++i) {
    bindUniform(gl, context[list2[i]]);
  }
}
function isBuiltIn(info) {
  return info?.name.startsWith("gl_") ?? info?.name.startsWith("webgl_") ?? false;
}
function createBaseType(type) {
  switch (type) {
    case WebGL2RenderingContext.FLOAT:
      return 0;
    case WebGL2RenderingContext.FLOAT_VEC2:
      return Vec2.create();
    case WebGL2RenderingContext.FLOAT_VEC3:
      return Vec3.create();
    case WebGL2RenderingContext.FLOAT_VEC4:
      return Vec4.create();
    case WebGL2RenderingContext.FLOAT_MAT2:
      return Mat2.create();
    case WebGL2RenderingContext.FLOAT_MAT3:
      return Mat3.create();
    case WebGL2RenderingContext.FLOAT_MAT4:
      return Mat4.create();
    case WebGL2RenderingContext.INT:
      return 0;
    case WebGL2RenderingContext.SAMPLER_2D:
      return 0;
    case WebGL2RenderingContext.SAMPLER_3D:
      return 0;
    case WebGL2RenderingContext.SAMPLER_CUBE:
      return 0;
    default:
      return null;
  }
}
function buildRenderContext(gl, prog) {
  const context = {};
  const uniformCount = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i !== uniformCount; ++i) {
    const info = gl.getActiveUniform(prog, i);
    if (isBuiltIn(info)) {
      console.log("builtin:", info);
      continue;
    }
    if (info == null)
      continue;
    const { name, type, size } = info;
    context[name] = {
      value: createBaseType(type),
      location: gl.getUniformLocation(prog, name),
      dataType: type,
      count: size
    };
  }
  return context;
}

// src/apps/pxsphere/shaders/sphere-vertex.glsl
var sphere_vertex_default = "#version 300 es\nprecision mediump float;\n\n#define PI 3.141592653589793238\n#define TWO_PI (PI + PI)\n\n//	Simplex 3D Noise\n//	by Ian McEwan, Ashima Arts\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //  x0 = x0 - 0. + 0.0 * C\n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n    // Permutations\n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute(\n      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients\n    // ( N*N points uniformly over a square, mapped onto an octahedron.)\n    float n_ = 1.0/7.0; // N=7\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n    dot(p2,x2), dot(p3,x3) ) );\n}\n\nlayout(location = 0) in vec3 position;\n\nuniform mat4 mvp;\nuniform mat4 mv;\n\nuniform float pointSize;\nuniform float time;\nuniform vec4 speeds;\nuniform vec4 layerControls;\nuniform vec4 landmass;\nuniform float randomSeed;\nuniform int visibility;\nuniform int scalePoints;\nuniform vec4 frequencies;\n\n#define emissionSpeed speeds.x\n#define evolutionSpeed speeds.y\n#define rotationSpeed speeds.z\n\n#define layerScaleDelta layerControls.y\n\n#define emissionStart landmass.x\n#define emissionEnd landmass.y\n#define emissionHeight landmass.z\n#define sealevel landmass.w\n\n#define emissionFreq frequencies.x\n#define landFreq frequencies.y\n#define rotFreq frequencies.z\n#define rotMag frequencies.w\n\nout vec4 pos;\n\nvec2 rot(vec2 v, float a) {\n    return mat2(cos(a), -sin(a), sin(a), cos(a)) * v;\n}\n\nfloat fBM(vec3 p) {\n    float f = 0.0;\n    f += 0.5000 * snoise(p); p.xy = rot(p.xy, 0.5);\n    f += 0.2500 * snoise(2. * p); p.xy = rot(p.xy, 0.5);\n    f += 0.1250 * snoise(4. * p); p.xy = rot(p.xy, 0.5);\n    f += 0.0625 * snoise(8. * p);\n    return f / 0.9375;\n}\n\nvec2 cart2sphere(vec3 coord) {\n    return vec2(atan(coord.z, coord.x), acos(coord.y));\n}\n\nmat3 buildFrame(vec3 N) {\n    vec3 U = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), step(.9, abs(N.x)));\n    vec3 B = cross(N, U);\n    vec3 T = cross(B, N);\n    return mat3(B, T, N);\n}\n\nfloat visTerm(float emission, float land) {\n    switch(visibility) {\n        case 0: return min(emission, land); // min\n        case 1: return max(emission, land); // max\n        case 2: return emission * land; // multiply\n    }\n\n    return min(emission, land);\n}\n\nvoid main() {\n    vec3 N = normalize(position);\n    float emission = fBM(emissionFreq * N + time * emissionSpeed + vec3(randomSeed));\n    float land = fBM(landFreq * position + time * evolutionSpeed + vec3(randomSeed));\n    float emissionFactor = smoothstep(emissionStart - 0.1, emissionEnd + 0.1, emission);\n    land = smoothstep(sealevel - 0.1, sealevel + 0.1, land);\n    //land = step(sealevel, land);\n\n    vec3 vN = normalize((mv * vec4(N, 0.)).xyz);\n    float angle = dot(vN, vec3(0., 0., 1.)) * .5 + .5;\n\n    // rotate each point in a circle on the plane to double-check the maths...\n    float rotation = TWO_PI * snoise(rotFreq * N + rotationSpeed * time + vec3(-randomSeed, 2.*randomSeed, 0.));\n    vec3 offset = 0.1 * rotMag * buildFrame(N) * vec3(rot(vec2(1., 0.), rotation), 0.0);\n\n    pos = vec4(position + emissionHeight * emissionFactor * emission * N + offset, angle * visTerm(emission, land));\n\n    gl_Position = mvp * vec4(pos.xyz, 1.);\n    gl_PointSize = max(pointSize * layerScaleDelta * (scalePoints == 1 ? angle : 1.), 1.);\n}\n";

// src/apps/pxsphere/shaders/sphere-fragment.glsl
var sphere_fragment_default = "#version 300 es\nprecision mediump float;\n\nuniform vec4 layerControls;\nuniform float roundedPoints;\nuniform float opacity;\n\nin vec4 pos;\n\nout vec4 fragColour;\n\n#define layerOpacity layerControls.x\n#define layer int(layerControls.z)\n#define useLayerColours layerControls.w > 0.\n\nfloat length2(vec2 v) { return dot(v, v); }\n\nconst vec4 colours[5] = vec4[5](\n    vec4(1.0, 0.0, 0.0, 1.0),\n    vec4(0.0, 1.0, 0.0, 1.0),\n    vec4(0.0, 0.0, 1.0, 1.0),\n    vec4(1.0, 1.0, 0.0, 1.0),\n    vec4(1.0, 0.0, 1.0, 1.0)\n);\n\nvoid main() {\n    if(pos.w < 1e-2 || opacity == 0.) discard; // Discard points determined by the vertex shader\n\n    if(roundedPoints > 0.) {\n        float d = length2(gl_PointCoord - .5);\n        if (d > .25) discard;\n    }\n\n    fragColour = opacity * pos.w * layerOpacity * (useLayerColours ? colours[layer] : vec4(1.0));\n}\n";

// src/apps/pxsphere/shaders/intro-vertex.glsl
var intro_vertex_default = "#version 300 es\nprecision mediump float;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v) {\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                        0.024390243902439); // 1.0 / 41.0\n    // First corner\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n\n    // Other corners\n    vec2 i1;\n    //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n    //i1.y = 1.0 - i1.x;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    // x0 = x0 - 0.0 + 0.0 * C.xx ;\n    // x1 = x0 - i1 + 1.0 * C.xx ;\n    // x2 = x0 - 1.0 + 2.0 * C.xx ;\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n\n    // Permutations\n    i = mod289(i); // Avoid truncation effects in permutation\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n                      + i.x + vec3(0.0, i1.x, 1.0 ));\n\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n\n    // Gradients: 41 points uniformly over a line, mapped onto a diamond.\n    // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n\n    // Normalise gradients implicitly by scaling m\n    // Approximation of: m *= inversesqrt( a0*a0 + h*h );\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n    // Compute final noise value at P\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\n#define PI 3.141592653589793238\n#define TWO_PI (PI + PI)\n\nlayout(location = 0) in vec2 position;\n\nuniform mat4 mvp;\nuniform float pointSize;\nuniform float time;\nuniform vec3 resolution;\nuniform int layer;\n\nout vec2 uv;\nflat out float colourP;\n\nconst float screenScale = 2.2; // camera scale (using perspective cam at dist 3.)\n\nvec3 mapToCylinder(vec2 uv, float radius, float t) {\n    const float width = 6.0;\n    float theta = uv.x * TWO_PI + t - PI / 2.0;\n    float s = abs(.5 - uv.y) * .5;\n    s = s * s + 0.1 * s + .1 * snoise(uv*13.0);\n    return vec3(\n        -s * width * cos(theta),\n        .75 * (2. * uv.y - 1.),\n        s * width * sin(theta)\n    );\n}\n\nvec3 displacement(vec2 uv) {\n    return vec3(\n        snoise(vec2(1.283, 1.437) * uv),\n        snoise(vec2(-1.823, 0.934) * uv),\n        snoise(vec2(-0.32, -1.38) * uv)\n    );\n}\n\nvec3 rotate(vec3 v, float theta) {\n    return mat3(\n        cos(theta), 0., -sin(theta),\n        0., 1., 0.,\n        sin(theta), 0., cos(theta)\n    ) * v;\n}\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 uvToSpherical(vec2 uv, float time) {\n    float p = smoothstep(0.0, 0.5, time) - smoothstep(0.5, 1.5, time);\n    float phi = uv.x * TWO_PI + PI/2. + p*0.2*(rand(uv) * 2. - 1.);\n    float theta = (1. - uv.y) * PI + p*0.2*(rand(uv) * 2. - 1.);\n    return vec3(\n        sin(theta) * cos(phi),\n        cos(theta),\n        sin(theta) * sin(phi)\n    );\n}\n\nvoid main() {\n    uv = fract(position.xy + vec2(0e-3 * time, 0.0));\n    vec2 pos = position.xy;\n    colourP = snoise(200. * uv) * .5 + .5;\n    gl_PointSize = .25 * pointSize +  .75 * pointSize * (snoise(100. * uv) * .5 + .5);\n\n    vec2 scale = vec2(resolution[2], 1.) * screenScale;\n    float ani = max(0.1 * time, 0.0);\n\n    // Scrolling plane\n    vec3 P = vec3(fract(pos) * scale, 0.0);\n    P.xy -= vec2(resolution[2] * .5, .5) * 2.2;\n\n    // Cylinder\n    vec3 Q = mapToCylinder(pos, .5, 0.) + .01 * displacement(uv + 2. * time + float(layer));\n\n    // Sphere\n    vec3 S = uvToSpherical(pos, ani) + .01 * displacement(uv + 2. * time + float(layer));\n\n    vec3 R = mix(mix(P, Q, 0.), S, ani);\n    R = rotate(R, 4.0 * ani * ani * (ani * PI/3. * float(layer + 1)));\n    gl_Position = mvp * vec4(R, 1.0);\n\n    gl_PointSize = mix(gl_PointSize, .5 * gl_PointSize, smoothstep(0.0, 1.0, ani));\n}\n";

// src/apps/pxsphere/shaders/intro-fragment.glsl
var intro_fragment_default = "#version 300 es\nprecision mediump float;\n\nfloat length2(vec2 v) { return dot(v, v); }\n\nuniform float roundedPoints;\nuniform float time;\nuniform float opacity;\n\nin vec2 uv;\nflat in float colourP;\nout vec4 fragColour;\n\nconst vec3 colour =  vec3(34. / 255.99, 46. / 255.99, 55. / 255.99);\n\nvoid main() {\n    float d = length2(gl_PointCoord - .5);\n    if (d > .25) discard;\n\n    vec3 pColour = mix(colour, mix(colour, vec3(1.), .4), 1.15 * colourP - 0.15);\n    float edge = 1. - smoothstep(0.25 * .6, .25 * .9, d);\n    fragColour = mix(vec4(colour, 1.), vec4(mix(colour, pColour, edge), 1.), opacity);\n}\n";

// src/apps/pxsphere/pxsphere.ts
var visibility = [
  "min",
  "max",
  "mul"
];
var configurations = {
  none: "{}",
  about: '{"rotationSpeed":0,"dirChangeFreq":0.01,"dirChangeStrength":0,"dirChangeVariance":0,"layers":1,"sampleRadius":0.01,"layerStepDistance":0.01,"layerOpacityDelta":0,"pointSize":0.54,"opacity":1,"emissionFreq":17.5,"emissionSpeed":1.5,"emissionStart":-1,"emissionEnd":1,"emissionHeight":-1,"evolutionSpeed":0,"landFreq":0.1,"sealevel":1,"sealevelLayerDelta":0.5,"rotationFreq":0,"rotationMag":0,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"showText":false,"line1":"Defining the future of","line2":"business solutions.","preset":"none","resolution":[2880,1580,1.8227848101265822]}',
  ai: '{"rotationSpeed":1.1,"dirChangeFreq":0.01,"dirChangeStrength":0.55,"dirChangeVariance":1,"layers":5,"sampleRadius":0.02,"layerStepDistance":0.07,"layerOpacityDelta":0.12,"pointSize":1.15,"opacity":1,"emissionFreq":2.9,"emissionSpeed":2.3,"emissionStart":1,"emissionEnd":0.61,"emissionHeight":-1,"evolutionSpeed":20,"landFreq":7.8,"sealevel":0.28,"sealevelLayerDelta":-0.5,"rotationFreq":0,"rotationMag":0,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"resolution":[2880,1580,1.8227848101265822]}',
  b2b: '{"rotationSpeed":1,"dirChangeFreq":0.01,"dirChangeStrength":1,"dirChangeVariance":0,"layers":5,"sampleRadius":0.02,"layerStepDistance":0.44,"layerOpacityDelta":0,"pointSize":0.9,"opacity":1,"emissionFreq":13.2,"emissionSpeed":20,"emissionStart":-1,"emissionEnd":-0.23,"emissionHeight":-0.06,"evolutionSpeed":0,"landFreq":6.3,"sealevel":0.19,"sealevelLayerDelta":-0.5,"rotationFreq":40,"rotationMag":1,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"resolution":[2880,1580,1.8227848101265822]}',
  clean: '{"rotationSpeed":0,"dirChangeFreq":1,"dirChangeStrength":0.55,"dirChangeVariance":1,"layers":1,"sampleRadius":0.02,"layerStepDistance":0.07,"layerOpacityDelta":0.12,"pointSize":0.72,"opacity":1,"emissionFreq":13.2,"emissionSpeed":10.2,"emissionStart":1,"emissionEnd":-1,"emissionHeight":0.34,"evolutionSpeed":11.6,"landFreq":2.6,"sealevel":0.21,"sealevelLayerDelta":-0.5,"rotationFreq":0,"rotationMag":0,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"resolution":[2880,1580,1.8227848101265822]}',
  base: '{"rotationSpeed":0.8,"dirChangeFreq":0.01,"dirChangeStrength":0.01,"dirChangeVariance":0,"layers":3,"sampleRadius":0.02,"layerStepDistance":0.2,"layerOpacityDelta":0.5,"pointSize":0.5,"opacity":1,"emissionFreq":2,"emissionSpeed":4.3,"emissionStart":1,"emissionEnd":-0.7,"emissionHeight":1,"evolutionSpeed":8,"landFreq":14.1,"sealevel":0.08,"sealevelLayerDelta":-0.3,"rotationFreq":28,"rotationMag":0.69,"angularRotSpeed":0,"visibility":"mul","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":false,"scalePoints":true,"showText":true,"line1":"Defining the future of","line2":"business solutions.","preset":"none","resolution":[2880,1580,1.8227848101265822]}'
};
var globalControls = {
  rotationSpeed: 0.8,
  dirChangeFreq: 0.01,
  dirChangeStrength: 0.01,
  dirChangeVariance: 0,
  layers: 3,
  sampleRadius: 0.01,
  layerStepDistance: 0.2,
  layerOpacityDelta: 0.5,
  pointSize: 0.5,
  opacity: 1,
  emissionFreq: 2,
  emissionSpeed: 4.3,
  emissionStart: 1,
  emissionEnd: -0.7,
  emissionHeight: 1,
  evolutionSpeed: 8,
  landFreq: 14.1,
  sealevel: 0.08,
  sealevelLayerDelta: -0.3,
  rotationFreq: 28,
  rotationMag: 0.69,
  angularRotSpeed: 0,
  visibility: "mul",
  randomSeed: true,
  layerColours: false,
  roundedPoints: true,
  lockAxes: false,
  scalePoints: true,
  showText: true,
  line1: "Defining the future of",
  line2: "business solutions.",
  preset: "none",
  resolution: [2157, 1079, 2157 / 1079]
  // Dummy, will be replaced on save and use to calculate point scaling.
};
function setControls(obj, data) {
  for (const key in data) {
    if (typeof data[key] === "object") {
      setControls(obj[key], data[key]);
    } else {
      obj[key] = data[key];
    }
  }
}
var INTRO_DURATION = 10;
var BACKGROUND_COLOUR = [34 / 255.99, 46 / 255.99, 55 / 255.99];
var K_EMISSION_FACTOR = 0.02;
var K_EVOLUTION_FACTOR = 0.1;
var LAYER_AXES = [
  Vec3.normalise([1, 1, 0]),
  Vec3.normalise([1, -1, -1]),
  Vec3.normalise([-1, 1, 0]),
  Vec3.normalise([0, 1, -1]),
  Vec3.normalise([1, 0, 1])
];
var seed = [
  0.27478805808024576,
  0.7651830778546598,
  0.09990401387135628,
  0.5521414685809944,
  0.8017688214506036
];
var RenderApp = class {
  controls = JSON.parse(JSON.stringify(globalControls));
  controlSource = null;
  controlTarget = null;
  controlTime = 0;
  valid;
  canvasId;
  canvas;
  gl;
  width = 0;
  height = 0;
  planePoints = null;
  points = null;
  rotations = [];
  programs = [];
  ctx = [];
  overlay = document.getElementById("overlay");
  line1 = document.getElementById("line1");
  line2 = document.getElementById("line2");
  rnd = {
    gen: prng_default(18284.480873),
    random: (min, max) => lerp(min, max, this.rnd.gen.double())
  };
  load(name) {
    setControls(this.controls, JSON.parse(configurations[name]));
    this.rebuild();
    const canvas = this.gl.canvas;
    const bound = canvas.getBoundingClientRect();
    const w = Math.round(bound.width);
    const h = Math.round(bound.height);
    const dPR = window.devicePixelRatio;
    const rW = Math.round(dPR * w);
    const rH = Math.round(dPR * h);
    this.width = rW;
    this.height = rH;
    this.gl.viewport(0, 0, this.width, this.height);
    const mv = Mat4.mul(
      Mat4.makeIdentity(),
      Mat4.lookAt([0, 0, 5], [0, 0, 0], [0, 1, 0]),
      Mat4.makeRotation([1, 0, 0], Math.PI / 2)
    );
    this.ctx[0].mvp.value = Mat4.mul(
      Mat4.makeIdentity(),
      Mat4.makePerspective(45, this.width / this.height, 0.5, 5),
      mv
    );
    this.gl.useProgram(this.programs[0]);
    bindContext(this.gl, this.ctx[0]);
  }
  rebuild(replayIntro = false) {
    if (this.points != null) {
      this.gl.deleteVertexArray(this.points[0]);
      this.gl.deleteBuffer(this.points[1]);
    }
    if (this.planePoints != null) {
      this.gl.deleteVertexArray(this.planePoints[0]);
      this.gl.deleteBuffer(this.planePoints[1]);
    }
    this.points = makePoissonSphere(this.gl, this.controls.sampleRadius);
    if (this.points == null)
      return;
    const W = Math.floor(this.width / 32);
    const H = Math.floor(this.height / 32);
    this.planePoints = makePointRect(this.gl, W, H);
    this.rotAccum.fill(0);
    this.rotations = LAYER_AXES.slice(0, this.controls.layers).map((e) => new Vec3(e));
    this.source = LAYER_AXES.slice(0, this.controls.layers).map((e) => new Vec3(e));
    this.targets = LAYER_AXES.slice(0, this.controls.layers).map((e) => new Vec3(e));
    this.rotAccum = new Array(this.controls.layers).fill(0);
    this.freq = new Array(this.controls.layers).fill(this.controls.dirChangeFreq);
    this.introTime = replayIntro ? INTRO_DURATION : 0;
    if (this.line1 != null)
      this.line1.innerText = this.controls.line1;
    if (this.line2 != null)
      this.line2.innerText = this.controls.line2;
    if (this.overlay != null && this.overlay.classList.contains("hidden") === this.controls.showText)
      this.overlay.classList.toggle("hidden");
    this.time = 0;
    this.angle = 0;
    this.rnd = {
      gen: prng_default(18284.480873),
      random: (min, max) => lerp(min, max, this.rnd.gen.double())
    };
  }
  /*
    public initiateLerp (target: any): void {
      this.controlSource = JSON.parse(JSON.stringify(this.controls))
      this.controlTarget = target
      this.controlTime = 0
  
      // Add or delete layers as appropriate, keep existing layers
      if (this.controlSource.layers !== this.controlTarget.layers) {
        if (this.controlSource.layers < this.controlTarget.layers) {
          for (let i = this.controlSource.layers; i < this.controlTarget.layers; ++i) {
            this.rotations.push(new Vec3(LAYER_AXES[i]))
            this.source.push(new Vec3(LAYER_AXES[i]))
            this.targets.push(new Vec3(LAYER_AXES[i]))
            this.rotAccum.push(0.0)
            this.freq.push(this.controls.dirChangeFreq)
          }
        } else if (this.controlSource.layers > this.controlTarget.layers) {
          this.rotations = this.rotations.slice(0, this.controlTarget.layers)
          this.source = this.source.slice(0, this.controlTarget.layers)
          this.targets = this.targets.slice(0, this.controlTarget.layers)
          this.rotAccum = this.rotAccum.slice(0, this.controlTarget.layers)
          this.freq = this.freq.slice(0, this.controlTarget.layers)
        }
      }
  
      console.log(this.rotations, this.source, this.targets, this.rotAccum, this.freq, this.controlSource, this.controlTarget)
    }
  
    public lerpControls (dt: number): void {
      if (this.controlSource == null || this.controlTarget == null) return
      this.controlTime += 0.5 * dt // 2 seconds between transitions
  
      for (const key in this.controlSource) {
        if (typeof this.controlSource[key] === 'number') {
          // console.log('key:', key, this.controlSource[key], this.controlTarget[key])
          this.controls[key] = lerp(this.controlSource[key], this.controlTarget[key], this.controlTime)
        }
      }
  
      if (this.controlTime >= 1.0) {
        console.log('SETTING FINAL')
        this.controls = { ...this.controls, ...JSON.parse(JSON.stringify(this.controlTarget)) }
        this.controlSource = null
        this.controlTarget = null
        this.controlTime = 0
      }
    }
    */
  buildShaders() {
    const gl = this.gl;
    this.programs = new Array(2);
    const prog = compileProgram(gl, sphere_vertex_default, sphere_fragment_default);
    if (typeof prog === "string") {
      console.error("Compile Error:", prog);
    } else {
      this.programs[0] = prog;
      gl.useProgram(prog);
      this.ctx[0] = buildRenderContext(gl, prog);
      this.ctx[0].mvp.value = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.makePerspective(45, 1, 0.5, 5),
        Mat4.lookAt([0, 0, 5], [0, 0, 0], [0, 1, 0])
      );
      this.ctx[0].pointSize.value = this.controls.pointSize;
      bindContext(gl, this.ctx[0]);
    }
    const prog2 = compileProgram(gl, intro_vertex_default, intro_fragment_default);
    if (typeof prog2 === "string") {
      console.error("Compile Error:", prog2);
    } else {
      this.programs[1] = prog2;
      gl.useProgram(prog2);
      this.ctx[1] = buildRenderContext(gl, prog2);
      this.ctx[1].mvp.value = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.makePerspective(45, 1, 0.5, 5),
        Mat4.lookAt([0, 0, 2], [0, 0, 0], [0, 1, 0])
      );
      this.ctx[1].pointSize.value = this.controls.pointSize;
      bindContext(gl, this.ctx[1]);
    }
  }
  constructor(canvasId, playIntro = false) {
    this.valid = document.getElementById(canvasId) != null;
    if (!this.valid)
      return;
    this.canvasId = canvasId;
    const canvas = document.getElementById(canvasId);
    this.canvas = canvas;
    const gl = canvas.getContext("webgl2");
    if (gl == null)
      throw new Error("WebGL2 not supported");
    this.gl = gl;
    gl.enable(gl.DEPTH_TEST);
    window.addEventListener("resize", () => {
      this.onResize();
    });
    gl.clearColor(BACKGROUND_COLOUR[0], BACKGROUND_COLOUR[1], BACKGROUND_COLOUR[2], 1);
    this.buildShaders();
    this.onResize();
    switch (canvasId) {
      case "canvas":
        setControls(this.controls, JSON.parse(configurations.base));
        this.rebuild(playIntro);
        break;
      case "accordion-canvas":
        setControls(this.controls, JSON.parse(configurations.ai));
        this.rebuild(playIntro);
        break;
      case "about-canvas":
        setControls(this.controls, JSON.parse(configurations.about));
        this.rebuild(playIntro);
        break;
    }
  }
  onResize() {
    if (this.gl.canvas == null || this.ctx == null)
      return;
    const canvas = this.gl.canvas;
    const bound = canvas.getBoundingClientRect();
    const w = Math.round(bound.width);
    const h = Math.round(bound.height);
    const dPR = window.devicePixelRatio;
    const rW = Math.round(dPR * w);
    const rH = Math.round(dPR * h);
    if (this.width !== rW || this.height !== rH) {
      this.width = rW;
      this.height = rH;
      canvas.width = this.width;
      canvas.height = this.height;
      this.gl.viewport(0, 0, this.width, this.height);
      console.log(this.canvasId, this.width, this.height, bound);
      const mv = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.lookAt([0, 0, 5], [0, 0, 0], [0, 1, 0]),
        Mat4.makeRotation([1, 0, 0], Math.PI / 2)
      );
      this.ctx[0].mvp.value = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.makePerspective(45, this.width / this.height, 0.5, 5),
        mv
      );
      this.gl.useProgram(this.programs[0]);
      bindContext(this.gl, this.ctx[0]);
    }
  }
  angle = 0;
  source = [];
  targets = [];
  rotAccum = [];
  freq = [];
  time = 0;
  introTime = INTRO_DURATION;
  render(dt2) {
    if (this.ctx == null)
      return;
    const gl = this.gl;
    gl.viewport(0, 0, this.width, this.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.time += dt2;
    const introTime = (INTRO_DURATION - this.introTime) / INTRO_DURATION;
    const globalOpacity = lerp(0, 1, introTime > 0.8 ? (introTime - 0.8) / 0.2 : 0);
    const invOpacity = 1 - globalOpacity;
    if (this.introTime > 0) {
      this.introTime -= dt2;
      this.renderIntro(invOpacity);
    }
    gl.useProgram(this.programs[0]);
    this.angle += this.controls.rotationSpeed * 0.1 * dt2;
    this.ctx[0].speeds.value = [
      this.controls.emissionSpeed * K_EMISSION_FACTOR,
      this.controls.evolutionSpeed * K_EVOLUTION_FACTOR,
      this.controls.angularRotSpeed,
      0
    ];
    const sW = this.width / this.controls.resolution[0];
    const sH = this.height / this.controls.resolution[1];
    const factor = Math.sqrt(sW * sW + sH * sH);
    this.ctx[0].pointSize.value = this.controls.pointSize * factor;
    const rndVector = (scale = 1) => {
      return new Vec3(this.rnd.random(-1, 1), this.rnd.random(-1, 1), this.rnd.random(-1, 1)).mulScalar(scale);
    };
    if (!this.rotAccum || !this.freq || !this.source || !this.targets) {
      this.rotAccum = new Array(this.controls.layers).fill(0);
      this.freq = new Array(this.controls.layers).fill(this.controls.dirChangeFreq);
      this.source = new Array(this.controls.layers).fill(new Vec3(0, 1, 0));
      this.targets = new Array(this.controls.layers).fill(new Vec3(0, 1, 0));
    }
    for (let layer = 0; layer < this.controls.layers; ++layer) {
      this.rotAccum[layer] -= dt2;
      if (this.rotAccum[layer] <= 0) {
        this.freq[layer] = this.rnd.random(this.controls.dirChangeFreq * (1 - this.controls.dirChangeVariance), this.controls.dirChangeFreq);
        this.rotAccum[layer] = 1 / this.freq[layer];
        this.source[layer] = new Vec3(this.rotations[layer]);
        this.targets[layer] = new Vec3(rndVector(this.controls.dirChangeStrength).add(this.rotations[layer])).normalise();
      }
    }
    if (!this.rotAccum || !this.freq || !this.source || !this.targets) {
      this.rotAccum = new Array(this.controls.layers).fill(0);
      this.freq = new Array(this.controls.layers).fill(this.controls.dirChangeFreq);
      this.source = new Array(this.controls.layers).fill(new Vec3(0, 1, 0));
      this.targets = new Array(this.controls.layers).fill(new Vec3(0, 1, 0));
    }
    for (let i = 0; i < this.controls.layers; ++i) {
      console.log("i:", i, this.rotAccum[i], this.freq[i], this.source[i], this.targets[i], this.rotations[i]);
      const u = 1 - this.rotAccum[i] * this.freq[i];
      lerpI(this.source[i], this.targets[i], this.rotations[i], smoothstep(0, 1, u));
      this.rotations[i].normalise();
    }
    this.ctx[0].time.value = this.time;
    this.ctx[0].opacity.value = Math.min(this.controls.opacity, globalOpacity);
    this.ctx[0].scalePoints.value = this.controls.scalePoints ? 1 : 0;
    this.ctx[0].frequencies.value = [this.controls.emissionFreq, this.controls.landFreq, this.controls.rotationFreq, this.controls.rotationMag];
    const rScale = this.width < this.height ? this.width / this.height : 1;
    for (let i = 0; i < this.controls.layers; ++i) {
      const model = Mat4.mul(
        Mat4.makeIdentity(),
        this.controls.lockAxes ? Mat4.makeRotation(LAYER_AXES[i], this.angle * (i % 2 === 0 ? -1 : 1)) : Mat4.makeRotation(this.rotations[i], this.angle * (i % 2 === 0 ? -1 : 1)),
        Mat4.mul(
          Mat4.makeIdentity(),
          Mat4.makeRotation([1, 0, 0], Math.PI / 2),
          Mat4.makeScale([rScale * (1 - i * this.controls.layerStepDistance), rScale * (1 - i * this.controls.layerStepDistance), rScale * (1 - i * this.controls.layerStepDistance)])
        )
      );
      const mv = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.lookAt([0, 0, 3], [0, 0, 0], [0, 1, 0]),
        model
      );
      this.ctx[0].mv.value = mv;
      this.ctx[0].mvp.value = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.makePerspective(45, this.width / this.height, 0.5, 5),
        mv
      );
      const layerOpacity = clamp(1 - this.controls.layerOpacityDelta * i, 0, 1);
      const layerScaleDelta = 5 - 3 * (i / this.controls.layers);
      this.ctx[0].layerControls.value = [layerOpacity, layerScaleDelta, i, this.controls.layerColours ? 1 : 0];
      this.ctx[0].landmass.value = [
        this.controls.emissionStart,
        this.controls.emissionEnd,
        this.controls.emissionHeight,
        this.controls.sealevel + clamp(i * this.controls.sealevelLayerDelta, 0, 1)
      ];
      this.ctx[0].roundedPoints.value = this.controls.roundedPoints ? 1 : 0;
      this.ctx[0].randomSeed.value = this.controls.randomSeed ? seed[i] : 0;
      this.ctx[0].visibility.value = visibility.indexOf(this.controls.visibility);
      bindContext(this.gl, this.ctx[0]);
      if (this.points != null) {
        gl.bindVertexArray(this.points[0]);
        gl.drawArrays(gl.POINTS, 0, this.points[2]);
      }
    }
  }
  renderIntro(opacity) {
    if (this.ctx == null || this.introTime <= 0)
      return;
    const gl = this.gl;
    gl.viewport(0, 0, this.width, this.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(this.programs[1]);
    const sW = this.width / this.controls.resolution[0];
    const sH = this.height / this.controls.resolution[1];
    const factor = Math.sqrt(sW * sW + sH * sH);
    this.ctx[1].pointSize.value = 6 * factor;
    this.ctx[1].time.value = this.time;
    this.ctx[1].opacity.value = opacity;
    const u = 1 - this.introTime / INTRO_DURATION;
    const t = smoothstep(0, 0.5, u) - smoothstep(0.5, 1, u);
    const d = lerp(3, 1.5, t);
    this.ctx[1].resolution.value = [this.width, this.height, this.width / this.height];
    for (let layer = 0; layer < 5; ++layer) {
      this.ctx[1].mvp.value = Mat4.mul(
        Mat4.makeIdentity(),
        Mat4.makePerspective(45, this.width / this.height, 0.5, 5),
        Mat4.mul(
          Mat4.makeIdentity(),
          Mat4.lookAt([0, 0, d], [0, 0, 0], [0, 1, 0]),
          Mat4.makeScale([1 - 0.15 * layer, 1 - 0.15 * layer, 1 - 0.15 * layer])
        )
      );
      this.ctx[1].layer.value = layer;
      bindContext(gl, this.ctx[1]);
      if (this.planePoints != null) {
        gl.bindVertexArray(this.planePoints[0]);
        gl.drawArrays(gl.POINTS, 0, this.planePoints[2]);
      }
    }
  }
};
var mainCanvas = new RenderApp("canvas", true);
var aboutCanvas = new RenderApp("about-canvas", false);
var list = [null, null];
if (mainCanvas.valid)
  list[0] = mainCanvas;
if (aboutCanvas.valid)
  list[1] = aboutCanvas;
var awake = [true, true];
var prevTime = performance.now();
var currTime = performance.now();
var dt = 1;
var render = () => {
  prevTime = currTime;
  currTime = performance.now();
  dt = (currTime - prevTime) * 1e-3;
  list.forEach((e, i) => {
    if (awake[i]) {
      e?.render(dt);
    }
  });
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);
var accordions = ["ai-accordion", "b2b-accordion", "ct-accordion"];
var names = ["ai", "b2b", "clean"];
var observers = [];
function addMonitor(name) {
  const accordion = document.getElementById(name);
  if (!accordion)
    return;
  let clock = performance.now();
  const observer2 = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList" || mutation.type === "attributes") {
        if (performance.now() - clock > 500) {
          mainCanvas?.load(names[accordions.indexOf(name)]);
          clock = performance.now();
        }
      }
    });
  });
  observer2.observe(accordion, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["style"]
  });
  observers.push(observer2);
}
accordions.forEach(addMonitor);
var intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const idx = list.findIndex((e) => e?.canvasId === entry.target.id);
      awake[idx] = true;
    } else {
      const idx = list.findIndex((e) => e?.canvasId === entry.target.id);
      awake[idx] = false;
    }
  });
}, { threshold: 0.1 });
intersectionObserver.observe(mainCanvas.canvas);
if (aboutCanvas.valid)
  intersectionObserver.observe(aboutCanvas.canvas);
function queryCanvas(node, name) {
  return node.classList?.contains("main") && node.querySelector != null && node.querySelector(name);
}
function checkCreate(node, name, index) {
  if (queryCanvas(node, name)) {
    list[index] = new RenderApp(name.slice(1), false);
    intersectionObserver.observe(list[index]?.canvas);
  }
}
function checkDestroy(node, name, index) {
  if (queryCanvas(node, name)) {
    if (list[index])
      intersectionObserver.unobserve(list[index]?.canvas);
    list[index] = null;
  }
}
var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      checkCreate(node, "#canvas", 0);
      checkCreate(node, "#about-canvas", 1);
    });
    mutation.removedNodes.forEach((node) => {
      checkDestroy(node, "#canvas", 0);
      checkDestroy(node, "#about-canvas", 1);
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });
export {
  RenderApp
};
