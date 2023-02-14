let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = ["com", "net", "es"];

pronoun.forEach(element => {
  adj.forEach(adjetive => {
    noun.forEach(item => {
      domain.forEach(dom => {
        console.log(`${element}${adjetive}${item}.${dom}`);
      });
    });
  });
});
