/**
 * params: {
 * $target - 해당 컴포넌트가 렌더링될 부모 엘리먼트
 * initialState - 해당 컴포넌트의 초기 상태
 * }
 */

function TodoList1(params) {
    const {$target, initialState} = params;

    const $todoList = document.createElement("div");
    $target.appendChild($todoList);

    this.state = initialState;

    this.render = () => {
        /* let html = "";

        for (let i = 0; i < this.state.length; i++) {
            html += `<li>${this.state[i].text}</li>`;
        }

        html = `<ul>${html}</ul>`;

        $todoList.innerHTML = html; */
        $todoList.innerHTML = `
		<ul>
			${this.state.map((todo) => `<li>${todo.text}</li>`).join("")}
		</ul>
		`;
    };

    this.render();
}

function TodoList2({$target, initialState}) {
    const $todoList = document.createElement("div");
    $target.appendChild($todoList);

    this.state = initialState;

    this.render = () => {
        $todoList.innerHTML = `
		<ul>
			${this.state.map(({text}) => `<li>${text}</li>`).join("")}
		</ul>
		`;
    };

    this.render();
}
