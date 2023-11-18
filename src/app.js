/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function domainGenerate(pronouns, adjs, nouns, extensions) {
    let myArray = [];

    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjs.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            let resultPronoun = pronouns[i];
            let resultAdj = adjs[j];
            let resultNoun = nouns[k];
            let resultExtension = extensions[l];

            let domain =
              resultPronoun + resultAdj + resultNoun + resultExtension;

            myArray.push(domain);
          }
        }
      }
    }
    return myArray;
  }

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".es"];

  let result = domainGenerate(pronouns, adjs, nouns, extensions);
  let olElement = document.querySelector("#domainGenerator ol");

  result.forEach(function(domain) {
    let liElement = document.createElement("li");
    liElement.textContent = domain;
    olElement.appendChild(liElement);
  });
};
