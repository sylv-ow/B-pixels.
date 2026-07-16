/* ============================================================
   EDIT EVERYTHING YOU NEED RIGHT HERE — this is the only part
   you should have to touch to make it yours.
   ============================================================ */
const CONFIG = {
  toName: "Ma girl ",          // who it's for
  fromName: "ur naima",             // who it's from (used on the letter signature)

  // Add or remove as many quiz questions as you like.
  // "correct" is the index (0,1,2,3) of the right option.
  questions: [
    {
      question: "Where did we first meet? Heheh",
      options: ["The supermarket", "the street", "school", "home"],
      correct: 2
    },
    {
      question: "What's my favorite animal?",
      options: ["Bird", "cat", "Fish", "dog"],
      correct: 1
    } ,
    
    {
      question: "do you love me ?",
      options: ["yes", "hell yeah", "absolutely", "abso(fucking)lutely"],
      correct: 3
    }
  ],

  letter: [
    "Hello my love, I hope this message finds you well.",
    "Today is a special day, and I wanted to take a moment to express just how much you mean to me. Your presence in my life is a gift I cherish every single day with you , I really hope that our special moments never ends , and the pretty smile on your face never fades.I hope you think of me as a pure exemple every time you hear about a -good friend- and see me in every face when Im not around  ",
    "Today you are not teenager it's a pleassure to me that I spend that amazing years with you and there is still more !! even though we didnt met up sooner enough . hope this small gift finds u well emjoy your special day sweetieeeeee this gift is made with a lot of love from me ♡♡♡♡♡♡♡♡."
  ],

  giftIntro: "Congratulations my sweetie ! Here's your gift",
  giftHint: "click the cake!",

  finalMessage: "HAPPIEST BIRTHDAY MY BABY!",

  // Optional: paste image paths/URLs here to replace the polaroid placeholders,
  // e.g. "assets/us1.jpg"
  photos: [ 
      
    "assets/r1.jpg" ,
    "assets/r2.jpg"
  ]
};
/* ============================================================ */

// All sticker images live in the assets/ folder next to this file.
const ASSETS = {
  girl:          "assets/girl.png",
  cat:           "assets/cat.png",
  mymelody:      "assets/mymelody.png",
  heart:         "assets/heart.png",
  star:          "assets/star.png",
  strawberry:    "assets/strawberry.png",
  bow:           "assets/bow.png",
  spiral:        "assets/spiral.png",
  speechHeart:   "assets/speech-heart.png",
  loveBubble:    "assets/love-bubble.png",
  kittyOops:     "assets/kitty-oops.png",
  kittyWink:     "assets/kitty-wink.png",
  threeHearts:   "assets/three-hearts.png",
  wingsPair:     "assets/wings-pair.png",
  singleWing:    "assets/single-wing.png",
  welcomeBanner: "assets/welcome-banner.png",
  envelopeBear:  "assets/envelope-bear.png",
  tulips:        "assets/tulips.png",
  musicPlayer:   "assets/music-player.png",
  divider:       "assets/divider.png"
};

const app = document.getElementById('app');
const sceneCounter = document.getElementById('sceneCounter');
const confettiLayer = document.getElementById('confettiLayer');
let scenes = [];
let current = 0;

function el(tag, className, html){
  const e = document.createElement(tag);
  if(className) e.className = className;
  if(html !== undefined) e.innerHTML = html;
  return e;
}
function img(key, className, alt){
  const i = document.createElement('img');
  i.src = ASSETS[key];
  if(className) i.className = className;
  i.alt = alt || '';
  return i;
}

function makeScene(id){
  const s = el('div', 'scene');
  s.id = id;
  app.appendChild(s);
  scenes.push(s);
  return s;
}

function showScene(i){
  scenes.forEach((s, idx) => s.classList.toggle('active', idx === i));
  current = i;
  sceneCounter.textContent = (i + 1) + ' / ' + scenes.length;
}

function nextBtn(label){
  return el('button', 'pixel-btn next-arrow', label || '▶');
}

const CONFETTI_KEYS = ['heart','star','strawberry','spiral','bow'];
function burstConfetti(x, y){
  for(let i = 0; i < 18; i++){
    const key = CONFETTI_KEYS[Math.floor(Math.random()*CONFETTI_KEYS.length)];
    const p = img(key, 'confetti-piece');
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 140;
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    p.style.setProperty('--rot', (Math.random()*360) + 'deg');
    confettiLayer.appendChild(p);
    setTimeout(() => p.remove(), 950);
  }
}

/* ---------- Scene 1: intro ---------- */
(function(){
  const s = makeScene('intro1');
  const row = el('div', 'avatar-row');
  row.appendChild(img('girl', null, 'you'));
  row.appendChild(img('cat', 'small', 'kitten'));
  s.appendChild(row);
  const panel = el('div', 'panel');
  panel.appendChild(img('speechHeart', 'panel-badge', ''));
  panel.appendChild(el('div', 'dialogue',
    `Hi ${CONFIG.toName}! Since today is your birthday&hellip;`));
  s.appendChild(panel);
  const btn = nextBtn('▶');
  btn.onclick = () => showScene(current + 1);
  s.appendChild(btn);
})();

/* ---------- Scene 2: intro 2 ---------- */
(function(){
  const s = makeScene('intro2');
  const row = el('div', 'avatar-row');
  row.appendChild(img('girl', null, 'you'));
  row.appendChild(img('cat', 'small', 'kitten'));
  s.appendChild(row);
  const panel = el('div', 'panel');
  panel.appendChild(img('bow', 'panel-bow', ''));
  panel.appendChild(el('div', 'dialogue', 'I made this mini-game a lot easier for you!'));
  s.appendChild(panel);
  const btn = nextBtn('▶');
  btn.onclick = () => showScene(current + 1);
  s.appendChild(btn);
})();

/* ---------- Scene 3: start ---------- */
(function(){
  const s = makeScene('start');
  const wingsRow = el('div', 'wings-flank');
  wingsRow.appendChild(img('singleWing', null, ''));
  wingsRow.appendChild(img('welcomeBanner', 'banner-img', 'Welcome'));
  const rightWing = img('singleWing', null, '');
  rightWing.style.transform = 'scaleX(-1)';
  wingsRow.appendChild(rightWing);
  s.appendChild(wingsRow);

  const panel = el('div', 'panel');
  panel.appendChild(el('div', 'dialogue', "Let's start! Click the start button below"));
  s.appendChild(panel);
  const btn = el('button', 'pixel-btn gold', 'START');
  btn.onclick = () => showScene(current + 1);
  s.appendChild(btn);
})();

/* ---------- Quiz scenes (auto-built from CONFIG.questions) ---------- */
CONFIG.questions.forEach((q, qi) => {
  const s = makeScene('quiz' + qi);

  const hearts = el('div', 'hearts-row');
  hearts.appendChild(img('threeHearts', null, ''));
  s.appendChild(hearts);

  const avatarWrap = el('div', 'avatar-row');
  const avatarImg = img('girl', null, 'you');
  avatarWrap.appendChild(avatarImg);
  s.appendChild(avatarWrap);

  const panel = el('div', 'panel');
  panel.appendChild(el('div', 'eyebrow', 'QUESTION ' + (qi + 1)));
  panel.appendChild(el('div', 'dialogue', q.question));
  s.appendChild(panel);

  const grid = el('div', 'quiz-grid');
  q.options.forEach((opt, oi) => {
    const b = el('button', 'quiz-opt', opt);
    b.onclick = () => {
      const buttons = grid.querySelectorAll('.quiz-opt');
      if(oi === q.correct){
        buttons.forEach(bb => bb.disabled = true);
        b.classList.add('is-correct');
        feedback.textContent = "Yay, that's right!";
        avatarImg.src = ASSETS.kittyWink;
        const rect = b.getBoundingClientRect();
        burstConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
        setTimeout(() => showScene(current + 1), 900);
      } else {
        b.classList.add('is-wrong');
        avatarImg.src = ASSETS.kittyOops;
        feedback.textContent = "Aww, you missed that one! Don't worry love, try again~";
        setTimeout(() => {
          b.classList.remove('is-wrong');
          avatarImg.src = ASSETS.girl;
        }, 700);
      }
    };
    grid.appendChild(b);
  });
  s.appendChild(grid);

  const feedback = el('div', 'quiz-feedback', '');
  s.appendChild(feedback);
});

/* ---------- Letter scene ---------- */
(function(){
  const s = makeScene('letter');
  s.appendChild(img('envelopeBear', null, 'a letter for you'));
  const panel = el('div', 'panel');
  panel.appendChild(el('div', 'eyebrow', `A LETTER FOR YOU — HAPPY BIRTHDAY, ${CONFIG.toName.toUpperCase()}`));
  const box = el('div', 'letter-box');
  CONFIG.letter.forEach(p => box.appendChild(el('p', null, p)));
  box.appendChild(el('p', null, `With all my love, ${CONFIG.fromName}`));
  panel.appendChild(box);
  s.appendChild(panel);
  s.appendChild(img('loveBubble', 'love-badge', 'I love you'));
  s.appendChild(img('tulips', 'music-deco', ''));
  const btn = el('button', 'pixel-btn', 'CONTINUE ▶');
  btn.onclick = () => showScene(current + 1);
  s.appendChild(btn);
})();

/* ---------- Gift scene ---------- */
(function(){
  const s = makeScene('gift');
  const panel = el('div', 'panel');
  panel.appendChild(img('heart', 'panel-badge', ''));
  panel.appendChild(el('div', 'dialogue', CONFIG.giftIntro));
  s.appendChild(panel);
  const cake = el('button', 'cake-btn', '🎂');
  cake.setAttribute('aria-label', 'Click the cake');
  cake.onclick = () => {
    const rect = cake.getBoundingClientRect();
    burstConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
    cake.disabled = true;
    setTimeout(() => showScene(current + 1), 800);
  };
  s.appendChild(cake);
  s.appendChild(el('div', 'eyebrow', CONFIG.giftHint));
})();

/* ---------- Final scene ---------- */
(function(){
  const s = makeScene('final');
  s.style.position = 'relative';

  ['🎈','🎈','🎈'].forEach((b, i) => {
    const balloon = el('span', 'balloon', b);
    balloon.style.left = (10 + i * 35) + '%';
    balloon.style.top = (i % 2 === 0 ? '0px' : '20px');
    balloon.style.animationDelay = (i * .5) + 's';
    s.appendChild(balloon);
  });

  const wingsRow = el('div', 'wings-flank');
  wingsRow.appendChild(img('wingsPair', null, ''));
  s.appendChild(wingsRow);

  const panel = el('div', 'panel');
  panel.appendChild(el('div', 'dialogue', 'Happiest birthday, my baby!'));

  const banner = el('div', 'banner-row');
  'HAPPY BIRTHDAY'.split('').forEach((ch, i) => {
    if(ch === ' '){ banner.appendChild(el('span','banner-tile space')); return; }
    const tile = el('span', 'banner-tile' + (i % 2 ? ' alt' : ''), ch);
    banner.appendChild(tile);
  });
  panel.appendChild(banner);
  panel.appendChild(img('divider', 'divider-img', ''));

  const photoRow = el('div', 'photo-row');
  for(let i = 0; i < 2; i++){
    const frame = el('div', 'photo-frame');
    if(CONFIG.photos[i]){
      const p = document.createElement('img');
      p.src = CONFIG.photos[i];
      frame.appendChild(p);
    } else {
      frame.appendChild(img('bow', 'ph-icon', ''));
    }
    photoRow.appendChild(frame);
  }
  panel.appendChild(photoRow);

  s.appendChild(panel);

  const avatarWrap = el('div', 'avatar-row');
  avatarWrap.appendChild(img('girl', null, ''));
  avatarWrap.appendChild(img('cat', 'small', ''));
  avatarWrap.appendChild(img('mymelody', 'small', ''));
  s.appendChild(avatarWrap);

  const replay = el('button', 'pixel-btn replay', 'REPLAY ↺');
  replay.onclick = () => {
    document.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = false;
      b.classList.remove('is-correct','is-wrong');
    });
    document.querySelectorAll('.cake-btn').forEach(b => b.disabled = false);
    document.querySelectorAll('.quiz-feedback').forEach(f => f.textContent = '');
    showScene(0);
  };
  s.appendChild(replay);

  setInterval(() => {
    if(!s.classList.contains('active')) return;
    const rect = s.getBoundingClientRect();
    burstConfetti(rect.left + rect.width/2, rect.top + 30);
  }, 2200);
})();

/* ---------- background floating stickers ---------- */
(function(){
  const layer = document.getElementById('bgHearts');
  const keys = ['heart','star','strawberry'];
  for(let i = 0; i < 14; i++){
    const key = keys[Math.floor(Math.random()*keys.length)];
    const h = img(key, 'bg-sticker', '');
    h.style.left = Math.random()*100 + '%';
    h.style.animationDuration = (7 + Math.random()*8) + 's';
    h.style.animationDelay = (Math.random()*8) + 's';
    const size = 16 + Math.random()*16;
    h.style.width = size + 'px';
    layer.appendChild(h);
  }
})();

showScene(0);
