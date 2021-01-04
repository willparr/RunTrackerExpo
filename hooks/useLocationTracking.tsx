import { useState, useRef, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location'
import { EventRegister } from 'react-native-event-listeners';
import * as TaskManager from 'expo-task-manager';
import { useCache } from './useCache';
const LOCATION_TASK_NAME = 'background-location-updates'
const LOCATION_EVENT_NAME = 'location-event'

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }: { data: any, error:any }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      EventRegister.emit(LOCATION_EVENT_NAME, locations)
      // do something with the locations captured in the background
    }
  });

const useLocationTracking = (initialState = {}) => {
    const [location, setLocation] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const {cache, setCache} = useCache()
    const countRef = useRef<NodeJS.Timeout>()

    function registerRun(){
        //set the cache 
    }

    async function start(){
        console.debug('location tracking started')
        const permission = await isTrackingAllowed()
        if(permission !== 'granted'){
            //set an error here
        }
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.BestForNavigation
        })
        listenForLocationChanges()
        setIsActive(true)
    }

    function isReceivingUpdates(){
        return Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME)
    }

    function listenForLocationChanges(){
        EventRegister.addEventListener(LOCATION_EVENT_NAME, (locationEvent) => {
            const location = locationEvent[0]
            console.debug('location-event: ', location)
        })
    }

    async function stop(){
        setIsActive(false)
        await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
    }

    return { startTracking: start, stopTracking: stop, location, isActive }
}

async function isTrackingAllowed(){
    const {status} = await Permissions.askAsync(Permissions.LOCATION)
    return status
}

export default useLocationTracking