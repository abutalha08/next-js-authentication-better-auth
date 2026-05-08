import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


const DashboardPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log("Session data in DashboardPage:", session);
    const user = session?.user;
    
    if(!user){
        // redirect('/auth/signin');
        return  <div className="text-center font-bold text-4xl text-red-500">Please sign in to access the dashboard.</div>
    }


    return (
        <div>
            <h2 className="text-center font-bold text-6xl text-green-800">This is Dahsing board</h2>
        </div>
    );
};

export default DashboardPage;