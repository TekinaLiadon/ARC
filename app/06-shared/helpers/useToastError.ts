export function useToastError() {
  const toast = useToast();

  const { t } = useI18n();

  function add(error: Error | string) {
    if (typeof error !== Error) error = error.data?.message;

    toast.add({
      color: "error",
      description: error,
      title: t("invalid.title"),
      icon: "i-rpg-surprised-skull",
    });
  }
  return {
    add,
  };
}
