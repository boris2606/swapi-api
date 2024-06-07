import Vehicle from "@/app/components/containers/vehicles/vehicle/Vehicle";
import { dataVehicles } from "@/app/fetchData/";
import {
    customDecodeURIComponent,
    customEncodeURIComponent,
} from "@/app/utils/utils";

export async function generateStaticParams() {
    const vehicles = await dataVehicles.getDataVehiclesAll();
    return vehicles.map((vehicle: { name: string }) => ({
        vehicleName: customEncodeURIComponent(vehicle.name),
    }));
}

export async function generateMetadata({ params }: any) {
    const vehicle = await dataVehicles.getDataVehicle(
        customDecodeURIComponent(params?.vehicleName)
    );
    const currentVehicle = vehicle[0];

    return {
        title: currentVehicle?.name,
        description: `${currentVehicle.name} ${currentVehicle.vehicle_class} ${currentVehicle.passengers} ${currentVehicle.model} ${currentVehicle.max_atmosphering_speed} ${currentVehicle.manufacturer} ${currentVehicle.length} ${currentVehicle.crew} ${currentVehicle.cost_in_credits} ${currentVehicle.consumables} ${currentVehicle.cargo_capacity} `,
    };
}

export default async function CurrentStarship({
    params: { vehicleName },
}: any) {
    const vehicleData = await dataVehicles.getDataVehicle(
        customDecodeURIComponent(vehicleName)
    );

    return (
        <section className=" h-full min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex justify-center items-center">
            <Vehicle vehicleData={vehicleData} />
        </section>
    );
}
