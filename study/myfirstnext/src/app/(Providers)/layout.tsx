import { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <h1>ProvidersLayout</h1>
            {children}
        </div>
    );
}

export default ProvidersLayout;
