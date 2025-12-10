var r = document.querySelector(":root");
let enc = 10;
function encrypt_text(plain, key) {
  let out = [];
  for (let i = 0; i < plain.length; i++) {
    const b = plain.charCodeAt(i);
    const shifted = (b + key) % 256;
    out.push(shifted.toString(16).padStart(2, "0"));
  }
  return out.join("");
}
function decrypt_text(hexstr, key) {
  if (hexstr.length % 2 !== 0) {
    throw new Error("Hex string length must be even.");
  }
  hexstr = hexstr.toLowerCase();
  let out = [];
  for (let i = 0; i < hexstr.length; i += 2) {
    const pair = hexstr.substring(i, i + 2);
    if (!/^[0-9a-f]{2}$/.test(pair)) {
      throw new Error(`Invalid hex pair: '${pair}'`);
    }
    const val = parseInt(pair, 16);
    const decrypted = (val - key) % 256;
    const charCode = decrypted < 0 ? decrypted + 256 : decrypted;
    out.push(String.fromCharCode(charCode));
  }
  return out.join("");
}
function encode() {
  document.querySelector(".enctext").value = encrypt_text(document.querySelector(".enctext").value, enc); 
}
function decode() {
  document.querySelector(".dectext").value = decrypt_text(document.querySelector(".dectext").value, enc); 
}
function setenccode() {
  if (+document.querySelector(".nummywummy").value >= 0 && +document.querySelector(".nummywummy").value <= 1000) {
    enc = +document.querySelector(".nummywummy").value;
    document.querySelector(".nummywummy").value = "";
    document.querySelector(".status").innerHTML = "Success!";
  }
  else {
    document.querySelector(".status").innerHTML = "Invalid!";
  }
  timmeh = setTimeout(function() {
    document.querySelector(".status").innerHTML = "";
  }, 200)
}
function closePopup() {
  document.querySelector(".popup2").className = "nodisp";
  document.querySelector(".hide").className = "settings";
}

function Popup() {
  document.querySelector(".nodisp").className = "popup2";
  document.querySelector(".settings").className = "hide";
}

function whiteTheme() {
  r.style.setProperty("--bg", "#fff");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function blackTheme() {
  r.style.setProperty("--bg", "#000");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function blueTheme() {
  r.style.setProperty("--bg", "#023e8a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function redTheme() {
  r.style.setProperty("--bg", "#8a0202");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#fff");
}
function greenTheme() {
  r.style.setProperty("--bg", "#028a02");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function orangeTheme() {
  r.style.setProperty("--bg", "#ff5c00");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function yellowTheme() {
  r.style.setProperty("--bg", "#fff200");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function purpleTheme() {
  r.style.setProperty("--bg", "#55028a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function latoFont() {
  r.style.setProperty("--fnt", "'Lato', sans-serif");
}
function notoFont() {
  r.style.setProperty("--fnt", "'Noto Serif', serif");
}
function robFont() {
  r.style.setProperty("--fnt", "'Roboto Mono', monospace");
}
function ralFont() {
  r.style.setProperty("--fnt", "'Raleway', sans-serif");
}
function pacFont() {
  r.style.setProperty("--fnt", "'Pacifico', sans-serif");
}
function nabFont() {
  r.style.setProperty("--fnt", "'Nabla', sans-serif");
}
function pirFont() {
  r.style.setProperty("--fnt", "'Pirata One', sans-serif");
}
function aluFont() {
  r.style.setProperty("--fnt", "'Alumni Sans Pinstripe', sans-serif");
}
