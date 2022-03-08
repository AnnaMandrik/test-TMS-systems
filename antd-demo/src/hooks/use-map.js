import {useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';


const ZOOM = 13;
const LAYER_TITLE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


function useMap(mapRef) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if(mapRef.current !== null && map === null) {
      const thisMap = new Map(mapRef.current, {zoom: ZOOM});
      const layer = new TileLayer(LAYER_TITLE, {attribution: LAYER_ATTR});
      thisMap.addLayer(layer);
      setMap(thisMap);
    }
  }, [mapRef, map]);
  return map;
}
export default useMap;