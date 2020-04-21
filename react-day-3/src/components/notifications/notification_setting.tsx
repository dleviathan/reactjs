import React, {useState} from "react";
import {
    NotificationSettingItem,
    NotificationSettingItemState,
    SettingStatus
} from "./setting_item/notification_setting_item";

/**
 * Use Hook
 *
 * @constructor
 */
export function NotificationSetting() {
    const initialState: NotificationSettingItemState[] = [
        {
            id: 1,
            label: "Email Notification",
            state: 'off',
        },
        {
            id: 2,
            label: 'Push Notification',
            state: 'on',
        },
        {
            id: 3,
            label: 'Monthly Reports',
            state: 'off',
        },
        {
            id: 4,
            label: 'Quarter Reports',
            state: 'off',
        },
    ];
    const [notifications, setNotifications] = useState(initialState);

    function handleChange(notif: NotificationSettingItemState, checked: boolean) {
        const newNotifications = notifications.map((n) => {
            if (n.id === notif.id) {
                return {
                    ...n,
                    state: (checked ? 'on' : 'off') as SettingStatus,
                };
            }
            return n;
        });
        setNotifications(newNotifications);
    }


    return (
        <div>
            <p>Setting Notifications:</p>
            {
                notifications.map((notification) => {
                    return (
                        <div key={notification.id}>
                            <NotificationSettingItem onChange={handleChange} notification={notification}/>
                        </div>
                    );
                })
            }
        </div>
    );
}