import element from "./message.vue";
import { createVNode, render } from "vue";

export interface MessageOptions {
  message: string;
  type?: {
    type: "success" | "info" | "warning" | "error";
    default: "info";
  };
  duration?: {
    type: number;
    default: 3000;
  };
  center?: {
    type: boolean;
    default: false;
  };
  dangerouslyUseHTMLString?: {
    type: boolean;
    default: false;
  };
  showClose?: {
    type: boolean;
    default: false;
  };
  onClose?: () => void;
}

export default function message(options: MessageOptions) {
  if (typeof options === "string") {
    options = {
      message: options as string,
    };
  }

  const userClose = options.onClose;
  const opts = {
    ...options,
    onClose: () => {
      userClose && userClose();
    },
  };

  // vue3写法，需要用虚拟节点
  const div = document.createElement("div");
  // 渲染组件
  const vnode = createVNode(element, opts);
  vnode.props!.onDestroy = () => {
    render(null, div); // render会移除dom，注意：此方法在vue2中无法使用
  };
  // 挂载到div上
  render(vnode, div);
  // 加入页面
  document.body.appendChild(div.firstElementChild!);
}
