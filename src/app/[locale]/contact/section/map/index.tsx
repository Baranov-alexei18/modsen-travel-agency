import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './styles.module.scss';

export const MapSection = () => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapboxgl.accessToken || typeof window === 'undefined' || map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [27.59249, 53.93432],
      zoom: 14,
    });
  }, []);

  return <div className={styles.wrapper} ref={mapContainer} />;
};
