import React from "react";
import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import { formatAmount } from "@/lib/utils";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  console.log(account);
  return (
    <div className="flex flex-col">
      <Link
        href={`transaction-history/?id-${account.appwriteItemId}`}
        className="bank-card"
      />
      <div className="bank-card_content">
        <div>
          <h2 className="text-16 font-semibold text-white">{account.name}</h2>
          <p className="font-ibm-plex-serif font-black text-white">
            {formatAmount(account.currentBalance)}
          </p>
        </div>

        <article className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-12 font-semibold text-white">{userName}</h1>
            <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
          </div>
          <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
        </article>
      </div>
    </div>
  );
};

export default BankCard;
