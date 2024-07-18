import Link from "next/link";

export default function Sidenav() {
  return (
    <div>
      sidenav
      <Link href={"/dashboard/invoices"}>Invoices</Link>
    </div>
  );
}
