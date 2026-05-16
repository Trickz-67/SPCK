const currentPath = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPath = link.getAttribute("href");

  if (
    linkPath === currentPath ||
    (linkPath === "index.html" && currentPath === "")
  ) {
    link.classList.add("active");
  }
});

// ===== SIDEBAR SMOOTH =====

document.querySelectorAll(".sidebar a").forEach((a) => {
  a.addEventListener("click", (e) => {
    const targetId = a.getAttribute("href");

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== SIDEBAR ACTIVE =====

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// ===== READING BAR =====

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  document.querySelector(".progress-bar-reading").style.width = progress + "%";
});

// ===== FADE IN =====

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".content section, .card-overlay, .content-box",
  );

  elements.forEach((el, index) => {
    el.style.opacity = "0";

    el.style.transform = "translateY(30px)";

    setTimeout(() => {
      el.style.transition = "0.6s ease";

      el.style.opacity = "1";

      el.style.transform = "translateY(0)";
    }, index * 120);
  });
});

// ===== CONTACT FORM =====

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = document.getElementById("form-message");

    msg.className = "";
    msg.style.display = "block";

    msg.innerHTML = "⏳ Đang gửi tin nhắn...";

    setTimeout(() => {
      msg.classList.add("success");

      msg.innerHTML = "✔ Gửi thành công! Mình sẽ phản hồi sớm.";

      contactForm.reset();
    }, 1200);
  });
}
