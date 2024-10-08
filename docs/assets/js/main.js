document.addEventListener("DOMContentLoaded", function () {

    window.innerWidth < 992 &&
        (document.querySelectorAll(".navbar .dropdown").forEach(function (t) {
            t.addEventListener("hidden.bs.dropdown", function () {
                this.querySelectorAll(".submenu").forEach(function (t) {
                    t.style.display = "none";
                });
            });
        }),
            document.querySelectorAll(".dropdown-menu a").forEach(function (t) {
                t.addEventListener("click", function (t) {
                    let e = this.nextElementSibling;
                    e && e.classList.contains("submenu") && (t.preventDefault(), "block" == e.style.display ? (e.style.display = "none") : (e.style.display = "block"));
                });
            }));

    let t = {
        dark: {
            "--text": "white",
            "--title": "white",
            "--primary": "white",
            "--background": "black"
        },
        light: {
            "--text": "black",
            "--title": "black",
            "--primary": "black",
            "--background": "white"
        }
    };
    [...document.querySelectorAll(".color-button")].forEach((e) => {
        e.addEventListener("click", () => {
            let n = t[e.dataset.theme];
            for (var r in n) document.documentElement.style.setProperty(r, n[r]);
        });
    });

    var e = document.querySelectorAll("button[color-primary]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("color-primary");
            document.documentElement.style.setProperty("--primary", t);
        });
    });

    var e = document.querySelectorAll("button[color-text]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("color-text");
            document.documentElement.style.setProperty("--text", t);
        });
    });

    var e = document.querySelectorAll("button[color-title]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("color-title");
            document.documentElement.style.setProperty("--title", t);
        });
    });

    var e = document.querySelectorAll("button[color-background]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("color-background");
            document.documentElement.style.setProperty("--background", t);
        });
    });

    var e = document.querySelectorAll("button[style-site-name]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("style-site-name");
            (title = document.getElementById("component-site-name").classList).remove("bold"), title.remove("italic"), title.remove("scratched"), title.remove("underline"), title.remove("overline"), title.add(t);
        });
    });

    var e = document.querySelectorAll("button[style-title]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("style-title");
            (title = document.getElementById("component-title").classList).remove("bold"), title.remove("italic"), title.remove("scratched"), title.remove("underline"), title.remove("overline"), title.add(t);
        });
    });

    var e = document.querySelectorAll("button[component-id]");
    e.forEach(function (t) {
        t.addEventListener("click", function () {
            var t = this.getAttribute("component-id"),
                e = this.getAttribute("status");
            document.getElementById(t).hidden = JSON.parse(e);
        });
    });
});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}