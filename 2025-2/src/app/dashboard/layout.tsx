import {Sidebar} from "@/app/Components/Sidebar";

export default function DashboardLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen text-shadow-slate-800 selection: bg-amber-300 selection: text-violet-700">
            <div className="flex">
                <Sidebar />
                <div className="p-2 w-full text-shadow-cyan-500">
                    {children}
                </div>

            </div>

        </div>
    )
}