function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

if (getCookie('donottrack') || true) {
  console.log('not tracking');
} else {
  if (Math.random() < 2 / 3) {
    var initOpts = {
      projectKey: "P8xlwlLwy83wBcxS7iZ6",
      defaultInputMode: 0,
      obscureTextNumbers: false,
      obscureTextEmails: false,
    };
    var startOpts = { userID: "" };
    (function (A, s, a, y, e, r) {
      r = window.OpenReplay = [e, r, y, [s - 1, e]];
      s = document.createElement('script'); s.src = A; s.async = !a;
      document.getElementsByTagName('head')[0].appendChild(s);
      r.start = function (v) { r.push([0]) };
      r.stop = function (v) { r.push([1]) };
      r.setUserID = function (id) { r.push([2, id]) };
      r.setUserAnonymousID = function (id) { r.push([3, id]) };
      r.setMetadata = function (k, v) { r.push([4, k, v]) };
      r.event = function (k, p, i) { r.push([5, k, p, i]) };
      r.issue = function (k, p) { r.push([6, k, p]) };
      r.isActive = function () { return false };
      r.getSessionToken = function () { };
    })("//static.openreplay.com/latest/openreplay-assist.js", 1, 0, initOpts, startOpts);

  } else {
    var s = document.createElement('script'); s.src = "https://unpkg.com/highlight.run"; s.async = true;
    document.getElementsByTagName('head')[0].appendChild(s);
    s.onload = function () {
      H.init('neyw71xg', {
        environment: 'production',
        version: 'commit:v0',
        networkRecording: {
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        },
      });
    }
  }
}
