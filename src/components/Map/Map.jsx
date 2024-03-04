import { useEffect, useState } from 'react';
import {
    GoogleMap,
    Marker,
    DirectionsService,
    DirectionsRenderer,
} from '@react-google-maps/api';

import { useGeolocated } from 'react-geolocated';
import { useSelector } from 'react-redux';
import { selectShop } from '../../redux/shopSlice';

const Map = () => {
    const [response, setResponse] = useState(null);
    console.log('response:', response);
    const shop = useSelector(selectShop);
    const [directionsKey, setDirectionsKey] = useState(0);

    const [locationBuyer, setLocationBuyer] = useState();
    console.log('locationBuyer:', locationBuyer);
    const [locationStore, setLocationStore] = useState();

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        console.log('response in useEffect', response);
    });

    useEffect(() => {
        console.log('useEffect:AAAAAAAAAAAA');
        if (isGeolocationAvailable && isGeolocationEnabled && coords) {
            setLocationBuyer({
                lat: coords.latitude,
                lng: coords.longitude,
            });
        }
    }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

    useEffect(() => {
        const controller = new AbortController();

        const load = async () => {
            try {
                // const { location } = await getShopsById(order.shop, controller);

                // const arrLocation = location.split(",");
                setLocationStore({
                    lat: 50.46993065494816,
                    lng: 30.501830359078916,
                });

                // setLocationStore({
                //   lat: Number(arrLocation[0]),
                //   lng: Number(arrLocation[1]),
                // });
            } catch (Error) {
                setLocationStore({
                    lat: 50.46993065494816,
                    lng: 30.501830359078916,
                });
            }
        };

        load();

        return () => {
            controller.abort();
        };
    }, [shop]);

    const directionsCallback = response => {
        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response);
            }
        }
    };

    // eslint-disable-next-line no-unused-vars
    const onLoad = marker => {};

    const onClick = e => {
        console.log('Click detected!');
        if (e.latLng?.lat() && e.latLng?.lng()) {
            setLocationBuyer({
                lat: e.latLng?.lat(),
                lng: e.latLng?.lng(),
            });
            setResponse(null);
            setDirectionsKey(prevKey => prevKey + 1);
            console.log('Response cleared:', response);
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                center={locationStore}
                zoom={13}
                onClick={onClick}
            >
                {locationBuyer && (
                    <Marker onLoad={onLoad} position={locationBuyer} />
                )}

                {locationStore && (
                    <Marker onLoad={onLoad} position={locationStore} />
                )}

                {!response && locationStore && locationBuyer && (
                    <DirectionsService
                        options={{
                            destination: locationStore,
                            origin: locationBuyer,

                            travelMode: 'WALKING',
                        }}
                        callback={directionsCallback}
                    />
                )}
                {response && (
                    <DirectionsRenderer
                        key={directionsKey}
                        options={{
                            directions: response,
                        }}
                        routeIndex={0}
                    />
                )}
                {!response && (
                    <DirectionsRenderer
                        key={directionsKey}
                        options={{
                            directions: { routes: [] },
                        }}
                        routeIndex={0}
                    />
                )}
            </GoogleMap>
        </div>
    );
};

export default Map;
