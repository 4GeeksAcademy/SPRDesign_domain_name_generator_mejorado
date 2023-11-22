/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function domainGenerate(pronouns, adjs, nouns, extensions) {
    let domains = [];

    pronouns.forEach(pronoun =>
      adjs.forEach(adj =>
        nouns.forEach(noun =>
          extensions.forEach(extension =>
            domains.push(`${pronoun}${adj}${noun}${extension}`)
          )
        )
      )
    );

    return domains;
  }

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".es"];

  let result = domainGenerate(pronouns, adjs, nouns, extensions);
  let olElement = document.querySelector("#domainGenerator ol");

  let uL = "";
  result.forEach(function(domain) {
    let miLi = "<li>" + domain + "</li>";
    uL += miLi;
  });

  console.log(uL);
  olElement.innerHTML = uL;
};
