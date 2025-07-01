let Counter = Number(localStorage.getItem("Counter")) || 0;
let clickValue = Number(localStorage.getItem("clickValue")) || 1;
let tapCount = document.getElementById("tapCount");

tapCount.innerHTML = Counter;

const fluttershy = document.getElementById("fluttershy");
const hairBrushe = document.getElementById("hairBrush");
const hairDryer = document.getElementById("hairDryer");
const lipstick = document.getElementById("lipstick");
const mascara = document.getElementById("mascara");
const right = document.getElementById("rightArrowBtn");
const left = document.getElementById("leftArrowBtn");
const carousel = document.getElementById("recUpgrade");

if (localStorage.getItem("hairBrushPurchased") === "true" ) {
    hairBrushe.classList.add("purchased");
}
if (localStorage.getItem("hairDryerPurchased") === "true" ) {
    hairDryer.classList.add("purchased");
}
if (localStorage.getItem("lipstickPurchased") === "true" ) {
    lipstick.classList.add("purchased");
}
if (localStorage.getItem("mascaraPurchased") === "true" ) {
    mascara.classList.add("purchased");
}

fluttershy.addEventListener("click", function () {
    Counter += clickValue;
    tapCount.innerHTML = Counter;
    localStorage.setItem("Counter", Counter);
    fluttershy.style.scale = "0.99"
    setTimeout(() => {
        fluttershy.style.scale = "1"
    }, 20)
});

function purchaseUpgrade(cost,newClickValue,element,storageKey) {

    if (Counter >= cost && clickValue < newClickValue) {
        Counter -= cost;
        tapCount.innerHTML = Counter;
        clickValue = newClickValue;
        element.classList.add("purchased");
        localStorage.setItem("Counter", Counter);
        localStorage.setItem("clickValue", clickValue);
        localStorage.setItem(storageKey, "true");
    }
}

hairBrushe.addEventListener("click", () => purchaseUpgrade(20, 2, hairBrushe, "hairBrushePurchased"));
hairDryer.addEventListener("click", () => purchaseUpgrade(100, 3, hairDryer, "hairDryerPurchased"));
lipstick.addEventListener("click", () => purchaseUpgrade(250, 4, lipstick, "lipstickPurchased"));
mascara.addEventListener("click", () => purchaseUpgrade(500, 5, mascara, "mascaraPurchased"));

left.addEventListener("click", () => {
    carousel.scrollBy({
        left: -180,
    });
})
right.addEventListener("click", () => {
    carousel.scrollBy({
        left: 180,
    });
});