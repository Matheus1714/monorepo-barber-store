import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col text-center">
            <div className="flex flex-col w-full">
                <Label className="text-9xl">404</Label>
                <Label className="text-2xl">Página não encontrada</Label>
            </div>
            <div className="mt-4 text-center text-sm">
                Volte para o login {" "}
                <Link href="/auth" className="underline">
                    Login
                </Link>
            </div>
        </div>
    )
}