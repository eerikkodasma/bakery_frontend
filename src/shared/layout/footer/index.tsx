import MainFooter from "@/shared/layout/footer/components/main";
import SecondaryFooter from "@/shared/layout/footer/components/secondary";

export default function Footer() {
  return (
    <footer className="bg-background-50-default place-items-center p-2">
      <div className="container">
        <MainFooter />
        <SecondaryFooter />
      </div>
    </footer>
  );
}
