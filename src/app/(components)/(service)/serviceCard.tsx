import { ServiceCardType } from "@/app/(types)/service";

const ServiceCard = ({ title, description, image }: ServiceCardType) => {
    return (
        <div className="flex flex-col justify-start w-[28vw] h-[60vh] border rounded-lg bg-white text-black">
            <img src={image} alt={title} className="w-full h-[48vh] object-cover rounded-lg" />
            <div className="flex flex-col justify-around">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard