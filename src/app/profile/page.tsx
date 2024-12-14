import { Button } from "@/components/ui/button"


export default function ProfilePage () {

    return (
        <div className="h-screen"> 
           <p>kode nuklir: {process.env.NEXT_PUCLIC_CODE_NUKLIR}</p>
            <h1>This is Profile Page</h1>
            <Button>Button</Button>
        </div>
    )
}