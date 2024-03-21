"use client";

import { useState, useEffect } from "react";
import { fetchContractor } from "@/actions/contractor";
import { LegalEntity } from "@/types/types";

export default function useFetchContractor(id: number) {
  const [contractor, setContractor] = useState<LegalEntity | null | undefined>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!Number.isNaN(id)) {
      setIsLoading(true);
      fetchContractor(id)
        .then((contractor) => {
          setContractor(contractor);
          setError(null);
        })
        .catch((err) => {
          console.error("業者データ取得時にエラーが発生しました.", err);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);
  return { contractor, isLoading, error };
}
