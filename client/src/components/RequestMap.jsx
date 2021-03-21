import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import React, { useState, useEffect } from "react";
// https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=<>
/* https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=h2s3a6 */
 
function RequesterMarker(props) {
 const map = useMap();
 
 return (
   <Marker
     position={props.position}
     eventHandlers={{
       click: () => {
         map.flyTo(props.position);
       },
     }}
   >
     <Popup>{props.description}</Popup>
   </Marker>
 );
}
 
export default function RequestMap(props) {
 
 let center = [parseFloat(props.centerlat), parseFloat(props.centerlong)];
 
 const [requestList, setRequestList] = useState([]);
 useEffect(() => {
   // console.log("inside use");
 
   axios
     .get("http://localhost:8000/requests")
 
     .then((res) => {
       console.log("line 35 leaflet", res.data);
       setRequestList(res.data);
       // console.log("this is rsponse", res);
     })
     .catch((err) => {
       console.log("error leaflet line 40", err);
     });
 }, []);
 // console.log("check this out", elderList);
 
 // const trythisout = elderList.map((requester) => (
 //   <RequesterMarker
 //     position={[parseFloat(requester.lat), parseFloat(requester.long)]}
 //     description={requester.full_name}
 //   />
 // ));
console.log(requestList)
 return (
   <div id="mapid">
     <MapContainer
       abc={123}
       center={center}
       zoom={13}
       scrollWheelZoom={true}
     >
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={center}>
         <Popup> this is you {props.centername}</Popup>
       </Marker>
       {/* <Marker position={[45.779699, -79.44734]}>
         <Popup>this is you</Popup>
       </Marker> */}
       <RequesterMarker
         position={[39.779699, -80.44734]}
         description={"anything"}
       />
       {/* <Marker position={[39.779699, -80.44734]}>
         <Popup>this is you</Popup>
       </Marker> */}
       <RequesterMarker
         position={[45.779699, -79.44734]}
         description={"toronto"}
       />
 
       {requestList.map((requester) => (
         <RequesterMarker
           position={[parseFloat(requester.lat), parseFloat(requester.long)]}
           description={requester.task_description}
         />
       ))}
       {/* {trythisout} */}
 
       {/* {props.requesters.map((requester) => (
         <Marker position={[parseFloat(requester.lat), parseFloat(requester.long)]}>
           <Popup>{requester.task_description}</Popup>
         </Marker>
       ))} */}
 
       {/* <Marker position={[51.505, -0.09]}>
         <Popup>
           A pretty CSS3 popup. <br /> Easily customizable.
         </Popup>
       </Marker> */}
     </MapContainer>
   </div>
 );
}
 
