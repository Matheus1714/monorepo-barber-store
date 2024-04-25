import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneInput } from "@/components/ui/phone-input"

export default function RegisterPage() {
  return (
    <div className="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] sm:flex sm:items-center justify-center">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/banner.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-1">
            <Image
              src="/logo.png"
              alt="Image"
              width="491"
              height="141"
            />
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Realize o preenchimento das informações para completar o cadastro.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nome"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Telefone</Label>
              <Input
                id="name"
                type="text"
                placeholder="(11) 11111-1111"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Repetir Senha</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já tem cadastro?{" "}
            <Link href="/auth" className="underline">
              Faça Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
