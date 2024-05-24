import store from "@/redux/store";

export default function HomePageLoader(memoId: string | undefined): string {
    const state = store.getState();
    const memos = state.memoApp.memos;

    let id = "";

    const filtered = memos.filter((memo) => memo.id === memoId);

    if (filtered.length === 0) {
        id = "";
    } else {
        id = filtered[0].id;
    }

    return id;
}
