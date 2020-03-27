(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(10),a=(n(0),n(176)),i={id:"python",title:"Python"},p={id:"development-infrastructure/continuous-integration/python",title:"Python",description:"[**Python**](https://www.python.org/) is an interpreted, object-oriented, high-level programming language with dynamic semantics.  Packages are published on the [Python Package Index (pypi)](https://pypi.python.org/pypi), however they cannot be browsed by author, so you will need to follow links to the pypi listing from each project's README.",source:"@site/../docs/development-infrastructure/continuous-integration/python.md",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/python",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/python.md",sidebar:"mainSidebar",previous:{title:"Javascript",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/javascript"},next:{title:"Code Validation",permalink:"/open-developer-platform/docs/development-infrastructure/code-validation/intro"}},c=[{value:"Publishing on Pypi",id:"publishing-on-pypi",children:[]},{value:"Links",id:"links",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.python.org/"}),Object(a.b)("strong",{parentName:"a"},"Python"))," is an interpreted, object-oriented, high-level programming language with dynamic semantics.  Packages are published on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://pypi.python.org/pypi"}),"Python Package Index (pypi)"),", however they cannot be browsed by author, so you will need to follow links to the pypi listing from each project's README."),Object(a.b)("h2",{id:"publishing-on-pypi"},"Publishing on Pypi"),Object(a.b)("p",null,"Python packages can be easily installed using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://packaging.python.org/pip_easy_install/"}),"pip or easy_install"),"; in order to publish a Python package to the Python Package Index, follow the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://peterdowns.com/posts/first-time-with-pypi.html"}),"simple steps described on this blogpost"),"."),Object(a.b)("p",null,"That said, the Foundation is still working on a centralised, automated way to publish (and sign) Python packages so that they can be managed by Foundation Staff."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/symphonyoss/python-symphony/blob/master/HACKING.rst"}),"Python Hacking style guide")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://python-semantic-release.readthedocs.io/"}),"Python semantic release"),", automatic semantic versioning for python projects, including ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://python-semantic-release.readthedocs.io/en/latest/automatic-releases/travis.html"}),"Travis CI integration"))))}l.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return n?o.a.createElement(d,p({ref:t},s,{components:n})):o.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);