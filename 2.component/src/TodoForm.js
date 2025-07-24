function TodoForm({$target, onSubmit}) {
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

                const $input = $form.querySelector("input[name=todo]");
                const text = $input.value;

                if (text.length > 0) {
                    onSubmit(text);
                    $input.value = "";
                }
            });
            isInit = true;
        }
    };

    this.render();
}
