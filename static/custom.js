const el = document.querySelector("div.home-subtitle");
console.log("TEST");

if (el !== null) {
    new TypeIt("div.home-subtitle", {
        strings: "TEST"
    }
    );
}
