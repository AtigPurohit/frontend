
import dfpOrigin from "commercial/modules/messenger/dfp-origin";

export const postMessage = (message: {}, targetWindow: WindowProxy, targetOrigin: string | null | undefined): void => {
  targetWindow.postMessage(JSON.stringify(message), targetOrigin || dfpOrigin);
};