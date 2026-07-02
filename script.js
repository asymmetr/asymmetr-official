// ==============================
// Asymme'tr Official Site
// script.js
// ==============================

// ローディング画面
window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.visibility = "hidden";

    }, 1200);

});


// フェードインアニメーション
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

fades.forEach(fade=>{

    observer.observe(fade);

});


// ナビゲーション背景
const nav = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});


// ギャラリークリックで拡大
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay = document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,0.92)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="99999";
        overlay.style.cursor="zoom-out";

        const image = document.createElement("img");

        image.src = img.src;

        image.style.maxWidth="90%";
        image.style.maxHeight="90%";
        image.style.borderRadius="10px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});


// スクロール位置で現在のメニューを強調
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        if(pageYOffset>=top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.style.color="white";

        if(link.getAttribute("href")==="#"+current){

            link.style.color="#d8b15a";

        }

    });

});
