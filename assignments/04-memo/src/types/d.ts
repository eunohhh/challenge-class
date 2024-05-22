// import { UnknownAction } from "@reduxjs/toolkit";

export interface Memo {
    id: string;
    contents: string;
    time: string;
}

export interface MemoApp {
    selected: string;
    memos: Memo[];
}

export const CREATE = "memo/CREATE";
export const DELETE = "memo/DELETE";
export const UPDATE = "memo/UPDATE";
export const SELECT = "memo/SELECT";

interface CreateAction {
    type: typeof CREATE;
    payload: string;
}

interface DeleteAction {
    type: typeof DELETE;
    payload: string;
}

interface SelectAction {
    type: typeof SELECT;
    payload: string;
}

interface UpdateAction {
    type: typeof UPDATE;
    payload: {
        id: string;
        contents: string;
    };
}

export type MemoActionTypes =
    | CreateAction
    | DeleteAction
    | SelectAction
    | UpdateAction;
