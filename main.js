let date = new Date();
console.log(date);
console.log(date.getTime());
function decloration(number) {
  let result = [];
  let date = new Date(number);
  let kun = date.getDate().toString().padStart(2, "0");
  let oy = date.getMonth() + 1;
  let uz = oy.toString().padStart(2, "0");
  let yil = date.getFullYear();
  result = `${kun}.${uz}.${yil}`;
  renders(kun, uz, yil);
}
decloration(2975430840413);
let template = document.querySelector("template").content
function renders(day, month, year) {
  let array = [day, month, year];
  for(let i = 0; i<array.length; i++){
    let clone = template.cloneNode(true)
  }
  // let h1 = document.createElement("h1")
  // h1.appendChild(document.createTextNode(day))
  // document.body.appendChild(h1)
  // let h1_2 = document.createElement("h1")
  // h1_2.textContent = month
  // document.body.appendChild(h1_2)
  // let h1_3 = document.createElement("h1")
  // h1_3.textContent = year
  // document.body.appendChild(h1_3)
}
