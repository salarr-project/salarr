function counter_fn() {
  const counter = document.getElementById("cntr");

  if (counter === null || counter === undefined) {
    return;
  }

  let count = 0;
  count = parseInt(counter.innerHTML);
  count = count + 1;
  counter.innerHTML = count;
}

let header = document.querySelector(".navbar");
let content = document.querySelector(".margin-top-me");

function stickyHeader() {
  if (header === null || header === undefined) {
    return;
  }

  if (content === null || content === undefined) {
    return;
  }

  let sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("top-padding");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("top-padding");
  }
}

function initLightbox() {
  const targetItem = document.querySelectorAll("#lightbox-container");

  if (targetItem === null || targetItem === undefined) {
    return;
  }

  for (const item of targetItem) {
    const imageset = parseInt(item.getAttribute("data-imageset"));

    for (let id = 0; id < imageset; id++) {
      let imageId = id + 1;
      item.appendChild(lightbox(imageId, item));
    }
  }
}

function lightbox(id, targetItem) {
  const imageset = parseInt(targetItem.getAttribute("data-imageset"));
  const defaultPath = "../../asset/image/";
  const mainPath = targetItem.getAttribute("data-mainlocate");
  const subPath = targetItem.getAttribute("data-sublocate");
  const imagePath = defaultPath + mainPath + "/" + subPath + "/" + id + ".jpg";

  const group = "#" + targetItem.getAttribute("data-group") + "-";

  const container = document.createElement("div");
  container.className = "col-6 col-md-3 col-lg-2";

  const link = document.createElement("a");
  link.href = group + id;

  const image = document.createElement("img");
  image.className = "thumb";
  image.src = imagePath;
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = targetItem.getAttribute("data-group") + "-" + id;

  const prevButton = document.createElement("a");
  prevButton.className = "light-btn btn-prev";

  if (id === 1) {
    prevButton.href = group + imageset;
  } else if (id === imageset) {
    prevButton.href = group + (imageset - 1);
  } else {
    prevButton.href = group + (id - 1);
  }
  prevButton.innerHTML = "&lt;";

  const clostButton = document.createElement("a");
  clostButton.href = "#_";
  clostButton.className = "btn-close";

  const lightboxImage = document.createElement("img");
  lightboxImage.src = imagePath;

  const nextButton = document.createElement("a");
  nextButton.className = "light-btn btn-next";

  if (id === imageset) {
    nextButton.href = group + 1;
  } else {
    nextButton.href = group + (id + 1);
  }
  nextButton.innerHTML = "&gt;";

  container.appendChild(link);
  container.appendChild(lightbox);
  link.appendChild(image);
  lightbox.appendChild(prevButton);
  lightbox.appendChild(clostButton);
  lightbox.appendChild(lightboxImage);
  lightbox.appendChild(nextButton);

  return container;
}

function footerGenerator() {
  const targetItem = document.getElementById("js-footer");
  let path = targetItem.dataset.path;

  if (path === null || path === undefined) {
    path = "";
  }

  // main container 1
  const row = document.createElement("div");
  row.className = "row";

  // main container 1 --- footer about
  const footerAbout = document.createElement("div");
  footerAbout.className = "col-sm-12 col-lg-4 footer_about";
  const footerAbout_h3 = document.createElement("h3");
  footerAbout_h3.innerHTML = "เกี่ยวกับเรา";
  const footerAbout_p1 = document.createElement("p");
  footerAbout_p1.innerHTML = `ศูนย์ สถาปัตยกรรมล้านนา <br />
            เลขที่ 117 ถนนราชดำเนิน ตำบลพระสิงห์ <br />
            อำเภอเมือง จังหวัดเชียงใหม่ 50000 <br />
            โทร: 0 5327 7855 โทรสาร: 0 5327 7855 <br />
            คณะสถาปัตยกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ 239 ถนนห้วยแก้ว <br />
            อำเภอเมือง จังหวัดเชียงใหม่ 50200 <br />`;

  const footerAbout_p2 = document.createElement("p");
  footerAbout_p2.innerHTML = `Lanna Architecture Center Faculty of Architecture,<br />
            Chiang Mai University 117 Ratchadumnoen Street <br />
            Prasing District, Amphur Muang <br />
            Chiang Mai, Thailand 50000 <br />
            Tel: 05327 7855, Fax: 0 5327 7855`;

  footerAbout.appendChild(footerAbout_h3);
  footerAbout.appendChild(footerAbout_p1);
  footerAbout.appendChild(footerAbout_p2);

  // main container 1 --- footer main
  const footerMain = document.createElement("div");
  footerMain.className = "col-sm-12 col-lg-4 footer_main";
  const footerMain_h3 = document.createElement("h3");
  footerMain_h3.innerHTML = `เกี่ยวกับเว็บ`;
  footerMain.appendChild(footerMain_h3);

  // main container 1 --- footer main - lists
  const footerMain_ul = document.createElement("ul");

  // main container 1 --- footer main - lists - 1
  const footerMain_li1 = document.createElement("li");
  const footerMain_a1 = document.createElement("a");
  footerMain_a1.innerHTML = `โครงการ`;
  footerMain_a1.href = path + `index.html`;
  footerMain_li1.appendChild(footerMain_a1);

  // main container 1 --- footer main - lists - 2
  const footerMain_li2 = document.createElement("li");
  const footerMain_a2 = document.createElement("a");
  footerMain_a2.innerHTML = `สถาปัตยกรรมวัด`;
  footerMain_a2.href = path + `about-temple.html`;
  footerMain_li2.appendChild(footerMain_a2);

  // main container 1 --- footer main - lists - 3
  const footerMain_li3 = document.createElement("li");
  const footerMain_a3 = document.createElement("a");
  footerMain_a3.innerHTML = `สถาปัตยกรรมเรือน`;
  footerMain_a3.href = path + `about-home.html`;
  footerMain_li3.appendChild(footerMain_a3);

  // main container 1 --- footer main - lists - 4
  const footerMain_li4 = document.createElement("li");
  const footerMain_a4 = document.createElement("a");
  footerMain_a4.innerHTML = `สล่าวัด`;
  footerMain_a4.href = path + `detail-temple.html`;
  footerMain_li4.appendChild(footerMain_a4);

  // main container 1 --- footer main - lists - 5
  const footerMain_li5 = document.createElement("li");
  const footerMain_a5 = document.createElement("a");
  footerMain_a5.innerHTML = `สล่าเรือน`;
  footerMain_a5.href = path + `detail-home.html`;
  footerMain_li5.appendChild(footerMain_a5);

  // main container 1 --- footer main - lists - 6
  const footerMain_li6 = document.createElement("li");
  const footerMain_a6 = document.createElement("a");
  footerMain_a6.innerHTML = `ติดต่อ`;
  footerMain_a6.href = path + `contact.html`;
  footerMain_li6.appendChild(footerMain_a6);

  // main container 1 --- footer main - appendChild
  footerMain_ul.appendChild(footerMain_li1);
  footerMain_ul.appendChild(footerMain_li2);
  footerMain_ul.appendChild(footerMain_li3);
  footerMain_ul.appendChild(footerMain_li4);
  footerMain_ul.appendChild(footerMain_li5);
  footerMain_ul.appendChild(footerMain_li6);
  footerMain.appendChild(footerMain_ul);

  // main container 1 --- footer right
  const footerRight = document.createElement("div");
  footerRight.className = "col-sm-12 col-lg-4 footer_right";
  const footerRight_p1 = document.createElement("p");
  footerRight_p1.className = "mt-3 mb-2 mt-lg-0";
  footerRight_p1.innerHTML = `คณะสถาปัตยกรรมศาสตร์`;

  footerRight.appendChild(footerRight_p1);

  // main container 1 --- footer right - links
  const footerLinks = document.createElement("div");
  footerLinks.className = "footer_links";

  // main container 1 --- footer right - links - 1
  const footerLinks_a1 = document.createElement("a");
  footerLinks_a1.href = `https://www.arc.cmu.ac.th/`;
  footerLinks_a1.target = `_blank`;
  const footerLinks_a1_img = document.createElement("img");
  footerLinks_a1_img.src =
    path + `asset/image/icons/logo_archcmu_banner_crop.png`;
  footerLinks_a1_img.className = `long-logo`;

  footerLinks_a1.appendChild(footerLinks_a1_img);
  footerLinks.appendChild(footerLinks_a1);

  // main container 1 --- footer right - links - 2
  const footerLinks_a2 = document.createElement("a");
  footerLinks_a2.href = `https://www.facebook.com/arccmu/`;
  footerLinks_a2.target = `_blank`;
  const footerLinks_a2_img = document.createElement("img");
  footerLinks_a2_img.src = path + `asset/image/icons/facebook-brands.svg`;

  footerLinks_a2.appendChild(footerLinks_a2_img);
  footerLinks.appendChild(footerLinks_a2);

  footerRight.appendChild(footerLinks);

  const footerRight_p2 = document.createElement("p");
  footerRight_p2.className = "mt-3 mb-2";
  footerRight_p2.innerHTML = `ศูนย์สถาปัตยกรรมล้านนา คุ้มเจ้าบุรีรัตน์`;

  footerRight.appendChild(footerRight_p2);

  const footerLinks2 = document.createElement("div");
  footerLinks2.className = "footer_links";

  // main container 1 --- footer right - links2 - 1
  const footerLinks2_a1 = document.createElement("a");
  footerLinks2_a1.href = `https://www.lanna-arch.net/`;
  footerLinks2_a1.target = `_blank`;
  const footerLinks2_a1_img = document.createElement("img");
  footerLinks2_a1_img.src = path + `asset/image/icons/logokhum_final.png`;
  footerLinks2_a1_img.className = `image-logo`;

  footerLinks2_a1.appendChild(footerLinks2_a1_img);
  footerLinks2.appendChild(footerLinks2_a1);

  // main container 1 --- footer right - links2 - 2
  const footerLinks2_a2 = document.createElement("a");
  footerLinks2_a2.href = `https://www.facebook.com/SunySthapatykrrmLanNa/`;
  footerLinks2_a2.target = `_blank`;
  const footerLinks2_a2_img = document.createElement("img");
  footerLinks2_a2_img.src = path + `asset/image/icons/facebook-brands.svg`;
  footerLinks2_a2_img.className = `facebook-logo`;

  footerLinks2_a2.appendChild(footerLinks2_a2_img);
  footerLinks2.appendChild(footerLinks2_a2);

  // main container 1 --- footer right - links2 - 3
  const footerLinks2_a3 = document.createElement("a");
  footerLinks2_a3.href = `mailto:khum.museum@gmail.com`;
  const footerLinks2_a3_img = document.createElement("img");
  footerLinks2_a3_img.src = path + `asset/image/icons/gmail.svg`;

  footerLinks2_a3.appendChild(footerLinks2_a3_img);
  footerLinks2.appendChild(footerLinks2_a3_img);

  footerRight.appendChild(footerLinks2);

  row.appendChild(footerAbout);
  row.appendChild(footerMain);
  row.appendChild(footerRight);

  // main container 2 --- copyright
  const copyright = document.createElement("div");
  copyright.className = "copyright";
  copyright.innerHTML = `Copyright © 2021 All Rights Reserved by Salarr
        <p>Current Visitors : <span id="cntr">567</span></p>`;

  targetItem.appendChild(row);
  targetItem.appendChild(copyright);
}

window.onload = function () {
  counter_fn();
  initLightbox();
  footerGenerator();
};

window.onscroll = function () {
  stickyHeader();
};
