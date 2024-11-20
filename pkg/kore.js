var ve=Math.PI,xt=2*ve,vt=ve/2;function ye(...n){return n.length}function _(n,e,t=1e-6){return Math.abs(n-e)<t}function ee(n,e,t){return n<e?e:n>t?t:n}var H=class{currTime;prevTime;time;dt;state;get currentTime(){return this.time}get deltaTime(){return this.dt}constructor(){this.currTime=0,this.prevTime=0,this.time=0,this.dt=0,this.state=0}get isRunning(){return this.state===1}get isStopped(){return this.state===0}get isPaused(){return this.state===2}start(){this.state=1,this.prevTime=performance.now()*.001,this.currTime=this.prevTime,this.time=0,this.dt=0}stop(){this.state=0}pause(){this.state=2}update(){this.state===1&&(this.currTime=performance.now()*.001,this.dt=this.currTime-this.prevTime,this.time+=this.dt,this.prevTime=this.currTime)}};var L=class n extends Float32Array{static size=2;constructor(e,t){super(n.size),this.set(e??0,t??(typeof e=="number"?e:void 0))}static create(){return new n}clone(){return new n(this)}put(e,t){return this[0]=e,this[1]=t,this}set(e,t){return typeof e=="number"?(this[0]=e,this[1]=t??e):super.set(e),this}static set(e,t,r){return e[0]=t,e[1]=r,e}copy(e){return this.set(e),this}static copy(e,t){return e.set(t),e}add(e){return this[0]+=e[0],this[1]+=e[1],this}static add(e,t,r){return r=r??new n,r[0]=e[0]+t[0],r[1]=e[1]+t[1],r}addScalar(e){return this[0]+=e,this[1]+=e,this}static addScalar(e,t,r){return r=r??new n,r[0]=e[0]+t,r[1]=e[1]+t,r}addScaled(e,t){return this[0]+=e[0]*t,this[1]+=e[1]*t,this}static addScaled(e,t,r,i){return i=i??new n,i[0]=e[0]+t[0]*r,i[1]=e[1]+t[1]*r,i}sub(e){return this[0]-=e[0],this[1]-=e[1],this}static sub(e,t,r){return r=r??new n,r[0]=e[0]-t[0],r[1]=e[1]-t[1],r}subScalar(e){return this[0]-=e,this[1]-=e,this}static subScalar(e,t,r){return r=r??new n,r[0]-=t,r[1]-=t,r}mul(e){return this[0]*=e[0],this[1]*=e[1],this}static mul(e,t,r){return r=r??new n,r[0]=e[0]*t[0],r[1]=e[1]*t[1],r}mulScalar(e){return this[0]*=e,this[1]*=e,this}static mulScalar(e,t,r){return r=r??new n,r[0]=e[0]*t,r[1]=e[1]*t,r}div(e){return this[0]/=e[0],this[1]/=e[1],this}static div(e,t,r){return r=r??new n,r[0]=e[0]/t[0],r[1]=e[1]/t[1],r}divScalar(e){return this[0]/=e,this[1]/=e,this}static divScalar(e,t,r){return r=r??new n,r[0]=e[0]/t,r[1]=e[1]/t,r}dot(e){return this.x*e[0]+this.y*e[1]}static dot(e,t){return e[0]*t[0]+e[1]*t[1]}static perp(e){return new n(-e.y,e.x)}dotScalar(e,t){return this.x*e+this.y*t}static dotScalar(e,t,r){return e[0]*t+e[1]*r}normalise(){return this.mulScalar(1/this.len)}static normalise(e){if(Array.isArray(e)||e instanceof Float32Array){let t=1/n.len(e);return e[0]*=t,e[1]*=t,e}else if(e instanceof n)return e.mulScalar(1/e.len)}static kross(e,t){return e[0]*t[1]-e[1]*t[0]}static reflect(e,t){let r=2*n.dot(e,t),i=n.mulScalar(t,r);return n.sub(e,i)}clamp(e,t){return this.x=ee(this.x,e,t),this.y=ee(this.x,e,t),this}apply(e){return this.x=e(this.x),this.y=e(this.y),this}static distSq(e,t){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}static dist(e,t){return Math.sqrt(n.distSq(e,t))}lenSq(){return this.dot(this)}static lenSq(e){return n.dot(e,e)}get len(){return Math.sqrt(this.lenSq())}static len(e){return Math.sqrt(n.dot(e,e))}invert(){return this.x=1/this.x,this.y=1/this.y,this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}};var A=class n extends Float32Array{static size=4;constructor(e,t,r,i){super(n.size),this.set(e??0,t,r,i)}static create(){return new n}clone(){return new n(this)}put(e,t,r,i){return this[0]=e,this[1]=t,this[2]=r,this[3]=i,this}set(e,t,r,i){return typeof e=="number"?(this[0]=e,this[1]=t??e,this[2]=r??e,this[3]=i??e):super.set(e),this}static set(e,t,r,i,o){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e}copy(e){return this.set(e),this}static copy(e,t){return e.set(t),e}add(e){return this[0]+=e[0],this[1]+=e[1],this[2]+=e[2],this[3]+=e[3],this}static add(e,t,r){return r=r??new n,r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r[3]=e[3]+t[3],r}addScalar(e){return this[0]+=e,this[1]+=e,this[2]+=e,this[3]+=e,this}static addScalar(e,t,r){return r=r??new n,r[0]=e[0]+t,r[1]=e[1]+t,r[2]=e[2]+t,r[3]=e[3]+t,r}sub(e){return this[0]-=e[0],this[1]-=e[1],this[2]-=e[2],this[3]-=e[3],this}static sub(e,t,r){return r=r??new n,r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r[3]=e[3]-t[3],r}subScalar(e){return this[0]-=e,this[1]-=e,this[2]-=e,this[3]-=e,this}static subScalar(e,t,r){return r=r??new n,r[0]-=t,r[1]-=t,r[2]-=t,r[3]-=t,r}mul(e){return this[0]*=e[0],this[1]*=e[1],this[2]*=e[2],this[3]*=e[3],this}static mul(e,t,r){return r=r??new n,r[0]=e[0]*t[0],r[1]=e[1]*t[1],r[2]=e[2]*t[2],r[3]=e[3]*t[3],r}mulScalar(e){return this[0]*=e,this[1]*=e,this[2]*=e,this[3]*=e,this}static mulScalar(e,t,r){return r=r??new n,r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r}madd(e,t,r){return typeof e=="number"?(this[0]=this[0]*t+e,this[1]=this[1]*t+e,this[2]=this[2]*t+e,this[3]=this[3]*t+e):(this[0]=this[0]*t+e[0],this[1]=this[1]*t+e[1],this[2]=this[2]*t+e[2],this[3]=this[3]*t+e[3]),this}div(e){return this[0]/=e[0],this[1]/=e[1],this[2]/=e[2],this[3]/=e[3],this}static div(e,t,r){return r=r??new n,r[0]=e[0]/t[0],r[1]=e[1]/t[1],r[2]=e[2]/t[2],r[3]=e[3]/t[3],r}divScalar(e){return this[0]/=e,this[1]/=e,this[2]/=e,this[3]/=e,this}static divScalar(e,t,r){return r=r??new n,r[0]=e[0]/t,r[1]=e[1]/t,r[2]=e[2]/t,r[3]=e[3]/t,r}dot(e){return this.x*e[0]+this.y*e[1]+this.z*e[2]+this.w*e[3]}static dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}dotScalar(e,t,r,i){return this.x*e+this.y*t+this.z*r+this.w*i}static dotScalar(e,t,r,i,o){return e[0]*t+e[1]*r+e[2]*i+e[3]*o}normalise(){return this.mulScalar(1/this.len())}static normalise(e){if(Array.isArray(e)||e instanceof Float32Array){let t=1/n.len(e);for(let r=0;r!==4;++r)e[r]*=t;return e}else if(e instanceof n)return e.mulScalar(1/e.len())}lenSq(){return this.dot(this)}static lenSq(e){return n.dot(e,e)}len(){return Math.sqrt(this.lenSq())}static len(e){return Math.sqrt(n.dot(e,e))}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get w(){return this[3]}set w(e){this[3]=e}};function Pe(n,e,t){let r=n.createShader(t);return r==null?"Failed to create shader":(e.includes("#version")||(e=`#version 300 es
${e}`),n.shaderSource(r,e),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)===!1?`Failed to create shader with error:
${n.getShaderInfoLog(r)??"unknown"}`:r)}function X(n,e,t,r=!0,i){let o=[[e,n.VERTEX_SHADER,"vertex"],[t,n.FRAGMENT_SHADER,"fragment"]];i=i??[];let a=n.createProgram();if(a==null)return"Failed to create shader program";for(let s=0;s!==o.length;++s){if(typeof o[s][0]!="string"){n.attachShader(a,o[s][0]);continue}let c=Pe(n,o[s][0],o[s][1]);if(typeof c=="string")return console.error(c,o[s][0]),n.deleteProgram(a),c;n.attachShader(a,c),i.push(c)}if(n.linkProgram(a),r&&i.forEach(s=>{n.deleteShader(s)}),n.getProgramParameter(a,n.LINK_STATUS)===!0)return a;{let s=n.getProgramInfoLog(a)??"unknown";return n.deleteProgram(a),`Failed to create program with error:
${s}`}}var E=class n extends Float32Array{static size=3;constructor(e,t,r){super(n.size),this.set(e??0,t,r)}static fromBuffer(e,t){return new Float32Array(e,t,3)}static create(){return new n}clone(){return new n(this)}put(e,t,r){return this[0]=e,this[1]=t,this[2]=r,this}set(e,t,r){return typeof e=="number"?(this[0]=e,this[1]=t??e,this[2]=r??e):super.set(e),this}static set(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e}copy(e){return this.set(e),this}static copy(e,t){return e.set(t),e}add(e){return this[0]+=e[0],this[1]+=e[1],this[2]+=e[2],this}static add(e,t,r){return r=r??new n,r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r}addScalar(e){return this[0]+=e,this[1]+=e,this[2]+=e,this}static addScalar(e,t,r){return r=r??new n,r[0]=e[0]+t,r[1]=e[1]+t,r[2]=e[2]+t,r}addScaled(e,t){return this[0]+=e[0]*t,this[1]+=e[1]*t,this[2]+=e[2]*t,this}sub(e){return this[0]-=e[0],this[1]-=e[1],this[2]-=e[2],this}static sub(e,t,r){return r=r??new n,r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r}subScalar(e){return this[0]-=e,this[1]-=e,this[2]-=e,this}static subScalar(e,t,r){return r=r??new n,r[0]-=t,r[1]-=t,r[2]-=t,r}mul(e){return this[0]*=e[0],this[1]*=e[1],this[2]*=e[2],this}static mul(e,t,r){return r=r??new n,r[0]=e[0]*t[0],r[1]=e[1]*t[1],r[2]=e[2]*t[2],r}mulScalar(e){return this[0]*=e,this[1]*=e,this[2]*=e,this}static mulScalar(e,t,r){return r=r??new n,r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}div(e){return this[0]/=e[0],this[1]/=e[1],this[2]/=e[2],this}static div(e,t,r){return r=r??new n,r[0]=e[0]/t[0],r[1]=e[1]/t[1],r[2]=e[2]/t[2],r}divScalar(e){return this[0]/=e,this[1]/=e,this[2]/=e,this}static divScalar(e,t,r){return r=r??new n,r[0]=e[0]/t,r[1]=e[1]/t,r[2]=e[2]/t,r}dot(e){return this.x*e[0]+this.y*e[1]+this.z*e[2]}static dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}dotScalar(e,t,r){return this.x*e+this.y*t+this.z*r}static dotScalar(e,t,r,i){return e[0]*t+e[1]*r+e[2]*i}normalise(){return this.mulScalar(1/this.len())}static normalise(e){if(Array.isArray(e)||e instanceof Float32Array){let t=1/n.len(e);for(let r=0;r!==3;++r)e[r]*=t;return e}else if(e instanceof n)return e.mulScalar(1/e.len())}cross(e){let t=this.x,r=this.y,i=this.z;return this.x=r*e[2]-i*e[1],this.y=i*e[0]-t*e[2],this.z=t*e[1]-r*e[0],this}static cross(e,t,r){return r=r??new n,r[0]=e[1]*t[2]-e[2]*t[1],r[1]=e[2]*t[0]-e[0]*t[2],r[2]=e[0]*t[1]-e[1]*t[0],r}static crossF(e,t,r,i){e[t]=r[1]*i[2]-r[2]*i[1],e[t+1]=r[2]*i[0]-r[0]*i[2],e[t+2]=r[0]*i[1]-r[1]*i[0]}lenSq(){return this.dot(this)}static lenSq(e){return n.dot(e,e)}len(){return Math.sqrt(this.lenSq())}static len(e){return Math.sqrt(n.dot(e,e))}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}};var g=class n extends Float32Array{static size=9;constructor(){super(n.size)}static create(e){let t=new n;return e!=null&&t.set(e),t}static idx(e,t){return 3*t+e}static set(e,t,r,i){e[n.idx(t,r)]=i}static get(e,t,r){return e[n.idx(t,r)]}static fromMat4Rotation(e){let t=n.create();return n.setColumn(t,0,R.getColumn(e,0)),n.setColumn(t,1,R.getColumn(e,1)),n.setColumn(t,2,R.getColumn(e,2)),t}copyMat4Rotation(e){return n.setColumn(this,0,R.getColumn(e,0)),n.setColumn(this,1,R.getColumn(e,1)),n.setColumn(this,2,R.getColumn(e,2)),this}static getColumn(e,t){return[e[n.idx(0,t)],e[n.idx(1,t)],e[n.idx(2,t)]]}static setColumn(e,t,r){e[n.idx(0,t)]=r[0],e[n.idx(1,t)]=r[1],e[n.idx(2,t)]=r[2]??(t===2?1:0)}static makeTranslation(e,t){let r=n.makeIdentity();return r[n.idx(0,2)]=e,r[n.idx(1,2)]=t,r}static translate(e,t,r){if(typeof r=="number")e[n.idx(0,2)]=t,e[n.idx(1,2)]=r;else{let i=t;e[n.idx(0,2)]=i[0],e[n.idx(1,2)]=i[1]}return e}static makeIdentity(){let e=n.create();return e[n.idx(0,0)]=1,e[n.idx(1,1)]=1,e[n.idx(2,2)]=1,e}static makeRotation(e){let[t,r]=[Math.cos(e),Math.sin(e)],i=n.create();return n.set(i,0,0,t),n.set(i,0,1,-r),n.set(i,1,0,r),n.set(i,1,1,t),n.set(i,2,2,1),i}static makeRotation3(e,t){_(E.len(e),1)||(console.log("Warning, input axis to makeRotation should be unit length"),E.normalise(e));let[r,i,o]=[Math.cos(t),Math.sin(t),1-Math.cos(t)],[a,s,c]=[o*e[0],o*e[1],o*e[2]],[u,l,d]=[i*e[0],i*e[1],i*e[2]],[b,m,v]=[a*e[1],s*e[2],a*e[2]],f=n.create();return n.set(f,0,0,a*e[0]+r),n.set(f,0,1,b+d),n.set(f,0,2,v-l),n.set(f,1,0,b-d),n.set(f,1,1,s*e[1]+r),n.set(f,1,2,m+u),n.set(f,2,0,v+l),n.set(f,2,1,m-u),n.set(f,2,2,c*e[2]+r),f}static rotate(e,t){let[r,i]=[Math.cos(t),Math.sin(t)];return n.set(e,0,0,r),n.set(e,0,1,-i),n.set(e,1,0,i),n.set(e,1,1,r),n.set(e,2,2,1),e}static makeScale(e){let t=typeof e=="number",r=n.create();return n.set(r,0,0,t?e:e[0]),n.set(r,1,1,t?e:e[1]),n.set(r,2,2,1),r}static scale(e,t){return n.set(e,0,0,t[0]),n.set(e,1,1,t[1]),n.set(e,2,2,1),e}static scaleBy(e,t){return n.set(e,0,0,n.get(e,0,0)*t[0]),n.set(e,0,1,n.get(e,0,1)*t[1]),n.set(e,1,0,n.get(e,1,0)*t[0]),n.set(e,1,1,n.get(e,1,1)*t[1]),e}static makeTransform(e,t,r){let i=n.create();return n.set(i,0,0,t[0]*Math.cos(r)),n.set(i,0,1,-t[1]*Math.sin(r)),n.set(i,1,0,t[0]*Math.sin(r)),n.set(i,1,1,t[1]*Math.cos(r)),n.set(i,0,2,e[0]),n.set(i,1,2,e[1]),n.set(i,2,2,1),i}mul2(e){let t=e[0],r=e[1];return e[0]=n.get(this,0,0)*t+n.get(this,0,1)*r,e[1]=n.get(this,1,0)*t+n.get(this,1,1)*r,e}transform2(e){let t=e[0],r=e[1];return e[0]=n.get(this,0,0)*t+n.get(this,0,1)*r+n.get(this,0,2),e[1]=n.get(this,1,0)*t+n.get(this,1,1)*r+n.get(this,1,2),e}static transform2(e,t,r,i){let o=t[0],a=t[1],s=i??0;return r[s]=n.get(e,0,0)*o+n.get(e,0,1)*a+n.get(e,0,2),r[s+1]=n.get(e,1,0)*o+n.get(e,1,1)*a+n.get(e,1,2),r}static mul(e,t,r){return n.set(e,0,0,n.get(t,0,0)*n.get(r,0,0)+n.get(t,0,1)*n.get(r,1,0)+n.get(t,0,2)*n.get(r,2,0)),n.set(e,0,1,n.get(t,0,0)*n.get(r,0,1)+n.get(t,0,1)*n.get(r,1,1)+n.get(t,0,2)*n.get(r,2,1)),n.set(e,0,2,n.get(t,0,0)*n.get(r,0,2)+n.get(t,0,1)*n.get(r,1,2)+n.get(t,0,2)*n.get(r,2,2)),n.set(e,1,0,n.get(t,1,0)*n.get(r,0,0)+n.get(t,1,1)*n.get(r,1,0)+n.get(t,1,2)*n.get(r,2,0)),n.set(e,1,1,n.get(t,1,0)*n.get(r,0,1)+n.get(t,1,1)*n.get(r,1,1)+n.get(t,1,2)*n.get(r,2,1)),n.set(e,1,2,n.get(t,1,0)*n.get(r,0,2)+n.get(t,1,1)*n.get(r,1,2)+n.get(t,1,2)*n.get(r,2,2)),n.set(e,2,0,n.get(t,2,0)*n.get(r,0,0)+n.get(t,2,1)*n.get(r,1,0)+n.get(t,2,2)*n.get(r,2,0)),n.set(e,2,1,n.get(t,2,0)*n.get(r,0,1)+n.get(t,2,1)*n.get(r,1,1)+n.get(t,2,2)*n.get(r,2,1)),n.set(e,2,2,n.get(t,2,0)*n.get(r,0,2)+n.get(t,2,1)*n.get(r,1,2)+n.get(t,2,2)*n.get(r,2,2)),e}static inverse(e,t=1e-4){let r=n.create();r[0]=e[4]*e[8]-e[5]*e[7],r[1]=e[2]*e[7]-e[1]*e[8],r[2]=e[1]*e[5]-e[2]*e[4],r[3]=e[5]*e[6]-e[3]*e[8],r[4]=e[0]*e[8]-e[2]*e[6],r[5]=e[2]*e[3]-e[0]*e[5],r[6]=e[3]*e[7]-e[4]*e[6],r[7]=e[1]*e[6]-e[0]*e[7],r[8]=e[0]*e[4]-e[1]*e[3];let i=e[0]*r[0]+e[1]*r[3]+e[2]*r[6];if(Math.abs(i)>t){let o=1/i;return r[0]*=o,r[1]*=o,r[2]*=o,r[3]*=o,r[4]*=o,r[5]*=o,r[6]*=o,r[7]*=o,r[8]*=o,r}return n.create()}static transpose(e){let t=n.idx,r=e[t(0,1)];return e[t(0,1)]=e[t(1,0)],e[t(1,0)]=r,r=e[t(0,2)],e[t(0,2)]=e[t(2,0)],e[t(2,0)]=r,r=e[t(1,2)],e[t(1,2)]=e[t(2,1)],e[t(2,1)]=r,e}};var R=class n extends Float32Array{static size=16;constructor(){super(n.size)}static create(e){let t=new n;return e!=null&&t.set(e),t}static fromMat3(e){let t=n.makeIdentity();return n.set(t,0,0,g.get(e,0,0)),n.set(t,0,1,g.get(e,0,1)),n.set(t,0,3,g.get(e,0,2)),n.set(t,1,0,g.get(e,1,0)),n.set(t,1,1,g.get(e,1,1)),n.set(t,1,3,g.get(e,1,2)),t}static idx(e,t){return 4*t+e}static set(e,t,r,i){e[n.idx(t,r)]=i}static get(e,t,r){return e[n.idx(t,r)]}static makePerspective(e,t,r,i){let o=n.create(),a=Math.tan(e*Math.PI/360);return o[n.idx(0,0)]=1/(t*a),o[n.idx(1,1)]=1/a,o[n.idx(2,2)]=-(i+r)/(i-r),o[n.idx(2,3)]=-(2*r*i)/(i-r),o[n.idx(3,2)]=-1,o}static getColumn(e,t){return[e[n.idx(0,t)],e[n.idx(1,t)],e[n.idx(2,t)],e[n.idx(3,t)]]}static setColumn(e,t,r){e[n.idx(0,t)]=r[0],e[n.idx(1,t)]=r[1],e[n.idx(2,t)]=r[2],e[n.idx(3,t)]=r[3]??(t===3?1:0)}static makeOrtho(e,t,r,i,o,a){let s=1/(e-t),c=1/(r-i),u=1/(o-a),l=n.create();return l[0]=-2*s,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=-2*c,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=2*u,l[11]=0,l[12]=(e+t)*s,l[13]=(i+r)*c,l[14]=(a+o)*u,l[15]=1,l}static makeTranslation(e,t,r){let i=n.makeIdentity();return i[n.idx(0,3)]=e,i[n.idx(1,3)]=t,i[n.idx(2,3)]=r,i}static makeXAxisReflection(){let e=n.makeIdentity();return e[n.idx(0,0)]=-1,e}static makeYAxisReflection(){let e=n.makeIdentity();return e[n.idx(1,1)]=-1,e}static makeZAxisReflection(){let e=n.makeIdentity();return e[n.idx(2,2)]=-1,e}static translate(e,t,r,i){return typeof t=="number"?(e[n.idx(0,3)]=t,e[n.idx(1,3)]=r??0,e[n.idx(2,3)]=i??0):(e[n.idx(0,3)]=t[0],e[n.idx(1,3)]=t[1],e[n.idx(2,3)]=t[2]),e}static makeIdentity(){let e=n.create();return e[n.idx(0,0)]=1,e[n.idx(1,1)]=1,e[n.idx(2,2)]=1,e[n.idx(3,3)]=1,e}static makeRotation(e,t){_(E.len(e),1)||(console.log("Warning, input axis to makeRotation should be unit length"),E.normalise(e));let[r,i,o]=[Math.cos(t),Math.sin(t),1-Math.cos(t)],[a,s,c]=[o*e[0],o*e[1],o*e[2]],[u,l,d]=[i*e[0],i*e[1],i*e[2]],[b,m,v]=[a*e[1],s*e[2],a*e[2]],f=n.create();return n.set(f,0,0,a*e[0]+r),n.set(f,0,1,b+d),n.set(f,0,2,v-l),n.set(f,1,0,b-d),n.set(f,1,1,s*e[1]+r),n.set(f,1,2,m+u),n.set(f,2,0,v+l),n.set(f,2,1,m-u),n.set(f,2,2,c*e[2]+r),n.set(f,3,3,1),f}static rotate(e,t,r){_(E.len(t),1)||(console.log("Warning, input axis to makeRotation should be unit length"),E.normalise(t));let[i,o,a]=[Math.cos(r),Math.sin(r),1-Math.cos(r)],[s,c,u]=[a*t[0],a*t[1],a*t[2]],[l,d,b]=[o*t[0],o*t[1],o*t[2]],[m,v,f]=[s*t[1],c*t[2],s*t[2]];return n.set(e,0,0,s*t[0]+i),n.set(e,0,1,m+b),n.set(e,0,2,f-d),n.set(e,1,0,m-b),n.set(e,1,1,c*t[1]+i),n.set(e,1,2,v+l),n.set(e,2,0,f+d),n.set(e,2,1,v-l),n.set(e,2,2,u*t[2]+i),e}static setRot(e,t,r){return n.set(e,0,0,g.get(t,0,0)),n.set(e,0,1,g.get(t,0,1)),n.set(e,0,2,g.get(t,0,2)),n.set(e,1,0,g.get(t,1,0)),n.set(e,1,1,g.get(t,1,1)),n.set(e,1,2,g.get(t,1,2)),n.set(e,2,0,g.get(t,2,0)),n.set(e,2,1,g.get(t,2,1)),n.set(e,2,2,g.get(t,2,2)),e}static setRotScale(e,t,r){return n.set(e,0,0,r.x*g.get(t,0,0)),n.set(e,0,1,r.y*g.get(t,0,1)),n.set(e,0,2,r.z*g.get(t,0,2)),n.set(e,1,0,r.x*g.get(t,1,0)),n.set(e,1,1,r.y*g.get(t,1,1)),n.set(e,1,2,r.z*g.get(t,1,2)),n.set(e,2,0,r.x*g.get(t,2,0)),n.set(e,2,1,r.y*g.get(t,2,1)),n.set(e,2,2,r.z*g.get(t,2,2)),e}static makeScale(e){let t=typeof e=="number",r=n.create();return n.set(r,0,0,t?e:e[0]),n.set(r,1,1,t?e:e[1]),n.set(r,2,2,t?e:e[2]),n.set(r,3,3,1),r}static scale(e,t){return n.set(e,0,0,t[0]),n.set(e,1,1,t[1]),n.set(e,2,2,t[2]),e}static makeTransform(e,t,r){let i=n.create();return n.rotate(i,[1,0,0],t[0]),n.rotate(i,[0,1,0],t[1]),n.rotate(i,[0,0,1],t[2]),n.scale(i,e),n.translate(i,r[0],r[1],r[2]),i}static mul(e,t,r){return n.set(e,0,0,n.get(t,0,0)*n.get(r,0,0)+n.get(t,0,1)*n.get(r,1,0)+n.get(t,0,2)*n.get(r,2,0)+n.get(t,0,3)*n.get(r,3,0)),n.set(e,0,1,n.get(t,0,0)*n.get(r,0,1)+n.get(t,0,1)*n.get(r,1,1)+n.get(t,0,2)*n.get(r,2,1)+n.get(t,0,3)*n.get(r,3,1)),n.set(e,0,2,n.get(t,0,0)*n.get(r,0,2)+n.get(t,0,1)*n.get(r,1,2)+n.get(t,0,2)*n.get(r,2,2)+n.get(t,0,3)*n.get(r,3,2)),n.set(e,0,3,n.get(t,0,0)*n.get(r,0,3)+n.get(t,0,1)*n.get(r,1,3)+n.get(t,0,2)*n.get(r,2,3)+n.get(t,0,3)*n.get(r,3,3)),n.set(e,1,0,n.get(t,1,0)*n.get(r,0,0)+n.get(t,1,1)*n.get(r,1,0)+n.get(t,1,2)*n.get(r,2,0)+n.get(t,1,3)*n.get(r,3,0)),n.set(e,1,1,n.get(t,1,0)*n.get(r,0,1)+n.get(t,1,1)*n.get(r,1,1)+n.get(t,1,2)*n.get(r,2,1)+n.get(t,1,3)*n.get(r,3,1)),n.set(e,1,2,n.get(t,1,0)*n.get(r,0,2)+n.get(t,1,1)*n.get(r,1,2)+n.get(t,1,2)*n.get(r,2,2)+n.get(t,1,3)*n.get(r,3,2)),n.set(e,1,3,n.get(t,1,0)*n.get(r,0,3)+n.get(t,1,1)*n.get(r,1,3)+n.get(t,1,2)*n.get(r,2,3)+n.get(t,1,3)*n.get(r,3,3)),n.set(e,2,0,n.get(t,2,0)*n.get(r,0,0)+n.get(t,2,1)*n.get(r,1,0)+n.get(t,2,2)*n.get(r,2,0)+n.get(t,2,3)*n.get(r,3,0)),n.set(e,2,1,n.get(t,2,0)*n.get(r,0,1)+n.get(t,2,1)*n.get(r,1,1)+n.get(t,2,2)*n.get(r,2,1)+n.get(t,2,3)*n.get(r,3,1)),n.set(e,2,2,n.get(t,2,0)*n.get(r,0,2)+n.get(t,2,1)*n.get(r,1,2)+n.get(t,2,2)*n.get(r,2,2)+n.get(t,2,3)*n.get(r,3,2)),n.set(e,2,3,n.get(t,2,0)*n.get(r,0,3)+n.get(t,2,1)*n.get(r,1,3)+n.get(t,2,2)*n.get(r,2,3)+n.get(t,2,3)*n.get(r,3,3)),n.set(e,3,0,n.get(t,3,0)*n.get(r,0,0)+n.get(t,3,1)*n.get(r,1,0)+n.get(t,3,2)*n.get(r,2,0)+n.get(t,3,3)*n.get(r,3,0)),n.set(e,3,1,n.get(t,3,0)*n.get(r,0,1)+n.get(t,3,1)*n.get(r,1,1)+n.get(t,3,2)*n.get(r,2,1)+n.get(t,3,3)*n.get(r,3,1)),n.set(e,3,2,n.get(t,3,0)*n.get(r,0,2)+n.get(t,3,1)*n.get(r,1,2)+n.get(t,3,2)*n.get(r,2,2)+n.get(t,3,3)*n.get(r,3,2)),n.set(e,3,3,n.get(t,3,0)*n.get(r,0,3)+n.get(t,3,1)*n.get(r,1,3)+n.get(t,3,2)*n.get(r,2,3)+n.get(t,3,3)*n.get(r,3,3)),e}static transform3(e,t){let r=t[0],i=t[1],o=t[2];return t[0]=n.get(e,0,0)*r+n.get(e,0,1)*i+n.get(e,0,2)*o+n.get(e,0,3),t[1]=n.get(e,1,0)*r+n.get(e,1,1)*i+n.get(e,1,2)*o+n.get(e,1,3),t[2]=n.get(e,2,0)*r+n.get(e,2,1)*i+n.get(e,2,2)*o+n.get(e,2,3),t}transform3(e){let t=e[0],r=e[1],i=e[2];return e[0]=n.get(this,0,0)*t+n.get(this,0,1)*r+n.get(this,0,2)*i+n.get(this,0,3),e[1]=n.get(this,1,0)*t+n.get(this,1,1)*r+n.get(this,1,2)*i+n.get(this,1,3),e[2]=n.get(this,2,0)*t+n.get(this,2,1)*r+n.get(this,2,2)*i+n.get(this,2,3),e}static mul3(e,t){let r=t[0],i=t[1],o=t[2];return t[0]=n.get(e,0,0)*r+n.get(e,0,1)*i+n.get(e,0,2)*o,t[1]=n.get(e,1,0)*r+n.get(e,1,1)*i+n.get(e,1,2)*o,t[2]=n.get(e,2,0)*r+n.get(e,2,1)*i+n.get(e,2,2)*o,t}static mul4(e,t){let r=t[0],i=t[1],o=t[2],a=t[3];return t[0]=n.get(e,0,0)*r+n.get(e,0,1)*i+n.get(e,0,2)*o+n.get(e,0,3)*a,t[1]=n.get(e,1,0)*r+n.get(e,1,1)*i+n.get(e,1,2)*o+n.get(e,1,3)*a,t[2]=n.get(e,2,0)*r+n.get(e,2,1)*i+n.get(e,2,2)*o+n.get(e,2,3)*a,t[3]=n.get(e,3,0)*r+n.get(e,3,1)*i+n.get(e,3,2)*o+n.get(e,3,3)*a,t}static inverse(e,t,r=.001){let i=e[0]*e[5]-e[1]*e[4],o=e[0]*e[6]-e[2]*e[4],a=e[0]*e[7]-e[3]*e[4],s=e[1]*e[6]-e[2]*e[5],c=e[1]*e[7]-e[3]*e[5],u=e[2]*e[7]-e[3]*e[6],l=e[8]*e[13]-e[9]*e[12],d=e[8]*e[14]-e[10]*e[12],b=e[8]*e[15]-e[11]*e[12],m=e[9]*e[14]-e[10]*e[13],v=e[9]*e[15]-e[11]*e[13],f=e[10]*e[15]-e[11]*e[14],S=i*f-o*v+a*m+s*b-c*d+u*l,h=t??n.create();if(Math.abs(S)<=r)return console.warn("Determinant < epsilon"),h;h[0]=+e[5]*f-e[6]*v+e[7]*m,h[4]=-e[4]*f+e[6]*b-e[7]*d,h[8]=+e[4]*v-e[5]*b+e[7]*l,h[12]=-e[4]*m+e[5]*d-e[6]*l,h[1]=-e[1]*f+e[2]*v-e[3]*m,h[5]=+e[0]*f-e[2]*b+e[3]*d,h[9]=-e[0]*v+e[1]*b-e[3]*l,h[13]=+e[0]*m-e[1]*d+e[2]*l,h[2]=+e[13]*u-e[14]*c+e[15]*s,h[6]=-e[12]*u+e[14]*a-e[15]*o,h[10]=+e[12]*c-e[13]*a+e[15]*i,h[14]=-e[12]*s+e[13]*o-e[14]*i,h[3]=-e[9]*u+e[10]*c-e[11]*s,h[7]=+e[8]*u-e[10]*a+e[11]*o,h[11]=-e[8]*c+e[9]*a-e[11]*i,h[15]=+e[8]*s-e[9]*o+e[10]*i;let y=1/S;return h[0]*=y,h[1]*=y,h[2]*=y,h[3]*=y,h[4]*=y,h[5]*=y,h[6]*=y,h[7]*=y,h[8]*=y,h[9]*=y,h[10]*=y,h[11]*=y,h[12]*=y,h[13]*=y,h[14]*=y,h[15]*=y,h}static transpose(e){let t=n.idx,r=e[t(0,1)];return e[t(0,1)]=e[t(1,0)],e[t(1,0)]=r,r=e[t(0,2)],e[t(0,2)]=e[t(2,0)],e[t(2,0)]=r,r=e[t(0,3)],e[t(0,3)]=e[t(3,0)],e[t(3,0)]=r,r=e[t(1,2)],e[t(1,2)]=e[t(2,1)],e[t(2,1)]=r,r=e[t(1,3)],e[t(1,3)]=e[t(3,1)],e[t(3,1)]=r,r=e[t(2,3)],e[t(2,3)]=e[t(3,2)],e[t(3,2)]=r,e}static lookAt(e,t,r=[0,1,0]){let i,o,a,s,c,u,l,d,b,m,v=e[0],f=e[1],S=e[2],h=r[0],y=r[1],fe=r[2],he=t[0],ge=t[1],xe=t[2],Z=1e-6;if(Math.abs(v-he)<Z&&Math.abs(f-ge)<Z&&Math.abs(S-xe)<Z)return n.makeIdentity();let T=n.create();return l=v-he,d=f-ge,b=S-xe,m=1/Math.hypot(l,d,b),l*=m,d*=m,b*=m,i=y*b-fe*d,o=fe*l-h*b,a=h*d-y*l,m=Math.hypot(i,o,a),_(m,0)?(i=0,o=0,a=0):(m=1/m,i*=m,o*=m,a*=m),s=d*a-b*o,c=b*i-l*a,u=l*o-d*i,m=Math.hypot(s,c,u),_(m,0)?(s=0,c=0,u=0):(m=1/m,s*=m,c*=m,u*=m),T[0]=i,T[1]=s,T[2]=l,T[3]=0,T[4]=o,T[5]=c,T[6]=d,T[7]=0,T[8]=a,T[9]=u,T[10]=b,T[11]=0,T[12]=-(i*v+o*f+a*S),T[13]=-(s*v+c*f+u*S),T[14]=-(l*v+d*f+b*S),T[15]=1,T}static makePlaneProjection(e,t,r){let i=n.create(),o=-E.dot(e,t),a=E.dot(e,r);return i[0]=a+o-r[0]*e[0],i[1]=-r[1]*e[0],i[2]=-r[2]*e[0],i[3]=-e[0],i[4]=-r[0]*e[1],i[5]=a+o-r[1]*e[1],i[6]=-r[2]*e[1],i[7]=-e[1],i[8]=-r[0]*e[2],i[9]=-r[1]*e[2],i[10]=a+o-r[2]*e[2],i[11]=-e[2],i[12]=-r[0]*o,i[13]=-r[1]*o,i[14]=-r[2]*o,i[15]=a,i}};var F=class n extends Float32Array{static size=4;constructor(){super(n.size)}static create(e){let t=new Float32Array(n.size);return e!=null&&t.set(e),t}static idx(e,t){return 2*t+e}static set(e,t,r,i){e[n.idx(t,r)]=i}static get(e,t,r){return e[n.idx(t,r)]}static transform2(e,t,r){return L.set(t,n.get(e,0,0)*r[0]+n.get(e,0,1)*r[1],n.get(e,1,0)*r[0]+n.get(e,1,1)*r[1]),t}static makeIdentity(){let e=n.create();return e[n.idx(0,0)]=1,e[n.idx(1,1)]=1,e}static makeRotation(e){let[t,r]=[Math.cos(e),Math.sin(e)],i=n.create();return n.set(i,0,0,t),n.set(i,0,1,-r),n.set(i,1,0,r),n.set(i,1,1,t),i}static rotate(e,t){let[r,i]=[Math.cos(t),Math.sin(t)];return n.set(e,0,0,r),n.set(e,0,1,-i),n.set(e,1,0,i),n.set(e,1,1,r),e}static makeScale(e){let t=n.create();return n.set(t,0,0,e[0]),n.set(t,1,1,e[1]),t}static mul(e,t,r){return n.set(e,0,0,n.get(t,0,0)*n.get(r,0,0)+n.get(t,0,1)*n.get(r,1,0)),n.set(e,0,1,n.get(t,0,0)*n.get(r,0,1)+n.get(t,0,1)*n.get(r,1,1)),n.set(e,1,0,n.get(t,1,0)*n.get(r,0,0)+n.get(t,1,1)*n.get(r,1,0)),n.set(e,1,1,n.get(t,1,0)*n.get(r,0,1)+n.get(t,1,1)*n.get(r,1,1)),e}static inverse(e,t=1e-4){let r=n.create(),i=e[0]*e[3]-e[1]*e[2];if(Math.abs(i)>t){let o=1/i;r[0]=e[3]*o,r[1]=-e[1]*o,r[2]=-e[2]*o,r[3]=e[0]*o}else r.fill(0);return r}};var x=(p=>(p[p.NONE=0]="NONE",p[p.BOOL=WebGL2RenderingContext.BOOL]="BOOL",p[p.UBYTE=WebGL2RenderingContext.UNSIGNED_BYTE]="UBYTE",p[p.BYTE=WebGL2RenderingContext.BYTE]="BYTE",p[p.USHORT=WebGL2RenderingContext.UNSIGNED_SHORT]="USHORT",p[p.SHORT=WebGL2RenderingContext.SHORT]="SHORT",p[p.UINT=WebGL2RenderingContext.UNSIGNED_INT]="UINT",p[p.INT=WebGL2RenderingContext.INT]="INT",p[p.HALF_FLOAT=WebGL2RenderingContext.HALF_FLOAT]="HALF_FLOAT",p[p.FLOAT=WebGL2RenderingContext.FLOAT]="FLOAT",p[p.VEC2=WebGL2RenderingContext.FLOAT_VEC2]="VEC2",p[p.VEC3=WebGL2RenderingContext.FLOAT_VEC3]="VEC3",p[p.VEC4=WebGL2RenderingContext.FLOAT_VEC4]="VEC4",p[p.IVEC2=WebGL2RenderingContext.INT_VEC2]="IVEC2",p[p.IVEC3=WebGL2RenderingContext.INT_VEC3]="IVEC3",p[p.IVEC4=WebGL2RenderingContext.INT_VEC4]="IVEC4",p[p.MAT2=WebGL2RenderingContext.FLOAT_MAT2]="MAT2",p[p.MAT3=WebGL2RenderingContext.FLOAT_MAT3]="MAT3",p[p.MAT4=WebGL2RenderingContext.FLOAT_MAT4]="MAT4",p[p.SAMPLER_2D=WebGL2RenderingContext.SAMPLER_2D]="SAMPLER_2D",p[p.SAMPLER_3D=WebGL2RenderingContext.SAMPLER_3D]="SAMPLER_3D",p[p.SAMPLER_CUBE=WebGL2RenderingContext.SAMPLER_CUBE]="SAMPLER_CUBE",p[p.ISAMPLER_2D=WebGL2RenderingContext.INT_SAMPLER_2D]="ISAMPLER_2D",p[p.ISAMPLER_3D=WebGL2RenderingContext.INT_SAMPLER_3D]="ISAMPLER_3D",p[p.ISAMPLER_CUBE=WebGL2RenderingContext.INT_SAMPLER_CUBE]="ISAMPLER_CUBE",p[p.UISAMPLER_2D=WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_2D]="UISAMPLER_2D",p[p.UISAMPLER_3D=WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_3D]="UISAMPLER_3D",p[p.UISAMPLER_CUBE=WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_CUBE]="UISAMPLER_CUBE",p))(x||{});function Ne(n,e){let{dataType:t,location:r,value:i,count:o}=e;if(r===-1)return!1;switch(t){case x.BOOL:case x.BYTE:case x.INT:case x.SHORT:case x.SAMPLER_2D:case x.SAMPLER_3D:case x.SAMPLER_CUBE:case x.ISAMPLER_2D:case x.ISAMPLER_3D:case x.ISAMPLER_CUBE:case x.UISAMPLER_2D:case x.UISAMPLER_3D:case x.UISAMPLER_CUBE:o===void 0||o<2?n.uniform1i(r,i):n.uniform1iv(r,new Int32Array(i));break;case x.FLOAT:case x.HALF_FLOAT:ArrayBuffer.isView(i)?n.uniform1fv(r,i):n.uniform1f(r,i);break;case x.UBYTE:case x.UINT:case x.USHORT:n.uniform1ui(r,i);break;case x.VEC2:n.uniform2fv(r,i);break;case x.VEC3:n.uniform3fv(r,i);break;case x.VEC4:n.uniform4fv(r,i);break;case x.IVEC2:n.uniform2iv(r,i);break;case x.IVEC3:n.uniform3iv(r,i);break;case x.IVEC4:n.uniform4iv(r,i);break;case x.MAT2:n.uniformMatrix2fv(r,!1,i);break;case x.MAT3:n.uniformMatrix3fv(r,!1,i);break;case x.MAT4:n.uniformMatrix4fv(r,!1,i);break;case 0:default:return console.warn("Unrecognised uniform data type"),!1}return!0}function U(n,e){let t=Object.keys(e);for(let r=0;r!==t.length;++r)Ne(n,e[t[r]])||console.warn("Failed to bind uniform:",t[r])}function Be(n){return n?.name.startsWith("gl_")??n?.name.startsWith("webgl_")??!1}function Oe(n){switch(n){case WebGL2RenderingContext.FLOAT:return 0;case WebGL2RenderingContext.FLOAT_VEC2:return L.create();case WebGL2RenderingContext.FLOAT_VEC3:return E.create();case WebGL2RenderingContext.FLOAT_VEC4:return A.create();case WebGL2RenderingContext.FLOAT_MAT2:return F.create();case WebGL2RenderingContext.FLOAT_MAT3:return g.create();case WebGL2RenderingContext.FLOAT_MAT4:return R.create();case WebGL2RenderingContext.INT:return 0;case WebGL2RenderingContext.SAMPLER_2D:return 0;case WebGL2RenderingContext.SAMPLER_3D:return 0;case WebGL2RenderingContext.SAMPLER_CUBE:return 0;default:return null}}function $(n,e){let t={},r=n.getProgramParameter(e,n.ACTIVE_UNIFORMS);for(let i=0;i!==r;++i){let o=n.getActiveUniform(e,i);if(Be(o)){console.log("builtin:",o);continue}if(o==null)continue;let a=n.getUniformLocation(e,o.name);if(a==null)continue;let{name:s,type:c,size:u}=o;t[s]={value:Oe(c),location:a,dataType:c,count:u}}return t}function j(n,e){let t=n.getProgramParameter(e,n.ACTIVE_UNIFORM_BLOCKS),r={};for(let i=0;i<t;++i){let o=n.getActiveUniformBlockName(e,i);o&&(r[o]=n.getUniformBlockIndex(e,o))}return r}function te(n,e){e=e??{};let t=/(?:uniform\s+(?:(?!struct\b)[\w\s]+\s+)?)?(?:layout\s*\((?:[^)]|\s)*(?:location\s*=\s*\d+)?\s*[^)]*\)\s*)?uniform\s+(\w+)\s*({[^}]*})/g,r;for(;(r=t.exec(n))!==null;){let[i,o]=r;o in e&&i.trim()!==e[o]&&console.error("Uniform block with different definition!",o),e[o]=i.trim()}return e}var re=`// Source: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
  -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
  dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

`;var ne=`vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
  dot(p2,x2), dot(p3,x3) ) );
}
`;var ie=`#define PI 3.141593
#define TWO_PI 6.283185
#define HALF_PI 1.570796
#define QUARTER_PI 0.785398
#define RECIP_PI 0.318310
#define RECIP_PI2 0.159155
#define LOG2 1.442695
#define LOG_HALF -0.693147
#define EPSILON 1e-6
#define saturate(a) (clamp( a, 0.0, 1.0 ))
#define lerp(a, b, t) (mix( a, b, t ))
`;var oe=`mat2 rotate2D(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec2 rotate2D(float angle, vec2 v) {
  mat2 m = rotate2D(angle);
  return m * v;
}

vec3 rotate2D(float angle, vec3 v) {
  mat2 m = rotate2D(angle);
  return vec3(m * v.xy, v.z);
}
`;var ae=`float bias(float b, float x) {
  return pow(x, log(b) / LOG_HALF);
}

float gain(float g, float x) {
  return mix(
  bias(1. - g, 2. * x) / 2.,
  1. - bias(1. - g, 2. - 2. * x) / 2.,
  step(.5, x)
  );
}

// a = amplitude, b = centre, c = variance
float gaussian(float x, float a, float b, float c) {
  float d = x - b;
  return a * exp(-(d * d) / (2. * c * c));
}

float pulse(float x, float a, float b) {
  return step(a, x) - step(b, x);
}

// All components are in the range [0\u20261], including hue.
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0\u20261], including hue.
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float getT(float t, float alpha, vec3 p0, vec3 p1) {
  vec3 d = p1 - p0;
  float a = dot(d, d);
  float b = pow(a, alpha * .5);
  return (b + t);
}

vec3 catmullRom(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t) {
  float alpha = .5;
  float t0 = 0.;
  float t1 = getT(t0, alpha, p0, p1);
  float t2 = getT(t1, alpha, p1, p2);
  float t3 = getT(t2, alpha, p2, p3);
  t = mix(t1, t2, t);
  vec3 A1 = (t1-t)/(t1-t0)*p0 + (t-t0)/(t1-t0)*p1;
  vec3 A2 = (t2-t)/(t2-t1)*p1 + (t-t1)/(t2-t1)*p2;
  vec3 A3 = (t3-t)/(t3-t2)*p2 + (t-t2)/(t3-t2)*p3;
  vec3 B1 = (t2-t)/(t2-t0)*A1 + (t-t0)/(t2-t0)*A2;
  vec3 B2 = (t3-t)/(t3-t1)*A2 + (t-t1)/(t3-t1)*A3;
  vec3 C  = (t2-t)/(t2-t1)*B1 + (t-t1)/(t2-t1)*B2;
  return C;
}
`;var se=`/*
These are my personal noise routines that I've developed based on my understanding and knowledge so they're more
customised to my personal preferences.
*/

#if defined(RAND_TEX)
uniform sampler2D randTex;

float random(vec2 st) {
  return texture(randTex, st).r;
}

float random(vec2 st, sampler2D tex) {
  return texture(tex, st).r;
}

float random(ivec2 uv) {
  return texelFetch(randTex, uv, 0).r;
}

float random(int u) {
  return texelFetch(randTex, ivec2(u, 0), 0).r;
}

float random(ivec2 uv, sampler2D tex) {
  return texelFetch(tex, uv, 0).r;
}

float random(ivec2 coord, ivec2 period) {
  ivec2 wrappedCoord = ivec2(mod(vec2(coord), vec2(period)));
  return texelFetch(randTex, wrappedCoord, 0).r;
}

float random(int u, int period) {
  return texelFetch(randTex, ivec2(mod(float(u), float(period)), 0), 0).r;
}

float random(ivec2 coord, ivec2 period, sampler2D tex) {
  ivec2 wrappedCoord = ivec2(mod(vec2(coord), vec2(period)));
  return texelFetch(tex, wrappedCoord, 0).r;
}

#else
float random(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float random(ivec2 uv) {
  return random(vec2(uv));
}

float random(ivec2 coord, ivec2 period) {
  ivec2 wrappedCoord = ivec2(mod(vec2(coord), vec2(period)));
  return random(wrappedCoord);
}
#endif

// Bilinear value noise
float valueNoise(vec2 uv) {
  ivec2 coord = ivec2(floor(uv));
  vec2 dd = uv - vec2(coord);

  return mix(
    mix(random(coord), random(coord + ivec2(1, 0)), dd.x),
    mix(random(coord + ivec2(0, 1)), random(coord + ivec2(1, 1)), dd.x),
    dd.y
  );
}

float valueNoise(vec2 uv, ivec2 period) {
  ivec2 coord = ivec2(floor(uv));
  vec2 dd = uv - vec2(coord);

  return mix(
    mix(random(coord, period), random(coord + ivec2(1, 0), period), dd.x),
    mix(random(coord + ivec2(0, 1), period), random(coord + ivec2(1), period), dd.x),
    dd.y
  );
}

// Bicubic value noise (nice, but expensive)
const mat4 bicubic = mat4(
  vec4(0., -1., 2., -1.),
  vec4(2., 0., -5., 3.),
  vec4(0., 1., 4., -3.),
  vec4(0., 0., -1., 1.)
);

float bicubicNoise(vec2 uv) {
  ivec2 coord = ivec2(floor(uv));
  vec2 dd = uv - vec2(coord);

  vec4 px = .5 * vec4(1., dd.x, dd.x * dd.x, dd.x * dd.x * dd.x);
  vec4 py = .5 * vec4(1., dd.y, dd.y * dd.y, dd.y * dd.y * dd.y);

  vec4 b;
  for(int i = -1; i < 3; ++i) {
    b[i+1] = dot(px, bicubic * vec4(
        random(coord + ivec2(-1, i)),
        random(coord + ivec2( 0, i)),
        random(coord + ivec2( 1, i)),
        random(coord + ivec2( 2, i))
    ));
  }

  return dot(py, bicubic * b);
}

float bicubicNoise(float u, int period) {
  int coord = int(floor(u));
  float dd = u - float(coord);

  vec4 px = .5 * vec4(1., dd, dd * dd, dd * dd * dd);

  return dot(
    px,
    bicubic * vec4(
      random(coord - 1, period),
      random(coord, period),
      random(coord + 1, period),
      random(coord + 2, period)
  ));
}

float bicubicNoise(vec2 uv, ivec2 period) {
  ivec2 coord = ivec2(floor(uv));
  vec2 dd = uv - vec2(coord);

  vec4 px = .5 * vec4(1., dd.x, dd.x * dd.x, dd.x * dd.x * dd.x);
  vec4 py = .5 * vec4(1., dd.y, dd.y * dd.y, dd.y * dd.y * dd.y);

  vec4 b;
  for(int i = -1; i < 3; ++i) {
    b[i+1] = dot(px, bicubic * vec4(
      random(coord + ivec2(-1, i), period),
      random(coord + ivec2( 0, i), period),
      random(coord + ivec2( 1, i), period),
      random(coord + ivec2( 2, i), period)
    ));
  }

  return dot(py, bicubic * b);
}

float bicubicNoise(vec2 uv, ivec2 period, sampler2D tex) {
  ivec2 coord = ivec2(floor(uv));
  vec2 dd = uv - vec2(coord);

  vec4 px = .5 * vec4(1., dd.x, dd.x * dd.x, dd.x * dd.x * dd.x);
  vec4 py = .5 * vec4(1., dd.y, dd.y * dd.y, dd.y * dd.y * dd.y);

  vec4 b;
  for(int i = -1; i < 3; ++i) {
    b[i+1] = dot(px, bicubic * vec4(
      random(coord + ivec2(-1, i), period, tex),
      random(coord + ivec2( 0, i), period, tex),
      random(coord + ivec2( 1, i), period, tex),
      random(coord + ivec2( 2, i), period, tex)
    ));
  }

  return dot(py, bicubic * b);
}
`;var $e=`
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,je=`
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
`,qe=`
vec3 gammaCorrect(vec3 color) {
  return pow(color, vec3(1.0 / 2.2));
}`,Ye=`
vec3 computeNormal(float h, float normalScale) {
  return normalize(vec3(-dFdx(h), -dFdy(h), normalScale));
}
`,Ke=new Map([["float","highp"],["int","highp"]]),D=class{includeTable=new Map;defineTable=new Map;templateTable=new Map;fragmentInj=null;constructor(){this.includeTable.set("commonDefs",ie),this.includeTable.set("gammaCorrect",qe),this.includeTable.set("functions",ae),this.includeTable.set("computeNormal",Ye),this.includeTable.set("simplex2D",re),this.includeTable.set("simplex3D",ne),this.includeTable.set("rotate2D",oe),this.includeTable.set("noises",se),this.templateTable.set("screenQuad",[$e,je])}set fragmentInjection(e){this.fragmentInj=e}get fragmentInjection(){return this.fragmentInj}extractIncludes(e){let t=[],r=/#include <(.*)>/g,i;for(;(i=r.exec(e))!==null;)t.push({start:i.index,end:i.index+i[0].length,name:i[1]});return t}replaceInclude(e,t,r){let i=r.get(t.name);if(i===void 0)throw new Error(`Unknown include directive ${t.name}`);return e.substring(0,t.start)+i+e.substring(t.end)}includeString(e,t,r){return e.substring(0,r.start)+t+e.substring(r.end)}addTemplate(e,t){this.templateTable.set(e,t)}hasTemplate(e){return this.templateTable.has(e)}addInclude(e,t){this.includeTable.set(e,t)}addDefine(e,t){this.defineTable.set(e,t)}buildShaderBase(e,t,r,i,o){let a=Array.isArray(e)?e:this.templateTable.get(e);if(a===void 0)throw new Error(`Unknown templates ${Array.isArray(e)?e.join(","):e}`);i||(i="300 es"),o||(o=Ke);let s=[];for(let c of a){let u="";if(i&&(u+=`#version ${i}
`),o)for(let[b,m]of o)u+=`precision ${m} ${b};
`;if(r)for(let[b,m]of r)u+=`#define ${b} ${m}
`;u+=`
`,this.fragmentInj&&(u+=this.fragmentInj);let l=this.extractIncludes(c),d=0;for(let b of l){u+=c.substring(d,b.start);let m;if(t&&(m=t[b.name]),m===void 0&&(m=this.includeTable.get(b.name)),m===void 0)throw new Error(`Unknown include directive ${b.name}`);u+=m,d=b.end}u+=c.substring(d),s.push(u)}return s}buildCustomShader(e,t,r,i,o){return this.buildShaderBase(e,t,r,i,o)}buildShader(e,t,r,i){return this.buildShaderBase(e,void 0,t,r,i)}test(){let e=new Map([["MAX_LIGHTS","4"],["MAX_SHADOWS","4"],["TEXTURE_NAME","tex"]]),t=new Map([["float","highp"],["int","mediump"]]);return this.buildShader("screenQuad",e,"300 es",t)}};var ce={32:16777619n,64:1099511628211n,128:309485009821345068724781371n,256:374144419156711147060143317175368453031918731002211n,512:35835915874844867368919076489095108449946327955754392558399825615420669938882575126094039892345713852759n,1024:5016456510113118655434598811035278955030765345404790744303017523831112055108147451509157692220295382716162651878526895249385292291816524375083746691371804094271873160484737966720260389217684476157468082573n},Ee={32:2166136261n,64:14695981039346656037n,128:144066263297769815596495629667062367629n,256:100029257958052580907070968620625704837092796014241193945225284501741471925557n,512:9659303129496669498009435400716310466090418745672637896108374329434462657994582932197716438449813051892206539805784495328239340083876191928701583869517785n,1024:14197795064947621068722070641403218320880622795441933960878474914617582723252296732303717722150864096521202355549365628174669108571814760471015076148029755969804077320157692458563003215304957150157403644460363550505412711285966361610267868082893823963790439336411086884584107735010676915n},Te=new globalThis.TextEncoder;function Je(n,e){let t=ce[e],r=Ee[e];for(let i=0;i<n.length;i++)r^=BigInt(n[i]),r=BigInt.asUintN(e,r*t);return r}function Qe(n,e,t){if(t.length===0)throw new Error("The `utf8Buffer` option must have a length greater than zero");let r=ce[e],i=Ee[e],o=n;for(;o.length>0;){let a=Te.encodeInto(o,t);o=o.slice(a.read);for(let s=0;s<a.written;s++)i^=BigInt(t[s]),i=BigInt.asUintN(e,i*r)}return i}function le(n,{size:e,utf8Buffer:t}={size:32}){if(!ce[e])throw new Error("The `size` option must be one of 32, 64, 128, 256, 512, or 1024");if(typeof n=="string"){if(t)return Qe(n,e,t);n=Te.encode(n)}return Je(n,e)}var Re=["POSITION","TEXCOORD0","TEXCOORD1","NORMAL","BITANGENT","TANGENT","COLOUR0","COLOUR1"];var C=class{name_;source_;hash_;resource_;base;rebuild_=!0;static register(e){throw TypeError("Tried to build base Material type")}constructor(e){this.name_=e??"",this.base={attribs:[]}}set rebuild(e){this.rebuild_=e}get rebuild(){return this.rebuild_}get attribs(){return this.base.attribs}set attribs(e){this.base.attribs=e?.map(t=>({...t}))}get name(){return this.name_}set name(e){this.name_=e}set resource(e){this.resource_=e}get resource(){return this.resource_}set props(e){for(let t in e)t in this&&typeof this[t]!="function"&&(this[t]=e[t])}get props(){return{}}set source(e){this.source_=e}get source(){return this.source_}get hash(){if(this.hash_)return this.hash_;let e=new Array,t=this.props;for(let r in t)switch(typeof t[r]){case"object":{let i=t[r].constructor.name;e.push(i);break}case"boolean":case"number":t[r]&&e.push(r);break;case"string":e.push(t[r]);break;default:console.error("Unhandled:",r,t[r])}for(let[r,i]of this.defines)e.push(`${r}=${i}`);return this.hash_=le(e.join(""),{size:32}),this.hash_}get defines(){let e=new Map;for(let t of this.base.attribs??[])e.set(t.type,Re.indexOf(t.type).toString());return e}};var Ae=document.createElement("canvas").getContext("2d");function w(n,e){let t,r,i;if(typeof n=="string")if(n.startsWith("#")){let o=n.slice(1);t=parseInt(o.slice(0,2),16),r=parseInt(o.slice(2,4),16),i=parseInt(o.slice(4,6),16)}else if(n.startsWith("rgb")){let o=n.match(/\d+/g);if(o&&o.length===3)[t,r,i]=o.map(Number);else throw new Error("Invalid RGB string format")}else return Ae.fillStyle=n,w(Ae.fillStyle,e);else if(Array.isArray(n)&&n.length===3)if(n.every(o=>o>=0&&o<=1))[t,r,i]=n.map(o=>Math.round(o*255));else if(n.every(o=>o>=0&&o<=255))[t,r,i]=n.map(Math.round);else throw new Error("Invalid array input values");else throw new Error("Invalid input type");switch(e){case"HEX":return`#${t.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}`;case"RGB_STRING":return`rgb(${t}, ${r}, ${i})`;case"RGB_ARRAY":return[t,r,i];case"RGB_NORMALISED":return[t/255,r/255,i/255];case"SRGB_NORMALISED":return[Math.pow(t/255,2.2),Math.pow(r/255,2.2),Math.pow(i/255,2.2)];default:throw new Error("Invalid output format")}}var Ze=`
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
`,et=`
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
`,Me="BasicMaterial",P=class extends C{data;dirty={};static register(e){e.hasTemplate(Me)||e.addTemplate(Me,[Ze,et])}constructor(e){super(e),this.data={colour:new E(1)}}set colour(e){this.data.colour.set(w(e,"SRGB_NORMALISED"))}get colour(){return this.data.colour}set map(e){this.data.map=e}get map(){return this.data.map}set props(e){super.props=e}get props(){return this.data}get defines(){let e=new Map,t=super.defines;for(let[r,i]of t)e.set(r,i);return this.data.map&&e.set("HAS_MAP",""),e}};var Ce=`const vec2 pos[3] = vec2[3](
  vec2(-1.0, -1.0),
  vec2(+3.0, -1.0),
  vec2(-1.0, +3.0)
);

#if defined(HAS_UV0)
out vec2 uv0;
#endif

void main() {
#if defined(HAS_UV0)
  uv0 = pos[gl_VertexID] * 0.5 + 0.5;
  #if defined(FLIP_Y)
  uv0 = vec2(uv0.x, 1. - uv0.y);
  #endif
#endif
  gl_Position = vec4(pos[gl_VertexID], 0.0, 1.0);
}
`;var we=`#include <gammaCorrect>

#if defined(HAS_UV0)
in vec2 uv0;
#endif

#if defined(HAS_MAP)
uniform sampler2D map;
#endif

uniform float opacity;

out vec4 fragColour;

void main() {
#if defined(HAS_MAP) && defined(HAS_UV0)
  fragColour = texture(map, uv0);
#elif defined(HAS_UV0)
  fragColour = vec4(uv0, 1.0 - uv0.x, 1.0);
#else
  fragColour = vec4(1.0);
#endif

#if defined(GAMMA_CORRECT)
  fragColour.rgb = gammaCorrect(fragColour.rgb);
#endif

  fragColour.a = opacity;
}
`;var Se="ScreenQuadMaterial",N=class extends C{data;dirty={};static register(e){e.hasTemplate(Se)||e.addTemplate(Se,[Ce,we])}constructor(e){super(e),this.data={opacity:1}}set map(e){this.data.map=e}get map(){return this.data.map}set flipY(e){this.data.flipY=e}get flipY(){return this.data.flipY}set gammaCorrect(e){this.data.gammaCorrect=e}get gammaCorrect(){return this.data.gammaCorrect}set opacity(e){this.data.opacity=e}get opacity(){return this.data.opacity}set props(e){super.props=e}get props(){return this.data}get defines(){let e=new Map,t=super.defines;for(let[r,i]of t)e.set(r,i);return this.data.map&&e.set("HAS_MAP",""),this.data.flipY&&e.set("FLIP_Y","1"),this.data.gammaCorrect&&e.set("GAMMA_CORRECT",""),e.set("HAS_UV0",""),e}};var ke=`layout(location = POSITION) in vec3 position;

#if defined(NORMAL)
layout(location = NORMAL) in vec3 normal;
#endif

uniform PerFrameData {
  mat4 projectionViewMatrix;
  mat4 projectionMatrix;
  mat4 worldToViewMatrix;
  mat4 viewToWorldMatrix;
};

uniform PerObjectData {
  mat4 mvpMatrix;
  mat4 modelMatrix;
  mat4 modelViewMatrix;
  mat4 normalMatrix;
};

struct V2F {
  vec3 vPos;
#if defined(NORMAL)
  vec3 vNor;
#endif
};

out V2F v2f;

void main() {
  v2f.vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
  v2f.vNor = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = mvpMatrix * vec4(position, 1.0);
}
`;var Ve=`uniform PerFrameData {
  mat4 projectionViewMatrix;
  mat4 projectionMatrix;
  mat4 worldToViewMatrix;
  mat4 viewToWorldMatrix;
};

struct V2F {
  vec3 vPos;
#if defined(NORMAL)
  vec3 vNor;
#endif
};

in V2F v2f;

out vec3 fragOutput[2];

uniform vec2 outputScaleBias;

void main() {
  fragOutput[0] = normalize(v2f.vNor * outputScaleBias.x + outputScaleBias.y);
  fragOutput[1] = v2f.vPos;
}
`;var Ie="GBufferMaterial",B=class extends C{data;dirty={};static register(e){e.hasTemplate(Ie)||e.addTemplate(Ie,[ke,Ve])}constructor(e){super(e),this.data={normal:!0,view:!1}}set normal(e){this.data.normal=e}get normal(){return this.data.normal}set view(e){this.data.view=e}get view(){return this.data.view}set props(e){super.props=e}get props(){return this.data}get defines(){let e=new Map,t=super.defines;for(let[r,i]of t)e.set(r,i);return e}};var ot={BasicMaterial:{Constructor:P,register:P.register},ScreenQuadMaterial:{Constructor:N,register:N.register},GBufferMaterial:{Constructor:B,register:B.register}},G=class{library_;constructor(e){this.library_=e??new D}make(e,t){let r=this.library_,i=ot[e];if(!i)throw new Error(`Could not find Material '${e}' type`);let o=new i.Constructor;return i.register(r),o.props=t,o.source=r.buildShader(e,o.defines,o.shdrVer),o}};var q=class{gl;resource=null;constructor(e){this.gl=e}initialise(e){let t=this.gl;return this.resource==null&&(this.resource=t.createBuffer(),this.resource==null)?(console.error("Failed to allocate uniform buffer"),!1):(t.bindBuffer(t.UNIFORM_BUFFER,this.resource),typeof e=="number"?t.bufferData(t.UNIFORM_BUFFER,e,t.DYNAMIC_COPY):t.bufferData(t.UNIFORM_BUFFER,e,t.DYNAMIC_COPY,0),t.getError()===t.NO_ERROR)}update(e){let t=this.gl;t.bindBuffer(t.UNIFORM_BUFFER,this.resource),t.bufferSubData(t.UNIFORM_BUFFER,0,e,0)}bindBuffer(e){this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER,e,this.resource)}};var k=class n{buffer;definition;block;name;snippet;unit_=-1;static blockName(e){return/uniform\s+([a-zA-Z0-9_]+)\s+{\s+/.exec(e)?.[1]??""}constructor(e,t){this.name=n.blockName(t),this.snippet=t;let r=at(t);this.definition=r,this.block=new r,this.buffer=new q(e),this.buffer.initialise(this.block.buffer.byteLength)}update(e){if(e){for(let t of Object.keys(e))if(this.block[t]&&ArrayBuffer.isView(this.block[t]))if(Array.isArray(e[t])){let r=0;for(let i of e[t])this.block[t].set(i,r),r+=i.length}else this.block[t].set(e[t])}this.buffer.update(this.block.getUint8View())}set unit(e){this.unit_=e}get unit(){return this.unit_}bindBuffer(e){this.buffer.bindBuffer(e??this.unit_)}buildData(){let e={},t=this.snippet.split(`
`);for(let r of t){let i=r.trim().match(/^\s*(float|int|vec2|vec3|vec4|mat2|mat3|mat4)\s+(\w+)(?:\[(\d+)\])?;/);if(i){let[,o,a,s]=i,c,u=()=>{switch(o){case"float":case"int":return 0;case"vec2":return new L(0,0);case"vec3":return new E(0,0,0);case"vec4":return new A(0,0,0,0);case"mat2":return F.makeIdentity();case"mat3":return g.makeIdentity();case"mat4":return R.makeIdentity();default:return null}};if(s){let l=parseInt(s,10);c=Array(l).fill(null).map(u)}else c=u();e[a]=c}}return e}};function at(n){let e=/(\w+)\s+(\w+)(?:\[(\d+)\])?;/g,t=[],r;for(;(r=e.exec(n))!==null;)t.push({name:r[2],type:r[1],size:r[3]?parseInt(r[3]):1});let i={float:4,vec2:8,vec3:16,vec4:16,mat2:32,mat3:48,mat4:64},o={float:1,vec2:2,vec3:3,vec4:4,mat2:4,mat3:9,mat4:16},a=0;return t.forEach(s=>{a=Math.ceil(a/16)*16,a+=i[s.type]*s.size}),class{buffer;uint8View;constructor(){this.buffer=new ArrayBuffer(a),this.uint8View=new Uint8Array(this.buffer);let c=0;t.forEach(u=>{c=Math.ceil(c/16)*16;let l=i[u.type],d=o[u.type]*u.size;this[u.name]=new Float32Array(this.buffer,c,d),c+=l*u.size})}getBuffer(){return this.buffer}getUint8View(){return this.uint8View}}}var st=WebGL2RenderingContext.COLOR_BUFFER_BIT|WebGL2RenderingContext.DEPTH_BUFFER_BIT|WebGL2RenderingContext.STENCIL_BUFFER_BIT,ue=class{clearColour_=new A(0);viewport_=new A(0);scissor_=new A(0);scissorTest_=!1;dirtyCache={};dirty_=!1;get dirty(){return this.dirty_}clear(){this.dirty_=!1}get clearColour(){return this.clearColour_}set clearColour(e){this.clearColour_.set(e),this.dirty_=this.dirtyCache.clearColour=!0}get viewport(){return this.viewport_}set viewport(e){this.viewport_.set(e),this.dirty_=this.dirtyCache.viewport=!0}get scissor(){return this.scissor_}set scissor(e){this.scissor_.set(e),this.dirty_=this.dirtyCache.scissor=!0}get scissorTest(){return this.scissorTest_}set scissorTest(e){this.scissorTest_=e,this.dirty_=this.dirtyCache.scissorTest=!0}isDirty(e){return this.dirtyCache[e]??!1}checkClear(e){let t=this.dirtyCache[e];return this.dirtyCache[e]=!1,t}clearDirty(e){e in this.dirtyCache&&(this.dirtyCache.prop=!1)}reset(){for(let e in this.dirtyCache)this.dirtyCache[e]=!1}},O=class{dPR=window.devicePixelRatio??1;screen_;config;context_;renderState;matFactory_;uniformBlocks_;vao_;shaderCache=new Map;constructor(e){if(e?e.canvas?typeof e.canvas=="string"&&(e.canvas=document.querySelector(e.canvas)):e.canvas=e.offscreen?new OffscreenCanvas(window.innerWidth,window.innerHeight):document.createElement("canvas"):e={canvas:document.createElement("canvas")},!(e.canvas instanceof HTMLCanvasElement)&&!(e.canvas instanceof OffscreenCanvas))throw new TypeError("Expected an HTMLCanvasElement to initialise Renderer");this.config=e,this.context_=e.canvas.getContext("webgl2",e),this.uniformBlocks_=new Map,this.vao_=this.context_.createVertexArray(),this.matFactory_=new G,this.screen_=new L,this.renderState=new ue,this.applyRenderState(this.renderState)}resize(){let e=this.config.offscreen?this.config.canvas:this.config.canvas,t=this.config.offscreen?{width:window.innerWidth,height:window.innerHeight}:e.getBoundingClientRect(),r=Math.round(t.width),i=Math.round(t.height),o=Math.round(this.dPR*r),a=Math.round(this.dPR*i);(this.screen_.x!==o||this.screen_.y!==a)&&(this.screen_.x=o,this.screen_.y=a,e.width=this.screen_.x,e.height=this.screen_.y,this.renderState.viewport=[0,0,this.screen_.x,this.screen_.y],this.syncState())}get screen(){return this.screen_}get canvas(){return this.config.canvas}get context(){return this.context_}get clearColour(){return this.renderState.clearColour}set clearColour(e){this.renderState.clearColour=e}clear(e=st){this.context.clear(e)}get viewport(){return this.renderState.viewport}set viewport(e){this.renderState.viewport=e}createMaterial(e,t){let r=this.matFactory_.make(e.name,t);return this.buildMaterial(r)?r:(console.error(`Failed to build material ${e.name}`),null)}buildMaterial(e){if(console.log(e.props),console.log(e.defines),e.source){let t=e.hash;if(this.shaderCache.has(t)){console.log("shader already exists");let c=this.shaderCache.get(t);if(c)return e.resource=c.program,c.counter+=1,c.program}let r=X(this.context_,e.source[0],e.source[1]);if(typeof r=="string")return console.error(r),null;let i=$(this.context_,r),o=j(this.context_,r),a=te(e.source[0]);te(e.source[1],a);let s={};for(let c in a){if(!this.uniformBlocks_.has(c)){let d=new k(this.context_,a[c]);d.unit=this.uniformBlocks_.size,this.uniformBlocks_.set(c,d)}let u=this.uniformBlocks_.get(c),l=u.buildData();this.context.uniformBlockBinding(r,o[c],u.unit),s[c]=l}return e.resource=r,this.shaderCache.set(t,{program:r,uniforms:i,blockIndex:o,blocks:s,counter:1}),r}return null}useMaterial(e,t){this.context_.useProgram(e.resource??0);let r=this.shaderCache.get(e.hash);if(!r){console.error("Shader not cached in shaderCache");return}for(let i in r.blocks){let o=this.uniformBlocks_.get(i);t&&o.update(r.blocks[i]),o.bindBuffer()}if(t){for(let i in r.uniforms)if(i in e.props){if(r.uniforms[i].dataType===x.SAMPLER_2D)continue;r.uniforms[i].value=e.props[i]}}U(this.context,r.uniforms)}materialContext(e){return this.shaderCache.has(e.hash)?this.shaderCache.get(e.hash):null}deleteMaterial(e){let t=this.shaderCache.get(e.hash);if(t){if(t.counter===1)return this.shaderCache.delete(e.hash),this.context_.deleteProgram(t.program),!0;t.counter-=1}return!1}renderPass(e){let t=this.context;if(e.program==null){console.error("RenderPass is not initialised");return}t.useProgram(e.program),e.isQuad?(t.bindVertexArray(this.vao_),t.drawArrays(t.TRIANGLES,0,3)):e.mesh&&e.mesh.draw()}syncState(){this.applyRenderState(this.renderState)}applyRenderState(e){let t=this.context;e.checkClear("clearColour")&&t.clearColor(e.clearColour.x,e.clearColour.y,e.clearColour.z,e.clearColour.w),e.checkClear("viewport")&&t.viewport(e.viewport.x,e.viewport.y,e.viewport.z,e.viewport.w),e.checkClear("scissor")&&t.scissor(e.scissor.x,e.scissor.y,e.scissor.z,e.scissor.w),e.checkClear("scissorTest")&&(e.scissorTest?t.enable(t.SCISSOR_TEST):t.disable(t.SCISSOR_TEST)),this.renderState.clear()}};function V(n,e,t){if(e in n)return Array.isArray(n[e])?n[e][t]:n[e]}var W=class n{gl;width_=1;height_=1;samples_=1;options;framebuffer;renderbuffer;depthbuffer;constructor(e,t,r){if(this.gl=e,this.width_=t[0],this.height_=t[1],this.samples_=t[2]!=null?t[2]:1,this.options=r??{renderTargetType:"texture",attachments:1,internalFormat:e.RGBA8,format:e.RGBA,dataType:e.UNSIGNED_BYTE,wrapMode:{s:e.CLAMP_TO_EDGE,t:e.CLAMP_TO_EDGE},filterMode:{min:e.NEAREST,mag:e.NEAREST},generateMipmaps:!1,depthBufferType:"none",internalDepthFormat:e.DEPTH_COMPONENT16,depthFormat:e.DEPTH_COMPONENT,depthDataType:e.UNSIGNED_INT},"wrapMode"in this.options||(this.options.wrapMode={s:e.CLAMP_TO_EDGE,t:e.CLAMP_TO_EDGE}),"filterMode"in this.options||(this.options.filterMode={min:e.NEAREST,mag:e.NEAREST}),(this.options.internalFormat===e.RGBA32F||this.options.internalFormat===e.RGBA16F)&&e.getExtension("EXT_color_buffer_float")==null)throw new Error("EXT_color_buffer_float is required");let i=null;if(this.options.anisotropy!=null&&(i=e.getExtension("EXT_texture_filter_anisotropic"),i==null))throw new Error("EXT_texture_filter_anisotropic is required");this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer);let o=this.options;this.renderbuffer=[];let a=this.options.attachments??1;for(let s=0;s<a;++s){let c=V(o,"internalFormat",s),u=V(o,"format",s),l=V(o,"dataType",s),d=V(o,"wrapMode",s),b=V(o,"filterMode",s)??{min:e.NEAREST,mag:e.NEAREST};if(console.log(c,u,l,d,b),o.renderTargetType==="texture"&&this.samples_===1){let m=e.createTexture();if(!m)throw Error("Failed to create attachment texture");if(e.bindTexture(e.TEXTURE_2D,m),e.texImage2D(e.TEXTURE_2D,0,c,this.width_,this.height_,0,u,l,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,d.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d.t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,b.min),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,b.mag),i&&this.options.anisotropy!=null){let v=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);e.texParameterf(e.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY_EXT,v)}e.bindTexture(e.TEXTURE_2D,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+s,e.TEXTURE_2D,m,0),this.renderbuffer?.push(m)}else if(o.renderTargetType==="renderbuffer"){let m=e.createRenderbuffer();if(!m)throw Error("Failed to create attachment texture");e.bindRenderbuffer(e.RENDERBUFFER,this.renderbuffer),this.samples_>1?e.renderbufferStorageMultisample(e.RENDERBUFFER,this.samples_,c,this.width_,this.height_):e.renderbufferStorage(e.RENDERBUFFER,c,this.width_,this.height_),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+s,e.RENDERBUFFER,m),this.renderbuffer?.push(m)}}o.depthBufferType!=="none"&&o.internalDepthFormat!=null&&o.depthFormat!=null&&o.depthDataType!=null?o.depthBufferType==="texture"&&this.samples_===1?(this.depthbuffer=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.depthbuffer),e.texImage2D(e.TEXTURE_2D,0,o.internalDepthFormat,this.width_,this.height_,0,o.depthFormat,o.depthDataType,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.bindTexture(e.TEXTURE_2D,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,this.depthbuffer,0)):(this.depthbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthbuffer),this.samples_>1?e.renderbufferStorageMultisample(e.RENDERBUFFER,this.samples_,o.internalDepthFormat,this.width_,this.height_):e.renderbufferStorage(e.RENDERBUFFER,o.internalDepthFormat,this.width_,this.height_),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthbuffer)):this.depthbuffer=null,_e(e.getError()),e.bindFramebuffer(e.FRAMEBUFFER,null)}destroy(){if(this.framebuffer){for(let e of this.renderbuffer??[])console.log(e),this.options.renderTargetType==="renderbuffer"?this.gl.deleteRenderbuffer(e):this.options.renderTargetType==="texture"&&this.gl.deleteTexture(e);this.options.depthBufferType==="renderbuffer"?this.gl.deleteRenderbuffer(this.depthBuffer):this.options.depthBufferType==="texture"&&this.gl.deleteTexture(this.depthBuffer),this.gl.deleteFramebuffer(this.framebuffer)}}get width(){return this.width_}get height(){return this.height_}get samples(){return this.samples_}get isMultisample(){return this.samples_>1}get frameBuffer(){return this.framebuffer}get colourBuffer(){return this.renderbuffer?.[0]}get depthBuffer(){return this.depthbuffer}target(e){return this.renderbuffer?.[e]}bind(){let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2,e.COLOR_ATTACHMENT3])}release(){this.options.generateMipmaps===!0&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.renderbuffer),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.bindTexture(this.gl.TEXTURE_2D,null)),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resolve(e){let t=this.gl;t.bindFramebuffer(t.READ_FRAMEBUFFER,this.framebuffer),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,e instanceof n?e.framebuffer:e),t.blitFramebuffer(0,0,this.width_,this.height_,0,0,this.width_,this.height_,t.COLOR_BUFFER_BIT,t.NEAREST),t.bindFramebuffer(t.FRAMEBUFFER,null)}resize(e,t,r=1){if(this.width_!==e||this.height_!==t||this.samples_!==r){this.width_=e,this.height_=t,this.samples_=r;let i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,this.framebuffer);let o=this.options,a=this.options.attachments??1;for(let s=0;s<a;++s){let c=V(o,"internalFormat",s),u=V(o,"format",s),l=V(o,"dataType",s);if(o.renderTargetType==="texture"&&this.samples_===1){let d=this.renderbuffer?.[s];i.bindTexture(i.TEXTURE_2D,d),i.texImage2D(i.TEXTURE_2D,0,c,this.width_,this.height_,0,u,l,null),i.bindTexture(i.TEXTURE_2D,null),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+s,i.TEXTURE_2D,d,0)}else{let d=this.renderbuffer?.[s];i.bindRenderbuffer(i.RENDERBUFFER,d),this.samples_>1?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples_,c,this.width_,this.height_):i.renderbufferStorage(i.RENDERBUFFER,c,this.width_,this.height_),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+s,i.RENDERBUFFER,d)}}o.depthBufferType!=="none"&&o.internalDepthFormat!=null&&o.depthFormat!=null&&o.depthDataType!=null&&(o.depthBufferType==="texture"&&this.samples_===1?(i.bindTexture(i.TEXTURE_2D,this.depthbuffer),i.texImage2D(i.TEXTURE_2D,0,o.internalDepthFormat,this.width_,this.height_,0,o.depthFormat,o.depthDataType,null),i.bindTexture(i.TEXTURE_2D,null),i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,this.depthbuffer,0)):(i.bindRenderbuffer(i.RENDERBUFFER,this.depthbuffer),this.samples_>1?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples_,o.internalDepthFormat,this.width_,this.height_):i.renderbufferStorage(i.RENDERBUFFER,o.internalDepthFormat,this.width_,this.height_),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,this.depthbuffer))),_e(i.getError()),i.bindFramebuffer(i.FRAMEBUFFER,null)}}};function _e(n){let e=WebGL2RenderingContext;switch(n){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";case e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";case e.FRAMEBUFFER_COMPLETE:return"FRAMEBUFFER_COMPLETE"}return null}var I=window.devicePixelRatio??1,De=`
layout(std140) uniform HostData {
  vec4 resolution; // [width, height, AR, devicePixelRatio]
  vec4 viewport; // [x, y, width, height]
  vec4 timeData; // [time, delta, unused, unused]
};
`,ct=`
${De}

// #define screen resolution.xy
// #define AR resolution.z
#define screen viewport.zw
#define AR (viewport.z / viewport.w)
#define dPR resolution.w
#define time timeData.x
#define dt timeData.y
`,Y=class{rndr;config_;timer_;library_;viewport=new A(0,0,0,0);standardBlock;raf;constructor(e){this.rndr=e.canvas?new O({canvas:e.canvas}):new O({offscreen:e.offscreen}),this.config_=e,this.timer_=new H,this.library_=new D,this.standardBlock=new k(this.context,De),this.raf=0,this.standardBlock.unit=0,this.standardBlock.bindBuffer(),this.library_.fragmentInjection=ct,this.buildPipeline(this.config_.pipeline),this.rndr.resize(),this.resize(this.rndr.screen.x,this.rndr.screen.y),window.addEventListener("resize",()=>{this.rndr.resize(),this.resize(this.rndr.screen.x,this.rndr.screen.y)})}getView(e){return this.config_.pipeline.multipleViews?.get(e)}initialiseViews(){let e=new Map;if(!this.config_.views)return e;for(let t=0;t<this.config_.views.length;++t){let r=this.config_.views[t],i=document.createElement("canvas");i.width=Math.floor(r.offsetWidth*I),i.height=Math.floor(r.offsetHeight*I),i.style.position="absolute",i.style.width=`${r.offsetWidth}px`,i.style.height=`${r.offsetHeight}px`,i.style.zIndex="-1",r.insertBefore(i,r.firstChild);let o=i.getContext("2d",{alpha:!1});this.config_.canvasAA?(console.log("enableAA"),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high"):o.imageSmoothingEnabled=!1,o.scale(I,I);let a=this.config_.viewDataFnc?.(r)??{};e.set(r.id,{div:r,canvas:i,ctx:o,data:a})}return e}buildPipeline(e){if(e.passes.length===0)return!1;let t=this.context;this.config_.views&&(e.multipleViews=this.initialiseViews(),console.log("multiple views:",e.multipleViews));let r={};e.blocks=r,r.HostData=this.standardBlock;let i=1;for(let o of e.passes){let a=e.library?this.library_.buildCustomShader(o.shaderDef,e.library,o.defines):this.library_.buildShader(o.shaderDef,o.defines),s=X(t,a[0],a[1]);if(typeof s=="string")return console.error(s),!1;o.program=s,o.context=$(t,s);let c=j(t,s);o.blocks={};for(let u of o.blockDef??[]){let l=k.blockName(u);if(l==="")return console.error("Block name not found in block definition:",u),!1;if(r[l]&&r[l].definition===u){o.blocks[l]=r[l];continue}let d=new k(t,u);o.blocks[d.name]=d,r[d.name]=d,t.uniformBlockBinding(s,c[d.name],i),d.bindBuffer(i),d.unit=i,i++}e.passes[e.passes.length-1].isOutput=!0}return this.config_.handlers.onInitialise&&this.config_.handlers.onInitialise(e),!0}get timer(){return this.timer_}get context(){return this.rndr.context}get config(){return this.config_}start(){this.timer_.start(),this.renderLoop()}stop(){cancelAnimationFrame(this.raf),this.timer_.stop()}pause(){this.timer_.pause()}renderLoop(){this.update(),this.render(),this.raf=requestAnimationFrame(this.renderLoop.bind(this))}update(){this.timer_.update(),this.standardBlock.block.timeData.set([this.timer_.currentTime,this.timer_.deltaTime,0,0]),this.standardBlock.update(),this.config_.handlers.onUpdate?.(this.timer_.currentTime,this.timer_.deltaTime)}renderToView(e,t,r,i,o,a){let s=this.context,c=this.rndr.canvas;s.scissor(t,c.height-r-o,i,o),s.viewport(t,c.height-r-o,i,o),s.enable(s.SCISSOR_TEST),this.standardBlock.block.viewport.set([t,c.height-r-o,i,o]),this.standardBlock.update();let u=Object.keys(a)[0];e.blocks?.[u]?.update?.(a[u]),this.rndr.renderPass(e)}renderView(e,t){let r=e.div.getBoundingClientRect(),i=Math.floor(r.bottom),o=Math.floor(r.top),a=Math.floor(r.right),s=Math.floor(r.left);if(i<0||o>window.innerHeight||a<0||s>window.innerWidth){e.canvas.style.display="none";return}if(e.canvas.style.display="block",e.canvas.style.left=`${s+window.scrollX}px`,e.canvas.style.top=`${o+window.scrollY}px`,t.context){this.rndr.context.useProgram(t.program);let c=e.data;for(let u in c)u in t.context&&(t.context[u].value=c[u]);U(this.rndr.context,t.context)}this.renderToView(t,s,o,e.canvas.width,e.canvas.height,e.data),e.ctx.drawImage(this.rndr.canvas,s,o,Math.floor(e.canvas.width*I),Math.floor(e.canvas.height*I),0,0,e.canvas.width,e.canvas.height)}render(){let e=this.config_.pipeline;if(this.config_.handlers.onPreRender?.(e),e.multipleViews)for(let t=0;t<e.passes.length;++t){let r=e.passes[t];this.config_.handlers.onPassPreRender?.(r);for(let i of e.multipleViews)i[1].data.model===t&&this.renderView(i[1],r);this.config_.handlers.onPassPostRender?.(r)}else for(let t of e.passes)this.config_.handlers.onPassPreRender?.(t),this.rndr.renderPass(t),this.config_.handlers.onPassPostRender?.(t);this.config_.handlers.onPostRender?.(e)}resize(e,t){this.context.viewport(0,0,e,t),this.viewport.set(e,t,e/t,I),this.standardBlock.block.resolution.set([e,t,e/t,I]),this.config_.handlers.onResize?.(e,t)}captureView(e,t){console.log(e.canvas.width,e.canvas.height,t);let r=Math.floor(e.canvas.width*t),i=Math.floor(e.canvas.height*t),o=new W(this.context,[r,i],{renderTargetType:"texture",internalFormat:this.context.RGBA8,format:this.context.RGBA,dataType:this.context.UNSIGNED_BYTE,depthBufferType:"none"});o.bind(),this.context.disable(this.context.SCISSOR_TEST),this.context.viewport(0,0,r,i),this.context.clearColor(1,0,0,1),this.context.clear(this.context.COLOR_BUFFER_BIT);let a=Array.from(this.standardBlock.block.viewport),s=Array.from(this.standardBlock.block.resolution);this.standardBlock.block.viewport.set([0,0,r,i]),this.standardBlock.block.resolution.set([r,i,s[2],s[3]*t]),this.standardBlock.update();let c=this.config_.pipeline;for(let u=0;u<c.passes.length;++u){let l=c.passes[u];if(console.log(l,e,e.data.model),e.data.model===u){if(this.config_.handlers.onPassPreRender?.(l),l.context){this.rndr.context.useProgram(l.program);let d=e.data;for(let b in d)b in l.context&&(l.context[b].value=d[b]);U(this.rndr.context,l.context)}console.log("render"),this.rndr.renderPass(l),this.config_.handlers.onPassPostRender?.(l)}}this.standardBlock.block.viewport.set(a),this.standardBlock.block.resolution.set(s),this.standardBlock.update(),o.release(),this.downloadFramebufferAsPNG(o,r,i,`${e.div.id??"capture"}.png`),o.destroy()}downloadFramebufferAsPNG(e,t,r,i){let o=this.context,a=document.createElement("canvas");a.width=t,a.height=r;let s=a.getContext("2d"),c=new Uint8Array(t*r*4);e.bind(),o.readPixels(0,0,t,r,o.RGBA,o.UNSIGNED_BYTE,c);let u=new ImageData(t,r);for(let b=0;b<r;b++)for(let m=0;m<t;m++){let v=(b*t+m)*4,f=((r-b-1)*t+m)*4;u.data[f]=c[v],u.data[f+1]=c[v+1],u.data[f+2]=c[v+2],u.data[f+3]=c[v+3]}s.putImageData(u,0,0);let l=a.toDataURL("image/png"),d=document.createElement("a");d.href=l,d.download=i||"framebuffer.png",document.body.appendChild(d),d.click(),document.body.removeChild(d),e.release()}};var de=`const vec2 position[3] = vec2[3](
    vec2(-1.0, -1.0),
    vec2(+3.0, -1.0),
    vec2(-1.0, +3.0)
);

out vec2 uv;

void main() {
    gl_Position = vec4(position[gl_VertexID], 0.0, 1.0);
    uv = position[gl_VertexID] * .5 + .5;
}
`;var me=`#include <commonDefs>
#include <functions>
#include <simplex2D>
#include <simplex3D>
#include <noises>
#include <colourTable>
#include <computeNormal>

#define SINE_WAVE 0
#define BREAKING_WAVE 1

#if defined(ZED)
#define MODEL 0
#define DRAW_SWATCH
#else
in vec2 uv;
#endif

/********************************************************************************/
/* UNIFORMS                                                                     */
/********************************************************************************/

// default background = [0.901961, 0.87451, 0.815686]

uniform vec3 backgroundColour; // { "value": [0.901961, 0.87451, 0.815686], "min": 0.0, "max": 1.0, "step": 0.01, "isColour": true }

uniform float noiseScale;      // { "value": 0.5, "min": 0.0, "max": 1.0, "step": 0.01 }
uniform float repeat;          // { "value": 1.0, "min": 0.0, "max": 100.0, "step": 1.0 }
uniform vec3 lDir;             // { "value": [0.0, -1.0, 1.0], "min": -1.0, "max": 1.0, "step": 0.01 }
uniform float speed;           // { "value": 2.0, "min": 0.01, "max": 10.0, "step": 0.01 }
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

/********************************************************************************/
/* GLOBALS                                                                      */
/********************************************************************************/

vec3 lightDir; // The position of the light (points towards)
vec2 invRes; // The inverse of the viewport (may be a region of the window)

// #define TIME (speed * time)
float TIME;

vec4 colRing[4];

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
}

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
  vec3 c = mix(cc, fg, 0.45 * step(1. - noiseScale, random2(uv + .11)) * fract(random2(uv-.123) + flicker * sin(TWO_PI * random2(uv) + TIME)));

  return mix(c, fg, saturate(l - 0.5));
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

float smoothStop(float t, float end, float fadeOut) {
  float startFade = end - fadeOut;
  if(startFade <= t) {
    float i = (t - startFade);
    float r = sqrt(i) - 0.2;
    return startFade + r;
  }
  return t;
}

void renderImage(out vec4 fragColour, vec2 fragCoord) {
  colRing[0] = colourRing0; // Zed doesn't auto-parse arrays yet...
  colRing[1] = colourRing1;
  colRing[2] = colourRing2;
  colRing[3] = colourRing3;

  // Compute the time value
  float end = repeat * duration - 0.05;
  TIME = mix(speed * time, clamp(smoothStop(speed * time, end, 5.0), 0.0, end), step(0.5, repeat));

  initAnimation(fragCoord);
  fragColour = vec4(computeColour(), 1.0);
  #if defined(DRAW_SWATCH)
  vec4 swatch = drawSwatch(fragCoord);
  fragColour = mix(fragColour, swatch, swatch.a);
  #endif
}
`;var M={save:"\u{1F4BE}",copy:"\u{1F4CB}",new:"\u{1F195}",import:"\u{1F4E5}",export:"\u{1F4E4}",play:"\u25B6\uFE0F",pause:"\u23F8\uFE0F",stop:"\u23F9\uFE0F",delete:"\u{1F5D1}\uFE0F",noError:"\u{1F7E2}",error:"\u{1F534}",camera:"\u{1F4F7}"},cn=`
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
          <button id="status" class="button">${M.noError}</button>
          <select name="snippets" id="snippet-select" title="Snippet Library"></select>
         
          <button id="new-snippet" title="New Snippet">${M.new}</button>
          <button id="save-snippet" title="Save Snippet">${M.save}</button>
          <button id="delete-snippet" title="Delete Snippet">${M.delete}</button>
          
          <!-- Shaders -->
          <select name="shaders" id="shader-select" title="Shader Library"></select>
          
          <button id="new-shader" title="New Shader">${M.new}</button>
          <button id="save-shader" title="Save Shader">${M.save}</button>
          <button id="delete-shader" title="Delete Shader">${M.delete}</button>
          <button id="play-pause" title="Play/Pause">${M.play}</button>
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
`;var K=class n{container;controls;values;onUpdateCallback;onSnapshot;controlWindow;toggleButton;static styleInjected=!1;textedit;snapshotResolution=1;constructor(e,t,r,i,o){this.container=e,this.controls=t,this.values=JSON.parse(r),this.onUpdateCallback=i,this.onSnapshot=o,this.initialise()}initialise(){n.styleInjected||n.injectStyle();let e=document.createElement("div");e.className="zed-button-wrapper",this.container.appendChild(e),this.toggleButton=document.createElement("div"),this.toggleButton.className="zed-animation-control-button",this.toggleButton.innerHTML="\u2699\uFE0F",e.appendChild(this.toggleButton),this.controlWindow=document.createElement("div"),this.controlWindow.className="zed-animation-control-window",this.controlWindow.style.top="34px",this.controlWindow.style.right="8px",e.appendChild(this.controlWindow),this.toggleButton.addEventListener("click",t=>{t.stopPropagation(),this.controlWindow.style.display=this.controlWindow.style.display==="block"?"none":"block"}),this.createControls()}buildRow1Controls(){let e=document.createElement("input");return e.type="text",e.style.color="white",e.style.width="100%",e.style.backgroundColor="black",e.style.padding="4px",e.style.borderRadius="4px",e.style.border="1px solid #333",e.style.outline="none",e.value=JSON.stringify(this.values).replace(/"/g,"'"),e.addEventListener("keyup",t=>{if(t.key==="Enter"){let r;try{r=JSON.parse(e.value.replace(/'/g,'"'))}catch{console.error("Failed to parse input");return}for(let i in this.controls)if(i in r)if(this.controls[i].value=r[i],Array.isArray(r[i]))for(let o=0;o<r[i].length;++o)this.controls[i].element[o].value=r[i][o],this.updateValueLabel(this.controls[i].element[o],r[i][o]);else this.controls[i].element.value=r[i],this.controls[i].isColour||this.updateValueLabel(this.controls[i].element,r[i]);this.values=r,this.onUpdateCallback(e.value),e.setSelectionRange(0,0),e.scrollLeft=0}}),this.textedit=e,e}buildRow0Controls(){let e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="space-between";let t=document.createElement("span");t.textContent="#"+(this.container.id??"no_id"),t.style.font="bold 16px Arial, sans-serif",t.style.color="white",e.appendChild(t);let r=document.createElement("span");r.className="zed-notification",r.innerHTML="Copied!";let i=()=>{r.classList.add("show"),setTimeout(()=>{r.classList.remove("show")},2e3)},o=document.createElement("div");o.style.position="relative";let a=document.createElement("button");a.innerHTML=M.export,a.style.color="black",a.appendChild(r),a.onclick=async()=>{let l=JSON.stringify(this.values).replace(/"/g,"'");try{await navigator.clipboard.writeText(l)}catch{dt(l)}i()},o.appendChild(a),o.appendChild(r),e.appendChild(o);let s=document.createElement("select");s.style.color="black",["1x","2x","3x","4x"].forEach(l=>{let d=document.createElement("option");d.value=parseInt(l).toString(),d.innerText=l,s.appendChild(d)}),s.onchange=l=>{this.snapshotResolution=parseInt(l.target.value)},e.appendChild(s);let u=document.createElement("button");return u.innerHTML=M.camera,u.onclick=async()=>{this.onSnapshot?.(this.snapshotResolution)},e.appendChild(u),e}createControls(){let e=document.createElement("div");e.style.display="flex",e.style.gap="6px",e.style.flexDirection="column",e.style.marginBottom="6px";let t=this.buildRow0Controls(),r=this.buildRow1Controls();e.appendChild(t),e.appendChild(r),this.controlWindow?.appendChild(e),Object.entries(this.controls).forEach(([i,o])=>{if(o.isColour){console.log("COLOUR ELEMENT",i,o);let a=this.createColourElement(i,o);this.controlWindow?.appendChild(a)}else if(this.isNumericType(o.type)){console.log("other",o);let a=this.createControlElement(i,o);this.controlWindow?.appendChild(a)}})}createControlElement(e,t){let r=document.createElement("div");r.className="zed-animation-control";let i=document.createElement("label");i.textContent=e==="colourScale"?"colourVibrancyScale":e,console.log("NAME",i.textContent),r.appendChild(i);let o=this.values[e]!==void 0?this.values[e]:0;if(Array.isArray(o))o.forEach((a,s)=>{let c=document.createElement("div");c.className="zed-slider-container";let u=this.createSlider(e,t,a!==void 0?a:0,s),l=this.createValueLabel(a!==void 0?a:0);c.appendChild(u),c.appendChild(l),r.appendChild(c)});else{let a=document.createElement("div");a.className="zed-slider-container";let s=this.createSlider(e,t,o!==void 0?o:0),c=this.createValueLabel(o!==void 0?o:0);a.appendChild(s),a.appendChild(c),r.appendChild(a)}return r}createColourElement(e,t){let r=document.createElement("div");r.className="zed-animation-control";let i=document.createElement("label");i.textContent=e,r.appendChild(i);let o=this.values[e]!==void 0?this.values[e]:"#ffffff",a=document.createElement("div");a.className="zed-slider-container";let s=document.createElement("input");return s.type="color",s.value=o.toString(),a.appendChild(s),r.appendChild(a),s.addEventListener("change",c=>{this.handleColourChange(e,c.target.value)}),t.element=s,r}createSlider(e,t,r,i){let o=document.createElement("input");return o.type="range",o.min=(t.min??0).toString(),o.max=(t.max??1).toString(),o.step=(t.step??.01).toString(),o.value=r.toString(),i!=null?Array.isArray(t.element)?t.element.push(o):i===0&&(t.element=[o]):t.element=o,o.addEventListener("input",a=>{let s=parseFloat(a.target.value);this.handleSliderChange(e,s,i),this.updateValueLabel(o,s)}),o}createValueLabel(e){let t=document.createElement("span");return t.className="zed-value-label",t.textContent=this.formatValue(e),t}updateValueLabel(e,t){let r=e.nextElementSibling;r?.classList.contains("zed-value-label")&&(r.textContent=this.formatValue(t))}formatValue(e){return e.toFixed(2)}handleSliderChange(e,t,r){r!==void 0&&Array.isArray(this.values[e])?this.values[e][r]=t:this.values[e]=t;let i=JSON.stringify(this.values);this.onUpdateCallback(i),this.textedit&&(this.textedit.value=i.replace(/"/g,"'"))}handleColourChange(e,t){this.values[e]=w(t,"RGB_NORMALISED");let r=JSON.stringify(this.values);this.onUpdateCallback(r),this.textedit&&(this.textedit.value=r.replace(/"/g,"'"))}isNumericType(e){return["bool","int","float","vec2","vec3","vec4","ivec2","ivec3","ivec4"].includes(e)}static injectStyle(){if(n.styleInjected)return;let e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e),n.styleInjected=!0}};function dt(n){let e=document.createElement("textarea");e.value=n,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(e)}var z=class{gl_;texture_;width_;height_;conf={type:WebGL2RenderingContext.TEXTURE_2D};constructor(e,t,r,i,o){this.gl_=e,this.texture_=r??e.createTexture(),this.width_=i??0,this.height_=o??0,this.config=t??{type:e.TEXTURE_2D},console.log("this.conf:",this.conf)}get config(){return this.conf}set config(e){let t=WebGL2RenderingContext;this.conf={type:e?.type??t.TEXTURE_2D,format:e?.format??[t.RGBA8,t.RGBA],dataType:e?.dataType??t.UNSIGNED_BYTE,wrap:e?.wrap??[t.CLAMP_TO_EDGE,t.CLAMP_TO_EDGE],filter:e?.filter??[e?.mipmaps??!1?t.LINEAR_MIPMAP_LINEAR:t.LINEAR,t.LINEAR],mipmaps:e?.mipmaps??!1,aniso:e?.aniso??1,flip:e?.flip??!1}}dispose(){this.texture_&&this.gl_.deleteTexture(this.texture_)}get width(){return this.width_}get height(){return this.height_}get mipmaps(){return this.conf.mipmaps??!0}set mipmaps(e){this.conf.mipmaps=e}get aniso(){return this.conf.aniso??1}set aniso(e){this.conf.aniso=e}get format(){return this.conf.format??[]}set format(e){this.conf.format=[...e]}get texture(){return this.texture_}set texture(e){this.texture_=e}bind(e=0){let t=this.gl_;t.activeTexture(t.TEXTURE0+e),t.bindTexture(this.conf.type,this.texture_)}release(e=0){let t=this.gl_;t.activeTexture(t.TEXTURE0+e),t.bindTexture(this.conf.type,null)}allocate(e,t,r,i){i&&(this.conf={...this.conf,...i}),this.width_=Math.floor(e),this.height_=Math.floor(t),this.defineTexture(e,t,r)}loadURL(e,t,r){let i=new Image;t&&(this.config=t),i.onload=()=>{this.width_=i.naturalWidth,this.height_=i.naturalHeight,this.defineTexture(this.width_,this.height_,i,t?.flip),r&&r(this)},i.src=e}defineTexture(e,t,r,i){let o=this.gl_;o.bindTexture(this.conf.type,this.texture_);let a=this.conf?.mipmaps??!0,s=this.conf.format??[o.RGBA8,o.RGBA],c=this.conf.wrap??[o.CLAMP_TO_EDGE,o.CLAMP_TO_EDGE],u=this.conf.filter??[a?o.LINEAR_MIPMAP_LINEAR:o.LINEAR,o.LINEAR],l=this.conf.dataType??o.UNSIGNED_BYTE;if(o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,i??!1),r&&ArrayBuffer.isView(r)&&r.byteLength%4!==0&&o.pixelStorei(o.UNPACK_ALIGNMENT,1),r instanceof HTMLImageElement?o.texImage2D(this.conf.type,0,s[0],s[1],l,r??null):o.texImage2D(this.conf.type,0,s[0],e,t,0,s[1],l,r??null),i===!0&&o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.texParameteri(this.conf.type,o.TEXTURE_WRAP_S,c[0]),o.texParameteri(this.conf.type,o.TEXTURE_WRAP_T,c[1]),o.texParameteri(this.conf.type,o.TEXTURE_MIN_FILTER,u[0]),o.texParameteri(this.conf.type,o.TEXTURE_MAG_FILTER,u[1]),this.conf?.aniso??!0){let d=o.getExtension("EXT_texture_filter_anisotropic")??o.getExtension("MOZ_EXT_texture_filter_anisotropic")??o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(d){let b=o.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT);o.texParameterf(o.TEXTURE_2D,d.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b,this.aniso))}}this.conf?.mipmaps&&o.generateMipmap(this.conf.type),o.bindTexture(this.conf.type,null)}};var mt=["bool","int","float","vec2","vec3","vec4","ivec2","ivec3","ivec4"];function pt(n,e,t){let r=new z(n);return r.loadURL(e,void 0,t),r}var J=class n{gl;uniforms;callbacks;constructor(e){this.gl=e,this.uniforms={},this.callbacks={}}parseGLSL(e){this.clear(),this.uniforms=n.extractControls(e)}static extractControls(e){let t=/uniform\s+(\w+)\s+(\w+)\s*;\s*\/\/\s*(\{.*?\})/g,r,i={};for(;(r=t.exec(e))!==null;){let[,o,a,s]=r;try{let c=JSON.parse(s);c.isColour&&(c.value=w(c.value,"RGB_NORMALISED")),i[a]={type:o,...c}}catch(c){console.error(`Error parsing JSON for uniform ${a}:`,c)}}return i}updateTexture(e,t,r){let i=new FileReader;i.onload=o=>{let a=o.target?.result;typeof a=="string"&&pt(this.gl,a,s=>{this.uniforms[e].texture=s,s.bind(t),this.callbacks[e]&&this.callbacks[e](t)})},i.readAsDataURL(r)}async exportJSON(){let e={};for(let r in this.uniforms)e[r]=this.uniforms[r].value;let t=JSON.stringify(e);try{await navigator.clipboard.writeText(t)}catch(r){console.error("Failed to copy: ",r)}}generateHTML(){let e='<div class="shader-controls">';e+='<button onclick="window.controlGenerator.exportJSON()" style="margin-bottom: 20px; padding: 5px">Export JSON</button>',e+='<button onclick="window.controlGenerator.resetTimer()" style="margin-bottom: 20px; padding: 5px">Reset Timer</button>';for(let[t,r]of Object.entries(this.uniforms))e+=`<div class="control-group">
                        <label for="${t}">${t}</label>
                        <div class="control-wrapper">`,r.isColour?e+=this.generateColourControl(t,r):mt.includes(r.type)?e+=this.generateNumericControl(t,r):r.type==="sampler2D"&&(e+=this.generateTextureControl(t,r)),e+="</div></div>";return e+="</div>",e}generateTextureControl(e,t){return`<input type="file" id="${e}" name="${e}" accept="image/*"
                onchange="window.controlGenerator.updateTexture('${e}', ${t.unit}, this.files[0])">`}generateColourControl(e,t){let r=typeof t.value=="string"?t.value:w(t.value,"HEX");return`<input type="color" id="${e}" value="${r}" 
                onchange="window.controlGenerator.updateColour('${e}', this.value)">`}generateNumericControl(e,t){let r=!1,i=0;switch(t.type){case"float":case"int":case"bool":r=!1;break;case"ivec2":case"vec2":r=!0,i=2;break;case"vec3":case"ivec3":r=!0,i=3;break;case"vec4":case"ivec4":r=!0,i=4;break}if(r){let o="",a=["x","y","z","w"];for(let s=0;s<i;s++)o+=`<div class="slider-container">
                  <label>${a[s]}</label>
                  <input type="range" id="${e}_${s}" name="${e}_${s}"
                      min="${t.min??0}" max="${t.max??1}" step="${t.step??.1}"
                      value="${t.value[s]}"
                      oninput="window.controlGenerator.updateUniformVec('${e}', ${s}, this.value)">
                  <span class="value-display">${t.value[s].toFixed(2)}</span>
              </div>`;return o}else return`<div class="slider-container">
              <label>v</label>
              <input type="range" id="${e}" name="${e}"
                  min="${t.min??0}" max="${t.max??1}" step="${t.step??.1}"
                  value="${t.value}"
                  oninput="window.controlGenerator.updateUniform('${e}', this.value)">
              <span class="value-display">${t.value.toFixed(2)}</span>
            </div>`}updateUniform(e,t){let r=parseFloat(t);this.uniforms[e].value=r;let i=document.querySelector(`#${e}`).nextElementSibling;i.textContent=r.toFixed(2),this.callbacks[e]&&this.callbacks[e](r)}updateUniformVec(e,t,r){let i=parseFloat(r);this.uniforms[e].value[t]=i;let o=document.querySelector(`#${e}_${t}`).nextElementSibling;o.textContent=i.toFixed(2),this.callbacks[e]&&this.callbacks[e](this.uniforms[e].value)}updateColour(e,t){let r=w(t,"RGB_NORMALISED");this.uniforms[e].value=r,this.callbacks[e]&&this.callbacks[e](this.uniforms[e].value)}setUpdateCallback(e,t){this.callbacks[e]=t}injectControls(e){e?(e.innerHTML=this.generateHTML(),window.controlGenerator=this):console.error("injectControls failed: container not found")}getUniforms(){return this.uniforms}clear(){this.uniforms={},this.callbacks={}}};function bt(n){return function(){n=n+1831565813;let e=n;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Q=class{rngFunction;constructor(e=Date.now()){this.rngFunction=bt(e)}randInt(e,t){return Math.floor(this.next()*(t-e))+e}randIntInclusive(e,t){return Math.floor(this.next()*(t-e+1))+e}randBoolean(e=.5){return this.next()<e}randChoice(e){return e[this.randInt(0,e.length)]}next(){return this.rngFunction()}};var ft=window.devicePixelRatio,pe=`{"model":0,"randTex":2,"creatorDPR":${ft},"backgroundColour":[0.901961, 0.87451, 0.815686],"lDir":[0,-1,1],"speed":1,"duration":20,"position":[0,0],"ringScale":0.04,"colourScale":[2.553,3,2.363,1.982],"normalScale":1,"rings":[1,1.6,6,12],"angle":[0,3.14,1.57,4.71],"arc":[0.5,0.5,0.5,0.5],"fade":[1,1,1,1],"fadeScale":[1,1,1,1],"colourCount":4,"colourID":[1,7,4,9],"colourRing0":[1,2,8,11],"colourRing1":[1,2,18,19],"colourRing2":[1,2,18,19],"colourRing3":[1,2,18,19],"steepness":2,"waveScale":1.6,"waveWidth":22,"waveOrigin":0,"yAxisMixer":[-6,1,2,30],"xAxisMixer":[0,0,0,0],"shape":0.56}`,ht=`
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
`,Fe=`
out vec4 fragColour;
void main() {
  renderImage(fragColour, gl_FragCoord.xy - viewport.xy);
}
`,be=class{host;randomTexture=null;pseudoRNG;constructor(){let e={pipeline:{passes:[{name:"kore-sine",shaderDef:[de,me+Fe],blockDef:[],isQuad:!0,defines:new Map([["MODEL","0"],["RAND_TEX","1"]])},{name:"kore-breaking",shaderDef:[de,me+Fe],blockDef:[],isQuad:!0,defines:new Map([["MODEL","1"],["RAND_TEX","1"]])}],library:{colourTable:ht}},canvasAA:!1,handlers:{onUpdate:this.update.bind(this),onResize:this.resize.bind(this),onInitialise:this.onInitialise.bind(this),onPassPreRender:this.onPassPreRender.bind(this)},views:Array.from(document.querySelectorAll(".kore")).map((t,r)=>(t.id.length===0&&(t.id="kore-"+r.toString()+"-gen"),t.hasAttribute("data-kore")||t.setAttribute("data-kore",pe),t)),viewDataFnc:t=>{let r=t.getAttribute("data-kore"),i;return r?i=JSON.parse(r.replace(/'/g,'"')):i=JSON.parse(pe),i},offscreen:!0};this.host=new Y(e),this.host.start(),this.pseudoRNG=new Q(13375),this.generateMapTexture(1024,1024,window.devicePixelRatio),console.log(this.pseudoRNG)}onInitialise(e){for(let t of e.multipleViews??[]){let r={model:{type:"int",value:0,min:0,max:2,step:1},...J.extractControls(e.passes[0].shaderDef[1])};t[1].control=new K(t[1].div,r,(t[1].div.getAttribute("data-kore")??pe).replace(/'/g,'"'),i=>{t[1].data=JSON.parse(i.replace(/'/g,'"'))},i=>{this.host.captureView(t[1],i)})}}onPassPreRender(e){let t=this.host.context;t.activeTexture(t.TEXTURE0+2),t.bindTexture(t.TEXTURE_2D,this.randomTexture)}update(e,t){}resize(e,t){}texWidth=0;texHeight=0;generateRandTexture(e,t,r,i){e=Math.round(e),t=Math.round(t);let o=new Uint8Array(e*t);for(let s=0;s<o.length;s++)o[s]=this.pseudoRNG.next()*255.999;let a=this.host.context;if(i||(i=a.createTexture()),i==null)throw new Error("tex is null");return a.activeTexture(a.TEXTURE0+r),a.bindTexture(a.TEXTURE_2D,i),a.pixelStorei(a.UNPACK_ALIGNMENT,1),a.texImage2D(a.TEXTURE_2D,0,a.R8,e,t,0,a.RED,a.UNSIGNED_BYTE,o),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.REPEAT),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST),i}generateMapTexture(e,t,r){e=Math.round(e),t=Math.round(t),(e!==this.texWidth||t!==this.texHeight)&&this.host.context&&(console.log("w:",e,"h:",t),this.randomTexture=this.generateRandTexture(e,t,2,this.randomTexture),this.texWidth=e,this.texHeight=t)}},gt=()=>{let n=new be;ye(n)};window.addEventListener("DOMContentLoaded",gt);export{be as Kore};
