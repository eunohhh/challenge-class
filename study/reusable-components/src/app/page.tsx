import Button from "@/components/Button";

export default function Home() {
    return (
        // <div className="grid place-items-center h-screen">

        <div className="flex flex-col justify-center items-center gap-4 h-screen">
            {/** chips */}
            {/* <Chip intent="primary" label="primary" />
            <Chip intent="secondary" label="secondary" />
            <Chip intent="danger" label="danger" />
            <Chip intent="warning" label="warning" />
            <Chip intent="info" label="info" />
            <Chip intent="success" label="success" />
            <Chip label="default" /> */}

            {/** buttons */}
            <Button intent="primary" size="sm" variant="outline">
                Primary
            </Button>
            <Button intent="primary" size="md" variant="contained">
                Primary
            </Button>
            <Button intent="primary" size="lg" variant="outline">
                Primary
            </Button>

            <Button intent="secondary" size="sm" variant="outline">
                Secondary
            </Button>
            <Button intent="secondary" size="md" variant="contained">
                Secondary
            </Button>
            <Button intent="secondary" size="lg" variant="outline">
                Secondary
            </Button>

            <Button intent="danger" size="sm" variant="outline">
                Danger
            </Button>
            <Button intent="danger" size="md" variant="contained">
                Danger
            </Button>
            <Button intent="danger" size="lg" variant="outline">
                Danger
            </Button>
        </div>
    );
}
