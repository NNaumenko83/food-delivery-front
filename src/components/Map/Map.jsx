import { useEffect, useState } from 'react';
import {
    GoogleMap,
    LoadScript,
    Marker,
    DirectionsService,
    DirectionsRenderer,
} from '@react-google-maps/api';
// import { useOrder } from '../../hooks/contextOrder';
// import {
//     /* getShopsById */ getAddressByLocation,
// } from '../../services/apiBackend';
import { GOOGLE_MAPS_API_KEY } from '../../constant/googleKeys';
// import styles from './Map.module.scss';
import { useGeolocated } from 'react-geolocated';

const Map = (/* { setAddress, setLocation } */) => {
    // const { order } = useOrder();

    const [response, setResponse] = useState(null);
    const [locationBuyer, setLocationBuyer] = useState();
    console.log('locationBuyer:', locationBuyer);
    const [locationStore, setLocationStore] = useState();
    console.log('locationStore:', locationStore);

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
                //     String(locationBuyer.lng)
                // );
                // console.log('addr:', addr);
                // setAddress(addr);
            } catch (Error) {
                // setAddress('');
            }
        };

        load();
    }, [locationBuyer /* setAddress, setLocation */]);

    useEffect(() => {
        const load = async () => {
            try {
                // const { location } = await getShopsById(order.shop, controller);

                // const arrLocation = location.split(',');

                setLocationStore({
                    lat: 51.46993065494816,
                    lng: 31.501830359078916,

                    // lat: Number(arrLocation[0]),
                    // lng: Number(arrLocation[1]),
                });
            } catch (Error) {
                setLocationStore({
                    lat: 50.46993065494816,
                    lng: 30.501830359078916,
                });
            }
        };

        load();
    }, []);

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
        if (e.latLng?.lat() && e.latLng?.lng()) {
            setLocationBuyer({
                lat: e.latLng?.lat(),
                lng: e.latLng?.lng(),
            });
            setResponse(null);
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
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
            </LoadScript>
        </div>
    );
};

export default Map;
