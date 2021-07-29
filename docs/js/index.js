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
  console.log("targetItem");
  const footer = document.createElement("div");
  footer.innerHTML = `
      <div class="row">
        <div class="col-sm-12 col-lg-4 footer_about">
          <h3>เกี่ยวกับเรา</h3>
          <p>
            ศูนย์ สถาปัตยกรรมล้านนา <br />
            เลขที่ 117 ถนนราชดำเนิน ตำบลพระสิงห์ <br />
            อำเภอเมือง จังหวัดเชียงใหม่ 50000 <br />
            โทร: 0 5327 7855 โทรสาร: 0 5327 7855 <br />
            คณะสถาปัตยกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ 239 ถนนห้วยแก้ว <br />
            อำเภอเมือง จังหวัดเชียงใหม่ 50200 <br />
          </p>
          <p>
            Lanna Architecture Center Faculty of Architecture,<br />
            Chiang Mai University 117 Ratchadumnoen Street <br />
            Prasing District, Amphur Muang <br />
            Chiang Mai, Thailand 50000 <br />
            Tel: 05327 7855, Fax: 0 5327 7855
          </p>
        </div>
        <div class="col-sm-12 col-lg-4 footer_main">
          <h3>เกี่ยวกับเว็บ</h3>
          <ul>
            <li>
              <a href="index.html">โครงการ</a>
            </li>
            <li>
              <a href="about-temple.html">สถาปัตยกรรมวัด</a>
            </li>
            <li>
              <a href="about-home.html">สถาปัตยกรรมเรือน</a>
            </li>
            <li>
              <a href="detail-temple.html">สล่าวัด</a>
            </li>
            <li>
              <a href="detail-home.html">สล่าเรือน</a>
            </li>
            <li>
              <a href="contact.html">ติดต่อ</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-lg-4 footer_right">
          <p class="mt-3 mb-2 mt-lg-0">คณะสถาปัตยกรรมศาสตร์</p>
          <div class="footer_links">
            <a target="”_blank”" href="https://www.arc.cmu.ac.th/"
              ><img
                src="asset/image/icons/logo_archcmu_banner_crop.png"
                alt="archcmu-logo"
                class="long-logo"
            /></a>
            <a target="”_blank”" href="https://www.facebook.com/arccmu/"
              ><img
                src="asset/image/icons/facebook-brands.svg"
                alt="facebook-logo"
            /></a>
          </div>
          <p class="mt-3 mb-2">ศูนย์สถาปัตยกรรมล้านนา คุ้มเจ้าบุรีรัตน์</p>
          <div class="footer_links">
            <a target="”_blank”" href="https://www.lanna-arch.net/"
              ><img
                src="asset/image/icons/logokhum_final.png"
                alt="khum-logo"
                class="image-logo"
            /></a>
            <a
              target="”_blank”"
              href="https://www.facebook.com/SunySthapatykrrmLanNa/"
              ><img
                src="asset/image/icons/facebook-brands.svg"
                alt="facebook-logo"
            /></a>
            <a href="mailto:khum.museum@gmail.com"
              ><img src="asset/image/icons/gmail.svg" alt="mail-logo"
            /></a>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2021 All Rights Reserved by Salarr
        <p>Current Visitors : <span id="cntr">567</span></p>
      </div>
  `;
  targetItem.appendChild(footer);
}

window.onload = function () {
  counter_fn();
  initLightbox();
  footerGenerator();
};

window.onscroll = function () {
  stickyHeader();
};
