/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 14:50:09
 * FilePath: /react-vite-cli/src/layouts/BroadcastProvider/index.tsx
 * Description:
 */
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

let message: MessageInstance, notification: NotificationInstance, modal: Omit<ModalStaticFunctions, 'warn'>;

const BroadcastProvider = () => {
  //用useApp方法使组件可以获取同一context,以下三个组件均已全局注入，无需import即可直接调用
  const staticFunction = App.useApp();

  message = staticFunction.message;
  notification = staticFunction.notification;
  modal = staticFunction.modal; //该modal主要用于用户确认的信息交互，全站更广泛使用的Modal请使用'@/utils/hooks/useModal'

  return null;
};

export { message, notification, modal };
export default BroadcastProvider;
