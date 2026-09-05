/* ========================================
   METAVERSE AVATAR SYSTEM
   STYLE
======================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: #050510;
  color: #ffffff;
  font-family:
    "Noto Sans JP",
    "Yu Gothic",
    "Hiragino Kaku Gothic ProN",
    Arial,
    sans-serif;
  overflow-x: hidden;
}


/* ========================================
   APP
======================================== */

.app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 20%, #17134b 0%, #080817 35%, #03030b 80%);
}


/* ========================================
   BACKGROUND
======================================== */

.stars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.7;
  background-image:
    radial-gradient(circle, #ffffff 1px, transparent 1px),
    radial-gradient(circle, #6c8cff 1px, transparent 1px);
  background-size: 90px 90px, 140px 140px;
  background-position: 10px 20px, 50px 70px;
}

.grid {
  position: fixed;
  left: -20%;
  right: -20%;
  bottom: -25%;
  height: 60%;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  pointer-events: none;
  opacity: 0.25;

  background-image:
    linear-gradient(rgba(77, 122, 255, 0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(77, 122, 255, 0.35) 1px, transparent 1px);

  background-size: 50px 50px;
}


/* ========================================
   CONTAINER
======================================== */

.container {
  position: relative;
  z-index: 2;
  width: min(900px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}


/* ========================================
   SCREEN
======================================== */

.screen {
  display: none;
  width: 100%;
  animation: fadeIn 0.5s ease;
}

.screen.active {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* ========================================
   START SCREEN
======================================== */

#startScreen {
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.system-label {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #5267ff;
  color: #8d9aff;
  background: rgba(67, 79, 255, 0.08);
  letter-spacing: 4px;
  font-size: 12px;
  margin-bottom: 22px;
}

.system-symbol {
  font-size: 30px;
  color: #7c8cff;
  margin-bottom: 8px;
}

.system-subtitle {
  color: #8d94b8;
  letter-spacing: 5px;
  font-size: 12px;
  margin-bottom: 35px;
}

#startScreen h1 {
  font-size: clamp(42px, 8vw, 76px);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -3px;
  margin-bottom: 28px;
}

#startScreen h1 span {
  display: inline-block;
  background: linear-gradient(
    90deg,
    #6c7cff,
    #a26cff,
    #e16cff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.description {
  color: #b5b8d1;
  line-height: 2;
  font-size: 16px;
  margin-bottom: 35px;
}


/* ========================================
   BUTTON
======================================== */

.main-button {
  position: relative;
  border: 1px solid #6978ff;
  background: linear-gradient(
    135deg,
    #2634a7,
    #642a9c
  );
  color: white;
  padding: 17px 28px;
  min-width: 230px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  box-shadow:
    0 0 25px rgba(88, 91, 255, 0.25);
}

.main-button span {
  margin-left: 15px;
  font-size: 20px;
}

.main-button:hover {
  transform: translateY(-3px);
  background: linear-gradient(
    135deg,
    #3446c9,
    #8136bf
  );
  box-shadow:
    0 0 35px rgba(105, 120, 255, 0.45);
}

.main-button:active {
  transform: translateY(0);
}


/* ========================================
   INFO BOX
======================================== */

.info-box {
  display: flex;
  justify-content: center;
  gap: 45px;
  margin-top: 50px;
  padding-top: 25px;
  border-top: 1px solid rgba(130, 140, 255, 0.2);
}

.info-box div {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.info-box span {
  font-size: 10px;
  color: #70779d;
  letter-spacing: 2px;
}

.info-box strong {
  font-size: 18px;
  color: #e7e8ff;
}

.online {
  margin-top: 28px;
  font-size: 10px;
  letter-spacing: 3px;
  color: #6fdaae;
}

.online-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5dffb2;
  box-shadow: 0 0 10px #5dffb2;
  margin-right: 8px;
}


/* ========================================
   QUIZ
======================================== */

#quizScreen {
  max-width: 760px;
  margin: auto;
}

.quiz-header {
  margin-bottom: 25px;
}

.quiz-number {
  color: #8087aa;
  font-size: 12px;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.quiz-number strong {
  color: #ffffff;
  font-size: 25px;
  margin-left: 8px;
}

.quiz-number span {
  color: #5d6282;
}

.progress {
  width: 100%;
  height: 4px;
  background: #171a30;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 20%;
  background: linear-gradient(
    90deg,
    #6575ff,
    #bb6cff
  );
  box-shadow: 0 0 12px rgba(108, 123, 255, 0.8);
  transition: width 0.3s ease;
}


/* ========================================
   QUESTION CARD
======================================== */

.question-card {
  position: relative;
  padding: 45px;
  border: 1px solid rgba(112, 125, 255, 0.3);
  background: rgba(10, 12, 30, 0.85);
  box-shadow:
    0 0 50px rgba(62, 73, 170, 0.12);
}

.question-category {
  color: #7d8cff;
  font-size: 10px;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.question-card h2 {
  font-size: clamp(25px, 4vw, 38px);
  line-height: 1.5;
  margin-bottom: 35px;
  font-weight: 800;
}


/* ========================================
   ANSWERS
======================================== */

.answers {
  display: grid;
  gap: 12px;
}

.answer-button {
  width: 100%;
  text-align: left;
  border: 1px solid #292d4b;
  background: #0c0f21;
  color: #dfe2f4;
  padding: 18px 20px;
  font-size: 15px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.answer-button:hover {
  border-color: #6876ff;
  background: #151936;
  transform: translateX(5px);
}

.answer-index {
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border: 1px solid #4b537d;
  margin-right: 12px;
  color: #8b94c7;
  font-size: 12px;
}


/* ========================================
   QUIZ FOOTER
======================================== */

.quiz-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  color: #555b7c;
  font-size: 9px;
  letter-spacing: 2px;
}

#quizStatus {
  color: #6872a0;
}


/* ========================================
   RESULT
======================================== */

#resultScreen {
  max-width: 760px;
  margin: auto;
  text-align: center;
}

.result-top {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6fdaae;
  font-size: 10px;
  letter-spacing: 3px;
  margin-bottom: 25px;
}

.result-line {
  height: 1px;
  flex: 1;
  background: #283052;
}

.result-label {
  color: #767da2;
  letter-spacing: 4px;
  font-size: 11px;
  margin-bottom: 15px;
}

.result-type {
  font-size: 14px;
  letter-spacing: 4px;
  margin-top: 15px;
  color: #8792ff;
}

.person-name {
  font-size: clamp(35px, 7vw, 60px);
  margin: 8px 0 18px;
  font-weight: 900;
}

.result-description {
  max-width: 560px;
  margin: 0 auto 22px;
  color: #b5b9d0;
  line-height: 1.9;
}


/* ========================================
   RESULT TAGS
======================================== */

.result-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 25px;
}

.result-tag {
  border: 1px solid #30365d;
  padding: 7px 13px;
  color: #9ea5cb;
  font-size: 11px;
}


/* ========================================
   RESULT MESSAGE
======================================== */

.result-message {
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  border-left: 3px solid #707cff;
  padding: 16px 20px;
  background: rgba(80, 91, 180, 0.08);
  margin-bottom: 30px;
}

.message-mark {
  color: #858fff;
}

.result-message p {
  color: #c3c6dc;
  line-height: 1.7;
}


/* ========================================
   HUMAN AVATAR
======================================== */

.avatar-area {
  position: relative;
  width: 260px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.human-avatar {
  position: relative;
  width: 180px;
  height: 280px;
}


/* floor */

.avatar-floor {
  position: absolute;
  width: 180px;
  height: 20px;
  left: 0;
  bottom: 0;
  border-radius: 50%;
  background: rgba(100, 120, 255, 0.15);
  box-shadow: 0 0 35px rgba(100, 120, 255, 0.25);
}


/* body */

.avatar-body {
  position: absolute;
  width: 100px;
  height: 105px;
  left: 40px;
  bottom: 35px;
  border-radius: 35px 35px 15px 15px;
  background: linear-gradient(
    145deg,
    #20294c,
    #0c1025
  );
  border: 2px solid var(--avatar-color);
  box-shadow:
    0 0 18px var(--avatar-glow);
}


/* neck */

.avatar-neck {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 74px;
  bottom: 128px;
  background: #c58e75;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
}


/* head */

.avatar-head {
  position: absolute;
  width: 88px;
  height: 105px;
  left: 46px;
  bottom: 145px;
  border-radius: 45% 45% 48% 48%;
  background: linear-gradient(
    145deg,
    #e3ae91,
    #bd806d
  );
  border: 2px solid var(--avatar-color);
  box-shadow:
    0 0 25px var(--avatar-glow);
  z-index: 3;
}


/* ears */

.avatar-head::before,
.avatar-head::after {
  content: "";
  position: absolute;
  top: 42px;
  width: 13px;
  height: 24px;
  border-radius: 50%;
  background: #c88c75;
}

.avatar-head::before {
  left: -8px;
}

.avatar-head::after {
  right: -8px;
}


/* hair */

.avatar-hair {
  position: absolute;
  left: 44px;
  bottom: 225px;
  width: 92px;
  height: 60px;
  z-index: 5;
  background: #151727;
  border-radius: 55% 55% 30% 30%;
  border-top: 3px solid var(--avatar-color);
}

.avatar-hair::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 55px;
  left: 5px;
  top: 12px;
  background: #151727;
  transform: rotate(22deg);
  border-radius: 0 0 50% 50%;
}


/* eyes */

.avatar-eyes {
  position: absolute;
  left: 65px;
  bottom: 185px;
  width: 50px;
  height: 10px;
  z-index: 6;
}

.avatar-eyes::before,
.avatar-eyes::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--avatar-color);
  box-shadow: 0 0 8px var(--avatar-color);
}

.avatar-eyes::before {
  left: 5px;
}

.avatar-eyes::after {
  right: 5px;
}


/* device */

.avatar-device {
  position: absolute;
  width: 22px;
  height: 55px;
  right: 18px;
  bottom: 65px;
  border: 2px solid var(--avatar-color);
  background: #11162e;
  transform: rotate(12deg);
  box-shadow: 0 0 12px var(--avatar-glow);
  z-index: 10;
}

.avatar-device::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--avatar-color);
  left: 6px;
  top: 7px;
}


/* arms */

.human-avatar::before,
.human-avatar::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 90px;
  bottom: 40px;
  background: #18213c;
  border: 2px solid var(--avatar-color);
  border-radius: 20px;
  z-index: 1;
}

.human-avatar::before {
  left: 27px;
  transform: rotate(10deg);
}

.human-avatar::after {
  right: 27px;
  transform: rotate(-10deg);
}


/* ========================================
   AVATAR TYPES
======================================== */

/* leader */
.avatar-leader {
  --avatar-color: #3f7cff;
  --avatar-glow: rgba(63, 124, 255, 0.65);
}

/* gamer */
.avatar-gamer {
  --avatar-color: #ff405b;
  --avatar-glow: rgba(255, 64, 91, 0.65);
}

/* explorer */
.avatar-explorer {
  --avatar-color: #4ee68b;
  --avatar-glow: rgba(78, 230, 139, 0.65);
}

/* creator */
.avatar-creator {
  --avatar-color: #ffd447;
  --avatar-glow: rgba(255, 212, 71, 0.65);
}

/* communicator */
.avatar-communicator {
  --avatar-color: #ff72bd;
  --avatar-glow: rgba(255, 114, 189, 0.65);
}

/* technology */
.avatar-technology {
  --avatar-color: #a566ff;
  --avatar-glow: rgba(165, 102, 255, 0.65);
}


/* ========================================
   RETRY BUTTON
======================================== */

#retryButton {
  margin-top: 5px;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .container {
    width: min(100% - 24px, 900px);
    padding: 35px 0;
  }

  #startScreen h1 {
    letter-spacing: -2px;
  }

  .description {
    font-size: 14px;
  }

  .info-box {
    gap: 22px;
  }

  .question-card {
    padding: 28px 20px;
  }

  .question-card h2 {
    font-size: 23px;
  }

  .answer-button {
    padding: 15px;
  }

  .quiz-footer {
    font-size: 8px;
  }

  .avatar-area {
    transform: scale(0.9);
    margin-top: -5px;
    margin-bottom: -5px;
  }

  .person-name {
    font-size: 38px;
  }

  .result-description {
    font-size: 14px;
  }
}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 380px) {

  .system-subtitle {
    letter-spacing: 3px;
  }

  .info-box {
    gap: 12px;
  }

  .info-box strong {
    font-size: 15px;
  }

  .avatar-area {
    transform: scale(0.8);
    margin-top: -25px;
    margin-bottom: -25px;
  }
      }
