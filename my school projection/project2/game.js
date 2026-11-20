
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const $ = (id) => document.getElementById(id);

const LEVELS = [
  ["","იაკობ გოგებაშვილი დაიბადა 1840 წლის 15 ოქტომბერს სოფელ ვარიანში, გორის მახლობლად."],
  ["","„დედაენა“ ერთ-ერთი ყველაზე ცნობილი ქართული წიგნია — მისი სახელი თითქმის ყველა ქართველს სმენია."],
  ["","იგი იყო ქართველი მწერალი, პედაგოგი და საზოგადო მოღვაწე. ბავშვობაში სწავლობდა თბილისის სასულიერო სასწავლებელში."],
  ["","🗓️ პირველი „დედაენა“ 1876 წელს გამოიცა, ანუ ის 150 წელზე მეტ ისტორიას ინახავს."],
  ["","შემდეგ სწავლა გააგრძელა თბილისის სასულიერო სემინარიაში. განათლების მისაღებად რუსეთშიც გაემგზავრა."],
  ["","🧒 წიგნი სპეციალურად ბავშვებისთვის შეიქმნა, რათა წერა-კითხვა მათთვის რთული და მოსაწყენი არ ყოფილიყო."],
  ["","იგი მთელი ცხოვრება ცდილობდა, ბავშვებს განათლება ქართულ ენაზე მიეღოთ."],
  ["","🧩 გოგებაშვილმა სწავლა პატარა ნაბიჯებად დაყო: ჯერ ასოები, შემდეგ მარცვლები, სიტყვები და ბოლოს წინადადებები."],
  ["","იაკობ გოგებაშვილი ქართული საბავშვო ლიტერატურის ერთ-ერთი ფუძემდებელია. მისი ყველაზე ცნობილი წიგნია „დედაენა“."],
  ["","🎨 წიგნში ილუსტრაციებს დიდი მნიშვნელობა ჰქონდა — ბავშვებს ნახატებითაც შეეძლოთ ტექსტის გაგება."],
  ["","„დედაენა“ პირველად 1876 წელს გამოიცა. გოგებაშვილის კიდევ ერთი ცნობილი წიგნია „ბუნების კარი“."],
  ["","🐦 „დედაენაში“ ბავშვები სწავლობენ არა მხოლოდ ასოებს, არამედ ცხოველებს, ფრინველებსა და ბუნებასაც."],
  ["","მან შექმნა ცნობილი მოთხრობა „იავნანამ რა ჰქმნა?“. მისი ნაწარმოებები ბავშვებს ასწავლიდა სიკეთეს, პატრიოტიზმსა და შრომისმოყვარეობას."],
  ["","🧠 წიგნი ისე იყო შედგენილი, რომ ბავშვს ნასწავლი სიტყვები ყოველდღიურ ცხოვრებასთან დაეკავშირებინა."],
  ["","გოგებაშვილი დიდ ყურადღებას აქცევდა ბავშვებისთვის გასაგებ და მარტივ ენას."],
  ["","✍️ იაკობ გოგებაშვილმა იცოდა, რომ ბავშვი მხოლოდ დაზეპირებით ვერ ისწავლიდა — მას გაგება და აზროვნება სჭირდებოდა."],
  ["","იაკობ გოგებაშვილმა საკუთარი ქონების ნაწილი ქართული განათლებისა და წიგნების გამოცემას მოახმარა."],
  ["","🌱 წიგნში მარტივი ტექსტების მიღმა ხშირად დიდი ცხოვრებისეული აზრი იმალება. „დედაენა“ ქართული ენის შენარჩუნების საქმეში ძალიან მნიშვნელოვანი იყო, განსაკუთრებით მაშინ, როცა ქართულ ენაზე განათლების მიღება რთულდებოდა."],
  ["","იაკობ გოგებაშვილი გარდაიცვალა 1912 წლის 14 ივნისს, თბილისში, მაგრამ მისი წიგნები დღემდე გამოიყენება."],
  ["","🌸 პირველი გაკვეთილი ძალიან მოკლე იყო — ცნობილ საწყის სიტყვებს „აი ია“ დიდი მნიშვნელობა ჰქონდა: ბავშვი მარტივი სიტყვით იწყებდა კითხვას. 🔍 გოგებაშვილის მეთოდი განსხვავდებოდა მხოლოდ ასოების დაზეპირებისგან — ის ბავშვებს თავიდანვე აზრიანი სიტყვებითა და ფრაზებით ასწავლიდა."],
  ["","🏡 „დედაენის“ შექმნისას გოგებაშვილი სოფელ ვარიანში დაბრუნდა და ხალხურ სიტყვებსა და ბავშვებისთვის შესაფერის მასალებს აგროვებდა. 📚 „დედაენამდე“ გოგებაშვილს სხვა ქართული სასწავლო წიგნებიც ჰქონდა გამოცემული — პირველი მათგანი 1865 წელს გამოვიდა."],
  ["","🆕 თავდაპირველ წიგნს ერქვა „ქართული ენის ანბანი და პირველი საკითხავი წიგნი მოსწავლეთათვის“, ხოლო სახელწოდება „დედა ენა“ მოგვიანებით დამკვიდრდა. 🖼️ წიგნში ნახატები მხოლოდ გასაფორმებლად არ იყო — ისინი სასწავლო პროცესის მნიშვნელოვანი ნაწილი გახლდათ."],
  ["","🧠 გოგებაშვილის სწავლების მეთოდი ბავშვის აზროვნებას ავითარებდა: მოსწავლეს უნდა გაეგო წაკითხულის აზრი და არა მხოლოდ სიტყვები დაეზეპირებინა. 📜 „დედაენა“ სხვადასხვა გამოცემაში იცვლებოდა და იხვეწებოდა — გოგებაშვილი წიგნს ახალი თაობების საჭიროებებს არგებდა."],
  ["","📕 წიგნს სხვადასხვა პერიოდში რამდენიმე გამოცემა ჰქონდა და ის იმდენად პოპულარული გახდა, რომ ათწლეულების განმავლობაში ხელახლა იბეჭდებოდა. 🏫 „დედაენამ“ ქართული დაწყებითი განათლების განვითარებაში დიდი როლი ითამაშა და მისმა მეთოდებმა გავლენა მოახდინა შემდგომ სახელმძღვანელოებზეც."],
  ["","🧩 წიგნის ტექსტები მარტივიდან რთულისკენ მიდიოდა — ეს ბავშვს სწავლის პროცესს უადვილებდა. 🐾 მასში მოთხრობების საშუალებით ბავშვები ცხოველების ქცევას, ბუნებასა და ადამიანურ ურთიერთობებს ეცნობოდნენ.ვ"],
  ["","🌍 „დედაენის“ მიზანი მხოლოდ წერა-კითხვის სწავლება არ ყოფილა — მას სურდა, ბავშვი ქართულ კულტურასაც გაცნობოდა. 🪶 გოგებაშვილი ცდილობდა, წიგნში ისეთი ქართული სიტყვები გამოეყენებინა, რომლებიც ბავშვისთვის ბუნებრივი და გასაგები იქნებოდა."],
  ["","💡 წიგნის მეთოდი იმდენად მნიშვნელოვანი გახდა, რომ დღესაც ახსენებენ ქართული პედაგოგიკის ისტორიაში, როგორც სწავლების განსაკუთრებულ მიდგომას. 🏅 „დედაენას“ ეროვნული კულტურული მნიშვნელობის სტატუსი აქვს — მისი ისტორიული და საგანმანათლებლო ღირებულება ოფიციალურადაც არის აღიარებული."],
  ["","🕰️ წიგნის პირველი გამოცემიდან მრავალი თაობა გაიზარდა — ბებია-ბაბუებს, მშობლებსა და შვილებს ხშირად ერთი და იგივე სახელმძღვანელო აკავშირებდა. 🗣️ გოგებაშვილის წიგნი დაეხმარა ქართულ ენაზე განათლების გავრცელებას იმ პერიოდში, როდესაც სკოლებში ქართული ენის სწავლების საკითხი მნიშვნელოვანი გამოწვევა იყო."],
  ["","❤️ „დედაენა“ სინამდვილეში მხოლოდ წიგნი არ არის — ის ქართული ენის, ბავშვობის, სკოლისა და ეროვნული მეხსიერების სიმბოლოდ იქცა. 🌟 ყველაზე საოცარი ფაქტი: ერთი წიგნის იდეამ მილიონობით ბავშვს წერა-კითხვა შეასწავლა და დღემდე ახსოვთ მისი პირველი სიტყვები — „აი ია“."],
  ["", "❤️❤️❤️გილოცავ დედაენის 150 წლის იუბილეს. წარმატებები!"]
];

let scene, camera, renderer, clock;
let player, playerVelocity;

let platforms = [];
let coins = [];
let hazards = [];
let decorations = [];

let currentLevel = 0;
let score = 0;
let lives = 3;

let running = false;
let paused = false;
let grounded = false;
let jumpQueued = false;

let keys = {};

let levelGoal;
let toastTimer;
let cameraYaw = 0;
let cameraPitch = 0.28;

const PLAYER_START = new THREE.Vector3(0, 1.2, 4);

const WORLD = {
  gravity: 22,
  speed: 8,
  jump: 9.5
};

// მასალების შექმნა
function makeMaterial(color, roughness = 0.8, metalness = 0) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness
  });
}

// კუბის შექმნა
function box(parent, x, y, z, sx, sy, sz, material, cast = true) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(sx, sy, sz),
    material
  );

  mesh.position.set(x, y, z);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;

  parent.add(mesh);

  return mesh;
}

// სფეროს შექმნა
function sphere(parent, x, y, z, r, material) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(r, 18, 14),
    material
  );

  mesh.position.set(x, y, z);
  mesh.castShadow = true;

  parent.add(mesh);

  return mesh;
}

// ცილინდრის შექმნა
function cylinder(parent, x, y, z, rt, rb, h, material) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(rt, rb, h, 12),
    material
  );

  mesh.position.set(x, y, z);
  mesh.castShadow = true;

  parent.add(mesh);

  return mesh;
}

// 3D თამაშის შექმნა
function init3D() {
  scene = new THREE.Scene();

  scene.background = new THREE.Color(0x9bc8df);

  scene.fog = new THREE.Fog(
    0x9bc8df,
    28,
    85
  );

  camera = new THREE.PerspectiveCamera(
    62,
    innerWidth / innerHeight,
    0.1,
    150
  );

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setPixelRatio(
    Math.min(devicePixelRatio, 2)
  );

  renderer.setSize(
    innerWidth,
    innerHeight
  );

  renderer.shadowMap.enabled = true;

  renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;

  renderer.outputColorSpace =
    THREE.SRGBColorSpace;

  renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

  $("game").prepend(renderer.domElement);

  // ცის განათება
  const hemi = new THREE.HemisphereLight(
    0xd9efff,
    0x5b503d,
    2.1
  );

  scene.add(hemi);

  // მზის განათება
  const sun = new THREE.DirectionalLight(
    0xffedc5,
    3.2
  );

  sun.position.set(-12, 22, 10);
  sun.castShadow = true;

  sun.shadow.mapSize.set(2048, 2048);

  sun.shadow.camera.left = -35;
  sun.shadow.camera.right = 35;
  sun.shadow.camera.top = 35;
  sun.shadow.camera.bottom = -35;

  scene.add(sun);

  clock = new THREE.Clock();

  createPlayer();

  window.addEventListener("resize", onResize);

  renderer.domElement.addEventListener(
    "pointerdown",
    () => renderer.domElement.requestPointerLock?.()
  );

  // მაუსით კამერის მართვა
  document.addEventListener("mousemove", (e) => {
    if (
      document.pointerLockElement === renderer.domElement &&
      running &&
      !paused
    ) {
      cameraYaw -= e.movementX * 0.0025;

      cameraPitch = Math.max(
        -0.1,
        Math.min(
          0.8,
          cameraPitch + e.movementY * 0.0018
        )
      );
    }
  });

  animate();
}

// მთავარი პერსონაჟი
function createPlayer() {
  player = new THREE.Group();

  const tunic = makeMaterial(0x315a82);
  const skin = makeMaterial(0xd9a77f);
  const dark = makeMaterial(0x27313b);
  const gold = makeMaterial(0xd7a53e, 0.45, 0.2);

  // ტანი
  box(
    player,
    0, 0.88, 0,
    0.62, 0.82, 0.38,
    tunic
  );

  // თავი
  sphere(
    player,
    0, 1.55, 0,
    0.31,
    skin
  );

  // ფეხები
  cylinder(
    player,
    -0.17, 0.25, 0,
    0.12, 0.14, 0.5,
    dark
  );

  cylinder(
    player,
    0.17, 0.25, 0,
    0.12, 0.14, 0.5,
    dark
  );

  // ხელები
  box(
    player,
    -0.42, 0.95, 0,
    0.2, 0.65, 0.22,
    tunic
  );

  box(
    player,
    0.42, 0.95, 0,
    0.2, 0.65, 0.22,
    tunic
  );

  // ქამარი
  box(
    player,
    0, 0.42, 0.02,
    0.68, 0.12, 0.42,
    gold
  );

  // ზურგჩანთა
  box(
    player,
    0, 1.02, -0.27,
    0.42, 0.48, 0.18,
    makeMaterial(0x8a5633)
  );

  player.position.copy(PLAYER_START);

  scene.add(player);

  playerVelocity = new THREE.Vector3();
}

// ძველი ლეველის წაშლა
function clearWorld() {
  for (
    const a of [
      ...platforms,
      ...coins,
      ...hazards,
      ...decorations
    ]
  ) {
    scene.remove(a.mesh || a);
  }

  platforms = [];
  coins = [];
  hazards = [];
  decorations = [];

  if (levelGoal) {
    scene.remove(levelGoal);
  }
}

// პლატფორმის შექმნა
function addPlatform(x, y, z, sx, sz, material = makeMaterial(0x758b72)) {
  const mesh = box(
    scene,
    x, y - 0.22, z,
    sx, 0.44, sz,
    material
  );

  platforms.push({
    mesh,
    x,
    y,
    z,
    sx,
    sz,
    top: y
  });

  return mesh;
}

// მონეტის შექმნა
function addCoin(x, y, z) {
  const group = new THREE.Group();

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.28, 0.09, 8, 20),
    makeMaterial(0xf6c84d, 0.3, 0.55)
  );

  group.add(ring);

  const star = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.13),
    makeMaterial(0xffed9b, 0.25, 0.3)
  );

  group.add(star);

  star.position.z = 0.02;

  group.position.set(x, y, z);

  scene.add(group);

  coins.push({
    mesh: group,
    taken: false
  });
}

// დაბრკოლების შექმნა
function addHazard(x, y, z) {
  const mesh = new THREE.Mesh(
    new THREE.ConeGeometry(0.55, 1.15, 5),
    makeMaterial(0x9a4d3a)
  );

  mesh.position.set(x, y + 0.48, z);
  mesh.rotation.y = 0.3;
  mesh.castShadow = true;

  scene.add(mesh);

  hazards.push({
    mesh,
    x,
    y: y + 0.48,
    z
  });
}

// ლეველის აგება
function buildLevel(n) {
  clearWorld();

  const groundMat = makeMaterial(
    n % 5 === 0 ? 0x9b9870 : 0x6f866b
  );

  const stone = makeMaterial(0x777e82);
  const wood = makeMaterial(0x886744);
  const accent = makeMaterial(0xd2b15a, 0.55);

  // საწყისი კუნძული
  addPlatform(
    0, 0, 3,
    9, 10,
    groundMat
  );

  const count = 8 + Math.floor(n / 4);

  // პლატფორმების რიგი
  for (let i = 0; i < count; i++) {
    const z = -3 - i * 4.1;

    const x =
      Math.sin(i * 0.92 + n * 0.25) * 2.9;

    const y =
      0.25 +
      Math.sin(i * 0.7 + n * 0.2) * 0.48 +
      (i % 3 === 0 ? 0.25 : 0);

    const width = i % 4 === 0 ? 4.1 : 3.2;

    addPlatform(
      x,
      y,
      z,
      width,
      3.1,
      i % 3 === 0 ? wood : stone
    );

    // მონეტები
    if (i % 2 === 0) {
      addCoin(
        x + (i % 4 === 0 ? 1.0 : -0.65),
        y + 1.25,
        z
      );
    }

    // საფრთხეები
    if (i % 3 === 1) {
      addHazard(x - 0.65, y, z);
    }

    // დროშები
    const post = cylinder(
      scene,
      x + width * 0.43,
      y + 0.65,
      z,
      0.045,
      0.045,
      1.3,
      accent
    );

    const flag = box(
      scene,
      x + width * 0.43 + 0.28,
      y + 1.1,
      z,
      0.55,
      0.28,
      0.05,
      makeMaterial(
        n % 2 ? 0x9b3c36 : 0x315f86
      ),
      false
    );

    decorations.push(post, flag);
  }

  const endZ = -3 - count * 4.1;

  // ფინალური პლატფორმა
  addPlatform(
    0, 0.3, endZ,
    8, 8,
    makeMaterial(0x9b8050)
  );

  // ფინალური მონეტები
  for (let i = 0; i < 4; i++) {
    addCoin(
      -1.8 + i * 1.2,
      1.6,
      endZ + 1
    );
  }

  // გამარჯვების კარიბჭე
  const gateMat = makeMaterial(
    0xf1c85e,
    0.35,
    0.25
  );

  box(scene, -2.5, 2.1, endZ - 2, 0.25, 4.2, 0.25, gateMat);
  box(scene, 2.5, 2.1, endZ - 2, 0.25, 4.2, 0.25, gateMat);
  box(scene, 0, 4.15, endZ - 2, 5.2, 0.25, 0.25, gateMat);

  // მიზანი
  levelGoal = sphere(
    scene,
    0, 1.5, endZ - 2,
    0.65,
    makeMaterial(0x55d7a4, 0.25, 0.2)
  );

  levelGoal.userData.endZ = endZ - 2;

  // შორეული მთები
  for (let i = 0; i < 12; i++) {
    const hill = new THREE.Mesh(
      new THREE.ConeGeometry(
        5 + Math.random() * 4,
        7 + Math.random() * 5,
        6
      ),
      makeMaterial(
        i % 2 ? 0x718d82 : 0x819a8c
      )
    );

    hill.position.set(
      (Math.random() - 0.5) * 55,
      -2,
      -Math.random() * 65 - 5
    );

    hill.rotation.y = Math.random() * 2;

    scene.add(hill);

    decorations.push(hill);
  }

  player.position.copy(PLAYER_START);

  playerVelocity.set(0, 0, 0);

  $("levelNo").textContent = n + 1;
  $("levelTitle").textContent = LEVELS[n][0];

  updateHUD();
}

// შეტყობინება
function showToast(text) {
  $("toast").textContent = text;

  $("toast").classList.remove("hidden");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    $("toast").classList.add("hidden");
  }, 2200);
}

// ქულების განახლება
function updateHUD() {
  $("score").textContent = score;
  $("lives").textContent = lives;
}

// ლეველის დაწყება
function startLevel(n) {
  currentLevel = Math.max(0, Math.min(29, n));

  running = true;
  paused = false;

  [
    "menu",
    "levelScreen",
    "pauseScreen",
    "messageScreen"
  ].forEach(id => {
    $(id).classList.add("hidden");
  });

  $("hud").classList.remove("hidden");
  $("help").classList.remove("hidden");

  buildLevel(currentLevel);

  if (
    currentLevel === 9 ||
    currentLevel === 15 ||
    currentLevel === 19
  ) {
    setTimeout(() => {
      showToast(LEVELS[currentLevel][1]);
    }, 500);
  }
}

// გამარჯვების ეკრანი
function showMessage(title, text, icon = "🏆", next = true) {
  running = false;
  paused = false;

  $("messageTitle").textContent = title;
  $("messageText").textContent = text;
  $("messageIcon").textContent = icon;

  $("nextBtn").classList.toggle(
    "hidden",
    !next || currentLevel === 29
  );

  $("nextBtn").textContent =
    currentLevel === 28
      ? "ფინალური ლეველი"
      : "შემდეგი ლეველი";

  $("messageScreen").classList.remove("hidden");
}

// სიცოცხლის დაკარგვა
function damage() {
  lives--;

  updateHUD();

  if (lives <= 0) {
    showMessage(
      "თამაში დასრულდა",
      "გმირი დაიღალა, მაგრამ შეგიძლია თავიდან სცადო. შენი ქულა: " + score,
      "💫",
      false
    );
  } else {
    player.position.copy(PLAYER_START);
    playerVelocity.set(0, 0, 0);

    showToast(
      "ფრთხილად! დარჩენილი სიცოცხლე: " + lives
    );
  }
}

// თამაშის ფიზიკა და მოძრაობა
function update(dt) {
  if (!running || paused) return;

  const forward =
    (keys.KeyW || keys.ArrowUp ? 1 : 0) -
    (keys.KeyS || keys.ArrowDown ? 1 : 0);

  const side =
    (keys.KeyD || keys.ArrowRight ? 1 : 0) -
    (keys.KeyA || keys.ArrowLeft ? 1 : 0);

  const dir = new THREE.Vector3(
    Math.sin(cameraYaw),
    0,
    Math.cos(cameraYaw)
  );

  const right = new THREE.Vector3(
    dir.z,
    0,
    -dir.x
  );

  const move = dir.multiplyScalar(-forward)
    .add(right.multiplyScalar(side));

  if (move.lengthSq() > 0) {
    move.normalize();
  }

  playerVelocity.x = THREE.MathUtils.damp(
    playerVelocity.x,
    move.x * WORLD.speed,
    10,
    dt
  );

  playerVelocity.z = THREE.MathUtils.damp(
    playerVelocity.z,
    move.z * WORLD.speed,
    10,
    dt
  );

  // ხტომა
  if (jumpQueued && grounded) {
    playerVelocity.y = WORLD.jump;
    grounded = false;
  }

  jumpQueued = false;

  // გრავიტაცია
  playerVelocity.y -= WORLD.gravity * dt;

  const oldY = player.position.y;

  player.position.x += playerVelocity.x * dt;
  player.position.z += playerVelocity.z * dt;
  player.position.y += playerVelocity.y * dt;

  grounded = false;

  // პლატფორმებთან შეჯახება
  for (const p of platforms) {
    const within =
      Math.abs(player.position.x - p.x) < p.sx / 2 + 0.18 &&
      Math.abs(player.position.z - p.z) < p.sz / 2 + 0.18;

    const feet = player.position.y - 0.02;

    if (
      within &&
      playerVelocity.y <= 0 &&
      feet <= p.top + 0.08 &&
      oldY >= p.top - 0.2
    ) {
      player.position.y = p.top;
      playerVelocity.y = 0;
      grounded = true;
    }
  }

  // პერსონაჟის მიმართულება
  if (move.lengthSq() > 0.01) {
    player.rotation.y = Math.atan2(
      move.x,
      move.z
    );
  }

  // მონეტების შეგროვება
  for (const c of coins) {
    if (!c.taken) {
      c.mesh.rotation.y += dt * 2.5;

      c.mesh.position.y +=
        Math.sin(performance.now() * 0.002 + c.mesh.position.z) * 0.001;

      if (
        player.position.distanceTo(c.mesh.position) < 1.05
      ) {
        c.taken = true;

        scene.remove(c.mesh);

        score += 10;

        updateHUD();

        showToast(
          "+10 — ქართული ასო შეგაგროვებია!"
        );
      }
    }
  }

  // დაბრკოლებები
  for (const h of hazards) {
    h.mesh.rotation.y += dt * 0.8;

    if (
      player.position.distanceTo(h.mesh.position) < 0.8 &&
      player.position.y < h.mesh.position.y + 1
    ) {
      h.mesh.position.y = -100;

      damage();

      break;
    }
  }

  // ვარდნა
  if (player.position.y < -8) {
    damage();
  }

  // ფინიშის შემოწმება
  if (
    player.position.distanceTo(levelGoal.position) < 1.45
  ) {
    score += 50;

    updateHUD();

    if (currentLevel === 29) {
      showMessage(
        "გილოცავ — 150 წელი!",
        "შენ გადაარჩინე დედაენის წიგნი და დაასრულე 30-ვე ლეველი. ქართული ენა ჩვენი საერთო საგანძურია! საბოლოო ქულა: " + score,
        "🎉",
        false
      );
    } else {
      showMessage(
        "ლეველი დასრულდა!",
        LEVELS[currentLevel][0] +
        " — " +
        LEVELS[currentLevel][1] +
        " ბონუსი: +50 ქულა.",
        "📚",
        true
      );
    }
  }

  // კამერის მოძრაობა
  const target = new THREE.Vector3(
    player.position.x,
    player.position.y + 1,
    player.position.z
  );

  const camOffset = new THREE.Vector3(
    Math.sin(cameraYaw) * 9,
    4.6 + cameraPitch * 4,
    Math.cos(cameraYaw) * 9
  );

  camera.position.lerp(
    target.clone().add(camOffset),
    1 - Math.pow(0.001, dt)
  );

  camera.lookAt(target);
}

// თამაშის განუწყვეტელი ციკლი
function animate() {
  requestAnimationFrame(animate);

  const dt = Math.min(
    clock.getDelta(),
    0.04
  );

  update(dt);

  if (renderer) {
    renderer.render(scene, camera);
  }
}

// ეკრანის ზომის ცვლილება
function onResize() {
  if (!camera || !renderer) return;

  camera.aspect = innerWidth / innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    innerWidth,
    innerHeight
  );
}

// ლეველების მენიუ
function buildLevelPicker() {
  const grid = $("levelGrid");

  grid.innerHTML = "";

  LEVELS.forEach((l, i) => {
    const b = document.createElement("button");

    b.className = "level-cell";
    b.textContent = i + 1;
    b.title = l[0];

    b.addEventListener("click", () => {
      startLevel(i);
    });

    grid.appendChild(b);
  });
}

// პაუზა
function togglePause(force) {
  if (!running && !paused) return;

  paused = force ?? !paused;

  $("pauseScreen").classList.toggle(
    "hidden",
    !paused
  );
}

// კლავიატურის მართვა
document.addEventListener("keydown", e => {
  keys[e.code] = true;

  if (
    [
      "Space",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight"
    ].includes(e.code)
  ) {
    e.preventDefault();
  }

  if (e.code === "Space" && !e.repeat) {
    jumpQueued = true;
  }

  if (
    e.code === "KeyP" ||
    e.code === "Escape"
  ) {
    togglePause();
  }
});

document.addEventListener("keyup", e => {
  keys[e.code] = false;
});

// მენიუს ღილაკები
$("startBtn").onclick = () => {
  score = 0;
  lives = 3;

  updateHUD();

  startLevel(0);
};

$("levelsBtn").onclick = () => {
  $("menu").classList.add("hidden");
  $("levelScreen").classList.remove("hidden");
};

$("backMenuBtn").onclick = () => {
  $("levelScreen").classList.add("hidden");
  $("menu").classList.remove("hidden");
};

$("pauseBtn").onclick = () => {
  togglePause();
};

$("resumeBtn").onclick = () => {
  togglePause(false);
};

$("restartBtn").onclick = () => {
  lives = 3;

  updateHUD();

  startLevel(currentLevel);
};

$("quitBtn").onclick = () => {
  running = false;
  paused = false;

  $("pauseScreen").classList.add("hidden");
  $("hud").classList.add("hidden");
  $("menu").classList.remove("hidden");
};

$("nextBtn").onclick = () => {
  startLevel(currentLevel + 1);
};

$("messageMenuBtn").onclick = () => {
  $("messageScreen").classList.add("hidden");
  $("hud").classList.add("hidden");
  $("menu").classList.remove("hidden");
};

// ტელეფონის მართვა
document.querySelectorAll("[data-key]").forEach(b => {
  const k = b.dataset.key;

  b.addEventListener("pointerdown", e => {
    e.preventDefault();
    keys[k] = true;
  });

  [
    "pointerup",
    "pointerleave",
    "pointercancel"
  ].forEach(ev => {
    b.addEventListener(ev, () => {
      keys[k] = false;
    });
  });
});

$("touchJump").addEventListener(
  "pointerdown",
  e => {
    e.preventDefault();
    jumpQueued = true;
  }
);

if ("ontouchstart" in window) {
  $("touchControls").classList.remove("hidden");
}

// თამაშის გაშვება
buildLevelPicker();

init3D();
