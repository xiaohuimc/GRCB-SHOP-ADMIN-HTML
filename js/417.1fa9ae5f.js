"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[417],{59744:function(t,s,e){e.d(s,{Z:function(){return d}});var a=function(){var t=this,s=t._self._c;return s("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?s("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?s("i",{class:t.icon}):t._e(),t.$slots.default?s("span",[t._t("default")],2):t._e()])},i=[],o={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize(){return(this.elFormItem||{}).elFormItemSize},buttonSize(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick(t){this.$emit("click",t)}}},l=o,r=e(1001),n=(0,r.Z)(l,a,i,!1,null,null,null),d=n.exports},72417:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-page"},[s("div",{staticClass:"content-nav"},[s("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{name:"order"}}},[t._v("订单管理")]),s("el-breadcrumb-item",[t._v(t._s(t.infoForm.order_sn?"订单详情":"添加订单"))])],1),s("div",{staticClass:"operation-nav"},[s("el-button",{attrs:{type:"primary",size:"small",icon:"arrow-left"},on:{click:t.goBackPage}},[t._v("返回列表")])],1)],1),s("div",{staticClass:"order-status-text"},[s("label",[t._v(t._s(t.infoForm.order_status_text))]),s("div",[s("el-button",{attrs:{type:"danger",plain:""},on:{click:t.changeStatus}},[t._v("变更状态")])],1)]),s("div",{staticClass:"content-main"},[s("div",{staticClass:"form-table-box"},[s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"订单信息",name:"first"}},[s("div",{staticClass:"content-title marginTop"},[t._v("买家信息：")]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.addressData,border:"",stripe:""}},[s("el-table-column",{attrs:{prop:"user_id",label:"用户id",width:"70"}}),s("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"100"}}),s("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.row.avatar,alt:""}})]}}])}),s("el-table-column",{attrs:{prop:"name",label:"客户名",width:"100"}}),s("el-table-column",{attrs:{prop:"mobile",label:"客户手机",width:"120"}}),s("el-table-column",{attrs:{prop:"address",label:"客户地址"}}),s("el-table-column",{attrs:{prop:"postscript",label:"买家备注",width:"300"}}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small"},on:{click:function(s){return t.addressEdit(e.$index,e.row)}}},[t._v("编辑 ")])]}}])})],1),s("div",{staticClass:"content-title marginTop"},[t._v("货物信息：")]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.infoForm.goodsList,border:"",stripe:""}},[s("el-table-column",{attrs:{prop:"goods_sn",label:"商品SKU",width:"120"}}),s("el-table-column",{attrs:{prop:"list_pic_url",label:"商品图",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.row.list_pic_url,alt:""}})]}}])},[t._v("list_pic_url ")]),s("el-table-column",{attrs:{prop:"goods_name",label:"商品名"}}),s("el-table-column",{attrs:{prop:"goods_specifition_name_value",label:"型号",width:"100"}}),s("el-table-column",{attrs:{prop:"retail_price",label:"售价",width:"100"}}),s("el-table-column",{attrs:{prop:"number",label:"购买数量",width:"100"}}),s("el-table-column",{attrs:{label:"小计",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("label",[t._v(t._s(e.row.retail_price*e.row.number))])]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small"},on:{click:function(s){return t.goodsListEdit(e.$index,e.row)}}},[t._v("编辑 ")]),s("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){return t.handleRowDelete(e.$index,e.row)}}},[t._v("删除 ")])]}}])})],1),s("div",{staticClass:"detail-wrap"},[s("div",{staticClass:"total-price"},[t._v(" 优惠：¥"+t._s(t.infoForm.promotions_price))]),s("div",{staticClass:"total-price"},[t._v(" 合计：¥"+t._s(t.infoForm.actual_price)+"（含运费：¥"+t._s(t.infoForm.freight_price)+"）")]),s("div",{staticClass:"total-price"},[t._v(" 改价前：¥"+t._s(t.infoForm.change_price)+"（含运费：¥"+t._s(t.infoForm.freight_price)+"）")]),s("div",{staticClass:"total-price"},[t._v(" "+t._s(t.infoForm.change_price-t.infoForm.actual_price>0?"优惠金额："+(t.infoForm.change_price-t.infoForm.actual_price).toFixed(2):"涨价金额："+(t.infoForm.actual_price-t.infoForm.change_price).toFixed(2)))])]),s("div",{staticClass:"memo-wrap"},[s("div",{staticClass:"content-title"},[t._v("卖家备注：")]),s("el-input",{staticClass:"memo-input",attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.infoForm.admin_memo,callback:function(s){t.$set(t.infoForm,"admin_memo",s)},expression:"infoForm.admin_memo"}}),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.saveAdminMemo}},[t._v("保存 ")])],1),s("div",{staticClass:"footer"},[s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("订单ID：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.id))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("订单号：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.order_sn))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("加入时间：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.add_time))])]),t.infoForm.pay_time?s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("付款时间：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.pay_time))])]):t._e(),t.infoForm.shipping_time?s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("发货时间：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.shipping_time))])]):t._e(),t.infoForm.confirm_time?s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("确认时间：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.confirm_time))])]):t._e(),t.infoForm.dealdone_time?s("div",{staticClass:"item"},[s("div",{staticClass:"t"},[t._v("完成时间：")]),s("div",{staticClass:"c"},[t._v(t._s(t.infoForm.dealdone_time))])]):t._e()])],1),s("el-tab-pane",{attrs:{label:"物流信息",name:"second"}},[""==t.expressData.logistic_code?s("div",{staticClass:"no-traces"},[t._v("暂无物流信息")]):s("div",{staticClass:"has-traces"},[s("p",[s("label",[t._v("快递公司：")]),s("span",[t._v(t._s(t.expressData.shipper_name))])]),s("p",[s("label",[t._v("快递单号：")]),s("span",[t._v(t._s(t.expressData.logistic_code))])]),s("p",[s("label",[t._v("快递轨迹：")])]),1==t.on_posting?s("div",{staticClass:"posting"},[t._v("正在查询，请稍候...")]):t._e(),s("ul",{staticClass:"traces-wrap"},t._l(t.expressData.traces,(function(e){return s("li",{staticClass:"traces-list"},[s("div",{staticClass:"traces-time"},[t._v(t._s(e.time))]),s("div",{staticClass:"traces-content"},[t._v(t._s(e.status))])])})),0)])])],1)],1)]),s("el-dialog",{attrs:{title:"修改地址",visible:t.dialogAddressVisible},on:{"update:visible":function(s){t.dialogAddressVisible=s}}},[s("el-form",{attrs:{model:t.nowAddressData}},[s("el-form-item",{attrs:{label:"所在地区:","label-width":"120px"}},[s("el-cascader",{attrs:{options:t.options,placeholder:"请选择"},model:{value:t.addOptions,callback:function(s){t.addOptions=s},expression:"addOptions"}})],1),s("el-form-item",{attrs:{label:"详细地址:","label-width":"120px"}},[s("el-input",{staticClass:"el-input",attrs:{"auto-complete":"off",placeholder:"请输入详细地"},model:{value:t.nowAddressData.cAddress,callback:function(s){t.$set(t.nowAddressData,"cAddress",s)},expression:"nowAddressData.cAddress"}})],1),s("el-form-item",{attrs:{label:"收货人:","label-width":"120px"}},[s("el-input",{staticClass:"el-input",attrs:{"auto-complete":"off",placeholder:"请输入收货人"},model:{value:t.nowAddressData.name,callback:function(s){t.$set(t.nowAddressData,"name",s)},expression:"nowAddressData.name"}})],1),s("el-form-item",{attrs:{label:"手机:","label-width":"120px"}},[s("el-input",{staticClass:"el-input",attrs:{"auto-complete":"off",placeholder:"请输入收货人手机"},model:{value:t.nowAddressData.mobile,callback:function(s){t.$set(t.nowAddressData,"mobile",s)},expression:"nowAddressData.mobile"}})],1),s("el-form-item",{attrs:{label:"留言:","label-width":"120px"}},[s("el-input",{staticClass:"el-input",attrs:{"auto-complete":"off",placeholder:"",disabled:!0},model:{value:t.nowAddressData.postscript,callback:function(s){t.$set(t.nowAddressData,"postscript",s)},expression:"nowAddressData.postscript"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){t.dialogAddressVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.saveAddress}},[t._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"修改商品",visible:t.dialogGoodsListVisible},on:{"update:visible":function(s){t.dialogGoodsListVisible=s}}},[s("el-form",{attrs:{model:t.goodsData}},[s("el-form-item",{attrs:{label:"id:","label-width":"120px"}},[s("label",[t._v(t._s(t.goodsData.goods_id))])]),s("el-form-item",{attrs:{label:"商品图:","label-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.goodsData.list_pic_url,alt:""}})]}}])}),s("el-form-item",{attrs:{label:"商品名:","label-width":"120px"}},[s("label",[t._v(t._s(t.goodsData.goods_name))])]),s("el-form-item",{attrs:{label:"商品型号:","label-width":"120px"}},[s("label",[t._v(t._s(t.goodsData.goods_specifition_name_value))])]),s("el-form-item",{attrs:{label:"售价:","label-width":"120px"}},[s("label",[t._v(t._s(t.goodsData.retail_price))])]),s("el-form-item",{attrs:{label:"购买数量:","label-width":"120px"}},[s("el-input-number",{attrs:{min:1,label:"购买的数量"},model:{value:t.goodsData.number,callback:function(s){t.$set(t.goodsData,"number",s)},expression:"goodsData.number"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){t.dialogGoodsListVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.saveGoodsList}},[t._v("保存并返回")])],1)],1),s("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("span",[t._v("确定打包备货")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){t.dialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.PackageConfirm}},[t._v("确 定")])],1)]),s("el-dialog",{attrs:{title:"变更状态",visible:t.statusVisible,width:"30%"},on:{"update:visible":function(s){t.statusVisible=s}}},[s("el-form",{attrs:{model:t.statusData}},[s("el-form-item",{attrs:{label:"状态:","label-width":"120px"}},[s("el-select",{staticClass:"el-select-class",attrs:{placeholder:"选择状态"},model:{value:t.statusValue,callback:function(s){t.statusValue=s},expression:"statusValue"}},t._l(t.statusList,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){t.statusVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.statusConfirm}},[t._v("确 定")])],1)],1)],1)},i=[],o=(e(57658),e(59744)),l={data(){return{statusList:[{value:"101",label:"待付款"},{value:"102",label:"交易关闭"},{value:"300",label:"待发货"},{value:"301",label:"已发货"},{value:"401",label:"交易成功"}],statusVisible:!1,statusValue:"",statusData:{},activeName:"first",dialogVisible:!1,dialogAddressVisible:!1,dialogGoodsListVisible:!1,addressData:[],infoForm:{order_sn:0},infoRules:{user_id:[{required:!0,message:"请输入名称",trigger:"blur"}],order_sn:[{required:!0,message:"请输入简介",trigger:"blur"}],order_status:[{required:!0,message:"请选择商品图片",trigger:"blur"}]},options:[],addOptions:[],nowAddressData:{},goodsData:{},oldGoodsNumber:0,expressData:{},is_finish:0,on_posting:0}},methods:{changeStatus(){this.statusVisible=!0},statusConfirm(){this.axios.post("order/changeStatus",{status:this.statusValue,orderSn:this.infoForm.order_sn}).then((t=>{this.getInfo(),this.statusVisible=!1}))},handleClick(t,s){let e=t._data.index;1==e&&0==this.is_finish&&(this.on_posting=1,this.axios.post("order/getOrderExpress",{orderId:this.infoForm.id}).then((t=>{this.expressData=t.data.data,this.expressData.traces=JSON.parse(this.expressData.traces),this.is_finish=t.data.data.is_finish,this.on_posting=0})))},PackageConfirm(){this.axios.get("order/orderpack",{params:{orderSn:this.infoForm.order_sn}}).then((t=>{this.dialogVisible=!1,this.addressData=[],this.getInfo()}))},goPackage(){this.dialogVisible=!0},test(){console.log(this.addressData),console.log(this.infoForm)},handleRowDelete(t,s){this.goodsData=s,this.goodsData.order_id=this.infoForm.id,this.$confirm("确定要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.axios.post("order/goodsListDelete",this.goodsData).then((t=>{0===t.data.errno&&(this.$message({type:"success",message:"删除成功!"}),this.$router.go(-1))}))})).catch((()=>{}))},saveGoodsList(){this.goodsData.order_id=this.infoForm.id;let t=this.oldGoodsNumber,s=this.goodsData.number;if(console.log(t),console.log(s),t!=s){let e=0,a=0;t>s?e=t-s:(e=s-t,a=1),this.goodsData.number=e,this.goodsData.addOrMinus=a,this.axios.post("order/saveGoodsList",this.goodsData).then((t=>{this.$router.go(-1)}))}else this.dialogGoodsListVisible=!1},saveAdminMemo(){this.axios.post("order/saveAdminMemo",{text:this.infoForm.admin_memo,id:this.infoForm.id}).then((t=>{console.log("++---------------------------++"),console.log(t),console.log("++---------------------------++"),0===t.data.errno?this.$message({type:"success",message:"保存成功!"}):this.$message({type:"error",message:"保存失败"})}))},saveAddress(){this.nowAddressData.order_sn=this.infoForm.order_sn,this.nowAddressData.addOptions=this.addOptions,this.axios.post("order/saveAddress",this.nowAddressData).then((t=>{console.log("++---------------------------++"),console.log(t),console.log("++---------------------------++"),0===t.data.errno?(this.$message({type:"success",message:"修改成功!"}),this.addressData=[],this.getInfo(),this.dialogAddressVisible=!1):this.$message({type:"error",message:"修改失败"})}))},onSubmitInfo(){},goBackPage(){this.$router.go(-1)},addressEdit(){this.dialogAddressVisible=!0},goodsListEdit(t,s){console.log(s),this.goodsData=s,this.oldGoodsNumber=s.number,this.dialogGoodsListVisible=!0},getAllRegion(){this.axios.get("order/getAllRegion").then((t=>{this.options=t.data.data}))},getInfo(){if(this.infoForm.id<=0)return!1;this.axios.get("order/detail",{params:{orderId:this.infoForm.id}}).then((t=>{console.log("++---------------------------++"),console.log(t.data.data),console.log("++---------------------------++"),this.infoForm=t.data.data.orderInfo;let s={user_id:this.infoForm.user_id,name:this.infoForm.consignee,nickname:this.infoForm.user_name,avatar:this.infoForm.avatar,mobile:this.infoForm.mobile,postscript:this.infoForm.postscript,address:this.infoForm.full_region+this.infoForm.address,cAddress:this.infoForm.address};this.addressData=[],this.addressData.push(s),this.nowAddressData=s,this.addOptions.push(this.infoForm.province,this.infoForm.city,this.infoForm.district),console.log(this.infoForm)}))}},components:{ElButton:o.Z},mounted(){this.infoForm.id=this.$route.query.id||0,this.getInfo(),this.getAllRegion()}},r=l,n=e(1001),d=(0,n.Z)(r,a,i,!1,null,"73236786",null),c=d.exports}}]);
//# sourceMappingURL=417.1fa9ae5f.js.map