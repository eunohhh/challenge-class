import Chip from "@/components/Chip";

export default function Home() {
    return (
        <div className="grid place-items-center h-screen">
            <Chip intent="primary" label="칩칩" />
            <Chip intent="secondary" label="칩칩" />
            <Chip intent="danger" label="칩칩" />
            <Chip intent="warning" label="칩칩" />
            <Chip intent="info" label="칩칩" />
            <Chip intent="success" label="칩칩" />
            <Chip label="칩칩" />
        </div>
    );
}
