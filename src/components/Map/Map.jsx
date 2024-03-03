import { useEffect, useState } from 'react';
import {
    GoogleMap,
    Marker,
    DirectionsService,
    DirectionsRenderer,
} from '@react-google-maps/api';

// import { getShopsById, getAddressByLocation } from '../../services/apiBackend';

import { useGeolocated } from 'react-geolocated';

const Map = (/* { setAddress, setLocation } */) => {
    const [response, setResponse] = useState(null);

    const [locationBuyer, setLocationBuyer] = useState();
    const [locationStore, setLocationStore] = useState();

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        if (isGeolocationAvailable && isGeolocationEnabled && coords) {
            setLocationBuyer({
                lat: coords.latitude,
                lng: coords.longitude,
            });
        }
    }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

    useEffect(() => {
        if (!locationBuyer) return;

        // setLocation(`${locationBuyer.lat}, ${locationBuyer.lng}`);

        const load = async () => {
            try {
                // const addr = await getAddressByLocation(
                //     String(locationBuyer.lat),
                //     String(locationBuyer.lng),
                // );
                // setAddress(addr);
            } catch (Error) {
                // setAddress('');
            }
        };

        load();
    }, [locationBuyer /* setAddress, setLocation */]);

    useEffect(() => {
        const controller = new AbortController();

        const load = async () => {
            try {
                // const { location } = await getShopsById(order.shop, controller);

                // const arrLocation = location.split(',');

                // setLocationStore({
                //     lat: Number(arrLocation[0]),
                //     lng: Number(arrLocation[1]),
                // });

                setLocationStore({
                    lat: 51.46993065494816,
                    lng: 31.501830359078916,
                });
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
    }, []);

    const directionsCallback = response => {
        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response);
            }
        }
    };

    const onLoad = marker => {
        console.log('marker: ', marker);
    };

    const onClick = e => {
        if (e.latLng?.lat() && e.latLng?.lng()) {
            setLocationBuyer({
                lat: e.latLng?.lat(),
                lng: e.latLng?.lng(),
            });
            setResponse(null);
        }
    };

    useEffect(() => {
        return () => {
            setResponse(null);
        };
    }, []);

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
                        options={{
                            directions: response,
                        }}
                        routeIndex={0}
                    />
                )}
            </GoogleMap>
        </div>
    );
};

export default Map;
