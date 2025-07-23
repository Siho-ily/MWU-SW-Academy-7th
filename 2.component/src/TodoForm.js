function TodoForm({$target}) {
    const $form = document.createElement("form");

    $target.appendChild($form);

    let isInit = false;

    this.render = () => {
        $form.innerHTML = `
			<input type="text" name="todo" />
			<button>추가</button>
		`;

        if (!isInit) {
            $form.addEventListener("submit", (event) => {
                event.preventDefault();

                const text = $form.querySelector("input[name=todo]").value;
                console.log(text);
            });
        }
    };

    this.render();
}
