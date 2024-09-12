import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

// Request permission to use notifications
export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('Expo Push Token:', token);

  return token;
}

// Handle received notifications
export function setupNotificationListeners() {
  Notifications.addNotificationReceivedListener(notification => {
    console.log('Notification received:', notification);
  });

  Notifications.addNotificationResponseReceivedListener(response => {
    console.log('Notification response received:', response);
  });
}
