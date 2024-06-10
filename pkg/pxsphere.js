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
function loadPoints(gl, dict2) {
  const map = /* @__PURE__ */ new Map();
  for (const [key, value] of dict2) {
    const data = new Float32Array(value);
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
      map.set(Number(key), [vao, buf, data.length / 3]);
    }
  }
  return map;
}
var dict = /* @__PURE__ */ new Map();

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
var sphere_vertex_default = "#version 300 es\nprecision mediump float;\n#define PI 3.141592653589793238\n#define TWO_PI (PI + PI)\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.+3.0*C.xxx;i=mod(i,289.0);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3  ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}layout(location=0)in vec3 position;uniform mat4 mvp;uniform mat4 mv;uniform float pointSize;uniform float time;uniform vec4 speeds;uniform vec4 layerControls;uniform vec4 landmass;uniform float randomSeed;uniform int visibility;uniform int scalePoints;uniform vec4 frequencies;uniform float opacity;\n#define emissionSpeed speeds.x\n#define evolutionSpeed speeds.y\n#define rotationSpeed speeds.z\n#define layerScaleDelta layerControls.y\n#define emissionStart landmass.x\n#define emissionEnd landmass.y\n#define emissionHeight landmass.z\n#define sealevel landmass.w\n#define emissionFreq frequencies.x\n#define landFreq frequencies.y\n#define rotFreq frequencies.z\n#define rotMag frequencies.w\nout vec4 pos;vec2 rot(vec2 v,float a){return mat2(cos(a),-sin(a),sin(a),cos(a))*v;}float fBM(vec3 p){float f=0.0;f+=0.5000*snoise(p);p.xy=rot(p.xy,0.5);f+=0.2500*snoise(2.*p);p.xy=rot(p.xy,0.5);f+=0.1250*snoise(4.*p);p.xy=rot(p.xy,0.5);f+=0.0625*snoise(8.*p);return f/0.9375;}vec2 cart2sphere(vec3 coord){return vec2(atan(coord.z,coord.x),acos(coord.y));}mat3 buildFrame(vec3 N){vec3 U=mix(vec3(1.0,0.0,0.0),vec3(0.0,1.0,0.0),step(.9,abs(N.x)));vec3 B=cross(N,U);vec3 T=cross(B,N);return mat3(B,T,N);}float visTerm(float emission,float land){switch(visibility){case 0:return min(emission,land);case 1:return max(emission,land);case 2:return emission*land;}return min(emission,land);}void main(){vec3 N=normalize(position);float emission=fBM(emissionFreq*N+time*emissionSpeed+vec3(randomSeed));float land=fBM(landFreq*position+time*evolutionSpeed+vec3(randomSeed));float emissionFactor=smoothstep(emissionStart-0.1,emissionEnd+0.1,emission);land=smoothstep(sealevel-0.1,sealevel+0.1,land);vec3 vN=normalize((mv*vec4(N,0.)).xyz);float angle=dot(vN,vec3(0.,0.,1.))*.5+.5;float rotation=TWO_PI*snoise(rotFreq*N+rotationSpeed*time+vec3(-randomSeed,2.*randomSeed,0.));vec3 offset=0.1*rotMag*buildFrame(N)*vec3(rot(vec2(1.,0.),rotation),0.0);pos=vec4(position+emissionHeight*emissionFactor*emission*N+offset,angle*visTerm(emission,land));gl_Position=mvp*vec4(pos.xyz,1.);gl_PointSize=max(pointSize*layerScaleDelta*(scalePoints==1?angle:1.),opacity);}";

// src/apps/pxsphere/shaders/sphere-fragment.glsl
var sphere_fragment_default = "#version 300 es\nprecision mediump float;uniform vec4 layerControls;uniform float roundedPoints;uniform float opacity;uniform vec3 baseColour;in vec4 pos;out vec4 fragColour;\n#define layerOpacity layerControls.x\n#define layer int(layerControls.z)\n#define useLayerColours layerControls.w > 0.\nfloat length2(vec2 v){return dot(v,v);}const vec4 colours[5]=vec4[5](vec4(1.0,0.0,0.0,1.0),vec4(0.0,1.0,0.0,1.0),vec4(0.0,0.0,1.0,1.0),vec4(1.0,1.0,0.0,1.0),vec4(1.0,0.0,1.0,1.0));void main(){if(pos.w<1e-2||opacity==0.)discard;if(roundedPoints>0.){float d=length2(gl_PointCoord-.5);if(d>.25)discard;}fragColour=opacity*pos.w*layerOpacity*(useLayerColours?colours[layer]:vec4(baseColour,opacity));}";

// src/apps/pxsphere/shaders/intro-vertex.glsl
var intro_vertex_default = "#version 300 es\nprecision mediump float;vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}float snoise(vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}\n#define PI 3.141592653589793238\n#define TWO_PI (PI + PI)\nlayout(location=0)in vec2 position;const vec3 layerAxes[5]=vec3[](vec3(1.0,1.0,0.0),vec3(1.0,-1.0,-1.0),vec3(-1.0,1.0,0.0),vec3(0.0,1.0,-1.0),vec3(1.0,0.0,1.0));uniform mat4 mvp;uniform float pointSize;uniform float time;uniform vec3 resolution;uniform int layer;out vec2 uv;flat out float colourP;const float screenScale=2.2;vec3 mapToCylinder(vec2 uv,float radius,float t){const float width=6.0;float theta=uv.x*TWO_PI+t-PI/2.0;float s=abs(.5-uv.y)*.5;s=s*s+0.1*s+.1*snoise(uv*13.0);return vec3(-s*width*cos(theta),.75*(2.*uv.y-1.),s*width*sin(theta));}vec3 displacement(vec2 uv){return vec3(snoise(vec2(1.283,1.437)*uv),snoise(vec2(-1.823,0.934)*uv),snoise(vec2(-0.32,-1.38)*uv));}vec3 rotate(vec3 v,float theta){return mat3(cos(theta),0.,-sin(theta),0.,1.,0.,sin(theta),0.,cos(theta))*v;}float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}vec3 uvToSpherical(vec2 uv,float time){float p=smoothstep(0.0,0.5,time)-smoothstep(0.5,1.5,time);float phi=uv.x*TWO_PI+PI/2.+p*0.2*(rand(uv)*2.-1.);float theta=(1.-uv.y)*PI+p*0.2*(rand(uv)*2.-1.);return vec3(sin(theta)*cos(phi),cos(theta),sin(theta)*sin(phi));}void main(){uv=fract(position.xy+vec2(0e-3*time,0.0));vec2 pos=position.xy;colourP=snoise(200.*uv)*.5+.5;gl_PointSize=.25*pointSize+.75*pointSize*(snoise(100.*uv)*.5+.5);vec2 scale=vec2(resolution[2],1.)*screenScale;float ani=max(0.225*time,0.0);vec3 P=vec3(fract(pos)*scale,0.0);P.xy-=vec2(resolution[2]*.5,.5)*2.2;vec3 Q=mapToCylinder(pos,.5,0.)+.01*displacement(uv+2.*time+float(layer));vec3 S=uvToSpherical(pos,ani)+.01*displacement(uv+2.*time+float(layer));vec3 R=mix(mix(P,Q,0.),S,ani);R=rotate(R,4.0*ani*ani*(ani*PI/3.*float(layer+1)));gl_Position=mvp*vec4(R,1.0);gl_PointSize=mix(gl_PointSize,.5*gl_PointSize,smoothstep(0.0,1.0,ani));}";

// src/apps/pxsphere/shaders/intro-fragment.glsl
var intro_fragment_default = "#version 300 es\nprecision mediump float;float length2(vec2 v){return dot(v,v);}uniform float roundedPoints;uniform float time;uniform float opacity;in vec2 uv;flat in float colourP;out vec4 fragColour;const vec3 colour=vec3(34./255.99,46./255.99,55./255.99);void main(){float d=length2(gl_PointCoord-.5);if(d>.25)discard;vec3 pColour=mix(colour,mix(colour,vec3(1.),.4),1.15*colourP-0.15);float edge=1.-smoothstep(0.25*.6,.25*.9,d);fragColour=mix(vec4(colour,1.),vec4(mix(colour,pColour,edge),1.),opacity);}";

// src/apps/pxsphere/pxsphere.ts
async function loadBuffer(url) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to load buffer from: ${url}`);
  return await response.arrayBuffer();
}
var VBUF001_URL = "https://cdn.jsdelivr.net/gh/otgaard/cdn@0.0.34/data/vbuf001.bin";
var VBUF003_URL = "https://cdn.jsdelivr.net/gh/otgaard/cdn@0.0.34/data/vbuf003.bin";
var VBUF005_URL = "https://cdn.jsdelivr.net/gh/otgaard/cdn@0.0.34/data/vbuf005.bin";
var visibility = [
  "min",
  "max",
  "mul"
];
var configurations = {
  none: "{}",
  about: '{"customScale":1.1,"rotationSpeed":0,"dirChangeFreq":0.01,"dirChangeStrength":0,"dirChangeVariance":0,"layers":1,"sampleRadius":0.01,"layerStepDistance":0.01,"layerOpacityDelta":0,"pointSize":0.54,"opacity":1,"emissionFreq":17.5,"emissionSpeed":1.5,"emissionStart":-1,"emissionEnd":1,"emissionHeight":-1,"evolutionSpeed":0,"landFreq":0.1,"sealevel":1,"sealevelLayerDelta":0.5,"rotationFreq":0,"rotationMag":0,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"showText":false,"line1":"Defining the future of","line2":"business solutions.","preset":"none","resolution":[2880,1580,1.8227848101265822]}',
  ai: '{"customScale":1.0,"rotationSpeed":1.1,"dirChangeFreq":0.01,"dirChangeStrength":0.55,"dirChangeVariance":1,"layers":5,"sampleRadius":0.03,"layerStepDistance":0.07,"layerOpacityDelta":0.12,"pointSize":1.15,"opacity":1,"emissionFreq":2.9,"emissionSpeed":2.3,"emissionStart":1,"emissionEnd":0.61,"emissionHeight":-1,"evolutionSpeed":20,"landFreq":7.8,"sealevel":0.28,"sealevelLayerDelta":-0.5,"rotationFreq":0,"rotationMag":0,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"resolution":[2880,1580,1.8227848101265822]}',
  b2b: '{"customScale":1.1,"rotationSpeed":1,"dirChangeFreq":0.01,"dirChangeStrength":1,"dirChangeVariance":0,"layers":5,"sampleRadius":0.05,"layerStepDistance":0.44,"layerOpacityDelta":0,"pointSize":0.9,"opacity":1,"emissionFreq":13.2,"emissionSpeed":20,"emissionStart":-1,"emissionEnd":-0.23,"emissionHeight":-0.06,"evolutionSpeed":0,"landFreq":6.3,"sealevel":0.19,"sealevelLayerDelta":-0.5,"rotationFreq":40,"rotationMag":1,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"resolution":[2880,1580,1.8227848101265822]}',
  clean: '{"customScale":1.08,"rotationSpeed":0,"dirChangeFreq":1,"dirChangeStrength":0.55,"dirChangeVariance":1,"layers":1,"sampleRadius":0.03,"layerStepDistance":0.07,"layerOpacityDelta":0.12,"pointSize":0.72,"opacity":1,"emissionFreq":13.2,"emissionSpeed":10.2,"emissionStart":1,"emissionEnd":-1,"emissionHeight":0.34,"evolutionSpeed":11.6,"landFreq":2.6,"sealevel":0.21,"sealevelLayerDelta":-0.5,"rotationFreq":0,"rotationMag":0,"angularRotSpeed":0,"visibility":"max","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":true,"scalePoints":true,"resolution":[2880,1580,1.8227848101265822]}',
  base: '{"customScale":1.0,"rotationSpeed":0.8,"dirChangeFreq":0.01,"dirChangeStrength":0.01,"dirChangeVariance":0,"layers":3,"sampleRadius":0.01,"layerStepDistance":0.2,"layerOpacityDelta":0.5,"pointSize":0.5,"opacity":1,"emissionFreq":2,"emissionSpeed":4.3,"emissionStart":1,"emissionEnd":-0.7,"emissionHeight":1,"evolutionSpeed":8,"landFreq":14.1,"sealevel":0.08,"sealevelLayerDelta":-0.3,"rotationFreq":28,"rotationMag":0.69,"angularRotSpeed":0,"visibility":"mul","randomSeed":true,"layerColours":false,"roundedPoints":true,"lockAxes":false,"scalePoints":true,"showText":true,"line1":"Defining the future of","line2":"business solutions.","preset":"none","resolution":[2880,1580,1.8227848101265822]}'
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
var INTRO_DURATION = 4;
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
  // The active, current controls
  controlTarget = null;
  // The target controls for lerp
  targetName_ = "";
  controlSource = null;
  sourceName = "base";
  controlTime = 0;
  transition_ = 0;
  angle = 0;
  currArrays = {
    source: new Array(),
    targets: new Array(),
    rotAccum: new Array(),
    freq: new Array(),
    rotations: new Array(),
    layerDisplayTime: new Array()
  };
  targetArrays = {
    source: new Array(),
    targets: new Array(),
    rotAccum: new Array(),
    freq: new Array(),
    rotations: new Array(),
    layerDisplayTime: new Array()
  };
  time = 0;
  introTime = INTRO_DURATION;
  valid;
  canvasId;
  canvas;
  gl;
  width = 0;
  height = 0;
  planePoints = null;
  points = null;
  // [WebGLVertexArrayObject, WebGLBuffer, number] | null = null
  programs = [];
  ctx = [];
  overlay = document.getElementById("overlay");
  line1 = document.getElementById("line1");
  line2 = document.getElementById("line2");
  rnd = {
    gen: prng_default(18284.480873),
    random: (min, max) => lerp(min, max, this.rnd.gen.double())
  };
  get transition() {
    return this.transition_;
  }
  set transition(value) {
    this.transition_ = value;
  }
  get colour() {
    return this.ctx[0].baseColour.value;
  }
  set colour(value) {
    this.ctx[0].baseColour.value = value;
  }
  get currName() {
    return this.sourceName;
  }
  get targetName() {
    return this.targetName_;
  }
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
    if (this.planePoints != null) {
      this.gl.deleteVertexArray(this.planePoints[0]);
      this.gl.deleteBuffer(this.planePoints[1]);
    }
    this.points = loadPoints(this.gl, dict);
    if (this.points == null)
      return;
    const W = Math.floor(this.width / 32);
    const H = Math.floor(this.height / 32);
    this.planePoints = makePointRect(this.gl, W, H);
    this.controlSource = JSON.parse(JSON.stringify(this.controls));
    this.currArrays.rotAccum = new Array(this.controls.layers).fill(0);
    this.currArrays.rotations = LAYER_AXES.slice(0, this.controls.layers).map((e) => new Vec3(e));
    this.currArrays.source = LAYER_AXES.slice(0, this.controls.layers).map((e) => new Vec3(e));
    this.currArrays.targets = LAYER_AXES.slice(0, this.controls.layers).map((e) => new Vec3(e));
    this.currArrays.rotAccum = new Array(this.controls.layers).fill(0);
    this.currArrays.freq = new Array(this.controls.layers).fill(this.controls.dirChangeFreq);
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
  initiateLerp(target, name) {
    if (this.sourceName === name)
      return;
    this.targetName_ = name;
    this.controlTarget = target;
    this.controlTime = 0;
    this.targetArrays = {
      source: LAYER_AXES.slice(0, target.layers).map((e) => new Vec3(e)),
      targets: LAYER_AXES.slice(0, target.layers).map((e) => new Vec3(e)),
      rotAccum: new Array(target.layers).fill(0),
      freq: new Array(target.layers).fill(target.dirChangeFreq),
      rotations: LAYER_AXES.slice(0, target.layers).map((e) => new Vec3(e)),
      layerDisplayTime: new Array(target.layers).fill(0)
    };
  }
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
      this.ctx[0].baseColour.value = [1, 1, 1];
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
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: true,
      premultipliedAlpha: true,
      stencil: false
    });
    if (gl == null)
      throw new Error("WebGL2 not supported");
    this.gl = gl;
    gl.enable(gl.DEPTH_TEST);
    window.addEventListener("resize", () => {
      this.onResize();
    });
    gl.clearColor(0, 0, 0, 0);
    this.buildShaders();
    this.onResize();
  }
  initialiseData(playIntro) {
    switch (this.canvasId) {
      case "canvas":
        setControls(this.controls, JSON.parse(configurations.base));
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
    const passes = [this.controls, this.controlTarget].filter((e) => e != null);
    const data = [this.currArrays, this.targetArrays];
    if (this.controlTarget)
      this.controlTime += dt2;
    const ct = smoothstep(0, 1, this.controlTime);
    const passOpacity = [1 - ct, ct];
    for (let p = 0; p < passes.length; ++p) {
      const controls = passes[p];
      const arrays = data[p];
      this.angle += controls.rotationSpeed * 0.1 * dt2;
      this.ctx[0].speeds.value = [
        controls.emissionSpeed * K_EMISSION_FACTOR,
        controls.evolutionSpeed * K_EVOLUTION_FACTOR,
        controls.angularRotSpeed,
        0
      ];
      const sW = this.width / controls.resolution[0];
      const sH = this.height / controls.resolution[1];
      const factor = Math.sqrt(sW * sW + sH * sH);
      this.ctx[0].pointSize.value = controls.pointSize * factor * (1 + 0.8 * this.transition_);
      const another = lerp(1, 0.8, this.transition_);
      const rndVector = (scale = 1) => {
        return new Vec3(this.rnd.random(-1, 1), this.rnd.random(-1, 1), this.rnd.random(-1, 1)).mulScalar(scale);
      };
      for (let layer = 0; layer < controls.layers; ++layer) {
        arrays.rotAccum[layer] -= dt2;
        if (arrays.rotAccum[layer] <= 0) {
          arrays.freq[layer] = this.rnd.random(controls.dirChangeFreq * (1 - controls.dirChangeVariance), controls.dirChangeFreq);
          arrays.rotAccum[layer] = 1 / arrays.freq[layer];
          arrays.source[layer] = new Vec3(arrays.rotations[layer]);
          arrays.targets[layer] = new Vec3(rndVector(controls.dirChangeStrength).add(arrays.rotations[layer])).normalise();
        }
      }
      for (let i = 0; i < controls.layers; ++i) {
        const u = 1 - arrays.rotAccum[i] * arrays.freq[i];
        lerpI(arrays.source[i], arrays.targets[i], arrays.rotations[i], smoothstep(0, 1, u));
        arrays.rotations[i].normalise();
      }
      this.ctx[0].time.value = this.time;
      this.ctx[0].opacity.value = Math.min(controls.opacity, globalOpacity, passOpacity[p], another);
      this.ctx[0].scalePoints.value = controls.scalePoints ? 1 : 0;
      this.ctx[0].frequencies.value = [controls.emissionFreq, controls.landFreq, controls.rotationFreq, controls.rotationMag];
      let rScale = this.width < this.height ? this.width / this.height : 1;
      rScale *= controls.customScale ?? 1;
      for (let i = 0; i < controls.layers; ++i) {
        const model = Mat4.mul(
          Mat4.makeIdentity(),
          controls.lockAxes ? Mat4.makeRotation(LAYER_AXES[i], this.angle * (i % 2 === 0 ? -1 : 1)) : Mat4.makeRotation(arrays.rotations[i], this.angle * (i % 2 === 0 ? -1 : 1)),
          Mat4.mul(
            Mat4.makeIdentity(),
            Mat4.makeRotation([1, 0, 0], Math.PI / 2),
            Mat4.makeScale([rScale * (1 - i * controls.layerStepDistance), rScale * (1 - i * controls.layerStepDistance), rScale * (1 - i * controls.layerStepDistance)])
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
        const layerOpacity = clamp(1 - controls.layerOpacityDelta * i, 0, 1);
        const layerScaleDelta = 5 - 3 * (i / controls.layers);
        this.ctx[0].layerControls.value = [layerOpacity, layerScaleDelta, i, controls.layerColours ? 1 : 0];
        this.ctx[0].landmass.value = [
          controls.emissionStart,
          controls.emissionEnd,
          controls.emissionHeight,
          controls.sealevel + clamp(i * controls.sealevelLayerDelta, 0, 1)
        ];
        this.ctx[0].roundedPoints.value = controls.roundedPoints ? 1 : 0;
        this.ctx[0].randomSeed.value = controls.randomSeed ? seed[i] : 0;
        this.ctx[0].visibility.value = visibility.indexOf(controls.visibility);
        bindContext(this.gl, this.ctx[0]);
        if (this.points?.has(controls.sampleRadius)) {
          const data2 = this.points.get(controls.sampleRadius);
          if (data2) {
            gl.bindVertexArray(data2[0]);
            gl.drawArrays(gl.POINTS, 0, data2[2]);
          }
        } else {
          console.error("Failed to find points with radius:", controls.sampleRadius);
        }
      }
    }
    if (this.controlTime > 1) {
      this.controls = { ...this.controls, ...JSON.parse(JSON.stringify(this.controlTarget)) };
      this.controlSource = this.controlTarget;
      this.currArrays = this.targetArrays;
      this.sourceName = this.targetName_;
      this.controlTarget = null;
      this.controlTime = 0;
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
var accordions = ["ct-accordion", "ai-accordion", "b2b-accordion"];
var names = ["clean", "ai", "b2b"];
var canvasCallbacks = [];
var aboutCallbacks = [];
var list = [null, null];
if (mainCanvas.valid)
  list[0] = mainCanvas;
if (aboutCanvas.valid)
  list[1] = aboutCanvas;
var prevTime = performance.now();
var currTime = performance.now();
var dt = 1;
var activeIndex = 1;
var render = () => {
  prevTime = currTime;
  currTime = performance.now();
  dt = (currTime - prevTime) * 1e-3;
  list.forEach((e, i) => {
    e?.render(dt);
  });
  window.requestAnimationFrame(render);
};
Promise.all([
  loadBuffer(VBUF001_URL),
  loadBuffer(VBUF003_URL),
  loadBuffer(VBUF005_URL)
]).then((buffers) => {
  dict.set(0.01, new Float32Array(buffers[0]));
  dict.set(0.03, new Float32Array(buffers[1]));
  dict.set(0.05, new Float32Array(buffers[2]));
  for (const e of list) {
    if (e)
      e.initialiseData(e.canvasId === "canvas");
  }
  window.requestAnimationFrame(render);
}).catch((error) => {
  console.error("Failed to load buffers:", error);
});
function setupSlideTransitionObserver() {
  activeIndex = 1;
  const swiperWrapper = document.getElementById("ai-accordion")?.parentElement?.parentElement ?? null;
  if (!swiperWrapper) {
    console.error("Swiper wrapper not found");
    return () => {
    };
  }
  const slides = swiperWrapper.querySelectorAll(".swiper-slide");
  let lastTrigger = performance.now();
  const observer2 = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        slides.forEach((slide, index) => {
          if (slide.classList.contains("swiper-slide-active") && isElementInView(slides[index]) && performance.now() - lastTrigger > 40) {
            activeIndex = index;
            const n = names[index];
            if (list[0]?.targetName !== n) {
              list[0]?.initiateLerp(JSON.parse(configurations[n]), n);
            }
            lastTrigger = performance.now();
          }
        });
      }
    });
  });
  slides.forEach((slide) => {
    observer2.observe(slide, {
      attributes: true,
      attributeFilter: ["class"]
    });
  });
  return () => {
    observer2.disconnect();
  };
}
function setupTriggerAccordion(accordionName = accordions[1]) {
  const targetAccordion = document.getElementById(accordionName);
  if (!targetAccordion) {
    console.error("Trigger accordion not found");
    return () => {
    };
  }
  let lastUpdate = performance.now();
  const docBody = document.documentElement || document.body;
  let lastScrollTop = 0;
  function checkAccordionVisibility() {
    const currentScrollTop = window.scrollY;
    const atTop = currentScrollTop === 0;
    const atBottom = window.innerHeight + currentScrollTop >= docBody.scrollHeight;
    if (atBottom && currentScrollTop > lastScrollTop) {
      console.log("Attempted to scroll down at the bottom of the document.");
      lastUpdate -= 1e3;
    }
    if (atTop && currentScrollTop < lastScrollTop) {
      console.log("Attempted to scroll up at the top of the document.");
      lastUpdate -= 1e3;
    }
    lastScrollTop = currentScrollTop;
    if (performance.now() - lastUpdate < 100)
      return;
    const isInViewport = isElementInView(targetAccordion);
    if (list[0] != null) {
      if (isInViewport) {
        const n = names[activeIndex];
        if (list[0]?.targetName !== n)
          list[0]?.initiateLerp(JSON.parse(configurations[n]), n);
      } else if (!isInViewport && list[0]?.targetName !== "base") {
        list[0]?.initiateLerp(JSON.parse(configurations.base), "base");
      }
    }
    lastUpdate = performance.now();
  }
  checkAccordionVisibility();
  window.addEventListener("scroll", checkAccordionVisibility);
  return () => {
    window.removeEventListener("scroll", checkAccordionVisibility);
  };
}
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return !(rect.right <= 0 || rect.left >= window.innerWidth || rect.bottom <= 0 || rect.top >= window.innerHeight);
}
if (mainCanvas.valid) {
  canvasCallbacks.push(setupTriggerAccordion());
  canvasCallbacks.push(setupSlideTransitionObserver());
  canvasCallbacks.push(setupStyleWatcher());
} else if (aboutCanvas.valid) {
  aboutCallbacks.push(setupStyleWatcher());
}
function queryCanvas(node, name) {
  return node.classList?.contains("main") && node.querySelector != null && node.querySelector(name);
}
function checkCreate(node, name, index) {
  if (queryCanvas(node, name)) {
    list[index] = new RenderApp(name.slice(1), false);
    return true;
  }
  return false;
}
function checkDestroy(node, name, index) {
  if (queryCanvas(node, name)) {
    list[index] = null;
    return true;
  }
  return false;
}
var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (checkCreate(node, "#canvas", 0) && canvasCallbacks.length === 0) {
        canvasCallbacks.push(setupSlideTransitionObserver());
        canvasCallbacks.push(setupTriggerAccordion());
        setTimeout(() => {
          canvasCallbacks.push(setupStyleWatcher());
        }, 100);
        list[0]?.initialiseData(false);
      } else if (checkCreate(node, "#about-canvas", 1) && aboutCallbacks.length === 0) {
        setTimeout(() => {
          aboutCallbacks.push(setupStyleWatcher());
        }, 100);
        list[1]?.initialiseData(false);
      }
    });
    mutation.removedNodes.forEach((node) => {
      if (checkDestroy(node, "#canvas", 0)) {
        canvasCallbacks.forEach((e) => {
          e();
        });
        canvasCallbacks.length = 0;
      }
      if (checkDestroy(node, "#about-canvas", 1)) {
        aboutCallbacks.forEach((e) => {
          e();
        });
        aboutCallbacks.length = 0;
      }
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener("scroll", function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / docHeight;
  updateAnimation(scrollFraction);
});
function updateAnimation(scrollFraction) {
  if (list[0])
    list[0].transition = scrollFraction;
}
function colorStringToArray(color) {
  if (!color)
    return null;
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
    if (!r || !g || !b)
      return null;
    return [r / 255, g / 255, b / 255];
  }
  if (color.startsWith("rgb")) {
    const rgb = color.match(/\d+/g).map(Number);
    return rgb.map((val) => val / 255);
  }
  return null;
}
function setupStyleWatcher() {
  const mainElement = document.querySelector(".main");
  if (!mainElement) {
    console.log("Could not find main element");
    return () => {
    };
  }
  const observer2 = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === "style") {
        const textColor = mainElement.style.getPropertyValue("--color--text");
        if (textColor && (list[0] != null || list[1] != null)) {
          const col = colorStringToArray(textColor);
          if (col && Array.isArray(col) && col.length > 3) {
            if (list[0])
              list[0].colour = col.slice(0, 3);
            else if (list[1])
              list[1].colour = col.slice(0, 3);
          }
        }
      }
    });
  });
  observer2.observe(mainElement, {
    attributes: true,
    attributeFilter: ["style"]
  });
  return () => {
    observer2.disconnect();
  };
}
export {
  RenderApp
};
