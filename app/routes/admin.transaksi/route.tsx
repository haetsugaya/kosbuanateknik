import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import { BadgeDollarSign, Mail, SearchCheckIcon } from "lucide-react";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { TablePembayaran } from "~/components/table-pembayaran";

import sampleTransaksi from 'public/sample/pembayaran.json';
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { useState } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "Transaksi" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const transaksi = sampleTransaksi;

  return json({
    dataTransaksi: transaksi
  });
}

export default function Transaksi() {

  const data = useLoaderData<typeof loader>();

  const [bulan, setBulan] = useState('');
  const [tahun, setTahun] = useState('');

  const handleFilter = (type:string, value: string) => {
    if (type==="bulan") {
      setBulan(value);  
    } 
    if (type==="tahun") {
      setTahun(value);  
    } 
  }

  return (
      <div className="w-full flex flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
        <div className="flex w-full h-full">
          <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <CardTitle>Daftar Pembayaran</CardTitle>
                    <Select onValueChange={(value) => handleFilter('bulan', value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Bulan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Januari</SelectItem>
                        <SelectItem value="2">Februari</SelectItem>
                        <SelectItem value="3">Maret</SelectItem>
                        <SelectItem value="4">April</SelectItem>
                        <SelectItem value="5">Mei</SelectItem>
                        <SelectItem value="6">Juni</SelectItem>
                        <SelectItem value="7">Juli</SelectItem>
                        <SelectItem value="8">Agustus</SelectItem>
                        <SelectItem value="9">September</SelectItem>
                        <SelectItem value="10">Oktober</SelectItem>
                        <SelectItem value="11">November</SelectItem>
                        <SelectItem value="12">Desember</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={(value) => handleFilter('tahun', value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                      </SelectContent>
                    </Select>
                    {bulan != '' && tahun != '' && (
                      <Button variant={"secondary"}><SearchCheckIcon></SearchCheckIcon></Button>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <Link to={"#"} prefetch="render" className={buttonVariants({ variant: "default" })}>
                      <BadgeDollarSign className="mr-2 h-4 w-4" /> Tambah Data
                    </Link>
                  </div>
                </div>
            </CardHeader>
            <CardContent>
              <TablePembayaran data={data.dataTransaksi} />
            </CardContent>
            <CardFooter>
              
            </CardFooter>
          </Card>
        </div>
      </div>
  )
}
