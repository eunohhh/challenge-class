// import { UnknownAction } from "@reduxjs/toolkit";

export interface Memo {
    id: string;
    contents: string;
    time: string;
}

export const CREATE = "memo/CREATE";
export const DELETE = "memo/DELETE";
export const UPDATE = "memo/UPDATE";

// interface CreateAction extends UnknownAction {
//     type: typeof CREATE;
//     payload: string;
// }

// interface DeleteAction extends UnknownAction {
//     type: typeof DELETE;
//     payload: string;
// }

// interface UpdateAction extends UnknownAction {
//     type: typeof UPDATE;
//     payload: Memo;
// }
