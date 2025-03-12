import { DotIcon } from "lucide-react";
import { Restaurant } from "../types/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
    restaurant : Restaurant;
}

const RestaurantInfo = ({restaurant}:Props)=> {
    return(
        <Card className="border-sla">
            <CardHeader>
                <CardTitle className="font-bold text-3xl tracking-tight">
                    {restaurant.restaurantName}
                </CardTitle>
                <CardDescription>
                    {restaurant.city},{restaurant.country}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex">
                {restaurant.cuisines.map( (item,index)=> (
                    <span className="flex">
                        <span>{item}</span>
                        {index < restaurant.cuisines.length-1 && <DotIcon/>}
                    </span>
                ))}
            </CardContent>
        </Card>
    )
}

export default RestaurantInfo;