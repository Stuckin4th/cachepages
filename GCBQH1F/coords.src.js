// Shared coordinate decoder — edit then run: ./scripts/minify-gcbqh1f.sh
!function () {
  const stage2 =
    "ë\x85\x96\x91\x15\x85\x96\x91\x8b\x90\x9d\x96\x82\x85ò\x85\x94\x94\x97\x15\x85\x97\x9c\x8b\x92\x90\x90\x82";
  const final =
    "ë\x85\x96\x91\x15\x85\x96\x91\x8b\x93\x92\x92\x82\x85ò\x85\x94\x97\x97\x15\x85\x97\x9c\x8b\x92\x91\x9d\x82";

  function decode(encoded) {
    let out = "";
    for (let i = 0; i < encoded.length; i++) {
      out += String.fromCharCode(encoded.charCodeAt(i) ^ 0xa5);
    }
    return out;
  }

  const stage2El = document.getElementById("stage2-coords");
  if (stage2El) {
    stage2El.textContent = decode(stage2);
  }

  window.cacheRevealFinalCoords = function (el) {
    if (el) {
      el.textContent = decode(final);
    }
  };
}();
