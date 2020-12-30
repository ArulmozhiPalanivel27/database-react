import { EMPLOYEE_PROFILE_URL } from '../assets/config/apiConfig';

export const ACTION_TYPES = {
     EMPLOYEE_PROFILE: "EMPLOYEE_PROFILE",
     GET_EMPLOYEE_PROFILE_SUCCESS:"GET_EMPLOYEE_PROFILE_SUCCESS",
     GET_EMPLOYEE_PROFILE_FAILED:"GET_EMPLOYEE_PROFILE_FAILED",
     CREATE_EMPLOYEE_PROFILE_SUCCESS:"CREATE_EMPLOYEE_PROFILE_SUCCESS",
     CREATE_EMPLOYEE_PROFILE_FAILED:"CREATE_EMPLOYEE_PROFILE_FAILED",
     UPDATE_EMPLOYEE_PROFILE_SUCCESS:"UPDATE_EMPLOYEE_PROFILE_SUCCESS",
     UPDATE_EMPLOYEE_PROFILE_FAILED:"UPDATE_EMPLOYEE_PROFILE_FAILED",
     DELETE_EMPLOYEE_PROFILE_SUCCESS:"DELETE_EMPLOYEE_PROFILE_SUCCESS",
     DELETE_EMPLOYEE_PROFILE_FAILED:"DELETE_EMPLOYEE_PROFILE_FAILED",

}
 
export function searchEmployeeProfile() {
    return {
        types: [ACTION_TYPES. EMPLOYEE_PROFILE, ACTION_TYPES. SEARCH_EMPLOYEE_PROFILE_SUCCESS, ACTION_TYPE. SEARCH_EMPLOYEE_PROFILE_FAILED],
        payload: {
            request: {
                method: 'GET',
                url: EMPLOYEE_PROFILE_URL.SEARCH
               
            }
        }
    }
}

export function getEmployeeProfile(id) {
    return {
        types: [ACTION_TYPES. EMPLOYEE_PROFILE, ACTION_TYPES. GET_EMPLOYEE_PROFILE_SUCCESS, ACTION_TYPE. GET_EMPLOYEE_PROFILE_FAILED],
        payload: {
            request: {
                method: 'GET',
                url: EMPLOYEE_PROFILE_URL.GET
              
            }
        }
    }
}


export function createEmployeeProfile(id) {
    return {
        types: [ACTION_TYPES. EMPLOYEE_PROFILE, ACTION_TYPES. CREATE_EMPLOYEE_PROFILE_SUCCESS, ACTION_TYPE. CREATE_EMPLOYEE_PROFILE_FAILED],
        payload: {
            request: {
                method: 'POST',
                url: EMPLOYEE_PROFILE_URL.POST
              
            }
        }
    }
}




export function updateEmployeeProfile(id) {
    return {
        types: [ACTION_TYPES. EMPLOYEE_PROFILE, ACTION_TYPES. UPDATE_EMPLOYEE_PROFILE_SUCCESS, ACTION_TYPE. UPDATE_EMPLOYEE_PROFILE_FAILED],
        payload: {
            request: {
                method: 'PUT',
                url: EMPLOYEE_PROFILE_URL.PUT
              
            }
        }
    }
}


export function deleteEmployeeProfile(id) {
    return {
        types: [ACTION_TYPES. EMPLOYEE_PROFILE, ACTION_TYPES. DELETE_EMPLOYEE_PROFILE_SUCCESS, ACTION_TYPE. DELETE_EMPLOYEE_PROFILE_FAILED],
        payload: {
            request: {
                method: 'DELETE',
                url: EMPLOYEE_PROFILE_URL.DELETE
              
            }
        }
    }
}