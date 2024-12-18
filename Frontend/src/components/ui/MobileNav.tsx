import { Button } from "./button";
import { Separator } from "./separator";
import { Sheet,SheetTrigger, SheetContent, SheetTitle, SheetDescription} from "./sheet";
import {Menu} from "lucide-react"
const MobileNav = () =>{
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-indigo-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome To MernEats.com</span>
                </SheetTitle>
            <Separator/>
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-indigo-500">Log In</Button>
                    
                </SheetDescription>
                </SheetContent>
            
        </Sheet>
    )
}
export default MobileNav;