"use strict";(self.webpackChunkreact_ts_template=self.webpackChunkreact_ts_template||[]).push([[479],{794:(e,l,s)=>{s.r(l),s.d(l,{default:()=>gl});var a=s(2791),t=s(7689),n=s(9895),o=s(9230),i=s(1070),r=s(3012),c=s(58),d=s(7692),u=s(1655),m=s(184);const x=e=>{let{onClickAdd:l}=e;const{t:s}=(0,o.$G)();return(0,m.jsxs)(u.z,{className:"rounded-md shadow-none",size:"sm",onClick:l,children:[(0,m.jsx)(d.cHT,{size:24,className:"mr-2"}),s("addUser")]})},f=(0,a.memo)(x);var C=s(7477),j=s(1134),y=s(3960),g=s(763),h=s(6866),p=s(9300);var b=s(2785),k=s(3853);const v=e=>{let{placeholder:l}=e;return(0,m.jsxs)("div",{className:"grid h-14 w-full grid-cols-6 gap-x-2",children:[(0,m.jsx)("div",{className:"col-span-5 flex h-full items-center justify-center rounded-lg bg-gray-100 text-inherit",children:l}),(0,m.jsx)("div",{className:"col-span-1 flex h-full items-center justify-center rounded-lg bg-gray-100 text-inherit",children:(0,m.jsx)(k.Yjd,{size:24})})]})},w=(0,a.memo)(v);var N=s(8820);const E=e=>{let{image:l,onClearImage:s}=e;const t=(0,a.useCallback)((e=>{s(e,l)}),[l,s]);return(0,m.jsxs)("div",{className:"group relative aspect-4/3 h-14 w-[calc(25%-12px)] flex-none rounded-lg",children:[(0,m.jsx)("img",{src:l,alt:"cstorage",className:"h-full w-full rounded-lg object-cover object-center"}),(0,m.jsx)("div",{role:"button",tabIndex:0,className:"invisible absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-red-500 opacity-70 group-hover:visible",onClick:t,children:(0,m.jsx)(k.Ybf,{size:22})})]})},S=(0,a.memo)(E),A=e=>{let{images:l,onClearImage:s,isLoading:a,reviewedImages:t}=e;return(0,m.jsxs)("div",{className:"flex flex-wrap justify-start gap-4 rounded-lg",children:[Array.from(l).map(((e,l)=>(0,m.jsx)(S,{image:e,onClearImage:s},l))),a&&Array.from(t).map(((e,l)=>(0,m.jsxs)("div",{className:"relative h-14 w-[calc(25%-12px)] rounded-lg",children:[(0,m.jsx)("img",{src:e,alt:"CStorage",className:"h-full w-full rounded-lg object-cover object-center opacity-50"}),(0,m.jsx)("div",{className:"absolute inset-0 m-auto h-4 w-4 animate-spin rounded-full border-2 border-t-gray-600"})]},l))),(0,m.jsx)("div",{className:"flex h-14 grow items-center justify-center rounded-lg bg-gray-100",children:(0,m.jsx)(N.Em2,{size:22})})]})},O=(0,a.memo)(A),I=e=>{let{className:l,containerClassName:s,error:t,inlineError:n=!1,multiple:i,value:c,label:d,disabled:u=!1,onChange:x,placeholder:f,...j}=e;const{t:y}=(0,o.$G)("company"),k=(0,p.Z)(),v=(0,a.useRef)(),[N,E]=(0,a.useState)([]),[S,A]=(0,a.useState)(!1),[I,G]=(0,a.useState)([]),L=(0,a.useRef)(!0),M=(0,a.useCallback)((()=>{v.current.click()}),[]),D=(0,a.useCallback)((async e=>{A(!0),i||null===E||void 0===E||E([]);try{const l=await r.TQ.uploadImage(e,b.Az.SYSTEM);if(i)return E((e=>[...e,l.absolute_url])),void(L.current=!1);null===x||void 0===x||x(l.absolute_url)}catch(l){l instanceof C.d7&&k.error(y("uploadError"))}finally{A(!1),G([])}}),[i,x,y,k]),B=(0,a.useCallback)((e=>{const l=e.target.files;null!==l&&Array.from(l).forEach((e=>{G((l=>{return[...l,(s=e,s instanceof File?URL.createObjectURL(s):s.url)];var s})),D(e)}))}),[D]),Z=(0,a.useCallback)(((e,l)=>{e.preventDefault(),e.stopPropagation(),E((e=>e.filter((e=>e!==l)))),i?null===x||void 0===x||x(N.filter((e=>e!==l))):null===x||void 0===x||x("")}),[N,i,x]);return(0,a.useEffect)((()=>{L.current||null===x||void 0===x||x(N)}),[N,x]),(0,a.useEffect)((()=>{L.current&&(c&&!(0,g.isEmpty)(c)?E(Array.isArray(c)?c:[c]):E([]))}),[c]),(0,m.jsxs)("div",{className:(0,h.m)("relative block cursor-text rounded-lg border-2 border-gray-100 bg-white px-4 py-4 ring-inset transition-colors duration-100 hover:border-blue-500",u&&"cursor-default bg-gray-50 ring-gray-100 hover:border-gray-100",s),children:[(0,m.jsxs)("div",{className:(0,h.m)("absolute left-2 top-1.5 z-5 -mt-0.5 flex -translate-y-4 items-center justify-between bg-white px-2 text-sm font-semibold text-blue-500 transition-all duration-100",u&&"text-gray-400"),children:[(0,m.jsx)("div",{className:"absolute inset-y-0 left-0 top-1/2 -z-30 w-full -translate-y-0.5"}),d]}),(0,m.jsxs)("button",{type:"button",className:(0,h.m)("block w-full cursor-pointer text-left outline-none",l),tabIndex:0,onClick:M,children:[(0,m.jsx)("input",{type:"file",className:"hidden",name:"input_file",ref:v,multiple:i,onChange:B,...j}),(0,m.jsx)("div",{className:"h-full w-full",children:(null===N||void 0===N?void 0:N.length)>0||S?(0,m.jsx)(O,{images:N,onClearImage:Z,isLoading:S,reviewedImages:I}):(0,m.jsx)(w,{placeholder:f})})]}),!n&&Boolean(t)&&(0,m.jsx)("div",{className:"-mb-1.5 mt-1.5 text-sm text-red-500",children:t})]})},G=(0,a.memo)(I),L=e=>{var l;let{name:s,control:a,rules:t,multiple:n,containerClassName:o,...i}=e;if(!a||!a.register)return(0,m.jsx)(G,{name:s,multiple:n,...i});const{field:{value:r=null,onChange:c,onBlur:d},formState:{errors:u}}=(0,j.bc)({name:s,control:a,rules:t});return(0,m.jsx)(G,{value:null!==r&&void 0!==r?r:null,error:null===(l=u[s])||void 0===l?void 0:l.message,multiple:n,onChange:c,onBlur:d,containerClassName:o,...(0,g.omit)(i,["value","onChange","onBlur"])})},M=(0,a.memo)(L);var D=s(4520);const B={email:"",name:"",password:"",username:""},Z=e=>{let{isOpen:l,user:s,onClose:t,onCreate:n,onCreated:r,onEdit:c,onEdited:d,...u}=e;const{t:x}=(0,o.$G)(),f=(0,p.Z)(),[g,h]=(0,a.useState)(!1),b=(0,a.useCallback)((()=>{f.error(x("unknown"))}),[x,f]),{control:k,reset:v,handleSubmit:w,...N}=(0,j.cI)({defaultValues:B}),E=(0,a.useCallback)((async e=>{try{await n(e),f.success(x("addUserSuccessfully")),r(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,N.setError,null,b)}finally{h(!1)}}),[b,N.setError,t,n,r,x,f]),S=(0,a.useCallback)((async e=>{if(s)try{await c(s.uuid,e),f.success(x("edit")),d(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,N.setError,null,b)}finally{h(!1)}}),[b,N.setError,t,c,d,x,f,s]),A=w((async e=>{h(!0),s?S(e):E(e)}));return(0,a.useEffect)((()=>{l&&(h(!1),v(s||B))}),[l,v,s]),(0,m.jsxs)(i.u,{isLoading:g,isOpen:l,isFormModal:!0,title:x(s?"editUser":"addUser"),onClose:t,onConfirm:A,...u,children:[(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("username"),name:"username"}),(0,m.jsx)(y.II,{className:"block",control:k,disabled:g,label:x("password"),name:"password",type:"password",autoSave:"off"}),(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("email"),name:"email"}),(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("name"),name:"name"}),(0,m.jsx)(M,{containerClassName:"w-full",name:"avatar",control:k,disabled:g,multiple:!1,label:x("avatar"),placeholder:x("chooseAvatar")})]})},z=(0,a.memo)(Z);var $=s(8080),F=s(8486),R=s(2070),U=s(128);const P=e=>{let{alt:l,skeleton:s=!1,src:a,type:t,className:n}=e;return(0,m.jsxs)("div",{className:(0,h.m)("h-12 w-12 rounded-full bg-gray-100",n),children:[s&&(0,m.jsx)(R.oY,{className:(0,h.m)("h-full w-full rounded-full",n)}),!s&&t===b.n6.ROUNDED&&(0,m.jsx)(U.q,{src:a||"",alt:l,className:"w-full h-full"}),!s&&t===b.n6.BOX&&(0,m.jsx)("img",{src:a||"",alt:l,className:"w-full h-full rounded-md"})]})},V=(0,a.memo)(P);var Y=s(3045),_=s(1454),W=s(6127);const T=e=>{let{id:l,onClickEdit:s,onClickDelete:a}=e;return(0,m.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,m.jsx)(_.Z,{data:l,onClick:s}),(0,m.jsx)(W.h8,{data:l,onClick:a})]})},H=(0,a.memo)(T),q=e=>{let{data:l,isLoading:s,onClickEdit:t,onClickDelete:n,onGetAll:i,...r}=e;const{t:c}=(0,o.$G)(),d=(0,a.useMemo)((()=>(0,$.Cl)()),[]),u=(0,a.useMemo)((()=>[d.accessor((e=>String(e.uuid)),{id:"uuid",header:c("id")}),d.display({id:"avatar",header:c("avatar"),cell:e=>(0,m.jsx)(V,{alt:e.row.original.name,type:b.n6.ROUNDED}),meta:{skeleton:(0,m.jsx)(V,{skeleton:!0,type:b.n6.ROUNDED})}}),d.accessor((e=>e.username),{id:"username",header:c("username"),meta:{filterBy:"username",getFilterOptions:i}}),d.accessor((e=>e.email),{id:"email",header:c("email"),meta:{filterBy:"email",getFilterOptions:i}}),d.accessor((e=>e.name),{id:"name",header:c("name"),meta:{filterBy:"name",getFilterOptions:i}}),d.display({id:"actions",cell:e=>(0,m.jsx)(H,{id:e.row.original.uuid,onClickEdit:t,onClickDelete:n}),meta:{skeleton:(0,m.jsx)(Y.Z,{numberOfActions:2})}})]),[d,n,t,c,i]);return(0,m.jsx)(F.Z,{data:l,columns:u,isLoading:s,...r})},X=(0,a.memo)(q),Q=()=>{const{t:e}=(0,o.$G)(),[l,s]=(0,a.useState)([]),[t,d]=(0,a.useState)(null),[u,x]=(0,a.useState)(!0),[C,j]=(0,a.useState)(!1),[y,g]=(0,a.useState)(!1),[h,p]=(0,a.useState)(null),[b,k]=(0,a.useState)({}),v=(0,a.useMemo)((()=>{var e;return null!==(e=l.find((e=>e.uuid===h)))&&void 0!==e?e:null}),[h,l]),w=(0,a.useCallback)((()=>{g(!0)}),[]),N=(0,a.useCallback)((e=>{p(null!==e&&void 0!==e?e:null),g(!0)}),[]),E=(0,a.useCallback)((e=>{p(null!==e&&void 0!==e?e:null),j(!0)}),[]),S=(0,a.useCallback)((()=>{g(!1),j(!1),p(null)}),[]),A=(0,a.useCallback)((async()=>{try{const{data:e,meta:l}=await r.Vy.getUsers(b);s(e),d(l)}finally{x(!1)}}),[b]);(0,a.useEffect)((()=>{A()}),[A]);const O=(0,a.useCallback)((async()=>{try{await(0,c.deleteUser)(h)}finally{A()}}),[h,A]);return(0,m.jsxs)(n.Vu,{title:e("userManagement"),action:(0,m.jsx)(f,{onClickAdd:w}),children:[(0,m.jsx)(X,{data:l,meta:t,isLoading:u,onClickEdit:N,onClickDelete:E,onChangeState:k,onGetAll:r.Vy.getUsers}),(0,m.jsx)(i.c,{title:e("deleteUser",{name:null===v||void 0===v?void 0:v.name}),message:e("deleteMessage"),isOpen:C,status:"danger",onClose:S,onConfirm:O}),(0,m.jsx)(z,{isOpen:y,user:v,onCreate:r.Vy.createUser,onCreated:A,onEdit:r.Vy.editUser,onEdited:A,onClose:S})]})},K=(0,a.memo)(Q);var J=s(6856),ee=s(9129),le=s(3962);const se=()=>{const{t:e}=(0,o.$G)();return(0,m.jsxs)(n.N_,{id:"adminSidebar",className:"pt-20",children:[(0,m.jsx)(n.GL,{id:"order",icon:(0,m.jsx)(J.nom,{}),text:e("order"),to:le.no.ORDER}),(0,m.jsx)(n.GL,{id:"product",icon:(0,m.jsx)(J.HUb,{}),text:e("product"),to:le.no.PRODUCT}),(0,m.jsx)(n.GL,{id:"category",icon:(0,m.jsx)(J.rA_,{}),text:e("category"),to:le.no.CATEGORY}),(0,m.jsx)(n.GL,{id:"user",icon:(0,m.jsx)(ee.tU0,{}),text:e("user"),to:le.no.USER}),(0,m.jsx)(n.GL,{id:"role",icon:(0,m.jsx)(ee.NLM,{}),text:e("role"),to:le.no.ROLE}),(0,m.jsx)(n.GL,{id:"config",icon:(0,m.jsx)(J.cgG,{}),text:e("config"),to:le.no.CONFIG})]})},ae=(0,a.memo)(se);var te=s(2489);const ne=e=>{let{id:l,onClickEdit:s,onClickDelete:a}=e;return(0,m.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,m.jsx)(_.Z,{data:l,onClick:s}),(0,m.jsx)(W.h8,{data:l,onClick:a})]})},oe=(0,a.memo)(ne),ie=e=>{let{data:l,meta:s,isLoading:t,onClickEdit:n,onClickDelete:i,onGetAll:r,...c}=e;const{t:d}=(0,o.$G)(),u=(0,a.useMemo)((()=>(0,$.Cl)()),[]),x=(0,a.useMemo)((()=>[u.accessor((e=>String(e.uuid)),{id:"id",header:d("id")}),u.accessor((e=>e.name),{id:"name",header:d("name"),meta:{filterBy:"name",getFilterOptions:r}}),u.accessor((e=>e.description),{id:"description",header:d("description")}),u.display({id:"actions",cell:e=>(0,m.jsx)(oe,{id:e.row.original.uuid,onClickEdit:n,onClickDelete:i}),meta:{skeleton:(0,m.jsx)(Y.Z,{numberOfActions:2})}})]),[u,i,n,d,r]);return(0,m.jsx)(F.Z,{data:l,meta:s,columns:x,isLoading:t,...c})},re=(0,a.memo)(ie),ce={name:"",description:""},de=e=>{let{isOpen:l,category:s,onClose:t,onCreate:n,onCreated:r,onEdit:c,onEdited:d,...u}=e;const{t:x}=(0,o.$G)(),f=(0,p.Z)(),[h,b]=(0,a.useState)(!1),k=(0,a.useCallback)((()=>{f.error(x("unknown"))}),[x,f]),{control:v,reset:w,handleSubmit:N,...E}=(0,j.cI)({defaultValues:ce}),S=(0,a.useCallback)((async e=>{try{await n(e),f.success(x("addCategorySuccessfully")),r(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,E.setError,null,k)}finally{b(!1)}}),[k,E.setError,t,n,r,x,f]),A=(0,a.useCallback)((async e=>{if(s)try{await c(s.uuid,e),f.success(x("editCategorySuccessfully")),d(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,E.setError,null,k)}finally{b(!1)}}),[k,E.setError,t,c,d,x,f,s]),O=N((async e=>{b(!0),s?A((0,g.omit)(e,"parent_uuid")):S(e)}));return(0,a.useEffect)((()=>{l&&(b(!1),w(s||ce))}),[l,w,s]),(0,m.jsxs)(i.u,{isLoading:h,isOpen:l,isFormModal:!0,title:x(s?"editCategory":"addCategory"),onClose:t,onConfirm:O,...u,children:[(0,m.jsx)(y.II,{className:"block w-full",control:v,disabled:h,label:x("name"),name:"name"}),(0,m.jsx)(y.II,{className:"block w-full",control:v,disabled:h,label:x("description"),name:"description"})]})},ue=(0,a.memo)(de),me=e=>{let{onClickAdd:l}=e;const{t:s}=(0,o.$G)();return(0,m.jsxs)(u.z,{className:"rounded-md shadow-none",size:"sm",onClick:l,children:[(0,m.jsx)(d.poH,{size:24,className:"mr-2"}),s("addCategory")]})},xe=(0,a.memo)(me),fe=()=>{const{t:e}=(0,o.$G)(),[l,s]=(0,a.useState)([]),[t,r]=(0,a.useState)(null),[c,d]=(0,a.useState)(!0),[u,x]=(0,a.useState)(!1),[f,C]=(0,a.useState)(null),[j,y]=(0,a.useState)(!1),[g,h]=(0,a.useState)({}),p=(0,a.useMemo)((()=>{var e;return null!==(e=l.find((e=>e.uuid===f)))&&void 0!==e?e:null}),[f,l]),b=(0,a.useCallback)((()=>{x(!0)}),[]),k=(0,a.useCallback)((e=>{C(null!==e&&void 0!==e?e:null),x(!0)}),[]),v=(0,a.useCallback)((()=>{x(!1),y(!1),C(null)}),[]),w=(0,a.useCallback)((e=>{C(null!==e&&void 0!==e?e:null),y(!0)}),[]),N=(0,a.useCallback)((async()=>{try{const{data:e,meta:l}=await(0,te.ML)(g);s(e),r(l)}finally{d(!1)}}),[g]);(0,a.useEffect)((()=>{N()}),[N]);const E=(0,a.useCallback)((async()=>{try{await(0,te.uu)(f)}finally{N()}}),[f,N]);return(0,m.jsxs)(n.Vu,{title:e("categoryManagement"),action:(0,m.jsx)(xe,{onClickAdd:b}),children:[(0,m.jsx)(re,{data:l,meta:t,isLoading:c,onClickEdit:k,onClickDelete:w,onChangeState:h,onGetAll:te.ML}),(0,m.jsx)(ue,{isOpen:u,category:p,onCreate:te.k4,onCreated:N,onEdit:te.ht,onEdited:N,onClose:v}),(0,m.jsx)(i.c,{title:e("deleteCategory"),message:e("deleteMessage"),isOpen:j,status:"danger",onClose:v,onConfirm:E})]})},Ce=(0,a.memo)(fe),je=e=>{let{id:l,onClickEdit:s,onClickDelete:a}=e;return(0,m.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,m.jsx)(_.Z,{data:l,onClick:s}),(0,m.jsx)(W.h8,{data:l,onClick:a})]})},ye=(0,a.memo)(je),ge=e=>{let{data:l,meta:s,isLoading:t,onClickEdit:n,onClickDelete:i,onGetAll:r,...c}=e;const{t:d}=(0,o.$G)(),u=(0,a.useMemo)((()=>(0,$.Cl)()),[]),x=(0,a.useMemo)((()=>[u.accessor((e=>String(e.uuid)),{id:"uuid",header:d("id")}),u.display({id:"img",header:d("img"),cell:e=>(0,m.jsx)(V,{className:"w-28 h-40 rounded-md",src:e.row.original.image,alt:e.row.original.name,type:b.n6.BOX}),meta:{skeleton:(0,m.jsx)(V,{skeleton:!0,type:b.n6.BOX})}}),u.accessor((e=>e.name),{id:"name",header:d("name"),meta:{filterBy:"name",getFilterOptions:r}}),u.accessor((e=>e.price),{id:"price",header:d("price")}),u.accessor((e=>e.description),{id:"description",header:d("description")}),u.accessor((e=>e.category.name),{id:"category.name",header:d("category")}),u.display({id:"actions",cell:e=>(0,m.jsx)(ye,{id:e.row.original.uuid,onClickEdit:n,onClickDelete:i}),meta:{skeleton:(0,m.jsx)(Y.Z,{numberOfActions:2})}})]),[u,i,n,d,r]);return(0,m.jsx)(F.Z,{data:l,meta:s,columns:x,isLoading:t,...c})},he=(0,a.memo)(ge),pe={category_uuid:1,name:"",price:"",description:"",image:""},be=e=>{let{isOpen:l,product:s,onClose:t,onCreate:n,onCreated:r,onEdit:c,onEdited:d,...u}=e;const{t:x}=(0,o.$G)(),f=(0,p.Z)(),[g,h]=(0,a.useState)(!1),[b,k]=(0,a.useState)(!0),[v,w]=(0,a.useState)([]),N=(0,a.useCallback)((()=>{f.error(x("unknown"))}),[x,f]),{control:E,reset:S,handleSubmit:A,...O}=(0,j.cI)({defaultValues:pe}),I=(0,a.useCallback)((async e=>{try{await n(e),f.success(x("addProductSuccessfully")),r(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,O.setError,null,N)}finally{h(!1)}}),[N,O.setError,t,n,r,x,f]),G=(0,a.useCallback)((async e=>{if(s)try{await c(s.uuid,e),f.success(x("editProductSuccessfully")),d(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,O.setError,null,N)}finally{h(!1)}}),[N,O.setError,t,c,d,x,f,s]),L=A((async e=>{h(!0),s?G(e):I(e)})),B=(0,a.useCallback)((async()=>{try{const{data:e}=await(0,te.ML)();w(e)}finally{k(!1)}}),[]);(0,a.useEffect)((()=>{l&&(h(!1),S(s||pe))}),[l,S,s]),(0,a.useEffect)((()=>{B()}),[B]);const Z=(0,a.useMemo)((()=>v.map((e=>({value:e.uuid,label:e.name})))),[v]);return(0,m.jsxs)(i.u,{isLoading:g,isOpen:l,isFormModal:!0,title:x(s?"editProduct":"addProduct"),onClose:t,onConfirm:L,...u,children:[(0,m.jsx)(y.II,{className:"block w-full",control:E,disabled:g,label:x("name"),name:"name"}),(0,m.jsx)(y.II,{className:"block w-full",control:E,disabled:g,label:x("description"),name:"description"}),(0,m.jsx)(y.II,{className:"block w-full",control:E,disabled:g,label:x("price"),name:"price"}),(0,m.jsx)(y.Ph,{isDisabled:b,name:"category_uuid",className:"w-full",control:E,options:Z}),(0,m.jsx)(M,{containerClassName:"w-full",name:"image",control:E,disabled:g,multiple:!1,label:x("image"),placeholder:x("chooseImage")})]})},ke=(0,a.memo)(be),ve=e=>{let{onClickAdd:l}=e;const{t:s}=(0,o.$G)();return(0,m.jsxs)(u.z,{className:"rounded-md shadow-none",size:"sm",onClick:l,children:[(0,m.jsx)(d.poH,{size:24,className:"mr-2"}),s("addProduct")]})},we=(0,a.memo)(ve);var Ne=s(1042);const Ee=()=>{const{t:e}=(0,o.$G)(),[l,s]=(0,a.useState)([]),[t,r]=(0,a.useState)(null),[c,d]=(0,a.useState)(!0),[u,x]=(0,a.useState)(!1),[f,C]=(0,a.useState)(null),[j,y]=(0,a.useState)(!1),[g,h]=(0,a.useState)({}),p=(0,a.useMemo)((()=>{var e;return null!==(e=l.find((e=>e.uuid===f)))&&void 0!==e?e:null}),[f,l]),b=(0,a.useCallback)((()=>{x(!0)}),[]),k=(0,a.useCallback)((e=>{C(null!==e&&void 0!==e?e:null),x(!0)}),[]),v=(0,a.useCallback)((()=>{x(!1),y(!1),C(null)}),[]),w=(0,a.useCallback)((e=>{C(null!==e&&void 0!==e?e:null),y(!0)}),[]),N=(0,a.useCallback)((async()=>{try{const{data:e,meta:l}=await(0,Ne.Xp)({expand:["product__category_uuid"],...g});s(e),r(l)}finally{d(!1)}}),[g]);(0,a.useEffect)((()=>{N()}),[N]);const E=(0,a.useCallback)((async()=>{try{await(0,Ne.Ir)(f)}finally{N()}}),[f,N]);return(0,m.jsxs)(n.Vu,{title:e("productManagement"),action:(0,m.jsx)(we,{onClickAdd:b}),children:[(0,m.jsx)(he,{data:l,meta:t,isLoading:c,onClickEdit:k,onClickDelete:w,onChangeState:h,onGetAll:Ne.Xp}),(0,m.jsx)(ke,{isOpen:u,product:p,onCreate:Ne.ry,onCreated:N,onEdit:Ne.zG,onEdited:N,onClose:v}),(0,m.jsx)(i.c,{title:e("deleteProduct"),message:e("deleteMessage"),isOpen:j,status:"danger",onClose:v,onConfirm:E})]})},Se=(0,a.memo)(Ee);var Ae=s(289);const Oe=e=>{let{id:l,onClickEdit:s,onClickDelete:a}=e;return(0,m.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,m.jsx)(_.Z,{data:l,onClick:s}),(0,m.jsx)(W.h8,{data:l,onClick:a})]})},Ie=(0,a.memo)(Oe),Ge=e=>{let{data:l,meta:s,isLoading:t,onClickEdit:n,onClickDelete:i,onGetAll:r,...c}=e;const{t:d}=(0,o.$G)(),u=(0,a.useMemo)((()=>(0,$.Cl)()),[]),x=(0,a.useMemo)((()=>[u.accessor((e=>String(e.uuid)),{id:"id",header:d("id")}),u.accessor((e=>e.name),{id:"name",header:d("name"),meta:{filterBy:"name",getFilterOptions:r}}),u.display({id:"actions",cell:e=>(0,m.jsx)(Ie,{id:e.row.original.uuid,onClickEdit:n,onClickDelete:i}),meta:{skeleton:(0,m.jsx)(Y.Z,{numberOfActions:2})}})]),[u,i,n,d,r]);return(0,m.jsx)(F.Z,{data:l,meta:s,columns:x,isLoading:t,...c})},Le=(0,a.memo)(Ge),Me={name:""},De=e=>{let{isOpen:l,roleData:s,onClose:t,onCreate:n,onCreated:r,onEdit:c,onEdited:d,...u}=e;const{t:x}=(0,o.$G)(),f=(0,p.Z)(),[g,h]=(0,a.useState)(!1),b=(0,a.useCallback)((()=>{f.error(x("unknown"))}),[x,f]),{control:k,reset:v,handleSubmit:w,...N}=(0,j.cI)({defaultValues:Me}),E=(0,a.useCallback)((async e=>{try{await n(e),f.success(x("addRoleSuccessfully")),r(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,N.setError,null,b)}finally{h(!1)}}),[b,N.setError,t,n,r,x,f]),S=(0,a.useCallback)((async e=>{if(s)try{await c(s.uuid,e),f.success(x("editRoleSuccessfully")),d(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,N.setError,null,b)}finally{h(!1)}}),[b,N.setError,t,c,d,x,f,s]),A=w((async e=>{h(!0),s?S(e):E(e)}));return(0,a.useEffect)((()=>{l&&(h(!1),v(s||Me))}),[l,v,s]),(0,m.jsx)(i.u,{isLoading:g,isOpen:l,isFormModal:!0,title:x(s?"editRole":"addRole"),onClose:t,onConfirm:A,...u,children:(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("name"),name:"name"})})},Be=(0,a.memo)(De),Ze=e=>{let{onClickAdd:l}=e;const{t:s}=(0,o.$G)();return(0,m.jsxs)(u.z,{className:"rounded-md shadow-none",size:"sm",onClick:l,children:[(0,m.jsx)(d.poH,{size:24,className:"mr-2"}),s("addRole")]})},ze=(0,a.memo)(Ze),$e=()=>{const{t:e}=(0,o.$G)(),[l,s]=(0,a.useState)([]),[t,r]=(0,a.useState)(null),[c,d]=(0,a.useState)({}),[u,x]=(0,a.useState)(!0),[f,C]=(0,a.useState)(!1),[j,y]=(0,a.useState)(null),[g,h]=(0,a.useState)(!1),p=(0,a.useMemo)((()=>{var e;return null!==(e=null===l||void 0===l?void 0:l.find((e=>e.uuid===j)))&&void 0!==e?e:null}),[j,l]),b=(0,a.useCallback)((()=>{C(!0)}),[]),k=(0,a.useCallback)((e=>{y(null!==e&&void 0!==e?e:null),C(!0)}),[]),v=(0,a.useCallback)((()=>{C(!1),h(!1),y(null)}),[]),w=(0,a.useCallback)((e=>{y(null!==e&&void 0!==e?e:null),h(!0)}),[]),N=(0,a.useCallback)((async()=>{try{const{data:e,meta:l}=await(0,Ae.F3)(c);s(e),r(l)}finally{x(!1)}}),[c]);(0,a.useEffect)((()=>{N()}),[N]);const E=(0,a.useCallback)((async()=>{try{await(0,Ae.Rd)(j)}finally{N()}}),[j,N]);return(0,m.jsxs)(n.Vu,{title:e("roleManagement"),action:(0,m.jsx)(ze,{onClickAdd:b}),children:[(0,m.jsx)(Le,{data:l,meta:t,isLoading:u,onClickEdit:k,onClickDelete:w,onChangeState:d,onGetAll:Ae.F3}),(0,m.jsx)(Be,{isOpen:f,roleData:p,onCreate:Ae.fA,onCreated:N,onEdit:Ae.Aq,onEdited:N,onClose:v}),(0,m.jsx)(i.c,{title:e("deleteRole"),message:e("deleteMessage"),isOpen:g,status:"danger",onClose:v,onConfirm:E})]})},Fe=(0,a.memo)($e);var Re=s(6363);const Ue=e=>{let{id:l,onClickEdit:s,onClickDelete:a}=e;return(0,m.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,m.jsx)(_.Z,{data:l,onClick:s}),(0,m.jsx)(W.h8,{data:l,onClick:a})]})},Pe=(0,a.memo)(Ue),Ve=e=>{let{data:l,meta:s,isLoading:t,onClickEdit:n,onClickDelete:i,onGetAll:r,...c}=e;const{t:d}=(0,o.$G)(),u=(0,a.useMemo)((()=>(0,$.Cl)()),[]),x=(0,a.useMemo)((()=>[u.accessor((e=>String(e.uuid)),{id:"id",header:d("id")}),u.accessor((e=>e.key),{id:"key",header:d("key"),meta:{filterBy:"key",getFilterOptions:r}}),u.accessor((e=>e.value),{id:"value",header:d("value")}),u.accessor((e=>e.description),{id:"description",header:d("description")}),u.display({id:"actions",cell:e=>(0,m.jsx)(Pe,{id:e.row.original.uuid,onClickEdit:n,onClickDelete:i}),meta:{skeleton:(0,m.jsx)(Y.Z,{numberOfActions:2})}})]),[u,i,n,d,r]);return(0,m.jsx)(F.Z,{data:l,meta:s,columns:x,isLoading:t,...c})},Ye=(0,a.memo)(Ve);const _e={key:"",type:s(510).AL.PUBLIC,description:""},We=e=>{let{isOpen:l,config:s,onClose:t,onCreate:n,onCreated:r,onEdit:c,onEdited:d,...u}=e;const{t:x}=(0,o.$G)(),f=(0,p.Z)(),[g,h]=(0,a.useState)(!1),b=(0,a.useCallback)((()=>{f.error(x("unknown"))}),[x,f]),{control:k,reset:v,handleSubmit:w,...N}=(0,j.cI)({defaultValues:_e}),E=(0,a.useCallback)((async e=>{try{await n(e),f.success(x("addConfigSuccessfully")),r(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,N.setError,null,b)}finally{h(!1)}}),[b,N.setError,t,n,r,x,f]),S=(0,a.useCallback)((async e=>{if(s)try{await c(s.uuid,e),f.success(x("editConfigSuccessfully")),d(),t()}catch(l){l instanceof C.d7&&(0,D.yB)(l,N.setError,null,b)}finally{h(!1)}}),[b,N.setError,t,c,d,x,f,s]),A=w((async e=>{h(!0),s?S(e):E(e)}));return(0,a.useEffect)((()=>{l&&(h(!1),v(s||_e))}),[l,v,s]),(0,m.jsxs)(i.u,{isLoading:g,isOpen:l,isFormModal:!0,title:x(s?"editConfig":"addConfig"),onClose:t,onConfirm:A,...u,children:[(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("key"),name:"key"}),(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("value"),name:"value"}),(0,m.jsx)(y.II,{className:"block w-full",control:k,disabled:g,label:x("description"),name:"description"})]})},Te=(0,a.memo)(We),He=e=>{let{onClickAdd:l}=e;const{t:s}=(0,o.$G)();return(0,m.jsxs)(u.z,{className:"rounded-md shadow-none",size:"sm",onClick:l,children:[(0,m.jsx)(d.poH,{size:24,className:"mr-2"}),s("addConfig")]})},qe=(0,a.memo)(He),Xe=()=>{const{t:e}=(0,o.$G)(),[l,s]=(0,a.useState)([]),[t,r]=(0,a.useState)(null),[c,d]=(0,a.useState)(!0),[u,x]=(0,a.useState)(!1),[f,C]=(0,a.useState)(null),[j,y]=(0,a.useState)(!1),[g,h]=(0,a.useState)({}),p=(0,a.useMemo)((()=>{var e;return null!==(e=l.find((e=>e.uuid===f)))&&void 0!==e?e:null}),[f,l]),b=(0,a.useCallback)((()=>{x(!0)}),[]),k=(0,a.useCallback)((e=>{C(null!==e&&void 0!==e?e:null),x(!0)}),[]),v=(0,a.useCallback)((()=>{x(!1),y(!1),C(null)}),[]),w=(0,a.useCallback)((e=>{C(null!==e&&void 0!==e?e:null),y(!0)}),[]),N=(0,a.useCallback)((async()=>{try{const{data:e,meta:l}=await(0,Re.getConfigs)(g);s(e),r(l)}finally{d(!1)}}),[g]);(0,a.useEffect)((()=>{N()}),[N]);const E=(0,a.useCallback)((async()=>{try{await(0,Re.deleteConfig)(f)}finally{N()}}),[f,N]);return(0,m.jsxs)(n.Vu,{title:e("categoryManagement"),action:(0,m.jsx)(qe,{onClickAdd:b}),children:[(0,m.jsx)(Ye,{data:l,meta:t,isLoading:c,onClickEdit:k,onClickDelete:w,onChangeState:h,onGetAll:Re.getConfigs}),(0,m.jsx)(Te,{isOpen:u,config:p,onCreate:Re.createConfig,onCreated:N,onEdit:Re.editConfig,onEdited:N,onClose:v}),(0,m.jsx)(i.c,{title:e("deleteConfig"),message:e("deleteMessage"),isOpen:j,status:"danger",onClose:v,onConfirm:E})]})},Qe=(0,a.memo)(Xe),Ke=()=>(0,m.jsx)(n.kz,{sidebar:(0,m.jsx)(ae,{}),sidebarIds:["adminSidebar"],children:(0,m.jsxs)(t.Z5,{children:[(0,m.jsx)(t.AW,{path:"*",element:(0,m.jsx)("div",{className:"flex min-h-fit-layout w-full items-center justify-center",children:"Admin"})}),(0,m.jsx)(t.AW,{path:"product",element:(0,m.jsx)(Se,{})}),(0,m.jsx)(t.AW,{path:"user",element:(0,m.jsx)(K,{})}),(0,m.jsx)(t.AW,{path:"category",element:(0,m.jsx)(Ce,{})}),(0,m.jsx)(t.AW,{path:"role",element:(0,m.jsx)(Fe,{})}),(0,m.jsx)(t.AW,{path:"config",element:(0,m.jsx)(Qe,{})})]})}),Je=(0,a.memo)(Ke);var el=s(2353),ll=s(8654),sl=s(2318),al=s(8870),tl=s(9705);s(6497),s(4277);const nl=e=>{let{name:l,onChangeFilter:s}=e;const t=(0,a.useCallback)((()=>{s(l)}),[s,l]);return(0,m.jsx)("div",{role:"button",tabIndex:0,onClick:t,className:"p-4 w-fit hover:bg-violet-100 hover:border-violet-500  font-semibold flex items-center justify-center h-16 rounded-lg border-2 border-gray-100",children:(0,m.jsx)("div",{className:"xs:w-32 md:w-40 text-center",children:l})})},ol=e=>{let{onChangeFilter:l}=e;const s=(0,el.Z)((e=>e.common.categories));return(0,m.jsx)("div",{className:"w-full h-fit xs:px-6 md:px-20 xl:px-40 my-8 ",children:(0,m.jsx)(tl.tq,{slidesPerView:6,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},modules:[al.pt],breakpoints:{320:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:4,spaceBetween:50},1248:{slidesPerView:6,spaceBetween:50}},children:(0,g.isEmpty)(s)?Array.from({length:5}).map(((e,l)=>(0,m.jsx)(R.oY,{className:" xs:w-fit bg-white w-full rounded-lg"},l))):[{uuid:999,name:"All",description:"all"},...s].map((e=>(0,m.jsx)(tl.o5,{children:(0,m.jsx)(nl,{name:e.name,onChangeFilter:l},e.uuid)},e.uuid)))})})};var il=s(7370),rl=s(5792);const cl=()=>{const e=(0,el.Z)(rl.A.Kk);return(0,m.jsx)("div",{className:"w-full xs:h-60 md:h-120",children:(0,m.jsx)(tl.tq,{spaceBetween:50,slidesPerView:1,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},modules:[al.pt,al.tl],children:(0,g.isEmpty)(e)?(0,m.jsx)(R.oY,{className:"w-full xs:h-60 md:h-120"}):null===e||void 0===e?void 0:e.map(((e,l)=>(0,m.jsx)(tl.o5,{children:(0,m.jsx)("img",{className:"w-full xs:h-60 md:h-120 object-cover",alt:"de-mairiage",src:e})},l)))})})},dl=()=>{const[e,l]=(0,a.useState)(null),s=(0,a.useCallback)((e=>{l("All"!==e?l=>({...l,filterParams:[{filterBy:"filter.name",values:[e]}]}):e=>({...e,filterParams:[]}))}),[]);return(0,m.jsxs)("div",{className:"w-full h-fit",children:[(0,m.jsx)(cl,{}),(0,m.jsx)(ol,{onChangeFilter:s}),(0,m.jsx)(il.Z,{queryParams:e,setQueryParams:l})]})};var ul=s(8866),ml=s(8439);const xl=e=>{let{title:l}=e;return(0,ml.Z)(l),(0,m.jsxs)("div",{className:"flex flex-col items-center py-20",children:[(0,m.jsxs)("div",{className:"flex flex-col items-center justify-center pb-20",children:[(0,m.jsx)("div",{className:"text-4xl font-semibold uppercase",children:l}),(0,m.jsx)(R.oY,{className:"mt-6 h-4 w-56"})]}),(0,m.jsxs)("div",{className:"min-h-72 w-full max-w-4xl space-y-4 rounded-xl border-2 border-gray-100 bg-white p-6 shadow-md shadow-gray-100 ",children:[(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-3/4"}),(0,m.jsx)("div",{className:"h-4"}),(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-full"}),(0,m.jsx)(R.oY,{className:"h-4 w-1/4"})]})]})},fl=(0,a.memo)(xl),Cl=()=>{const{t:e}=(0,o.$G)();return(0,m.jsxs)(t.Z5,{children:[(0,m.jsx)(t.AW,{path:ul.a0.HOME,element:(0,m.jsx)(dl,{})}),(0,m.jsx)(t.AW,{path:ul.a0.CONTACT,element:(0,m.jsx)(fl,{title:e("contact")})}),(0,m.jsx)(t.AW,{path:ul.a0.CARD,element:(0,m.jsx)(fl,{title:e("card")})}),(0,m.jsx)(t.AW,{path:ul.a0.BLOGS,element:(0,m.jsx)(fl,{title:e("blogs")})}),(0,m.jsx)(t.AW,{path:ul.a0.NOT_FOUND,element:(0,m.jsx)(sl.F2,{})})]})},jl=(0,a.memo)(Cl),yl=()=>{const{isAdmin:e}=(0,el.Z)(ll.L3);return(0,m.jsxs)(t.Z5,{children:[e&&(0,m.jsx)(t.AW,{path:"admin/*",element:(0,m.jsx)(Je,{})}),(0,m.jsx)(t.AW,{path:"/*",element:(0,m.jsx)(jl,{})})]})},gl=(0,a.memo)(yl)}}]);
//# sourceMappingURL=479.64a1e429.chunk.js.map