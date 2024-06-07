import Vehicles from "../components/containers/vehicles/Vehicles";
import { dataVehicles } from "../fetchData";

export async function generateMetadata({ params, searchParams }: any) {
    const vehiclesList = await dataVehicles.getDataVehiclesAll();
    const nameVehicle = vehiclesList?.map((vehicle: any) => vehicle.name);
    return {
        title: "Vehicles",
        description: nameVehicle,
        keywords: nameVehicle,
    };
}

export default async function People() {
    const vehiclesListAll = await dataVehicles.getDataVehiclesAll();
    const countAllVehicles = Math.ceil(vehiclesListAll.length / 10);
    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Vehicles countAllVehicles={countAllVehicles} />
        </section>
    );
}
