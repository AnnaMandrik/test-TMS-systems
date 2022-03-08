import { useEffect, useRef, useState } from 'react';
import { Map, TileLayer, Icon} from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {POINT_NAME} from '../../const';


const ZOOM = 10;
const DEFAULT_LAT_LNG = [59.96813, 30.31653]; 
const LAYER_TITLE =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function useMap(mapRef, center) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if(mapRef.current !== null && map === null) {
      const thisMap = new Map(mapRef.current, {center, zoom: ZOOM});
      const layer = new TileLayer(LAYER_TITLE, {attribution: LAYER_ATTR});
      thisMap.addLayer(layer);
      setMap(thisMap);
    }
  }, [mapRef, map, center]);
  return map;
}

                            
function MapPage() {
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_LAT_LNG);

  
  useEffect(() => {
    if (map) {
      POINT_NAME.forEach((point) => {
        const [lat, lng] = [point.lat, point.lng];
        const marker = L.marker([lat, lng]);
        const icon = new Icon(
          {
            iconUrl: './img/pin.svg',
            iconSize: [30, 40],
            iconAnchor: [15, 40],
        });
        marker.setIcon(icon);
        marker.addTo(map);
      });
    }
  }, [map]);
   
return <div style={{height: '100%'}} ref={mapRef}></div>;

}

export default MapPage;