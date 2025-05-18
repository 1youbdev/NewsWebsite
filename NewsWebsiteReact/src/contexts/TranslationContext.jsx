// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const TranslationContext = createContext();

// export const TranslationProvider = ({ children }) => {
//   const [language, setLanguage] = useState(() => {
//     // Initialize from localStorage if available
//     return localStorage.getItem('appLanguage') || 'en';
//   });
//   const [layoutConfig, setLayoutConfig] = useState({
//     direction: "ltr",
//     font: "Arial",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Set base URL for API calls
//   const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   });

//   const getLayoutConfig = async (lang) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await api.get(`/api/layout-config/${lang}`);
//       setLayoutConfig(response.data);
//     } catch (err) {
//       console.error("Error fetching layout config:", err);
//       setError(err.message);
//       // Fallback to default layout if API fails
//       setLayoutConfig({
//         direction: lang === 'ar' ? 'rtl' : 'ltr',
//         font: 'Arial'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const translateText = async (text, targetLanguage) => {
//     if (!text.trim()) return text;
    
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await api.post("/api/translate", {
//         text,
//         targetLanguage,
//       });
//       return response.data.translation;
//     } catch (err) {
//       console.error("Translation error:", err);
//       setError(err.message);
//       return text; // Fallback to original text
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const changeLanguage = async (newLanguage) => {
//     if (newLanguage === language) return;
    
//     try {
//       setLanguage(newLanguage);
//       localStorage.setItem('appLanguage', newLanguage);
//       await getLayoutConfig(newLanguage);
//     } catch (err) {
//       console.error("Language change error:", err);
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     // Initialize with current language
//     getLayoutConfig(language);
//   }, []);

//   return (
//     <TranslationContext.Provider
//       value={{
//         language,
//         layoutConfig,
//         translateText,
//         changeLanguage,
//         isLoading,
//         error
//       }}
//     >
//       <div
//         style={{
//           direction: layoutConfig.direction,
//           fontFamily: layoutConfig.font,
//           minHeight: '100vh'
//         }}
//       >
//         {children}
//       </div>
//     </TranslationContext.Provider>
//   );
// };