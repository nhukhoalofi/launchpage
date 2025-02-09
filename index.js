window.addEventListener("scroll", function() {
    var section = document.querySelector(".section1");
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const home =document.querySelector(".home")
    const about =document.querySelector(".about")
    const testimonials =document.querySelector(".testimonials")
    const work =document.querySelector(".work")
    const team =document.querySelector(".team")
    const features =document.querySelector(".features")
    const pricing =document.querySelector(".pricing")
    const getstarted =document.querySelector(".getstarted")
    if (scrollPosition >= 400) {
        section.classList.add("fixed");
        home.style.color="#e52f37"
        about.style.color="black";
        testimonials.style.color="black";
        work.style.color="black";
        team.style.color="black";
        features.style.color="black";
        pricing.style.color="black";

    } else {
        section.classList.remove("fixed");
    }
    if (scrollPosition>=600){
        home.style.color="black";
        about.style.color="#e52f37";
        testimonials.style.color="black";
        work.style.color="black";
        team.style.color="black";
        features.style.color="black";
        pricing.style.color="black";
    }
    if (scrollPosition>=2800){
        home.style.color="black";
        testimonials.style.color="#e52f37";
        about.style.color="black";
        work.style.color="black";
        team.style.color="black";
        features.style.color="black";
        pricing.style.color="black";
    }
    if (scrollPosition>=3500){
        home.style.color="black";
        work.style.color="#e52f37";
        about.style.color="black";
        testimonials.style.color="black";
        team.style.color="black";
        features.style.color="black";
        pricing.style.color="black";
    }
    if (scrollPosition>=4500){
        home.style.color="black";
        team.style.color="#e52f37";
        about.style.color="black";
        testimonials.style.color="black";
        work.style.color="black";
        features.style.color="black";
        pricing.style.color="black";
    }
    if (scrollPosition>=5700){
        home.style.color="black";
        features.style.color="#e52f37";
        about.style.color="black";
        testimonials.style.color="black";
        work.style.color="black";
        team.style.color="black";
        pricing.style.color="black";
    }
    if (scrollPosition>=6300){
        home.style.color="black";
        pricing.style.color="#e52f37";
        about.style.color="black";
        testimonials.style.color="black";
        work.style.color="black";
        team.style.color="black";
        features.style.color="black";
    }
    if (scrollPosition>=7000){
        home.style.color="black";
        pricing.style.color="black";
        about.style.color="black";
        testimonials.style.color="black";
        work.style.color="black";
        team.style.color="black";
        features.style.color="black";
    }
});
const menuItems = document.querySelectorAll(".p2 div:not(.getstarted)"); // Lấy tất cả trừ .getstarted

menuItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.style.color = "#e52f37"; // Màu khi hover
    });

    item.addEventListener("mouseleave", function() {
        if (!this.classList.contains("active")) {
            this.style.color = "black"; // Trả về màu ban đầu nếu không active
        }
    });
});
// const play=document.querySelector(".play")
// const iconplay=document.querySelector(".fa-solid fa-play")
// play.addEventListener("mouseenter",function(){
//     iconplay.style.color="white"

// })
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".p2 div"); // Chọn tất cả mục menu
    const sections = {
        home: 0,
        about: 600,
        testimonials: 2800,
        work: 3500,
        team: 4500,
        features: 5700,
        pricing: 6300,
        getstarted: 7000
    };

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetClass = this.classList[0]; // Lấy class đầu tiên làm key
            const targetPosition = sections[targetClass]; // Lấy vị trí từ object
            if (targetPosition !== undefined) {
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}); 
document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const videoModal = document.getElementById("videoModal");
    const closeButton = document.getElementById("closeButton");
    const videoFrame = document.getElementById("videoFrame");

    // Hiển thị modal khi click vào button
    playButton.addEventListener("click", function () {
        videoModal.style.display = "flex";
        videoFrame.src += "&autoplay=1"; // Tự động phát video
    });

    // Đóng modal khi click vào nút đóng
    closeButton.addEventListener("click", function () {
        videoModal.style.display = "none";
        videoFrame.src = videoFrame.src.replace("&autoplay=1", ""); // Dừng video
    });

    // Đóng modal khi click ra ngoài
    videoModal.addEventListener("click", function (e) {
        if (e.target === videoModal) {
            videoModal.style.display = "none";
            videoFrame.src = videoFrame.src.replace("&autoplay=1", "");
        }
    });
});
const anh1 = document.querySelector(".anh1");
const anh2 = document.querySelector(".anh2");
const anh3 = document.querySelector(".anh3");

const sec6_1 = document.querySelector(".section6_1");
const sec6_2 = document.querySelector(".section6_2");
const sec6_3 = document.querySelector(".section6_3");

if (anh1 && anh2 && anh3 && sec6_1 && sec6_2 && sec6_3) {
    // Ẩn tất cả ảnh ban đầu, chỉ hiển thị anh1
    anh1.style.display = "block";
    anh2.style.display = "none";
    anh3.style.display = "none";

    sec6_1.addEventListener("click", function () {
        anh1.style.display = "block";
        anh2.style.display = "none";
        anh3.style.display = "none";
    });

    sec6_2.addEventListener("click", function () {
        anh1.style.display = "none";
        anh2.style.display = "block";
        anh3.style.display = "none";
    });

    sec6_3.addEventListener("click", function () {
        anh1.style.display = "none";
        anh2.style.display = "none";
        anh3.style.display = "block";
    });
} else {
    console.error("Một hoặc nhiều phần tử không tồn tại trong DOM.");
}
document.querySelectorAll(".companyname, .email, .we").forEach((container) => {
    const input = container.querySelector("input, select");

    if (input) {
        input.addEventListener("focus", function () {
            container.style.borderColor = "black";
        });

        input.addEventListener("blur", function () {
            container.style.borderColor = ""; // Trở về mặc định
        });
    }
});
const h15_2 = document.querySelector(".h15_2");
const input = h15_2.querySelector("input");
const select = h15_2.querySelector("select");

[input, select].forEach((element) => {
    element.addEventListener("focus", function () {
        this.style.color = "black"; // Khi focus, đổi màu chữ thành đen
    });

    element.addEventListener("blur", function () {
        this.style.color = ""; // Trả về màu mặc định
    });
});
const sections = document.querySelectorAll(".section8_2_1, .section8_2_2, .section8_2_3");
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section8_2 > div");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            // Ẩn tất cả nội dung trước khi mở cái mới
            sections.forEach(sec => sec.classList.remove("active"));
            
            // Hiển thị nội dung của phần tử được click
            this.classList.add("active");
        });
    });
});



