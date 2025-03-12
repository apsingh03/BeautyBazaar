// import jwtDecode from "jwt-decode";

// export function getDecodedToken() {
//   const token = localStorage.getItem("adminLoggedToken");
//   if (token) {
//     try {
//       return jwtDecode(token);
//     } catch (error) {
//       console.error("Invalid token", error);
//       return null;
//     }
//   }
//   return null;
// }

// export const getDecodedToken = () => {
//   const token = localStorage.getItem("adminLoggedToken");
//   console.log("token ", token);
//   if (token) {
//     try {
//       return jwtDecode(token);
//     } catch (error) {
//       console.error("Invalid token", error);
//       return null;
//     }
//   }
//   return null;
// };
