export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
  },

  USERS: {
    GET_ALL_USERS: "/api/users",
    GET_USER_BY_ID: (userID) => `/api/users/${userID}`,
    CREATE_USER: "/api/users",
    UPDATE_USER: (userID) => `/api/users/${userID}`,
    DELETE_USER: (userID) => `/api/users/${userID}`,
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data",
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data",
    GET_ALL_TASKS: "/api/tasks",
    GET_TASK_BY_ID: (taskID) => `/api/tasks/${taskID}`,
    CREATE_TASK: "/api/tasks",
    UPDATE_TASK: (taskID) => `/api/tasks/${taskID}`,
    DELETE_TASK: (taskID) => `/api/tasks/${taskID}`,

    UPDATE_TASK_STATUS: (taskID) => `/api/tasks/${taskID}/status`,
    UPDATE_TODO_CHECKLIST: (taskID) => `/api/tasks/${taskID}/todo`,
  },

  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks",
    EXPORT_USERS: "/api/reports/export/users",
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image",
  },
};
