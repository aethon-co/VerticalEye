const Marquee = ({ items }: { items: string[] }) => {
    return (
        <div className="relative overflow-hidden bg-white h-[6vh] lg:h-[10vh] w-screen text-black flex items-center ml-[-2.5vw]">
            <div className="flex whitespace-nowrap animate-marquee gap-10 text-[4vh] lg:text-[7vh]">
                {items.map((item, index) => (
                    <p key={`item1-${index}`} className="mx-4">
                        {item}
                    </p>
                ))}
                {items.map((item, index) => (
                    <p key={`item2-${index}`} className="mx-4">
                        {item}
                    </p>
                ))}
                {items.map((item, index) => (
                    <p key={`item3-${index}`} className="mx-4">
                        {item}
                    </p>
                ))}
                {items.map((item, index) => (
                    <p key={`item4-${index}`} className="mx-4">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
