import { useEffect, useState } from 'react';

const useCurrentLocation = (options = {}) => {
    const [error, setError] = useState();
    const [location, setLocation] = useState();

    useEffect(() => {
        if(!navigator.geolocation) {
            setError('Geolocalización NO soportada.')
            return
        }

        navigator.geolocation.getCurrentPosition(handleSucces, handlerError, options)
    }, [options]);

    const handleSucces = position => {
        const { latitude, longitude } = position.coords

        setLocation({ latitude, longitude })
    }

    const handlerError = error => {
        setError(error.message)
    }

    return { location, error }
}

export default useCurrentLocation;
