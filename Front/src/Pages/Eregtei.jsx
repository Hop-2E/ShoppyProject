// import { useEffect, useState } from "react";
// import { instance } from "../App.jsx";
// const Eregtei = () => {
//   const [data, setData] = useState([]);
//   const getMale = async () => {
//     const res = await instance.post("/products/cate", {
//       category: "male",
//     });
//     console.log(res);
//     setData(
//       res.data.data.map((el) => {
//         return el;
//       })
//     );
//   };

//   useEffect(() => {
//     getMale();
//   }, []);
//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       {data &&
//         data.map((el, index) => {
//           return (
//             <div key={index}>
//               <div>{el.image}</div>
//               <div>{el.price}</div>
//               <div>{el.category}</div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };
// export default Eregtei;
