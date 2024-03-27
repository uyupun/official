"use strict";(self.webpackChunkofficial=self.webpackChunkofficial||[]).push([[884],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/common/Logo/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Logo:()=>index_stories_Logo,default:()=>index_stories});var _Logo$parameters,_Logo$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),Image=__webpack_require__("./src/components/base/Image/index.tsx"),_excluded=["href","type","alt"],__jsx=react.createElement,Logo=function Logo(_ref){var href=_ref.href,type=_ref.type,alt=_ref.alt,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),sources=(0,react.useMemo)((function(){return[{srcset:"./images/logos/".concat(type,"/").concat(type,".avif"),format:"avif",isDesktop:!0},{srcset:"./images/logos/".concat(type,"/").concat(type,".webp"),format:"webp",isDesktop:!0},{srcset:"./images/logos/".concat(type,"/").concat(type,".png"),format:"png",isDesktop:!0},{srcset:"./images/logos/".concat(type,"/").concat(type,"-mobile.avif"),format:"avif"},{srcset:"./images/logos/".concat(type,"/").concat(type,"-mobile.webp"),format:"webp"},{srcset:"./images/logos/".concat(type,"/").concat(type,"-mobile.png"),format:"png"}]}),[type]);return __jsx(link_default(),{href,rel:"noopener noreferrer",target:"_blank"},__jsx(Image.E,(0,esm_extends.Z)({},rest,{alt,sources})))};Logo.displayName="Logo",Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"};try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{href:{defaultValue:null,description:"ハイパーリンクが指す外部サイトのURL",name:"href",required:!0,type:{name:"Url"}},type:{defaultValue:null,description:"ロゴの種類",name:"type",required:!0,type:{name:"enum",value:[{value:'"discussion"'},{value:'"github"'},{value:'"home"'},{value:'"qiita"'},{value:'"uyupun"'},{value:'"uyupun-archive"'},{value:'"x"'},{value:'"youtube"'}]}},alt:{defaultValue:null,description:"img 要素の alt 属性に渡す値",name:"alt",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"img 要素の className 属性に渡す値",name:"className",required:!1,type:{name:"string"}},isLazy:{defaultValue:null,description:"画像の読み込みを遅延させるかどうか\nビューポート外にある画像: true\nビューポート内にある画像: false",name:"isLazy",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"画像の横幅",name:"width",required:!0,type:{name:"ImageSize"}},height:{defaultValue:null,description:"画像の高さ",name:"height",required:!0,type:{name:"ImageSize"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/index.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/common/Logo/index.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const index_stories={title:"Common/Logo",component:Logo};var width={mobile:40,desktop:64},height={mobile:40,desktop:64},index_stories_Logo={render:function render(){return index_stories_jsx("dl",null,index_stories_jsx("dt",{style:{color:"white"}},'type="discussion"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"オフィシャルサイトのGitHub discussion",height,href:"https://github.com/uyupun/official/discussions/77",isLazy:!1,type:"discussion",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="github"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"たかしのGitHubアカウント",height,href:"https://github.com/takashi0602",isLazy:!1,type:"github",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="home"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"たかしのポートフォリオ",height,href:"https://takashimelon.vercel.app",isLazy:!1,type:"home",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="qiita"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"たかしのQiitaアカウント",height,href:"https://qiita.com/takashimelon",isLazy:!1,type:"qiita",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="uyupun"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"ぅゅ...ぷんぽぷんぽのGitHub Organization",height,href:"https://github.com/uyupun",isLazy:!1,type:"uyupun",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="uyupun-archive"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"ぅゅ...ぷんぽぷんぽアーカイブのGitHub Organization",height,href:"https://github.com/uyupun",isLazy:!1,type:"uyupun-archive",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="x"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"ぅゅ...ぷんぽぷんぽのXアカウント",height,href:"https://twitter.com/uyupunpopunpo",isLazy:!1,type:"x",width})),index_stories_jsx("dt",{style:{color:"white"}},'type="youtube"'),index_stories_jsx("dd",{style:{margin:"8px 0 16px 0"}},index_stories_jsx(Logo,{alt:"ぅゅ...ぷんぽぷんぽのYouTubeアカウント",height,href:"https://www.youtube.com/channel/UCE_4jtgERiX2yIYSvh3uzWA",isLazy:!1,type:"youtube",width})))}};index_stories_Logo.parameters=_objectSpread(_objectSpread({},index_stories_Logo.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Logo$parameters=index_stories_Logo.parameters)||void 0===_Logo$parameters?void 0:_Logo$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <dl>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"discussion\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'オフィシャルサイトのGitHub discussion'} height={height} href={'https://github.com/uyupun/official/discussions/77'} isLazy={false} type={'discussion'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"github\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'たかしのGitHubアカウント'} height={height} href={'https://github.com/takashi0602'} isLazy={false} type={'github'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"home\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'たかしのポートフォリオ'} height={height} href={'https://takashimelon.vercel.app'} isLazy={false} type={'home'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"qiita\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'たかしのQiitaアカウント'} height={height} href={'https://qiita.com/takashimelon'} isLazy={false} type={'qiita'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"uyupun\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'ぅゅ...ぷんぽぷんぽのGitHub Organization'} height={height} href={'https://github.com/uyupun'} isLazy={false} type={'uyupun'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"uyupun-archive\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'ぅゅ...ぷんぽぷんぽアーカイブのGitHub Organization'} height={height} href={'https://github.com/uyupun'} isLazy={false} type={'uyupun-archive'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"x\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'ぅゅ...ぷんぽぷんぽのXアカウント'} height={height} href={'https://twitter.com/uyupunpopunpo'} isLazy={false} type={'x'} width={width} />\n      </dd>\n      <dt style={{\n      color: 'white'\n    }}>{'type=\"youtube\"'}</dt>\n      <dd style={{\n      margin: '8px 0 16px 0'\n    }}>\n        <CommonLogo alt={'ぅゅ...ぷんぽぷんぽのYouTubeアカウント'} height={height} href={'https://www.youtube.com/channel/UCE_4jtgERiX2yIYSvh3uzWA'} isLazy={false} type={'youtube'} width={width} />\n      </dd>\n    </dl>\n}"},null===(_Logo$parameters2=index_stories_Logo.parameters)||void 0===_Logo$parameters2||null===(_Logo$parameters2=_Logo$parameters2.docs)||void 0===_Logo$parameters2?void 0:_Logo$parameters2.source)})})},"./src/components/base/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Image});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react.createElement,Image=function Image(_ref){var sources=_ref.sources,alt=_ref.alt,className=_ref.className,isLazy=_ref.isLazy,height=_ref.height,width=_ref.width,sourceForImgElement=function getSource(sources){return 0===sources.length?null:_toConsumableArray(sources).sort((function(a,b){var formatComparison=function compareFormats(a,b){var priorityFormats=["jpeg","png","webp","avif"];return priorityFormats.indexOf(a.format)-priorityFormats.indexOf(b.format)}(a,b);return 0!==formatComparison?formatComparison:function compareIsDesktop(a,b){return(!0===a.isDesktop?1:0)-(!0===b.isDesktop?1:0)}(a,b)}))[0]}(sources);return null===sourceForImgElement?__jsx(react.Fragment,null):__jsx("picture",null,sources.map((function(source,index){return __jsx("source",{height:!0===source.isDesktop?height.desktop:height.mobile,key:index,media:!0===source.isDesktop?"screen and (min-width: 768px)":void 0,srcSet:source.srcset,type:"image/".concat(source.format),width:!0===source.isDesktop?width.desktop:width.mobile})})),__jsx("img",{alt,className,decoding:"auto",height:!0===sourceForImgElement.isDesktop?height.desktop:height.mobile,loading:isLazy?"lazy":"eager",src:sourceForImgElement.srcset,width:!0===sourceForImgElement.isDesktop?width.desktop:width.mobile}))};Image.displayName="Image",Image.__docgenInfo={description:"ビューポートのどこで使用するかによって isLazy の値を以下のように変更する\nビューポート外にある画像: true\nビューポート内にある画像: false\nまた decoding の値は常に auto とし、ブラウザに任せる\n\nref: https://zenn.dev/ixkaito/articles/deep-dive-into-decoding",methods:[],displayName:"Image"};try{Image.displayName="Image",Image.__docgenInfo={description:"ビューポートのどこで使用するかによって isLazy の値を以下のように変更する\nビューポート外にある画像: true\nビューポート内にある画像: false\nまた decoding の値は常に auto とし、ブラウザに任せる\n\nref: https://zenn.dev/ixkaito/articles/deep-dive-into-decoding",displayName:"Image",props:{sources:{defaultValue:null,description:"source 要素で使用する値を持つ配列",name:"sources",required:!0,type:{name:"ImageSource[]"}},alt:{defaultValue:null,description:"img 要素の alt 属性に渡す値",name:"alt",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"img 要素の className 属性に渡す値",name:"className",required:!1,type:{name:"string"}},isLazy:{defaultValue:null,description:"画像の読み込みを遅延させるかどうか\nビューポート外にある画像: true\nビューポート内にある画像: false",name:"isLazy",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"画像の横幅",name:"width",required:!0,type:{name:"ImageSize"}},height:{defaultValue:null,description:"画像の高さ",name:"height",required:!0,type:{name:"ImageSize"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/base/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/components/base/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}}}]);