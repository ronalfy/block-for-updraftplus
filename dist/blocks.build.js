!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(3)),l=(n.n(o),n(4)),__=wp.i18n.__,a=wp.blocks.registerBlockType,c=wp.plugins.registerPlugin,i=wp.editPost,u=(i.PluginSidebar,i.PluginSidebarMoreMenuItem),p=i.PluginDocumentSettingPanel,f=wp.element,d=(f.Component,f.Fragment),s=wp.components,m=s.PanelBody,b=(s.TextControl,s.SelectControl),w=wp.data,g=w.withSelect,y=w.withDispatch,C=[{value:"none",label:__("None","block-for-updraftcentral")},{value:"full",label:__("Full-width","block-for-updraftcentral")}],_=function(e){return wp.element.createElement(m,{title:__("UpdraftCentral Options","block-for-updraftcentral"),icon:"welcome-view-site",intialOpen:!0},wp.element.createElement(b,{label:__("UpdraftCentral Display","block-for-updraftcentral"),options:C,value:wp.data.select("core/editor").getEditedPostAttribute("meta").updraftCentral_metafield,onChange:function(t){return e.onMetaFieldChange(t)}}))};_=g(function(e){return{text_metafield:e("core/editor").getEditedPostAttribute("meta").updraftCentral_metafield}})(_),_=y(function(e){return{onMetaFieldChange:function(t){e("core/editor").editPost({meta:{updraftCentral_metafield:t}})}}})(_),c("updraftcentral",{icon:"welcome-view-site",render:function(){return wp.element.createElement(d,null,wp.element.createElement(u,{target:"updraftcentral-sidebar"},__("UpdraftCentral","block-for-updraftcentral")),wp.element.createElement(p,{title:__("UpdraftCentral Template","block-for-updraftcentral")},wp.element.createElement(_,null)))}}),a("mediaron/block-for-updraftcentral",{title:__("UpdraftCentral","block-for-updraft-central"),category:"widgets",keywords:[__("updraft","block-for-updraft-central"),__("central","block-for-updraft-central")],icon:"admin-tools",edit:l.a,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=wp.element,i=c.Component,u=c.Fragment,__=wp.i18n.__,p=wp.components,f=(p.PanelBody,p.Placeholder),d=(p.QueryControls,p.RangeControl,p.SelectControl,p.Spinner,p.TextControl,p.TextareaControl,p.ToggleControl,p.Toolbar,wp.blockEditor),s=(d.MediaUpload,d.InspectorControls,d.BlockAlignmentToolbar,d.BlockControls,d.PanelColorSettings,function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){return wp.element.createElement(u,null,wp.element.createElement(f,null,wp.element.createElement("div",{className:"updraftcentral-block-image"},wp.element.createElement("img",{src:block_for_uc.pluginDirUrl+"/src/updraftcentral.png",alt:__("UpdraftCentral","block-for-updraftcentral")}))))}}]),t}(i));t.a=s}]);