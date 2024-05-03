import { DashLayout } from "@/components/dash-layout"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useFormatter } from 'next-intl';
import { randomUUID } from "crypto";
import Image from "next/image"
import { Label } from "@/components/ui/label";
import { NavigationLink } from "@/components/navigation-link";

interface Row {
  id: string;
  pathname: string;
  service: {
    name: string;
    value: string[];
  };
  price: number;
  image: {
    src: string;
    alt: string;
  }
}

const fakeData = [
  {
    id: randomUUID(),
    pathname: '/services/scheduling',
    service: {
      name: 'Barba',
      value: ['barba'],
    },
    price: 45,
    image: {
      src: '/beard.png',
      alt: '',
    }
  },
  {
    id: randomUUID(),
    pathname: '/services/scheduling',
    service: {
      name: 'Cabelo',
      value: ['cabelo'],
    },
    price: 45,
    image: {
      src: '/hair.png',
      alt: '',
    }
  },
  {
    id: randomUUID(),
    pathname: '/services/scheduling',
    service: {
      name: 'Cabelo e Barba',
      value: ['barba', 'cabelo'],
    },
    price: 80,
    image: {
      src: '/beard-hair.png',
      alt: '',
    }
  },
]

export default function ServicePage() {
  const format = useFormatter();

  const moneyFormat = (value: number) => format.number(value, {style: 'currency', currency: 'BRL'})

  const rows: Row[] = fakeData;

  return (
    <DashLayout
      title="Serviços"
      page="services"
    >
      <div className="grid gap-4 sm:flex sm: flex-wrap">
        { rows.map((row) => (
          <NavigationLink 
            key={row.id}
            href={{
              pathname: row.pathname,
              query: { service: row.service.value }
            }}
          >
            <Card className="overflow-hidden transition duration-300 hover:scale-105 hover:bg-zinc-800">
              <CardContent className="mt-6">
                <div className="grid gap-2">
                  <Image
                    alt={row.image.alt}
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src={row.image.src}
                    width="300"
                  />
                </div>
              </CardContent>
              <CardHeader className="flex flex-row justify-between">
                <CardTitle>
                  <Label className="text-2xl">{ row.service.name }</Label>
                  <div className="flex gap-2 mt-2">
                    {row.service.value.map((value) => <Badge>{value}</Badge>)}
                  </div>
                </CardTitle>
                <Label className="text-2xl">
                  {moneyFormat(row.price)}
                </Label>
              </CardHeader>
            </Card>
          </NavigationLink>
        )) }
      </div>
    </DashLayout>
  )
}