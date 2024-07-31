import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const DynamicHelmetProvider = ({ title, description, keywords, image }) => {
  const [helmetData, setHelmetData] = useState({
    title: title || document.title,
    description: description || document.querySelector('meta[name="description"]')?.content || '',
    keywords: keywords || '',
    image: image || '',
  });

  useEffect(() => {
    setHelmetData({
      title: title || document.title,
      description: description || document.querySelector('meta[name="description"]')?.content || '',
      keywords: keywords || '',
      image: image || '',
    });
  }, [title, description, keywords, image]);

  useEffect(() => {
    document.title = helmetData.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = helmetData.description;
    }
    // Puedes agregar más lógica para actualizar otros meta tags aquí
  }, [helmetData]);

  return (
    <Helmet>
      <title>{helmetData.title}</title>
      <meta name="description" content={helmetData.description} />
      <meta name="keywords" content={helmetData.keywords} />
      <meta property="og:image" content={helmetData.image} />
      {/* Otros meta tags que necesites */}
    </Helmet>
  );
};

export default DynamicHelmetProvider;
