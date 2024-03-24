async function load(){

    if (! document.getElementById("hydra-audio-effects")) {
  
      // page
  
      let iframe = document.createElement("iframe")
      iframe.id="audioEffects"
      iframe.src="https://vicjomaa.github.io/"
      iframe.allow="microphone"
      iframe.style="position: absolute; height: 100%; right: 0; top: 50px; z-index:10; opacity:.5"
      document.body.appendChild(iframe);
  
      let d = document.createElement("div");
      d.id ="hydra-audio-effects";
      document.body.appendChild(d);
  
      }
  
  }
  
  load()