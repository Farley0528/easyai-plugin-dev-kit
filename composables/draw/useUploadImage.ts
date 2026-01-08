import { useFileDialog } from "@vueuse/core";

export const useUploadImage = (
  updateImageFn: (file: File) => void,
  maxSizeMB: number = 5,
) => {
  // 打开文件选择对话框
  const { open, onChange } = useFileDialog({
    accept: "image/*",
    multiple: false,
  });

  const handleUploadFile = async (files: File[] | FileList) => {
    const file = files?.[0];
    if (!file) return;

    const sizeMB = file.size / (1024 * 1024);

    if (sizeMB > maxSizeMB) {
      return;
    }

    updateImageFn(file);
  };

  // 监听选择的文件
  onChange(async (files) => {
    if (files) {
      await handleUploadFile(files);
    }
  });

  // 拖拽上传
  const handleDrop = (event: DragEvent) => {
    if (event.dataTransfer?.files) {
      handleUploadFile(event.dataTransfer.files).then();
    }
  };

  // 粘贴上传
  const handlePaste = (event: ClipboardEvent) => {
    const file = Array.from(event.clipboardData?.items || [])
      .find((item) => item.type.startsWith("image/"))
      ?.getAsFile();
    if (file) handleUploadFile([file]).then();
  };

  return {
    open,
    handleDrop,
    handlePaste,
  };
};
