import React, { memo, useState } from 'react';

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from '@react-google-maps/api';

import { Marker as IMarker } from '@types';
import { EVENT_MARKER, PHARMACIES_MARKERS } from '@config';

const CovidMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState<IMarker | undefined>(
    undefined,
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: `100%`,
        height: `500px`,
        borderRadius: `5px`,
      }}
      center={{ lat: 48.848, lng: 2.35 }}
      zoom={15}
      options={{
        disableDefaultUI: true,
        mapId: `1c7adef5c96a9e82`,
      }}
    >
      {PHARMACIES_MARKERS.map((marker, idx) => (
        <Marker
          title={marker.name}
          position={marker.position}
          key={idx}
          onClick={() => setSelectedMarker(marker)}
        />
      ))}
      <Marker
        title={EVENT_MARKER.name}
        position={EVENT_MARKER.position}
        icon="http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png"
      />
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.position.lat + 0.0015,
            lng: selectedMarker.position.lng,
          }}
          onCloseClick={() => setSelectedMarker(undefined)}
        >
          <div>
            <h2>{selectedMarker.name}</h2>
            <p>{selectedMarker.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(CovidMap);
