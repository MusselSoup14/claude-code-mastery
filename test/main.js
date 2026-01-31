function add(a, b) {
  return a + b;
}

console.log(add(1, 2));     // 3

// 투두리스트 가져오는 함수 (유효성 체크 추가)
function getTodoList() {
    const todoList = [
        { id: 1, title: '할 일 1', done: false },
        { id: 2, title: '할 일 2', done: true },
        { id: 3, title: '할 일 3', done: false },
    ];

    // 각 할 일 항목에 대해 유효성 체크 수행
    const isValid = todoList.every(item =>
        typeof item.id === 'number' &&
        typeof item.title === 'string' &&
        typeof item.done === 'boolean'
    );

    // 유효하지 않은 항목이 있으면 에러 발생
    if (!isValid) {
        throw new Error('유효하지 않은 투두 항목이 존재합니다.');
    }

    return todoList;
}

console.log(getTodoList());     // [ { id: 1, title: '할 일 1', done: false }, { id: 2, title: '할 일 2', done: true }, { id: 3, title: '할 일 3', done: false } ]
        