/*
 * Author  Luke.Lu
 * Date  2023-09-25 14:56:25
 * LastEditors  Luke.Lu
 * LastEditTime  2023-12-15 11:43:52
 * Description
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
