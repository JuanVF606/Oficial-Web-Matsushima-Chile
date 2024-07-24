import React, { useEffect, useState } from 'react';
import { fetchGalleryById } from '../../services/api';
import { useParams } from 'react-router-dom';

const GalleryDetail = () => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const data = await fetchGalleryById(id);
        setGallery(data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!gallery) return <p>Gallery not found</p>;

  return (
    <div>
      <h2>{gallery.name}</h2>
      <p>{gallery.description}</p>
      <h3>Media Items</h3>
      <ul>
        {gallery.media_items.map(mediaItem => (
          <li key={mediaItem.id}>
            {mediaItem.media_type === 'image' ? (
              <img src={mediaItem.file} alt={mediaItem.title} style={{ width: '300px' }} />
            ) : (
              <video width="300" controls>
                <source src={mediaItem.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{mediaItem.title}</p>
            <p>{mediaItem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryDetail;
