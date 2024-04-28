"use strict";(self.webpackChunkreact_ts_template=self.webpackChunkreact_ts_template||[]).push([[965],{8965:(e,s,t)=>{t.r(s),t.d(s,{default:()=>B});var l=t(2791),r=t(7689),a=t(4695),o=t(7477),i=t(1134),n=t(9230),c=t(9254),d=t(1655),m=t(3960),u=t(1649),x=t(3962),b=t(8439),p=t(3012),h=t(3246),g=t(184);const j=e=>{let{title:s,subtitle:t,children:l,footer:r}=e;return(0,g.jsx)("div",{className:"mb-6 flex sm:pb-10 sm:pt-16",children:(0,g.jsxs)("div",{className:"w-full max-w-screen-sm rounded-2xl border-gray-100 bg-white px-3 py-6 xs:px-4 sm:m-auto sm:border-2 sm:px-20 sm:py-12 sm:shadow-md",children:[(0,g.jsx)(h.T,{className:"mx-auto mb-12 mt-6 flex h-14 items-center justify-center"}),(0,g.jsxs)("div",{className:"mb-14 mt-4 md:text-center",children:[(0,g.jsx)("div",{className:"text-xl font-bold sm:text-3xl",children:s}),(0,g.jsx)("div",{className:"mt-1 text-sm font-semibold text-gray-400 sm:mt-3 sm:text-base",children:t})]}),l,(0,g.jsx)("div",{className:"text-center sm:mt-4",children:(0,g.jsx)("div",{className:"mb-2 mt-8 text-center sm:mt-14",children:r})})]})})},N=(0,l.memo)(j);var y=t(8007);const v=e=>{var s,t;return(0,y.Ry)().shape({email:(0,y.Z_)().email(null!==(s=e("emailInvalid"))&&void 0!==s?s:"").required(null!==(t=e("emailRequired"))&&void 0!==t?t:"")})};var w=t(3853),f=t(1087);const I=()=>{const{t:e}=(0,n.$G)();return(0,g.jsx)("div",{className:"text-left",children:(0,g.jsxs)(f.rU,{to:x.Fy.LOGIN,className:"flex items-center justify-start font-semibold text-gray-500 hover:text-primary-700 hover:underline sm:inline-block",children:[(0,g.jsx)(w.YFh,{className:"mb-1 mr-2 inline-block"}),(0,g.jsx)("span",{children:e("login")})]})})},S=(0,l.memo)(I),R=()=>{const{t:e}=(0,n.$G)(),s=(0,r.s0)(),[t,h]=(0,l.useState)(!1),[j,y]=(0,l.useState)(null),{control:w,handleSubmit:f}=(0,i.cI)({resolver:(0,a.X)(v(e))}),I=f((async t=>{h(!0);try{await p.ON.forgetPassword(t.email),y(null),s("".concat(x.Fy.RESET_PASSWORD,"?email=").concat(t.email))}catch(l){l instanceof o.d7&&y({code:u.n.ACCOUNT_NOT_EXISTS,message:e("emailNotExists",{email:t.email})})}finally{h(!1)}}));return(0,b.Z)(e("forgetPassword")),(0,g.jsx)(N,{title:e("forgetYourPassword"),subtitle:e("forgetPasswordSubtitle"),footer:(0,g.jsx)(S,{}),children:(0,g.jsxs)("form",{className:"grid grid-cols-1 gap-6",onSubmit:I,children:[j&&(0,g.jsx)(c.b,{title:e("forgetPasswordError"),message:j.message,type:"danger",className:"mb-2"}),(0,g.jsx)(m.II,{type:"text",label:e("email"),name:"email",className:"block",disabled:t,control:w}),(0,g.jsx)(d.z,{type:"submit",disabled:t,isLoading:t,children:e("forgetPassword")})]})})},k=(0,l.memo)(R);var T=t(763),E=t(2020);const _=e=>{var s,t,l;return(0,y.Ry)().shape({email:(0,y.Z_)().email(null!==(s=e("emailInvalid"))&&void 0!==s?s:"").required(null!==(t=e("emailRequired"))&&void 0!==t?t:""),password:(0,y.Z_)().required(null!==(l=e("passwordRequired"))&&void 0!==l?l:"")})},O=()=>{var e;const{t:s}=(0,n.$G)(),[t]=(0,f.lr)();return(0,g.jsxs)(g.Fragment,{children:[s("doNotHaveAccount"),(0,g.jsx)(f.rU,{to:"".concat(x.Fy.REGISTER,"?redirect=").concat(encodeURIComponent(null!==(e=t.get("redirect"))&&void 0!==e?e:"")),className:"ml-1 block font-semibold underline hover:text-primary-700 sm:inline-block",children:s("createNow")})]})},C=(0,l.memo)(O),P=()=>{var e;const{t:s}=(0,n.$G)(),[t,o]=(0,l.useState)(!1),[h,j]=(0,l.useState)(null),[y]=(0,f.lr)(),v=(0,r.s0)(),{control:w,handleSubmit:I,watch:S,...R}=(0,i.cI)({resolver:(0,a.X)(_(s))}),k=S("email"),O=I((async e=>{o(!0);try{const s=await p.ON.loginWithEmailAndPassword(e);(0,E.setAuthToken)({token:s.token}),v("/")}catch(s){(0,T.isEmpty)(s)||j(s)}finally{o(!1)}}));return(0,b.Z)(s("login")),(0,g.jsx)(N,{title:s("loginTitle"),subtitle:s("loginSubtitle"),footer:(0,g.jsx)(C,{}),children:(0,g.jsx)(i.RV,{control:w,handleSubmit:I,watch:S,...R,children:(0,g.jsxs)("form",{onSubmit:O,className:"grid grid-cols-1 gap-6",children:[h&&(0,g.jsx)(c.b,{title:s("loginError"),message:h.message,type:"danger",className:"mb-2",children:h.code===u.n.ACCOUNT_NOT_EXISTS&&(0,g.jsx)(f.rU,{to:"".concat(x.Fy.REGISTER,"?email=").concat(encodeURIComponent(k||""),"&redirect=").concat(encodeURIComponent(null!==(e=y.get("redirect"))&&void 0!==e?e:"")),children:s("createWithEmail")})}),(0,g.jsx)(m.II,{name:"email",label:s("email"),className:"block",control:w,disabled:t}),(0,g.jsx)(m.II,{type:"password",label:s("password"),name:"password",className:"block",control:w,disabled:t}),(0,g.jsx)("div",{className:"-mb-1.5 -mt-2 flex justify-end",children:(0,g.jsx)(f.rU,{to:x.Fy.FORGET_PASSWORD,className:"text-center text-sm font-semibold text-gray-400 hover:underline",role:"link",tabIndex:-1,children:s("forgetYourPassword")})}),(0,g.jsx)(d.z,{type:"submit",disabled:t,isLoading:t,children:s("login")})]})})})},q=(0,l.memo)(P);var A=t(7852),U=t(92);const Z=e=>{var s,t,l,r,a;return(0,U.wN)({name:(0,y.Z_)().required(null!==(s=e("nameRequired"))&&void 0!==s?s:""),username:(0,y.Z_)().required(null!==(t=e("usernameRequired"))&&void 0!==t?t:""),email:(0,y.Z_)().email(null!==(l=e("emailInvalid"))&&void 0!==l?l:"").required(null!==(r=e("emailRequired"))&&void 0!==r?r:""),password:(0,y.Z_)().required(null!==(a=e("passwordRequired"))&&void 0!==a?a:"")})},F=()=>{var e;const{t:s}=(0,n.$G)(),[t]=(0,f.lr)();return(0,g.jsxs)(g.Fragment,{children:[s("alreadyHaveAccount"),(0,g.jsx)(f.rU,{to:"".concat(x.Fy.LOGIN,"?redirect=").concat(encodeURIComponent(null!==(e=t.get("redirect"))&&void 0!==e?e:"")),className:"ml-1 block font-semibold underline hover:text-primary-700 sm:inline-block",children:s("loginNow")})]})},G=(0,l.memo)(F),L=()=>{var e;const{t:s}=(0,n.$G)(),[t,a]=(0,l.useState)(!1),[o,h]=(0,l.useState)(null),[j]=(0,f.lr)(),y=(0,r.s0)(),{control:v,handleSubmit:w,setValue:I,watch:S}=(0,i.cI)({resolver:Z(s)}),R=S("email",""),k=w((async e=>{a(!0),await p.ON.register(e).then((e=>{(0,E.setAuthToken)({token:null===e||void 0===e?void 0:e.token}),y("/")})).catch((t=>{const{status:l}=t.response.data;l!==A.UNPROCESSABLE_ENTITY?h({...t}):h({code:u.n.ACCOUNT_EXISTS,message:s("emailAlreadyExists",{email:e.email})})})).finally((()=>{a(!1)}))}));return(0,b.Z)(s("register")),(0,l.useEffect)((()=>{const e=j.get("email");e&&I("email",e)}),[j,I]),(0,g.jsx)(N,{title:s("registerTitle"),subtitle:s("registerSubtitle"),footer:(0,g.jsx)(G,{}),children:(0,g.jsxs)("form",{className:"grid grid-cols-1 gap-6",onSubmit:k,children:[o&&(0,g.jsx)(c.b,{title:s("registerError"),message:o.message,type:"danger",className:"mb-2",children:o.code===u.n.ACCOUNT_EXISTS&&(0,g.jsx)(f.rU,{to:"".concat(x.Fy.LOGIN,"?email=").concat(encodeURIComponent(null!==R&&void 0!==R?R:""),"&redirect=").concat(encodeURIComponent(null!==(e=j.get("redirect"))&&void 0!==e?e:"")),children:s("loginNow")})}),(0,g.jsx)(m.II,{type:"text",label:s("name"),name:"name",className:"block",disabled:t,control:v}),(0,g.jsx)(m.II,{type:"text",label:s("username"),name:"username",className:"block",disabled:t,control:v}),(0,g.jsx)(m.II,{type:"text",label:s("email"),name:"email",disabled:t,className:"block",control:v}),(0,g.jsx)(m.II,{type:"password",label:s("password"),name:"password",className:"block",disabled:t,control:v}),(0,g.jsxs)("label",{htmlFor:"isAcceptedTerms",className:"group hidden items-center justify-start space-x-4",children:[(0,g.jsx)(m.XZ,{name:"isAcceptedTerms",className:"flex-shrink-0",disabled:t,control:v}),(0,g.jsx)("div",{className:"text-sm font-semibold leading-6 text-gray-400",children:(0,g.jsxs)(n.cC,{i18nKey:"isAcceptedTerm",t:s,children:["0",(0,g.jsx)(f.rU,{to:"/",className:"ml-1 underline hover:text-black",children:"1"})]})})]}),(0,g.jsx)(d.z,{type:"submit",disabled:t,isLoading:t,children:s("register")})]})})},W=(0,l.memo)(L);var X=t(4033),$=t(9300);const Y=e=>{var s,t,l,r;return(0,y.Ry)().shape({password:(0,y.Z_)().required(null!==(s=e("passwordRequired"))&&void 0!==s?s:""),password_confirmation:(0,y.Z_)().required(null!==(t=e("passwordConfirmationRequired"))&&void 0!==t?t:"").oneOf([(0,y.iH)("password")],null!==(l=e("passwordConfirmationNotMatch"))&&void 0!==l?l:""),otp:(0,y.Z_)().required(null!==(r=e("otpRequired"))&&void 0!==r?r:"")})},z=()=>{const{t:e}=(0,n.$G)();return(0,g.jsx)("div",{className:"text-left",children:(0,g.jsxs)(f.rU,{to:x.Fy.LOGIN,className:"flex items-center justify-start font-semibold text-gray-500 hover:text-primary-700 hover:underline sm:inline-block",children:[(0,g.jsx)(w.YFh,{className:"mb-1 mr-2 inline-block"}),(0,g.jsx)("span",{children:e("login")})]})})},D=(0,l.memo)(z),H=()=>{const{t:e}=(0,n.$G)(),s=(0,$.Z)(),[t,h]=(0,l.useState)(!1),[j,y]=(0,l.useState)(null),v=(0,r.s0)(),{control:w,handleSubmit:I}=(0,i.cI)({resolver:(0,a.X)(Y(e))}),{search:S}=(0,r.TH)(),R=(0,l.useMemo)((()=>S.split("?email=").pop()),[S]),k=I((async t=>{h(!0);try{await p.ON.resetPassword(String(R),t),y(null),v("".concat(x.Fy.LOGIN,"?code=").concat(u.n.RESET_PASSWORD)),s.success(e("resetPasswordSuccessfully"))}catch(l){l instanceof o.d7&&y({code:u.n.OTP_INCORRECT,message:e("otpIncorrect")})}finally{h(!1)}}));return(0,b.Z)(e("resetPassword")),(0,g.jsx)(N,{title:e("resetYourPassword"),subtitle:e("resetPasswordSubtitle"),footer:(0,g.jsx)(D,{}),children:(0,g.jsxs)("form",{className:"grid grid-cols-1 gap-6",onSubmit:k,children:[j?(0,g.jsx)(c.b,{title:e("resetPasswordError"),message:j.message,type:"danger",className:"mb-2",children:(0,g.jsx)(f.rU,{to:x.Fy.FORGET_PASSWORD,children:e("requestNewLink")})}):(0,g.jsx)(c.b,{title:e("resetPasswordLinkSent"),message:e("resetPasswordMessage",{email:R}),type:"success",className:"mb-2"}),(0,g.jsx)(X.Z,{name:"otp",className:"block w-full",disabled:t,control:w,quantity:6}),(0,g.jsx)(m.II,{type:"password",label:e("password"),name:"password",className:"block",disabled:t,control:w}),(0,g.jsx)(m.II,{type:"password",label:e("passwordConfirmation"),name:"passwordConfirmation",className:"block",disabled:t,control:w}),(0,g.jsx)(d.z,{type:"submit",disabled:t,isLoading:t,children:e("resetPassword")})]})})},M=(0,l.memo)(H),V=()=>(0,g.jsxs)(r.Z5,{children:[(0,g.jsx)(r.AW,{path:"login",element:(0,g.jsx)(q,{})}),(0,g.jsx)(r.AW,{path:"register",element:(0,g.jsx)(W,{})}),(0,g.jsx)(r.AW,{path:"forget-password",element:(0,g.jsx)(k,{})}),(0,g.jsx)(r.AW,{path:"reset-password",element:(0,g.jsx)(M,{})})]}),B=(0,l.memo)(V)}}]);
//# sourceMappingURL=965.678b1f9e.chunk.js.map