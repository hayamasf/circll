"use server";

import { ContractorRegistrationInputs } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const ContractorRegistration = (formData: ContractorRegistrationInputs) => {

    console.log(formData);
    revalidatePath('/contractors');
    redirect('/contractors');
}