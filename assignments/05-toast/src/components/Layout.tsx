import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return <main className="h-screen grid place-items-center">{children}</main>;
}

export default Layout;
