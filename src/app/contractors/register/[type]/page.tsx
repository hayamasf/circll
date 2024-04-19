// "use client";

// import React from "react";

// import PageHeader from "@/components/PageHeader";
// import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
// import { createContractor } from "@/actions/contractor";
// import { LegalEntity } from "@/types/types";

// export default function Page({ params }: { params: { type: string } }) {
//   const type = params.type;

//   const onSubmit = (formData: LegalEntity) => {
//     const { address2, tradeName, ...rest } = formData;

//     const data = {
//       ...rest,
//       ...(address2 ? { address2 } : {}),
//       ...(tradeName ? { tradeName } : {}),
//     };

//     console.log(data);
//     createContractor(data);
//   };

//   return (
//     <div className="mx-auto max-w-sm">
//       <PageHeader title="業者の新規登録" />
//       <LegalEntityRegistrationForm onSubmit={onSubmit} />
//     </div>
//   );
// }
