(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();function v(){const t={user:JSON.parse(localStorage.getItem("user"))||null,isLoggedIn:localStorage.getItem("isLoggedIn")==="true"},e={};function o(s){return t[s]}function a(s,i){if(t[s]=i,s==="user"){if(!i){localStorage.removeItem("user");return}localStorage.setItem("user",JSON.stringify(i))}s==="isLoggedIn"&&localStorage.setItem("isLoggedIn",i?"true":"false"),r(s)}function n(s,i){e[s]||(e[s]=[]),e[s].push(i)}function r(s){e[s]&&e[s].forEach(i=>i())}return{getState:o,setState:a,subscribe:n}}const l=v(),y="/front_5th_chapter1-1",g=()=>{const t=window.location.pathname,e=window.location.hash,o=y;return e.includes("#")?e.slice(1):t.startsWith(o)?t.replace(o,"")||"/":t||"/"},w=()=>{const t=l.getState("isLoggedIn"),e="/front_5th_chapter1-1",o=g();return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="${e}/" class="${o==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
         ${t?`
              <li><a href="${e}/profile" class="${o==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
              <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
            `:`<li><a href="${e}/login" class="text-gray-600">로그인</a></li>`}
      </ul>
    </nav>
  `},L=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,p=t=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${w()}
        ${t}
        ${L()}
      </div>
    </div>
  `,b=t=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      ${t}
    </main>
  `,I=()=>`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>
  `,$=t=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${t.author}</p>
          <p class="text-sm text-gray-500">${t.createdAt}</p>
        </div>
      </div>
      <p>${t.content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `,S=[{id:1,author:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,author:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,author:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,author:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,author:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],P=()=>`
    <div class="space-y-4">
      ${S.map(t=>$(t)).join("")}
    </div>
  `,E=()=>{const e=`
    <main class="p-4">
      ${l.getState("isLoggedIn")?I():""}
      ${P()}
    </main>
  `;return p(e)},A=()=>b(`
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" placeholder="사용자 이름" id="username" class="w-full p-2 border rounded" />
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" id="password" class="w-full p-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  `),B=t=>`
    <form id="profile-form">
      <div class="mb-4">
        <label
          for="username"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          사용자 이름
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value="${t.username}"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 text-sm font-bold mb-2"
          >
          이메일
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value="${t.email||""}"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-6">
        <label
          for="bio"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          자기소개
        </label>
        <textarea id="bio" name="bio" rows="4"  class="w-full p-2 border rounded">${(t==null?void 0:t.bio)||""}</textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded font-bold"
      >
        프로필 업데이트
      </button>
    </form>
  `,_=()=>{const t=l.getState("user"),e=`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
        ${B(t)}
      </div>
    </main>
  `;return p(e)},F=()=>b(`
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  `),h=[{path:"/",component:E,requiresAuth:!1},{path:"/login",component:A,requiresAuth:!1},{path:"/profile",component:_,requiresAuth:!0}],u=document.getElementById("root"),f="/front_5th_chapter1-1",c=()=>{const t=g(),e=l.getState("isLoggedIn");if(t==="/login"&&e){window.history.pushState({},"",`${f}/`),m("/");return}let o=h.find(a=>a.path===t);if(o&&o.requiresAuth&&!e){window.history.pushState({},"",`${f}/login`),m("/login");return}o?u.innerHTML=o.component():u.innerHTML=F(),x()},m=t=>{const e=h.find(o=>o.path===t);e&&(u.innerHTML=e.component(),x())},H=()=>{document.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{const o=t.getAttribute("href");!o||o.startsWith("http")||o.startsWith("#")||(e.preventDefault(),d(o))})})},d=t=>{const e="/front_5th_chapter1-1";let o=t;t.startsWith("/")&&!t.startsWith(e)&&(o=`${e}${t}`),window.history.pushState({},"",o),c()},O=()=>{H(),window.addEventListener("hashchange",c),c()},x=()=>{T(),q(),D()},T=()=>{const t=document.getElementById("login-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const a={username:document.getElementById("username").value,email:"",bio:""};l.setState("isLoggedIn",!0),l.setState("user",a),d("/profile")})},q=()=>{const t=document.getElementById("logout");t&&t.addEventListener("click",e=>{e.preventDefault(),l.setState("isLoggedIn",!1),l.setState("user",null),d("/login")})},D=()=>{const t=document.getElementById("profile-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const o=document.getElementById("username").value,a=document.getElementById("email").value,n=document.getElementById("bio").value,r={username:o,email:a,bio:n};l.setState("user",r),alert("프로필이 업데이트되었습니다.")})};l.subscribe("isLoggedIn",c);window.addEventListener("popstate",c);window.goTo=function(t){d(t)};O();
