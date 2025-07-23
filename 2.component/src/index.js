const data1 = [{text: "JavaScript 공부하기"}, {text: "JavaScript 복습하기"}];
const data2 = [{text: "베이스 연습하기"}, {text: "턱걸이 하기"}, {text: "공부 하기"}];

const $app = document.querySelector(".app");

new TodoList2({
    $target: $app,
    initialState: data1,
});

new TodoList2({
    $target: $app,
    initialState: data2,
});
