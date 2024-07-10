var ee=Math.PI,Ce=2*ee,Te=ee/2;function I(r,e,t=1e-6){return Math.abs(r-e)<t}function z(r,e,t){return r<e?e:r>t?t:r}var k=class r extends Float32Array{static size=2;constructor(e,t){super(r.size),this.set(e??0,t??(typeof e=="number"?e:void 0))}static create(){return new r}clone(){return new r(this)}put(e,t){return this[0]=e,this[1]=t,this}set(e,t){return typeof e=="number"?(this[0]=e,this[1]=t??0):super.set(e),this}static set(e,t,i){return e[0]=t,e[1]=i,e}copy(e){return this.set(e),this}static copy(e,t){return e.set(t),e}add(e){return this[0]+=e[0],this[1]+=e[1],this}static add(e,t,i){return i=i??new r,i[0]=e[0]+t[0],i[1]=e[1]+t[1],i}addScalar(e){return this[0]+=e,this[1]+=e,this}static addScalar(e,t,i){return i=i??new r,i[0]=e[0]+t,i[1]=e[1]+t,i}addScaled(e,t){return this[0]+=e[0]*t,this[1]+=e[1]*t,this}static addScaled(e,t,i,n){return n=n??new r,n[0]=e[0]+t[0]*i,n[1]=e[1]+t[1]*i,n}sub(e){return this[0]-=e[0],this[1]-=e[1],this}static sub(e,t,i){return i=i??new r,i[0]=e[0]-t[0],i[1]=e[1]-t[1],i}subScalar(e){return this[0]-=e,this[1]-=e,this}static subScalar(e,t,i){return i=i??new r,i[0]-=t,i[1]-=t,i}mul(e){return this[0]*=e[0],this[1]*=e[1],this}static mul(e,t,i){return i=i??new r,i[0]=e[0]*t[0],i[1]=e[1]*t[1],i}mulScalar(e){return this[0]*=e,this[1]*=e,this}static mulScalar(e,t,i){return i=i??new r,i[0]=e[0]*t,i[1]=e[1]*t,i}div(e){return this[0]/=e[0],this[1]/=e[1],this}static div(e,t,i){return i=i??new r,i[0]=e[0]/t[0],i[1]=e[1]/t[1],i}divScalar(e){return this[0]/=e,this[1]/=e,this}static divScalar(e,t,i){return i=i??new r,i[0]=e[0]/t,i[1]=e[1]/t,i}dot(e){return this.x*e[0]+this.y*e[1]}static dot(e,t){return e[0]*t[0]+e[1]*t[1]}static perp(e){return new r(-e.y,e.x)}dotScalar(e,t){return this.x*e+this.y*t}static dotScalar(e,t,i){return e[0]*t+e[1]*i}normalise(){return this.mulScalar(1/this.len)}static normalise(e){if(Array.isArray(e)||e instanceof Float32Array){let t=1/r.len(e);return e[0]*=t,e[1]*=t,e}else if(e instanceof r)return e.mulScalar(1/e.len)}static kross(e,t){return e[0]*t[1]-e[1]*t[0]}static reflect(e,t){let i=2*r.dot(e,t),n=r.mulScalar(t,i);return r.sub(e,n)}clamp(e,t){return this.x=z(this.x,e,t),this.y=z(this.x,e,t),this}apply(e){return this.x=e(this.x),this.y=e(this.y),this}static distSq(e,t){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}static dist(e,t){return Math.sqrt(r.distSq(e,t))}lenSq(){return this.dot(this)}static lenSq(e){return r.dot(e,e)}get len(){return Math.sqrt(this.lenSq())}static len(e){return Math.sqrt(r.dot(e,e))}invert(){return this.x=1/this.x,this.y=1/this.y,this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}};var E=class r extends Float32Array{static size=3;constructor(e,t,i){super(r.size),this.set(e??0,t,i)}static fromBuffer(e,t){return new Float32Array(e,t,3)}static create(){return new r}clone(){return new r(this)}put(e,t,i){return this[0]=e,this[1]=t,this[2]=i,this}set(e,t,i){return typeof e=="number"?(this[0]=e,this[1]=t??0,this[2]=i??0):super.set(e),this}static set(e,t,i,n){return e[0]=t,e[1]=i,e[2]=n,e}copy(e){return this.set(e),this}static copy(e,t){return e.set(t),e}add(e){return this[0]+=e[0],this[1]+=e[1],this[2]+=e[2],this}static add(e,t,i){return i=i??new r,i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i}addScalar(e){return this[0]+=e,this[1]+=e,this[2]+=e,this}static addScalar(e,t,i){return i=i??new r,i[0]=e[0]+t,i[1]=e[1]+t,i[2]=e[2]+t,i}sub(e){return this[0]-=e[0],this[1]-=e[1],this[2]-=e[2],this}static sub(e,t,i){return i=i??new r,i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}subScalar(e){return this[0]-=e,this[1]-=e,this[2]-=e,this}static subScalar(e,t,i){return i=i??new r,i[0]-=t,i[1]-=t,i[2]-=t,i}mul(e){return this[0]*=e[0],this[1]*=e[1],this[2]*=e[2],this}static mul(e,t,i){return i=i??new r,i[0]=e[0]*t[0],i[1]=e[1]*t[1],i[2]=e[2]*t[2],i}mulScalar(e){return this[0]*=e,this[1]*=e,this[2]*=e,this}static mulScalar(e,t,i){return i=i??new r,i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i}div(e){return this[0]/=e[0],this[1]/=e[1],this[2]/=e[2],this}static div(e,t,i){return i=i??new r,i[0]=e[0]/t[0],i[1]=e[1]/t[1],i[2]=e[2]/t[2],i}divScalar(e){return this[0]/=e,this[1]/=e,this[2]/=e,this}static divScalar(e,t,i){return i=i??new r,i[0]=e[0]/t,i[1]=e[1]/t,i[2]=e[2]/t,i}dot(e){return this.x*e[0]+this.y*e[1]+this.z*e[2]}static dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}dotScalar(e,t,i){return this.x*e+this.y*t+this.z*i}static dotScalar(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}normalise(){return this.mulScalar(1/this.len())}static normalise(e){if(Array.isArray(e)||e instanceof Float32Array){let t=1/r.len(e);for(let i=0;i!==3;++i)e[i]*=t;return e}else if(e instanceof r)return e.mulScalar(1/e.len())}cross(e){let t=this.x,i=this.y,n=this.z;return this.x=i*e[2]-n*e[1],this.y=n*e[0]-t*e[2],this.z=t*e[1]-i*e[0],this}static cross(e,t,i){return i=i??new r,i[0]=e[1]*t[2]-e[2]*t[1],i[1]=e[2]*t[0]-e[0]*t[2],i[2]=e[0]*t[1]-e[1]*t[0],i}static crossF(e,t,i,n){e[t]=i[1]*n[2]-i[2]*n[1],e[t+1]=i[2]*n[0]-i[0]*n[2],e[t+2]=i[0]*n[1]-i[1]*n[0]}lenSq(){return this.dot(this)}static lenSq(e){return r.dot(e,e)}len(){return Math.sqrt(this.lenSq())}static len(e){return Math.sqrt(r.dot(e,e))}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}};var S=["position","texcoord0","normal","binormal","tangent","colour"];function he(r){return r instanceof Uint32Array?WebGL2RenderingContext.UNSIGNED_INT:r instanceof Uint16Array?WebGL2RenderingContext.UNSIGNED_SHORT:r instanceof Uint8Array?WebGL2RenderingContext.UNSIGNED_BYTE:WebGL2RenderingContext.UNSIGNED_INT}var D=class{gl_;vao_;dataBuffers_;buffers_;bindData_;indexBuffer_;indexData_;indexType_;primitive_=WebGL2RenderingContext.TRIANGLES;count_=0;constructor(e){this.gl_=e,this.vao_=this.gl_.createVertexArray(),this.dataBuffers_=[],this.buffers_=[],this.bindData_=[]}dispose(){let e=this.gl_;e.deleteVertexArray(this.vao_),this.buffers_.forEach(t=>{e.deleteBuffer(t)}),e.deleteBuffer(this.indexBuffer_??null)}set primitive(e){this.primitive_=e}get primitive(){return this.primitive_}set count(e){this.count_=e}get count(){return this.count_}getBuffer(e){return typeof e=="number"?this.dataBuffers_[e]:this.dataBuffers_[S.indexOf(e)]}getIndex(e){return S.indexOf(e)}updateAttribute(e,t,i){let n=this.gl_;this.bind(),n.bindBuffer(n.ARRAY_BUFFER,this.buffers_[e]),n.bufferSubData(n.ARRAY_BUFFER,4*(t??0),t!=null?this.dataBuffers_[e].slice(t,i!=null?t+i:void 0):this.dataBuffers_[e]),this.release()}addAttribute(e,t,i){let n=S.indexOf(e);if(n!==-1){let s=this.gl_;return this.dataBuffers_[n]=t,this.buffers_[n]==null&&(this.buffers_[n]=s.createBuffer()),this.bindData_[n]=i,s.bindVertexArray(this.vao_),s.bindBuffer(s.ARRAY_BUFFER,this.buffers_[n]),s.bufferData(s.ARRAY_BUFFER,t,i.usage??s.STATIC_DRAW),s.vertexAttribPointer(n,i.size,i.type??s.FLOAT,i.normalised??!1,i.stride??0,i.offset??0),s.enableVertexAttribArray(n),s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),!0}else console.error("Could not find attribute:",e);return!1}getAttribute(e){let t=S.indexOf(e);return t!==-1?this.bindData_[t]:null}addIndex(e,t){let i=this.gl_;this.indexData_=e,this.indexType_=he(e),i.bindVertexArray(this.vao_),this.indexBuffer_==null&&(this.indexBuffer_=i.createBuffer()),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.indexBuffer_),i.bufferData(i.ELEMENT_ARRAY_BUFFER,e,t),i.bindVertexArray(null),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,null)}bind(){this.gl_.bindVertexArray(this.vao_)}release(){this.gl_.bindVertexArray(null)}draw(e,t){let i=this.gl_;i.bindVertexArray(this.vao_),this.indexBuffer_!=null?i.drawElements(this.primitive,e??this.count,this.indexType_,t??0):i.drawArrays(this.primitive,t??0,e??this.count_),i.bindVertexArray(null)}};function te(r){let e=new D(r),t=new Float32Array([-1,3,-1,-1,3,-1]);return e.addAttribute("position",t,{size:2,type:r.FLOAT,normalised:!1,stride:0,offset:0,usage:r.STATIC_DRAW}),e.primitive=r.TRIANGLES,e.count=3,e}function ie(r,e,t){let i=[[e,r.VERTEX_SHADER,"vertex"],[t,r.FRAGMENT_SHADER,"fragment"]],n=[],s=r.createProgram();if(s==null)return"Failed to create shader program";for(let o=0;o!==i.length;++o){let l=r.createShader(i[o][1]);if(l==null)return`Failed to create ${i[o][2]} shader`;let b=i[o][0];if(b.includes("#version")||(console.log("inserting version"),b=`#version 300 es
${b}`),r.shaderSource(l,b),r.compileShader(l),r.getShaderParameter(l,r.COMPILE_STATUS)===!0)n.push(l),r.attachShader(s,l);else{n.forEach(c=>{r.deleteShader(c)});let p=r.getShaderInfoLog(l)??"unknown";return`Failed to create ${i[o][2]} shader with error:
${p}`}}if(r.linkProgram(s),n.forEach(o=>{r.deleteShader(o)}),r.getProgramParameter(s,r.LINK_STATUS)===!0)return s;{let o=r.getProgramInfoLog(s)??"unknown";return r.deleteProgram(s),`Failed to create program with error:
${o}`}}var re=`#version 300 es
precision highp float;in vec2 position;out vec2 uv;void main(){gl_Position=vec4(position,0.0,1.0);uv=position*.5+.5;}`;var ne=`#version 300 es
precision highp float;precision highp usampler2D;precision highp sampler2D;
#define MASK 255
#define PI 3.14159265
#define LOG_HALF -0.693147
in vec2 uv;out vec4 fragColour;layout(std140)uniform ShaderData{vec4 backgroundColour;vec4 sandColour;vec4 dataVector0;vec4 dataVector1;};
#define sand sandColour.rgb
#define background backgroundColour.rgb
#define amplitude dataVector0.x
#define threshold dataVector0.y
#define variance dataVector0.z
#define normalScale dataVector0.w
#define lightX dataVector1.x
#define lightY dataVector1.y
#define lightZ dataVector1.z
#define speed dataVector1.w
uniform sampler2D wholeTexture;uniform vec3 resolution;uniform float time;
#define sandLow max(sandColour.rgb - vec3(.1), vec3(0.))
#define backgroundLow max(backgroundColour.rgb - vec3(.1), vec3(0.))
#define baseUnit resolution.z
float gammacorrect(float gamma,float x){return pow(x,1./gamma);}float bias(float b,float x){return pow(x,log(b)/LOG_HALF);}float gain(float g,float x){return mix(bias(1.-g,2.*x)/2.,1.-bias(1.-g,2.-2.*x)/2.,step(.5,x));}vec3 rgb2hsv(vec3 c){vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y);float e=1.0e-10;return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)),d/(q.x+e),q.x);}vec3 hsv2rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}float random(vec2 st){return texture(wholeTexture,st).r;}
#define SINE_WAVE
#if defined(SINE_WAVE)
float computePosition(vec2 centre,vec2 coords){float d=length(centre-coords);float p=5./baseUnit*d+mod(-speed*time,2.*PI);float damper=gain(0.8,smoothstep(baseUnit,baseUnit*2.,d));float s=damper*amplitude*sin(p);return s;}
#elif defined(GAUSSIAN)
float computePosition(vec2 centre,vec2 coords){float d=length(centre-coords);float a=10.;float b=300.;float c=80.;float disp=d-b;float s=a*exp(-(disp*disp)/(2.*c*c));float r=900.;float disp2=d-r;float g=a*exp(-(disp2*disp2)/(2.*c*c));return(s+g)/2.;}
#elif defined(BREAKING)
float computePosition(vec2 centre,vec2 coords){float a=-0.0001;float b=0.0;float c=0.0;vec2 transformedCoords=coords-centre;float quadraticY=a*pow(transformedCoords.x,2.)+b*transformedCoords.x+c;float distance=abs(transformedCoords.y-quadraticY);float heightScale=100.0;float z=heightScale*(10.0-distance);return max(z,0.0);}
#endif
vec3 computeSandColour(vec2 uv,vec3 N,float h){float r1=random(uv);float r2=random(uv.yx+time);vec3 L=normalize(vec3(lightX,lightY,lightZ));float ld=max(dot(N,L),0.);vec3 sandC=mix(mix(sand,sandLow,fract(r1+.1*r2)),mix(sand,background,variance*r2),fract(r1+h));vec3 C=mix(sandC,background,bias(threshold,ld));return C;}vec3 computeNormal(vec2 uv,vec2 invRes,vec2 centre){vec2 offset=vec2(1.,0.);float hL=computePosition(centre,uv-offset.xy);float hR=computePosition(centre,uv+offset.xy);float hD=computePosition(centre,uv-offset.yx);float hU=computePosition(centre,uv+offset.yx);vec3 N;N.x=hL-hR;N.y=hD-hU;N.z=normalScale;return normalize(N);}void main(){vec2 centre=resolution.xy/2.;vec2 invRes=1./resolution.xy;float h=computePosition(centre,gl_FragCoord.xy);float dhdx=dFdx(h);float dhdy=dFdy(h);vec3 N=normalize(vec3(-dhdx,-dhdy,normalScale));vec3 outColour=computeSandColour(uv,N,h*.5+.5);fragColour=vec4(outColour,1.);}`;var M=class r extends Float32Array{static size=9;constructor(){super(r.size)}static create(e){let t=new r;return e!=null&&t.set(e),t}static idx(e,t){return 3*t+e}static set(e,t,i,n){e[r.idx(t,i)]=n}static get(e,t,i){return e[r.idx(t,i)]}static fromMat4Rotation(e){let t=r.create();return r.setColumn(t,0,w.getColumn(e,0)),r.setColumn(t,1,w.getColumn(e,1)),r.setColumn(t,2,w.getColumn(e,2)),t}copyMat4Rotation(e){return r.setColumn(this,0,w.getColumn(e,0)),r.setColumn(this,1,w.getColumn(e,1)),r.setColumn(this,2,w.getColumn(e,2)),this}static getColumn(e,t){return[e[r.idx(0,t)],e[r.idx(1,t)],e[r.idx(2,t)]]}static setColumn(e,t,i){e[r.idx(0,t)]=i[0],e[r.idx(1,t)]=i[1],e[r.idx(2,t)]=i[2]??(t===2?1:0)}static makeTranslation(e,t){let i=r.makeIdentity();return i[r.idx(0,2)]=e,i[r.idx(1,2)]=t,i}static translate(e,t,i){if(typeof i=="number")e[r.idx(0,2)]=t,e[r.idx(1,2)]=i;else{let n=t;e[r.idx(0,2)]=n[0],e[r.idx(1,2)]=n[1]}return e}static makeIdentity(){let e=r.create();return e[r.idx(0,0)]=1,e[r.idx(1,1)]=1,e[r.idx(2,2)]=1,e}static makeRotation(e){let[t,i]=[Math.cos(e),Math.sin(e)],n=r.create();return r.set(n,0,0,t),r.set(n,0,1,-i),r.set(n,1,0,i),r.set(n,1,1,t),r.set(n,2,2,1),n}static rotate(e,t){let[i,n]=[Math.cos(t),Math.sin(t)];return r.set(e,0,0,i),r.set(e,0,1,-n),r.set(e,1,0,n),r.set(e,1,1,i),r.set(e,2,2,1),e}static makeScale(e){let t=r.create();return r.set(t,0,0,e[0]),r.set(t,1,1,e[1]),r.set(t,2,2,1),t}static scale(e,t){return r.set(e,0,0,t[0]),r.set(e,1,1,t[1]),r.set(e,2,2,1),e}static scaleBy(e,t){return r.set(e,0,0,r.get(e,0,0)*t[0]),r.set(e,0,1,r.get(e,0,1)*t[1]),r.set(e,1,0,r.get(e,1,0)*t[0]),r.set(e,1,1,r.get(e,1,1)*t[1]),e}static makeTransform(e,t,i){let n=r.create();return r.set(n,0,0,t[0]*Math.cos(i)),r.set(n,0,1,-t[1]*Math.sin(i)),r.set(n,1,0,t[0]*Math.sin(i)),r.set(n,1,1,t[1]*Math.cos(i)),r.set(n,0,2,e[0]),r.set(n,1,2,e[1]),r.set(n,2,2,1),n}mul2(e){let t=e[0],i=e[1];return e[0]=r.get(this,0,0)*t+r.get(this,0,1)*i,e[1]=r.get(this,1,0)*t+r.get(this,1,1)*i,e}transform2(e){let t=e[0],i=e[1];return e[0]=r.get(this,0,0)*t+r.get(this,0,1)*i+r.get(this,0,2),e[1]=r.get(this,1,0)*t+r.get(this,1,1)*i+r.get(this,1,2),e}static transform2(e,t,i,n){let s=t[0],o=t[1],l=n??0;return i[l]=r.get(e,0,0)*s+r.get(e,0,1)*o+r.get(e,0,2),i[l+1]=r.get(e,1,0)*s+r.get(e,1,1)*o+r.get(e,1,2),i}static mul(e,t,i){return r.set(e,0,0,r.get(t,0,0)*r.get(i,0,0)+r.get(t,0,1)*r.get(i,1,0)+r.get(t,0,2)*r.get(i,2,0)),r.set(e,0,1,r.get(t,0,0)*r.get(i,0,1)+r.get(t,0,1)*r.get(i,1,1)+r.get(t,0,2)*r.get(i,2,1)),r.set(e,0,2,r.get(t,0,0)*r.get(i,0,2)+r.get(t,0,1)*r.get(i,1,2)+r.get(t,0,2)*r.get(i,2,2)),r.set(e,1,0,r.get(t,1,0)*r.get(i,0,0)+r.get(t,1,1)*r.get(i,1,0)+r.get(t,1,2)*r.get(i,2,0)),r.set(e,1,1,r.get(t,1,0)*r.get(i,0,1)+r.get(t,1,1)*r.get(i,1,1)+r.get(t,1,2)*r.get(i,2,1)),r.set(e,1,2,r.get(t,1,0)*r.get(i,0,2)+r.get(t,1,1)*r.get(i,1,2)+r.get(t,1,2)*r.get(i,2,2)),r.set(e,2,0,r.get(t,2,0)*r.get(i,0,0)+r.get(t,2,1)*r.get(i,1,0)+r.get(t,2,2)*r.get(i,2,0)),r.set(e,2,1,r.get(t,2,0)*r.get(i,0,1)+r.get(t,2,1)*r.get(i,1,1)+r.get(t,2,2)*r.get(i,2,1)),r.set(e,2,2,r.get(t,2,0)*r.get(i,0,2)+r.get(t,2,1)*r.get(i,1,2)+r.get(t,2,2)*r.get(i,2,2)),e}static inverse(e,t=1e-4){let i=r.create();i[0]=e[4]*e[8]-e[5]*e[7],i[1]=e[2]*e[7]-e[1]*e[8],i[2]=e[1]*e[5]-e[2]*e[4],i[3]=e[5]*e[6]-e[3]*e[8],i[4]=e[0]*e[8]-e[2]*e[6],i[5]=e[2]*e[3]-e[0]*e[5],i[6]=e[3]*e[7]-e[4]*e[6],i[7]=e[1]*e[6]-e[0]*e[7],i[8]=e[0]*e[4]-e[1]*e[3];let n=e[0]*i[0]+e[1]*i[3]+e[2]*i[6];if(Math.abs(n)>t){let s=1/n;return i[0]*=s,i[1]*=s,i[2]*=s,i[3]*=s,i[4]*=s,i[5]*=s,i[6]*=s,i[7]*=s,i[8]*=s,i}return r.create()}static transpose(e){let t=r.idx,i=e[t(0,1)];return e[t(0,1)]=e[t(1,0)],e[t(1,0)]=i,i=e[t(0,2)],e[t(0,2)]=e[t(2,0)],e[t(2,0)]=i,i=e[t(1,2)],e[t(1,2)]=e[t(2,1)],e[t(2,1)]=i,e}};var w=class r extends Float32Array{static size=16;constructor(){super(r.size)}static create(e){let t=new r;return e!=null&&t.set(e),t}static fromMat3(e){let t=r.makeIdentity();return r.set(t,0,0,M.get(e,0,0)),r.set(t,0,1,M.get(e,0,1)),r.set(t,0,3,M.get(e,0,2)),r.set(t,1,0,M.get(e,1,0)),r.set(t,1,1,M.get(e,1,1)),r.set(t,1,3,M.get(e,1,2)),t}static idx(e,t){return 4*t+e}static set(e,t,i,n){e[r.idx(t,i)]=n}static get(e,t,i){return e[r.idx(t,i)]}static makePerspective(e,t,i,n){let s=r.create(),o=Math.tan(e*Math.PI/360);return s[r.idx(0,0)]=1/(t*o),s[r.idx(1,1)]=1/o,s[r.idx(2,2)]=n/(i-n),s[r.idx(2,3)]=-(i*n)/(n-i),s[r.idx(3,2)]=-1,s}static getColumn(e,t){return[e[r.idx(0,t)],e[r.idx(1,t)],e[r.idx(2,t)],e[r.idx(3,t)]]}static setColumn(e,t,i){e[r.idx(0,t)]=i[0],e[r.idx(1,t)]=i[1],e[r.idx(2,t)]=i[2],e[r.idx(3,t)]=i[3]??(t===3?1:0)}static makeOrtho(e,t,i,n,s,o){let l=1/(e-t),b=1/(i-n),p=1/(s-o),c=r.create();return c[0]=-2*l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=-2*b,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=2*p,c[11]=0,c[12]=(e+t)*l,c[13]=(n+i)*b,c[14]=(o+s)*p,c[15]=1,c}static makeTranslation(e,t,i){let n=r.makeIdentity();return n[r.idx(0,3)]=e,n[r.idx(1,3)]=t,n[r.idx(2,3)]=i,n}static makeXAxisReflection(){let e=r.makeIdentity();return e[r.idx(0,0)]=-1,e}static makeYAxisReflection(){let e=r.makeIdentity();return e[r.idx(1,1)]=-1,e}static makeZAxisReflection(){let e=r.makeIdentity();return e[r.idx(2,2)]=-1,e}static translate(e,t,i,n){return e[r.idx(0,3)]=t,e[r.idx(1,3)]=i,e[r.idx(2,3)]=n,e}static makeIdentity(){let e=r.create();return e[r.idx(0,0)]=1,e[r.idx(1,1)]=1,e[r.idx(2,2)]=1,e[r.idx(3,3)]=1,e}static makeRotation(e,t){I(E.len(e),1)||(console.log("Warning, input axis to makeRotation should be unit length"),E.normalise(e));let[i,n,s]=[Math.cos(t),Math.sin(t),1-Math.cos(t)],[o,l,b]=[s*e[0],s*e[1],s*e[2]],[p,c,f]=[n*e[0],n*e[1],n*e[2]],[A,g,y]=[o*e[1],l*e[2],o*e[2]],m=r.create();return r.set(m,0,0,o*e[0]+i),r.set(m,0,1,A+f),r.set(m,0,2,y-c),r.set(m,1,0,A-f),r.set(m,1,1,l*e[1]+i),r.set(m,1,2,g+p),r.set(m,2,0,y+c),r.set(m,2,1,g-p),r.set(m,2,2,b*e[2]+i),r.set(m,3,3,1),m}static rotate(e,t,i){I(E.len(t),1)||(console.log("Warning, input axis to makeRotation should be unit length"),E.normalise(t));let[n,s,o]=[Math.cos(i),Math.sin(i),1-Math.cos(i)],[l,b,p]=[o*t[0],o*t[1],o*t[2]],[c,f,A]=[s*t[0],s*t[1],s*t[2]],[g,y,m]=[l*t[1],b*t[2],l*t[2]];return r.set(e,0,0,l*t[0]+n),r.set(e,0,1,g+A),r.set(e,0,2,m-f),r.set(e,1,0,g-A),r.set(e,1,1,b*t[1]+n),r.set(e,1,2,y+c),r.set(e,2,0,m+f),r.set(e,2,1,y-c),r.set(e,2,2,p*t[2]+n),e}static makeScale(e){let t=r.create();return r.set(t,0,0,e[0]),r.set(t,1,1,e[1]),r.set(t,2,2,e[2]),r.set(t,3,3,1),t}static scale(e,t){return r.set(e,0,0,t[0]),r.set(e,1,1,t[1]),r.set(e,2,2,t[2]),e}static makeTransform(e,t,i){let n=r.create();return r.rotate(n,[1,0,0],t[0]),r.rotate(n,[0,1,0],t[1]),r.rotate(n,[0,0,1],t[2]),r.scale(n,e),r.translate(n,i[0],i[1],i[2]),n}static mul(e,t,i){return r.set(e,0,0,r.get(t,0,0)*r.get(i,0,0)+r.get(t,0,1)*r.get(i,1,0)+r.get(t,0,2)*r.get(i,2,0)+r.get(t,0,3)*r.get(i,3,0)),r.set(e,0,1,r.get(t,0,0)*r.get(i,0,1)+r.get(t,0,1)*r.get(i,1,1)+r.get(t,0,2)*r.get(i,2,1)+r.get(t,0,3)*r.get(i,3,1)),r.set(e,0,2,r.get(t,0,0)*r.get(i,0,2)+r.get(t,0,1)*r.get(i,1,2)+r.get(t,0,2)*r.get(i,2,2)+r.get(t,0,3)*r.get(i,3,2)),r.set(e,0,3,r.get(t,0,0)*r.get(i,0,3)+r.get(t,0,1)*r.get(i,1,3)+r.get(t,0,2)*r.get(i,2,3)+r.get(t,0,3)*r.get(i,3,3)),r.set(e,1,0,r.get(t,1,0)*r.get(i,0,0)+r.get(t,1,1)*r.get(i,1,0)+r.get(t,1,2)*r.get(i,2,0)+r.get(t,1,3)*r.get(i,3,0)),r.set(e,1,1,r.get(t,1,0)*r.get(i,0,1)+r.get(t,1,1)*r.get(i,1,1)+r.get(t,1,2)*r.get(i,2,1)+r.get(t,1,3)*r.get(i,3,1)),r.set(e,1,2,r.get(t,1,0)*r.get(i,0,2)+r.get(t,1,1)*r.get(i,1,2)+r.get(t,1,2)*r.get(i,2,2)+r.get(t,1,3)*r.get(i,3,2)),r.set(e,1,3,r.get(t,1,0)*r.get(i,0,3)+r.get(t,1,1)*r.get(i,1,3)+r.get(t,1,2)*r.get(i,2,3)+r.get(t,1,3)*r.get(i,3,3)),r.set(e,2,0,r.get(t,2,0)*r.get(i,0,0)+r.get(t,2,1)*r.get(i,1,0)+r.get(t,2,2)*r.get(i,2,0)+r.get(t,2,3)*r.get(i,3,0)),r.set(e,2,1,r.get(t,2,0)*r.get(i,0,1)+r.get(t,2,1)*r.get(i,1,1)+r.get(t,2,2)*r.get(i,2,1)+r.get(t,2,3)*r.get(i,3,1)),r.set(e,2,2,r.get(t,2,0)*r.get(i,0,2)+r.get(t,2,1)*r.get(i,1,2)+r.get(t,2,2)*r.get(i,2,2)+r.get(t,2,3)*r.get(i,3,2)),r.set(e,2,3,r.get(t,2,0)*r.get(i,0,3)+r.get(t,2,1)*r.get(i,1,3)+r.get(t,2,2)*r.get(i,2,3)+r.get(t,2,3)*r.get(i,3,3)),r.set(e,3,0,r.get(t,3,0)*r.get(i,0,0)+r.get(t,3,1)*r.get(i,1,0)+r.get(t,3,2)*r.get(i,2,0)+r.get(t,3,3)*r.get(i,3,0)),r.set(e,3,1,r.get(t,3,0)*r.get(i,0,1)+r.get(t,3,1)*r.get(i,1,1)+r.get(t,3,2)*r.get(i,2,1)+r.get(t,3,3)*r.get(i,3,1)),r.set(e,3,2,r.get(t,3,0)*r.get(i,0,2)+r.get(t,3,1)*r.get(i,1,2)+r.get(t,3,2)*r.get(i,2,2)+r.get(t,3,3)*r.get(i,3,2)),r.set(e,3,3,r.get(t,3,0)*r.get(i,0,3)+r.get(t,3,1)*r.get(i,1,3)+r.get(t,3,2)*r.get(i,2,3)+r.get(t,3,3)*r.get(i,3,3)),e}static transform3(e,t){let i=t[0],n=t[1],s=t[2];return t[0]=r.get(e,0,0)*i+r.get(e,0,1)*n+r.get(e,0,2)*s+r.get(e,0,3),t[1]=r.get(e,1,0)*i+r.get(e,1,1)*n+r.get(e,1,2)*s+r.get(e,1,3),t[2]=r.get(e,2,0)*i+r.get(e,2,1)*n+r.get(e,2,2)*s+r.get(e,2,3),t}static mul3(e,t){let i=t[0],n=t[1],s=t[2];return t[0]=r.get(e,0,0)*i+r.get(e,0,1)*n+r.get(e,0,2)*s,t[1]=r.get(e,1,0)*i+r.get(e,1,1)*n+r.get(e,1,2)*s,t[2]=r.get(e,2,0)*i+r.get(e,2,1)*n+r.get(e,2,2)*s,t}static mul4(e,t){let i=t[0],n=t[1],s=t[2],o=t[3];return t[0]=r.get(e,0,0)*i+r.get(e,0,1)*n+r.get(e,0,2)*s+r.get(e,0,3)*o,t[1]=r.get(e,1,0)*i+r.get(e,1,1)*n+r.get(e,1,2)*s+r.get(e,1,3)*o,t[2]=r.get(e,2,0)*i+r.get(e,2,1)*n+r.get(e,2,2)*s+r.get(e,2,3)*o,t[3]=r.get(e,3,0)*i+r.get(e,3,1)*n+r.get(e,3,2)*s+r.get(e,3,3)*o,t}static inverse(e,t=.001){let i=e[0]*e[5]-e[1]*e[4],n=e[0]*e[6]-e[2]*e[4],s=e[0]*e[7]-e[3]*e[4],o=e[1]*e[6]-e[2]*e[5],l=e[1]*e[7]-e[3]*e[5],b=e[2]*e[7]-e[3]*e[6],p=e[8]*e[13]-e[9]*e[12],c=e[8]*e[14]-e[10]*e[12],f=e[8]*e[15]-e[11]*e[12],A=e[9]*e[14]-e[10]*e[13],g=e[9]*e[15]-e[11]*e[13],y=e[10]*e[15]-e[11]*e[14],m=i*y-n*g+s*A+o*f-l*c+b*p,h=r.create();if(Math.abs(m)<=t)return h;h[0]=+e[5]*y-e[6]*g+e[7]*A,h[4]=-e[4]*y+e[6]*f-e[7]*c,h[8]=+e[4]*g-e[5]*f+e[7]*p,h[12]=-e[4]*A+e[5]*c-e[6]*p,h[1]=-e[1]*y+e[2]*g-e[3]*A,h[5]=+e[0]*y-e[2]*f+e[3]*c,h[9]=-e[0]*g+e[1]*f-e[3]*p,h[13]=+e[0]*A-e[1]*c+e[2]*p,h[2]=+e[13]*b-e[14]*l+e[15]*o,h[6]=-e[12]*b+e[14]*s-e[15]*n,h[10]=+e[12]*l-e[13]*s+e[15]*i,h[14]=-e[12]*o+e[13]*n-e[14]*i,h[3]=-e[9]*b+e[10]*l-e[11]*o,h[7]=+e[8]*b-e[10]*s+e[11]*n,h[11]=-e[8]*l+e[9]*s-e[11]*i,h[15]=+e[8]*o-e[9]*n+e[10]*i;let u=1/m;return h[0]*=u,h[1]*=u,h[2]*=u,h[3]*=u,h[4]*=u,h[5]*=u,h[6]*=u,h[7]*=u,h[8]*=u,h[9]*=u,h[10]*=u,h[11]*=u,h[12]*=u,h[13]*=u,h[14]*=u,h[15]*=u,h}static transpose(e){let t=r.idx,i=e[t(0,1)];return e[t(0,1)]=e[t(1,0)],e[t(1,0)]=i,i=e[t(0,2)],e[t(0,2)]=e[t(2,0)],e[t(2,0)]=i,i=e[t(0,3)],e[t(0,3)]=e[t(3,0)],e[t(3,0)]=i,i=e[t(1,2)],e[t(1,2)]=e[t(2,1)],e[t(2,1)]=i,i=e[t(1,3)],e[t(1,3)]=e[t(3,1)],e[t(3,1)]=i,i=e[t(2,3)],e[t(2,3)]=e[t(3,2)],e[t(3,2)]=i,e}static lookAt(e,t,i=[0,1,0]){let n,s,o,l,b,p,c,f,A,g,y=e[0],m=e[1],h=e[2],u=i[0],d=i[1],L=i[2],T=t[0],B=t[1],_=t[2],U=1e-6;if(Math.abs(y-T)<U&&Math.abs(m-B)<U&&Math.abs(h-_)<U)return r.makeIdentity();let V=r.create();return c=y-T,f=m-B,A=h-_,g=1/Math.hypot(c,f,A),c*=g,f*=g,A*=g,n=d*A-L*f,s=L*c-u*A,o=u*f-d*c,g=Math.hypot(n,s,o),I(g,0)?(n=0,s=0,o=0):(g=1/g,n*=g,s*=g,o*=g),l=f*o-A*s,b=A*n-c*o,p=c*s-f*n,g=Math.hypot(l,b,p),I(g,0)?(l=0,b=0,p=0):(g=1/g,l*=g,b*=g,p*=g),V[0]=n,V[1]=l,V[2]=c,V[3]=0,V[4]=s,V[5]=b,V[6]=f,V[7]=0,V[8]=o,V[9]=p,V[10]=A,V[11]=0,V[12]=-(n*y+s*m+o*h),V[13]=-(l*y+b*m+p*h),V[14]=-(c*y+f*m+A*h),V[15]=1,V}static makePlaneProjection(e,t,i){let n=r.create(),s=-E.dot(e,t),o=E.dot(e,i);return n[0]=o+s-i[0]*e[0],n[1]=-i[1]*e[0],n[2]=-i[2]*e[0],n[3]=-e[0],n[4]=-i[0]*e[1],n[5]=o+s-i[1]*e[1],n[6]=-i[2]*e[1],n[7]=-e[1],n[8]=-i[0]*e[2],n[9]=-i[1]*e[2],n[10]=o+s-i[2]*e[2],n[11]=-e[2],n[12]=-i[0]*s,n[13]=-i[1]*s,n[14]=-i[2]*s,n[15]=o,n}};var G=class r extends Float32Array{static size=4;constructor(){super(r.size)}static create(e){let t=new Float32Array(r.size);return e!=null&&t.set(e),t}static idx(e,t){return 2*t+e}static set(e,t,i,n){e[r.idx(t,i)]=n}static get(e,t,i){return e[r.idx(t,i)]}static transform2(e,t,i){return k.set(t,r.get(e,0,0)*i[0]+r.get(e,0,1)*i[1],r.get(e,1,0)*i[0]+r.get(e,1,1)*i[1]),t}static makeIdentity(){let e=r.create();return e[r.idx(0,0)]=1,e[r.idx(1,1)]=1,e}static makeRotation(e){let[t,i]=[Math.cos(e),Math.sin(e)],n=r.create();return r.set(n,0,0,t),r.set(n,0,1,-i),r.set(n,1,0,i),r.set(n,1,1,t),n}static rotate(e,t){let[i,n]=[Math.cos(t),Math.sin(t)];return r.set(e,0,0,i),r.set(e,0,1,-n),r.set(e,1,0,n),r.set(e,1,1,i),e}static makeScale(e){let t=r.create();return r.set(t,0,0,e[0]),r.set(t,1,1,e[1]),t}static mul(e,t,i){return r.set(e,0,0,r.get(t,0,0)*r.get(i,0,0)+r.get(t,0,1)*r.get(i,1,0)),r.set(e,0,1,r.get(t,0,0)*r.get(i,0,1)+r.get(t,0,1)*r.get(i,1,1)),r.set(e,1,0,r.get(t,1,0)*r.get(i,0,0)+r.get(t,1,1)*r.get(i,1,0)),r.set(e,1,1,r.get(t,1,0)*r.get(i,0,1)+r.get(t,1,1)*r.get(i,1,1)),e}static inverse(e,t=1e-4){let i=r.create(),n=e[0]*e[3]-e[1]*e[2];if(Math.abs(n)>t){let s=1/n;i[0]=e[3]*s,i[1]=-e[1]*s,i[2]=-e[2]*s,i[3]=e[0]*s}else i.fill(0);return i}};var O=class r extends Float32Array{static size=4;constructor(e,t,i,n){super(r.size),this.set(e??0,t,i,n)}static create(){return new r}clone(){return new r(this)}put(e,t,i,n){return this[0]=e,this[1]=t,this[2]=i,this[3]=n,this}set(e,t,i,n){return typeof e=="number"?(this[0]=e,this[1]=t??0,this[2]=i??0,this[3]=n??0):super.set(e),this}static set(e,t,i,n,s){return e[0]=t,e[1]=i,e[2]=n,e[3]=s,e}copy(e){return this.set(e),this}static copy(e,t){return e.set(t),e}add(e){return this[0]+=e[0],this[1]+=e[1],this[2]+=e[2],this[3]+=e[3],this}static add(e,t,i){return i=i??new r,i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i[3]=e[3]+t[3],i}addScalar(e){return this[0]+=e,this[1]+=e,this[2]+=e,this[3]+=e,this}static addScalar(e,t,i){return i=i??new r,i[0]=e[0]+t,i[1]=e[1]+t,i[2]=e[2]+t,i[3]=e[3]+t,i}sub(e){return this[0]-=e[0],this[1]-=e[1],this[2]-=e[2],this[3]-=e[3],this}static sub(e,t,i){return i=i??new r,i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i[3]=e[3]-t[3],i}subScalar(e){return this[0]-=e,this[1]-=e,this[2]-=e,this[3]-=e,this}static subScalar(e,t,i){return i=i??new r,i[0]-=t,i[1]-=t,i[2]-=t,i[3]-=t,i}mul(e){return this[0]*=e[0],this[1]*=e[1],this[2]*=e[2],this[3]*=e[3],this}static mul(e,t,i){return i=i??new r,i[0]=e[0]*t[0],i[1]=e[1]*t[1],i[2]=e[2]*t[2],i[3]=e[3]*t[3],i}mulScalar(e){return this[0]*=e,this[1]*=e,this[2]*=e,this[3]*=e,this}static mulScalar(e,t,i){return i=i??new r,i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i[3]=e[3]*t,i}div(e){return this[0]/=e[0],this[1]/=e[1],this[2]/=e[2],this[3]/=e[3],this}static div(e,t,i){return i=i??new r,i[0]=e[0]/t[0],i[1]=e[1]/t[1],i[2]=e[2]/t[2],i[3]=e[3]/t[3],i}divScalar(e){return this[0]/=e,this[1]/=e,this[2]/=e,this[3]/=e,this}static divScalar(e,t,i){return i=i??new r,i[0]=e[0]/t,i[1]=e[1]/t,i[2]=e[2]/t,i[3]=e[3]/t,i}dot(e){return this.x*e[0]+this.y*e[1]+this.z*e[2]+this.w*e[3]}static dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}dotScalar(e,t,i,n){return this.x*e+this.y*t+this.z*i+this.w*n}static dotScalar(e,t,i,n,s){return e[0]*t+e[1]*i+e[2]*n+e[3]*s}normalise(){return this.mulScalar(1/this.len())}static normalise(e){if(Array.isArray(e)||e instanceof Float32Array){let t=1/r.len(e);for(let i=0;i!==4;++i)e[i]*=t;return e}else if(e instanceof r)return e.mulScalar(1/e.len())}lenSq(){return this.dot(this)}static lenSq(e){return r.dot(e,e)}len(){return Math.sqrt(this.lenSq())}static len(e){return Math.sqrt(r.dot(e,e))}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get w(){return this[3]}set w(e){this[3]=e}};var x=(a=>(a[a.NONE=0]="NONE",a[a.BOOL=WebGL2RenderingContext.BOOL]="BOOL",a[a.UBYTE=WebGL2RenderingContext.UNSIGNED_BYTE]="UBYTE",a[a.BYTE=WebGL2RenderingContext.BYTE]="BYTE",a[a.USHORT=WebGL2RenderingContext.UNSIGNED_SHORT]="USHORT",a[a.SHORT=WebGL2RenderingContext.SHORT]="SHORT",a[a.UINT=WebGL2RenderingContext.UNSIGNED_INT]="UINT",a[a.INT=WebGL2RenderingContext.INT]="INT",a[a.HALF_FLOAT=WebGL2RenderingContext.HALF_FLOAT]="HALF_FLOAT",a[a.FLOAT=WebGL2RenderingContext.FLOAT]="FLOAT",a[a.VEC2=WebGL2RenderingContext.FLOAT_VEC2]="VEC2",a[a.VEC3=WebGL2RenderingContext.FLOAT_VEC3]="VEC3",a[a.VEC4=WebGL2RenderingContext.FLOAT_VEC4]="VEC4",a[a.IVEC2=WebGL2RenderingContext.INT_VEC2]="IVEC2",a[a.IVEC3=WebGL2RenderingContext.INT_VEC3]="IVEC3",a[a.IVEC4=WebGL2RenderingContext.INT_VEC4]="IVEC4",a[a.MAT2=WebGL2RenderingContext.FLOAT_MAT2]="MAT2",a[a.MAT3=WebGL2RenderingContext.FLOAT_MAT3]="MAT3",a[a.MAT4=WebGL2RenderingContext.FLOAT_MAT4]="MAT4",a[a.SAMPLER_2D=WebGL2RenderingContext.SAMPLER_2D]="SAMPLER_2D",a[a.SAMPLER_3D=WebGL2RenderingContext.SAMPLER_3D]="SAMPLER_3D",a[a.SAMPLER_CUBE=WebGL2RenderingContext.SAMPLER_CUBE]="SAMPLER_CUBE",a[a.ISAMPLER_2D=WebGL2RenderingContext.INT_SAMPLER_2D]="ISAMPLER_2D",a[a.ISAMPLER_3D=WebGL2RenderingContext.INT_SAMPLER_3D]="ISAMPLER_3D",a[a.ISAMPLER_CUBE=WebGL2RenderingContext.INT_SAMPLER_CUBE]="ISAMPLER_CUBE",a[a.UISAMPLER_2D=WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_2D]="UISAMPLER_2D",a[a.UISAMPLER_3D=WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_3D]="UISAMPLER_3D",a[a.UISAMPLER_CUBE=WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_CUBE]="UISAMPLER_CUBE",a))(x||{});function pe(r,e){let{dataType:t,location:i,value:n,count:s}=e;if(i===-1)return!1;switch(t){case x.BOOL:case x.BYTE:case x.INT:case x.SHORT:case x.SAMPLER_2D:case x.SAMPLER_3D:case x.SAMPLER_CUBE:case x.ISAMPLER_2D:case x.ISAMPLER_3D:case x.ISAMPLER_CUBE:case x.UISAMPLER_2D:case x.UISAMPLER_3D:case x.UISAMPLER_CUBE:s===void 0||s<2?r.uniform1i(i,n):r.uniform1iv(i,new Int32Array(n));break;case x.FLOAT:case x.HALF_FLOAT:r.uniform1f(i,n);break;case x.UBYTE:case x.UINT:case x.USHORT:r.uniform1ui(i,n);break;case x.VEC2:r.uniform2fv(i,n);break;case x.VEC3:r.uniform3fv(i,n);break;case x.VEC4:r.uniform4fv(i,n);break;case x.IVEC2:r.uniform2iv(i,n);break;case x.IVEC3:r.uniform3iv(i,n);break;case x.IVEC4:r.uniform4iv(i,n);break;case x.MAT2:r.uniformMatrix2fv(i,!1,n);break;case x.MAT3:r.uniformMatrix3fv(i,!1,n);break;case x.MAT4:r.uniformMatrix4fv(i,!1,n);break;case 0:default:return console.warn("Unrecognised uniform data type"),!1}return!0}function $(r,e){let t=Object.keys(e);for(let i=0;i!==t.length;++i)pe(r,e[t[i]])||console.warn("Failed to bind uniform:",t[i])}function ge(r){return r?.name.startsWith("gl_")??r?.name.startsWith("webgl_")??!1}function fe(r){switch(r){case WebGL2RenderingContext.FLOAT:return 0;case WebGL2RenderingContext.FLOAT_VEC2:return k.create();case WebGL2RenderingContext.FLOAT_VEC3:return E.create();case WebGL2RenderingContext.FLOAT_VEC4:return O.create();case WebGL2RenderingContext.FLOAT_MAT2:return G.create();case WebGL2RenderingContext.FLOAT_MAT3:return M.create();case WebGL2RenderingContext.FLOAT_MAT4:return w.create();case WebGL2RenderingContext.INT:return 0;case WebGL2RenderingContext.SAMPLER_2D:return 0;case WebGL2RenderingContext.SAMPLER_3D:return 0;case WebGL2RenderingContext.SAMPLER_CUBE:return 0;default:return null}}function se(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_UNIFORMS);for(let n=0;n!==i;++n){let s=r.getActiveUniform(e,n);if(ge(s)){console.log("builtin:",s);continue}if(s==null)continue;let{name:o,type:l,size:b}=s;t[o]={value:fe(l),location:r.getUniformLocation(e,o),dataType:l,count:b}}return t}function oe(r,e){let t=r.getProgramParameter(e,r.ACTIVE_UNIFORM_BLOCKS),i={};for(let n=0;n<t;++n){let s=r.getActiveUniformBlockName(e,n);s&&(i[s]=r.getUniformBlockIndex(e,s))}return i}var C=class r{constructor(e,t,i,n,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),r.nextNameID=r.nextNameID||0,this.$name.id=`lil-gui-name-${++r.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Y=class extends C{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function H(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var me={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:H,toHexString:H},N={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Ae={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){let i=N.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([r,e,t],i=1){i=255/i;let n=r*i<<16^e*i<<8^t*i<<0;return N.toHexString(n)}},xe={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){let i=N.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r,g:e,b:t},i=1){i=255/i;let n=r*i<<16^e*i<<8^t*i<<0;return N.toHexString(n)}},ye=[me,N,Ae,xe];function ve(r){return ye.find(e=>e.match(r))}var q=class extends C{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ve(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let s=H(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},P=class extends C{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},X=class extends C{constructor(e,t,i,n,s,o){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(s);let l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},i=d=>{let L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+d),this.$input.value=this.getValue())},n=d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d)*-1))},s=d=>{this._inputFocused&&(d.preventDefault(),i(this._step*this._normalizeMouseWheel(d)))},o=!1,l,b,p,c,f,A=5,g=d=>{l=d.clientX,b=p=d.clientY,o=!0,c=this.getValue(),f=0,window.addEventListener("mousemove",y),window.addEventListener("mouseup",m)},y=d=>{if(o){let L=d.clientX-l,T=d.clientY-b;Math.abs(T)>A?(d.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>A&&m()}if(!o){let L=d.clientY-p;f-=L*this._step*this._arrowKeyMultiplier(d),c+f>this._max?f=this._max-c:c+f<this._min&&(f=this._min-c),this._snapClampSetValue(c+f)}p=d.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",m)},h=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",h),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let e=(u,d,L,T,B)=>(u-d)/(L-d)*(B-T)+T,t=u=>{let d=this.$slider.getBoundingClientRect(),L=e(u,d.left,d.right,this._min,this._max);this._snapClampSetValue(L)},i=u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)},n=u=>{t(u.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s)},o=!1,l,b,p=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),o=!1},c=u=>{u.touches.length>1||(this._hasScrollBar?(l=u.touches[0].clientX,b=u.touches[0].clientY,o=!0):p(u),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",A))},f=u=>{if(o){let d=u.touches[0].clientX-l,L=u.touches[0].clientY-b;Math.abs(d)>Math.abs(L)?p(u):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",A))}else u.preventDefault(),t(u.touches[0].clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",A)},g=this._callOnFinishChange.bind(this),y=400,m,h=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();let L=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(g,y)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",h,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},j=class extends C{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},K=class extends C{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Le=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Ve(r){let e=document.createElement("style");e.innerHTML=r;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var ae=!1,J=class r{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:s="Controls",closeFolders:o=!1,injectStyles:l=!0,touchStyles:b=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),b&&this.domElement.classList.add("allow-touch-styles"),!ae&&l&&(Ve(Le),ae=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=o}add(e,t,i,n,s){if(Object(i)===i)return new j(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new X(this,e,t,i,n,s);case"boolean":return new Y(this,e,t);case"string":return new K(this,e,t);case"function":return new P(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new q(this,e,t,i)}addFolder(e){let t=new r({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof P||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof P)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},ce=J;var W=class{gl;resource=null;constructor(e){this.gl=e}initialise(e){let t=this.gl;return this.resource==null&&(this.resource=t.createBuffer(),this.resource==null)?(console.error("Failed to allocate uniform buffer"),!1):(t.bindBuffer(t.UNIFORM_BUFFER,this.resource),typeof e=="number"?t.bufferData(t.UNIFORM_BUFFER,e,t.DYNAMIC_COPY):t.bufferData(t.UNIFORM_BUFFER,e,t.DYNAMIC_COPY,0),t.getError()===t.NO_ERROR)}update(e){let t=this.gl;t.bindBuffer(t.UNIFORM_BUFFER,this.resource),t.bufferSubData(t.UNIFORM_BUFFER,0,e,0)}bindBuffer(e){this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,this.resource),this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER,e,this.resource)}};function Z(r,e){let t,i,n;if(typeof r=="string")if(r.startsWith("#")){let s=r.slice(1);t=parseInt(s.slice(0,2),16),i=parseInt(s.slice(2,4),16),n=parseInt(s.slice(4,6),16)}else if(r.startsWith("rgb")){let s=r.match(/\d+/g);if(s&&s.length===3)[t,i,n]=s.map(Number);else throw new Error("Invalid RGB string format")}else throw new Error("Invalid input format");else if(Array.isArray(r)&&r.length===3)if(r.every(s=>s>=0&&s<=1))[t,i,n]=r.map(s=>Math.round(s*255));else if(r.every(s=>s>=0&&s<=255))[t,i,n]=r.map(Math.round);else throw new Error("Invalid array input values");else throw new Error("Invalid input type");switch(e){case"hex":return`#${t.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`;case"rgb_string":return`rgb(${t}, ${i}, ${n})`;case"rgb_array":return[t,i,n];case"rgb_normalized":return[t/255,i/255,n/255];default:throw new Error("Invalid output format")}}var le=new ce({closeFolders:!0});function Ee(r){for(let e=r.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[r[e],r[t]]=[r[t],r[e]]}return r}var v={background:"#ece6d7",sand:"#a79680",intensity:1,threshold:.67,variance:.68,normalScale:.06,lightX:1,lightY:1,lightZ:1,speed:.4},R=le.addFolder("Shader");R.addColor(v,"background");R.addColor(v,"sand");R.add(v,"intensity",0,10);R.add(v,"threshold",0,1);R.add(v,"variance",0,1);R.add(v,"normalScale",0,2,.01);R.add(v,"lightX",-1,1);R.add(v,"lightY",-1,1);R.add(v,"lightZ",-1,1);var ue=le.addFolder("Application");ue.add(v,"speed",0,2,.01);var F=new Uint8Array(4*4*4),we=new Float32Array(F.buffer,0,4),Me=new Float32Array(F.buffer,4*4,4),Re=new Float32Array(F.buffer,2*4*4,4),ke=new Float32Array(F.buffer,3*4*4,4),Q=class{canvas;gl;screen=new k(0,0);quad;prog=null;noiseTextures=[];wholeTexture=null;ctx={};blocks={};shaderBlock=null;constructor(){this.canvas=document.getElementById("canvas"),this.gl=this.canvas.getContext("webgl2"),this.quad=te(this.gl);let e=ie(this.gl,re,ne);if(typeof e=="string"){console.error(e);return}this.prog=e,this.gl.useProgram(this.prog),this.ctx=se(this.gl,this.prog),this.ctx.wholeTexture.value=2,$(this.gl,this.ctx),this.blocks=oe(this.gl,this.prog),this.gl.uniformBlockBinding(this.prog,this.blocks.ShaderData,0),this.shaderBlock=new W(this.gl),this.shaderBlock.initialise(F.byteLength),this.shaderBlock.bindBuffer(0),this.shaderBlock.update(F)}generateNoiseTextures(){let e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=0;s<16;s++)Ee(e);console.log(e);let t=new Float32Array(256);for(let s=0;s<256;s++)t[s]=Math.random();console.log(t);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.R8UI,256,1,0,this.gl.RED_INTEGER,this.gl.UNSIGNED_BYTE,e),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.noiseTextures.push(i);let n=this.gl.createTexture();this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.R32F,256,1,0,this.gl.RED,this.gl.FLOAT,t),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.noiseTextures.push(n)}prev=performance.now();curr=performance.now();time=0;draw(){let e=this.gl;this.prev=this.curr,this.curr=performance.now(),this.time+=(this.curr-this.prev)/1e3,this.ctx.time.value=this.time,$(e,this.ctx),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),this.quad.draw()}updateUniformBlocks(){this.shaderBlock?.update(F)}generateWholeTexture(e,t,i){e=Math.round(e/i),t=Math.round(t/i);let n=new Uint8Array(e*t);for(let o=0;o<e*t;o++)n[o]=Math.random()*255.999;let s=this.gl;this.wholeTexture=this.wholeTexture!==null?this.wholeTexture:s.createTexture(),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,this.wholeTexture),s.pixelStorei(s.UNPACK_ALIGNMENT,1),s.texImage2D(s.TEXTURE_2D,0,s.R8,e,t,0,s.RED,s.UNSIGNED_BYTE,n),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST)}resize(){let e=this.gl,t=this.canvas,i=window.devicePixelRatio??1,n=this.screen,s=t.getBoundingClientRect(),o=Math.round(s.width),l=Math.round(s.height),b=Math.round(i*o),p=Math.round(i*l);if(n.x!==b||n.y!==p){n.x=b,n.y=p,t.width=n.x,t.height=n.y,e.viewport(0,0,n.x,n.y);let c=n.x>n.y?n.y:n.x;c=c/5,this.ctx.resolution.value=[n.x,n.y,c],$(e,this.ctx),this.generateWholeTexture(n.x,n.y,window.devicePixelRatio),this.draw()}}};window.onload=()=>{let r=new Q,e=()=>{let i=window.devicePixelRatio??1;Me.set(Z(v.sand,"rgb_normalized")),we.set(Z(v.background,"rgb_normalized")),Re.set([v.intensity*i,v.threshold,v.variance,v.normalScale]),ke.set([v.lightX,v.lightY,v.lightZ,v.speed]),r.updateUniformBlocks()};R.onChange(e),ue.onChange(e),e(),r.resize();let t=()=>{r.draw(),requestAnimationFrame(t)};requestAnimationFrame(t)};
/*! Bundled license information:

lil-gui/dist/lil-gui.esm.js:
  (**
   * lil-gui
   * https://lil-gui.georgealways.com
   * @version 0.19.2
   * @author George Michael Brower
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
