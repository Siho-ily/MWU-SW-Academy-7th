function App({$target, initialState}) {
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, {text}];
            todoList.setState(nextState);
        },
    });

    const todoList = new TodoList({
        $target,
        initialState,
    });
}
