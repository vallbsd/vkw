browser.runtime.onMessage.addListener(function () {
  let elem = document.getElementById("react_rootVideo_page").firstChild.firstChild.firstChild.childNodes[1];
  let curstyle = window.getComputedStyle(elem).getPropertyValue("display");
  if (curstyle == "none")
    elem.style.display = "block";
  else
    elem.style.display = "none";
});
