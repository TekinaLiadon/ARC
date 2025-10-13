export type UseToastErrorReturn = {
  add(error: Error | string): void;
};

type Toast = {
  color: string;
  description: Error | string;
  title: string;
  icon: string;
}
export function useToastError(): UseToastErrorReturn {
  const toast = useToast();
  const { t } = useI18n();

  function add(error: Error | string): void {
    if (typeof error !== Error) error = error.data?.message;

    const toast: Toast = {
      color: "error",
      description: error,
      title: t("invalid.title"),
      icon: "i-rpg-surprised-skull",
    }
    toast.add(toast);
  }
  return {
    add,
  };
}
