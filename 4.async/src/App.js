import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import {request} from "./api.js";

export default function App({$app}) {
    this.state = {
        todos: [
            {text: "Learn React", id: "1"},
            {text: "Learn JavaScript", id: "2"},
            {text: "Learn TypeScript", id: "3"},
        ],
        selectedTodo: null,
        comments: [],
    };

    this.setState = (nextState) => {
        this.state = nextState;
        todoList.setState(this.state.todos);
        todoComments.setState({
            selectedTodo: this.state.selectedTodo,
            comments: this.state.comments,
        });
    };

    const todoList = new TodoList({
        $target: $app,
        initialState: this.state.todos,
        onClick: (id) => {
            alert(`Todo ID: ${id}`);
            const selectedTodo = this.state.todos.find(
                (todo) => todo.id === id
            );
            this.setState({
                ...this.state,
                selectedTodo,
            });

            // 댓글 불러오기
            // 댓글에 대한 api가 제공되지 않아 미구현
            /* request("", (comments) => {
                this.setState({
                    ...this.state,
                    comments,
                });
            }); */
        },
    });

    const todoComments = new TodoComments({
        $target: $app,
        initialState: {
            selectedTodo: this.state.selectedTodo,
            comments: this.state.comments,
        },
    });

    // todos 불러오기
    this.init = () => {
        // 유저의 할 일 목록 표시
        // https://mwu2.todo.edu-api.programmers.co.kr/{user}
        /**
         * 데이터 형태
         * {
         *	"_id": 할 일의 고유값. 숫자와 문자가 섞여있는 문자로 되어있음,
         *	"content": 할 일 text,
         *	"isCompleted": 할 일의 완료여부
         *	}
         */
        request(
            "https://mwu2.todo.edu-api.programmers.co.kr/11656810",
            (todos) => {
                todos = todos.map((todo) => ({
                    text: todo.content,
                    id: todo._id,
                }));
                this.setState({todos: [...this.state.todos, ...todos]});
            }
        );
    };

    this.init();
}
