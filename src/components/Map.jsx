import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker,Popup, useMap } from "react-leaflet";
import icon from '/src/images/icon-location.svg'
import L from 'leaflet'
/* eslint react/prop-types: 0 */



export const Map = (props) => {
  
  // const [map, setMap] = useState(null)
  const [pos, setPos] = useState([32, 32]);

  useEffect(() => {
    if(props?.fetched) {
      setPos([props?.lat,props?.lng])
    }
  },[props])

  const Component = () => {
    const map = useMap();
    map.setView(pos)
  }
  const LeafIcon = L.Icon.extend({
    option: {
    },
  })
  const newIcon = new LeafIcon({
    iconUrl: icon,
    iconSize: [36,36]
  })

  return (
    <MapContainer className="z-0" position={!props.fetched ? [36.91019527160444, 30.687093213227005] : [props?.lat, props?.lng]} zoom={13} center={!props.fetched ? [36.91019527160444, 30.687093213227005] : [props?.lat, props?.lng]} style={{height: '450px', width: 'screen'}} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={!props.fetched ? [36.91019527160444, 30.687093213227005] : [props?.lat, props?.lng]} icon={newIcon}>
      <Popup>
        {props?.data?.isp}
      </Popup>
    </Marker>
    <Component/>
  </MapContainer>
  );
};

export default Map;
