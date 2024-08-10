import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { getPrefectures } from "@/actions/prefecture";
import { getMunicipalites } from "@/actions/municipality";
import { Prefecture } from "@/types/types";
import { Municipality } from "@/types/types";

export default function PrefectureMunicipalitySelect({ disabled, editForm }: { disabled?: boolean, editForm?: boolean }) {
  const { register, reset, watch } = useFormContext();

  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<number | null>(
    null,
  );
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      const prefectures = await getPrefectures();
      setPrefectures(prefectures);

      if (editForm) {
        const prefectureId = watch("prefectureId");
        setSelectedPrefecture(Number(prefectureId));
        const municipalities = await getMunicipalites(Number(prefectureId));
        setMunicipalities(municipalities);
        reset();
      }
    };
    fetchPrefectures();
  }, []);

  useEffect(() => {
    const fetchMunicipalities = async (selectedPrefecture: number) => {
      const municipalities = await getMunicipalites(selectedPrefecture);
      setMunicipalities(municipalities);
    };

    if (editForm) return;

    if (selectedPrefecture !== null) {
      console.log(selectedPrefecture);
      console.log("走る？")
      fetchMunicipalities(selectedPrefecture);
    } else {
      setMunicipalities([]);
    }
  }, [selectedPrefecture]);

  return (
    <>
      <div className="relative">
        <label
          htmlFor="prefectureId"
          className="absolute z-10 -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          都道府県
        </label>
        <select
          id="prefectureId"
          {...register("prefectureId")}
          onChange={(e) => setSelectedPrefecture(Number(e.target.value))}
          disabled={disabled}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
        >
          <option value="" disabled>
            -- 選択してください --
          </option>
          {prefectures.map((prefecture) => (
            <option key={prefecture.id} value={prefecture.id}>
              {prefecture.name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <label
          htmlFor="municipalityId"
          className="absolute z-10 -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          市区町村
        </label>
        <select
          id="municipalityId"
          {...register("municipalityId")}
          disabled={disabled}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
        >
          <option value="" disabled>
            -- 選択してください --
          </option>
          {municipalities.map((municipality) => (
            <option key={municipality.id} value={municipality.id}>
              {municipality.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
