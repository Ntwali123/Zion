import BankCard from '@/components/BankCard';
import HeaderBox from "@/components/HeaderBox"
import {getAccounts} from "@/lib/actions/bank.actions";
import {getLoggedInUser} from "@/lib/actions/user.actions";
import React from 'react';


export default function MyBanks () {
    const loggedIn = awaig getLoggedInUser()
    const accounts = await getAccounts({
        userId: loggedIn.$id
    })
    
}