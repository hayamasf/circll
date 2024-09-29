"use server";

export default async function getPrefectureCityTown(postalCode: string) {
  const API_KEY = process.env.POSTCODEJP_API_KEY;

  try {
    const response = await fetch(
      "https://apis.postcode-jp.com/api/v6/postcodes/" + postalCode,
      {
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error("住所データの取得に失敗しました.");
    }
    const [data] = await response.json();

    if (!data) {
      throw new Error("住所情報が見つかりませんでした.");
    }

    const { pref, city, town } = data;

    return { pref, city, town };
  } catch (error) {
    if (error instanceof Error) {
      console.error("エラーが発生しました.", error.message);
    } else {
      console.error("エラーが発生しました.", error);
    }
    throw error;
  }
}
