"use strict";(self["webpackChunkmake_your_burguer"]=self["webpackChunkmake_your_burguer"]||[]).push([[177],{692:function(e,a,o){o.d(a,{Z:function(){return u}});var n=o(252),i=o(577);function s(e,a,o,s,t,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("p",{class:(0,i.C_)(e.classe)},(0,i.zw)(e.msg),3)])}var t=(0,n.aZ)({name:"MessageOrder",props:{msg:String,classe:String}}),r=o(744);const c=(0,r.Z)(t,[["render",s],["__scopeId","data-v-27f42038"]]);var u=c},778:function(e,a,o){o.r(a),o.d(a,{default:function(){return K}});var n=o(252);const i=e=>((0,n.dD)("data-v-3d699616"),e=e(),(0,n.Cn)(),e),s={class:"main-container"},t=i((()=>(0,n._)("h1",null,"Monte o seu burguer",-1)));function r(e,a,o,i,r,c){const u=(0,n.up)("Banner"),l=(0,n.up)("BurguerForm");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u),(0,n._)("div",s,[t,(0,n.Wm)(l)])],64)}const c=e=>((0,n.dD)("data-v-6ef50101"),e=e(),(0,n.Cn)(),e),u={id:"main-banner"},l=c((()=>(0,n._)("h1",null,"Make Your Burguer",-1))),p=[l];function d(e,a,o,i,s,t){return(0,n.wg)(),(0,n.iD)("div",u,p)}var m=(0,n.aZ)({name:"Banner"}),g=o(744);const h=(0,g.Z)(m,[["render",d],["__scopeId","data-v-6ef50101"]]);var v=h,_=o(963),f=o(577);const w=e=>((0,n.dD)("data-v-388ef76e"),e=e(),(0,n.Cn)(),e),b={class:"input-container"},y=w((()=>(0,n._)("label",{for:"nome"},"Nome do Cliente",-1))),D={class:"input-container"},k=w((()=>(0,n._)("label",{for:"pao"},"Escolha o pão:",-1))),B=w((()=>(0,n._)("option",{value:""},"Selecione seu pão",-1))),M=["value"],S={class:"input-container"},Z=w((()=>(0,n._)("label",{for:"carne"},"Escolha a carne do seu Burguer:",-1))),C=w((()=>(0,n._)("option",{value:"",selected:""},"Selecione o tipo de carne",-1))),F=["value"],H={id:"opcionais-container",class:"input-container"},I=w((()=>(0,n._)("label",{id:"opcionais-title",for:"opcionais"},"Selecione os opcionais:",-1))),j=["value"],z=w((()=>(0,n._)("div",{class:"input-container"},[(0,n._)("input",{type:"submit",class:"submit-btn",value:"Criar meu Burguer"})],-1)));function Y(e,a,o,i,s,t){const r=(0,n.up)("Message");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n.Wm)(r,{msg:e.msg,classe:e.tipoMsg},null,8,["msg","classe"]),[[_.F8,e.msg]]),(0,n._)("form",{id:"burguer-form",onSubmit:a[4]||(a[4]=(...a)=>e.createBurguer&&e.createBurguer(...a))},[(0,n._)("div",b,[y,(0,n.wy)((0,n._)("input",{type:"text",id:"nome",name:"name","onUpdate:modelValue":a[0]||(a[0]=a=>e.nome=a),placeholder:"Digite o seu nome"},null,512),[[_.nr,e.nome]])]),(0,n._)("div",D,[k,(0,n.wy)((0,n._)("select",{name:"pao",id:"pao","onUpdate:modelValue":a[1]||(a[1]=a=>e.pao=a)},[B,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.paes,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.id,value:e.tipo},(0,f.zw)(e.tipo),9,M)))),128))],512),[[_.bM,e.pao]])]),(0,n._)("div",S,[Z,(0,n.wy)((0,n._)("select",{name:"carne",id:"carne","onUpdate:modelValue":a[2]||(a[2]=a=>e.carne=a)},[C,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.carnes,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.id,value:e.tipo},(0,f.zw)(e.tipo),9,F)))),128))],512),[[_.bM,e.carne]])]),(0,n._)("div",H,[I,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.opcionaisdata,(o=>((0,n.wg)(),(0,n.iD)("div",{class:"checkbox-container",key:o.id},[(0,n.wy)((0,n._)("input",{value:o.tipo,type:"checkbox",name:"opcionais","onUpdate:modelValue":a[3]||(a[3]=a=>e.opcionais=a)},null,8,j),[[_.e8,e.opcionais]]),(0,n._)("span",null,(0,f.zw)(o.tipo),1)])))),128))]),z],32)])}var P=o(692),T=(0,n.aZ)({name:"BurguerForm",components:{Message:P.Z},data(){return{paes:[],carnes:[],opcionaisdata:[],nome:"",pao:{},carne:{},opcionais:[],msg:"",tipo:"",tipoMsg:""}},methods:{async getIngredients(){const e=await fetch("https://my-json-server.typicode.com/Paulogsiqueira/HamburgueriaJson/ingredientes"),a=await e.json();this.paes=a.paes,this.carnes=a.carnes,this.opcionaisdata=a.opcionais,this.nome="",this.carne="",this.pao=""},validaFormulario(){return console.log(this.carne),""!=this.nome&&""!=this.pao.toString()&&""!=this.carne.toString()},async createBurguer(e){if(e.preventDefault(),this.validaFormulario()){const e={nome:this.nome,carne:this.carne,pao:this.pao,opcionais:Array.from(this.opcionais),status:"Solicitado"},a=JSON.stringify(e),o=await fetch("https://my-json-server.typicode.com/Paulogsiqueira/HamburgueriaJson/burguers",{method:"POST",headers:{"Content-Type":"application/json"},body:a}),n=await o.json();this.nome="",this.carne="",this.pao="",this.opcionais=[],this.msg=`Pedido Nº ${n.id} realizado com sucesso!`,this.tipoMsg="message-container",setTimeout((()=>{this.msg=""}),3e3)}else this.msg="Favor preencher todos os campos",this.tipoMsg="message-container-erro",setTimeout((()=>{this.msg=""}),3e3)}},mounted(){this.getIngredients()}});const U=(0,g.Z)(T,[["render",Y],["__scopeId","data-v-388ef76e"]]);var V=U,x=(0,n.aZ)({name:"Home",components:{Banner:v,BurguerForm:V}});const J=(0,g.Z)(x,[["render",r],["__scopeId","data-v-3d699616"]]);var K=J}}]);
//# sourceMappingURL=home.abfa7544.js.map