import { useState, useEffect, ChangeEvent } from "react";

const usePostcodeJP = () => {
  const [zipCode, setZipCode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");

  useEffect(() => {
    const API_KEY = process.env.POSTCODEJP_API_KEY;

    const getPrefCityTown = async () => {
      if (zipCode.length !== 7) return;

      try {
        const response = await fetch(
          `https://apis.postcode-jp.com/api/v5/postcodes/${zipCode}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        const [data] = await response.json();

        if (!data) {
          console.log("住所データが見つかりません。");
          return;
        }

        const { pref, city, town } = data;
        setPrefecture(pref);
        setCity(city);
        setTown(town);
      } catch (error) {
        console.log(error);
      }
    };
    getPrefCityTown();
  }, [zipCode]);

  const handleZipCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };
  return {
    zipCode,
    prefecture,
    city,
    town,
    handleZipCodeChange,
  };
};

export default usePostcodeJP;