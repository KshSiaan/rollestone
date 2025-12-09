"use client";
import { scanQRApi } from "@/api/driver";
import { useUser } from "@/context/user-context";
import { idk } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";

export default function Page() {
  const { user } = useUser();
  const [dataset, setDataset] = useState<any>();
  const [{ token }] = useCookies(["token"]);
  const navig = useRouter();

  const cooldown = useRef(false); // prevents multiple scans

  const { mutate } = useMutation({
    mutationKey: ["qr_scan"],
    mutationFn: (pay_code: string) => {
      return scanQRApi({
        companyID: String(user?.company_id),
        token,
        pay_code,
      });
    },

    onError: (err) => {
      toast.error(err.message);
      setDataset(err);
      cooldown.current = false; // unlock again
    },

    onSuccess: (res: idk) => {
      toast.success(res.message);
      setDataset(res);
      navig.push("/driver/tickets");
      cooldown.current = false; // unlock
    },
  });

  const handleScan = (result: any) => {
    if (!result?.[0]?.rawValue) return;

    if (cooldown.current) return; // skip if cooldown active
    cooldown.current = true;

    mutate(result[0].rawValue);

    setTimeout(() => {
      cooldown.current = false;
    }, 1200); // 1.2s cooldown
  };

  return (
    <div>
      <Scanner
        onScan={handleScan}
        onError={(error: any) => console.log(error?.message)}
      />
    </div>
  );
}
