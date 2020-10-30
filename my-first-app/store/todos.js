// 這個倉庫有哪些狀態(state必須回傳物件的函數)
// export const state = () => {
//     return {
//         // 狀態
//         numX: 12
//     }
// }

export const state = () => ({
    numX: 13,
    todoList: [
        // { text: 'ABC', category: '財務', createdAt: 1 }
    ],
    // 是否跑過動畫
    hasAnimated: false
});

// mutations 一系列{}用來更新 state 的函數
export const mutations = {
    addX(state) {
        // 可把numX+1
        state.numX += 1;
    },
    addItemToList(state, todo) {
        // 把送進來的新待辦事項加入至待辦清單內
        state.todoList.push(todo);
    },
    removeItemFromList(state, i) {
        state.todoList.splice(i, 1);
    },
    initTodoList(state, todoList) {
        state.todoList = todoList;
    }
};

// getters 一系列用來取得 state 的函數
export const getters = {
    // 這是一個用來取得numX的函數
    getX(state) {
        return state.numX;
    },
    getTodoList(state) {
        return state.todoList;
    }
};
