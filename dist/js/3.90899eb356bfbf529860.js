(window.webpackJsonp=window.webpackJsonp||[]).push([[3,17],{486:function(i,e,t){var n=t(487);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);(0,t(97).default)("56e7d4e4",n,!1,{})},487:function(i,e,t){var n=t(95),s=t(488);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[i.i,s,""]]);var o={insert:"head",singleton:!1},a=(n(s,o),s.locals?s.locals:{});i.exports=a},488:function(i,e,t){(e=t(96)(!1)).push([i.i,"/* 表头不换行 */\r\n.el-table th > .cell {\r\n  white-space: pre;\r\n}\r\n/* 交替行颜色 */\r\n.el-table--striped .el-table__body tr.el-table__row--striped td{\r\n  background-color: #edf4fc ;\r\n}\r\n/*交替行hover*/\r\n.el-table--striped .el-table__body tr.el-table__row--striped:hover > td {\r\n  background-color: #edf4fc;\r\n}\r\n/*交替行选中后的hover*/\r\n.el-table--striped .el-table__body tr.el-table__row--striped.current-row:hover>td{\r\n  background-color: #B1D6F0;\r\n}\r\n/*交替行选中时的颜色*/\r\n.el-table--striped .el-table__body tr.el-table__row--striped.current-row td{\r\n  background-color: #B1D6F0;\r\n}\r\n\r\n/*非交替行颜色*/\r\n.el-table--enable-row-hover .el-table__body tr > td {\r\n  background-color: #fff;\r\n}\r\n/*非交替行hover*/\r\n.el-table--enable-row-hover .el-table__body tr:hover > td {\r\n  background-color: #fff;\r\n}\r\n/*非交替行选中后的hover*/\r\n.el-table__body tr.current-row:hover>td{\r\n  background-color: #B1D6F0;\r\n}\r\n/*非交替行选中颜色*/\r\n.el-table__body tr.current-row td{\r\n  background-color: #B1D6F0;\r\n}\r\n/* 选中时升序颜色 */\r\n.el-table .descending .sort-caret.descending {\r\n  border-top-color: #fff;\r\n}\r\n/* 选中时降序颜色 */\r\n.el-table .ascending .sort-caret.ascending {\r\n  border-bottom-color: #fff;\r\n}\r\n/* 未选中是升序颜色 */\r\n.el-table .sort-caret.ascending {\r\n  border-bottom-color: #c0c4cccc;\r\n}\r\n/* 未选中时降序颜色 */\r\n.el-table .sort-caret.descending {\r\n  border-top-color: #c0c4cccc;\r\n}\r\n/*多选时默认选中样式*/\r\n.multipleSelect>td{\r\n  background:#B1D6F0 !important;\r\n}\r\n.cellTest{\r\n  background:#B1D6F0 !important;\r\n}\r\n/*添加列头刷新样式*/\r\n.el-table-refresh{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: #fff;\r\n  z-index: 100;\r\n  font-size: 18px;\r\n}",""]),i.exports=e},489:function(i,e,t){"use strict";t.r(e);var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticStyle:{height:"100%",position:"relative"},attrs:{id:i.basciConfig.ref}},[i.basciConfig.refresh?t("div",{staticClass:"el-table-refresh",on:{click:function(e){return e.stopPropagation(),i.handleCurrentChange(i.basciPagination.currentPage)}}},[t("i",{staticClass:"el-icon-refresh"})]):i._e(),i._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.basciConfig.loading,expression:"basciConfig.loading"}],ref:i.basciConfig.ref,style:i.basciConfig.style,attrs:{stripe:i.basciConfig.stripe,"highlight-current-row":void 0===i.basciConfig.highlightCurrentRow||i.basciConfig.highlightCurrentRow,"row-class-name":i.rowClassName,"cell-class-name":i.basciConfig.cellClassName,"empty-text":i.basciConfig.emptyText,"span-method":i.basciConfig.spanMethod,"default-sort":i.basciConfig.defaultSort,data:i.basciConfig.data,"sort-orders":i.sortOrders,height:i.basciConfig.height,width:i.basciConfig.width,border:i.basciConfig.border,"header-cell-style":i.basciConfig.headerCellStyle,"header-row-style":i.basciConfig.headerRowStyle},on:{"row-dblclick":i.rowDbClick,"row-click":i.rowClick,"sort-change":i.sortChange,select:i.select,"select-all":i.selectAll,"expand-change":i.expandChange,"cell-dblclick":i.cellDblclick,"cell-click":i.cellclick}},[i._t(i.basciConfig.slot),i._v(" "),i._l(i.basciConfig.columns,(function(e,n){return t("el-table-column",{key:n,attrs:{type:e.type,"show-overflow-tooltip":void 0===e.showOverflowTooltip||e.showOverflowTooltip,prop:e.prop,label:e.label,resizable:void 0===e.resizable||e.resizable,align:e.align,width:e.width,"min-width":e.minWidth,fixed:e.fixed,sortable:e.sortable,"sort-orders":i.sortOrders,formatter:e.formatter,"render-header":e.renderHeader}})}))],2),i._v(" "),void 0===i.basciPagination.show||i.basciPagination.show?t("el-pagination",{ref:i.basciPagination.ref,style:i.basciPagination.style,attrs:{background:i.basciPagination.background,disabled:i.basciPagination.disabled,"current-page":i.basciPagination.currentPage,"page-size":i.basciPagination.pageSize,"page-sizes":i.basciPagination.pageSizes,layout:i.basciPagination.layout,total:i.basciPagination.total},on:{"current-change":i.handleCurrentChange,"size-change":i.handleSizeChange,"update:currentPage":function(e){return i.$set(i.basciPagination,"currentPage",e)},"update:current-page":function(e){return i.$set(i.basciPagination,"currentPage",e)}}},[t("span",[t("ul",{staticClass:"el-pager"},[t("li",{staticClass:"number active"},[i._v(i._s(i.basciPagination.currentPage))])])])]):i._e()],1)};n._withStripped=!0;var s={},o={name:"basci-grid",props:{config:{type:Object,required:!0},pagination:{type:Object,required:!1,default:function(){return{}}}},methods:{headerColumsRepair:function(){var i=this.$refs[this.basciConfig.ref].$el,e=i.getElementsByClassName("is-leaf");if(e.length>0&&this.basciConfig.columns.length>0){e[e.length-1].style.borderRight="none";var t=i.getElementsByClassName("gutter");t.length>0&&void 0!==this.basciConfig.headerCellStyle.background&&(t[0].style.backgroundColor=this.basciConfig.headerCellStyle.background)}var n=this.$refs[this.basciConfig.ref].$refs.tableHeader,s=n.handleMouseDown;n.handleMouseDown=function(i,e){if(!e.resizable)return!1;s.call(this,i,e)}},componentReady:function(){this.basciPagination=Object.assign({},this.basciPagination,this.pagination),this.basciConfig=Object.assign({},this.basciConfig,this.config),this.basciConfig.columns.length>0&&(this.basciConfig.columns[this.basciConfig.columns.length-1].resizable=!1),this.basciPagination.total=this.basciPagination.total||99*this.basciPagination.pageSize,this.$set(this.pagination,"total",this.basciPagination.total),this.basciConfig.loading=!1,this.basciConfig.selectRows=this.config.selectRows=[],this.config.showLoading=this.showLoading,this.config.setSingleDefault=this.setSingleDefault,this.config.doLayout=this.doLayout,this.config.beforeSort={},this.basciConfig.defaultSort&&this.basciConfig.defaultSort.prop&&this.basciConfig.defaultSort.order?(this.config.sort=this.basciConfig.sort={column:this.basciConfig.defaultSort.prop,order:this.basciConfig.defaultSort.order.replace("descending","desc").replace("ascending","asc")},this.basciConfig.beforeSort=this.config.beforeSort={column:this.basciConfig.defaultSort.prop,order:this.basciConfig.defaultSort.order}):this.config.sort=this.basciConfig.sort={}},cellclick:function(i,e,t,n){this.$emit("cell_click",i,e,t,n)},cellDblclick:function(i,e,t,n){this.$emit("cell_dblclick",i,e,t,n)},expandChange:function(i,e){this.$emit("expand_change",i,e)},handleSizeChange:function(i){this.basciPagination.pageSize=this.pagination.pageSize=i,this.pagination.currentPage=this.basciPagination.currentPage=1,this.basciConfig.loading=this.config.loading=!0,this.$emit("size-change",this.basciConfig,this.basciPagination)},select:function(i,e){var t=!1;"single"==this.basciConfig.selectType?(this.clearSelection(),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(),0===i.length?this.basciConfig.selectRows=this.config.selectRows=i:(t=!0,this.basciConfig.selectRows=this.config.selectRows=[e],this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(e),this.toggleRowSelection(e,!0))):(this.$refs[this.basciConfig.ref].setCurrentRow(),t=i.filter((function(i,t){return i==e})).length>0,this.basciConfig.selectRows=this.config.selectRows=i),this.$emit("select",this.basciConfig.selectRows,e,t)},selectAll:function(i){this.$refs[this.basciConfig.ref].setCurrentRow(),this.basciConfig.selectRows=this.config.selectRows=i,this.$emit("select-all",i)},handleCurrentChange:function(i){this.basciConfig.selectRows=this.config.selectRows=[],this.clearSelection(),this.basciConfig.loading=this.config.loading||!0,this.basciPagination.disabled=this.pagination.disabled=!0,this.basciPagination.currentPage=this.pagination.currentPage=i,this.$emit("current-change",this.basciConfig,this.basciPagination)},rowDbClick:function(i,e,t){this.$emit("row-dbclick",i,e,t)},rowClick:function(i,e,t){if("multiple"==this.basciConfig.selectType)if(this.basciConfig.selectRows.filter((function(e,t){return e==i})).length>0){var n=this.basciConfig.selectRows.filter((function(e,t){return e!=i}));this.basciConfig.selectRows=this.config.selectRows=n,this.toggleRowSelection(i,!1),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow()}else this.basciConfig.selectRows.push(i),this.config.selectRows=this.basciConfig.selectRows,this.toggleRowSelection(i,!0),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(i);else"single"==this.basciConfig.selectType&&(this.basciConfig.selectRows.length>0&&1==this.basciConfig.selectRows.filter((function(e,t){return e==i})).length?(this.clearSelection(),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow()):(this.clearSelection(),this.basciConfig.selectRows=this.config.selectRows=[i],this.toggleRowSelection(i),this.basciConfig.highlightCurrentRow&&this.$refs[this.basciConfig.ref].setCurrentRow(i)));this.$emit("row-click",i,e,t)},sortChange:function(i){if(this.basciPagination.disabled=this.pagination.disabled=!0,this.basciConfig.loading=this.config.loading||!0,this.clearSelection(),this.pagination.currentPage=this.basciPagination.currentPage=1,null==i.order&&this.basciConfig.beforeSort.column==i.prop){var e="descending"==this.basciConfig.beforeSort.order?"ascending":"descending";return this.basciConfig.beforeSort.order=this.config.beforeSort.order=e,this.config.sort=this.basciConfig.sort={column:i.prop,order:this.basciConfig.beforeSort.order.replace("descending","desc").replace("ascending","asc")},void this.$refs[this.basciConfig.ref].sort(i.prop,this.basciConfig.beforeSort.order)}this.basciConfig.beforeSort=this.config.beforeSort={column:i.prop,order:i.order},this.config.sort=this.basciConfig.sort={column:i.prop,order:i.order.replace("descending","desc").replace("ascending","asc")},this.$emit("sort-change",this.basciConfig,this.basciPagination)},toggleRowSelection:function(i,e){return void 0===e?this.$refs[this.basciConfig.ref].toggleRowSelection(i):this.$refs[this.basciConfig.ref].toggleRowSelection(i,e)},clearSelection:function(){return this.basciConfig.selectRows=this.config.selectRows=[],this.$refs[this.basciConfig.ref].clearSelection()},showLoading:function(i){this.$nextTick((function(){this.basciConfig.loading=this.config.loading=i}))},doLayout:function(){this.$refs[this.basciConfig.ref].doLayout()},defaultSelect:function(){this.basciConfig.defaultSelectRule&&"multiple"==this.basciConfig.selectType&&this.basciConfig.data.forEach((function(i,e){var t=s.basciConfig.defaultSelectRule.call(s,i);t&&(s.config.selectRows.push(i),s.basciConfig.selectRows=s.config.selectRows),s.toggleRowSelection(i,t)}))},rowClassName:function(i){if("multiple"==this.basciConfig.selectType&&this.basciConfig.highlightCurrentRow&&this.basciConfig.selectRows.filter((function(e,t){return e==i.row})).length>0)return"multipleSelect"},setSingleDefault:function(i){"single"==this.basciConfig.selectType&&(this.clearSelection(),this.$refs[this.basciConfig.ref].setCurrentRow(i),this.$refs[this.basciConfig.ref].toggleRowSelection(i),this.basciConfig.selectRows=this.config.selectRows=[i])}},data:function(){return{sortOrders:["ascending","descending"],basciPagination:{ref:"basciPagination",background:!0,currentPage:1,pageSize:50,disabled:!1,layout:"prev, pager, next, jumper",style:{textAlign:"center",marginTop:"10px"},total:""},basciConfig:{ref:"basciTable",emptyText:"",loading:!0,border:!0,headerCellStyle:{background:"#198FFF",color:"#fff",fontWeight:"400"},headerRowStyle:{minHeight:"40px",height:"40px"},columns:[],sort:{},beforeSort:{},stripe:!1,highlightCurrentRow:!0,width:"100%",style:{width:"100%"},show:!0,refresh:!1,data:[]}}},watch:{"basciConfig.data":function(i,e){this.basciConfig.data=this.config.data=i,this.basciConfig.selectRows=this.config.selectRows=[],this.$nextTick((function(){this.defaultSelect(),this.$refs[this.basciConfig.ref].bodyWrapper.scrollTop=0,this.$refs[this.basciConfig.ref].bodyWrapper.scrollLeft=0,this.basciConfig.loading=this.config.loading=this.basciPagination.disabled=this.pagination.disabled=!1,this.$refs[this.basciConfig.ref].doLayout(),this.headerColumsRepair()}))},"config.data":function(i,e){this.basciConfig.data=this.config.data=i,this.basciConfig.selectRows=this.config.selectRows=[],this.$nextTick((function(){this.$refs[this.basciConfig.ref].bodyWrapper.scrollTop=0,this.$refs[this.basciConfig.ref].bodyWrapper.scrollLeft=0,this.basciConfig.loading=this.config.loading=this.basciPagination.disabled=this.pagination.disabled=!1,this.$refs[this.basciConfig.ref].doLayout(),this.headerColumsRepair()}))},"basciPagination.currentPage":function(i,e){this.basciPagination.currentPage=this.pagination.currentPage=i},"pagination.currentPage":function(i,e){this.basciPagination.currentPage=this.pagination.currentPage=i},"basciPagination.total":function(i,e){this.basciPagination.total=this.pagination.total=i},"pagination.total":function(i,e){this.basciPagination.total=this.pagination.total=i},"config.defaultSelectRule":function(){this.basciConfig.defaultSelectRule=this.config.defaultSelectRule;var i=this.basciConfig.data;this.basciConfig.data=[],this.basciConfig.selectRows=this.config.selectRows=[],this.$nextTick((function(){this.basciConfig.data=this.config.data=i}))},"basciConfig.selectType":function(i,e){"single"==i&&this.$nextTick((function(){try{var i=this.$refs[this.basciConfig.ref].$el.getElementsByTagName("th");i.length>0&&i[0].getElementsByClassName("el-checkbox").length>0&&(i[0].getElementsByClassName("el-checkbox")[0].style.display="none")}catch(i){console.log("checkAll_dom_error:",i)}}))}},beforeCreate:function(){s=this},created:function(){this.componentReady()}},a=t(148),r=Object(a.a)(o,n,[],!1,null,null,null);r.options.__file="src/components/basci-grid.vue";e.default=r.exports},491:function(i,e,t){var n=t(503);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);(0,t(97).default)("1ebcffdf",n,!1,{})},502:function(i,e,t){"use strict";var n=t(491);t.n(n).a},503:function(i,e,t){var n=t(95),s=t(504);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[i.i,s,""]]);var o={insert:"head",singleton:!1},a=(n(s,o),s.locals?s.locals:{});i.exports=a},504:function(i,e,t){(e=t(96)(!1)).push([i.i,"\n.el-table__body-wrapper{\n  position: relative;\n  overflow: hidden;\n}\n",""]),i.exports=e},522:function(i,e,t){"use strict";t.r(e);var n=function(){var i=this.$createElement;return(this._self._c||i)("basci-grid",{ref:"basciGrid",attrs:{config:this.grid,pagination:this.pagination},on:{"sort-change":this.loadData,"current-change":this.loadData,"row-dbclick":this.rowDbClick}})};n._withStripped=!0;t(486);var s=t(497),o=t(489),a={},r={name:"grid",components:{basciGrid:o.default,PerfectScrollbar:s.default},data:function(){return{xx:"公司",grid:{height:"90%",defaultSort:{prop:"date",order:"descending"},columns:[{prop:"date",label:"时间",align:"center",width:"100",sortable:"custom"},{prop:"desc",label:"描述",align:"center",sortable:"custom"}],data:[]},pagination:{currentPage:1,pageSize:20,layout:"prev, slot, next"}}},methods:{loadData:function(i,e){console.log("当前页:",e.currentPage),console.log("排序字段:",i.sort.column),console.log("排序order:",i.sort.order),setTimeout((function(){if(i.data=[],e.currentPage<90){for(var t=0;t<e.currentPage;t++)i.data.push({id:t,date:"2020-04",desc:"那就看你就看就看就看"+t,qu:"大伤脑筋健康的数据库",address:"迦南科技电视剧的时间里"});a.$nextTick((function(){i.data=i.data.sort((function(i,e){return i.id-e.id}))}))}}),2e3)},rowDbClick:function(i,e,t){alert(JSON.stringify(i))}},beforeCreate:function(){window.vm=this,a=this},mounted:function(){this.grid.data.push({id:0,date:"2020-04",desc:"那就看你就看就看就看0"}),window.p=t(497).default}},c=(t(502),t(148)),l=Object(c.a)(r,n,[],!1,null,null,null);l.options.__file="src/components/grid-demo.vue";e.default=l.exports}}]);
//# sourceMappingURL=3.90899eb356bfbf529860.js.map