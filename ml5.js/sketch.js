let handPose;
let video;
let hands = [];

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose.detectStart(video, gotHands);
}

function draw() {
  image(video, 0, 0, width, height);

  
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }

  
  if (hands.length > 0) {
    let hand = hands[0];     // 손이 최소 한개 있을때만 실행

    let p4 = hand.keypoints[4]; // 엄지
    let p8 = hand.keypoints[8]; // 검지

    let d = dist(p4.x, p4.y, p8.x, p8.y);

    let midX = (p4.x + p8.x) / 2;  // 엄지검지 가운데에 원을 생성
    let midY = (p4.y + p8.y) / 2;

    if (d < 40) {
      fill(255, 0, 0);
      noStroke();
      
    }
  }
}

function gotHands(results) {
  hands = results;
}