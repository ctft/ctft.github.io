feather.replace();{function ltcoClearDynamicLink(e){e&&document.body.removeChild(e)}function ltcoDownloadImage(e,t){const n=document.createElement("a");n.download=t,n.href=e,document.body.appendChild(n),n.click(),ltcoClearDynamicLink(n)}function ltcoPrintScreen(){const e=this;e.disabled=!0,html2canvas(document.body,{width:700,windowWidth:700}).then((function(t){const n=t.toDataURL("image/jpeg",1);e.disabled=!1,ltcoDownloadImage(n,`${Date.now()}_schedules_ctft.jpg`)}))}document.querySelector(".ltco_printscreen").addEventListener("click",ltcoPrintScreen)}