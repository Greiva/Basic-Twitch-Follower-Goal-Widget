
let goalEnd='{goalend}';
let currentFollows;
let goalStart='{goalstart}';

function currentChanged() {
   let onePercent = (goalEnd - goalStart) / 100;
   let barProgress = (currentFollows - goalStart) / onePercent;
  document.getElementById("progress-bar-complete").style.width = barProgress + "%";
 document.getElementById("achieved-number").textContent = currentFollows;
};

window.addEventListener('onWidgetLoad', function (obj) {
 const fieldData = obj.detail.fieldData;
 let data=obj["detail"]["session"]["data"];
 currentFollows = parseInt(data["follower-total"]["count"]);
 document.getElementById("goal-number").textContent = goalEnd;
 currentChanged();
     
});

window.addEventListener('onSessionUpdate', function (obj) {
 const data = obj.detail.session
 const fieldData = obj.detail.fieldData;
 currentFollows = parseInt(data["follower-total"]["count"]);
 document.getElementById("goal-number").textContent = goalEnd;
 currentChanged();
});
