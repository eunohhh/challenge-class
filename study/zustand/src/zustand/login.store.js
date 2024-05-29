import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useLoginStore = create((set)=>({
//     isLoggedIn: false,
//     logIn: () => set(() => {})
// }))

const useLoginStore = create(
    persist(
        (set, get) => ({
            isLoggedIn: false,
            // 래핑 하는 것도 방법일 수 있다
            functions: {
                logIn: () => set(() => ({ isLoggedIn: true })),
                logOut: () => set(() => ({ isLoggedIn: false })),
            },
            school: {
                class: {
                    students: [{ name: "진영" }],
                },
            },
            // updateClass: () => set(produce(prevState, ()=>({})))
            // 아래 코드, 즉 set 하기 전에
            // 어딘가 통신을 하고 데이터를 가져와야 할 수 있음 async 사용 가능
            toggleIsLoggedIn: async () => {
                const prevState = get();
                set({ isLoggedIn: !prevState.isLoggedIn });
            },
        }),
        {
            name: "login-store",
            // storage: createJSONstorage(() => sessionStorage)
        }
    )
);

export default useLoginStore;
