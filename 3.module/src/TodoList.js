/**
 * params: {
 * $target - 해당 컴포넌트가 렌더링될 부모 엘리먼트
 * initialState - 해당 컴포넌트의 초기 상태
 * }
 */

export default function TodoList({$target, initialState}) {
    const $todoList = document.createElement("div");
    $target.appendChild($todoList);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        $todoList.innerHTML = `
		<ul>
			${this.state.map(({text}) => `<li>${text}</li>`).join("")}
		</ul>
		`;
    };

    this.render();
}
