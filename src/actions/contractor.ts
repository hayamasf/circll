"use server";

import { prisma } from "@/lib/prisma";
import { Contractor } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createContractor (formData: Contractor) {
    // await prisma.contractor.create({
    //     data: {
    //         name: formData.name,
    //         title: formData.title,
    //         representative: formData.representative,
    //         zipCode: formData.zipCode,
    //         prefecture: formData.prefecture,
    //         city: formData.city,
    //         town: formData.town,
    //         address: formData.address,
    //         address2: formData.address2,
    //         createdBy: formData.createdBy,
    //     }
    // }    )
    console.log(formData);
    revalidatePath('/contractors');
    redirect('/contractors');
}

export async function updateContractor(formData:Contractor) {
    console.log(formData);
    
}