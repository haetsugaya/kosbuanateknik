import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import { BadgeDollarSign, Mail } from "lucide-react";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { TablePembayaran } from "~/components/table-pembayaran";

import sampleTransaksi from 'public/sample/pembayaran.json';
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";


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

  return (
      <div className="w-full flex flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
        <div className="flex w-full h-full">
          <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Daftar Pembayaran</CardTitle>
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
