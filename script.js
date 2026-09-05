/* ========================================
   METAVERSE AVATAR SYSTEM
   JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================
     QUESTIONS
  ======================================== */

  const questions = [
    {
      category: "PERSONALITY",
      text: "みんなで何かをするとき、あなたはどんな役割？",
      answers: [
        {
          text: "みんなをまとめて先頭に立つ",
          type: "leader"
        },
        {
          text: "勝利を目指して全力で挑戦する",
          type: "gamer"
        },
        {
          text: "知らない場所を探索してみたい",
          type: "explorer"
        },
        {
          text: "自分のアイデアを形にしたい",
          type: "creator"
        },
        {
          text: "みんなと楽しく話したい",
          type: "communicator"
        },
        {
          text: "仕組みや技術を考える",
          type: "technology"
        }
      ]
    },

    {
      category: "ADVENTURE",
      text: "メタバースに入ったら、まず何をする？",
      answers: [
        {
          text: "仲間を集めてチームを作る",
          type: "leader"
        },
        {
          text: "ゲームや対戦を始める",
          type: "gamer"
        },
        {
          text: "広い世界を探索する",
          type: "explorer"
        },
        {
          text: "自分だけの世界を作る",
          type: "creator"
        },
        {
          text: "いろいろな人と話してみる",
          type: "communicator"
        },
        {
          text: "世界の仕組みを調べる",
          type: "technology"
        }
      ]
    },

    {
      category: "CREATIVITY",
      text: "自由に世界を作れるなら、何を作りたい？",
      answers: [
        {
          text: "みんなが集まる巨大な都市",
          type: "leader"
        },
        {
          text: "スリル満点のゲームステージ",
          type: "gamer"
        },
        {
          text: "未知の惑星や大自然",
          type: "explorer"
        },
        {
          text: "想像力を詰め込んだファンタジー世界",
          type: "creator"
        },
        {
          text: "人が交流できるコミュニティ",
          type: "communicator"
        },
        {
          text: "最新技術を使った未来都市",
          type: "technology"
        }
      ]
    },

    {
      category: "CHALLENGE",
      text: "難しい問題が発生したら、どうする？",
      answers: [
        {
          text: "みんなに指示を出して解決する",
          type: "leader"
        },
        {
          text: "何度も挑戦して攻略する",
          type: "gamer"
        },
        {
          text: "いろいろ試しながら答えを探す",
          type: "explorer"
        },
        {
          text: "新しい方法を考えてみる",
          type: "creator"
        },
        {
          text: "誰かに相談して一緒に考える",
          type: "communicator"
        },
        {
          text: "原因を分析して仕組みから直す",
          type: "technology"
        }
      ]
    },

    {
      category: "FUTURE",
      text: "あなたがメタバースで一番大切にしたいものは？",
      answers: [
        {
          text: "仲間を導くこと",
          type: "leader"
        },
        {
          text: "勝負と達成感",
          type: "gamer"
        },
        {
          text: "新しい発見",
          type: "explorer"
        },
        {
          text: "自由な創造",
          type: "creator"
        },
        {
          text: "人とのつながり",
          type: "communicator"
        },
        {
          text: "未来のテクノロジー",
          type: "technology"
        }
      ]
    }
  ];


  /* ========================================
     RESULT DATA
  ======================================== */

  const resultData = {

    leader: {
      type: "LEADER TYPE",
      japanese: "リーダー型",
      name: "蒼井 レオン",
      description:
        "仲間をまとめ、未来へ進む方向を示す存在。あなたの判断力と行動力は、メタバースの世界でも大きな力になります。",
      message:
        "あなたは仲間を導く「サイバーリーダー」。みんなが安心して進める場所を作れる存在です。",
      tags: [
        "LEADERSHIP",
        "DECISION",
        "TEAMWORK"
      ]
    },

    gamer: {
      type: "GAMER TYPE",
      japanese: "ゲーマー型",
      name: "黒木 ユウト",
      description:
        "競争やチャレンジを楽しみ、難しいことにも何度も挑戦できるタイプ。ゲーム感覚で世界を攻略していきます。",
      message:
        "あなたは「バーチャルプレイヤー」。どんなステージでも楽しみながら突破していける存在です。",
      tags: [
        "CHALLENGE",
        "COMPETITION",
        "SKILL"
      ]
    },

    explorer: {
      type: "EXPLORER TYPE",
      japanese: "冒険家型",
      name: "高橋 ソラ",
      description:
        "未知の場所や新しい体験が大好き。まだ誰も見たことのない世界を探し出す好奇心を持っています。",
      message:
        "あなたは「バーチャル探検家」。未知の世界を見つけ、新しい可能性を発見する存在です。",
      tags: [
        "ADVENTURE",
        "DISCOVERY",
        "CURIOSITY"
      ]
    },

    creator: {
      type: "CREATOR TYPE",
      japanese: "クリエイター型",
      name: "中村 ミオ",
      description:
        "頭の中にあるアイデアを形にする力を持つタイプ。自由な発想で、新しい世界や体験を生み出します。",
      message:
        "あなたは「ワールドクリエイター」。誰も見たことのない世界を生み出すことができます。",
      tags: [
        "CREATIVITY",
        "DESIGN",
        "IMAGINATION"
      ]
    },

    communicator: {
      type: "COMMUNICATOR TYPE",
      japanese: "コミュニケーター型",
      name: "佐藤 ヒナ",
      description:
        "人とのコミュニケーションを大切にするタイプ。さまざまな人をつなぎ、楽しい空間を作ることができます。",
      message:
        "あなたは「バーチャルコミュニケーター」。人と人をつなぐことで、メタバースをもっと楽しくできます。",
      tags: [
        "COMMUNICATION",
        "FRIENDS",
        "COMMUNITY"
      ]
    },

    technology: {
      type: "TECHNOLOGY TYPE",
      japanese: "テクノロジー型",
      name: "鈴木 シオン",
      description:
        "仕組みや技術に興味を持ち、問題を論理的に解決するタイプ。未来のメタバースを支える存在です。",
      message:
        "あなたは「メタバースエンジニア」。テクノロジーの力で未来の世界を作っていく存在です。",
      tags: [
        "TECHNOLOGY",
        "LOGIC",
        "FUTURE"
      ]
    }

  };


  /* ========================================
     VARIABLES
  ======================================== */

  let currentQuestion = 0;

  let scores = {
    leader: 0,
    gamer: 0,
    explorer: 0,
    creator: 0,
    communicator: 0,
    technology: 0
  };


  /* ========================================
     DOM
  ======================================== */

  const startScreen =
    document.getElementById("startScreen");

  const quizScreen =
    document.getElementById("quizScreen");

  const resultScreen =
    document.getElementById("resultScreen");

  const startButton =
    document.getElementById("startButton");

  const retryButton =
    document.getElementById("retryButton");

  const questionNumber =
    document.getElementById("questionNumber");

  const questionCategory =
    document.getElementById("questionCategory");

  const questionText =
    document.getElementById("questionText");

  const answers =
    document.getElementById("answers");

  const progressBar =
    document.getElementById("progressBar");

  const quizStatus =
    document.getElementById("quizStatus");

  const resultType =
    document.getElementById("resultType");

  const personName =
    document.getElementById("personName");

  const resultDescription =
    document.getElementById("resultDescription");

  const resultMessage =
    document.getElementById("resultMessage");

  const resultTags =
    document.getElementById("resultTags");

  const resultIcon =
    document.getElementById("resultIcon");


  /* ========================================
     SCREEN CHANGE
  ======================================== */

  function showScreen(screen) {

    startScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    screen.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* ========================================
     START DIAGNOSIS
  ======================================== */

  function startDiagnosis() {

    currentQuestion = 0;

    scores = {
      leader: 0,
      gamer: 0,
      explorer: 0,
      creator: 0,
      communicator: 0,
      technology: 0
    };

    showScreen(quizScreen);

    displayQuestion();
  }


  /* ========================================
     DISPLAY QUESTION
  ======================================== */

  function displayQuestion() {

    const question = questions[currentQuestion];

    const number =
      String(currentQuestion + 1).padStart(2, "0");

    questionNumber.textContent = number;

    questionCategory.textContent =
      question.category;

    questionText.textContent =
      question.text;

    const progress =
      ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
      progress + "%";

    quizStatus.textContent =
      "SELECT ONE ANSWER";

    answers.innerHTML = "";

    question.answers.forEach((answer, index) => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className = "answer-button";

      button.innerHTML = `
        <span class="answer-index">
          ${index + 1}
        </span>
        ${answer.text}
      `;

      button.addEventListener(
        "click",
        () => selectAnswer(answer.type)
      );

      answers.appendChild(button);

    });
  }


  /* ========================================
     SELECT ANSWER
  ======================================== */

  function selectAnswer(type) {

    scores[type]++;

    quizStatus.textContent =
      "ANSWER RECEIVED";

    currentQuestion++;

    setTimeout(() => {

      if (currentQuestion < questions.length) {

        displayQuestion();

      } else {

        showResult();

      }

    }, 250);
  }


  /* ========================================
     GET RESULT
  ======================================== */

  function getResultType() {

    let bestType = "leader";
    let bestScore = -1;

    Object.keys(scores).forEach(type => {

      if (scores[type] > bestScore) {

        bestScore = scores[type];
        bestType = type;

      }

    });

    return bestType;
  }


  /* ========================================
     CREATE HUMAN AVATAR
  ======================================== */

  function createHumanAvatar(type) {

    resultIcon.innerHTML = "";

    const avatar =
      document.createElement("div");

    avatar.className =
      `human-avatar avatar-${type}`;

    avatar.innerHTML = `
      <div class="avatar-floor"></div>
      <div class="avatar-body"></div>
      <div class="avatar-neck"></div>
      <div class="avatar-head"></div>
      <div class="avatar-hair"></div>
      <div class="avatar-eyes"></div>
      <div class="avatar-device"></div>
    `;

    resultIcon.appendChild(avatar);
  }


  /* ========================================
     SHOW RESULT
  ======================================== */

  function showResult() {

    const type =
      getResultType();

    const data =
      resultData[type];

    resultType.textContent =
      `${data.type} / ${data.japanese}`;

    personName.textContent =
      data.name;

    resultDescription.textContent =
      data.description;

    resultMessage.textContent =
      data.message;

    resultTags.innerHTML = "";

    data.tags.forEach(tag => {

      const span =
        document.createElement("span");

      span.className =
        "result-tag";

      span.textContent =
        tag;

      resultTags.appendChild(span);

    });

    createHumanAvatar(type);

    showScreen(resultScreen);
  }


  /* ========================================
     RETRY
  ======================================== */

  function retryDiagnosis() {

    startDiagnosis();

  }


  /* ========================================
     EVENTS
  ======================================== */

  startButton.addEventListener(
    "click",
    startDiagnosis
  );

  retryButton.addEventListener(
    "click",
    retryDiagnosis
  );


  /* ========================================
     SYSTEM CHECK
  ======================================== */

  console.log(
    "METAVERSE AVATAR SYSTEM ONLINE"
  );

});
