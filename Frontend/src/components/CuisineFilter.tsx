import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cuisineList } from "../config/restaurant-options-config";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
    onChange : (cuisines : string[]) => void;
    selectedCuisines : string[];
    isExpanded : boolean;
    onExpandedClick : ()=>void;
}

const CuisineFilter = ({onChange,
    selectedCuisines,
    isExpanded,
    onExpandedClick
    }: Props) =>{

        const handleCuisineChange = (event : ChangeEvent<HTMLInputElement>)=>{
            const clickedCuisine = event.target.value;
            const isChecked = event.target.checked;

            const newCuisinesList = isChecked ? [...selectedCuisines , clickedCuisine] : selectedCuisines.filter( (cuisine) => cuisine !== clickedCuisine );

            onChange(newCuisinesList);
        }

        const handleCuisineReset =() => onChange([]);

        return (
            <>
                <div className="flex justify-between items-center px-2">
                    <div className="text-md font-semibold mb-2">
                        Filter By Cuisine
                    </div>
                    <div onClick={handleCuisineReset} className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500">Reset Filters</div>
                </div>

                <div className="space-y-2 flex flex-col">
                    {cuisineList.slice(0, isExpanded ? cuisineList.length : 5).map( (cuisine)=>{
                        const isSelected = selectedCuisines.includes(cuisine);
                        return <div className="flex">
                            <input id={`cuisine_${cuisine}`} type="checkbox"
                            value={cuisine}
                            className="hidden"
                            checked={isSelected}
                            onChange={handleCuisineChange}
                            />
                            <Label htmlFor={`cuisine_${cuisine}`}
                            className={`flex flex-center items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold 
                            ${isSelected ? 
                                "border border-green-600 tex-green" 
                                : "border border-slate-300"
                            }`}
                            >
                            {isSelected && <Check size={20} strokeWidth={3}/>}
                            {cuisine}
                            </Label>
                        </div>
                    })}

                    <Button 
                    onClick={onExpandedClick}
                    variant="link" className="mt-4 flex-1">
                        {isExpanded ? (
                            <span className="flex flex-row items-center">
                                View Less <ChevronUp />
                            </span>
                        ) 
                        : (
                            <span className="flex flex-row items-center">View More <ChevronDown/>
                            </span>
                        )
                        }
                    </Button>
                </div>
            </>
        )
}

export default CuisineFilter;