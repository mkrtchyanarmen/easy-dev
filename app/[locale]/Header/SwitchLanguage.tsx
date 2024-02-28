"use client";

import { useChangeLocale } from "@/locales/client";

const SwitchLanguage = () => {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  return (
    <>
      <button type="button" onClick={() => changeLocale("en")}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale("ru")}>
        RU
      </button>
    </>
  );
};

export default SwitchLanguage;
