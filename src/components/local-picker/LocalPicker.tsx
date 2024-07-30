import { Button } from "antd";
import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";

type Props = {
  locale: string;
};

const LocalPicker = ({ locale }: Props) => {
  return (
    <Link href={`/${locale === "fr" ? "en" : "fr"}`}>
      <Button>{locale === "fr" ? "en" : "fr"}</Button>
    </Link>
  );
};

export default LocalPicker;
