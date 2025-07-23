/* const $body = document.querySelector("body");

const $button1 = document.createElement("button");
$button1.textContent = "버튼1";

const $button2 = document.createElement("button");
$button2.textContent = "버튼2";

const $button3 = document.createElement("button");
$button3.textContent = "버튼3";

$body.appendChild($button1);
$body.appendChild($button2);
$body.appendChild($button3);

const $buttons = document.querySelectorAll("button");

$buttons.forEach(($button) => {
    $button.style.margin = "5px";
    $button.style.padding = "10px";
    $button.style.fontSize = "16px";
    $button.style.cursor = "pointer";
});

const toggleButton = ($button) => {
    if ($button.style.textDecoration === "line-through") {
        $button.style.textDecoration = "none";
    } else {
        $button.style.textDecoration = "line-through";
    }
};

$body.querySelectorAll("button").forEach(($button) => {
    $button.addEventListener("click", (e) => toggleButton(e.target));
});
 */

function ToggleButton($target = document.body, text = "기본 버튼") {
    const $button = document.createElement("button");

    let isInit = true;

    this.render = () => {
        $target.appendChild($button);

        if (isInit) {
            $button.textContent = text;
            $button.style.margin = "5px";
            $button.style.padding = "10px";
            $button.style.fontSize = "16px";
            $button.style.cursor = "pointer";

            $button.addEventListener("click", () => {
                if ($button.style.textDecoration === "line-through") {
                    $button.style.textDecoration = "none";
                } else {
                    $button.style.textDecoration = "line-through";
                }
            });

            isInit = false;
        }
    };

    this.render();
}

const $body = document.querySelector("body");

const button1 = new ToggleButton($body, "버튼1");
const button2 = new ToggleButton($body, "버튼2");
const button3 = new ToggleButton($body, "버튼3");
