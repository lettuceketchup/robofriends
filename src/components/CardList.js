import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default CardList;
