(window.webpackJsonp=window.webpackJsonp||[]).push([[2,17],{486:function(e,t,i){var n=i(487);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(97).default)("56e7d4e4",n,!1,{})},487:function(e,t,i){var n=i(95),o=i(488);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1},a=(n(o,s),o.locals?o.locals:{});e.exports=a},488:function(e,t,i){(t=i(96)(!1)).push([e.i,"/* 表头不换行 */\r\n.el-table th > .cell {\r\n  white-space: pre;\r\n}\r\n/* 交替行颜色 */\r\n.el-table--striped .el-table__body tr.el-table__row--striped td{\r\n  background-color: #edf4fc ;\r\n}\r\n/*交替行hover*/\r\n.el-table--striped .el-table__body tr.el-table__row--striped:hover > td {\r\n  background-color: #edf4fc;\r\n}\r\n/*交替行选中后的hover*/\r\n.el-table--striped .el-table__body tr.el-table__row--striped.current-row:hover>td{\r\n  background-color: #B1D6F0;\r\n}\r\n/*交替行选中时的颜色*/\r\n.el-table--striped .el-table__body tr.el-table__row--striped.current-row td{\r\n  background-color: #B1D6F0;\r\n}\r\n\r\n/*非交替行颜色*/\r\n.el-table--enable-row-hover .el-table__body tr > td {\r\n  background-color: #fff;\r\n}\r\n/*非交替行hover*/\r\n.el-table--enable-row-hover .el-table__body tr:hover > td {\r\n  background-color: #fff;\r\n}\r\n/*非交替行选中后的hover*/\r\n.el-table__body tr.current-row:hover>td{\r\n  background-color: #B1D6F0;\r\n}\r\n/*非交替行选中颜色*/\r\n.el-table__body tr.current-row td{\r\n  background-color: #B1D6F0;\r\n}\r\n/* 选中时升序颜色 */\r\n.el-table .descending .sort-caret.descending {\r\n  border-top-color: #fff;\r\n}\r\n/* 选中时降序颜色 */\r\n.el-table .ascending .sort-caret.ascending {\r\n  border-bottom-color: #fff;\r\n}\r\n/* 未选中是升序颜色 */\r\n.el-table .sort-caret.ascending {\r\n  border-bottom-color: #c0c4cccc;\r\n}\r\n/* 未选中时降序颜色 */\r\n.el-table .sort-caret.descending {\r\n  border-top-color: #c0c4cccc;\r\n}\r\n/*多选时默认选中样式*/\r\n.multipleSelect>td{\r\n  background:#B1D6F0 !important;\r\n}\r\n.cellTest{\r\n  background:#B1D6F0 !important;\r\n}\r\n/*添加列头刷新样式*/\r\n.el-table-refresh{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: #fff;\r\n  z-index: 100;\r\n  font-size: 18px;\r\n}",""]),e.exports=t},489:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"100%",position:"relative"},attrs:{id:e.basciConfig.ref}},[e.basciConfig.refresh?i("div",{staticClass:"el-table-refresh",on:{click:function(t){return t.stopPropagation(),e.handleCurrentChange(e.basciPagination.currentPage)}}},[i("i",{staticClass:"el-icon-refresh"})]):e._e(),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.basciConfig.loading,expression:"basciConfig.loading"}],ref:e.basciConfig.ref,style:e.basciConfig.style,attrs:{stripe:e.basciConfig.stripe,"highlight-current-row":void 0===e.basciConfig.highlightCurrentRow||e.basciConfig.highlightCurrentRow,"row-class-name":e.rowClassName,"cell-class-name":e.basciConfig.cellClassName,"empty-text":e.basciConfig.emptyText,"span-method":e.basciConfig.spanMethod,"default-sort":e.basciConfig.defaultSort,data:e.basciConfig.data,"sort-orders":e.sortOrders,height:e.basciConfig.height,width:e.basciConfig.width,border:e.basciConfig.border,"header-cell-style":e.basciConfig.headerCellStyle,"header-row-style":e.basciConfig.headerRowStyle},on:{"row-dblclick":e.rowDbClick,"row-click":e.rowClick,"sort-change":e.sortChange,select:e.select,"select-all":e.selectAll,"expand-change":e.expandChange,"cell-dblclick":e.cellDblclick,"cell-click":e.cellclick}},[e._t(e.basciConfig.slot),e._v(" "),e._l(e.basciConfig.columns,(function(t,n){return i("el-table-column",{key:n,attrs:{type:t.type,"show-overflow-tooltip":void 0===t.showOverflowTooltip||t.showOverflowTooltip,prop:t.prop,label:t.label,resizable:void 0===t.resizable||t.resizable,align:t.align,width:t.width,"min-width":t.minWidth,fixed:t.fixed,sortable:t.sortable,"sort-orders":e.sortOrders,formatter:t.formatter,"render-header":t.renderHeader}})}))],2),e._v(" "),void 0===e.basciPagination.show||e.basciPagination.show?i("el-pagination",{ref:e.basciPagination.ref,style:e.basciPagination.style,attrs:{background:e.basciPagination.background,disabled:e.basciPagination.disabled,"current-page":e.basciPagination.currentPage,"page-size":e.basciPagination.pageSize,"page-sizes":e.basciPagination.pageSizes,layout:e.basciPagination.layout,total:e.basciPagination.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange,"update:currentPage":function(t){return e.$set(e.basciPagination,"currentPage",t)},"update:current-page":function(t){return e.$set(e.basciPagination,"currentPage",t)}}},[i("span",[i("ul",{staticClass:"el-pager"},[i("li",{staticClass:"number active"},[e._v(e._s(e.basciPagination.currentPage))])])])]):e._e()],1)};n._withStripped=!0;var o={},s={name:"basci-grid",props:{config:{type:Object,required:!0},pagination:{type:Object,required:!1,default:function(){return{}}}},methods:{headerColumsRepair:function(){var e=this.$refs[this.basciConfig.ref].$el,t=e.getElementsByClassName("is-leaf");if(t.length>0&&this.basciConfig.columns.length>0){t[t.length-1].style.borderRight="none";var i=e.getElementsByClassName("gutter");i.length>0&&void 0!==this.basciConfig.headerCellStyle.background&&(i[0].style.backgroundColor=this.basciConfig.headerCellStyle.background)}var n=this.$refs[this.basciConfig.ref].$refs.tableHeader,o=n.handleMouseDown;n.handleMouseDown=function(e,t){if(!t.resizable)return!1;o.call(this,e,t)}},componentReady:function(){this.basciPagination=Object.assign({},this.basciPagination,this.pagination),this.basciConfig=Object.assign({},this.basciConfig,this.config),this.basciConfig.columns.length>0&&(this.basciConfig.columns[this.basciConfig.columns.length-1].resizable=!1),this.basciPagination.total=this.basciPagination.total||99*this.basciPagination.pageSize,this.$set(this.pagination,"total",this.basciPagination.total),this.basciConfig.loading=!1,this.basciConfig.selectRows=this.config.selectRows=[],this.config.showLoading=this.showLoading,this.config.setSingleDefault=this.setSingleDefault,this.config.doLayout=this.doLayout,this.config.beforeSort={},this.basciConfig.defaultSort&&this.basciConfig.defaultSort.prop&&this.basciConfig.defaultSort.order?(this.config.sort=this.basciConfig.sort={column:this.basciConfig.defaultSort.prop,order:this.basciConfig.defaultSort.order.replace("descending","desc").replace("ascending","asc")},this.basciConfig.beforeSort=this.config.beforeSort={column:this.basciConfig.defaultSort.prop,order:this.basciConfig.defaultSort.order}):this.config.sort=this.basciConfig.sort={}},cellclick:function(e,t,i,n){this.$emit("cell_click",e,t,i,n)},cellDblclick:function(e,t,i,n){this.$emit("cell_dblclick",e,t,i,n)},expandChange:function(e,t){this.$emit("expand_change",e,t)},handleSizeChange:function(e){this.basciPagination.pageSize=this.pagination.pageSize=e,this.pagination.currentPage=this.basciPagination.currentPage=1,this.basciConfig.loading=this.config.loading=!0,this.$emit("size-change",this.basciConfig,this.basciPagination)},select:function(e,t){var i=!1;"single"==this.basciConfig.selectType?(this.clearSelection(),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(),0===e.length?this.basciConfig.selectRows=this.config.selectRows=e:(i=!0,this.basciConfig.selectRows=this.config.selectRows=[t],this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(t),this.toggleRowSelection(t,!0))):(this.$refs[this.basciConfig.ref].setCurrentRow(),i=e.filter((function(e,i){return e==t})).length>0,this.basciConfig.selectRows=this.config.selectRows=e),this.$emit("select",this.basciConfig.selectRows,t,i)},selectAll:function(e){this.$refs[this.basciConfig.ref].setCurrentRow(),this.basciConfig.selectRows=this.config.selectRows=e,this.$emit("select-all",e)},handleCurrentChange:function(e){this.basciConfig.selectRows=this.config.selectRows=[],this.clearSelection(),this.basciConfig.loading=this.config.loading||!0,this.basciPagination.disabled=this.pagination.disabled=!0,this.basciPagination.currentPage=this.pagination.currentPage=e,this.$emit("current-change",this.basciConfig,this.basciPagination)},rowDbClick:function(e,t,i){this.$emit("row-dbclick",e,t,i)},rowClick:function(e,t,i){if("multiple"==this.basciConfig.selectType)if(this.basciConfig.selectRows.filter((function(t,i){return t==e})).length>0){var n=this.basciConfig.selectRows.filter((function(t,i){return t!=e}));this.basciConfig.selectRows=this.config.selectRows=n,this.toggleRowSelection(e,!1),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow()}else this.basciConfig.selectRows.push(e),this.config.selectRows=this.basciConfig.selectRows,this.toggleRowSelection(e,!0),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(e);else"single"==this.basciConfig.selectType&&(this.basciConfig.selectRows.length>0&&1==this.basciConfig.selectRows.filter((function(t,i){return t==e})).length?(this.clearSelection(),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow()):(this.clearSelection(),this.basciConfig.selectRows=this.config.selectRows=[e],this.toggleRowSelection(e),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(e)));this.$emit("row-click",e,t,i)},sortChange:function(e){if(this.basciPagination.disabled=this.pagination.disabled=!0,this.basciConfig.loading=this.config.loading||!0,this.clearSelection(),this.pagination.currentPage=this.basciPagination.currentPage=1,null==e.order&&this.basciConfig.beforeSort.column==e.prop){var t="descending"==this.basciConfig.beforeSort.order?"ascending":"descending";return this.basciConfig.beforeSort.order=this.config.beforeSort.order=t,this.config.sort=this.basciConfig.sort={column:e.prop,order:this.basciConfig.beforeSort.order.replace("descending","desc").replace("ascending","asc")},void this.$refs[this.basciConfig.ref].sort(e.prop,this.basciConfig.beforeSort.order)}this.basciConfig.beforeSort=this.config.beforeSort={column:e.prop,order:e.order},this.config.sort=this.basciConfig.sort={column:e.prop,order:e.order.replace("descending","desc").replace("ascending","asc")},this.$emit("sort-change",this.basciConfig,this.basciPagination)},toggleRowSelection:function(e,t){return void 0===t?this.$refs[this.basciConfig.ref].toggleRowSelection(e):this.$refs[this.basciConfig.ref].toggleRowSelection(e,t)},clearSelection:function(){return this.basciConfig.selectRows=this.config.selectRows=[],this.$refs[this.basciConfig.ref].clearSelection()},showLoading:function(e){this.$nextTick((function(){this.basciConfig.loading=this.config.loading=e}))},doLayout:function(){this.$refs[this.basciConfig.ref].doLayout()},defaultSelect:function(){this.basciConfig.defaultSelectRule&&"multiple"==this.basciConfig.selectType&&this.basciConfig.data.forEach((function(e,t){var i=o.basciConfig.defaultSelectRule.call(o,e);i&&(o.config.selectRows.push(e),o.basciConfig.selectRows=o.config.selectRows),o.toggleRowSelection(e,i)}))},rowClassName:function(e){if("multiple"==this.basciConfig.selectType&&this.basciConfig.highlightCurrentRow&&this.basciConfig.selectRows.filter((function(t,i){return t==e.row})).length>0)return"multipleSelect"},setSingleDefault:function(e){"single"==this.basciConfig.selectType&&(this.clearSelection(),this.$refs[this.basciConfig.ref].setCurrentRow(e),this.$refs[this.basciConfig.ref].toggleRowSelection(e),this.basciConfig.selectRows=this.config.selectRows=[e])}},data:function(){return{sortOrders:["ascending","descending"],basciPagination:{ref:"basciPagination",background:!0,currentPage:1,pageSize:50,disabled:!1,layout:"prev, pager, next, jumper",style:{textAlign:"center",marginTop:"10px"},total:""},basciConfig:{ref:"basciTable",emptyText:"",loading:!0,border:!0,headerCellStyle:{background:"#198FFF",color:"#fff",fontWeight:"400"},headerRowStyle:{minHeight:"40px",height:"40px"},columns:[],sort:{},beforeSort:{},stripe:!1,highlightCurrentRow:!0,width:"100%",style:{width:"100%"},show:!0,refresh:!1,data:[]}}},watch:{"basciConfig.data":function(e,t){this.basciConfig.data=this.config.data=e,this.basciConfig.selectRows=this.config.selectRows=[],this.$nextTick((function(){this.defaultSelect(),this.$refs[this.basciConfig.ref].bodyWrapper.scrollTop=0,this.$refs[this.basciConfig.ref].bodyWrapper.scrollLeft=0,this.basciConfig.loading=this.config.loading=this.basciPagination.disabled=this.pagination.disabled=!1,this.$refs[this.basciConfig.ref].doLayout(),this.headerColumsRepair()}))},"config.data":function(e,t){this.basciConfig.data=this.config.data=e,this.basciConfig.selectRows=this.config.selectRows=[],this.$nextTick((function(){this.$refs[this.basciConfig.ref].bodyWrapper.scrollTop=0,this.$refs[this.basciConfig.ref].bodyWrapper.scrollLeft=0,this.basciConfig.loading=this.config.loading=this.basciPagination.disabled=this.pagination.disabled=!1,this.$refs[this.basciConfig.ref].doLayout(),this.headerColumsRepair()}))},"basciPagination.currentPage":function(e,t){this.basciPagination.currentPage=this.pagination.currentPage=e},"pagination.currentPage":function(e,t){this.basciPagination.currentPage=this.pagination.currentPage=e},"basciPagination.total":function(e,t){this.basciPagination.total=this.pagination.total=e},"pagination.total":function(e,t){this.basciPagination.total=this.pagination.total=e},"config.defaultSelectRule":function(){this.basciConfig.defaultSelectRule=this.config.defaultSelectRule;var e=this.basciConfig.data;this.basciConfig.data=[],this.basciConfig.selectRows=this.config.selectRows=[],this.$nextTick((function(){this.basciConfig.data=this.config.data=e}))},"basciConfig.selectType":function(e,t){"single"==e&&this.$nextTick((function(){try{var e=this.$refs[this.basciConfig.ref].$el.getElementsByTagName("th");e.length>0&&e[0].getElementsByClassName("el-checkbox").length>0&&(e[0].getElementsByClassName("el-checkbox")[0].style.display="none")}catch(e){console.log("checkAll_dom_error:",e)}}))}},beforeCreate:function(){o=this},created:function(){this.componentReady()}},a=i(148),r=Object(a.a)(s,n,[],!1,null,null,null);r.options.__file="src/components/basci-grid.vue";t.default=r.exports},490:function(e,t,i){var n=i(500);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(97).default)("0521e87e",n,!1,{})},499:function(e,t,i){"use strict";var n=i(490);i.n(n).a},500:function(e,t,i){var n=i(95),o=i(501);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1},a=(n(o,s),o.locals?o.locals:{});e.exports=a},501:function(e,t,i){(t=i(96)(!1)).push([e.i,"\ndiv[data-v-8f792304] {\n  margin-bottom: 10px;\n}\n.popover_i[data-v-8f792304]{\n  position:absolute;\n  right:10px;\n  top:10px;\n  font-size:18px\n}\n.popover_title[data-v-8f792304]{\n  margin-top: 0px;\n  margin-bottom:10px;\n  border-left: 4px solid #ff4d4f;\n  padding-left:5px\n}\n.popover_context[data-v-8f792304]{\n  color:#a6a7a8;\n  font-size:13px\n}\n",""]),e.exports=t},521:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("basciGrid",{ref:"basciGrid",attrs:{config:e.grid,pagination:e.pagination},on:{"current-change":e.currentChange,"size-change":e.pageSizeChange,"select-all":e.selectAll,"row-dbclick":e.rowDbClick,"sort-change":e.sortChange,select:e.selectEvent}})};n._withStripped=!0;i(486);var o=i(489);window.vm={};var s={},a={name:"grid",components:{basciGrid:o.default},data:function(){return{pagination:{ref:"myPagination",background:!0,currentPage:1,pageSize:50,pageSizes:[50,100],layout:"prev, pager, next, total,jumper",total:1e3},grid:{height:"90%",ref:"myGrid",refresh:!0,selectType:"multiple",highlightCurrentRow:!0,emptyText:"没有更多了",loading:!0,border:!0,headerCellStyle:{background:"#198FFF",color:"#fff",fontWeight:"400"},defaultSort:{prop:"date",order:"descending"},defaultSelectRule:function(e){return"1"==e.status},columns:[{prop:"id",fixed:"left",type:"selection",width:"55px"},{prop:"date",label:"时间",align:"center",width:"180",sortable:"custom"},{prop:"desc",label:"描述",align:"center",width:"100",sortable:!0,showOverflowTooltip:!0},{prop:"status",label:"formatBasic",align:"center",width:"120",formatter:function(e,t){return 1==e.status?"开启":"结束"}},{label:"formatInput",align:"center",width:"300",formatter:function(e,t){return s.formatterInput(s.$createElement,e,t)}},{label:"formatSelect",align:"center",width:"120",formatter:function(e,t){return s.formatterSelect(s.$createElement,e,t)}},{label:"formatHtml",align:"center",width:"380",formatter:function(e,t){return s.formatterHtml(s.$createElement,e,t)}},{label:"formatPopover",align:"center",width:"180",formatter:function(e,t){return s.formatterPopover(s.$createElement,e,t)}},{label:"formatButton",align:"center",minWidth:"200",formatter:function(e,t){return s.formatterButton(s.$createElement,e,t)}}],data:[]}}},methods:{formatterSelect:function(e,t,i){var n="selectRef"+t.id;return e("el-select",{ref:n,attrs:{size:"small",value:t.select},on:{change:function(e){t.select=e,s.$nextTick((function(){alert(JSON.stringify({label:s.$refs[n].selectedLabel,value:e}))}))}}},[e("el-option",{key:"1",attrs:{label:"one",value:"1"}}),e("el-option",{key:"2",attrs:{label:"two",value:"2"}})])},formatterHtml:function(e,t,i){return e("div",{attrs:{id:t.date},style:"color:red"},[t.desc])},formatterInput:function(e,t,i){return e("el-input",{attrs:{type:"text",size:"small",value:t.input},on:{input:function(e){return t.input=e}}})},formatterPopover:function(e,t,i){var n="popover"+t.id;return e("el-popover",{ref:n,props:{placement:"bottom",width:"400",trigger:"click"}},[e("div",{},[e("i",{scopedSlots:{default:function(t){return e("span",t.placement)}},class:["el-icon-close","popover_i"],on:{click:function(e){s.$refs[n].doClose()}}},this.$slots.default),e("h4",{class:["popover_title"]},"未来取得营销岗位证书"),e("div",{class:["popover_content"]},"你需要在6个月内取得营销岗位资格,不然很遗憾您将无法担任现岗位")],this.$slots.default),e("div",{slot:"reference"},"dd")])},formatterButton:function(e,t,i){return e("el-button",{attrs:{type:"primary",size:"mini"},style:"font-size:12px",class:"formatButton",on:{click:function(){alert(JSON.stringify(t))}}},["button"])},selectEvent:function(e,t,i){console.log("当前所有选中的行:",e),console.log("当前操作的行:",t),console.log(i?"已选中":"未选中")},selectAll:function(e){console.log("当前所有选中的行:",e),console.log(0==e.length?"当页全部未选中":"当页全部选中")},pageSizeChange:function(e,t){console.log("pageSize已变更为:"+t.pageSize),console.log("当前页:",t.currentPage),console.log("排序字段:",e.sort.column),console.log("排序order:",e.sort.order),setTimeout((function(){if(e.data=[],t.currentPage<15)for(var i=0;i<t.currentPage;i++)e.data.push({id:i,date:"2020-04",desc:"那就看你就看就看就看"+i,input:"1234",select:"",status:i%2==0?"1":"2"})}),2e3)},currentChange:function(e,t){console.log("当前页:",t.currentPage),console.log("排序字段:",e.sort.column),console.log("排序order:",e.sort.order),setTimeout((function(){if(e.data=[],t.currentPage<15)for(var i=0;i<t.currentPage;i++)e.data.push({id:i,date:"2020-04",desc:"那就看你就看就看就看"+i,input:"1234",select:"",status:i%2==0?"1":"2"})}),2e3)},rowDbClick:function(e,t,i){alert(JSON.stringify(e))},sortChange:function(e,t){console.log("当前页:",t.currentPage),console.log("排序字段:",e.sort.column),console.log("排序order:",e.sort.order),setTimeout((function(){if(e.data=[],t.currentPage<15)for(var i=0;i<t.currentPage;i++)e.data.push({id:i,date:"2020-04",desc:"那就看你就看就看就看"+i,input:"1234",select:"",status:i%2==0?"1":"2"})}),2e3)}},beforeCreate:function(){vm=this,s=this},mounted:function(){this.grid.data.push({id:0,date:"2020-04",desc:"那就看你1就看就看就看",input:"1234",select:"1",status:"1"})}},r=(i(499),i(148)),c=Object(r.a)(a,n,[],!1,null,"8f792304",null);c.options.__file="src/components/grid-demo-all.vue";t.default=c.exports}}]);
//# sourceMappingURL=2.90899eb356bfbf529860.js.map