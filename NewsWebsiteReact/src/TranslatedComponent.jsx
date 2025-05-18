
// import React, { useContext, useState } from 'react';
// import { TranslationContext } from './contexts/TranslationContext';

// const TranslatedComponent = () => {
//   const { language, layoutConfig, translateText, changeLanguage } = useContext(TranslationContext);
//   const [translatedContent, setTranslatedContent] = useState('');

//   const handleTranslate = async () => {
//     const text = "Hello world";
//     const translation = await translateText(text, language);
//     setTranslatedContent(translation);
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('es')}>Spanish</button>
//       <button onClick={() => changeLanguage('ar')}>Arabic</button>
//       <button onClick={() => changeLanguage('ja')}>Japanese</button>
      
//       <button onClick={handleTranslate}>Translate</button>
      
//       <p>{translatedContent}</p>
      
//       {/* Example of layout adjustment */}
//       <div style={{ textAlign: layoutConfig.direction === 'rtl' ? 'right' : 'left' }}>
//         This text alignment changes based on language direction
//       </div>
//     </div>
//   );
// };

// export default TranslatedComponent;