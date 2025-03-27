(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function h(){const t={user:JSON.parse(localStorage.getItem("user"))||null,isLoggedIn:localStorage.getItem("isLoggedIn")==="true"},e={};function n(s){return t[s]}function l(s,i){if(t[s]=i,s==="user"){if(!i){localStorage.removeItem("user");return}localStorage.setItem("user",JSON.stringify(i))}s==="isLoggedIn"&&localStorage.setItem("isLoggedIn",i?"true":"false"),r(s)}function o(s,i){e[s]||(e[s]=[]),e[s].push(i)}function r(s){e[s]&&e[s].forEach(i=>i())}return{getState:n,setState:l,subscribe:o}}const a=h(),x=()=>{const t=a.getState("isLoggedIn"),e=window.location.pathname;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${e==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
         ${t?`
              <li><a href="/profile" class="${e==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
              <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
            `:'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
      </ul>
    </nav>
  `},v=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,f=t=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${x()}
        ${t}
        ${v()}
      </div>
    </div>
  `,g=t=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      ${t}
    </main>
  `,y=()=>`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>
  `,w=t=>`
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
  `,L=[{id:1,author:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,author:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,author:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,author:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,author:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],I=()=>`
    <div class="space-y-4">
      ${L.map(t=>w(t)).join("")}
    </div>
  `,S=()=>{const e=`
    <main class="p-4">
      ${a.getState("isLoggedIn")?y():""}
      ${I()}
    </main>
  `;return f(e)},E=()=>g(`
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
  `),$=t=>`
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
  `,A=()=>{const t=a.getState("user"),e=`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
        ${$(t)}
      </div>
    </main>
  `;return f(e)},P=()=>g(`
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
  `),B=()=>{const t=window.location.pathname,e=window.location.hash;return e.includes("#")?e.slice(1):t},p=[{path:"/",component:S,requiresAuth:!1},{path:"/login",component:E,requiresAuth:!1},{path:"/profile",component:A,requiresAuth:!0}],u=document.getElementById("root"),c=()=>{const t=B(),e=a.getState("isLoggedIn");if(t==="/login"&&e){window.history.pushState({},"","/"),m("/");return}let n=p.find(l=>l.path===t);if(n&&n.requiresAuth&&!e){window.history.pushState({},"","/login"),m("/login");return}n?u.innerHTML=n.component():u.innerHTML=P(),b()},m=t=>{const e=p.find(n=>n.path===t);e&&(u.innerHTML=e.component(),b())},F=()=>{document.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{const n=t.getAttribute("href");!n||n.startsWith("http")||n.startsWith("#")||(e.preventDefault(),d(n))})})},d=t=>{window.history.pushState({},"",t),c()},O=()=>{F(),window.addEventListener("hashchange",c),c()},b=()=>{q(),D(),H()},q=()=>{const t=document.getElementById("login-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const l={username:document.getElementById("username").value,email:"",bio:""};a.setState("isLoggedIn",!0),a.setState("user",l),d("/profile")})},D=()=>{const t=document.getElementById("logout");t&&t.addEventListener("click",e=>{e.preventDefault(),a.setState("isLoggedIn",!1),a.setState("user",null),d("/login")})},H=()=>{const t=document.getElementById("profile-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("username").value,l=document.getElementById("email").value,o=document.getElementById("bio").value,r={username:n,email:l,bio:o};a.setState("user",r),alert("프로필이 업데이트되었습니다.")})};a.subscribe("isLoggedIn",c);window.addEventListener("popstate",c);window.goTo=function(t){d(t)};O();
