// import { useState, useEffect } from "react";

// const usePostcodeJP = () => {
//   const [postalCode, setPostalCode] = useState("");
//   const [prefecture, setPrefecture] = useState("");
//   const [city, setCity] = useState("");
//   const [town, setTown] = useState("");

//   useEffect(() => {
//     const API_KEY = process.env.POSTCODEJP_API_KEY;

//     const getPrefCityTown = async () => {
//       if (postalCode.length !== 7) return;

//       try {
//         const response = await fetch(
//           `https://apis.postcode-jp.com/api/v5/postcodes/${postalCode}`,
//           {
//             headers: {
//               Authorization: `Bearer ${API_KEY}`,
//             },
//           },
//         );
//         const [data] = await response.json();

//         if (!data) {
//           console.log("住所データが見つかりません。");
//           return;
//         }

//         const { pref, city, town } = data;
//         setPrefecture(pref);
//         setCity(city);
//         setTown(town);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getPrefCityTown();
//   }, []);

//   return {
//     postalCode,
//     prefecture,
//     city,
//     town,
//   };
// };

// export default usePostcodeJP;
