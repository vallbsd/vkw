browser.runtime.onMessage.addListener(function () {
  let elem = document.getElementsByClassName("vkuiInternalTwoColumnLayoutColumn")[1];
  let curstyle = window.getComputedStyle(elem).getPropertyValue("display");
  if (curstyle == "none")
    elem.style.display = "block";
  else
    elem.style.display = "none";
});
