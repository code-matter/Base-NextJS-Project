import { Button } from "antd";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main className="main">
      <Button>{t("title")}</Button>
    </main>
  );
}
