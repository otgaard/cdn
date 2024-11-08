// src/lib/maths/functions.ts
var EPSILON = 1e-6;
var PI = Math.PI;
var TWO_PI = 2 * PI;
var HALF_PI = PI / 2;
function unused(...args) {
  return args.length;
}
function eq(A, B, epsilon = EPSILON) {
  return Math.abs(A - B) < epsilon;
}
function clamp(val, min, max) {
  return val < min ? min : val > max ? max : val;
}

// src/lib/utils/Timer.ts
var Timer = class {
  currTime;
  prevTime;
  time;
  dt;
  state;
  get currentTime() {
    return this.time;
  }
  get deltaTime() {
    return this.dt;
  }
  constructor() {
    this.currTime = 0;
    this.prevTime = 0;
    this.time = 0;
    this.dt = 0;
    this.state = 0 /* STOPPED */;
  }
  get isRunning() {
    return this.state === 1 /* RUNNING */;
  }
  get isStopped() {
    return this.state === 0 /* STOPPED */;
  }
  get isPaused() {
    return this.state === 2 /* PAUSED */;
  }
  start() {
    this.state = 1 /* RUNNING */;
    this.prevTime = performance.now() * 1e-3;
    this.currTime = this.prevTime;
    this.time = 0;
    this.dt = 0;
  }
  stop() {
    this.state = 0 /* STOPPED */;
  }
  pause() {
    this.state = 2 /* PAUSED */;
  }
  update() {
    if (this.state !== 1 /* RUNNING */)
      return;
    this.currTime = performance.now() * 1e-3;
    this.dt = this.currTime - this.prevTime;
    this.time += this.dt;
    this.prevTime = this.currTime;
  }
};

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
      this[1] = y ?? x;
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
      this[1] = y ?? x;
      this[2] = z ?? x;
      this[3] = w ?? x;
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
  madd(u, s, r) {
    if (typeof u === "number") {
      this[0] = this[0] * s + u;
      this[1] = this[1] * s + u;
      this[2] = this[2] * s + u;
      this[3] = this[3] * s + u;
    } else {
      this[0] = this[0] * s + u[0];
      this[1] = this[1] * s + u[1];
      this[2] = this[2] * s + u[2];
      this[3] = this[3] * s + u[3];
    }
    return this;
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

// src/lib/engine/Program.ts
function compileShader(gl, source, shaderType) {
  const shader = gl.createShader(shaderType);
  if (shader == null)
    return "Failed to create shader";
  if (!source.includes("#version"))
    source = `#version 300 es
${source}`;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) {
    const err = gl.getShaderInfoLog(shader) ?? "unknown";
    return `Failed to create shader with error:
${err}`;
  }
  return shader;
}
function compileProgram(gl, vertexShader2, fragmentShader2, deleteShaders = true, shaders) {
  const progDef = [
    [vertexShader2, gl.VERTEX_SHADER, "vertex"],
    [fragmentShader2, gl.FRAGMENT_SHADER, "fragment"]
  ];
  shaders = shaders ?? [];
  const program = gl.createProgram();
  if (program == null) {
    return "Failed to create shader program";
  }
  for (let i = 0; i !== progDef.length; ++i) {
    if (typeof progDef[i][0] !== "string") {
      gl.attachShader(program, progDef[i][0]);
      continue;
    }
    const shader = compileShader(gl, progDef[i][0], progDef[i][1]);
    if (typeof shader === "string") {
      console.error(shader, progDef[i][0]);
      gl.deleteProgram(program);
      return shader;
    } else {
      gl.attachShader(program, shader);
      shaders.push(shader);
    }
  }
  gl.linkProgram(program);
  if (deleteShaders)
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
      this[1] = y ?? x;
      this[2] = z ?? x;
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
  addScaled(v, s) {
    this[0] += v[0] * s;
    this[1] += v[1] * s;
    this[2] += v[2] * s;
    return this;
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
  /* From glm
    public static makeRotation3 (v: Vec3 | ArrayLike<number>, theta: number): Mat3 {
      const a = theta
      const c = Math.cos(a)
      const s = Math.sin(a)
  
      const axis = Vec3.normalise(v) as Vec3
      const temp = Vec3.mulScalar(axis, 1.0 - c)
  
      const rot = Mat3.makeIdentity()
      Mat3.set(rot, 0, 0, c + temp[0] * axis[0])
      Mat3.set(rot, 0, 1, temp[0] * axis[1] + s * axis[2])
      Mat3.set(rot, 0, 2, temp[0] * axis[2] - s * axis[1])
  
      Mat3.set(rot, 1, 0, temp[1] * axis[0] - s * axis[2])
      Mat3.set(rot, 1, 1, c + temp[1] * axis[1])
      Mat3.set(rot, 1, 2, temp[1] * axis[2] + s * axis[0])
  
      Mat3.set(rot, 2, 0, temp[2] * axis[0] + s * axis[1])
      Mat3.set(rot, 2, 1, temp[2] * axis[1] - s * axis[0])
      Mat3.set(rot, 2, 2, c + temp[2] * axis[2])
      return rot
    }
    */
  static makeRotation3(axis, theta) {
    if (!eq(Vec3.len(axis), 1)) {
      console.log("Warning, input axis to makeRotation should be unit length");
      Vec3.normalise(axis);
    }
    const [cosTheta, sinTheta, t] = [Math.cos(theta), Math.sin(theta), 1 - Math.cos(theta)];
    const [tx, ty, tz] = [t * axis[0], t * axis[1], t * axis[2]];
    const [sx, sy, sz] = [sinTheta * axis[0], sinTheta * axis[1], sinTheta * axis[2]];
    const [txy, tyz, txz] = [tx * axis[1], ty * axis[2], tx * axis[2]];
    const r = _Mat3.create();
    _Mat3.set(r, 0, 0, tx * axis[0] + cosTheta);
    _Mat3.set(r, 0, 1, txy + sz);
    _Mat3.set(r, 0, 2, txz - sy);
    _Mat3.set(r, 1, 0, txy - sz);
    _Mat3.set(r, 1, 1, ty * axis[1] + cosTheta);
    _Mat3.set(r, 1, 2, tyz + sx);
    _Mat3.set(r, 2, 0, txz + sy);
    _Mat3.set(r, 2, 1, tyz - sx);
    _Mat3.set(r, 2, 2, tz * axis[2] + cosTheta);
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
    const isNumber = typeof scale === "number";
    const r = _Mat3.create();
    _Mat3.set(r, 0, 0, isNumber ? scale : scale[0]);
    _Mat3.set(r, 1, 1, isNumber ? scale : scale[1]);
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
  static makePerspective(fovy, AR, dMin, dMax) {
    const m = _Mat4.create();
    const halfTanFOV = Math.tan(fovy * Math.PI / 360);
    m[_Mat4.idx(0, 0)] = 1 / (AR * halfTanFOV);
    m[_Mat4.idx(1, 1)] = 1 / halfTanFOV;
    m[_Mat4.idx(2, 2)] = -(dMax + dMin) / (dMax - dMin);
    m[_Mat4.idx(2, 3)] = -(2 * dMin * dMax) / (dMax - dMin);
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
    if (typeof x === "number") {
      mat[_Mat4.idx(0, 3)] = x;
      mat[_Mat4.idx(1, 3)] = y ?? 0;
      mat[_Mat4.idx(2, 3)] = z ?? 0;
    } else {
      mat[_Mat4.idx(0, 3)] = x[0];
      mat[_Mat4.idx(1, 3)] = x[1];
      mat[_Mat4.idx(2, 3)] = x[2];
    }
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
  static setRot(mat, rot, scale) {
    _Mat4.set(mat, 0, 0, Mat3.get(rot, 0, 0));
    _Mat4.set(mat, 0, 1, Mat3.get(rot, 0, 1));
    _Mat4.set(mat, 0, 2, Mat3.get(rot, 0, 2));
    _Mat4.set(mat, 1, 0, Mat3.get(rot, 1, 0));
    _Mat4.set(mat, 1, 1, Mat3.get(rot, 1, 1));
    _Mat4.set(mat, 1, 2, Mat3.get(rot, 1, 2));
    _Mat4.set(mat, 2, 0, Mat3.get(rot, 2, 0));
    _Mat4.set(mat, 2, 1, Mat3.get(rot, 2, 1));
    _Mat4.set(mat, 2, 2, Mat3.get(rot, 2, 2));
    return mat;
  }
  static setRotScale(mat, rot, scale) {
    _Mat4.set(mat, 0, 0, scale.x * Mat3.get(rot, 0, 0));
    _Mat4.set(mat, 0, 1, scale.y * Mat3.get(rot, 0, 1));
    _Mat4.set(mat, 0, 2, scale.z * Mat3.get(rot, 0, 2));
    _Mat4.set(mat, 1, 0, scale.x * Mat3.get(rot, 1, 0));
    _Mat4.set(mat, 1, 1, scale.y * Mat3.get(rot, 1, 1));
    _Mat4.set(mat, 1, 2, scale.z * Mat3.get(rot, 1, 2));
    _Mat4.set(mat, 2, 0, scale.x * Mat3.get(rot, 2, 0));
    _Mat4.set(mat, 2, 1, scale.y * Mat3.get(rot, 2, 1));
    _Mat4.set(mat, 2, 2, scale.z * Mat3.get(rot, 2, 2));
    return mat;
  }
  static makeScale(scale) {
    const isNumber = typeof scale === "number";
    const r = _Mat4.create();
    _Mat4.set(r, 0, 0, isNumber ? scale : scale[0]);
    _Mat4.set(r, 1, 1, isNumber ? scale : scale[1]);
    _Mat4.set(r, 2, 2, isNumber ? scale : scale[2]);
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
  transform3(v) {
    const x = v[0];
    const y = v[1];
    const z = v[2];
    v[0] = _Mat4.get(this, 0, 0) * x + _Mat4.get(this, 0, 1) * y + _Mat4.get(this, 0, 2) * z + _Mat4.get(this, 0, 3);
    v[1] = _Mat4.get(this, 1, 0) * x + _Mat4.get(this, 1, 1) * y + _Mat4.get(this, 1, 2) * z + _Mat4.get(this, 1, 3);
    v[2] = _Mat4.get(this, 2, 0) * x + _Mat4.get(this, 2, 1) * y + _Mat4.get(this, 2, 2) * z + _Mat4.get(this, 2, 3);
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
  static inverse(arr, out, epsilon = 1e-3) {
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
    const inv = out != null ? out : _Mat4.create();
    if (Math.abs(det) <= epsilon) {
      console.warn("Determinant < epsilon");
      return inv;
    }
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
  UniformType2[UniformType2["UISAMPLER_2D"] = WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_2D] = "UISAMPLER_2D";
  UniformType2[UniformType2["UISAMPLER_3D"] = WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_3D] = "UISAMPLER_3D";
  UniformType2[UniformType2["UISAMPLER_CUBE"] = WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_CUBE] = "UISAMPLER_CUBE";
  return UniformType2;
})(UniformType || {});
function bindUniform(gl, uniform) {
  const {
    dataType,
    location,
    value,
    count
  } = uniform;
  if (location === -1)
    return false;
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
    case UniformType.UISAMPLER_2D:
    case UniformType.UISAMPLER_3D:
    case UniformType.UISAMPLER_CUBE:
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
      return false;
  }
  return true;
}
function bindContext(gl, context) {
  const list = Object.keys(context);
  for (let i = 0; i !== list.length; ++i) {
    if (!bindUniform(gl, context[list[i]])) {
      console.warn("Failed to bind uniform:", list[i]);
    }
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
    const loc = gl.getUniformLocation(prog, info.name);
    if (loc == null)
      continue;
    const { name, type, size } = info;
    context[name] = {
      value: createBaseType(type),
      location: loc,
      dataType: type,
      count: size
    };
  }
  return context;
}
function buildUniformBlocks(gl, program) {
  const numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);
  const uniformBlocks = {};
  for (let i = 0; i < numUniformBlocks; ++i) {
    const name = gl.getActiveUniformBlockName(program, i);
    if (!name)
      continue;
    uniformBlocks[name] = gl.getUniformBlockIndex(program, name);
  }
  return uniformBlocks;
}
function extractUniformBlocks(shaderCode, uniformBlocks) {
  uniformBlocks = uniformBlocks ?? {};
  const uniformBlockRegex = /(?:uniform\s+(?:(?!struct\b)[\w\s]+\s+)?)?(?:layout\s*\((?:[^)]|\s)*(?:location\s*=\s*\d+)?\s*[^)]*\)\s*)?uniform\s+(\w+)\s*({[^}]*})/g;
  let match;
  while ((match = uniformBlockRegex.exec(shaderCode)) !== null) {
    const [fullMatch, blockName] = match;
    if (blockName in uniformBlocks && fullMatch.trim() !== uniformBlocks[blockName]) {
      console.error("Uniform block with different definition!", blockName);
    }
    uniformBlocks[blockName] = fullMatch.trim();
  }
  return uniformBlocks;
}

// src/lib/ShaderLibrary/includes/simplex2D.glsl
var simplex2D_default = "// Source: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\n// Simplex 2D noise\n//\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n  -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n  dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n";

// src/lib/ShaderLibrary/includes/simplex3D.glsl
var simplex3D_default = "vec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v) {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n  // Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients: 7x7 points over a square, mapped onto an octahedron.\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n  dot(p2,x2), dot(p3,x3) ) );\n}\n";

// src/lib/ShaderLibrary/includes/common-defs.glsl
var common_defs_default = "#define PI 3.141593\n#define TWO_PI 6.283185\n#define HALF_PI 1.570796\n#define QUARTER_PI 0.785398\n#define RECIP_PI 0.318310\n#define RECIP_PI2 0.159155\n#define LOG2 1.442695\n#define LOG_HALF -0.693147\n#define EPSILON 1e-6\n#define saturate(a) (clamp( a, 0.0, 1.0 ))\n#define lerp(a, b, t) (mix( a, b, t ))\n";

// src/lib/ShaderLibrary/includes/rotate2D.glsl
var rotate2D_default = "mat2 rotate2D(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvec2 rotate2D(float angle, vec2 v) {\n  mat2 m = rotate2D(angle);\n  return m * v;\n}\n\nvec3 rotate2D(float angle, vec3 v) {\n  mat2 m = rotate2D(angle);\n  return vec3(m * v.xy, v.z);\n}\n";

// src/lib/ShaderLibrary/includes/functions.glsl
var functions_default = "float bias(float b, float x) {\n  return pow(x, log(b) / LOG_HALF);\n}\n\nfloat gain(float g, float x) {\n  return mix(\n  bias(1. - g, 2. * x) / 2.,\n  1. - bias(1. - g, 2. - 2. * x) / 2.,\n  step(.5, x)\n  );\n}\n\n// a = amplitude, b = centre, c = variance\nfloat gaussian(float x, float a, float b, float c) {\n  float d = x - b;\n  return a * exp(-(d * d) / (2. * c * c));\n}\n\nfloat pulse(float x, float a, float b) {\n  return step(a, x) - step(b, x);\n}\n\n// All components are in the range [0\u20261], including hue.\nvec3 rgb2hsv(vec3 c) {\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\n// All components are in the range [0\u20261], including hue.\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nfloat getT(float t, float alpha, vec3 p0, vec3 p1) {\n  vec3 d = p1 - p0;\n  float a = dot(d, d);\n  float b = pow(a, alpha * .5);\n  return (b + t);\n}\n\nvec3 catmullRom(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t) {\n  float alpha = .5;\n  float t0 = 0.;\n  float t1 = getT(t0, alpha, p0, p1);\n  float t2 = getT(t1, alpha, p1, p2);\n  float t3 = getT(t2, alpha, p2, p3);\n  t = mix(t1, t2, t);\n  vec3 A1 = (t1-t)/(t1-t0)*p0 + (t-t0)/(t1-t0)*p1;\n  vec3 A2 = (t2-t)/(t2-t1)*p1 + (t-t1)/(t2-t1)*p2;\n  vec3 A3 = (t3-t)/(t3-t2)*p2 + (t-t2)/(t3-t2)*p3;\n  vec3 B1 = (t2-t)/(t2-t0)*A1 + (t-t0)/(t2-t0)*A2;\n  vec3 B2 = (t3-t)/(t3-t1)*A2 + (t-t1)/(t3-t1)*A3;\n  vec3 C  = (t2-t)/(t2-t1)*B1 + (t-t1)/(t2-t1)*B2;\n  return C;\n}\n";

// src/lib/ShaderLibrary/includes/noises.glsl
var noises_default = "/*\nThese are my personal noise routines that I've developed based on my understanding and knowledge so they're more\ncustomised to my personal preferences.\n*/\n\n#if defined(RAND_TEX)\nuniform sampler2D randTex;\n\nfloat random(vec2 st) {\n  return texture(randTex, st).r;\n}\n\nfloat random(vec2 st, sampler2D tex) {\n  return texture(tex, st).r;\n}\n\nfloat random(ivec2 uv) {\n  return texelFetch(randTex, uv, 0).r;\n}\n\nfloat random(int u) {\n  return texelFetch(randTex, ivec2(u, 0), 0).r;\n}\n\nfloat random(ivec2 uv, sampler2D tex) {\n  return texelFetch(tex, uv, 0).r;\n}\n\nfloat random(ivec2 coord, ivec2 period) {\n  ivec2 wrappedCoord = ivec2(mod(vec2(coord), vec2(period)));\n  return texelFetch(randTex, wrappedCoord, 0).r;\n}\n\nfloat random(int u, int period) {\n  return texelFetch(randTex, ivec2(mod(float(u), float(period)), 0), 0).r;\n}\n\nfloat random(ivec2 coord, ivec2 period, sampler2D tex) {\n  ivec2 wrappedCoord = ivec2(mod(vec2(coord), vec2(period)));\n  return texelFetch(tex, wrappedCoord, 0).r;\n}\n\n#else\nfloat random(vec2 co) {\n  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat random(ivec2 uv) {\n  return random(vec2(uv));\n}\n\nfloat random(ivec2 coord, ivec2 period) {\n  ivec2 wrappedCoord = ivec2(mod(vec2(coord), vec2(period)));\n  return random(wrappedCoord);\n}\n#endif\n\n// Bilinear value noise\nfloat valueNoise(vec2 uv) {\n  ivec2 coord = ivec2(floor(uv));\n  vec2 dd = uv - vec2(coord);\n\n  return mix(\n    mix(random(coord), random(coord + ivec2(1, 0)), dd.x),\n    mix(random(coord + ivec2(0, 1)), random(coord + ivec2(1, 1)), dd.x),\n    dd.y\n  );\n}\n\nfloat valueNoise(vec2 uv, ivec2 period) {\n  ivec2 coord = ivec2(floor(uv));\n  vec2 dd = uv - vec2(coord);\n\n  return mix(\n    mix(random(coord, period), random(coord + ivec2(1, 0), period), dd.x),\n    mix(random(coord + ivec2(0, 1), period), random(coord + ivec2(1), period), dd.x),\n    dd.y\n  );\n}\n\n// Bicubic value noise (nice, but expensive)\nconst mat4 bicubic = mat4(\n  vec4(0., -1., 2., -1.),\n  vec4(2., 0., -5., 3.),\n  vec4(0., 1., 4., -3.),\n  vec4(0., 0., -1., 1.)\n);\n\nfloat bicubicNoise(vec2 uv) {\n  ivec2 coord = ivec2(floor(uv));\n  vec2 dd = uv - vec2(coord);\n\n  vec4 px = .5 * vec4(1., dd.x, dd.x * dd.x, dd.x * dd.x * dd.x);\n  vec4 py = .5 * vec4(1., dd.y, dd.y * dd.y, dd.y * dd.y * dd.y);\n\n  vec4 b;\n  for(int i = -1; i < 3; ++i) {\n    b[i+1] = dot(px, bicubic * vec4(\n        random(coord + ivec2(-1, i)),\n        random(coord + ivec2( 0, i)),\n        random(coord + ivec2( 1, i)),\n        random(coord + ivec2( 2, i))\n    ));\n  }\n\n  return dot(py, bicubic * b);\n}\n\nfloat bicubicNoise(float u, int period) {\n  int coord = int(floor(u));\n  float dd = u - float(coord);\n\n  vec4 px = .5 * vec4(1., dd, dd * dd, dd * dd * dd);\n\n  return dot(\n    px,\n    bicubic * vec4(\n      random(coord - 1, period),\n      random(coord, period),\n      random(coord + 1, period),\n      random(coord + 2, period)\n  ));\n}\n\nfloat bicubicNoise(vec2 uv, ivec2 period) {\n  ivec2 coord = ivec2(floor(uv));\n  vec2 dd = uv - vec2(coord);\n\n  vec4 px = .5 * vec4(1., dd.x, dd.x * dd.x, dd.x * dd.x * dd.x);\n  vec4 py = .5 * vec4(1., dd.y, dd.y * dd.y, dd.y * dd.y * dd.y);\n\n  vec4 b;\n  for(int i = -1; i < 3; ++i) {\n    b[i+1] = dot(px, bicubic * vec4(\n      random(coord + ivec2(-1, i), period),\n      random(coord + ivec2( 0, i), period),\n      random(coord + ivec2( 1, i), period),\n      random(coord + ivec2( 2, i), period)\n    ));\n  }\n\n  return dot(py, bicubic * b);\n}\n\nfloat bicubicNoise(vec2 uv, ivec2 period, sampler2D tex) {\n  ivec2 coord = ivec2(floor(uv));\n  vec2 dd = uv - vec2(coord);\n\n  vec4 px = .5 * vec4(1., dd.x, dd.x * dd.x, dd.x * dd.x * dd.x);\n  vec4 py = .5 * vec4(1., dd.y, dd.y * dd.y, dd.y * dd.y * dd.y);\n\n  vec4 b;\n  for(int i = -1; i < 3; ++i) {\n    b[i+1] = dot(px, bicubic * vec4(\n      random(coord + ivec2(-1, i), period, tex),\n      random(coord + ivec2( 0, i), period, tex),\n      random(coord + ivec2( 1, i), period, tex),\n      random(coord + ivec2( 2, i), period, tex)\n    ));\n  }\n\n  return dot(py, bicubic * b);\n}\n";

// src/lib/ShaderLibrary/ShaderLibrary.ts
var screenQuadVertex = `
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
var screenQuadFragment = `
uniform sampler2D map;
in vec2 vUv;

#include <commonDefs>
#include <gammaCorrect>

out vec4 fragColour;

void main() {
  vec4 color = texture(map, vUv);
  fragColour.rgb = gammaCorrect(color.rgb);
  fragColour.a = 1.;
}  
`;
var gammaCorrect = `
vec3 gammaCorrect(vec3 color) {
  return pow(color, vec3(1.0 / 2.2));
}`;
var computeNormal = `
vec3 computeNormal(float h, float normalScale) {
  return normalize(vec3(-dFdx(h), -dFdy(h), normalScale));
}
`;
var defaultPrecisionTable = /* @__PURE__ */ new Map([
  ["float", "highp"],
  ["int", "highp"]
]);
var ShaderLibrary = class {
  includeTable = /* @__PURE__ */ new Map();
  defineTable = /* @__PURE__ */ new Map();
  templateTable = /* @__PURE__ */ new Map();
  fragmentInj = null;
  constructor() {
    this.includeTable.set("commonDefs", common_defs_default);
    this.includeTable.set("gammaCorrect", gammaCorrect);
    this.includeTable.set("functions", functions_default);
    this.includeTable.set("computeNormal", computeNormal);
    this.includeTable.set("simplex2D", simplex2D_default);
    this.includeTable.set("simplex3D", simplex3D_default);
    this.includeTable.set("rotate2D", rotate2D_default);
    this.includeTable.set("noises", noises_default);
    this.templateTable.set("screenQuad", [screenQuadVertex, screenQuadFragment]);
  }
  // Inject a fragment before the definition of the shader (before include process)
  set fragmentInjection(value) {
    this.fragmentInj = value;
  }
  get fragmentInjection() {
    return this.fragmentInj;
  }
  extractIncludes(source) {
    const result = [];
    const regex = /#include <(.*)>/g;
    let match;
    while ((match = regex.exec(source)) !== null) {
      result.push({
        start: match.index,
        end: match.index + match[0].length,
        name: match[1]
      });
    }
    return result;
  }
  replaceInclude(source, include, table) {
    const replacement = table.get(include.name);
    if (replacement === void 0) {
      throw new Error(`Unknown include directive ${include.name}`);
    }
    return source.substring(0, include.start) + replacement + source.substring(include.end);
  }
  includeString(source, value, include) {
    return source.substring(0, include.start) + value + source.substring(include.end);
  }
  addTemplate(name, sources) {
    this.templateTable.set(name, sources);
  }
  hasTemplate(name) {
    return this.templateTable.has(name);
  }
  addInclude(name, source) {
    this.includeTable.set(name, source);
  }
  addDefine(name, source) {
    this.defineTable.set(name, source);
  }
  buildShaderBase(template, lib, definitions, glslVersion, precisions) {
    const sources = Array.isArray(template) ? template : this.templateTable.get(template);
    if (sources === void 0) {
      throw new Error(`Unknown templates ${Array.isArray(template) ? template.join(",") : template}`);
    }
    if (!glslVersion)
      glslVersion = "300 es";
    if (!precisions)
      precisions = defaultPrecisionTable;
    const result = [];
    for (const source of sources) {
      let curr = "";
      if (glslVersion) {
        curr += `#version ${glslVersion}
`;
      }
      if (precisions) {
        for (const [type, precision] of precisions) {
          curr += `precision ${precision} ${type};
`;
        }
      }
      if (definitions) {
        for (const [name, value] of definitions) {
          curr += `#define ${name} ${value}
`;
        }
      }
      curr += "\n";
      if (this.fragmentInj) {
        curr += this.fragmentInj;
      }
      const includes = this.extractIncludes(source);
      let lastIndex = 0;
      for (const include of includes) {
        curr += source.substring(lastIndex, include.start);
        let replacement;
        if (lib) {
          replacement = lib[include.name];
        }
        if (replacement === void 0) {
          replacement = this.includeTable.get(include.name);
        }
        if (replacement === void 0) {
          throw new Error(`Unknown include directive ${include.name}`);
        }
        curr += replacement;
        lastIndex = include.end;
      }
      curr += source.substring(lastIndex);
      result.push(curr);
    }
    return result;
  }
  buildCustomShader(template, lib, definitions, glslVersion, precisions) {
    return this.buildShaderBase(template, lib, definitions, glslVersion, precisions);
  }
  buildShader(template, definitions, glslVersion, precisions) {
    return this.buildShaderBase(template, void 0, definitions, glslVersion, precisions);
  }
  test() {
    const defs = /* @__PURE__ */ new Map([
      ["MAX_LIGHTS", "4"],
      ["MAX_SHADOWS", "4"],
      ["TEXTURE_NAME", "tex"]
    ]);
    const precisions = /* @__PURE__ */ new Map([
      ["float", "highp"],
      ["int", "mediump"]
    ]);
    const foo = this.buildShader("screenQuad", defs, "300 es", precisions);
    return foo;
  }
};

// src/lib/utils/fnv1a.ts
var FNV_PRIMES = {
  32: 16777619n,
  64: 1099511628211n,
  128: 309485009821345068724781371n,
  256: 374144419156711147060143317175368453031918731002211n,
  512: 35835915874844867368919076489095108449946327955754392558399825615420669938882575126094039892345713852759n,
  1024: 5016456510113118655434598811035278955030765345404790744303017523831112055108147451509157692220295382716162651878526895249385292291816524375083746691371804094271873160484737966720260389217684476157468082573n
};
var FNV_OFFSETS = {
  32: 2166136261n,
  64: 14695981039346656037n,
  128: 144066263297769815596495629667062367629n,
  256: 100029257958052580907070968620625704837092796014241193945225284501741471925557n,
  512: 9659303129496669498009435400716310466090418745672637896108374329434462657994582932197716438449813051892206539805784495328239340083876191928701583869517785n,
  1024: 14197795064947621068722070641403218320880622795441933960878474914617582723252296732303717722150864096521202355549365628174669108571814760471015076148029755969804077320157692458563003215304957150157403644460363550505412711285966361610267868082893823963790439336411086884584107735010676915n
};
var cachedEncoder = new globalThis.TextEncoder();
function fnv1aUint8Array(uint8Array, size) {
  const fnvPrime = FNV_PRIMES[size];
  let hash = FNV_OFFSETS[size];
  for (let index = 0; index < uint8Array.length; index++) {
    hash ^= BigInt(uint8Array[index]);
    hash = BigInt.asUintN(size, hash * fnvPrime);
  }
  return hash;
}
function fnv1aEncodeInto(string, size, utf8Buffer) {
  if (utf8Buffer.length === 0) {
    throw new Error("The `utf8Buffer` option must have a length greater than zero");
  }
  const fnvPrime = FNV_PRIMES[size];
  let hash = FNV_OFFSETS[size];
  let remaining = string;
  while (remaining.length > 0) {
    const result = cachedEncoder.encodeInto(remaining, utf8Buffer);
    remaining = remaining.slice(result.read);
    for (let index = 0; index < result.written; index++) {
      hash ^= BigInt(utf8Buffer[index]);
      hash = BigInt.asUintN(size, hash * fnvPrime);
    }
  }
  return hash;
}
function fnv1a(value, { size, utf8Buffer } = { size: 32 }) {
  if (!FNV_PRIMES[size]) {
    throw new Error("The `size` option must be one of 32, 64, 128, 256, 512, or 1024");
  }
  if (typeof value === "string") {
    if (utf8Buffer) {
      return fnv1aEncodeInto(value, size, utf8Buffer);
    }
    value = cachedEncoder.encode(value);
  }
  return fnv1aUint8Array(value, size);
}

// src/lib/geometry/Attributes.ts
var AttributeTable = [
  "POSITION",
  "TEXCOORD0",
  "TEXCOORD1",
  "NORMAL",
  "BITANGENT",
  "TANGENT",
  "COLOUR0",
  "COLOUR1"
];

// src/lib/Material/Material.ts
var Material = class {
  name_;
  source_;
  hash_;
  resource_;
  base;
  rebuild_ = true;
  static register(lib) {
    throw TypeError("Tried to build base Material type");
  }
  constructor(name) {
    this.name_ = name ?? "";
    this.base = {
      attribs: []
    };
  }
  set rebuild(value) {
    this.rebuild_ = value;
  }
  get rebuild() {
    return this.rebuild_;
  }
  get attribs() {
    return this.base.attribs;
  }
  set attribs(attribs) {
    this.base.attribs = attribs?.map((a) => {
      return { ...a };
    });
  }
  get name() {
    return this.name_;
  }
  set name(value) {
    this.name_ = value;
  }
  set resource(res) {
    this.resource_ = res;
  }
  get resource() {
    return this.resource_;
  }
  set props(props) {
    for (const key in props) {
      if (key in this && typeof this[key] !== "function") {
        this[key] = props[key];
      }
    }
  }
  get props() {
    return {};
  }
  set source(defs) {
    this.source_ = defs;
  }
  get source() {
    return this.source_;
  }
  get hash() {
    if (this.hash_)
      return this.hash_;
    const data = new Array();
    const props = this.props;
    for (const key in props) {
      switch (typeof props[key]) {
        case "object": {
          const name = props[key].constructor.name;
          data.push(name);
          break;
        }
        case "boolean":
        case "number":
          if (props[key])
            data.push(key);
          break;
        case "string":
          data.push(props[key]);
          break;
        default:
          console.error("Unhandled:", key, props[key]);
      }
    }
    for (const [key, value] of this.defines) {
      data.push(`${key}=${value}`);
    }
    this.hash_ = fnv1a(data.join(""), { size: 32 });
    return this.hash_;
  }
  get defines() {
    const ret = /* @__PURE__ */ new Map();
    for (const attrib of this.base.attribs ?? []) {
      ret.set(attrib.type, AttributeTable.indexOf(attrib.type).toString());
    }
    return ret;
  }
};

// src/lib/utils/Colour.ts
var ctx = document.createElement("canvas").getContext("2d");
function convertColour(input, outputFormat) {
  let r, g, b;
  if (typeof input === "string") {
    if (input.startsWith("#")) {
      const hex = input.slice(1);
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else if (input.startsWith("rgb")) {
      const match = input.match(/\d+/g);
      if (match && match.length === 3) {
        [r, g, b] = match.map(Number);
      } else {
        throw new Error("Invalid RGB string format");
      }
    } else {
      ctx.fillStyle = input;
      return convertColour(ctx.fillStyle, outputFormat);
    }
  } else if (Array.isArray(input) && input.length === 3) {
    if (input.every((val) => val >= 0 && val <= 1)) {
      [r, g, b] = input.map((val) => Math.round(val * 255));
    } else if (input.every((val) => val >= 0 && val <= 255)) {
      [r, g, b] = input.map(Math.round);
    } else {
      throw new Error("Invalid array input values");
    }
  } else {
    throw new Error("Invalid input type");
  }
  switch (outputFormat) {
    case "HEX" /* HEX */:
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    case "RGB_STRING" /* RGB_STRING */:
      return `rgb(${r}, ${g}, ${b})`;
    case "RGB_ARRAY" /* RGB_ARRAY */:
      return [r, g, b];
    case "RGB_NORMALISED" /* RGB_NORMALISED */:
      return [r / 255, g / 255, b / 255];
    case "SRGB_NORMALISED" /* SRGB_NORMALISED */:
      return [Math.pow(r / 255, 2.2), Math.pow(g / 255, 2.2), Math.pow(b / 255, 2.2)];
    default:
      throw new Error("Invalid output format");
  }
}

// src/lib/Material/BasicMaterial.ts
var vertexShader = `
layout(location = POSITION) in vec3 position;

#if defined(TEXCOORD0)
layout(location = TEXCOORD0) in vec2 texcoord0;
out vec2 uv0;
#endif // TEXCOORD0

#if defined(COLOUR0)
layout(location = COLOUR0) in vec3 colour0;
out vec3 col0;
#endif // COLOUR0

uniform mat4 modelViewProjMatrix;

void main() {
  gl_Position = modelViewProjMatrix * vec4(position, 1.0);
#if defined(TEXCOORD0)
  uv0 = texcoord0;
#endif // TEXCOORD0
#if defined(COLOUR0)
  col0 = colour0;
#endif // COLOUR0
}
`;
var fragmentShader = `
#include <gammaCorrect>
  
#if defined(HAS_MAP)
uniform sampler2D map;
#endif // HAS_MAP

#if defined(TEXCOORD0)
in vec2 uv0;
#endif // TEXCOORD0

#if defined(COLOUR0)
in vec3 col0;
#endif // COLOUR0

uniform vec3 diffuseColour;

out vec4 fragColour;

void main() {
#if defined(HAS_MAP) && defined(TEXCOORD0)
  fragColour = texture(map, uv0);
#else
  fragColour = vec4(1.);
#endif
  
#if defined(COLOUR0)
  fragColour.rgb *= diffuseColour * col0.rgb;
#else
  fragColour.rgb *= diffuseColour;
#endif
  
  fragColour.rgb = gammaCorrect(fragColour.rgb);
}
`;
var materialName = "BasicMaterial";
var BasicMaterial = class extends Material {
  data;
  dirty = {};
  static register(lib) {
    if (!lib.hasTemplate(materialName)) {
      lib.addTemplate(materialName, [vertexShader, fragmentShader]);
    }
  }
  constructor(name) {
    super(name);
    this.data = {
      colour: new Vec3(1)
    };
  }
  set colour(colour) {
    this.data.colour.set(convertColour(colour, "SRGB_NORMALISED" /* SRGB_NORMALISED */));
  }
  get colour() {
    return this.data.colour;
  }
  set map(map) {
    this.data.map = map;
  }
  get map() {
    return this.data.map;
  }
  set props(props) {
    super.props = props;
  }
  get props() {
    return this.data;
  }
  get defines() {
    const ret = /* @__PURE__ */ new Map();
    const base = super.defines;
    for (const [key, def] of base)
      ret.set(key, def);
    if (this.data.map)
      ret.set("HAS_MAP", "");
    return ret;
  }
};

// src/lib/ShaderLibrary/templates/ssquad.vs.glsl
var ssquad_vs_default = "const vec2 pos[3] = vec2[3](\n  vec2(-1.0, -1.0),\n  vec2(+3.0, -1.0),\n  vec2(-1.0, +3.0)\n);\n\n#if defined(HAS_UV0)\nout vec2 uv0;\n#endif\n\nvoid main() {\n#if defined(HAS_UV0)\n  uv0 = pos[gl_VertexID] * 0.5 + 0.5;\n  #if defined(FLIP_Y)\n  uv0 = vec2(uv0.x, 1. - uv0.y);\n  #endif\n#endif\n  gl_Position = vec4(pos[gl_VertexID], 0.0, 1.0);\n}\n";

// src/lib/ShaderLibrary/templates/ssquad.fs.glsl
var ssquad_fs_default = "#include <gammaCorrect>\n\n#if defined(HAS_UV0)\nin vec2 uv0;\n#endif\n\n#if defined(HAS_MAP)\nuniform sampler2D map;\n#endif\n\nuniform float opacity;\n\nout vec4 fragColour;\n\nvoid main() {\n#if defined(HAS_MAP) && defined(HAS_UV0)\n  fragColour = texture(map, uv0);\n#elif defined(HAS_UV0)\n  fragColour = vec4(uv0, 1.0 - uv0.x, 1.0);\n#else\n  fragColour = vec4(1.0);\n#endif\n\n#if defined(GAMMA_CORRECT)\n  fragColour.rgb = gammaCorrect(fragColour.rgb);\n#endif\n\n  fragColour.a = opacity;\n}\n";

// src/lib/Material/ScreenQuadMaterial.ts
var materialName2 = "ScreenQuadMaterial";
var ScreenQuadMaterial = class extends Material {
  data;
  dirty = {};
  static register(lib) {
    if (!lib.hasTemplate(materialName2)) {
      lib.addTemplate(materialName2, [ssquad_vs_default, ssquad_fs_default]);
    }
  }
  constructor(name) {
    super(name);
    this.data = {
      opacity: 1
    };
  }
  set map(map) {
    this.data.map = map;
  }
  get map() {
    return this.data.map;
  }
  set flipY(value) {
    this.data.flipY = value;
  }
  get flipY() {
    return this.data.flipY;
  }
  set gammaCorrect(value) {
    this.data.gammaCorrect = value;
  }
  get gammaCorrect() {
    return this.data.gammaCorrect;
  }
  set opacity(value) {
    this.data.opacity = value;
  }
  get opacity() {
    return this.data.opacity;
  }
  set props(props) {
    super.props = props;
  }
  get props() {
    return this.data;
  }
  get defines() {
    const ret = /* @__PURE__ */ new Map();
    const base = super.defines;
    for (const [key, def] of base)
      ret.set(key, def);
    if (this.data.map)
      ret.set("HAS_MAP", "");
    if (this.data.flipY)
      ret.set("FLIP_Y", "1");
    if (this.data.gammaCorrect)
      ret.set("GAMMA_CORRECT", "");
    ret.set("HAS_UV0", "");
    return ret;
  }
};

// src/lib/ShaderLibrary/templates/gbuffer.vs.glsl
var gbuffer_vs_default = "layout(location = POSITION) in vec3 position;\n\n#if defined(NORMAL)\nlayout(location = NORMAL) in vec3 normal;\n#endif\n\nuniform PerFrameData {\n  mat4 projectionViewMatrix;\n  mat4 projectionMatrix;\n  mat4 worldToViewMatrix;\n  mat4 viewToWorldMatrix;\n};\n\nuniform PerObjectData {\n  mat4 mvpMatrix;\n  mat4 modelMatrix;\n  mat4 modelViewMatrix;\n  mat4 normalMatrix;\n};\n\nstruct V2F {\n  vec3 vPos;\n#if defined(NORMAL)\n  vec3 vNor;\n#endif\n};\n\nout V2F v2f;\n\nvoid main() {\n  v2f.vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;\n  v2f.vNor = normalize((normalMatrix * vec4(normal, 0.0)).xyz);\n  gl_Position = mvpMatrix * vec4(position, 1.0);\n}\n";

// src/lib/ShaderLibrary/templates/gbuffer.fs.glsl
var gbuffer_fs_default = "uniform PerFrameData {\n  mat4 projectionViewMatrix;\n  mat4 projectionMatrix;\n  mat4 worldToViewMatrix;\n  mat4 viewToWorldMatrix;\n};\n\nstruct V2F {\n  vec3 vPos;\n#if defined(NORMAL)\n  vec3 vNor;\n#endif\n};\n\nin V2F v2f;\n\nout vec3 fragOutput[2];\n\nuniform vec2 outputScaleBias;\n\nvoid main() {\n  fragOutput[0] = normalize(v2f.vNor * outputScaleBias.x + outputScaleBias.y);\n  fragOutput[1] = v2f.vPos;\n}\n";

// src/lib/Material/GBufferMaterial.ts
var materialName3 = "GBufferMaterial";
var GBufferMaterial = class extends Material {
  data;
  dirty = {};
  static register(lib) {
    if (!lib.hasTemplate(materialName3)) {
      lib.addTemplate(materialName3, [gbuffer_vs_default, gbuffer_fs_default]);
    }
  }
  constructor(name) {
    super(name);
    this.data = {
      normal: true,
      view: false
    };
  }
  set normal(value) {
    this.data.normal = value;
  }
  get normal() {
    return this.data.normal;
  }
  set view(value) {
    this.data.view = value;
  }
  get view() {
    return this.data.view;
  }
  set props(props) {
    super.props = props;
  }
  get props() {
    return this.data;
  }
  get defines() {
    const ret = /* @__PURE__ */ new Map();
    const base = super.defines;
    for (const [key, def] of base)
      ret.set(key, def);
    return ret;
  }
};

// src/lib/Material/MaterialFactory.ts
var materialMap = {
  BasicMaterial: { Constructor: BasicMaterial, register: BasicMaterial.register },
  ScreenQuadMaterial: { Constructor: ScreenQuadMaterial, register: ScreenQuadMaterial.register },
  GBufferMaterial: { Constructor: GBufferMaterial, register: GBufferMaterial.register }
};
var MaterialFactory = class {
  library_;
  constructor(lib) {
    this.library_ = lib ?? new ShaderLibrary();
  }
  make(template, properties) {
    const lib = this.library_;
    const type = materialMap[template];
    if (!type) {
      throw new Error(`Could not find Material '${template}' type`);
    }
    const mat = new type.Constructor();
    type.register(lib);
    mat.props = properties;
    mat.source = lib.buildShader(template, mat.defines, mat.shdrVer);
    return mat;
  }
};

// src/lib/engine/UniformBuffer.ts
var UniformBuffer = class {
  gl;
  resource = null;
  constructor(gl) {
    this.gl = gl;
  }
  initialise(bufferOrSize) {
    const gl = this.gl;
    if (this.resource == null) {
      this.resource = gl.createBuffer();
      if (this.resource == null) {
        console.error("Failed to allocate uniform buffer");
        return false;
      }
    }
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.resource);
    if (typeof bufferOrSize === "number")
      gl.bufferData(gl.UNIFORM_BUFFER, bufferOrSize, gl.DYNAMIC_COPY);
    else
      gl.bufferData(gl.UNIFORM_BUFFER, bufferOrSize, gl.DYNAMIC_COPY, 0);
    return gl.getError() === gl.NO_ERROR;
  }
  update(data) {
    const gl = this.gl;
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.resource);
    gl.bufferSubData(gl.UNIFORM_BUFFER, 0, data, 0);
  }
  bindBuffer(unit) {
    this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, unit, this.resource);
  }
};

// src/lib/engine/UniformBlock.ts
var UniformBlock = class _UniformBlock {
  buffer;
  definition;
  block;
  name;
  snippet;
  unit_ = -1;
  static blockName(glslSnippet) {
    return /uniform\s+([a-zA-Z0-9_]+)\s+{\s+/.exec(glslSnippet)?.[1] ?? "";
  }
  constructor(gl, glslSnippet) {
    this.name = _UniformBlock.blockName(glslSnippet);
    this.snippet = glslSnippet;
    const Def = createUniformBlockWrapper(glslSnippet);
    this.definition = Def;
    this.block = new Def();
    this.buffer = new UniformBuffer(gl);
    this.buffer.initialise(this.block.buffer.byteLength);
  }
  update(data) {
    if (data) {
      for (const key of Object.keys(data)) {
        if (this.block[key] && ArrayBuffer.isView(this.block[key])) {
          if (Array.isArray(data[key])) {
            let offset = 0;
            for (const el of data[key]) {
              this.block[key].set(el, offset);
              offset += el.length;
            }
          } else {
            this.block[key].set(data[key]);
          }
        }
      }
    }
    this.buffer.update(this.block.getUint8View());
  }
  set unit(unit) {
    this.unit_ = unit;
  }
  get unit() {
    return this.unit_;
  }
  bindBuffer(unit) {
    this.buffer.bindBuffer(unit ?? this.unit_);
  }
  buildData() {
    const result = {};
    const lines = this.snippet.split("\n");
    for (const line of lines) {
      const match = line.trim().match(/^\s*(float|int|vec2|vec3|vec4|mat2|mat3|mat4)\s+(\w+)(?:\[(\d+)\])?;/);
      if (match) {
        const [, type, name, arraySize] = match;
        let uniformData;
        const createUniformData = () => {
          switch (type) {
            case "float":
            case "int":
              return 0;
            case "vec2":
              return new Vec2(0, 0);
            case "vec3":
              return new Vec3(0, 0, 0);
            case "vec4":
              return new Vec4(0, 0, 0, 0);
            case "mat2":
              return Mat2.makeIdentity();
            case "mat3":
              return Mat3.makeIdentity();
            case "mat4":
              return Mat4.makeIdentity();
            default:
              return null;
          }
        };
        if (arraySize) {
          const size = parseInt(arraySize, 10);
          uniformData = Array(size).fill(null).map(createUniformData);
        } else {
          uniformData = createUniformData();
        }
        result[name] = uniformData;
      }
    }
    return result;
  }
};
function createUniformBlockWrapper(glslSnippet) {
  const uniformRegex = /(\w+)\s+(\w+)(?:\[(\d+)\])?;/g;
  const uniforms = [];
  let match;
  while ((match = uniformRegex.exec(glslSnippet)) !== null) {
    uniforms.push({
      name: match[2],
      type: match[1],
      size: match[3] ? parseInt(match[3]) : 1
    });
  }
  const typeSize = {
    float: 4,
    vec2: 8,
    vec3: 16,
    // Aligned to 16 bytes in std140
    vec4: 16,
    mat2: 32,
    mat3: 48,
    mat4: 64
  };
  const typeLength = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16
  };
  let totalSize = 0;
  uniforms.forEach((uniform) => {
    totalSize = Math.ceil(totalSize / 16) * 16;
    totalSize += typeSize[uniform.type] * uniform.size;
  });
  return class UniformBlockWrapper {
    buffer;
    uint8View;
    constructor() {
      this.buffer = new ArrayBuffer(totalSize);
      this.uint8View = new Uint8Array(this.buffer);
      let offset = 0;
      uniforms.forEach((uniform) => {
        offset = Math.ceil(offset / 16) * 16;
        const size = typeSize[uniform.type];
        const length = typeLength[uniform.type] * uniform.size;
        this[uniform.name] = new Float32Array(this.buffer, offset, length);
        offset += size * uniform.size;
      });
    }
    getBuffer() {
      return this.buffer;
    }
    getUint8View() {
      return this.uint8View;
    }
  };
}

// src/lib/Renderer/Renderer.ts
var ALL_BUFFER_MASK = WebGL2RenderingContext.COLOR_BUFFER_BIT | WebGL2RenderingContext.DEPTH_BUFFER_BIT | WebGL2RenderingContext.STENCIL_BUFFER_BIT;
var RenderState = class {
  clearColour_ = new Vec4(0);
  viewport_ = new Vec4(0);
  scissor_ = new Vec4(0);
  scissorTest_ = false;
  dirtyCache = {};
  dirty_ = false;
  get dirty() {
    return this.dirty_;
  }
  clear() {
    this.dirty_ = false;
  }
  get clearColour() {
    return this.clearColour_;
  }
  set clearColour(value) {
    this.clearColour_.set(value);
    this.dirty_ = this.dirtyCache.clearColour = true;
  }
  get viewport() {
    return this.viewport_;
  }
  set viewport(value) {
    this.viewport_.set(value);
    this.dirty_ = this.dirtyCache.viewport = true;
  }
  get scissor() {
    return this.scissor_;
  }
  set scissor(value) {
    this.scissor_.set(value);
    this.dirty_ = this.dirtyCache.scissor = true;
  }
  get scissorTest() {
    return this.scissorTest_;
  }
  set scissorTest(value) {
    this.scissorTest_ = value;
    this.dirty_ = this.dirtyCache.scissorTest = true;
  }
  isDirty(prop) {
    return this.dirtyCache[prop] ?? false;
  }
  checkClear(prop) {
    const v = this.dirtyCache[prop];
    this.dirtyCache[prop] = false;
    return v;
  }
  clearDirty(prop) {
    if (prop in this.dirtyCache)
      this.dirtyCache.prop = false;
  }
  reset() {
    for (const key in this.dirtyCache)
      this.dirtyCache[key] = false;
  }
};
var Renderer = class {
  dPR = window.devicePixelRatio ?? 1;
  screen_;
  config;
  context_;
  renderState;
  matFactory_;
  uniformBlocks_;
  // Not entirely sure where to put the empty vao
  vao_;
  // Maps shader hash to instance + context
  shaderCache = /* @__PURE__ */ new Map();
  constructor(config) {
    if (!config) {
      config = {
        canvas: document.createElement("canvas")
      };
    } else {
      if (!config.canvas) {
        config.canvas = config.offscreen ? new OffscreenCanvas(window.innerWidth, window.innerHeight) : document.createElement("canvas");
      } else if (typeof config.canvas === "string") {
        config.canvas = document.querySelector(config.canvas);
      }
    }
    if (!(config.canvas instanceof HTMLCanvasElement) && !(config.canvas instanceof OffscreenCanvas)) {
      throw new TypeError("Expected an HTMLCanvasElement to initialise Renderer");
    }
    this.config = config;
    this.context_ = config.canvas.getContext("webgl2", config);
    this.uniformBlocks_ = /* @__PURE__ */ new Map();
    this.vao_ = this.context_.createVertexArray();
    this.matFactory_ = new MaterialFactory();
    this.screen_ = new Vec2();
    this.renderState = new RenderState();
    this.applyRenderState(this.renderState);
  }
  resize() {
    const canvas = this.config.offscreen ? this.config.canvas : this.config.canvas;
    const bound = this.config.offscreen ? { width: window.innerWidth, height: window.innerHeight } : canvas.getBoundingClientRect();
    const w = Math.round(bound.width);
    const h = Math.round(bound.height);
    const rW = Math.round(this.dPR * w);
    const rH = Math.round(this.dPR * h);
    if (this.screen_.x !== rW || this.screen_.y !== rH) {
      this.screen_.x = rW;
      this.screen_.y = rH;
      canvas.width = this.screen_.x;
      canvas.height = this.screen_.y;
      this.renderState.viewport = [0, 0, this.screen_.x, this.screen_.y];
      this.syncState();
    }
  }
  get screen() {
    return this.screen_;
  }
  get canvas() {
    return this.config.canvas;
  }
  get context() {
    return this.context_;
  }
  get clearColour() {
    return this.renderState.clearColour;
  }
  set clearColour(colour) {
    this.renderState.clearColour = colour;
  }
  clear(mask = ALL_BUFFER_MASK) {
    this.context.clear(mask);
  }
  get viewport() {
    return this.renderState.viewport;
  }
  set viewport(vp) {
    this.renderState.viewport = vp;
  }
  createMaterial(type, props) {
    const mat = this.matFactory_.make(type.name, props);
    if (!this.buildMaterial(mat)) {
      console.error(`Failed to build material ${type.name}`);
      return null;
    }
    return mat;
  }
  buildMaterial(mat) {
    console.log(mat.props);
    console.log(mat.defines);
    if (mat.source) {
      const hash = mat.hash;
      if (this.shaderCache.has(hash)) {
        console.log("shader already exists");
        const rec = this.shaderCache.get(hash);
        if (rec) {
          mat.resource = rec.program;
          rec.counter += 1;
          return rec.program;
        }
      }
      const program = compileProgram(this.context_, mat.source[0], mat.source[1]);
      if (typeof program === "string") {
        console.error(program);
        return null;
      }
      const uniforms = buildRenderContext(this.context_, program);
      const blockIndex = buildUniformBlocks(this.context_, program);
      const extracted = extractUniformBlocks(mat.source[0]);
      extractUniformBlocks(mat.source[1], extracted);
      const blocks = {};
      for (const blockName in extracted) {
        if (!this.uniformBlocks_.has(blockName)) {
          const blk2 = new UniformBlock(this.context_, extracted[blockName]);
          blk2.unit = this.uniformBlocks_.size;
          this.uniformBlocks_.set(blockName, blk2);
        }
        const blk = this.uniformBlocks_.get(blockName);
        const data = blk.buildData();
        this.context.uniformBlockBinding(program, blockIndex[blockName], blk.unit);
        blocks[blockName] = data;
      }
      mat.resource = program;
      this.shaderCache.set(hash, {
        program,
        uniforms,
        blockIndex,
        blocks,
        counter: 1
      });
      return program;
    }
    return null;
  }
  useMaterial(mat, updateContext) {
    this.context_.useProgram(mat.resource ?? 0);
    const shdr = this.shaderCache.get(mat.hash);
    if (!shdr) {
      console.error("Shader not cached in shaderCache");
      return;
    }
    for (const block in shdr.blocks) {
      const blk = this.uniformBlocks_.get(block);
      if (updateContext)
        blk.update(shdr.blocks[block]);
      blk.bindBuffer();
    }
    if (updateContext) {
      for (const key in shdr.uniforms) {
        if (key in mat.props) {
          if (shdr.uniforms[key].dataType === UniformType.SAMPLER_2D)
            continue;
          shdr.uniforms[key].value = mat.props[key];
        }
      }
    }
    bindContext(this.context, shdr.uniforms);
  }
  materialContext(mat) {
    if (this.shaderCache.has(mat.hash)) {
      return this.shaderCache.get(mat.hash);
    }
    return null;
  }
  deleteMaterial(mat) {
    const rec = this.shaderCache.get(mat.hash);
    if (rec) {
      if (rec.counter === 1) {
        this.shaderCache.delete(mat.hash);
        this.context_.deleteProgram(rec.program);
        return true;
      } else {
        rec.counter -= 1;
      }
    }
    return false;
  }
  renderPass(pass) {
    const gl = this.context;
    if (pass.program == null) {
      console.error("RenderPass is not initialised");
      return;
    }
    gl.useProgram(pass.program);
    if (pass.isQuad) {
      gl.bindVertexArray(this.vao_);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else if (pass.mesh) {
      pass.mesh.draw();
    }
  }
  syncState() {
    this.applyRenderState(this.renderState);
  }
  applyRenderState(rs) {
    const gl = this.context;
    if (rs.checkClear("clearColour"))
      gl.clearColor(rs.clearColour.x, rs.clearColour.y, rs.clearColour.z, rs.clearColour.w);
    if (rs.checkClear("viewport"))
      gl.viewport(rs.viewport.x, rs.viewport.y, rs.viewport.z, rs.viewport.w);
    if (rs.checkClear("scissor"))
      gl.scissor(rs.scissor.x, rs.scissor.y, rs.scissor.z, rs.scissor.w);
    if (rs.checkClear("scissorTest"))
      rs.scissorTest ? gl.enable(gl.SCISSOR_TEST) : gl.disable(gl.SCISSOR_TEST);
    this.renderState.clear();
  }
};

// src/lib/Renderer/RenderTarget.ts
function getOptValue(opt, name, idx) {
  if (name in opt) {
    return Array.isArray(opt[name]) ? opt[name][idx] : opt[name];
  }
}
var RenderTarget = class _RenderTarget {
  gl;
  width_ = 1;
  height_ = 1;
  samples_ = 1;
  options;
  framebuffer;
  renderbuffer;
  depthbuffer;
  constructor(gl, dimensions, options) {
    this.gl = gl;
    this.width_ = dimensions[0];
    this.height_ = dimensions[1];
    this.samples_ = dimensions[2] != null ? dimensions[2] : 1;
    this.options = options ?? {
      renderTargetType: "texture",
      attachments: 1,
      internalFormat: gl.RGBA8,
      format: gl.RGBA,
      dataType: gl.UNSIGNED_BYTE,
      wrapMode: { s: gl.CLAMP_TO_EDGE, t: gl.CLAMP_TO_EDGE },
      filterMode: { min: gl.NEAREST, mag: gl.NEAREST },
      generateMipmaps: false,
      depthBufferType: "none",
      internalDepthFormat: gl.DEPTH_COMPONENT16,
      depthFormat: gl.DEPTH_COMPONENT,
      depthDataType: gl.UNSIGNED_INT
    };
    if (!("wrapMode" in this.options))
      this.options.wrapMode = { s: gl.CLAMP_TO_EDGE, t: gl.CLAMP_TO_EDGE };
    if (!("filterMode" in this.options))
      this.options.filterMode = { min: gl.NEAREST, mag: gl.NEAREST };
    if (this.options.internalFormat === gl.RGBA32F || this.options.internalFormat === gl.RGBA16F) {
      const ext2 = gl.getExtension("EXT_color_buffer_float");
      if (ext2 == null) {
        throw new Error("EXT_color_buffer_float is required");
      }
    }
    let ext = null;
    if (this.options.anisotropy != null) {
      ext = gl.getExtension("EXT_texture_filter_anisotropic");
      if (ext == null) {
        throw new Error("EXT_texture_filter_anisotropic is required");
      }
    }
    this.framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
    const opt = this.options;
    this.renderbuffer = [];
    const attachments = this.options.attachments ?? 1;
    for (let attachment = 0; attachment < attachments; ++attachment) {
      const internalFormat = getOptValue(opt, "internalFormat", attachment);
      const format = getOptValue(opt, "format", attachment);
      const dataType = getOptValue(opt, "dataType", attachment);
      const wrapMode = getOptValue(opt, "wrapMode", attachment);
      const filterMode = getOptValue(opt, "filterMode", attachment) ?? { min: gl.NEAREST, mag: gl.NEAREST };
      console.log(internalFormat, format, dataType, wrapMode, filterMode);
      if (opt.renderTargetType === "texture" && this.samples_ === 1) {
        const renderBuffer = gl.createTexture();
        if (!renderBuffer)
          throw Error("Failed to create attachment texture");
        gl.bindTexture(gl.TEXTURE_2D, renderBuffer);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, this.width_, this.height_, 0, format, dataType, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapMode.s);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapMode.t);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filterMode.min);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filterMode.mag);
        if (ext && this.options.anisotropy != null) {
          const max = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, max);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachment, gl.TEXTURE_2D, renderBuffer, 0);
        this.renderbuffer?.push(renderBuffer);
      } else if (opt.renderTargetType === "renderbuffer") {
        const renderBuffer = gl.createRenderbuffer();
        if (!renderBuffer)
          throw Error("Failed to create attachment texture");
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderbuffer);
        if (this.samples_ > 1) {
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.samples_, internalFormat, this.width_, this.height_);
        } else {
          gl.renderbufferStorage(gl.RENDERBUFFER, internalFormat, this.width_, this.height_);
        }
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachment, gl.RENDERBUFFER, renderBuffer);
        this.renderbuffer?.push(renderBuffer);
      }
    }
    if (opt.depthBufferType !== "none" && opt.internalDepthFormat != null && opt.depthFormat != null && opt.depthDataType != null) {
      if (opt.depthBufferType === "texture" && this.samples_ === 1) {
        this.depthbuffer = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.depthbuffer);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          opt.internalDepthFormat,
          this.width_,
          this.height_,
          0,
          opt.depthFormat,
          opt.depthDataType,
          null
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthbuffer, 0);
      } else {
        this.depthbuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthbuffer);
        if (this.samples_ > 1) {
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.samples_, opt.internalDepthFormat, this.width_, this.height_);
        } else {
          gl.renderbufferStorage(gl.RENDERBUFFER, opt.internalDepthFormat, this.width_, this.height_);
        }
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthbuffer);
      }
    } else {
      this.depthbuffer = null;
    }
    checkFramebufferStatus(gl.getError());
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  destroy() {
    if (!this.framebuffer)
      return;
    for (const b of this.renderbuffer ?? []) {
      console.log(b);
      if (this.options.renderTargetType === "renderbuffer")
        this.gl.deleteRenderbuffer(b);
      else if (this.options.renderTargetType === "texture")
        this.gl.deleteTexture(b);
    }
    if (this.options.depthBufferType === "renderbuffer")
      this.gl.deleteRenderbuffer(this.depthBuffer);
    else if (this.options.depthBufferType === "texture")
      this.gl.deleteTexture(this.depthBuffer);
    this.gl.deleteFramebuffer(this.framebuffer);
  }
  get width() {
    return this.width_;
  }
  get height() {
    return this.height_;
  }
  get samples() {
    return this.samples_;
  }
  get isMultisample() {
    return this.samples_ > 1;
  }
  get frameBuffer() {
    return this.framebuffer;
  }
  get colourBuffer() {
    return this.renderbuffer?.[0];
  }
  get depthBuffer() {
    return this.depthbuffer;
  }
  target(idx) {
    return this.renderbuffer?.[idx];
  }
  bind() {
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2, gl.COLOR_ATTACHMENT3]);
  }
  release() {
    if (this.options.generateMipmaps === true) {
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.renderbuffer);
      this.gl.generateMipmap(this.gl.TEXTURE_2D);
      this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
  }
  resolve(fbuffer) {
    const gl = this.gl;
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this.framebuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, fbuffer instanceof _RenderTarget ? fbuffer.framebuffer : fbuffer);
    gl.blitFramebuffer(
      0,
      0,
      this.width_,
      this.height_,
      0,
      0,
      this.width_,
      this.height_,
      gl.COLOR_BUFFER_BIT,
      gl.NEAREST
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  resize(width, height, samples = 1) {
    if (this.width_ !== width || this.height_ !== height || this.samples_ !== samples) {
      this.width_ = width;
      this.height_ = height;
      this.samples_ = samples;
      const gl = this.gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
      const opt = this.options;
      const attachments = this.options.attachments ?? 1;
      for (let attachment = 0; attachment < attachments; ++attachment) {
        const internalFormat = getOptValue(opt, "internalFormat", attachment);
        const format = getOptValue(opt, "format", attachment);
        const dataType = getOptValue(opt, "dataType", attachment);
        if (opt.renderTargetType === "texture" && this.samples_ === 1) {
          const renderBuffer = this.renderbuffer?.[attachment];
          gl.bindTexture(gl.TEXTURE_2D, renderBuffer);
          gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, this.width_, this.height_, 0, format, dataType, null);
          gl.bindTexture(gl.TEXTURE_2D, null);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachment, gl.TEXTURE_2D, renderBuffer, 0);
        } else {
          const renderBuffer = this.renderbuffer?.[attachment];
          gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
          if (this.samples_ > 1) {
            gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.samples_, internalFormat, this.width_, this.height_);
          } else {
            gl.renderbufferStorage(gl.RENDERBUFFER, internalFormat, this.width_, this.height_);
          }
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachment, gl.RENDERBUFFER, renderBuffer);
        }
      }
      if (opt.depthBufferType !== "none" && opt.internalDepthFormat != null && opt.depthFormat != null && opt.depthDataType != null) {
        if (opt.depthBufferType === "texture" && this.samples_ === 1) {
          gl.bindTexture(gl.TEXTURE_2D, this.depthbuffer);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            opt.internalDepthFormat,
            this.width_,
            this.height_,
            0,
            opt.depthFormat,
            opt.depthDataType,
            null
          );
          gl.bindTexture(gl.TEXTURE_2D, null);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthbuffer, 0);
        } else {
          gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthbuffer);
          if (this.samples_ > 1) {
            gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.samples_, opt.internalDepthFormat, this.width_, this.height_);
          } else {
            gl.renderbufferStorage(gl.RENDERBUFFER, opt.internalDepthFormat, this.width_, this.height_);
          }
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthbuffer);
        }
      }
      checkFramebufferStatus(gl.getError());
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
  }
};
function checkFramebufferStatus(status) {
  const gl = WebGL2RenderingContext;
  switch (status) {
    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case gl.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    case gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:
      return "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
    case gl.FRAMEBUFFER_COMPLETE:
      return "FRAMEBUFFER_COMPLETE";
  }
  return null;
}

// src/lib/zed/Host.ts
var dPR = window.devicePixelRatio ?? 1;
var hostBlock = `
layout(std140) uniform HostData {
  vec4 resolution; // [width, height, AR, devicePixelRatio]
  vec4 viewport; // [x, y, width, height]
  vec4 timeData; // [time, delta, unused, unused]
};
`;
var hostIncludeDef = `
${hostBlock}

// #define screen resolution.xy
// #define AR resolution.z
#define screen viewport.zw
#define AR (viewport.z / viewport.w)
#define dPR resolution.w
#define time timeData.x
#define dt timeData.y
`;
var Host = class {
  rndr;
  config_;
  timer_;
  library_;
  viewport = new Vec4(0, 0, 0, 0);
  standardBlock;
  raf;
  constructor(config) {
    this.rndr = config.canvas ? new Renderer({ canvas: config.canvas }) : new Renderer({ offscreen: config.offscreen });
    this.config_ = config;
    this.timer_ = new Timer();
    this.library_ = new ShaderLibrary();
    this.standardBlock = new UniformBlock(this.context, hostBlock);
    this.raf = 0;
    this.standardBlock.unit = 0;
    this.standardBlock.bindBuffer();
    this.library_.fragmentInjection = hostIncludeDef;
    this.buildPipeline(this.config_.pipeline);
    this.rndr.resize();
    this.resize(this.rndr.screen.x, this.rndr.screen.y);
    window.addEventListener("resize", () => {
      this.rndr.resize();
      this.resize(this.rndr.screen.x, this.rndr.screen.y);
    });
  }
  getView(name) {
    return this.config_.pipeline.multipleViews?.get(name);
  }
  initialiseViews() {
    const map = /* @__PURE__ */ new Map();
    if (!this.config_.views)
      return map;
    for (let i = 0; i < this.config_.views.length; ++i) {
      const div = this.config_.views[i];
      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(div.offsetWidth * dPR);
      canvas.height = Math.floor(div.offsetHeight * dPR);
      canvas.style.position = "absolute";
      canvas.style.width = `${div.offsetWidth}px`;
      canvas.style.height = `${div.offsetHeight}px`;
      canvas.style.zIndex = "-1";
      div.insertBefore(canvas, div.firstChild);
      const ctx2 = canvas.getContext("2d", { alpha: false });
      if (this.config_.canvasAA) {
        console.log("enableAA");
        ctx2.imageSmoothingEnabled = true;
        ctx2.imageSmoothingQuality = "high";
      } else {
        ctx2.imageSmoothingEnabled = false;
      }
      ctx2.scale(dPR, dPR);
      const data = this.config_.viewDataFnc?.(div) ?? {};
      map.set(div.id, { div, canvas, ctx: ctx2, data });
    }
    return map;
  }
  buildPipeline(pipeline) {
    if (pipeline.passes.length === 0)
      return false;
    const gl = this.context;
    if (this.config_.views) {
      pipeline.multipleViews = this.initialiseViews();
      console.log("multiple views:", pipeline.multipleViews);
    }
    const pipeBlocks = {};
    pipeline.blocks = pipeBlocks;
    pipeBlocks.HostData = this.standardBlock;
    let blockCounter = 1;
    for (const pass of pipeline.passes) {
      const shader = pipeline.library ? this.library_.buildCustomShader(pass.shaderDef, pipeline.library, pass.defines) : this.library_.buildShader(pass.shaderDef, pass.defines);
      const prog = compileProgram(gl, shader[0], shader[1]);
      if (typeof prog === "string") {
        console.error(prog);
        return false;
      }
      pass.program = prog;
      pass.context = buildRenderContext(gl, prog);
      const blocks = buildUniformBlocks(gl, prog);
      pass.blocks = {};
      for (const def of pass.blockDef ?? []) {
        const name = UniformBlock.blockName(def);
        if (name === "") {
          console.error("Block name not found in block definition:", def);
          return false;
        }
        if (pipeBlocks[name] && pipeBlocks[name].definition === def) {
          pass.blocks[name] = pipeBlocks[name];
          continue;
        }
        const block = new UniformBlock(gl, def);
        pass.blocks[block.name] = block;
        pipeBlocks[block.name] = block;
        gl.uniformBlockBinding(prog, blocks[block.name], blockCounter);
        block.bindBuffer(blockCounter);
        block.unit = blockCounter;
        blockCounter++;
      }
      pipeline.passes[pipeline.passes.length - 1].isOutput = true;
    }
    if (this.config_.handlers.onInitialise)
      this.config_.handlers.onInitialise(pipeline);
    return true;
  }
  get timer() {
    return this.timer_;
  }
  get context() {
    return this.rndr.context;
  }
  get config() {
    return this.config_;
  }
  start() {
    this.timer_.start();
    this.renderLoop();
  }
  stop() {
    cancelAnimationFrame(this.raf);
    this.timer_.stop();
  }
  pause() {
    this.timer_.pause();
  }
  renderLoop() {
    this.update();
    this.render();
    this.raf = requestAnimationFrame(this.renderLoop.bind(this));
  }
  update() {
    this.timer_.update();
    this.standardBlock.block.timeData.set([this.timer_.currentTime, this.timer_.deltaTime, 0, 0]);
    this.standardBlock.update();
    this.config_.handlers.onUpdate?.(this.timer_.currentTime, this.timer_.deltaTime);
  }
  renderToView(pass, x, y, width, height, data) {
    const gl = this.context;
    const canvas = this.rndr.canvas;
    gl.scissor(x, canvas.height - y - height, width, height);
    gl.viewport(x, canvas.height - y - height, width, height);
    gl.enable(gl.SCISSOR_TEST);
    this.standardBlock.block.viewport.set([x, canvas.height - y - height, width, height]);
    this.standardBlock.update();
    const blockName = Object.keys(data)[0];
    const block = pass.blocks?.[blockName];
    block?.update?.(data[blockName]);
    this.rndr.renderPass(pass);
  }
  renderView(view, pass) {
    const rect = view.div.getBoundingClientRect();
    const rb = Math.floor(rect.bottom);
    const rt = Math.floor(rect.top);
    const rr = Math.floor(rect.right);
    const rl = Math.floor(rect.left);
    if (rb < 0 || rt > window.innerHeight || rr < 0 || rl > window.innerWidth) {
      view.canvas.style.display = "none";
      return;
    }
    view.canvas.style.display = "block";
    view.canvas.style.left = `${rl + window.scrollX}px`;
    view.canvas.style.top = `${rt + window.scrollY}px`;
    if (pass.context) {
      this.rndr.context.useProgram(pass.program);
      const data = view.data;
      for (const key in data) {
        if (key in pass.context)
          pass.context[key].value = data[key];
      }
      bindContext(this.rndr.context, pass.context);
    }
    this.renderToView(pass, rl, rt, view.canvas.width, view.canvas.height, view.data);
    view.ctx.drawImage(
      this.rndr.canvas,
      rl,
      rt,
      Math.floor(view.canvas.width * dPR),
      Math.floor(view.canvas.height * dPR),
      0,
      0,
      view.canvas.width,
      view.canvas.height
    );
  }
  render() {
    const pipeline = this.config_.pipeline;
    this.config_.handlers.onPreRender?.(pipeline);
    if (pipeline.multipleViews) {
      for (let idx = 0; idx < pipeline.passes.length; ++idx) {
        const pass = pipeline.passes[idx];
        this.config_.handlers.onPassPreRender?.(pass);
        for (const view of pipeline.multipleViews) {
          if (view[1].data.model !== idx)
            continue;
          this.renderView(view[1], pass);
        }
        this.config_.handlers.onPassPostRender?.(pass);
      }
    } else {
      for (const pass of pipeline.passes) {
        this.config_.handlers.onPassPreRender?.(pass);
        this.rndr.renderPass(pass);
        this.config_.handlers.onPassPostRender?.(pass);
      }
    }
    this.config_.handlers.onPostRender?.(pipeline);
  }
  resize(width, height) {
    this.context.viewport(0, 0, width, height);
    this.viewport.set(width, height, width / height, dPR);
    this.standardBlock.block.resolution.set([width, height, width / height, dPR]);
    this.config_.handlers.onResize?.(width, height);
  }
  captureView(view, scale) {
    console.log(view.canvas.width, view.canvas.height, scale);
    const W = Math.floor(view.canvas.width * scale);
    const H = Math.floor(view.canvas.height * scale);
    const rt = new RenderTarget(this.context, [W, H], {
      renderTargetType: "texture",
      internalFormat: this.context.RGBA8,
      format: this.context.RGBA,
      dataType: this.context.UNSIGNED_BYTE,
      depthBufferType: "none"
    });
    rt.bind();
    this.context.disable(this.context.SCISSOR_TEST);
    this.context.viewport(0, 0, W, H);
    this.context.clearColor(1, 0, 0, 1);
    this.context.clear(this.context.COLOR_BUFFER_BIT);
    const vp = Array.from(this.standardBlock.block.viewport);
    const rs = Array.from(this.standardBlock.block.resolution);
    this.standardBlock.block.viewport.set([0, 0, W, H]);
    this.standardBlock.block.resolution.set([W, H, rs[2], rs[3] * scale]);
    this.standardBlock.update();
    const pipeline = this.config_.pipeline;
    for (let idx = 0; idx < pipeline.passes.length; ++idx) {
      const pass = pipeline.passes[idx];
      console.log(pass, view, view.data.model);
      if (view.data.model === idx) {
        this.config_.handlers.onPassPreRender?.(pass);
        if (pass.context) {
          this.rndr.context.useProgram(pass.program);
          const data = view.data;
          for (const key in data)
            if (key in pass.context)
              pass.context[key].value = data[key];
          bindContext(this.rndr.context, pass.context);
        }
        console.log("render");
        this.rndr.renderPass(pass);
        this.config_.handlers.onPassPostRender?.(pass);
      }
    }
    this.standardBlock.block.viewport.set(vp);
    this.standardBlock.block.resolution.set(rs);
    this.standardBlock.update();
    rt.release();
    this.downloadFramebufferAsPNG(rt, W, H, `${view.div.id ?? "capture"}.png`);
    rt.destroy();
  }
  downloadFramebufferAsPNG(rt, width, height, filename) {
    const gl = this.context;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx2 = canvas.getContext("2d");
    const pixels = new Uint8Array(width * height * 4);
    rt.bind();
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    const imageData = new ImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const sourceIndex = (y * width + x) * 4;
        const targetIndex = ((height - y - 1) * width + x) * 4;
        imageData.data[targetIndex] = pixels[sourceIndex];
        imageData.data[targetIndex + 1] = pixels[sourceIndex + 1];
        imageData.data[targetIndex + 2] = pixels[sourceIndex + 2];
        imageData.data[targetIndex + 3] = pixels[sourceIndex + 3];
      }
    }
    ctx2.putImageData(imageData, 0, 0);
    const url = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = filename || "framebuffer.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    rt.release();
  }
};

// src/apps/kore/shaders/vertex-shader.glsl
var vertex_shader_default = "const vec2 position[3] = vec2[3](\n    vec2(-1.0, -1.0),\n    vec2(+3.0, -1.0),\n    vec2(-1.0, +3.0)\n);\n\nout vec2 uv;\n\nvoid main() {\n    gl_Position = vec4(position[gl_VertexID], 0.0, 1.0);\n    uv = position[gl_VertexID] * .5 + .5;\n}\n";

// src/apps/kore/shaders/final.glsl
var final_default = `#include <commonDefs>
#include <functions>
#include <simplex2D>
#include <simplex3D>
#include <noises>
#include <colourTable>
#include <computeNormal>

#define SINE_WAVE 0
#define BREAKING_WAVE 1

#if defined(ZED)
#define MODEL 1
#define DRAW_SWATCH
#else
in vec2 uv;
#endif

/********************************************************************************/
/* UNIFORMS                                                                     */
/********************************************************************************/

// default background = [0.901961, 0.87451, 0.815686]

uniform vec3 backgroundColour; // { "value": "#E6DFD0", "isColour": true }

uniform vec3 lDir;             // { "value": [0.0, -1.0, 1.0], "min": -1.0, "max": 1.0, "step": 0.01 }
uniform float speed;           // { "value": 1.0, "min": 0.01, "max": 10.0, "step": 0.01 }
uniform float duration;        // { "value": 20.0, "min": 20.0, "max": 60.0, "step": 1.0 }
uniform vec2 position;         // { "value": [0.0, 0.0], "min": -1000.0, "max": 1000.0, "step": 1.0 }
uniform float ringScale;       // { "value": 0.04, "min": 0.01, "max": 0.15, "step": 0.001 }
uniform vec4 colourScale;      // { "value": [1.4, 1.4, 1.4, 1.4], "min": 0.0, "max": 3.0, "step": 0.001 }
uniform float normalScale;     // { "value": 1.0, "min": 0.001, "max": 1.0, "step": 0.001 }
// Sine properties
uniform vec4 rings;            // { "value": [1.0, 2.0, 6.0, 12.0], "min": 1.0, "max": 40.0, "step": 0.1 }
uniform vec4 angle;            // { "value": [0.0, 3.14, 1.57, 4.71], "min": 0.0, "max": 6.28319, "step": 0.01 }
uniform vec4 arc;              // { "value": [0.5, 0.5, 0.5, 0.5], "min": -1.0, "max": 1.0, "step": 0.01 }
uniform vec4 fade;             // { "value": [1.0, 1.0, 1.0, 1.0], "min": 0.01, "max": 0.99, "step": 0.01 }
uniform vec4 fadeScale;        // { "value": [1.0, 1.0, 1.0, 1.0], "min": 0.0, "max": 10.0, "step": 1.0 }
uniform float colourCount;     // { "value": 2.0, "min": 1.0, "max": 4.0, "step": 1.0 }
uniform vec4 colourID;         // { "value": [0, 7, 4, 9], "min": 0, "max": 9, "step": 1 }
uniform vec4 colourRing0;      // { "value": [1.0, 2.0, 8.0, 11.0], "min": 1.0, "max": 20.0, "step": 0.1 }
uniform vec4 colourRing1;      // { "value": [1.0, 2.0, 18.0, 19.0], "min": 1.0, "max": 20.0, "step": 0.1 }
uniform vec4 colourRing2;      // { "value": [1.0, 2.0, 18.0, 19.0], "min": 1.0, "max": 20.0, "step": 0.1 }
uniform vec4 colourRing3;      // { "value": [1.0, 2.0, 18.0, 19.0], "min": 1.0, "max": 20.0, "step": 0.1 }
// Breaking properties
uniform float steepness;       // { "value": 2.0, "min": 0.1, "max": 10.0, "step": 0.01 }
uniform float waveScale;       // { "value": 1.6, "min": 0.1, "max": 2.0, "step": 0.01 }
uniform float waveWidth;       // { "value": 22.0, "min": 1.0, "max": 100.0, "step": 0.1 }
uniform float waveOrigin;      // { "value": 2, "min": 0.0, "max": 3.0, "step": 1.0 }
uniform vec4 yAxisMixer;       // { "value": [-6.0, 1.0, 2.0, 30.0], "min": -10.0, "max": 20.0, "step": 0.1 }
uniform vec4 xAxisMixer;       // { "value": [-1.0, -10.0, -3.20, 8.50], "min": -10.0, "max": 20.0, "step": 0.1 }
uniform float shape;           // { "value": 0.56, "min": 0.01, "max": 0.99, "step": 0.01 }

uniform float creatorDPR;

#if MODEL == SINE_WAVE
#define globalScale (ringScale / dPR)
#elif MODEL == BREAKING_WAVE
#define globalScale 0.03 * (dPR * 1500. / max(screen.x, screen.y))
#endif

// NOTE: The dPRScale and dPRInv must be calculated based on whatever the original creator model's dPR is, so that it appears consistent
// regardless of the dPR on another machine.

#define globalPos (position * dPR)
#define dPRScale (dPR / creatorDPR)
#define dPRInv (creatorDPR / dPR)

#define TIME (speed * time)

vec4 colRing[4];

/********************************************************************************/
/* GLOBALS                                                                      */
/********************************************************************************/

vec3 lightDir; // The position of the light (points towards)
vec2 invRes; // The inverse of the viewport (may be a region of the window)

struct Record {
  mat3 T; // The world transform
  vec2 centre; // The current centre of the animation
  vec2 fragCoord; // Copy of the fragCoord in world space
  vec3 dispMag; // displacement from centre, mag of distance
  vec2 dir; // normalised direction from centre
  float height; // The height of the computed position
  vec3 normal; // The computed normal from the height
  float annulus; // The annulus scalar
  float sign; // Which side of the bezier curve is this?
  float dist; // The distance of the point from the centre (for rings)
};

Record record;

/********************************************************************************/
/* FUNCTIONS                                                                    */
/********************************************************************************/

#if defined(RAND_TEX)

// Note: Used a seeded PRNG to ensure consistent generation

float random2(vec2 co) {
  vec2 size = vec2(textureSize(randTex, 0));
  return texture(randTex, co * screen / size).r;
}

#else

float random2(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}rand

#endif

float length2(vec2 A) { return dot(A, A); }

// Draws the background colour - stippled sand where the annulus is 0
vec3 drawBackground(float b) {
  return mix(sandColour, backgroundColour, clamp(bias(b, random2(uv)), 0.01, 0.999));
}

vec4 mixColour(float dst, vec4 colour, int idx) {
  colour.rgb = mix(colour.rgb, colourTable[idx], dst);
  colour.a = max(colour.a, dst);
  return colour;
}

/********************************************************************************/
/* ANIMATIONS                                                                   */
/********************************************************************************/

/********************* SINE_WAVE *********************/
#if MODEL == SINE_WAVE

float computeAnnulus(float dist, vec4 rings) {
  return saturate(smoothstep(rings.x * TWO_PI, rings.y * TWO_PI, dist) - smoothstep(rings.z * TWO_PI, rings.w * TWO_PI, dist));
}

vec4 computeWedge(int id, vec4 colour, vec4 ring) {
  vec2 deriv = vec2(cos(angle[id]), -sin(angle[id]));
  float f = saturate(dot(deriv, record.dir));

  float nn = bicubicNoise(vec2(fadeScale[id] * (atan(record.dir.y, record.dir.x)+PI)/TWO_PI, fadeScale[id] * 0.1 *(record.dist - TIME)), ivec2(int(fadeScale[id]), 200.));

  f = smoothstep(arc[id], 1.0, f);

  f *= computeAnnulus(mod(record.dist - TIME, duration * TWO_PI), ring) * colourScale[id] * mix(1.0, nn, fade[id]);
  return mixColour(f, colour, int(colourID[id]));
}

// Compute the flat centre, start, and end of the entire disc as scalar
float computeDisc(float dist) {
  record.annulus = computeAnnulus(dist, rings);
  return record.annulus;
}

float computePosition(vec2 P) {
  // This does not work on older mobile devices???: float dist = globalScale * record.dispMag.z;
  record.dist = globalScale * sqrt(length2(P));
  return computeDisc(record.dist) * sin(record.dist - mod(TIME, duration*TWO_PI)); // Mod to prevent drift
}

/********************* BREAKING_WAVE *********************/
#elif MODEL == BREAKING_WAVE

vec2 quadratic(float A, float x) {
  return vec2(x, A * x * x);
}

float yPos;

float computePosition(vec2 pos) {
  float A = steepness * -2e-4 * dPRScale;
  vec2 f = quadratic(A, pos.x);
  yPos = f.y;
  record.sign = f.y - pos.y;

  float h = abs(f.y - pos.y);
  float wS = 200. * waveScale * dPRInv;

  float flare = 1. - smoothstep(0., dPRInv * 100. * waveWidth * waveScale, abs(pos.x));
  h *= flare;

  float height = 1.6 / dPRInv * flare * flare * waveScale * waveScale * gain(shape, (1. - smoothstep(0., flare * wS, h)));
  return height;
}

vec4 computeWave(vec3 fg) {
  float sc = 100. * dPRInv;
  float yAxis = smoothstep(yAxisMixer[0] * sc, yAxisMixer[1] * sc, record.sign) - smoothstep(yAxisMixer[2] * sc, yAxisMixer[3] * sc, record.sign);

  float scalar = dot(record.dispMag.xy + dPRInv * 100. * xAxisMixer.yz, vec2(sin(xAxisMixer[0]), cos(xAxisMixer[0])));

  vec3 colour = int(colourCount) > 1
  ? mix(colourTable[int(colourID[0])], colourTable[int(colourID[1])], smoothstep(xAxisMixer.w * -100.0 * dPRInv, xAxisMixer.w * 100. * dPRInv, scalar))
  : colourTable[int(colourID[0])];

  return vec4(
  mix(fg, colour, yAxis),
  1.0
  );
}

#endif

vec3 computeColour() {
  const float sandFlicker = 0.1;
  vec3 fg = mix(backgroundColour, backgroundColour + 0.04, random2(uv - .13));
  float l = dot(record.normal, lightDir) * .5 + .5;

  vec4 kol = vec4(backgroundColour, 0.2);
  #if defined(SINE_WAVE) && MODEL == 0
  for(int i = 0; i < int(colourCount); ++i) {
    kol = computeWedge(i, kol, colRing[i]);
  }
  kol = mix(vec4(fg, 1.), kol, record.annulus);
  #else
  kol = computeWave(fg);
  #endif

  float flicker = 10. * dot(kol.rgb, vec3(.2126, .7152, .0722)) * (1. - dot(vec3(0., 0., 1.), record.normal));
  vec3 cc = mix(mix(sandColour, kol.rgb, 0.5), kol.rgb, l);
  vec3 c = mix(cc, fg, 0.45 * step(.5, random2(uv + .11)) * fract(random2(uv-.123) + flicker * sin(TWO_PI * random2(uv) + TIME)));

  return mix(c, fg, saturate(l - 0.5));
  //return mix(col, backgroundColour, step(0.5, uv.x));
}

/********************************************************************************/
/* ENTRY                                                                        */
/********************************************************************************/

mat3 makeTransform(vec2 pos, float rot, float scale) {
  return mat3(
  scale * cos(rot),  scale * sin(rot), 0.0,
  scale * -sin(rot), scale * cos(rot), 0.0,
  pos.x,             pos.y,            1.0
  );
}

mat3 makeRot2D(float rot) {
  return mat3(
  cos(rot), sin(rot), 0.0,
  -sin(rot), cos(rot), 0.0,
  0.0, 0.0, 1.0
  );
}

const float originRot[4] = float[](
0.0, PI, 3.*PI/3.0, 0.0
);

void initAnimation(vec2 fragCoord) {
  lightDir = normalize(lDir);
  record.centre = screen / 2.0 + vec2(globalPos.x, -globalPos.y);

  #if MODEL == BREAKING_WAVE
  float t = saturate(1. - mod(TIME, duration) / duration);
  vec2 origin = screen * vec2(floor(waveOrigin / 2.), floor(mod(waveOrigin, 2.)));

  record.centre = mix(screen / 2.0, origin, t * t);
  vec2 d = normalize(origin - record.centre);
  record.T = makeTransform(vec2(0.), atan(d.y, d.x) - PI, 3000./(dPRScale * max(screen.x, screen.y)));

  record.T *= makeRot2D(originRot[int(waveOrigin)]);

  lightDir.xy = normalize(record.centre);
  lightDir = normalize(lightDir);
  #else // SINE_WAVE
  record.T = makeTransform(vec2(0.), 0.0, 1.0);
  #endif
  record.T[2] = record.T * vec3(-record.centre, 0.);

  record.fragCoord = (record.T * vec3(fragCoord, 0.)).xy;
  record.dispMag.xy = (record.T * vec3(fragCoord, 1.)).xy;
  record.dispMag.z = length(record.dispMag.xy);
  record.dir = record.dispMag.xy / record.dispMag.z;
  record.height = computePosition(record.dispMag.xy);
  record.normal = computeNormal(record.height, globalScale / normalScale); // This ratio works across resolutions...
}

#if defined(DRAW_SWATCH)
vec4 drawSwatch(vec2 fragCoord) {
  vec2 dims = vec2(50. * dPRScale);
  vec2 coord = floor(fragCoord / dims);
  return mix(vec4(colourTable[5 * int(coord.y) + int(coord.x)], 1.), vec4(0.), float(any(greaterThan(coord, vec2(4., 1.)))));
}
#endif

void renderImage(out vec4 fragColour, vec2 fragCoord) {
  colRing[0] = colourRing0; // Zed doesn't auto-parse arrays yet...
  colRing[1] = colourRing1;
  colRing[2] = colourRing2;
  colRing[3] = colourRing3;

  initAnimation(fragCoord);
  fragColour = vec4(computeColour(), 1.0);
  #if defined(DRAW_SWATCH)
  vec4 swatch = drawSwatch(fragCoord);
  fragColour = mix(fragColour, swatch, swatch.a);
  #endif
}
`;

// src/lib/zed/injector.ts
var ICONS = {
  save: "\u{1F4BE}",
  copy: "\u{1F4CB}",
  new: "\u{1F195}",
  import: "\u{1F4E5}",
  export: "\u{1F4E4}",
  play: "\u25B6\uFE0F",
  pause: "\u23F8\uFE0F",
  stop: "\u23F9\uFE0F",
  delete: "\u{1F5D1}\uFE0F",
  noError: "\u{1F7E2}",
  error: "\u{1F534}",
  camera: "\u{1F4F7}"
};
var injectHTML = `
<!-- Canvas -->
<div id="canvas-container">
    <canvas id="canvas"></canvas>
</div>

<!-- Editor -->
<div id="editor">
    <div class="toolbar">
      <div class="tab-buttons">
          <button class="tab-button active" data-tab="text">Shader</button>
          <button class="tab-button" data-tab="lib">Library</button>
          <button class="tab-button" data-tab="html">Controls</button>
      </div>
      <div class="toolbar-controls">
          <button id="status" class="button">${ICONS.noError}</button>
          <select name="snippets" id="snippet-select" title="Snippet Library"></select>
         
          <button id="new-snippet" title="New Snippet">${ICONS.new}</button>
          <button id="save-snippet" title="Save Snippet">${ICONS.save}</button>
          <button id="delete-snippet" title="Delete Snippet">${ICONS.delete}</button>
          
          <!-- Shaders -->
          <select name="shaders" id="shader-select" title="Shader Library"></select>
          
          <button id="new-shader" title="New Shader">${ICONS.new}</button>
          <button id="save-shader" title="Save Shader">${ICONS.save}</button>
          <button id="delete-shader" title="Delete Shader">${ICONS.delete}</button>
          <button id="play-pause" title="Play/Pause">${ICONS.play}</button>
      </div>
    </div>
    <div class="tab-content active" id="text-tab"></div>
    <div class="tab-content" id="lib-tab"></div>
    <div class="tab-content" id="html-tab"></div>
</div>

<!-- Modals -->
<div id="modal-container" class="modal-container">
    <div class="modal">
        <div class="modal-header">
            <h2 id="modal-title"></h2>
            <button id="modal-close">&times;</button>
        </div>
        <div id="modal-content" class="modal-content"></div>
        <div class="modal-footer">
            <button id="modal-confirm">Confirm</button>
            <button id="modal-cancel">Cancel</button>
        </div>
    </div>
</div>
`;

// src/lib/zed/AnimationControlUI.ts
var AnimationControlUI = class _AnimationControlUI {
  container;
  controls;
  values;
  onUpdateCallback;
  onSnapshot;
  controlWindow;
  toggleButton;
  static styleInjected = false;
  textedit;
  snapshotResolution = 1;
  constructor(containerElement, controls, json, onUpdate, onSnapshot) {
    this.container = containerElement;
    this.controls = controls;
    this.values = JSON.parse(json);
    this.onUpdateCallback = onUpdate;
    this.onSnapshot = onSnapshot;
    this.initialise();
  }
  initialise() {
    if (!_AnimationControlUI.styleInjected)
      _AnimationControlUI.injectStyle();
    const wrapper = document.createElement("div");
    wrapper.className = "zed-button-wrapper";
    this.container.appendChild(wrapper);
    this.toggleButton = document.createElement("div");
    this.toggleButton.className = "zed-animation-control-button";
    this.toggleButton.innerHTML = "\u2699\uFE0F";
    wrapper.appendChild(this.toggleButton);
    this.controlWindow = document.createElement("div");
    this.controlWindow.className = "zed-animation-control-window";
    this.controlWindow.style.top = "34px";
    this.controlWindow.style.right = "8px";
    wrapper.appendChild(this.controlWindow);
    this.toggleButton.addEventListener("click", (e) => {
      e.stopPropagation();
      this.controlWindow.style.display = this.controlWindow.style.display === "block" ? "none" : "block";
    });
    this.createControls();
  }
  buildRow1Controls() {
    const textedit = document.createElement("input");
    textedit.type = "text";
    textedit.style.color = "white";
    textedit.style.width = "100%";
    textedit.style.backgroundColor = "black";
    textedit.style.padding = "4px";
    textedit.style.borderRadius = "4px";
    textedit.style.border = "1px solid #333";
    textedit.style.outline = "none";
    textedit.value = JSON.stringify(this.values).replace(/"/g, "'");
    textedit.addEventListener("keyup", (ev) => {
      if (ev.key === "Enter") {
        let values;
        try {
          values = JSON.parse(textedit.value.replace(/'/g, '"'));
        } catch (e) {
          console.error("Failed to parse input");
          return;
        }
        for (const key in this.controls) {
          if (key in values) {
            this.controls[key].value = values[key];
            if (Array.isArray(values[key])) {
              for (let i = 0; i < values[key].length; ++i) {
                this.controls[key].element[i].value = values[key][i];
                this.updateValueLabel(this.controls[key].element[i], values[key][i]);
              }
            } else {
              this.controls[key].element.value = values[key];
              if (!this.controls[key].isColour)
                this.updateValueLabel(this.controls[key].element, values[key]);
            }
          }
        }
        this.values = values;
        this.onUpdateCallback(textedit.value);
        textedit.setSelectionRange(0, 0);
        textedit.scrollLeft = 0;
      }
    });
    this.textedit = textedit;
    return textedit;
  }
  buildRow0Controls() {
    const row0 = document.createElement("div");
    row0.style.display = "flex";
    row0.style.alignItems = "center";
    row0.style.justifyContent = "space-between";
    const divID = document.createElement("span");
    divID.textContent = "#" + (this.container.id ?? "no_id");
    divID.style.font = "bold 16px Arial, sans-serif";
    divID.style.color = "white";
    row0.appendChild(divID);
    const notification = document.createElement("span");
    notification.className = "zed-notification";
    notification.innerHTML = "Copied!";
    const showNotification = () => {
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2e3);
    };
    const exportButtonContainer = document.createElement("div");
    exportButtonContainer.style.position = "relative";
    const exportButton = document.createElement("button");
    exportButton.innerHTML = ICONS.export;
    exportButton.style.color = "black";
    exportButton.appendChild(notification);
    exportButton.onclick = async () => {
      const json = JSON.stringify(this.values).replace(/"/g, "'");
      try {
        await navigator.clipboard.writeText(json);
      } catch (err) {
        fallbackCopyTextToClipboard(json);
      }
      showNotification();
    };
    exportButtonContainer.appendChild(exportButton);
    exportButtonContainer.appendChild(notification);
    row0.appendChild(exportButtonContainer);
    const resSelector = document.createElement("select");
    resSelector.style.color = "black";
    const arr = ["1x", "2x", "3x", "4x"];
    arr.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = parseInt(v).toString();
      opt.innerText = v;
      resSelector.appendChild(opt);
    });
    resSelector.onchange = (ev) => {
      this.snapshotResolution = parseInt(ev.target.value);
    };
    row0.appendChild(resSelector);
    const snapshotButton = document.createElement("button");
    snapshotButton.innerHTML = ICONS.camera;
    snapshotButton.onclick = async () => {
      this.onSnapshot?.(this.snapshotResolution);
    };
    row0.appendChild(snapshotButton);
    return row0;
  }
  createControls() {
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.gap = "6px";
    header.style.flexDirection = "column";
    header.style.marginBottom = "6px";
    const row0 = this.buildRow0Controls();
    const row1 = this.buildRow1Controls();
    header.appendChild(row0);
    header.appendChild(row1);
    this.controlWindow?.appendChild(header);
    Object.entries(this.controls).forEach(([name, control]) => {
      if (control.isColour) {
        const colourElement = this.createColourElement(name, control);
        this.controlWindow?.appendChild(colourElement);
      } else if (this.isNumericType(control.type)) {
        const controlElement = this.createControlElement(name, control);
        this.controlWindow?.appendChild(controlElement);
      }
    });
  }
  createControlElement(name, control) {
    const controlElement = document.createElement("div");
    controlElement.className = "zed-animation-control";
    const label = document.createElement("label");
    label.textContent = name;
    controlElement.appendChild(label);
    const value = this.values[name] !== void 0 ? this.values[name] : 0;
    if (Array.isArray(value)) {
      value.forEach((v, index) => {
        const sliderContainer = document.createElement("div");
        sliderContainer.className = "zed-slider-container";
        const slider = this.createSlider(name, control, v !== void 0 ? v : 0, index);
        const valueLabel = this.createValueLabel(v !== void 0 ? v : 0);
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(valueLabel);
        controlElement.appendChild(sliderContainer);
      });
    } else {
      const sliderContainer = document.createElement("div");
      sliderContainer.className = "zed-slider-container";
      const slider = this.createSlider(name, control, value !== void 0 ? value : 0);
      const valueLabel = this.createValueLabel(value !== void 0 ? value : 0);
      sliderContainer.appendChild(slider);
      sliderContainer.appendChild(valueLabel);
      controlElement.appendChild(sliderContainer);
    }
    return controlElement;
  }
  createColourElement(name, control) {
    const colourElement = document.createElement("div");
    colourElement.className = "zed-animation-control";
    const label = document.createElement("label");
    label.textContent = name;
    colourElement.appendChild(label);
    const value = this.values[name] !== void 0 ? this.values[name] : "#ffffff";
    const container = document.createElement("div");
    container.className = "zed-slider-container";
    const colour = document.createElement("input");
    colour.type = "color";
    colour.value = value.toString();
    container.appendChild(colour);
    colourElement.appendChild(container);
    colour.addEventListener("change", (ev) => {
      this.handleColourChange(name, ev.target.value);
    });
    control.element = colour;
    return colourElement;
  }
  createSlider(name, control, value, index) {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = (control.min ?? 0).toString();
    slider.max = (control.max ?? 1).toString();
    slider.step = (control.step ?? 0.01).toString();
    slider.value = value.toString();
    if (index != null) {
      if (Array.isArray(control.element))
        control.element.push(slider);
      else if (index === 0)
        control.element = [slider];
    } else {
      control.element = slider;
    }
    slider.addEventListener("input", (e) => {
      const newValue = parseFloat(e.target.value);
      this.handleSliderChange(name, newValue, index);
      this.updateValueLabel(slider, newValue);
    });
    return slider;
  }
  createValueLabel(value) {
    const valueLabel = document.createElement("span");
    valueLabel.className = "zed-value-label";
    valueLabel.textContent = this.formatValue(value);
    return valueLabel;
  }
  updateValueLabel(slider, value) {
    const valueLabel = slider.nextElementSibling;
    if (valueLabel?.classList.contains("zed-value-label")) {
      valueLabel.textContent = this.formatValue(value);
    }
  }
  formatValue(value) {
    return value.toFixed(2);
  }
  handleSliderChange(name, value, index) {
    if (index !== void 0 && Array.isArray(this.values[name])) {
      this.values[name][index] = value;
    } else {
      this.values[name] = value;
    }
    const newJsonString = JSON.stringify(this.values);
    this.onUpdateCallback(newJsonString);
    if (this.textedit)
      this.textedit.value = newJsonString.replace(/"/g, "'");
  }
  handleColourChange(name, value) {
    this.values[name] = convertColour(value, "RGB_NORMALISED" /* RGB_NORMALISED */);
    const newJsonString = JSON.stringify(this.values);
    this.onUpdateCallback(newJsonString);
    if (this.textedit)
      this.textedit.value = newJsonString.replace(/"/g, "'");
  }
  isNumericType(type) {
    return ["bool", "int", "float", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4"].includes(type);
  }
  static injectStyle() {
    if (_AnimationControlUI.styleInjected)
      return;
    const style = document.createElement("style");
    style.textContent = `
        .zed-animation-control-button {
            background-color: #000;
            margin-top: 8px;
            margin-right: 8px;
            color: #ccc;
            padding: 4px 4px;
            cursor: pointer;
            position: relative;
        }
        .zed-button-wrapper {
            position: relative;
            float: right;
        }
        .zed-animation-control-window {
            position: absolute;
            background: rgba(0, 0, 0, 0.7);
            color: #ffffff;
            padding: 10px;
            border-radius: 3px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            width: 260px;
            max-height: 400px;
            overflow-y: auto;
            display: none;
            z-index: 1001;
            > * {
                margin: 0;
                padding: 0;
            }
            &::-webkit-scrollbar {
                width: 10px;
            }
            &::-webkit-scrollbar-track {
                background: #000000;
            }
            &::-webkit-scrollbar-thumb {
                background: #888888;
            }
            &::-webkit-scrollbar-thumb:hover {
                background: #555555;
            }
            scrollbar-color: #888888 #000000;
            scrollbar-width: thin;
        }
        .zed-animation-control label {
            display: block;
            margin-bottom: 3px;
        }
        .zed-slider-container {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }
        .zed-animation-control input[type="range"] {
            -webkit-appearance: none;
            width: calc(100% - 40px);
            margin: 2px 5px 2px 0;
            height: 4px;
            background: #4caf50;
            outline: none;
            opacity: 0.7;
            transition: opacity .2s;
        }
        .zed-animation-control input[type="range"]:hover {
            opacity: 1;
        }
        .zed-animation-control input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            background: #bbb;
            border: solid 1px #000000;
            cursor: pointer;
        }
        .zed-animation-control input[type="range"]::-moz-range-thumb {
            width: 14px;
            height: 14px;
            background: #bbb;
            border: solid 1px #000000;
            cursor: pointer;
        }
        .zed-value-label {
            box-sizing: border-box;
            background-color: #000;
            color: #fff;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 10px;
            min-width: 30px;
            display: inline-block;
            line-height: normal;
            text-align: center;
        }
        .zed-notification {
            position: absolute;
            background-color: #4CAF50;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            bottom: -8%;
            left: -300%;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
            z-index: 100;
        }
        .zed-notification.show {
            opacity: 1;
        }
        .zed-animation-control-window button {
            padding: 2px 4px;
            color: black;
        }
    `;
    document.head.appendChild(style);
    _AnimationControlUI.styleInjected = true;
  }
};
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }
  document.body.removeChild(textArea);
}

// src/lib/engine/Texture.ts
var Texture = class {
  gl_;
  texture_;
  width_;
  height_;
  conf = { type: WebGL2RenderingContext.TEXTURE_2D };
  constructor(gl, conf, tex, width, height) {
    this.gl_ = gl;
    this.texture_ = tex ?? gl.createTexture();
    this.width_ = width ?? 0;
    this.height_ = height ?? 0;
    this.config = conf ?? { type: gl.TEXTURE_2D };
    console.log("this.conf:", this.conf);
  }
  get config() {
    return this.conf;
  }
  set config(conf) {
    const gl = WebGL2RenderingContext;
    this.conf = {
      type: conf?.type ?? gl.TEXTURE_2D,
      format: conf?.format ?? [gl.RGBA8, gl.RGBA],
      dataType: conf?.dataType ?? gl.UNSIGNED_BYTE,
      wrap: conf?.wrap ?? [gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE],
      filter: conf?.filter ?? [
        conf?.mipmaps ?? false ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR,
        gl.LINEAR
      ],
      mipmaps: conf?.mipmaps ?? false,
      aniso: conf?.aniso ?? 1,
      flip: conf?.flip ?? false
    };
  }
  dispose() {
    if (this.texture_) {
      const gl = this.gl_;
      gl.deleteTexture(this.texture_);
    }
  }
  get width() {
    return this.width_;
  }
  get height() {
    return this.height_;
  }
  get mipmaps() {
    return this.conf.mipmaps ?? true;
  }
  set mipmaps(value) {
    this.conf.mipmaps = value;
  }
  get aniso() {
    return this.conf.aniso ?? 1;
  }
  set aniso(value) {
    this.conf.aniso = value;
  }
  get format() {
    return this.conf.format ?? [];
  }
  set format(value) {
    this.conf.format = [...value];
  }
  get texture() {
    return this.texture_;
  }
  set texture(value) {
    this.texture_ = value;
  }
  bind(unit = 0) {
    const gl = this.gl_;
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(this.conf.type, this.texture_);
  }
  release(unit = 0) {
    const gl = this.gl_;
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(this.conf.type, null);
  }
  allocate(width, height, data, conf) {
    if (conf)
      this.conf = { ...this.conf, ...conf };
    this.width_ = Math.floor(width);
    this.height_ = Math.floor(height);
    this.defineTexture(width, height, data);
  }
  loadURL(url, conf, onLoaded) {
    const img = new Image();
    if (conf)
      this.config = conf;
    img.onload = () => {
      this.width_ = img.naturalWidth;
      this.height_ = img.naturalHeight;
      this.defineTexture(this.width_, this.height_, img, conf?.flip);
      if (onLoaded)
        onLoaded(this);
    };
    img.src = url;
  }
  defineTexture(width, height, data, flipY) {
    const gl = this.gl_;
    gl.bindTexture(this.conf.type, this.texture_);
    const mipmaps = this.conf?.mipmaps ?? true;
    const format = this.conf.format ?? [gl.RGBA8, gl.RGBA];
    const wrap = this.conf.wrap ?? [gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE];
    const filter = this.conf.filter ?? [mipmaps ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR, gl.LINEAR];
    const dataType = this.conf.dataType ?? gl.UNSIGNED_BYTE;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY ?? false);
    if (data && ArrayBuffer.isView(data)) {
      const r = data.byteLength % 4;
      if (r !== 0)
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    }
    if (data instanceof HTMLImageElement) {
      gl.texImage2D(this.conf.type, 0, format[0], format[1], dataType, data ?? null);
    } else {
      gl.texImage2D(this.conf.type, 0, format[0], width, height, 0, format[1], dataType, data ?? null);
    }
    if (flipY === true)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
    gl.texParameteri(this.conf.type, gl.TEXTURE_WRAP_S, wrap[0]);
    gl.texParameteri(this.conf.type, gl.TEXTURE_WRAP_T, wrap[1]);
    gl.texParameteri(this.conf.type, gl.TEXTURE_MIN_FILTER, filter[0]);
    gl.texParameteri(this.conf.type, gl.TEXTURE_MAG_FILTER, filter[1]);
    if (this.conf?.aniso ?? true) {
      const ext = gl.getExtension("EXT_texture_filter_anisotropic") ?? gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ?? gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
      if (ext) {
        const max = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(max, this.aniso));
      }
    }
    if (this.conf?.mipmaps)
      gl.generateMipmap(this.conf.type);
    gl.bindTexture(this.conf.type, null);
  }
};

// src/lib/zed/ControlParser.ts
var numericTypes = ["bool", "int", "float", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4"];
function createImage(gl, imgData, cb) {
  const t = new Texture(gl);
  t.loadURL(imgData, void 0, cb);
  return t;
}
var ControlParser = class _ControlParser {
  gl;
  uniforms;
  callbacks;
  constructor(gl) {
    this.gl = gl;
    this.uniforms = {};
    this.callbacks = {};
  }
  parseGLSL(glslCode) {
    this.clear();
    this.uniforms = _ControlParser.extractControls(glslCode);
  }
  static extractControls(glslCode) {
    const uniformRegex = /uniform\s+(\w+)\s+(\w+)\s*;\s*\/\/\s*(\{.*?\})/g;
    let match;
    const controls = {};
    while ((match = uniformRegex.exec(glslCode)) !== null) {
      const [, type, name, jsonString] = match;
      try {
        const config = JSON.parse(jsonString);
        if (config.isColour)
          config.value = convertColour(config.value, "RGB_NORMALISED" /* RGB_NORMALISED */);
        controls[name] = { type, ...config };
      } catch (error) {
        console.error(`Error parsing JSON for uniform ${name}:`, error);
      }
    }
    return controls;
  }
  updateTexture(name, unit, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const uri = e.target?.result;
      if (typeof uri === "string") {
        createImage(this.gl, uri, (tex) => {
          this.uniforms[name].texture = tex;
          tex.bind(unit);
          if (this.callbacks[name])
            this.callbacks[name](unit);
        });
      }
    };
    reader.readAsDataURL(file);
  }
  async exportJSON() {
    const data = {};
    for (const key in this.uniforms) {
      data[key] = this.uniforms[key].value;
    }
    const jsonString = JSON.stringify(data);
    try {
      await navigator.clipboard.writeText(jsonString);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
  generateHTML() {
    let html = '<div class="shader-controls">';
    html += '<button onclick="window.controlGenerator.exportJSON()" style="margin-bottom: 20px; padding: 5px">Export JSON</button>';
    for (const [name, config] of Object.entries(this.uniforms)) {
      html += `<div class="control-group">
                        <label for="${name}">${name}</label>
                        <div class="control-wrapper">`;
      if (config.isColour) {
        html += this.generateColourControl(name, config);
      } else if (numericTypes.includes(config.type)) {
        html += this.generateNumericControl(name, config);
      } else if (config.type === "sampler2D") {
        html += this.generateTextureControl(name, config);
      }
      html += "</div></div>";
    }
    html += "</div>";
    return html;
  }
  generateTextureControl(name, config) {
    return `<input type="file" id="${name}" name="${name}" accept="image/*"
                onchange="window.controlGenerator.updateTexture('${name}', ${config.unit}, this.files[0])">`;
  }
  generateColourControl(name, config) {
    const hex = typeof config.value === "string" ? config.value : convertColour(config.value, "HEX" /* HEX */);
    return `<input type="color" id="${name}" value="${hex}" 
                onchange="window.controlGenerator.updateColour('${name}', this.value)">`;
  }
  generateNumericControl(name, config) {
    let isArray = false;
    let count = 0;
    switch (config.type) {
      case "float":
      case "int":
      case "bool":
        isArray = false;
        break;
      case "ivec2":
      case "vec2":
        isArray = true;
        count = 2;
        break;
      case "vec3":
      case "ivec3":
        isArray = true;
        count = 3;
        break;
      case "vec4":
      case "ivec4":
        isArray = true;
        count = 4;
        break;
    }
    if (isArray) {
      let html = "";
      const components = ["x", "y", "z", "w"];
      for (let i = 0; i < count; i++) {
        html += `<div class="slider-container">
                  <label>${components[i]}</label>
                  <input type="range" id="${name}_${i}" name="${name}_${i}"
                      min="${config.min ?? 0}" max="${config.max ?? 1}" step="${config.step ?? 0.1}"
                      value="${config.value[i]}"
                      oninput="window.controlGenerator.updateUniformVec('${name}', ${i}, this.value)">
                  <span class="value-display">${config.value[i].toFixed(2)}</span>
              </div>`;
      }
      return html;
    } else {
      return `<div class="slider-container">
              <label>v</label>
              <input type="range" id="${name}" name="${name}"
                  min="${config.min ?? 0}" max="${config.max ?? 1}" step="${config.step ?? 0.1}"
                  value="${config.value}"
                  oninput="window.controlGenerator.updateUniform('${name}', this.value)">
              <span class="value-display">${config.value.toFixed(2)}</span>
            </div>`;
    }
  }
  updateUniform(name, value) {
    const parsedValue = parseFloat(value);
    this.uniforms[name].value = parsedValue;
    const displayElement = document.querySelector(`#${name}`).nextElementSibling;
    displayElement.textContent = parsedValue.toFixed(2);
    if (this.callbacks[name])
      this.callbacks[name](parsedValue);
  }
  updateUniformVec(name, index, value) {
    const parsedValue = parseFloat(value);
    this.uniforms[name].value[index] = parsedValue;
    const displayElement = document.querySelector(`#${name}_${index}`).nextElementSibling;
    displayElement.textContent = parsedValue.toFixed(2);
    if (this.callbacks[name])
      this.callbacks[name](this.uniforms[name].value);
  }
  updateColour(name, value) {
    const colour = convertColour(value, "RGB_NORMALISED" /* RGB_NORMALISED */);
    this.uniforms[name].value = colour;
    if (this.callbacks[name])
      this.callbacks[name](this.uniforms[name].value);
  }
  setUpdateCallback(name, callback) {
    this.callbacks[name] = callback;
  }
  injectControls(container) {
    if (container) {
      container.innerHTML = this.generateHTML();
      window.controlGenerator = this;
    } else {
      console.error("injectControls failed: container not found");
    }
  }
  getUniforms() {
    return this.uniforms;
  }
  clear() {
    this.uniforms = {};
    this.callbacks = {};
  }
};

// src/lib/maths/PseudoRNG.ts
function mulberry32(seed) {
  return function() {
    seed = seed + 1831565813;
    let t = seed;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var PseudoRNG = class {
  rngFunction;
  constructor(seed = Date.now()) {
    this.rngFunction = mulberry32(seed);
  }
  randInt(min, max) {
    return Math.floor(this.next() * (max - min)) + min;
  }
  randIntInclusive(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }
  randBoolean(probability = 0.5) {
    return this.next() < probability;
  }
  randChoice(array) {
    return array[this.randInt(0, array.length)];
  }
  next() {
    return this.rngFunction();
  }
};

// src/apps/kore/kore2.ts
var dPR2 = window.devicePixelRatio;
var defaultConf = `{"model":0,"randTex":2,"creatorDPR":${dPR2},"backgroundColour":[0.901961, 0.87451, 0.815686],"lDir":[0,-1,1],"speed":1,"duration":20,"position":[0,0],"ringScale":0.04,"colourScale":[2.553,3,2.363,1.982],"normalScale":1,"rings":[1,1.6,6,12],"angle":[0,3.14,1.57,4.71],"arc":[0.5,0.5,0.5,0.5],"fade":[1,1,1,1],"fadeScale":[1,1,1,1],"colourCount":4,"colourID":[1,7,4,9],"colourRing0":[1,2,8,11],"colourRing1":[1,2,18,19],"colourRing2":[1,2,18,19],"colourRing3":[1,2,18,19],"steepness":2,"waveScale":1.6,"waveWidth":22,"waveOrigin":0,"yAxisMixer":[-6,1,2,30],"xAxisMixer":[0,0,0,0],"shape":0.56}`;
var colourTable = `
  const vec3 colourTable[] = vec3[10](
    vec3(0.957, 0.298, 0.498), // Magenta = 0
    vec3(0.957, 0.302, 0.298), // Red = 1
    vec3(0.996, 0.424, 0.129), // Orange = 2
    vec3(0.992, 0.722, 0.020), // Yellow = 3
    vec3(0.231, 0.729, 0.431), // Green = 4
    vec3(0.361, 0.737, 0.647), // Teal = 5
    vec3(0.204, 0.600, 0.867), // Blue = 6
    vec3(0.486, 0.235, 0.686), // Purple 7
    vec3(0.518, 0.678, 1.000), // Light Blue = 8
    vec3(0.000, 0.208, 0.620) // Dark Blue = 9
  );

  // const vec3 backgroundColour = vec3(0.901961, 0.87451, 0.815686);
  const vec3 sandColour = vec3(0.654902, 0.588235, 0.501961);
`;
var mainDef = `
out vec4 fragColour;
void main() {
  renderImage(fragColour, gl_FragCoord.xy - viewport.xy);
}
`;
var Kore = class {
  host;
  randomTexture = null;
  pseudoRNG;
  constructor() {
    const conf = {
      pipeline: {
        passes: [
          {
            name: "kore-sine",
            shaderDef: [vertex_shader_default, final_default + mainDef],
            blockDef: [],
            isQuad: true,
            defines: /* @__PURE__ */ new Map([
              ["MODEL", "0"],
              ["RAND_TEX", "1"]
            ])
          },
          {
            name: "kore-breaking",
            shaderDef: [vertex_shader_default, final_default + mainDef],
            blockDef: [],
            isQuad: true,
            defines: /* @__PURE__ */ new Map([
              ["MODEL", "1"],
              ["RAND_TEX", "1"]
            ])
          }
        ],
        library: {
          colourTable
        }
      },
      canvasAA: false,
      handlers: {
        onUpdate: this.update.bind(this),
        onResize: this.resize.bind(this),
        onInitialise: this.onInitialise.bind(this),
        onPassPreRender: this.onPassPreRender.bind(this)
      },
      views: Array.from(document.querySelectorAll(".kore")).map((v, i) => {
        if (v.id.length === 0)
          v.id = "kore-" + i.toString() + "-gen";
        if (!v.hasAttribute("data-kore"))
          v.setAttribute("data-kore", defaultConf);
        return v;
      }),
      viewDataFnc: (div) => {
        const dataStr = div.getAttribute("data-kore");
        let data;
        if (dataStr)
          data = JSON.parse(dataStr.replace(/'/g, '"'));
        else {
          data = JSON.parse(defaultConf);
        }
        return data;
      },
      offscreen: true
    };
    this.host = new Host(conf);
    this.host.start();
    this.pseudoRNG = new PseudoRNG(13375);
    this.generateMapTexture(1024, 1024, window.devicePixelRatio);
    console.log(this.pseudoRNG);
  }
  onInitialise(renderPipeline) {
    for (const view of renderPipeline.multipleViews ?? []) {
      const controls = {
        model: { type: "int", value: 0, min: 0, max: 2, step: 1 },
        ...ControlParser.extractControls(renderPipeline.passes[0].shaderDef[1])
      };
      view[1].control = new AnimationControlUI(
        view[1].div,
        controls,
        (view[1].div.getAttribute("data-kore") ?? defaultConf).replace(/'/g, '"'),
        (json) => {
          view[1].data = JSON.parse(json.replace(/'/g, '"'));
        },
        (resScale) => {
          this.host.captureView(view[1], resScale);
        }
      );
    }
  }
  onPassPreRender(pass) {
    const gl = this.host.context;
    gl.activeTexture(gl.TEXTURE0 + 2);
    gl.bindTexture(gl.TEXTURE_2D, this.randomTexture);
  }
  update(time, dt) {
  }
  resize(width, height) {
  }
  texWidth = 0;
  texHeight = 0;
  generateRandTexture(w, h, unit, tex) {
    w = Math.round(w);
    h = Math.round(h);
    const buffer = new Uint8Array(w * h);
    for (let i = 0; i < buffer.length; i++)
      buffer[i] = this.pseudoRNG.next() * 255.999;
    const gl = this.host.context;
    if (!tex)
      tex = gl.createTexture();
    if (tex == null)
      throw new Error("tex is null");
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, w, h, 0, gl.RED, gl.UNSIGNED_BYTE, buffer);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    return tex;
  }
  generateMapTexture(w, h, dPR3) {
    w = Math.round(w);
    h = Math.round(h);
    if ((w !== this.texWidth || h !== this.texHeight) && this.host.context) {
      console.log("w:", w, "h:", h);
      this.randomTexture = this.generateRandTexture(w, h, 2, this.randomTexture);
      this.texWidth = w;
      this.texHeight = h;
    }
  }
};
var load = () => {
  const kore = new Kore();
  unused(kore);
};
window.addEventListener("DOMContentLoaded", load);
export {
  Kore
};
//# sourceMappingURL=index.js.map
