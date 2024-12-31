

const MenuCard = ({item}) => {
       const {image,name,price,recipe}=item

    return (
        <div className="flex gap-5 ">
            <div>
                <img src={image} alt="" className="w-48  rounded-3xl" />
            </div>

            <div>
                <h1 className="text-xl font-normal ">{name}---------</h1>
                <p className="text-gray-400">{recipe}</p>
            </div>
            <div>
                <h1 className="text-yellow-400 text-xl">${price}</h1>
            </div>

        





            
        </div>
    );
};

export default MenuCard;