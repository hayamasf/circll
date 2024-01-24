"use server";

import { prisma } from "@/lib/prisma";
import { ContractorRegistrationInputs } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ContractorRegistration(formData: ContractorRegistrationInputs) {
    await prisma.contractor.create({
        data: {
            name: formData.name,
            title: formData.title,
            representative: formData.representative,
            zipCode: formData.zipCode,
            prefecture: formData.prefecture,
            city: formData.city,
            town: formData.town,
            address: formData.address,
            address2: formData.address2,
            createdBy: formData.createdBy,
        }
    }    )
    revalidatePath('/contractors');
    redirect('/contractors');
}
