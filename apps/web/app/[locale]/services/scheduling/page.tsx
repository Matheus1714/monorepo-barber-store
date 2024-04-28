'use client'

import { useSearchParams } from 'next/navigation'
import { useFormatter } from 'next-intl';

import { DashLayout } from "@/components/dash-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { capitalize, formatListOfItems } from '@/utils/format';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
 
const FormSchema = z.object({
    chair: z.string({
        required_error: "É necessário escolher uma cadeira",
    }),
    reservationDate: z.date({
        required_error: "É necessário escolher um dia para agendar",
    }),
    reservationHour: z.string({
        required_error: "É necessário escolher um horário",
    })
})

const imageMap = {
    cabelo: '/hair.png',
    barba: '/beard.png',
    default: '/beard-hair.png',
}

export default function SchedulingPage() {
    const formatHook = useFormatter();
    const { toast } = useToast()

    const moneyFormat = (value: number) => formatHook.number(value, { style: 'currency', currency: 'BRL' })

    const searchParams = useSearchParams()
    const services = searchParams.getAll('service')

    const serviceName = formatListOfItems(...services.map(capitalize))
    const price = services.length === 1 ? 45 : 80;
    const image = services.length === 1 ? imageMap[services[0] as never] : imageMap.default

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const today = new Date()
    const oneMonthAfter = new Date()
    oneMonthAfter.setMonth(oneMonthAfter.getMonth() + 1)

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "Agendamento realizado!",
          description: "Agendamento realizado com sucesso!"
        })
    }

    return (
        <DashLayout
            title="Agendamento"
            page="services"
        >
            <Card className="max-w-xl">
                <CardHeader className="flex lg:flex-row gap-4 justify-between">
                    <div className="flex gap-4">
                        <div className="grid gap-2 w-20">
                            <Image
                                alt={''}
                                className="aspect-square w-full rounded-md object-cover"
                                height="300"
                                src={image}
                                width="300"
                            />
                        </div>
                        <CardTitle>
                            <Label className="text-2xl">{serviceName}</Label>
                            <div className='flex gap-2 mt-2'>
                                {services.map((service) => <Badge key={service}>{service}</Badge>)}
                            </div>
                        </CardTitle>
                    </div>
                    <div className="flex flex-col">
                        <Label>Preço</Label>
                        <Label className="text-2xl">
                            {moneyFormat(price)}
                        </Label>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="flex justify-between flex-col gap-4">
                                <FormField 
                                    control={form.control}
                                    name="chair"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Cadeira</FormLabel>
                                            <Select 
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}>
                                                        <SelectValue placeholder="Selecione uma cadeira"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="1">Cadeira 1</SelectItem>
                                                    <SelectItem value="2">Cadeira 2</SelectItem>
                                                    <SelectItem value="3">Cadeira 3</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="reservationDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Data de Início</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Selecione uma data</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < today || date > oneMonthAfter
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="reservationHour"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Horário</FormLabel>
                                            <Select 
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}>
                                                        <SelectValue placeholder="Selecione um horário" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="9:00">9:00</SelectItem>
                                                    <SelectItem value="10:00">10:00</SelectItem>
                                                    <SelectItem value="11:00">11:00</SelectItem>
                                                    <SelectItem value="12:00">12:00</SelectItem>
                                                    <SelectItem value="13:00">13:00</SelectItem>
                                                    <SelectItem value="14:00">14:00</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />  
                            </div>
                            <Button className="w-full" type="submit">Agendar</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </DashLayout>
    )
}