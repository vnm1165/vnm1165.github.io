const RenderItem = (item) => {
  return `<li><a href="${item.link}">${item.title}</a></li>`;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

document.addEventListener("DOMContentLoaded", async () => {
  let Root = document.querySelector("body > ul.link-tree");
  let RenderData = "";
  await sleep(1000);
  for (let i = 0; i < data.length; i++) {
    RenderData += RenderItem(data[i]);
  }
  Root.innerHTML = RenderData;
});
