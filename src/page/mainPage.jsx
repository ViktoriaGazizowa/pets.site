import { useEffect, useState } from "react";
import Card from "../components/card";
import Slider from "../components/Slider";
import First4 from "../components/first4";
import LoginModal from "../components/modal";

function MainPage() {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        load();
    }, []);

    function load() {
        fetch("https://pets.сделай.site/api/pets")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setPet(
                    result.data.orders.map((item) => <Card key={item.id} data={item} />)
                );
            });
    }

    return (
        <div>
            <Slider />
            <h2 className="text-center text-white bg-primary m-2 p-2 rounded">
                Карточки животных
            </h2>
            <div className="container">
                <div className="row">
                    {/* Разбиение на два столбца для каждой карточки */}
                    {pet.map((card, index) => (
                        <div className="col-md-6" key={index}>
                            {card}
                        </div>
                    ))}
                </div>
            </div>
            <First4 />
            <LoginModal />
        </div>
    );
}

export default MainPage;
