import{X as a,S as r,U as i}from"./makeScene2D-e3796321.js";function d(...o){const n=a();for(const c of o){const e=n.children.find(t=>t.runner===c);e&&!e.canceled&&(e.cancel(),e.time(n.time()))}}r(l,i());function*l(o,n){for(let c=0;c<o;c++){const e=n(c);e?yield*e:yield}}export{d as c,l};
