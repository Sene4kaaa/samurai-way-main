"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[554],{3554:function(s,e,t){t.r(e),t.d(e,{default:function(){return F}});var i=t(8683),r=t(5671),n=t(3144),o=t(136),a=t(5716),u=t(2791),l="ProfileInfo_descriptionBloch__qJ4Zw",c="ProfileInfo_mainPhoto__XfMvC",p="ProfileInfo_contact__5-BmK",h=t(4374),d=t(885),f=t(184),m=function(s){var e=(0,u.useState)(!1),t=(0,d.Z)(e,2),i=t[0],r=t[1],n=(0,u.useState)(s.status),o=(0,d.Z)(n,2),a=o[0],l=o[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,f.jsxs)("div",{children:[!i&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Status"}),": ",(0,f.jsx)("span",{onDoubleClick:function(){r(!0)},children:s.status||"----------"})]}),i&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(a)},value:a})})]})},j=t(7425),x=function(s){return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full name"}),": ",s.profile.fullNam]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Looking for a job"}),": ",s.profile.lookingForAJob?"yes":"no"]}),s.profile.lookingForAJob&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My professional skills"}),": ",s.profile.lookingForAJobDescription]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me"}),": ",s.profile.aboutMe]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.profile.contacts).map((function(e){var t=s.profile.contacts[e];return(0,f.jsx)(g,{contactTitle:e,contactValue:t},e)}))]})]})},g=function(s){return(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("b",{children:s.contactTitle}),": ",s.contactValue]})},v=function(s){if(!s.profile)return(0,f.jsx)(h.p,{});return(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("img",{src:null!=s.profile.photos.large?s.profile.photos.large:j,className:c}),s.isOwner&&(0,f.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&s.savePhoto(e.target.files[0])}}),(0,f.jsx)(x,{profile:s.profile}),(0,f.jsx)(m,{status:s.status,updateStatus:s.updateStatus})]})})},b="MyPosts_postBlock__SV+6r",P="MyPosts_posts__6EdvY",y="Post_item__LRLWK",k=function(s){return(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("img",{src:"https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"}),s.message,(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"like "}),s.likeCounts]})]})},C=t(5705),_=t(364),S=t(81),w=u.memo((function(s){console.log("RENDER");var e=(0,_.I0)(),t=(0,C.TA)({initialValues:{message:""},validate:function(s){var e,t={};return s.message?(null===(e=s.message)||void 0===e?void 0:e.length)>150&&(t.message="Max length is 150 symbols"):t.message="Required",t},onSubmit:function(s){e((0,S.q2)(s.message)),t.resetForm()}}),r=s.posts.map((function(s){return(0,f.jsx)("div",{children:(0,f.jsx)(k,{message:s.message,likeCounts:s.likesCounts})},s.id)}));return(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("h3",{children:"My posts"}),(0,f.jsx)(C.Hy,{value:t,children:(0,f.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,f.jsx)("input",(0,i.Z)({placeholder:"Enter you text"},t.getFieldProps("message"))),t.touched.message&&t.errors.message&&(0,f.jsx)("div",{style:{color:"red"},children:t.errors.message}),(0,f.jsx)("button",{type:"submit",children:"Submit"})]})}),(0,f.jsx)("div",{className:P,children:r})]})})),T=(0,_.$j)((function(s){return{posts:s.profilePage.posts}}))(w),I=function(s){return(0,f.jsxs)("div",{children:[(0,f.jsx)(v,{isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus,savePhoto:s.savePhoto}),(0,f.jsx)(T,{})]})},N=t(9271),Z=t(7781),M=t(5571),A=function(s){(0,o.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfileTC(s),this.props.getStatusTC(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.profile?(0,f.jsx)(I,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC,savePhoto:this.props.savePhotoTC})):null}}]),t}(u.Component),F=(0,Z.qC)((0,_.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfileTC:S.et,getStatusTC:S.lR,updateStatusTC:S.Nf,savePhotoTC:S.Ju}),N.EN,M.D)(A)}}]);
//# sourceMappingURL=554.61f6ef4d.chunk.js.map