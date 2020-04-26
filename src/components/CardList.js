import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    if(true)
        throw new Error("NOOOOOOOOOOOOOOOO");
    return (
        <div>
            {
                robots.map((robot) => {
                    return (
                        <Card
                            key={robot.id}
                            name={robot.name}
                            id={robot.id}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
