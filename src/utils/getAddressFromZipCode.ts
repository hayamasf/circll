import { ChangeEvent } from "react";
import {useForm} from "react-hook-form"

const getPrefectureCityTown = async (zipCode: string)=> {

    const API_KEY = process.env.POSTCODEJP_API_KEY;

    try {
        const response = await fetch(
          `https://apis.postcode-jp.com/api/v5/postcodes/${zipCode}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          },
        );

        if(!response.ok) {
            throw new Error("住所データの取得に失敗しました.")
        }

        const [data] = await response.json();

        if (!data) {
            throw new Error("住所情報が見つかりませんでした.")
        }

    return data;

} catch(error: unknown) {
    if (error instanceof Error) {
        console.error("エラーが発生しました.", error.message);
    } else {
        console.error("エラーが発生しました.", error)
    }
    throw error;

}
}

const getAddressFromZipCode = async (e: ChangeEvent<HTMLInputElement>) => {

    const { setValue} = useForm();

    const zipCode = e.target.value;

    if (zipCode.length === 7) {
      try {
        const { pref, city, town, error } = await getPrefectureCityTown(zipCode)

        if (error) {
          throw new Error((error as Error).message);
        }
        setValue("prefecture", pref);
        setValue("city", city);
        setValue("town", town);
      } catch (error) {
          console.error("住所データが取得できませんでした.", (error as Error).message || error)
      }
    }
}

export default getAddressFromZipCode;
