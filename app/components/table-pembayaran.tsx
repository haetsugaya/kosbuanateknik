import { Button } from "~/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { ScrollArea } from "./ui/scroll-area";
import { Edit, Trash2 } from "lucide-react";

interface TablePembayaranProps {
  data: any[];
}

export function TablePembayaran({ data }: TablePembayaranProps) {
  const formatRupiah = (value: number) => {
    return value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };

  const renderTableHeader = (
    <TableHeader>
      <TableRow>
        <TableHead className="sticky-header-first">No. KM</TableHead>
        <TableHead className="sticky-header">Status</TableHead>
        <TableHead className="sticky-header">Bulan</TableHead>
        <TableHead className="sticky-header">Tarif</TableHead>
        <TableHead className="sticky-header">JML KWH</TableHead>
        <TableHead className="sticky-header">JML Hutang</TableHead>
        <TableHead className="sticky-header">Jumlah</TableHead>
        <TableHead className="sticky-header">Bayar</TableHead>
        <TableHead className="sticky-header">Sisa</TableHead>
        <TableHead className="sticky-header">Nama</TableHead>
        <TableHead className="sticky-header">Listrik 2</TableHead>
        <TableHead className="sticky-header">Listrik 1</TableHead>
        <TableHead className="sticky-header">KWH</TableHead>
        <TableHead className="sticky-header">HRG KWH</TableHead>
        <TableHead className="sticky-header">Terbilang</TableHead>
        <TableHead className="sticky-header">Alamat Kos</TableHead>
        <TableHead className="sticky-header">Tanggal</TableHead>
        <TableHead className="sticky-header">Tgl Masuk</TableHead>
        <TableHead className="sticky-header">Tgl Batas</TableHead>
        <TableHead className="sticky-header">Periode</TableHead>
        <TableHead className="sticky-header">Tunggakan</TableHead>
        <TableHead className="sticky-header">Tarif Baru</TableHead>
        <TableHead className="sticky-header">Sampah</TableHead>
        <TableHead className="sticky-header">Keterangan</TableHead>
        <TableHead className="sticky-header-second">Aksi</TableHead>
      </TableRow>
    </TableHeader>
  )

  const renderTableData = (
    <>
      {data.map((invoice, index) => (
        <TableRow key={index} className="relative">
          <TableCell className="sticky-row-first">{invoice.NO_KM}</TableCell>
          <TableCell className="">{invoice.STATUS === 1 ? "Dihuni" : "Kosong"}</TableCell>
          <TableCell className="">{invoice.BULAN}</TableCell>
          <TableCell className="">{formatRupiah(invoice.TARIP)}</TableCell>
          <TableCell className="">{invoice.JML_KWH}</TableCell>
          <TableCell className="">{formatRupiah(invoice.JML_HUTANG)}</TableCell>
          <TableCell className="">{formatRupiah(invoice.JUMLAH)}</TableCell>
          <TableCell className="">{formatRupiah(invoice.BAYAR)}</TableCell>
          <TableCell className="">{formatRupiah(invoice.SISA)}</TableCell>
          <TableCell className="">{invoice.NAMA}</TableCell>
          <TableCell className="">{invoice.LISTRIK2}</TableCell>
          <TableCell className="">{invoice.LISTRIK1}</TableCell>
          <TableCell className="">{invoice.KWH}</TableCell>
          <TableCell className="">{formatRupiah(invoice.HRG_KWH)}</TableCell>
          <TableCell className="">{invoice.TERBILANG}</TableCell>
          <TableCell className="">{invoice.ALAMAT_KOS}</TableCell>
          <TableCell className="">{invoice.TANGGAL}</TableCell>
          <TableCell className="">{invoice.TGL_MASUK}</TableCell>
          <TableCell className="">{invoice.TGL_BATAS}</TableCell>
          <TableCell className="">{invoice.PERIODE}</TableCell>
          <TableCell className="">{invoice.TUNGGAKAN}</TableCell>
          <TableCell className="">{formatRupiah(invoice.TARIF_BARU)}</TableCell>
          <TableCell className="">{formatRupiah(invoice.SAMPAH)}</TableCell>
          <TableCell className="">{invoice.KET}</TableCell>
          <TableCell className="sticky-row-second flex gap-2">
            <Button><Edit className="w-3"></Edit></Button>
            <Button variant={"destructive"}><Trash2 className="w-3"></Trash2></Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <Table className="table-primary whitespace-nowrap overflow-scroll">
          
        <div className="max-h-[600px]">
          {renderTableHeader}
          <TableBody>
            {renderTableData }
          </TableBody>
        </div>
      </Table>
    </>
  )
}
