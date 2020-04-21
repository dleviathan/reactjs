import React from "react";
import {Switch} from "antd";
import "antd/dist/antd.css";

export type SettingStatus = 'on' | 'off';

export interface NotificationSettingItemState {
    id: number,
    label: string,
    state: SettingStatus
}

interface NotificationSettingItemProps {
    notification: NotificationSettingItemState,
    onChange: (noti: NotificationSettingItemState, checked: boolean) => void;
}

export class NotificationSettingItem extends React.Component<NotificationSettingItemProps, NotificationSettingItemState> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className='ant-col-6'>
                <h5>{this.props.notification.label}</h5>
                <Switch checked={this.props.notification.state === 'on'}
                        onChange={(e) => this.props.onChange(this.props.notification, e)}/>
            </div>
        );
    }
}
