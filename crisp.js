// Support chat on every help page, same inbox as the apps.
window.$crisp = window.$crisp || [];
window.CRISP_WEBSITE_ID = "7c505ad3-548d-4c3e-84c9-fcc21f1e8996";
(function () {
  if (document.getElementById("crisp-chat-loader")) return;
  var s = document.createElement("script");
  s.id = "crisp-chat-loader";
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  document.head.appendChild(s);
})();
