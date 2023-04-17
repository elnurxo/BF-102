//create list
let list = document.createElement("ul");
list.id = "list";
// list items
let links = [
  {
    urlName: "Google",
    href: "https://google.com",
  },
  {
    urlName: "Youtube",
    href: "https://youtube.com",
  },
  {
    urlName: "LinkedIn",
    href: "http://linkedin.com",
  },
];

links.forEach((item) => {
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  link.setAttribute("href", item.href);
  link.innerText = item.urlName;
  listItem.append(link);
  list.append(listItem);
});
document.body.append(list);

//box
let box = document.createElement("div");
box.classList.add("box");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";
//paragraph
let p = document.createElement("p");
p.style.color = "white";
p.textContent = "Lorem Ipsum";

box.append(p);
document.body.append(box);
