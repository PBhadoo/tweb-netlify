"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[77],{7077:(t,a,e)=>{e.r(a),e.d(a,{default:()=>o});const r=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],f=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function o(t,a,e,o,u,s,i){if(Number.isNaN(s)||s<1)return;s|=0,Number.isNaN(i)&&(i=1),(i|=0)>3&&(i=3),i<1&&(i=1);const n=t.getImageData(a,e,o,u),b=n.data;let c,N,h,k,m,p,w,d,g,l,C,D,I=o-1,j=u-1,q=s+1,v=[],x=[],y=[],z=r[s],A=f[s],B=[],E=[];for(;i-- >0;){for(D=C=0,m=0;m<u;m++){for(c=b[D]*q,N=b[D+1]*q,h=b[D+2]*q,p=1;p<=s;p++)w=D+((p>I?I:p)<<2),c+=b[w++],N+=b[w++],h+=b[w++];for(k=0;k<o;k++)v[C]=c,x[C]=N,y[C]=h,0==m&&(B[k]=((w=k+q)<I?w:I)<<2,E[k]=(w=k-s)>0?w<<2:0),d=D+B[k],g=D+E[k],c+=b[d++]-b[g++],N+=b[d++]-b[g++],h+=b[d++]-b[g++],C++;D+=o<<2}for(k=0;k<o;k++){for(l=k,c=v[l]*q,N=x[l]*q,h=y[l]*q,p=1;p<=s;p++)l+=p>j?0:o,c+=v[l],N+=x[l],h+=y[l];for(C=k<<2,m=0;m<u;m++)b[C]=c*z>>>A,b[C+1]=N*z>>>A,b[C+2]=h*z>>>A,0==k&&(B[m]=((w=m+q)<j?w:j)*o,E[m]=(w=m-s)>0?w*o:0),d=k+B[m],g=k+E[m],c+=v[d]-v[g],N+=x[d]-x[g],h+=y[d]-y[g],C+=o<<2}}t.putImageData(n,a,e)}}}]);
//# sourceMappingURL=77.b8cf11d2b5dca36479ca.chunk.js.map