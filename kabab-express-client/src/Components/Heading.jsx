
const Heading = ({heading,subheading}) => {
    return (
        <div className="w-2/6 mx-auto text-center my-20">
            <h1 className="text-yellow-400">---{subheading}---</h1>
            <p className="text-3xl font-bold border-y-2 py-2 border-gray-400">{heading}</p>
            
        </div>
    );
};

export default Heading;