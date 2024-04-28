import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

import { DashLayout } from "@/components/dash-layout"
import { randomUUID } from "crypto"

interface Header {
  name: string;
}

interface Row {
  id: string;
  service: string;
  price: number;
  reservation: string;
  chair: number;
}

const fakeData: Row[] = [
  {
    id: randomUUID(),
    service: "Barba",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 1
  },
  {
    id: randomUUID(),
    service: "Cabelo",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 2
  },
  {
    id: randomUUID(),
    service: "Cabelo e Barba",
    price: 80,
    reservation: '2022-03-01 22:00',
    chair: 3
  },
  {
    id: randomUUID(),
    service: "Barba",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 1
  },
  {
    id: randomUUID(),
    service: "Cabelo",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 2
  },
  {
    id: randomUUID(),
    service: "Cabelo e Barba",
    price: 80,
    reservation: '2022-03-01 22:00',
    chair: 3
  },
  {
    id: randomUUID(),
    service: "Barba",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 1
  },
  {
    id: randomUUID(),
    service: "Cabelo",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 2
  },
  {
    id: randomUUID(),
    service: "Cabelo e Barba",
    price: 80,
    reservation: '2022-03-01 22:00',
    chair: 3
  },
  {
    id: randomUUID(),
    service: "Barba",
    price: 45,
    reservation: '2022-03-01 22:00',
    chair: 1
  }
];

import { useFormatter } from 'next-intl';

export default function AnalysePage() {

  const format = useFormatter();

  const dateFormat = (date: string) => format.dateTime(new Date(date), {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })

  const hourFormat = (date: string) => format.dateTime(new Date(date), {
    hour: 'numeric',
    minute: 'numeric'
  })

  const moneyFormat = (value: number) => format.number(value, {style: 'currency', currency: 'BRL'})

  const header: Header[] = [
    { name: 'Serviço' },
    { name: 'Preço' },
    { name: 'Data Início' },
    { name: 'Hora' },
    { name: 'Cadeira' },
  ]

  const rows: Row[] = fakeData;

  return (
    <DashLayout
      title="Agendamentos Realizados"
      page="analysis"
    >
      <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      <ScrollArea>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardContent className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    { header.map((head) => <TableHead className="md:table-cell" key={head.name}>{ head.name }</TableHead>) }
                  </TableRow>
                </TableHeader>
                <TableBody>
                  { rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        {row.service}
                      </TableCell>
                      <TableCell>
                        {moneyFormat(row.price)}
                      </TableCell>
                      <TableCell>
                        {dateFormat(row.reservation)}
                      </TableCell>
                      <TableCell>
                        {hourFormat(row.reservation)}
                      </TableCell>
                      <TableCell>
                      <Badge>{row.chair}</Badge>
                      </TableCell>
                    </TableRow>
                  )) }
                </TableBody>
              </Table>
          </CardContent>
        </Card>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      </main>
    </DashLayout>
  )
}