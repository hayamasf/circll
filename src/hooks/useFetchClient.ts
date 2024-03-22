// "use client";

// import { useState, useEffect } from "react";
// import { fetchClient } from "@/actions/client";
// import { LegalEntity } from "@/types/types";

// export default function useFetchClient(id: number) {
//   const [client, setClient] = useState<LegalEntity | null | undefined>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!Number.isNaN(id)) {
//       setIsLoading(true);
//       fetchClient(id)
//         .then((client) => {
//           setClient(client);
//           setError(null);
//         })
//         .catch((err) => {
//           console.error("顧客データの取得中にエラーが発生しました.", err);
//           setError(err);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [id]);
//   return { client, isLoading, error };
// }
