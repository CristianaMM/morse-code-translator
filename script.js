const input = document.querySelector("#input-box");
const toMorseBtn = document.querySelector("#morse-button");
const toEnglishBtn = document.querySelector("#english-button");

toMorseBtn.addEventListener("click", () => {
  translate(true);
});

toEnglishBtn.addEventListener("click", () => {
  translate();
});

function translate(toMorse = false) {
  const text = input.value;
  let result = "";

  if (toMorse) {
    for (letter of text) {
      const code = morseCodes[letter.toLowerCase()];
      result += code ? morseCodes[letter.toLowerCase()] + " " : "";
    }
  } else {
    const codes = text.split(" ");

    for (code of codes) {
      result +=
        Object.keys(morseCodes).find((key) => morseCodes[key] === code) ?? "";
    }
  }

  input.value = result;
}
